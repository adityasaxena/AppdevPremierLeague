apl.controller('AplController', ['$scope', 'data', 'playerService', function($scope, data, playerService){
	$scope.players = data.listOfPlayers;

	$scope.teamA;
	$scope.teamB;
	$scope.currentPlayer;

	$scope.getRandomPlayer = function (){
		var rand = parseInt(Math.random()*($scope.players.length-1));
		$scope.currentPlayer = $scope.players[rand];
		return $scope.players[rand];
	};

	$scope.addToTeamA = function(playerCost){
		if($scope.currentPlayer!=undefined){
			$scope.currentPlayer.team = "teamA";
			$scope.currentPlayer.cost = playerCost;
			$scope.currentPlayer.sold = true;
		}
		else{
			alert("choose a player");
		}
	};
	$scope.addToTeamB = function(playerCost){
		if($scope.currentPlayer!=undefined){
			$scope.currentPlayer.team = "teamB";
			$scope.currentPlayer.cost = playerCost
			$scope.currentPlayer.sold = true;
		}
		else{
			alert("choose a player");
		}
	};
}]);