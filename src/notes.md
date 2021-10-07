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
<!-- ----------------------------------------------------------------------------------------------------------------- -->
lesson 21 [React Router] 
react router is a dependency/package which we have to externally add to our project.
Command to run is  <!--? npm install react-router-dom@5 --> 5 being the stable version of react
in the eyes of react router, /c is a match for /create since it is a substring of that path
which is why we add the [exact] keyword

Switch component makes sure that only one route is shown at any one given time i.e it acts like a switch case

Router links
react router, instead of sending requests to the server, steps in and acts like an intercept
    so instead of sending requests to the server, it renders the page directly
<!-- ----------------------------------------------------------------------------------------------------------------- -->
Lesson 24 useEffect Cleanup
what happens is that when we quickly switch from add blog to home to again add blog, 
the fetch process is still continuing in the bg when not required. GTo avoid this, we use the AbortController 
what it does is that during fetch, we pass param of abortcontroller's object's signal,
and at the end of useEffect, we return abort() method. Also what happens is that when fetch is not successful, error is thrown.
so in the catch block we check whether the error message is not 'AbortError' ;
This helps in unnnecessar fetching of data for a page when the user has moved on to another page.
<!-- ----------------------------------------------------------------------------------------------------------------- -->
Lesson 25 Router parameters
for dynamic links we put : in front of the variable, and then read the parameter from const { id } = useParams();
<Link to={`blogs/${blog.id}`} > here we use [`] and not [']
