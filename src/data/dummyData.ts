export const dummyMessages = [
  { id: 1, text: "Hello! How can I assist you today?", sender: "bot" },
  { id: 2, text: "Feel free to ask me anything!", sender: "bot" },
];

export const predefinedReplies = [
  { trigger: "hi", response: "Hello! How can I help you?" },
  { trigger: "help", response: "Sure! What do you need help with?" },
  { trigger: "bye", response: "Goodbye! Have a great day!" },
];

export const keywordResponses = {
  javascript:
    "JavaScript is a versatile programming language.<br/>" +
    "Here is a simple JavaScript function:<br/>" +
    `<code>function greet(name) {
      return 'Hello, ' + name + '!';
    }</code><br/>` +
    "You can also use JavaScript for web development with frameworks like React, Angular, or Vue.<br/>",

  python:
    "Python is known for its readability and simplicity.<br/>" +
    "Here is a simple Python function:<br/>" +
    `<code>def greet(name):
      return 'Hello, ' + name + '!</code><br/>` +
    "Python is widely used in data science, web development, and automation.<br/>",

  // Add more keywords and responses as needed
};
