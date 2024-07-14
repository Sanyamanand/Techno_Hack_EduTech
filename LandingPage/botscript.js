document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', () => {
        const userMessage = userInput.value.trim();

        if (userMessage !== '') {
            // Display user message
            displayMessage(userMessage, 'user');

            // Simulate a response (you can replace this with actual chatbot logic)
            setTimeout(() => {
                const botMessage = 'I am sorry, but I didnt quite understand your question or request, although i am still in my learning phase. You could reach to the coustomer support helpline for further assistance.';
                displayMessage(botMessage, 'bot');
            }, 1000);

const supportButton = document.createElement('button');
            supportButton.innerHTML = '<a style="text-decoration:none" href="contact us.html">Customer Support</a>';
            supportButton.setAttribute('target', '_blank'); // Open link in a new tab
            chatBox.appendChild(supportButton);

            // Clear the user input field
            userInput.value = '';
        }
    });

    function displayMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.innerText = message;
        chatBox.appendChild(messageElement);
    }
});
