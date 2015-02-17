---
layout: post
title: "Sync drupal database from server"
date: 2013-08-15 12:01:00
tags: drupal, drush, ssh, dbsync
---


When we need database from server to local system, we use backup\_migrate module. If we have server information then we can do better. we have to run some commands and db would be downloaded, unzipped and old database would be replaced with new db. So...

1. Download database. {% highlight bash %}ssh [username]@[server] "drush -r DRUPAL\_ROOT\_DIR sql-dump|bzip2 -c" > db.sql.bz2{% endhighlight %}

2. Now Unzip this bz2 file. {% highlight bash %}bunzip2 db.sql.bz2{% endhighlight %}

3. Delete old database. {% highlight bash %}mysqladmin -f -u [mysql-user] -p[password] drop [db\_name]{% endhighlight %}

4. Import new (recently downloaded) database. {% highlight bash %}mysqladmin -u [mysql-user] -p[password] create [db\_name] && mysql -u [mysql-user] -p[password] [db\_name] < db.sql{% endhighlight %} that's all.

Now we can remove mysql file by "rm db.sql".

OR
--

Download [https://gist.github.com/crazyrohila/6157902][Drupal DBsync from server]  script and edit server & mysql information and then run script. This script will ask for server password for ssh login. we can skip that step by putting our public key (~/.ssh/id_rsa.pub) in authorized\_keys file on server, more info about it can be found here [ssh login without password][ssh login without password]

[Drupal DBsync from server]: https://gist.github.com/crazyrohila/6157902   "Drupal DBsync from server"
[ssh login without password]: https://blogs.oracle.com/jkini/entry/how_to_scp_scp_and  "ssh login without password"
