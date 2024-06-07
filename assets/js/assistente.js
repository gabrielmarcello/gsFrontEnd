document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.querySelector(".chat-input input");
    const sendButton = document.querySelector(".chat-input button");
    const chatBox = document.querySelector(".chat-box");

    sendButton.addEventListener("click", function() {
        sendMessage();
    });

    inputField.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    function sendMessage() {
        const userInput = inputField.value.trim();

        if (userInput !== "") {
            addMessage(userInput, "user-message");
            inputField.value = "";

            setTimeout(function() {
                addMessage("Resposta do bot: " + userInput, "bot-message");
            }, 500);
        }
    }

    function addMessage(text, className) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", className);
        
        const messageContent = document.createElement("div");
        messageContent.classList.add("message-content");
        messageContent.innerHTML = `<p>${text}</p>`;
        
        messageDiv.appendChild(messageContent);
        chatBox.appendChild(messageDiv);

        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
