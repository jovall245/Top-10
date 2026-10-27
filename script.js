// JavaScript array: ten example favorites. Edit these to match Julio's actual favorites.
const favoriteThings = [
  "Cars",
  "Working Out",
  "Football",
  "Music",
  "Video Games",
  "Sneakers",
  "Good Food",
  "Traveling",
  "Hanging Out With Friends",
  "Spending Time With Family"
];

// JavaScript for loop: display each item from the array on the webpage.
const favoritesList = document.getElementById("favorites-list");
for (let i = 0; i < favoriteThings.length; i++) {
  const listItem = document.createElement("li");
  const number = document.createElement("span");
  number.className = "number";
  number.textContent = String(i + 1).padStart(2, "0");
  const name = document.createElement("span");
  name.textContent = favoriteThings[i];
  listItem.append(number, name);
  favoritesList.appendChild(listItem);
}
