const functions = require("firebase-functions");
const axios = require("axios");

exports.createChatEngineUser = functions.auth.user().onCreate((user) => {
  axios.post(
    "https://api.chatengine.io/users/",
    {
      username: user.email,
      secret: user.uid,
      email: user.email,
      first_name: user.displayName,
    },
    { headers: { "Private-Key": "1091635c-f20c-4f9f-aeec-3d6c705df8d1" } }
  );
});

exports.deleteChatEngineUser = functions.auth.user().onDelete((user) => {
  axios.delete("https://api.chatengine.io/users/me/", {
    headers: {
      "Project-ID": "6e1ff6a0-636a-442f-aeff-181cfcc87da8",
      "User-Name": user.email,
      "User-Secret": user.uid,
    },
  });
});