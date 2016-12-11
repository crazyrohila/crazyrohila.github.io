---
layout: post
title: "Rackspace Cloud Database Automated Backups"
date: 2015-04-20
tags: rackspace, cloud services
---

Rackspace cloud database don't have facility to backup database automatically/periodically. They have this feature in development; progress can be seen at [Automated Backups for Cloud Databases](https://feedback.rackspace.com/forums/250746-cloud-hosting/suggestions/5976741-automated-backups-for-cloud-databases "Automated Backups for Cloud Databases").

But for now, while they develop this feature, we need backup of system for any unfortunate future situation. While using Rackspace Cloud DB, I wrote a simple backup and restore (in emergency cases) scripts, which can be used for quick and automatic backups.

###Backup Script:

```bash
#! /bin/bash

# Variables
# Replace values with Rackspace credentials.
rack_space_host=XXX.rackspaceclouddb.com
rack_space_user=abc
rack_space_pass=efg
rack_space_db=DB_Name

# Pick current time.
curdate=`date "+%m-%d-%H-%M"`;

# Create folder
db_dir='prod_backup-'$curdate;
mkdir $db_dir;

# Dump mysql DB
cd $db_dir && mysqldump -u$rack_space_user -h $rack_space_host -p$rack_space_pass $rack_space_db | bzip2 -c > prod_sql.sql.bz2;

#backup file
sqlzipfile='prod_sql'.sql.bz2;

#log the status
if [ -f "$sqlzipfile" ]
  then
    echo $curdate': sql dump stored at '$sqlzipfile\n >> /var/www/log/backup/backup.log
else
  echo $curdate': something went wrong; Please check the backup script OR take the back manually.'\n >> /var/www/log/backup/backup.log
fi
```

We can run this script in crontab OR continuous integration tool (jenkins) and automate our backups. We can initiate a crontab job by using `crontab -e` in terminal and it will open editor, so give the path of script and set time. eg. `0 */4 * * * ~/backup_db.sh >> crontab.log` will run script in every four hour. [more details about cronjob](https://help.ubuntu.com/community/CronHowto "Cron HowTo").

**Note:** Please change the Rackspace credentials in scripts. Give the executable permission to scripts by `chmod +x backup_db.sh`.


###Restore Script:

Usually we don't need a restore script, because we don't do restore very frequently. Still we should have script in place, so in some odd time we can restore database very quickly.

This script takes one parameter, which will be path to folder where database backup is stored. This is related script to above *backup script*, so we should give parameter as path to folder which has been created by above backup script.

```bash
#! /bin/bash

# Variables
rack_space_host=XXX.rackspaceclouddb.com
rack_space_user=abc
rack_space_pass=efg
rack_space_db=DB_Name

if [ -d $1 ]
  then
    cd $1;
else
  echo "Please enter the folder path where backup is stored."
  read folder;
  cd $folder;
fi

# Unzip file
bunzip2 -k prod_sql.sql.bz2
if [ -f "prod_sql.sql" ]
  then
    # Restore DB
    mysql -u$rack_space_user -h $rack_space_host -p$rack_space_pass $rack_space_db < prod_sql.sql
else
  echo "sql file not found"
fi
```

These are very basic scripts, which can reduce our effort. You are very much welcomed to modify and improve; Code is available on Github Gists.

* [Rackspace Cloud DB Backup Script](https://gist.github.com/crazyrohila/821a64a9db37c9d25d65 "Backup Script")
* [Rackspace Cloud DB Restore Script](https://gist.github.com/crazyrohila/182db17c8339d8f5d8fc "Restore Script")
