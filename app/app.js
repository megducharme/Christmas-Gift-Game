"use strict";

var app = angular.module("EllingtonChristmas", ["ngRoute"])
.constant("FirebaseURL", "https://christmas-gift-game.firebaseio.com/");

app.config(function($routeProvider){

   $routeProvider.

    when("/", {
      templateUrl: "partials/merryChristmas.html",
      controller: "VotingController"
    }).
    when("/castVotes", {
            templateUrl:"partials/castVotes.html",
            controller: "VotingController",
    }).
    when("/giverStandings", {
            templateUrl:"partials/giverStandings.html",
            controller: "VotingController",
    }).
    otherwise("/");
});

app.run( ($location, FBCreds) => {
    let creds = FBCreds;
    let authConfig = {
        apiKey: creds.key,
        authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
});
