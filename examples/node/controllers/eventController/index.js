const axios = require('axios');

const trackEvent = async (eventName) => {
  const {apiKey, apiUrl, workspaceKey} = require('../../constants');
    
  // For a guide on the data type for different fields, visit https://docs.hyperengage.io/getting-started/understanding-our-data-model 

  const payload = {
    event_id: "",
    anonymous_id: "", // Ideally, use the __eventn_id from the cookies sent to your API  to stitch the user activity.
    user_id: '3', // Unique user_id in DB (Mandatory)
    account_id: '3',// Unique account_id in DB (Mandatory)
    api_key: apiKey, // Get from HE on the onboarding steps
    workspace_key: workspaceKey, // Get from HE on the onboarding steps 
    src: "hyperengage",
    url:"https://app.cardclan.io/app/dashboard", //Optional pass the URL of the page where action was performed
    library: "http",
    event_type: eventName, // event name, this key name is reserved for identifying accounts
    properties: {
      category: "Thank You Card" //attach as many properties to an event you want
      //eg if its plan_upgraded event pass the plan_name , amount, 
      //supported data types are number, boolean, text, array of strings 
    },
    screen_resolution: "0",
  };


    try {
        const response = await axios.post(apiUrl, payload);
        console.log('Event tracked:', response.data);
        return response.data;
    } catch (error) {
         console.error('Error tracking event:', error.message);
        throw new Error('Error tracking event.');
    }
};

module.exports = { trackEvent };