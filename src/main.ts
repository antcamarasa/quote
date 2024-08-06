type Quote = {
    text: string;
    tag: string;
    author: string;
}

const quoteContainerHtml : HTMLElement | null = document.getElementById("quote-container");
const quoteHtml : HTMLElement | null = document.getElementById("quote");
const authorHtml : HTMLElement | null = document.getElementById("author");
const btnHtml : HTMLElement | null = document.getElementById("btn");

let apiQuotes : Quote[] = [];

// Get a new random quote
function newQuotes(){
    let index = Math.floor(Math.random() * apiQuotes.length);

    const quote = apiQuotes[index];
    quoteHtml!.textContent = quote.text;

    if(!quote.author){
        authorHtml!.textContent = "Unknown";
    }

    authorHtml!.textContent = quote.author;
}



// Get a quote from an API
export async function getQuotes() {
    const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";

    try {
         const response = await fetch(apiUrl);
         apiQuotes = await response.json();
        console.log(apiQuotes)
         newQuotes();
    }  catch(error) {
        console.log(error);
    }
}


// Add Event Listener
btnHtml!.addEventListener("click", newQuotes);


getQuotes();