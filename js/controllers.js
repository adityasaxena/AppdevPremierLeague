apl.controller('AplController', ['$scope', 'data', 'playerService', function($scope, data, playerService){
	$scope.players = data.listOfPlayers;

	$scope.teamA;
	$scope.teamB;
	$scope.currentPlayer;
	$scope.unsoldPlayers = [];

    $scope.unsoldPlayers=$scope.players;
	$scope.getRandomPlayer = function (){
<<<<<<< HEAD
       
		for(var i=0 ; i < $scope.players.length ; i++){
			if($scope.players[i].sold == false){
				$scope.unsoldPlayers[i] = $scope.players[i];
			}
		}
		var rand = parseInt(Math.random()*($scope.unsoldPlayers.length-1));
		$scope.currentPlayer = $scope.unsoldPlayers[rand];
		return $scope.unsoldPlayers[rand];
=======
		var rand = parseInt(Math.random()*($scope.players.length-1));
        if(!$scope.players[rand].sold){
            $scope.currentPlayer = $scope.players[rand];
            return $scope.currentPlayer;
        }
        else{
            return $scope.getRandomPlayer();
        }

>>>>>>> aade350bab9b11ad05a793fd0cbfe5f918ef8275
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