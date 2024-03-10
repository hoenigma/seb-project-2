# Project 2 - Find an Amiibo

## Description

Was given the task to create a muiltipage app from a public API of our choice. We have been learning react over the last couple of weeks and this porject was used to bring the skills we have learnt together.
It was decided to use the AmiiboAPI from https://www.amiiboapi.com/

## Deployment Link

[Find Amiibo](https://main--chic-hamster-878f6b.netlify.app/)

## Getting Starter Code

Given packages for VITE and React.
The index.html and main.tsx were already set up.
To open the packages, open intergrated terminla and run npm i.

## Timeframe & Working Day

For this project I had the pleasure of working with Micheal Broadbent and we had just under 2 days to complete this project. Below is a link to Micheal's github repo:
https://github.com/MBroadbent95/seb-project-2

## Technologies Used

- React
- Bulma
- Amiibo API (https://www.amiiboapi.com/)

## Brief

The task was to use a public API of our choosing and create a multipage app that shows the data in a user-friendly way. (TRY FIND THE GUIDE FOR PROJECT 2)

## Planning

We started by created a wire frame of what we want the app to look like. This would be 3 seperate pages:

Home Page:

![Home](Images-ReadMe/Framelink-Home.png)

Character List Page:

![CharacterList](Images-ReadMe/Framelink-CharacterList.png)

Character Show Page:

![CharacterShow](Images-ReadMe/Framelink-CharacterShow.png)

We then made pseudocode saying what is needed for each page. This included what pages were linked, functions, data from the api and an idea of the style.
After this a Roadmap was created to make sure we were keeping on track over the 2 days.

Road Map:

![RoadMap](Images-ReadMe/Roadmap.png)

## Build Process

The start of the process was creating each component and setting up some boiler plate for each the components.
In the App.tsx the BrowserRouter was imported and the links to the Home component and CharacterList component were giving routes.

### Navbar:

The Navbar was created first as it will go on each page so the other components will need to be designed to include the Navbar. Using Bulma we followed the framework for making a Navbar and included a logo, link to home page and link to the character list page.

![Navbar] (Images-ReadMe/Navbar.png)

### Homepage:

Used Hero for the title and added a click link to go to the CharacterList page on the container.
The background was added through the CSS and the container was styled with a hover function so user knows where to click.

### Character List: (TO DO)

Firstly a useState was created to store and show the data.
Then the data was received from the API using a fetch function
To get the data from the array to display, the data had to be targetted by data.amiibo. This was worked out by using console logs to see how one charcacter's information can be displayed and then applying it to the CharacterList function.

![Getting-data-from-API] (Images-ReadMe/Fetch-api.png)

On character list, the information to show was just going to be the name and image which lead to creating the CharacterThumbnail componenet.

The search function was added to helkp people search for a certain character on the page>
This was achiweved by filtering the data from the api to only show those which matched the value put into the search bar.
The search bar value was read by a handle cahnge fucntion (shown in image below)

![Search-function] (Images-ReadMe/Search-filter2.png)

The filter function was then put into the JSX and .map so it would look through all ther data on the api.

For the style, columns was decided to present this data and the example from Bulma was used to set this out.

### Character Thumbnail:

The thumbnail for the characater list page was creating using a card style from Bulma. The thumbnail has only the name and the image to keep a simple look for the character list page.

When a card is clicked, it to take the user to another page showing more detials of the amiibo.
This was achieved by adding a link to the class of columns which linked to CharacrterShow/${name} to target the name of the amiibo.

### Character Show:

The data from the API was fetched using the same way as in Character List and adding the specific name of the characrter (&name=${name}).

The character shows information for:

- Character Name
- Amiibo Series the character is from
- Game Series the character orginates from
- Type of Amiibo, amiibo has multiple variations including figure and cards.
- Region Release Date, showing the date released from 4 regions.

![Character show code](Images-ReadMe/characterShow-datashown.png)

## Challenges

Fetching the data at first was challanging due to the object being amiibo : [].
We havn't seen this type of data so had to think how to target it in a situation we were familiar with.
overcame by using .amiibo in the fetch function.

Bulma styling. Only leanring about Bulma a few days before the project. It was a challange to understand the wording of it and what classes were needed.Overcame by googling and asking other colleagues how they used it.

Images, had problems exporting to website fixed via index.d.ts

## Wins (add pic of spinner)

Getting the data and displaying it
Producing the thumbnails
Adding the spinner

![Spinner](Images-ReadMe/Spinner.png)

Filtering and mapping search

## Key Learning

Bringing together what I've learnt from React over the last couple of weeks.
Using a CSS Framework.
How to deoply on a 3rd party

## Bugs

Characters that have varients or a similar name (e.g. cloud and cloud player 2 or mario/dr mario,) have a second image. This is because in the API when fetching the name it includes all chracters that have the name in the url.
To fix this would need to see if the data can target just what is typed in the name for the fetch function.

## Future Improvements

Extend to include all amiibos.
Add a random button to get a random amiibo.
