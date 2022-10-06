# Social Network API
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 

## Description
In this back end application, a social network api is being replicated using MongoDB, Express.js, and the Mongoose ODM. API routes are run using a tool such as Insomnia.

A user is able to create a new "account" by inputting a username and email and add friends. A total count automatically gets updated with each new friend being added. The user is also able to create a post to voice their thoughts, and their friends are able to react to it by adding their own comments. A count is automatically updated to keep track of how many comments a user's thought post has.

A [Project Showcase](https://drive.google.com/file/d/13-j7GVr7gEKV7Tp0_N_9JVFAh9Ttyjnh/view) is available to see how this application performs.

#### Screenshot
![Screenshot](/public/assets/images/screenshot.png)

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License(s)](#licenses)
4. [Questions](#questions)

## Installation
Since this project is the back end of the application only, it cannot be deployed. To use this application, clone the repo and open the project. In terminal, execute the command `npm i`. This will install all the dependencies required for this application to work.

## Usage
Once dependencies are installed, execute `npm start` in the terminal to start the server. Use an application such as `Insomnia` to execute CRUD operations. The following are the API routes used:
Users: 
- Get all users: `http://localhost:3001/api/users` with `GET` method
- Get user by id: `http://localhost:3001/api/users/<USERID>` with `GET` method
- Create new user: `http://localhost:3001/api/users` with `POST` method with the following as the JSON body:
```
{
	"username": "enterUserNameHere",
	"email": "enterEmailHere@randomEmail.com"
}
```
- Update user by id: `http://localhost:3001/api/users/<USERID>` with `PUT` method with any of the above key value pairs
- Update user by id: `http://localhost:3001/api/users/<USERID>` with `DELETE` method

Friends:
- Add new friend: `http://localhost:3001/api/users/<USERID>/friends/<USER2ID>` with `PUT` method with the following as the JSON body:
- Delete friend: `http://localhost:3001/api/users/<USERID>/friends/<USER2ID>` with `DELETE` method

Thoughts:
- Get all thoughts: `http://localhost:3001/api/thoughts/` with `GET` method
- Get thought by id: `http://localhost:3001/api/thoughts/<THOUGHTID>` with `GET` method
- Create new thought: `http://localhost:3001/api/thoughts/` with `POST` method with the following as the JSON body:
```
{
	"thoughtText": "enterTextHereMax280Chars",
	"username": "enterUserNameHere"
	"userId": "enterUserIdHere"
}
```
- Update thought: `http://localhost:3001/api/thoughts/<THOUGHTID>` with `PUT` method
- Delete thought: `http://localhost:3001/api/thoughts/<THOUGHTID>` with `DELETE` method

Reactions:
- Create new reaction: `http://localhost:3001/api/thoughts/<THOUGHTID>/reactions` with `POST` method with the following as the JSON body:
```
{
    "reactionBody": "enterTextHere",
    "username": "enterUserNameHere"
}
```
- Delete reaction: `http://localhost:3001/api/thoughts/<THOUGHTID>/reactions/<REACTIONID>` with `DELETE` method

## License(s)
MIT

## Questions
My name is Arslan Tahir, the creator of this project. If you have any issues, comments, concerns, or questions regarding this project, feel free to contact me at tahir.arslan@gmail.com.

If you would like to check out my other projects, feel free to explore my !(GitHub Page)[https://github.com/tahir-arslan/].