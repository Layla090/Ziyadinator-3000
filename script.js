 //here we'll add the mechanisms behind the Chatbot
const input = document.getElementById("user-input");
const chatWindow = document.getElementById("Chat");
/*create element by id means it ADDS an element to the HTML file
while get element by id means it GETS an element
which is already in theHTML file*/
function sendMessage() {
    const userText = input.value.trim();
    if (!userText) return;
    /*look at the input val. from earlier, "value" is what the user typed,
    and trim removes any extra spaces in the beginning or the end
    ex: "    hi   "--> "hi"*/
    chatWindow.innerHTML += `<div class="user">${userText}</div>`;
    //<div> is for styling, in this case, the chat bubble.
    //${} is for inserting variables into strings (strings are anything inside quotes)
//+= means add on to what's already there
    let reply = "type into the ziyadnator mwahaha";
    if (userText.toLowerCase().includes("hello")) {
        reply = "hi";
    }
    if (userText.toLowerCase().includes("fah")) {
        reply = "FAHHHHHHHHH";
    }
    if (userText.toLowerCase().includes("color")) {
        reply = "burgandy...i cant spell that";}
    if (userText.toLowerCase().includes("dog")) {
        reply = "bark, BARK BARK, BARK";
    }
    chatWindow.innerHTML += `<div class="bot">${reply}</div>`;
    input.value = "";
    input.focus();
    chatWindow.scrollTop = chatWindow.scrollHeight;
}
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendMessage();
});