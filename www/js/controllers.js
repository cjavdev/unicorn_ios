angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('IdeasCtrl', function($scope, $location) {
  $scope.go = function (path) {
    console.log(path);
    $location.path(path);
  };
  $scope.ideas = [
    { industry: "e-commerce", title: 'Boosted Board', id: 1, author: 'Tony Hawk', image_url: 'https://ksr-ugc.imgix.net/projects/78787/photo-original.jpg?v=1397771707&w=1536&h=1152&fit=crop&auto=format&q=92&s=87156d418e3f799b26ca21126f88e144' },
    { industry: "finance", title: 'Stakeboards', id: 2, author: 'Shaun White', image_url: 'http://cdn.phys.org/newman/gfx/news/hires/2013/1-reviewphanto.jpg' },
    { industry: "fundraising", title: 'Wake Skate', id: 3, author: 'Sheldon Cooper', image_url: 'http://images.the-house.com/byerly-bi-wake-skt-41-10-prod.jpg' },
  ];
})
.controller('ProfileCtrl', function($scope, $stateParams, Profile) {
  $scope.profile = Profile.find($stateParams.id);
})
.controller('IdeaCtrl', function($scope, $stateParams, $ionicModal, $timeout) {
  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/new_idea.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.ideaFormData = {
    privacy: 'Public',
    looking_for: 'Technical Co-Founder',
    compensation: '50/50 split',
    current_status: 'Idea'
  };

  // Triggered in the login modal to close it
  $scope.closeForm = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.newIdea = function() {
    console.log('newidea');
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.createIdea = function() {
    console.log('createing idea', $scope.ideaFormData);
    $timeout(function() {
      $scope.closeForm();
    }, 1000);
  };
});
