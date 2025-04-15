function generateQuote(event) {
  event.preventDefault();

  let quoteElement = document.querySelector("#quote");
  quoteElement.innerHTML = "Finding a quote for you...";
}

let quoteTopicElement = document.queryselector("quote-topic");
quoteTopicElement.addEventListener("submit", generateQuote);
