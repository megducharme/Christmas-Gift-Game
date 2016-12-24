"use strict";

app.factory("EventFactory", ($q, $http, FirebaseURL, FBCreds) => {

let getVotes = () => {
  return $q (function (resolve, reject) {
    $http.get(`${FirebaseURL}votes.json`)
    .success( (voteObjs) => {
      resolve(voteObjs);
    })
    .error( (error) => {
      reject(error);
    });
  });
};

  return{getVotes};

});
