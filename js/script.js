/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
//array holding the quotes to be displayed randomly
let quotes = [
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    source: "Nelson Mandela",
    citation: "https://blog.hubspot.com/sales/famous-quotes",
    year: "unknown",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    source: "Steve Jobs",
    citation: "https://blog.hubspot.com/sales/famous-quotes",
    year: "unknown",
  },
  {
    quote:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    source: "Oprah Winfrey",
    citation: "https://blog.hubspot.com/sales/famous-quotes",
    year: "unkown",
  },
  {
    quote:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    source: "James Cameron",
    citation: "https://blog.hubspot.com/sales/famous-quotes",
    year: "unkown",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    source: "John Lennon",
    citation: "https://blog.hubspot.com/sales/famous-quotes",
    year: "unkown",
  },
];

// console.log(quotes);

/***
 * `getRandomQuote` function
 ***/

//First function of the test, this one will access the quotes array and return a random quote each time it's called
function getRandomQuote() {
  //random number generator using the index of the quotes array
  let randomNum = quotes[Math.floor(Math.random() * quotes.length)];
  return randomNum;
}

/***
 * `printQuote` function
 ***/

//This function will use the getRandomQuote function, access the html file and display the result of each random pull
function printQuote() {
  //This variable holds the random quote function created above
  let randomQuote = getRandomQuote();
  //This variable will access the index.html file and will display the quotes form the random quote function
  let htmlString = '<p class = "quote">' + randomQuote.quote + "</p>";
  htmlString += '<p class="source" >' + randomQuote.source;
  
  //This conditional statements will test if the "citation" & "year" items in the array have data, and will print it to the site if true.
  if ("citation" in randomQuote) {
    htmlString += '<span class="citation"> ' + randomQuote.citation + "</span>";
  }

  //This conditional statements will test if the "citation" & "year" items in the array have data, and will print it to the site if true.
  if ("year" in randomQuote) {
    htmlString +=
      '<span class="year"> ' + randomQuote.year + "</span>" + "</p>";
  }

  document.getElementById("quote-box").innerHTML = htmlString;
}

printQuote();



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);