---
layout: post
title: "My coding style guide"
date: 2013-12-11 11:12:13
tags: code style, style guide
categories: featured
---

**I should have a common style guide.**

So Here I am listing some common things, I follow/use.

Tools
-----
First of all tools, I use.

1. [Ubuntu][ubuntu] as operating system. I love **Terminal**.

2. [Sublime][sublime] as Editor

3. [Git][git] as version control system

4. [Scss][scss] with [Compass][compass] for css preprocessor

5. [css-lint][csslint], [css-comb][csscomb], [prefix-free][prefixfree] as css tools

6. [html5js][html5js], [respondjs][respondjs], [selectivizrjs][selectivizrjs] as polyfills for IE support

7. [Drupal][drupal] with [Drush][drush] as backend system

8. [Zen][zen] as Drupal theme


General guide
-------------
1. I use spaces (2 white spaces) instead of tabs.

2. I use simple/easy-to-do solutions over complex ones.

3. I google things because I think solution would be available already. Why waste time on writing something, which is available.

4. I love to use/follow new approaches/methods, so these things can change over time (but not completely).


HTML Guide
----------

Most of time I work on drupal project, so html is provided by drupal. But If I have to write html then I use most of html5 tags and BEM method for naming convention for semantic structure.
eg. {% highlight html %}
<body>
  <header>
    <div class="block block--site-info"><span class="site\_\_logo">Site Logo</span><span class="site\_\_name">Site Name</span></div>
    <nav class="navigation navigation--main">
      <ul class="menu">
        <li class="menu\_\_item"><a class="menu\_\_link" href="">menu1</a></li>
        <li class="menu\_\_item"><a class="menu\_\_link" href="">menu2</a></li>
      </ul>
    </nav>
  </header>
  <main>This is main content</main>
  <footer>
    <div class="block block--copyright">$₹</div>
    <nav class="navigation navigation--footer">
      <ul class="menu">
        <li class="menu\_\_item"><a class="menu\_\_link" href=""></a></li>
        <li class="menu\_\_item"><a class="menu\_\_link" href=""></a></li>
      </ul>
    </nav>
  </footer>
</body>{% endhighlight %}

CSS Guide
---------

I don't write pure css. I always use scss with compass. I use lots of css3 properties, so I need polyfills for older browsers.
eg. {% highlight scss %}
.block {
  width: 100px;
  height: 100px;
  background: red;
  &.block--modifier {
    background: green;
  }
  .block__title {
    font-size: 1.6em;
  }
}
{% endhighlight %}

Drupal Guide
------------

Drupal is not only CMS anymore, It's Framework now. I believe we can do lots of work by contributed modules, so I don't have to worry about maintenance of code. But When I have write code, I like to use drupal API most of time. Some time I prefer custom queries. eg IF we have to show node-titles then we shouldn't use node\_load() we should query from db directly, It cheap.

I commonly use views, ctools, fields, features, context, media, webfrom, wysiwyg modules. They do lots of work on every drupal site. I also use some theming specific module like fences, block\_class, menu\_attributes etc.

In drupal templating, I write complex code in template.php files and return variables for specific tpl files.


[ubuntu]:        http://www.ubuntu.com "ubuntu"
[git]:           http://git-scm.com "git"
[sublime]:       http://www.sublimetext.com "sublime"
[drupal]:        https://drupal.org "drupal"
[scss]:          http://sass-lang.com "scss"
[compass]:       http://compass-style.org "compass"
[csslint]:       http://csslint.net "css lint"
[csscomb]:       http://csscomb.com "css comb"
[prefixfree]:    http://leaverou.github.io/prefixfree "prefix free"
[html5js]:       https://code.google.com/p/html5shiv "html5 js"
[respondjs]:     http://responsejs.com "respond js"
[selectivizrjs]: http://selectivizr.com "selectivizr js"
[drush]:         http://drush.ws "drush"
[zen]:           https://drupal.org/project/zen "zen"
[idiomaticcss]:  https://github.com/necolas/idiomatic-css "idiomatic css"
