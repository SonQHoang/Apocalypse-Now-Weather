# Apocalpyse Weather Now

Welcome to Apocapylse Weather Now, affectionately referred to as AWN by its users. This is the one stop shop for all the latest apocalyptic weather live across the world! 

Whether you are stopping by to bolster your knowledge or just want to see know and see that you aren't alone in experiencing the world as we know it today, come check it out live at:

https://awn-render.onrender.com

## Index
- Features List (Add Photos as the site comes together)
- Database Schema
- Frontend and Backend Routes
- Future Implementation Goals
- Links to contact you (LinkedIn)
- Contact Us Further

-- SHOULD ADD SNIPPET OF WEBSITE ONCE ITS DONE --

## Getting Started

1. Install dependencies

```
pipenv install -r requirements.txt
```

Create a .env file based on the example with proper settings for your development environment

Make sure the SQLite3 database connection URL is in the .env file

Replace the value for SCHEMA with a unique name, making sure you use the snake_case convention.

Get into your pipenv, migrate your database, seed your database, and run your Flask app

pipenv shell
flask db upgrade
flask seed all
flask run
To run the React App in development, checkout the README inside the react-app directory.
