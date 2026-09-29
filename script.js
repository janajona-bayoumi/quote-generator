const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const quoteBtn = document.querySelector("#quote-btn");

const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "The journey of a thousand miles begins with a single step.", author: "Lao Tzu" },
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { text: "Whether you think you can, or you think you can't, you're right.", author: "Henry Ford" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
  { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  { text: "Well done is better than well said.", author: "Benjamin Franklin" },
  { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
  { text: "Stay hungry, stay foolish.", author: "Stewart Brand" },
];
let lastIndex = -1;

const getQuote = () => {
  let index;

  do {
    index = Math.floor(Math.random() * quotes.length);
  } while (index === lastIndex);

  lastIndex = index;
  quote.innerText = quotes[index].text;
  author.innerText = `— ${quotes[index].author}`;
};

quoteBtn.addEventListener("click", getQuote);
getQuote();