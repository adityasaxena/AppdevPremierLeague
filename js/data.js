apl.factory('data', function(){
  var listOfPlayers = [
    {
      name: 'Aakash Sharma',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true
    },
    {
      name: 'Abhinav Dasmana',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true
    },
    {
      name: 'Aditya Saxena',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true
    },
    {
      name: 'Akshay Gupta',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true
    },
    {
      name: 'Akshaya Kumar',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true
    },
    {
      name: 'Aman Singal',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true
    },
    {
      name: 'Arpit Kulsreshta',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true
    },
    {
      name: 'Ashish Manchanda',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true
    },
    {
      name: 'Awanish Kumar',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true
    },
    {
      name: 'Gagan Sahni',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true
    },
    {
      name: 'Jyoti Prakash Datta',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true
    },
    {
      name: 'Lavkesh Garg',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true
    },
    {
      name: 'Mahesh Saini',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true
    },
    {
      name: 'Neeraj Gupta',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true
    },
    {
      name: 'Nitish',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true
    },
    {
      name: 'Pankaj Arora',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true
    },
    {
      name: 'Prayag Mittal',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true
    },
    {
      name: 'Ranjeet',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true
    },
    {
      name: 'Sanjeev Kumar',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true
    },
    {
      name: 'Sanjeev Mishra',
      bats: true,
      bowls: true,
      team: '',
      cost: 100,
      sold: false,
      active: true
    },
    {
      name: 'Shadab Ahmed',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true
    },
    {
      name: 'Siddharth',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true
    },
    {
      name: 'Sourabh Gupta',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true
    },
    {
      name: 'Sumit Bajaj',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true
    },
    {
      name: 'Sumit Jolly',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true
    },
    {
      name: 'Sundeep Gupta',
      bats: true,
      bowls: true,
      team: '',
      cost: 100,
      sold: true,
      active: true
    }
  ];

  function saveListOfPlayers(players){
    localStorage.setItem('players', JSON.stringify(players));
  }

  function getListOfPlayers(){
    return JSON.parse(localStorage.getItem('players')) || listOfPlayers;
  }

  return {
    getListOfPlayers: getListOfPlayers,
    saveListOfPlayers : saveListOfPlayers
  }
});