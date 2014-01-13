apl.controller('AplController', ['$scope', 'data', 'playerService', function($scope, data, playerService){
	$scope.players = data.listOfPlayers;

	$scope.teamA;
	$scope.teamB;
	$scope.currentPlayer;
	$scope.unsoldPlayers = [];
	$scope.pointsLeftTeamA = 0;
	$scope.pointsLeftTeamB = 0;
	var teamAPoints = 0;
	var teamBPoints = 0;
	$scope.unsoldPlayers=$scope.players;


	function teamPoint(){

		for(var i=0; i < $scope.players.length; i++){
			if($scope.players[i].team == "teamA"){
				teamAPoints = teamAPoints + parseInt($scope.players[i].cost);		
			}
			if($scope.players[i].team == "teamB"){
				teamBPoints = teamBPoints + parseInt($scope.players[i].cost);
			}
			$scope.pointsLeftTeamA = 1500 - teamAPoints;
			$scope.pointsLeftTeamB = 1500 - teamBPoints;
		}
		teamAPoints = 0;
		teamBPoints = 0;
		
	}

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
						teamPoint();
					}
					else{
						alert("Points Should be less than 400");
					}
					$scope.getRandomPlayer();
					$scope.playerCost="";
				}
				else{
					alert("Points should be more than 100 and multiple of 50");
				}
			}
			else{
				alert("enter Points");
			}
		}
		else{
			alert("choose a player");
		}
	};
}]);