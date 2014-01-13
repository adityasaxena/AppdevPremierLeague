apl.controller('AplController', ['$scope', 'data', 'playerService', function($scope, data, playerService){
  $scope.players = data.listOfPlayers;
}]);