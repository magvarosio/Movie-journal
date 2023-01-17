<a id="idtext"></a>

# 🎬 Movie Journal 🎬 

![image11](https://user-images.githubusercontent.com/112773333/212883677-68a7e75a-6e41-4e9a-abf7-348d18b2c6c8.png)


## Table of Contents
- [Concept](#concept)
- [Technologies Used](#technologies-used)
- [Brief](#brief)
- [Installation instructions](#installation-instructions)
- [Development Process](#development-process)
    - [Planning](#planning)
    - [Developing the Backend](#developing-the-backend)
        - [Seed](#seed)
        - [Models](#models)
        - [Serializers](#serializers)
        - [Views](#views)
        - [Insomnia](#insomnia)
    - [Creating the Frontend](#creating-the-frontend)
        - [Authentication (Frontend)](#authentication)
        - [Search](#search)
        - [Styling](#styling)
- [Wins and Key Learnings](#wins-and-key-learnings)
- [Author](#authors)

## Concept 

I worked on a movie app as a solo project creating my own movie database using data from The Movie Database (TMDB) with approximately 5000 movies. The app is a social media platform for people to share their thoughts about movies they love. I used Django, Python, SQL, Insomnia for the Back End and React, Cloudify, SCSS and React-Bootstrap for the Front End.

This app allows users to browse and search for movies, view movie details, and rate and review movies. 
As a fan of film, I was inspired by the various features of Letterbox and Netflix and wanted to combine them to create a visually appealing and interactive social media platform for film enthusiasts. It took me eight days to complete the project as a solo developer.


## Technologies Used

#### Frontend
* React
* Axios
* React Bootstrap 
* SASS
* CSS3

#### Backend
* Python
* Django
* Django REST Framework 
* PostgreSQL 
* PyJWT
* Axios
* Psycopg2

#### Development Tools
* VScode
* Insomnia
* Git 
* GitHub
* Excalidraw
* Heroku
* Canva
* Google Chrome development tools

## Installation instructions

* Clone or download the repo
* Install the back-end dependencies: 
    run **pipenv** 
* Enter Shell for project: 
    run **pipenv shell**
* Make Migrations:
    **python manage.py makemigrations**
* Migrate:
    **python manage.py migrate**
* Load Seed data for Genres:
    **python manage.py loaddata genres/seeds.json**
* Load Seed data for Movies:
    **python manage.py loaddata movies/seeds.json**
*  Load Seed data for Users:
    **python manage.py loaddata jwt_auth/seeds.json**
* Load Seed data for Comments:
    **python manage.py loaddata comments/seeds.json**
* Start the back-end server: 
    **python manage.py runserver**
* Change into front-end directory: 
    run **cd client**
* Install front-end dependencies: 
    run **npm** 
* Start the front-end server: 
    run **npm start**
    

### Brief 
Build a full-stack application by making your own backend and your own frontend.
Use a Python Django API using Django REST Framework to serve your data from a Postgres database.
Consume your API with a separate frontend built with React.
Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models.
Have a visually impressive design
#### Solo Project
### Build-time
*8 days*


## Development Process


### Planning

I created a plan for the frontend Wireframe after researching the layout of movie websites like Netflix and Letterbox using Excalidraw. I also roughly planned out the Backend on Excalidraw to monitor the tasks I should do each day.

(If you like to see the plan in detail, please press the on image and it will take you to a separate page)


![image14](https://user-images.githubusercontent.com/112773333/212888709-ad93b98e-02c6-4794-9280-d8de91863e8e.png)

![image12](https://user-images.githubusercontent.com/112773333/212888777-72c3e907-4f73-4d7e-8e54-5ec376255326.png)

On the first day, I brainstormed ideas and concepts for the project and decided to create a website similar to Letterbox, but with a user interface like Netflix. I made a basic Wireframe and planned the website’s appearance using Excalidraw. I also created an entity relationship diagram for my database tables and relationships and started each day checking the plan to be sure to hit the deadline. I decided it would be better to have a separate genres Model, this way, I could create a many-to-many relationship with movies, allowing users to search a film on the frontend by genre.

![image1](https://user-images.githubusercontent.com/112773333/212888967-5d29f3ee-28d7-4b8d-a86b-3a962c1b5a11.png)

Then I started working on the backend, setting up the PostgreSQL database, seeding the database, and installing necessary dependencies.
Using Django, I created the 'apps' for the games, media, comments, genres, and authentication, and then wrote the models, URLs, and views for all of them.

## Developing the Backend 

### Seed 

I utilised a script to pull data from TMDB and I seeded my database with 5273 movies from various genres.
This is my database on TablePlus:


![image13](https://user-images.githubusercontent.com/112773333/212889975-389dda78-f8b9-4ef0-bebf-1fe5a9d8b883.png)

### Models

The “app_name.ModelName” specifies the relationship with the foreign table, in this case genres.Genre.

<img width="620" alt="Screenshot 2023-01-17 at 11 42 14" src="https://user-images.githubusercontent.com/112773333/212890298-9734f634-f6d8-4846-af61-c93f8ca4d5d5.png">


### Serializers

After that, I only wrote serializers for each app as needed and added additional RESTful routes and serializers:

![Screenshot 2023-01-17 at 11 43 52](https://user-images.githubusercontent.com/112773333/212890550-43fbff7e-9b65-4094-b778-663947a8365c.png)


Then, I populated by the other models they have a relationship with each model:

![Screenshot 2023-01-17 at 11 44 23](https://user-images.githubusercontent.com/112773333/212890646-78dea435-9143-4237-8916-eac9532dfbe8.png)


### Views

Movies.objects.all() makes a request to the database for all entries in the movies table, and then I populated the movies using PopulatedMovieSerializer.
I decided to request to the database the first 20 movies adding [:20] after Movies.objects.all() because when I worked on the frontend I realised it was time consuming to request all the 5000 movies circa in my database 

![Screenshot 2023-01-17 at 11 45 42](https://user-images.githubusercontent.com/112773333/212890900-c9d8af65-d314-45f5-8339-b9857ee62ebb.png)

![Screenshot 2023-01-17 at 11 46 46](https://user-images.githubusercontent.com/112773333/212891080-f7ff736f-3378-44d5-ae5e-d20dc1e16b04.png)


## Creating the Frontend

### Authentication

Then I began adding a React front end to the project and divided the router and component setup.
I designed the logo and navbar and moved on to the frontend authentication.
I also started styling the homepage, and displayed the movies with a hover effect. The cover scales up when the user is going through each movie.

![image6](https://user-images.githubusercontent.com/112773333/212891282-aad5ef8a-f8a3-40ce-89cb-58ecb05c6e27.png)


 Then I started styling the Login and Register Page using React Bootstrap.

![image3](https://user-images.githubusercontent.com/112773333/212891452-53828052-da44-45d2-acff-e05cb76af7b0.png)
![image10](https://user-images.githubusercontent.com/112773333/212891496-7c13779d-5486-4f23-a3e5-461d9fa1912e.png)

### Authentication 

I utilised JsonWebToken to check the user's validity. This was utilised in conjunction with a secure route that used the token to verify users.

<img width="459" alt="Screenshot 2023-01-17 at 11 51 31" src="https://user-images.githubusercontent.com/112773333/212891994-2ae99aa0-3765-4970-85fd-40abdf011483.png">


### Search 

For the search bar I used React's useEffect hook. 
I added a way to cancel any previous network requests made by the search bar so that it doesn't show old data. This is done using axios.CancelToken.source().
The getMovies function is created to actually get the movie data from the server using axios.get. It takes the search query as part of the URL and includes the cancel token as an option. The movie data is then saved to the component's state and logged to the console.
If there's an error while trying to get the movie data, it logs 'REQ CANCELLED---' and the error message.
The useEffect cleanup function is returned, which cancels the request if the component unmounts or the search query changes.

<img width="989" alt="image7" src="https://user-images.githubusercontent.com/112773333/212892217-3ff3b0b7-72f3-4b55-aba5-2b8abb6595ab.png">

<img width="618" alt="Screenshot 2023-01-17 at 11 55 13" src="https://user-images.githubusercontent.com/112773333/212892660-ec1fafad-e34b-4c5a-858f-c2ff9f251cbe.png">

### Styling

On the final days, I added the comments form and styled all the individual movie info pages, adding the comments and avatars.

<img width="860" alt="image4" src="https://user-images.githubusercontent.com/112773333/212894166-4e0d192a-5e56-4fb5-9553-2706351c3f38.png">

<img width="846" alt="image2" src="https://user-images.githubusercontent.com/112773333/212894192-c5fce1db-4447-40a4-b4c1-79f04f720e88.png">

![image8](https://user-images.githubusercontent.com/112773333/212894240-ab4a6130-f8b2-4f71-8947-e9a667a5b042.png)

### Insomnia

I double-checked all my routes while building them in Insomnia, here are the genres and the comments routes on insomnia:

![image5](https://user-images.githubusercontent.com/112773333/212894459-24ff614a-608d-4bcf-9d01-05115bfe61bd.png)

![image9](https://user-images.githubusercontent.com/112773333/212894373-5756a992-12d0-4cc1-ad6c-529c9cd606ef.png)


## Challenges 

This was my first time building a backend database with Django and Python, so there was a learning curve as I worked to get all the different parts of each app in Django to function properly, such as the models, serializers, views, and URLs. Despite the challenges, going through this process really helped me understand the basics and how Django works.
It was challenging to figure out how to establish the relationships that were necessary for the application to function properly.
I encountered some difficulties when I needed to change models on the back end, but I eventually figured out how to do it effectively by using the commands 'python manage.py makemigrations' and 'python manage.py migrate.' The simplest way I found to sort it was to dump data and reseed it again. I also had to make sure the app was responsive on different screen sizes, particularly on mobile devices. I used a mixture of Bootstrap and SCSS for the styling.


## Wins and Key Learnings 

Python. Being able to apply the JavaScript foundations I'd previously learned to Python helped solidify my comprehension of the language. I'm excited to build more Python applications in the future.

Using relational databases and PostgreSQL. My confidence in creating an application's backend has significantly increased since I started using relational databases and Django and Python.
This was my first time working with relational databases while using Django and Python on the back end, and it really boosted my confidence in my ability to build the back end of an application.

Overall, working on this project allowed me to apply everything I had previously learned and much more. I'm proud of the work I've done and the outcome I came to.

## Future Improvements 

The watchlist and the user profile are two extra features that I would like to add.

## Authors
- LinkedIn - [Margherita (Mag) Varosio](https://www.linkedin.com/in/margherita-varosio/)
- Email - margherita.varosio@gmail.com
 
[Back to the top ⬆️](#idtext)
