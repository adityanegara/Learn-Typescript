"use strict";
var UserResponse;
(function (UserResponse) {
    UserResponse[UserResponse["No"] = 0] = "No";
    UserResponse[UserResponse["Yes"] = 1] = "Yes";
})(UserResponse || (UserResponse = {}));
const respond = (recepient, message) => {
    console.log(`${recepient} response is ${message}`);
};
respond("Princess Caroline", UserResponse.Yes);
