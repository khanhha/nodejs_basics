Below are the short descriptions of the basic nodejs applications contained in this repository.

# nodes-app
this is a simple app that allows users to add,remove, search or list their notes, which is stored in the Json file.

below are instructions to test the application.

```bash
cd notes-app
node app.js add --title title_0 --body body_0 #add a new title with body to the database
node app.js list #list all the titles
node app.js read --title title_0 #read body of a title
node app.js remove --title title_) #remove a title
```
# weather-app
This experiment is about writing http request to query for geography and weather information.
User will input a place name like "hanoi", from which a query will be emitted to find the corresponding
longtitude and latitude. This location information will serves as inputs to another HTTP request for query for weather summary.
```bash
cd weather-app
node app.js hanoi
```

# web-server
This experiment shows the structure of a simple website that serves both dynamic and static contents. 

The dynamic content is served through the combination of Express and the template library __hbs__. HBS templates define the static structure of the response and the placement for dynamic content. In the real time, the server will fill in these varibles depending on requirement from browers. To help reuse the HBS templates, we also  use HBS partials for header and footer so that we dont have to rewrite them for every subpages.

A small client script is also run to submit request to server when user presses a button and then display the response in HTML forms. 

```bash
cd web-server
node app.js
start the brower and go to page: 127.0.0.0:3000
```  

# project manager app
- Mongoose:
  - Mongoose Schema is used define models for Project and User. A project is owned by an user and a user can manage projects. 
  - The "virtual" property in Mongoose is utilized to model the referecen between "Project" and "User", so it will be much easier to query for their relationships. 
  - Before an user is removed, "pre" method of "remove" is called to remove all projects that depend on that user.