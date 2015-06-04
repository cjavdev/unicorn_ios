angular.module('starter.services', [])
  .factory('Profile', function($http) {
    console.log('creating a profile');
    return {
      find: function(id) {
        return {
          id: 1,
          email: "cjavilla@gmail.com",
          first_name: "CJ",
          last_name: "Avilla",
          headline: "Instructor / Web Developer",
          industry: "Computer Software",
          linkedin_profile_url: "https://www.linkedin.com/in/cjavilla",
          image_url: "https://media.licdn.com/mpr/mprx/0_EBP1Xf-O0DdWlcWnecCuXuzAgEO6PtHnHzbuXuv_C7o9u9096l_0E23SPXYJrvdswNlDIIbMR9lj",
          location_country: "us",
          location_name: "San Francisco Bay Area",
          engineer: false,
          created_at: 'Wed, 03 Jun 2015 21: 58: 13 UTC + 00: 00',
          updated_at: 'Wed, 03 Jun 2015 22: 02: 39 UTC + 00: 00',
          session_token: "fdfe214cca69e4478d1195384c6985c1",
          description: "Instructor / Web Developer"
        };
      }
    };
  })
  .factory('Idea', function($http) {
    return {
      create: function(attrs) {
        return $http.post(API_BASE + "/api/v1/ideas", attrs);
      }
    };
  });
