const prompt = require("prompt-async");

async function user_input() {
  prompt.start();
  console.log("What is you name? ");

  const { name } = await prompt.get("name");

  console.log(`Welcome ${name} for learning javascript`);
}

user_input();
