# Microservice to Create a New User

This microservice is used to create a new user with name, username, and email. The user information is stored on a MongoDB database.

The program is currently written to run on localhost:5000. To create a new user, send a POST request with "name":name, "uname":username, 
and "email":email to localhost:5000/register. This will call the API which will then send the information provided to the MongoDB.

The program will print status logs to the console informing you of success or errors.


<img width="1250" alt="UML-sequence" src="https://user-images.githubusercontent.com/57654189/218624033-1f2eda42-62bd-48d3-8281-bfc6fc556f1c.PNG">
