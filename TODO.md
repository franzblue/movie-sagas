## Database
- [] create junction table between movies and genre
- [] build GET flow

            <!-- template for junction table -->
<!-- `INSERT INTO "movies_genres" ("movies_id", "genres_id")
      VALUES  ($1, $2);` -->

## App.js
- [] build out components
    - [] List component
        - [] aka homepage
    - [] Details component
        - [x] shows all details, including genres
            - [x] upon click tie together movie.id with movie details
        - HINT you can make GET request for specific movie
        - [x] 'Back to List' button
    - [] Add movie component
        - [] input field for movie title
        - [] input field for movie poster url
        - [] text area for description
        - [] dropdown for genres
            - [] HINT use genres that are in database
        - [] needs two buttons
            - [] 'Cancel' brings user back to home
            - [] 'Save'
                - [] updates database with title and description
                - [] brings user back to home
                - [] HINT look at /api/movie POST route

## Styling
- [] research cards for movie posters on list page
- [] research grids for movie posters on Movie List page

## General Advice!!
- Commit frequently.
- Comment your code!
- Update README with description of project
