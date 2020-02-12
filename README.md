This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Introduction

This project is a sample application designed to assess an individuals coding style and skill.  

## Getting Started

### Prerequisites
- Visual Studio Code (other IDEs may be used however VSCode is the preferred IDE)
- Node 8.16.0 or later installed
- Git 
- (Optional) Docker if you prefer to develop in a remote container in VSCode.
- (Optional) React Developer Tools and Redux DevTools Chrome extensions 

### Installing
Clone the project to your local machine.  Install all the dependencies with npm or npx (depending on your version of Node). <br />
`npm install`

### Using Docker in VSCode (Optional)
This project has a .devcontainer folder that has a DockerFile and VSCode devcontainer settings.  To use this you should be using the latest version of VSCode.  See [https://code.visualstudio.com/docs/remote/containers](https://code.visualstudio.com/docs/remote/containers) for instructions on running this in a container.

## Create a branch
For the remainder of the tasks, create a branch from the master branch in the format `FirstName-LastName`

## Running the application
`npm start`<br />
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

# Tasks
This is a movie database that allows you to search for movies based on title / genre / and keyword.  For this exercise we will only be focusing on the search by title capability.  If you cannot finish all the tasks, submit any work you have completed to be reviewed. 

1. Using the Poster component, update the Movie modal component to use the Poster component to display the movie poster with the description.   _Hint_:The image is supplied in the existing JSON as `poster_path`.  For information on the movie database API, visit [https://www.themoviedb.org/documentation/api](https://www.themoviedb.org/documentation/api)

2. Create a new component for movie descriptions (overview) and replace the description in the modal with the newly created component.

3. Using the moviedb.org API, retrieve a list of production companies for the selected movie and add display the production companies in the modal.  This task will require creating a redux action/reducer/selector.  

# Submitting your code
Once you've finished, zip up your code (src folder only) and email it to the recruiter.  There is no need to create a pull request.
