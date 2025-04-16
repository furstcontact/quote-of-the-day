function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();

  let userRequest = document.querySelector("#instruction");
  let apiKey = "ob891t57a434d702dd2b3463eb606aff";
  let prompt = `Generate a quote about ${userRequest.value}`;
  let context = `You are a goth philopsopher who knows a lot of literary quotes about the darker side of life. You also like music and know a lot of lyrical quotes in the style of Nick Cave.`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayQuote);
}
let quoteTopicElement = document.querySelector("quote-topic");
quoteTopicElement.addEventListener("submit", generateQuote);
