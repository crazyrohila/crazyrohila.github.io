---
layout: post
title: "Ten Performance Commandments for Drupal"
date: 2013-05-06 21:18:56
tags: drupal, performance
---

Drupal is slow. All of us know. But as they say humans have a tendency to aim for better and when we are better, aim for excellence. So out of human tendency while searching for improving the scope of performance, I came across few points which needs to be taken care of while developing a new Drupal site.

**Ten commandments**
--------------------

1. Enable caching and aggregation for css and js. Include css in head and js in bottom of template file.

2. Never write heavy code in tpl files. Template files are only for rendering html, not for heavy DB queries and complex php code.

3. Don't use php filter in custom block. Use hook\_block () for custom blocks.

4. Minimize HTTP Requests. This has great impact on performance. Use [image sprite][image sprites] OR [data-uri's][data-uri] for images.

5. Some useful module are performance killer like admin\_menu, devel, context\_ui, views\_ui. So uninstall them on production site.

6. Use long expire header in htaccess. eg.{% highlight php startinline %}
ExpiresByType text/javascript "access plus 2 month"
ExpiresByType text/css "access plus 2 month"
ExpiresByType image/gif "access plus 2 years"
ExpiresByType image/jpeg "access plus 2 years"
ExpiresDefault A2592000
{% endhighlight %}


7. Some of these tools could be useful. [Varnish][varnish reverse proxy server], [APC][alternative php caching], [mysql-tunner][mysql-tunner].

8. Maria db is way faster than mysql. Drupal.org is using this.

9. And If you have extra money, you can use CDN (Content Delivery Network).

10. If you are dealing with huge drupal site, you must take a look at [this video][How huge drupal site is huge ?]

[image sprites]: http://css-tricks.com/css-sprites/  "image sprites"
[data-uri]: http://css-tricks.com/data-uris/  "data-uri"
[varnish reverse proxy server]: https://www.varnish-cache.org/about  "varnish reverse proxy server"
[alternative php caching]: http://www.php.net/manual/en/intro.apc.php  "alternative php caching"
[mysql-tunner]: http://www.ubuntugeek.com/mysqltuner-check-your-mysql-server-performance.html  "mysql-tunner"
[How huge drupal site is huge ?]: http://vimeo.com/55287602  "How huge drupal site is huge ?"
