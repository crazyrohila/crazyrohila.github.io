---
layout: post
title: "Drupal Upgrade with drush"
date: 1856-12-10 21:18:56
tags: drupal, drush, drush-upgrade, drupal-upgrade

---

Currently I was working on a project, in which I have to upgrade a drupal 6 site to drupal 7. So I have start with [http://drupal.org/project/drush_sup][drush_sup] module and nice [article][drupal6-to-drupal7]  by moshe weitzman. drush\_sup is not a drupal module, Its a drush script. You can install it by using following command. `drush dl drush\_sup`. Before start upgrade process please update your drupal6 to latest version and disable all custom modules and theme. To update any module, you can use drush. example:- If you want to update only core drupal, use `drush up drupal` If you want to update views, use `drush up views`. When you are on latest version of drupal6, then start upgrade process. First we have to create aliases for drupal site. You can find documentation [Drush aliases][drush_aliases]  OR you can just create a file aliases.drushrc.php in /etc/drush/ (or your installed drush directory). Now open this file and create alias for your drupal site.

{% highlight php startinline %}
$aliases['dev'] = array(
     'root' => '/drupal/directory/path',
     'uri' => 'your-site-url',
 );
{% endhighlight %}

This alias is for target site (drupal 7). So just put any name and url relative to that. suppose you want to store upgraded drupal7 into "test" folder, So create alias for this test folder, not for already installed d6. Now run the upgrade command from drupal 6 folder, which you want to upgrade to D7. `drush site-upgrade @dev`. (dev is alias name, we have created earlier.) First command will generate a list of contrib modules which were used in drupal 6 version. This list will tell which modules are available and which are not available in drupal7. If everything is fine then start upgrade process and choose all prompt for messages. Now wait for prompt and enter options when it asks. If you lost in between run that command again, It will resume from last stage. The whole process of upgrading will take time and lots of input from user. So pay attention during whole process. After whole process its time to migrate fields in drupal7. So enable content\_migrate module and go to `your-site/admin/structure/content\_migrate`. Select all **available fields** and migrate. Now scroll down and see if their are any unavailable fields. If there are unavailable fields then download dependent module and enable them, these fields will become available fields. Migrate all the fields. Now go to `admin/content`. You will see all your data. **Note:** drush\_sup only provide drupal6 to drupal7 migration.


[drush_sup]: http://drupal.org/project/drush_sup  "drush_sup"
[drupal6-to-drupal7]: https://www.acquia.com/blog/use-drush-upgrade-drupal-6-drupal-7  "drupal6-to-drupal7"
[drush_aliases]: http://drush.ws/examples/example.aliases.drushrc.php  "drush_aliases"
