# comments:
D3.js library still doesn't support reactive programming that is why I decided to choose react-dnd library (author Dan Abramov) for drag & drop.
D3 library was used only for creating grid. There is another library react-d3 which is partially rewritten D3 library. It works well with react but due to strict requirement to used D3.
On the first look basing on commits history you'll get impression that I started from general components (Assignment->(Sidebar/MainView)->(Chart/Grid)->Square->Marker) but it just result that I committed in the end. 
In reality I started from small components to general in such order: Marker->Square->(Chart/Grid)->(Sidebar/MainView) -> Assignment -> and add it to routing.

# frontend-assignment
Fork this seed project on Github to create your assignment.

## Description
In this project, you will be creating a drag and drop system that allows users to place markers on a coordinate grid.
Markers should snap to the closest X and Y cordinate.

## Requirements
Create a webpage that has a main content area with a left sidebar.
In the sidebar, create a list of 4 markers.
Each marker displays the X and Y coordinate they should be placed on.
In the main content area, use the D3 library to create a 10x10 grid.
Below the grid, create a "check" button that is disabled until all items are dragged onto the grid.
After the user clicks the "check" button, display correct or incorrect on the screen.

## Includes
React, Redux, Webpack, KOA, Babel, ESLint

## Installation
```node
//  Install local dependencies
npm install
```

## Build Tasks
```node
// Start dev server
npm start

//  Start dev server with nodemon
npm run dev

// Run tests
npm run test

// Run linter
npm run lint
```