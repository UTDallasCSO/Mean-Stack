#!/bin/bash
if which xdg-open > /dev/null
then
  xdg-open http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/
elif which gnome-open > /dev/null
then
  gnome-open http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/
fi
