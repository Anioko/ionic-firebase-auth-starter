
app.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
})

.controller('AuthCtrl', function($scope, $rootScope, $firebaseAuth, $cordovaOauth, $state){
  var fb_app_id = '1416319645359452';
  var ref = new Firebase("http://giphy.firebaseio.com/");
  var auth = $firebaseAuth(ref);
  $rootScope.user = null;

  $scope.login = function() {
    $cordovaOauth.facebook(fb_app_id, ["email"]).then(function(result) {
        auth.$authWithOAuthToken("facebook", result.access_token).then(function(authData) {
            console.log(JSON.stringify(authData));
            
            $rootScope.user = authData;
            $rootScope.$apply();
            $state.go('app.browse');

        }, function(error) {
            console.error("ERROR: " + error);
        });
    }, function(error) {
        console.log("ERROR: " + error);
    });
  };
})


