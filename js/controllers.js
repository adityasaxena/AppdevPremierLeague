

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
			$scope.currentPlayer.cost = playerCost
			console.log($scope.currentPlayer.cost);
		}
		else{
			alert("choose a player");
		}
	};
	$scope.addToTeamB = function(playerCost){
		if($scope.currentPlayer!=undefined){
			$scope.currentPlayer.team = "teamB";
			$scope.currentPlayer.cost = playerCost
			console.log($scope.currentPlayer.team);
		}
		else{
			alert("choose a player");
		}
	};

	$scope.showTeamA = function(){
		console.log("show team A");
		for (var i = 0 ; i <= $scope.players.length; i++) {
			if($scope.players[i].team == "teamA")
			{
				console.log($scope.players[i].name);
			}
		}
	};
	$scope.showTeamB = function(){
		console.log("show team B");
		for (var i = 0 ; i <= $scope.players.length; i++) {
			if($scope.players[i].team == "teamB")
			{
				console.log($scope.players[i].name);
			}
		}
	};
}]);