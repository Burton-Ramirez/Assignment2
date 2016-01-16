angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    //was having trouble with ng-show, should require a global ($scope) variable to start false and become true when a listingis clicked but was not working for me
    //$scope.details = false;

    $scope.details = true;
    $scope.defaultMessage = false;
    $scope.addListButton = false;
    $scope.showAddListing = true;

    $scope.addButton = function(){

          $scope.showAddListing = false;
          $scope.details = true;
          $scope.defaultMessage = true;
          $scope.addListButton = true;

        }
    $scope.addListing = function(entry) {

          $scope.listings.push(entry);
          $scope.entry = null;
          $scope.showAddListing = false;
          $scope.details = true;
          $scope.defaultMessage = true;
          $scope.addListButton = true;

   };

   $scope.deleteListing = function(listing) {

          $scope.listings.splice($scope.listings.indexOf(listing),1);
          $scope.details = true;
          $scope.defaultMessage = false;

   };

   $scope.showDetails = function(listing) {

          $scope.showAddListing = true;
          $scope.addListButton = false;

          $scope.details = false;
          $scope.defaultMessage = true;

          $scope.code = '';
          $scope.building = '';
          $scope.address = '';
          $scope.coords = '';

          index = $scope.listings.indexOf(listing);

          $scope.code = $scope.listings[index].code;
          $scope.building = $scope.listings[index].name;
          $scope.address = $scope.listings[index].address;
          $scope.coords = $scope.listings[index].coordinates.latitude + ', ' + $scope.listings[index].coordinates.longitude;

      };
  }
]);
