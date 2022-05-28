const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

console.log(process.env.OPENAI_API_KEY);


function Print(){
  var str = document.getElementById("text1")
  str.innerHTML;
  console.log(5+6);
}


