apl.controller('AplController', ['$scope', 'data', 'playerService', function($scope, data, playerService){
	$scope.players = data.listOfPlayers;

	$scope.teamA;
	$scope.teamB;
	$scope.currentPlayer;
	$scope.unsoldPlayers = [];

	$scope.unsoldPlayers=$scope.players;
	$scope.getRandomPlayer = function (){

		var rand = parseInt(Math.random()*($scope.unsoldPlayers.length-1));
		if( $scope.unsoldPlayers[rand].sold==false)
		{
			$scope.currentPlayer = $scope.unsoldPlayers[rand];
		}
		else
		{
			$scope.getRandomPlayer();
		}
	};

	$scope.addToTeam = function(playerCost , team){
		if($scope.currentPlayer!=undefined){
			if(playerCost!=null && playerCost!=''&& playerCost!=undefined){
				if(playerCost%50 == 0 && playerCost >=100){
					if(playerCost <= 400){
						$scope.currentPlayer.team = team;
						$scope.currentPlayer.cost = playerCost;
						$scope.currentPlayer.sold = true;
					}
					else if(playerCost == 10){
						$scope.currentPlayer.team = team;
						$scope.currentPlayer.cost = playerCost;
						$scope.currentPlayer.sold = true;	
					}
					$scope.getRandomPlayer();
					$scope.playerCost="";
				}
				else{
					alert("Cost should be more than 100 and multiple of 50");
				}
			}
			else{
				alert("enter cost");
			}
		}
		else{
			alert("choose a player");
		}
	};
}]);