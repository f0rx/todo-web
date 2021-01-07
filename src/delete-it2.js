var SibApiV3Sdk = require('sib-api-v3-sdk');
var defaultClient = SibApiV3Sdk.ApiClient.instance;

var apiKey = defaultClient.authentications['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'];
// apiKey.apiKey = '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';
console.log(apiKey);
var apiInstance = new SibApiV3Sdk.EmailCampaignsApi();
var emailCampaigns = new SibApiV3Sdk.CreateEmailCampaign();

emailCampaigns.name = "Campaign sent via the API";
emailCampaigns.subject = "My subject";
emailCampaigns.sender = {"name": "From name", "email":"ejike.br@gmail.com"};
emailCampaigns.type = "classic";

// htmlContent: 'Congratulations! You successfully sent this example campaign via the Sendinblue API.',

// recipients: {listIds: [2, 7]},

// scheduledAt: '2018-01-01 00:00:01'

apiInstance.createEmailCampaign(emailCampaigns).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});