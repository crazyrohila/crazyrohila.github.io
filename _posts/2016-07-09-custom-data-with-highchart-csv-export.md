---
layout: post
title: "Export custom column in highchart csv"
date: 2016-07-09
tags: highchart, csv-export, highchart-csv, highchart-csv-export
categories: featured
---

Highcart is great library for creating charts. There is export plugin which provides feature to export chart data as csv file. In last project I need to compute a new column when exporting data from chart.

We can do that by manipulating the series of chart. Below is example code:

```js

var series = [{
  name: 'A',
  points: [{
    x: 10,
    y: 30
  },{
    x: 13,
    y: 50
  },{
    x: 15,
    y: 25
  }],
  options: {
    stickyTracking: true
  }
}];
chart.series = series;
console.log(chart.getCSV());

```

Full jsfiddle exmaple can find <a href="http://jsfiddle.net/crazyrohila/akrayjtq" target="_blank">here</a>. (http://jsfiddle.net/crazyrohila/akrayjtq/)
