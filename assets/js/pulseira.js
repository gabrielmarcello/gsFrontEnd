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