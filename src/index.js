function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
    deleteSpeed: 0,
  });
}

function generateQuote(event) {
  event.preventDefault();

  let userRequest = document.querySelector("#user-input");
  let apiKey = "ob891t57a434d702dd2b3463eb606aff";
  let prompt = `Generate a quote about ${userRequest.value}`;
  let context = `You are a goth philopsopher who knows a lot of literary quotes about the darker side of life. You also like dark, macarbe music and know a lot of lyrical quotes.`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteElement = document.querySelector("#quote");
  quoteElement.classList.remove("hidden");
  quoteElement.innerHTML = `Conjuring wise words for you about ${userRequest.value}...`;

  axios.get(apiURL).then(displayQuote);
}
let quoteTopicElement = document.querySelector("#quote-topic");
quoteTopicElement.addEventListener("submit", generateQuote);
