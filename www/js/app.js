// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
window.API_BASE = "http://localhost:3000";
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })
  .state('app.browse', {
      url: "/browse",
      views: {
        'menuContent': {
          templateUrl: "templates/browse.html"
        }
      }
    })
    .state('app.ideas', {
      url: "/ideas",
      views: {
        'menuContent': {
          templateUrl: "templates/ideas.html",
          controller: 'IdeasCtrl'
        }
      }
    })
    .state('app.profile', {
      url: "/profiles/:id",
      views: {
        'menuContent': {
          templateUrl: "templates/profile.html",
          controller: 'ProfileCtrl'
        }
      }
    })
    .state('app.single', {
      url: "/my_ideas",
      views: {
        'menuContent': {
          templateUrl: "templates/my_ideas.html",
          controller: 'MyIdeasCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/ideas');
});
