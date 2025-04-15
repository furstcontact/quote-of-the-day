function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings: "Generating a quote...",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let quoteTopicElement = document.queryselector("quote-topic");
quoteTopicElement.addEventListener("submit", generateQuote);
