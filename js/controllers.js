

apl.controller('AplController', ['$scope', 'data', 'playerService', function($scope, data, playerService){
  $scope.players = data.listOfPlayers;

	$scope.teamA;
	$scope.teamB;
	$scope.currentPlayer;

	$scope.getRandomPlayer = function (){
		var player; 
		var rand = parseInt(Math.random()*($scope.players.length-1));
		$scope.currentPlayer = $scope.players[rand].name;
		return $scope.players[rand];
	}


}]);