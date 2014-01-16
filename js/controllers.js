apl.controller('AplController', ['$scope', 'data', 'playerService',
	function($scope, data, playerService) {
		$scope.players = data.listOfPlayers;

		$scope.teamA;
		$scope.teamB;
		$scope.currentPlayer;
		$scope.unsoldPlayers = [];
		$scope.pointsLeftTeamA = 2500;
		$scope.pointsLeftTeamB = 2500;

		var counterA = 1;
		var counterB = 1;
		var teamAPoints = 0;
		var teamBPoints = 0;
		$scope.unsoldPlayers = $scope.players;


		function getcount(playerCost, team) {

			if (team == "teamA") {
				valafterthisbidA = $scope.pointsLeftTeamA - playerCost;
				console.log("afterbid " + valafterthisbidA);
				for (var j = 0; j < $scope.players.length; j++) {

					if ($scope.players[j].team == "teamA") {
						counterA++;
						
						break;
					}

				}
				console.log("left points in A " + $scope.pointsLeftTeamA);
				if ((valafterthisbidA < ((11 - counterA) * 100)) && (counterA < 12)) {

					console.log("counterA " + counterA);
					alert("cant do");
					counterA--;
					return false;
				} else {
					return true;
					alert("possible");
				}
			} //end of team A
			else {
				valafterthisbidB = $scope.pointsLeftTeamB - playerCost;
				console.log("afterbid " + valafterthisbidB);
				for (var j = 0; j < $scope.players.length; j++) {

					if ($scope.players[j].team == "teamB") {
						counterB++;
						
						break;
					}

				}
				console.log("left points in B " + $scope.pointsLeftTeamB);
				if ((valafterthisbidB < ((11 - counterB) * 100)) && (counterB < 12)) {

					console.log("counterB " + counterB);
					alert("cant do");
					counterB--;
					return false;
				} else {
					
					return true;


				} //end of team B
			}
		}

		function teamPoint() {
			console.log("inside team");
			for (var i = 0; i < $scope.players.length; i++) {

				if ($scope.players[i].team == "teamA") {
					teamAPoints = teamAPoints + parseInt($scope.players[i].cost);
				}
				if ($scope.players[i].team == "teamB") {
					teamBPoints = teamBPoints + parseInt($scope.players[i].cost);
				}
				$scope.pointsLeftTeamA = 2500 - teamAPoints;
				$scope.pointsLeftTeamB = 2500 - teamBPoints;
			}
			teamAPoints = 0;
			teamBPoints = 0;

		}

		$scope.getRandomPlayer = function() {

			var rand = parseInt(Math.random() * ($scope.unsoldPlayers.length - 1));
			if ($scope.unsoldPlayers[rand].sold == false) {
				$scope.currentPlayer = $scope.unsoldPlayers[rand];
			} else {
				$scope.getRandomPlayer();
			}
		};

		$scope.addToTeam = function(playerCost, team) {
			if (getcount(playerCost, team)) {
				if ($scope.currentPlayer != undefined) {
					if (playerCost != null && playerCost != '' && playerCost != undefined) {
						if (playerCost % 50 == 0 && playerCost >= 100) {
							if (playerCost <= 400) {
								$scope.currentPlayer.team = team;
								$scope.currentPlayer.cost = playerCost;
								$scope.currentPlayer.sold = true;

								teamPoint();

							} else {
								alert("Points Should be less than 400");
							}
							$scope.getRandomPlayer();
							$scope.playerCost = "";
						} else {
							alert("Points should be more than 100 and multiple of 50");
						}
					} else {
						alert("enter Points");
					}
				} else {
					alert("choose a player");
				}
			} // for getcount function

		};
	}
]);