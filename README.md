# WDI Project 4: MERN Stack

## Deployment

When deploying the app for the first time ensure you have run the following steps in order:

1. `heroku create`
1. `heroku addons:create mongolab`
1. `heroku config:set NPM_CONFIG_PRODUCTION=false`
1. `git push heroku master`
1. `heroku open`

After that simply `git commit` and `git push heroku master`.

## Important

Ensure that you add any relevant environment variables to heroku with `heroku config:set`, eg:

`heroku config:set AWS_BUCKET_NAME=wdi-project-4`

<h2>Final Project Planning</h2>

![](planning.JPG)

1. wireframe
2. planning schema and models 
3. setting up routes and controllers for user and resource
4. seeding data
5. testing routes in insomnia
6. testing backend with mocha/chai
7. review schemas with a view to efficient functionality 


The App
Inspired by websites such as BarChick, The Nudge, TripAdvisor, I set out to create a website where users could post their favourite bars, restaurants, cafes etc and view others' favourites as well. The remit would be global and this way if you are planning a trip somewhere or a friend asks for recommendations you have a ready built resource to share with others. 

Technologies Used:


Challenges:


Learning:



Still to implement:



