apl.controller('AplController', ['$scope', 'data', 'playerService', function($scope, data, playerService){
	$scope.players = data.listOfPlayers;

	$scope.teamA;
	$scope.teamB;
	$scope.currentPlayer;
	$scope.unsoldPlayers;

	$scope.getRandomPlayer = function (){

		for(var i=0 ; i < $scope.players.length ; i++){
			if($scope.players[i].sold == false){
				$scope.unsoldPlayers = $scope.players;
			}
		}
		var rand = parseInt(Math.random()*($scope.unsoldPlayers.length-1));
		$scope.currentPlayer = $scope.unsoldPlayers[rand];
		return $scope.unsoldPlayers[rand];
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