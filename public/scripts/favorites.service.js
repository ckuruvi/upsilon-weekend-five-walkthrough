angular.module("gifApp").service("FavoritesService", [
  "$http",
  function($http) {
    console.log("FavoritesService loaded");

    // some way to send a post request to our server
    this.saveFavorite = function(favorite) {

      // alternative method
      // return $http({
      //   method: 'POST',
      //   data: favorite
      // }).then(...);


      return $http.post("/favorites", favorite).catch(function(err) {
        console.log("Error saving favorite", err);
      });
    };
  }
]);
