function uploadVideo() {
    const videoInput = document.getElementById('videoUpload');
    const file = videoInput.files[0];
    
    if (file) {
        alert('Video uploaded successfully!');
    } else {
        alert('Please select a video file to upload.');
    }
}

function submitScore() {
    const points = document.getElementById('trashPoints').value;
    if (points >= 0) {
        document.getElementById('result').innerText = `You have scored ${points} points for trash collected.`;
    } else {
        alert('Please enter a valid number of points.');
    }
}

window.watsonAssistantChatOptions = {
    integrationID: "01104efe-10bb-46db-be56-d991cdefdfb7", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "ed9a0c7d-cdca-4d41-923b-a111408237fb", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });