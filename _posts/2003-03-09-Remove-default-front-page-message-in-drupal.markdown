---
layout: post
title: "Remove default front page message in drupal"
date: 2000-03-09 10:11:10
tags: drupal, front-page, default message

---

**Remove default drupal message by three methods:-**

Change default front page here. `admin/config/system/site-information`

OR
--

Promote any content on front page.

OR
--

Unset message for front page
{% highlight php startinline %}
if(drupal_is_front_page()) {
  unset($page['content']['system_main']['default_message']);
}
{% endhighlight %}
