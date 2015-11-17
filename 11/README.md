##Running a Node.js webserver with the Express engine and Jade HTML preprocessor installed.

####Table of Contents
* [Installing Nodejs & Getting the app ready](README.md#installing-nodejs--getting-the-app-ready)
* [Installing and setting up MongoDb](README.md#installing-and-setting-up-mongodb)
* [MongoDB installation, running and uninstallation(Application agnostic, general setup)](README.md#mongodb-installation-running-and-uninstallation)

#####Installing Nodejs & Getting the app ready
######1. Install Nodejs
```
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm
```
######2. Install Express Generator
Express generator is a scaffolding app that puts out a skeleton for Express-based websites
```
sudo npm install -g express-generator
```
The -g flag makes the installation global and thus express-generator should be now available in your path.
######3. Create an Express project
```
express nodetest1
```
Install the dependencies:
```
cd nodetest1 && npm install
```
Run the app:
```
SET DEBUG=nodetest1b:* & npm start
```
Edit your dependencies so that package.json looks like:
```
"dependencies": {
    "body-parser": "~1.12.4",
    "cookie-parser": "~1.3.5",
    "debug": "~2.2.0",
    "express": "~4.12.4",
    "jade": "~1.9.2",
    "morgan": "~1.5.3",
    "serve-favicon": "~2.2.1",
    "mongodb": "~2.0.33",
    "monk": "~1.0.1"
}
```
Install dependencies:
```
npm install
```
#####Installing and setting up MongoDb
######4. Preparing the database:
```
mkdir data && npm start
```
Thats it!

Test if this will all work by going to
```
localhost:3000
```
#####MongoDB installation, running and uninstallation
####Install MongoDB
#####1. Import the public key used by the package management system
```
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
```
#####2. Create a list file for MongoDB
```
echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list
```
#####3.  Reload local package database
```
sudo apt-get update
```
#####4. Install the MongoDB packages
```
sudo apt-get install -y mongodb-org
```
Installation is complete.

####Run MongoDB
#####1. Start MongoDB
```
sudo service mongod start
```
#####2. Verify that MongoDB has started successfully
Verify that the mongod process has started successfully by checking the contents of the log file at /var/log/mongodb/mongod.log for a line reading
```
[initandlisten] waiting for connections on port <port>
```
####3. Stop MongoDB
```
sudo service mongod stop
```
####4. Restart MongoDB
```
sudo service mongod restart
```
###Uninstall MongoDB
####1. Stop MongoDB
```
sudo service mongod stop
```
####2. Remove packages
```
sudo apt-get purge mongodb-org*
```
####3. Remove Data directories
```
sudo rm -r /var/log/mongodb
sudo rm -r /var/lib/mongodb

```
Reference to the tutorial
-------------------------
Go to tutorial directly by executing bash file like so: 
```
./gototutorial.sh
``` 
in your terminal.
*Link-> http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/*
