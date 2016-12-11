---
layout: post
title: "Setup submile with drupal code sniffer and autofixer"
date: 2016-03-12
tags: drupal, phpcs, phpcbf, drupal code sniffer, sublime
categories: featured
---

This is simple snippet to add php codesniffer and autofixer commands in sublime build. So whenever we are on some file we can simply run command+b to run sniffer and get result in sublime console and can run command+shift+b to choose between sniffer and autofixer.

For this we must have php code sniffer installed. If not then installed it by composer as:

```json
composer install -g coder
```

Once we have it installed successfully, we can test it by try running phpcs by `~/.composer/vendor/bin/phpcs --help`.

When everything looks fine then download the sublime-build file from https://gist.github.com/crazyrohila/ef53a7b896bf6d5fce2980c576a27172 and put this in User Package folder of sublime (in mac it could be found at `~/Library/Application\ Support/Sublime\ Text\ 3/Packages/`). If you are not sure where the Package directory is then go to `Preference->Browse Packages`.

Now restart sublime and run command+shift+b , you should see `DrupalCoder` and `DrupalCoder - Run` as option.
