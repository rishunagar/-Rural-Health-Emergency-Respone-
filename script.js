function startChat() {
    document.getElementById('chatbot').style.display = 'block';
}

function sendMessage() {
    let userMessage = document.getElementById('userInput').value;
    let chatbox = document.getElementById('chatbox');
    
    // Display the user message
    chatbox.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
    
    // Generate chatbot response (simple example, can be expanded for 20+ questions)
    if (userMessage.toLowerCase().includes('ambulance')) {
        chatbox.innerHTML += `<p><strong>Chatbot:</strong> Do you need an ambulance? Please share your location.</p>`;
    } else if (userMessage.toLowerCase().includes('emergency')) {
        chatbox.innerHTML += `<p><strong>Chatbot:</strong> What is your emergency? Accident, Heart Attack, or Other?</p>`;
    } else {
        chatbox.innerHTML += `<p><strong>Chatbot:</strong> I can assist with emergency services. Please ask your question.</p>`;
    }
    
    // Clear the input field
    document.getElementById('userInput').value = '';
}
