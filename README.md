# Closest to Zero

The brief for this project was - "<i>A company records different temperatures from different climates. The company wants to programmatically know which of these temperatures are closest to 0</i>". In order to achieve this -
- A web application which will take a series of values and return the value which is closest to zero should be created.
- If two numbers are equally close to zero, then the app should consider the lowest positive number closest to zero. 
- A UI must be developed where the user can input values and see the results. 
- The data being input by the user should be validated.
- A chart displaying the user inputs can be displayed so the user can visualize the results.

The live site can be accessed via the following link - 

This code is a simple web application that allows users to input a list of temperatures separated by commas and find the temperature closest to zero. It also displays a bar chart of the input temperatures, with positive numbers colored in orange and negative numbers colored blue.

## How to Build and Run

In order to work on this repository you will first need to clone it.

1 - While in the GitHub repository, click on the green code button.

2 - Copy the link.

3 - In your IDE or local coding environment use the link to open the repository. 

4 - Once your IDE or local coding enviroment has opened the repository you can preview the index.html page.

5 - Alternatively, the deployed project can be run from the live link above.

## Instructions for using the application

1 - Enter a list of temperatures as numbers separated by commas in the input field.

2 - Click the "Find Closest Temperature to Zero" button.

3 - The closest number to zero will be displayed below the button.

4 - A bar chart will be displayed showing the input temperatures, with positive numbers in orange and negative numbers in blue.

## User Experience

### User Stories

    - The user wants to enter a number of temperatures to establish which is closest to zero.
    - The user wants to be able to easily understand and use the application.
    - The user wants the results to be displayed in a manner which is clear to understand and visualize.
      
## Design and Planning

- For this project I wrote down on a notepad what was required as outlined in the above brief. I then broke this down into sections to complete. 
    - Firsty I decided to deveolp a UI using HTML consisting of a clear statement of what the application does, an area where the user can input values, a button to display the results and an area where a bar chart displaying the users inputed values can be shown.
    - I then decided to used javascript to - 
        1. Get the user input and convert to an array.
        2. Handle invalid input.
        3. Find the closest number to zero.
        4. Display the result.
        5. Chart positive and negative numbers.
        6. Add labels to the chart.
    - Finally I used custom CSS to style the application in a manner that ensured it was simple and easy to use, as well as being responsive across different devices.

### Application

- Inital home screen


- Results 


- Empty User Input Validation 


- Invalid User Input Validation



### Colours

- The colours chosen for the bars on the chart are orange (rgba(255, 174, 66, 1)) to represent the positive numbers and blue (rgba(0, 0, 128, 1)) to represent the negative numbers. These colours are also reflected on the syle of the button used to trigger the findClosestToZero function. These colours represent the contrast between hot and cold.

## Features

- Responsive on all devices
- Interactive

## Technologies Used

### Languages Used
- HTML5
- CSS
- JavaScript

### Frameworks, Libraries and Programs Used
- Gitpod
- GitHub
- Git
- Chrome Developer Tools
- Chart.js

## Testing 

### Validator Testing

- HTML
    - No errors or warnings found when validating each HMTL file used in this project via the official W3C Validator.
- CSS
    - No errors found when validating the CSS file used in this project via the official CSS Jigshaw Validator.
- JavaScript
    - No errors were found when passing the javascript file used in this project through the JShint JavaScript Validator.
 
### Responsive Testing

During this projects development, care was taken throughout to ensure that the application would be responsive across all devices. Chrome developer tools was utilised throughout to assist with this.

### Unfixed Bugs

There are no unfixed/unresolved bugs in relation to this project.

## Deployment

The project was deployed to GitHub pages using the following steps...
- Log in to GitHub and locate Github Repository for this project.
- At the top of the Repository locate and select the Settings button.
- Navigate to GitHub Pages Section.
- Under source select the dropdown for None and select Main Branch.
- The browser automatically refreshes.
- The link to the published site can be seen in the GitHub Pages Sections.

## Credits 

- When planning this project I decided to use chart.js to display the bar chart which shows the values input by the user. Prior to this project I had never utilized the chart.js library and used the following to research it - https://www.chartjs.org/docs/latest/

### Content 

- All the content was written by myself as the developer for this project.
