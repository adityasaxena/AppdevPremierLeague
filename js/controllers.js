apl.controller('AplController', ['$scope', 'data', 'playerService',
	function($scope, data, playerService) {

		$scope.players = data.getListOfPlayers();
        data.saveListOfPlayers($scope.players);
		$scope.maxPoints = 2500;

        $scope.teamA = {};
        $scope.teamB = {};

        calculateTeams();

        function calculateTeams(){
            $scope.teamA.name = 'Team A';
            $scope.teamA.playersBought = (getTeamInfo('teamA')).players;
            $scope.teamA.currentCost = (getTeamInfo('teamA')).cost;

            $scope.teamB.name = 'Team B';
            $scope.teamB.playersBought = ((getTeamInfo('teamB')).players);
            $scope.teamB.currentCost = (getTeamInfo('teamB')).cost;
        }

        function getTeamInfo(team){
          var cost = 0, players = 0;
          for(var i = 0; i < $scope.players.length; i++){
            if($scope.players[i].team == team){
              cost += $scope.players[i].cost;
              players++;
            }
          }

          return {
            cost: cost,
            players : players
          }
        }

        function buyingAllowed(playerCost, team){
          return ((($scope.maxPoints - $scope[team].currentCost - playerCost)/(10 - $scope[team].playersBought)) >= 100);
        }

		$scope.getRandomPlayer = function() {
			$scope.randomIndex = parseInt(Math.random() * ($scope.players.length - 1), 10);
			if ($scope.players[$scope.randomIndex].sold == false) {
				$scope.currentPlayer = $scope.players[$scope.randomIndex];
			} else {
				$scope.getRandomPlayer();
			}
		};

        $scope.$watch('players', function(){
          calculateTeams();
        }, true);

		$scope.addToTeam = function(playerCost, team) {
			if(playerCost == 0){
              alert('Enter a valid player cost');
              return undefined;
            }

            if(buyingAllowed(playerCost, team)){
              $scope.players[$scope.randomIndex].team = team;
              $scope.players[$scope.randomIndex].sold = true;
              $scope.players[$scope.randomIndex].cost = playerCost;
              data.saveListOfPlayers($scope.players);
              $scope.players = data.getListOfPlayers();
              $scope.currentPlayer = '';
            }
            else{
              alert("This team cannot buy the player for this amount. Reduce the amount and re-try");
            }
		};
	}
]);