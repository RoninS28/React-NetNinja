To create a react app run the following command
    <!--?  npx create-react-app dojo-blog -->

to run the app run the following command
    <!--?  npm run start -->

node modules folder contains all our dependencies for the project
it generally is a huge folder and many a times not uploaded on sites such as github to reduce time
so, if you do not have node_modules folder present, you run the following command <!--?  npm install -->
so that it looks up in package.json folder and downloads the required dependencies

app.js returns a html like code, but not html. it is jsx. It is similar to html templates. 
What happens is that babel in the background takes this jsx code and renders it into html code

a component is most often a function which we return and it returns jsx template

<!-- ----------------------------------------------------------------------------------------------------------------- -->
Lesson 16 [Using JSON Server]
we created data/db.json file in which we stored 2 objects.
We ran <!--?  npx json-server --watch data/db.json --port 8000 --> 
so that the data server runs on port 8000

We have created a local api with the following  endpoints

/blogs           GET         Fetch all blogs
/blogs/{id}      GET         Fetch a single blog
/blogs           POST        Add a new blog
/blogs/{id}      DELETE      Delete a blog