#### Author: ampourgh | Version: 1.0.0 | Last Modified: 2021

# DOG BREED LIST

## Getting Started
* NPM (or Yarn) install and start


## Folder Structure
* The main page, where the input handler and grid layout is displayed, is located in src/pages, and a banner and footer component have been placed in src/components.
* The redux store, including the actions, api fetch request, dispatch and types are in src/state. Most of the API setup is in the middleware - src/action-creators/index.ts.
* Styles can be found in /src, with _global housing the color/size styling declarations.


## Challenges
* Did not see an API call for getting both all the breeds and a random image of each breed in the documentation or Symfony routes, outside of gettng a maximum of 50 images for all the breeds. Instead I went with fetching all the breeds first, followed by making a call to the individual breeds. The objects were cached to local storage. 

### Acknowledgments
* The Webpack/TypeScript/Sass was boilerplate I set up earlier this year.