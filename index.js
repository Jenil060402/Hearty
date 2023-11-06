

// Function to send user message to Dialogflow
function sendUserMessage(message) {
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: message,
        languageCode: languageCode,
      },
    },
  };

  return sessionClient.detectIntent(request);
}

// Function to display bot response
function displayBotResponse(response) {
  const botMessage = response.queryResult.fulfillmentText;
  const chatContainer = document.getElementById('chat');
  chatContainer.innerHTML += '<div class="bot-message">' + botMessage + '</div>';
}

// Function to send user message and display bot response
function sendMessage() {
  const userInput = document.getElementById('user-input');
  const userMessage = userInput.value;
  if (userMessage) {
    // Get the iframe element
    const chatIframe = document.querySelector('iframe');

    // Post a message to the iframe (assuming the chatbot supports it)
    chatIframe.contentWindow.postMessage(userMessage, '*');

    // Clear the user input field
    userInput.value = '';
  }
}

