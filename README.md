# Weekly-Workout-Planner
Flatiron school, phase 1 project:  a SPA designed to add songs to a custom playlist. 

## Inspiration
This is an application created to practice some newly earned javascript skills to create an application to add songs to a playlist from the top 10 songs in itunes.  
The goal was to be able to easily create a playlist and access it using a simple single page application. 

### Add songs to playlist and remove songs
 - user can choose which song from the top 10 to add to their playlist
 - they can add upto 10 songs any order
 - given that there are a few songs, the user can submit any song with the artist in the submit form in orde to be considered for addition to their playlist

 ### Song changes
 -since the top 10 songs change every week, they will be able to change their playlist based on the top 10.

  ## Development Set up &  Database refresh
 Clone the repository into your local environment
 Request an API key in one of two ways: 
 1) Request a free API key directly from rapidapi.com by signing up or logging in to your own account:   
 2) Contact Sylvia (for folks that know her) directly to borrow one that expires in 24 hours.  

 In the index.js file, at the top with the global variables, replace the value of configAPI with your API key string
 ```
// global constants
const configAPI = 'your-api-key-string'
 ```
Start up your json server with
```
json-server --watch db.json
```
Open the index.html file in your browser


## Contributing
- Fork the repository: https://github.com/sylviaakoth/phase-1-project
- Clone to your local environment
- Add & Commit your changes
- Push to the branch *Don't forget to hide the API Key!
    - How to: https://dev.to/ptprashanttripathi/how-to-hide-api-key-in-github-repo-2ik9
- Create a new Pull Request

## License
MIT License
Copyright (c) 2022 Sylvia Akoth