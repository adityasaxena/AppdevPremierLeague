apl.controller('AplController', ['$scope', 'data', 'playerService', function($scope, data, playerService){
	$scope.players = data.listOfPlayers;

	$scope.teamA;
	$scope.teamB;
	$scope.currentPlayer;

	$scope.getRandomPlayer = function (){
		var rand = parseInt(Math.random()*($scope.players.length-1));
        if(!$scope.players[rand].sold){
            $scope.currentPlayer = $scope.players[rand];
            return $scope.currentPlayer;
        }
        else{
            return $scope.getRandomPlayer();
        }

	};

	$scope.addToTeam = function(playerCost, teamName){
		if($scope.currentPlayer!=undefined){
			$scope.currentPlayer.team = teamName;
			$scope.currentPlayer.cost = playerCost;
			$scope.currentPlayer.sold = true;
		}
		else{
			alert("choose a player");
		}
	};
}]);