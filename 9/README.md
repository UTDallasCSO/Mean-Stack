###What it does
* Takes input text from the user
* Saves said text in a variable - chunk by chunk 
* Outputs this text to the browser window.

####How to run:
* Having installed all the dependencies, type in `node index.js` on the terminal
* It is listening for requests on port 8888 of the localhost

####Notes:
* Compared to previous folder '../8', server.js is significantly different. It accepts the users input as the user inputs it - chunk by chunk and aggregates the data in a variable. 
* __router.js__'s "route" function is called when it is detected that the user has entered all the data.
* "querystring" is required in __requestHandler.js__ and is used to read the text entered by the user.

