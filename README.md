# Fighting Frames

Made using The Open Movie Database [OMDb API](https://www.omdbapi.com/), this web game asks you to select the highest user rating between two movies on IMDb.

This is deployed using Netlify to hide my API Key which gave me the opportunity to share it with my mom.
<br>
<br>
[Click me to play!](https://ff.mweatherford.rocks/)
<br>
<br>

# How To Run

This project runs out of the box with [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) installed. If you do not have Live Server, it can be installed by navigating to VS Code Extentions. You can also see the project in action by [Clicking here.](https://ff.mweatherford.rocks/). Have fun!!!

You will also have to get your own API Key at [OMDb API.](https://www.omdbapi.com/) Once you have a key, add a js file called _apiKey.js_ and add the following:

```javascript
export const apiKey = "https://www.omdbapi.com/?apikey=your-api-key";
```

# Requirements Met

**1. Use arrays, objects, sets or maps to store and retrieve information that is displayed in your app.**
<br>
_Arrays are used to get and store API info so 2 random movies can diplay._

**2. Visualize data in a user friendly way. (e.g. graph, chart, etc)**
<br>
_Used Chart.js to diplay bar charts of Box Office Earnings and IMDb Votes within Movie Details._

**3. Retrieve data from a third-party API and use it to display something within your app.**
<br>
_Retriving data from the [OMDb API.](https://www.omdbapi.com/)_

# Wire Frame

<img src='./img/wireframe-imgs/home-page-view.png' width='1000'>
<br>
<img src='./img/wireframe-imgs/home-page-view-mobile.png' width='1000'>
<br>
<img src='./img/wireframe-imgs/modal-view.png' width='1000'>
<br>
<img src='./img/wireframe-imgs/movie-details-view.png' width='1000'>
<br>
