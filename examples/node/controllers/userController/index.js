const axios = require('axios');

const identifyUser = async (userId) => {
    const {apiKey, apiUrl, workspaceKey} = require('../../constants');

    // For a guide on the data type for different fields, visit https://docs.hyperengage.io/getting-started/understanding-our-data-model 

    const payload = {
      event_id: "",
      anonymous_id: "", // Ideally, use the __eventn_id from the cookies sent to your API  to stitch the user activity.
      user_id: userId, // Unique user_id in DB (Mandatory)
      account_id: "3",// Unique account_id in DB (Mandatory)
      api_key: apiKey, // Get from HE on the onboarding steps
      workspace_key: workspaceKey, // Get from HE on the onboarding steps 
      src: "hyperengage",
      url:"https://app.cardclan.io/app/dashboard", //Optional pass the URL of the page where action was performed
      library: "http",
      event_type: "user_identify", // event name, this key name is reserved for identifying users
      traits: {
        // Required attributes for users in user_identify
        email: "user@domain.com",  // Email address.
        created_at: "2021-01-20T09:55:35",    // DateTime string in your system that represents when the user first signed up.
        name: "John Doe"  // Full name.
        // Optional attributes (you can name attributes what you wish)
      },
      screen_resolution: "0",
    };

    try {
        const response = await axios.post(apiUrl, payload);
        console.log('User identified:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error identifying user:', error.message);
        throw new Error('Error identifying user.');
    }
};

module.exports = { identifyUser };