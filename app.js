"use strict";

window.addEventListener("load", initApp);

function initApp() {
    console.log("app.js is running");
}

// Define variables for DOM elements 
const featureGames = document.getElementById("feature-games");
const newGames = document.getElementById("new-games");
const popularGames = document.getElementById("popular-games");

// Create a funtion to fetch game data from a server and populate the game list
function populateGameLists() {
    // Fetch game data from server
}