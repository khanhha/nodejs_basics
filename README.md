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