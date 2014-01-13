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

	$scope.addToTeamA = function(playerCost , team){
		if($scope.currentPlayer!=undefined){
			$scope.currentPlayer.team = team;
			$scope.currentPlayer.cost = playerCost;
			$scope.currentPlayer.sold = true;
		}
		else{
			alert("choose a player");
		}
	};
	$scope.addToTeamB = function(playerCost , team){
		if($scope.currentPlayer!=undefined){
			$scope.currentPlayer.team = team;
			$scope.currentPlayer.cost = playerCost
			$scope.currentPlayer.sold = true;
		}
		else{
			alert("choose a player");
		}
	};
}]);