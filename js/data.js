apl.factory('data', function(){
  var listOfPlayers = [
    {
      name: 'Aakash Sharma',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'I am a good opener. I can provide a good start to the team. Also I am a good fielder.',
      image: 'image/sachin.jpg'
    },
    {
      name: 'Abhimanyu Kahal',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'NA',
      image: 'image/sachin.jpg'
    },
    {
      name: 'Abhinav Dasmana',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'I am a good opener. I can provide a good start to the team. Also I am a good fielder.',
      image: 'image/sachin.jpg'
    },
    {
      name: 'Aditya Pal',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'Primarily a Batsman, can bowl few spin, medium pace overs as well.',
      image: 'image/sachin.jpg'
    },
    // {
    //   name: 'Aditya Saxena',
    //   bats: true,
    //   bowls: true,
    //   team: '',
    //   cost:100,
    //   sold: false,
    //   active: true,
    //   description: 'Played at college level.',
    //   image: 'image/sachin.jpg'
    // },
    {
      name: 'Akshay Gupta',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'You know me well. Super fitness with exceptional fielding and bowling. Dare to have a face off :)',
      image: 'image/sachin.jpg'
    },
    {
      name: 'Akshaya Kumar Sharma',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'Left Arm Fast Bowler',
      image: 'image/sachin.jpg'
    },
    {
      name: 'Aman Singal',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'NA',
      image: 'image/sachin.jpg'
    },
     {
      name: 'Anuj Dua',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'I was member of Cricket team in my previous organization & used to open the innings. Can bowl medium pace as well.',
      image: 'image/sachin.jpg'
    },
    {
      name: 'Arpit Kulsreshta',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'Love to Open.',
      image: 'image/sachin.jpg'
    },
    {
      name: 'Ashish Manchanda',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'With win win attitude I ensure I fight too win till the last ball is bowled be it batting, bowling or fielding, My contribution will always be more than 100%.',
      image: 'image/sachin.jpg'
    },
    {
      name: 'Awanish Kumar',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'NA',
      image: 'image/sachin.jpg'
    },
    {
      name: 'Biju',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'Can hit sixes as much as the team wants. Get opposition teams top order batsmen out at will!',
      image: 'image/sachin.jpg'
    },
    {
      name: 'Gagan Sahni',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'Played at college level.',
      image: 'image/sachin.jpg'
    },
    {
      name: 'Hemant Gulati',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'NA',
      image: 'image/sachin.jpg'
    },    
    {
      name: 'Jatin Setia',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'Opening Batsman and Medium pace part time bowler. Good fielding and catching skills.',
      image: 'image/sachin.jpg'
    },    
    {
      name: 'Jyoti Prakash Datta',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'I Bat defensively and very slowly for hours. I bowl even slower but get batsmen caught out on the boundary(sometimes). I field ok and do not let go of any catches and I do not misfield!',
      image: 'image/sachin.jpg'
    },
    {
      name: 'Karan Arora',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'NA',
      image: 'image/sachin.jpg'
    },
    // {
    //   name: 'Mahesh Saini',
    //   bats: true,
    //   bowls: true,
    //   team: '',
    //   cost:100,
    //   sold: false,
    //   active: true,
    //   description: 'NA',
    //   image: 'image/sachin.jpg'
    // },
    {
      name: 'Neeraj Gupta',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'NA',
      image: 'image/sachin.jpg'
    },
    {
      name: 'Nitish Bhatnagar',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'NA',
      image: 'image/sachin.jpg'
    },
    {
      name: 'Nitin Verma',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'Currently training in South Africa with the team that defeated India. Highly motivated player with impeccable track record in gully cricket.',
      image: 'image/sachin.jpg'
    },
    {
      name: 'Pankaj Arora',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'NA',
      image: 'image/sachin.jpg'
    },
    {
      name: 'Pinakpani Das',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'Right Arm Medium Bowler, Right Hand Batsmen. Played for MSO XI  and won the third position in the last Mckinsey Cricket League.',
      image: 'image/sachin.jpg'
    },
    {
      name: 'Prashant Jain',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'I am a medium fast bowler and mid level batsman. I like playing in pressure situations and could come handy.',
      image: 'image/sachin.jpg'
    },
    {
      name: 'Prayag Mittal',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'I am passionate about cricket. I am a bowler played very well at different university , college level , having a gold and silver medal in it. Played with several clubs and also a part of TCS corporate team',
      image: 'image/sachin.jpg'
    },
    {
      name: 'Puneet Kumar',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'I play as a fast bowler in team and usually bat at number 4-5',
      image: 'image/sachin.jpg'
    },
    {
      name: 'Ranjeet',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'NA',
      image: 'image/sachin.jpg'
    },
    {
      name: 'Sanjeev Kumar',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'NA',
      image: 'image/sachin.jpg'
    },
    {
      name: 'Sanjeev Mishra',
      bats: true,
      bowls: true,
      team: '',
      cost: 100,
      sold: false,
      active: true,
      description: 'Bowler',
      image: 'image/sachin.jpg'
    },
    {
      name: 'Shadab Ahmed',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'Like my favourite language Ruby, I blend sound base technique along with scope of great flexibility.',
      image: 'image/sachin.jpg'
    },
    {
      name: 'Siddharth Joshi',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'A batsman who can bowl and a bolwer who can bat.',
      image: 'image/sachin.jpg'
    },
    {
      name: 'Sourabh Gupta',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'NA',
      image: 'image/sachin.jpg'
    },    
    {
      name: 'Sumit Jolly',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'NA',
      image: 'image/sachin.jpg'
    },
    {
      name: 'Sundeep Gupta',
      bats: true,
      bowls: true,
      team: '',
      cost: 100,
      sold: true,
      active: true,
      description: 'NA',
      image: 'image/sachin.jpg'
    },
    {
      name: 'Vikas Kumar',
      bats: true,
      bowls: true,
      team: '',
      cost: 100,
      sold: true,
      active: true,
      description: 'Although I have last played cricket long ago, I had been the best bowler of my colony Team and very good batsman as well. I have mostly played with Tennis ball(Flash and Mark ball) and sometimes with leather',
      image: 'image/sachin.jpg'
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