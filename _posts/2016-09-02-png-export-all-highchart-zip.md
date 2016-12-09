---
layout: post
title: "Export (as png) multiple highchart graphs as zip"
date: 2016-09-02
tags: highchart, export-png, highchart-export-zip, highchart-export-png
categories: featured
---

I have a dashboard page with lot of highchart graphs. Highchart allows us to download chart as image. We wanted to download all of them at once in a zip file. So for that, we have used <a target="_blank" href="https://stuk.github.io/jszip" title="jsZip">jsZip library</a> to create zip file and put all the images in that. We can get the svg data of graph and use canvas to convert that in png data URI. Then we can put all the images in zip file and download them.

Code:

```js
var zip = new JSZip();
// Get all the highchart elements
var hc_containers = document.querySelectorAll('.highcharts-container');
if (hc_containers.length) {
  hc_containers.forEach(function(hc, index) {
    // Get the highchart Chart object.
    chart_ele = hc.parentNode;
    var chart = chart_ele.highcharts();
    // Get the svg data from chart.
    var svg = chart.getSVG({chart:{ width: 1040 }});
    svg = "data:image/svg+xml,"+svg;
    // Get the png data URL from svg.
    var src = _get_png_data_uri(svg);
    // Add all the images in zip file.
    zip.file('chart-'+index+'.png', src, {base64: true});
  });
  // Download the file.
  var content = zip.generate({type:"blob"});
  saveAs(content, "charts.zip");
}

/**
 * Get the png file src from given svg.
 */
function _get_png_data_uri(svg) {
  // Create image object.
  var base_image = new Image();
  base_image.src = svg;
  // Create canvas and use draw image on that.
  var canvas = document.createElement('canvas');
  canvas.width = base_image.width;
  canvas.height = base_image.height;
  var context = canvas.getContext('2d');
  context.drawImage(base_image, 0, 0);
  // Convert it to data URL with png type.
  var link = canvas.toDataURL('image/png');
  var src = link.substr(link.indexOf(',') + 1);
  // Send back to URL
  return src;
}
```

Gist is available <a target="_blank" href="https://gist.github.com/crazyrohila/967773281b6c106ef193738e04a71db7" title="Multiple highchart png export as zip">here</a>.
