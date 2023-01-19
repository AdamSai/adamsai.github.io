const games = [
  {
    title: "The Great Oaks",
    imgSrc: require("../img/portfolio/great_oaks.png"),
    year: 2022,
    description: `The Great Oaks is a 2.5D narrative driven local co-op platformer. It was created for the course Game World Design, where our 
    goal was to create the first level of a believable game world that would leave the player asking for more. The game uniquely incorporates a 
    dialogue system into a local co-op game, where the players each get to make choices for what they characters say to each other. 
    Together with our narrative/audio designer I designed and implemented the dialogue system.`,
    projectLink: "https://barrythecoolbee.itch.io/the-great-oaks",
    video: "https://youtu.be/d1KePsYD-4g"
  },
  {
    title: "Boat Attack",
    imgSrc: require("../img/portfolio/boat_attack.jpeg"),
    year: 2022,
    description: `While I did not work on the gameplay of Boat Attack, I helped restructure the folder architecture of the 2021 branch to make it compatible with assembly 
    definitions. I also implemented integrations tests for the input system and the replay cameras in the game. This was done while I was a 
    student worker at Unity Technologies. Our main goal was to document the process of adding tests to an existing project. I did this by 
    making the project compatible with assembly definitions, and due to time contraints, with as little code changes as possible. 
    I would have liked to introduce interfaces and refactor some code to make it more testable.`,
    sourceCode: "https://github.com/Unity-Technologies/BoatAttack/tree/testing/2021-update",
  },
  {
    title: "Feral Sitters",
    imgSrc: require("../img/portfolio/feral_sitters.png"),
    year: 2021,
    description: `Feral Sitters is a 4 player local co-op game created for my semester project for the course Making Games during my 1st semester 
    at the IT-University. I was the tech lead for the project, and helped create the systems that allows players to carry object, place objects 
    inside other objects, as well as heating up the bottle of milk. I also set up a continous deployment pipeline that would create builds 
    whenever we pushed to our main branch.`,
    projectLink: "https://pedrorainha.itch.io/feralsitters",
    video: "https://www.youtube.com/watch?v=bYEzVGHy4xM",
  },
  {
    title: "Space Monkeys",
    imgSrc: require("../img/portfolio/space_monkeys.png"),
    year: 2022,
    description: `Space Monkeys was made with limited time while I was volunteering for Nordic GameJam in 2022. Using a Lego Technic hub 
    me and my partner created a controller that would be used as a flight joystick. The game is a simple game where you shoot asteroids 
    while avoiding being hit by them. The game can be played with the customer controller we created, or with mouse and keyboard.`,
    projectLink: "https://predmada.itch.io/space-monkeys",
  },
  {
    title: "Happy Hour",
    imgSrc: require("../img/portfolio/happy-hour.png"),
    year: 2021,
    description: `Happy Hour was made for Ludom Dare 49. The theme was 'unstable' and we decided
    to make a beer serving game. You have to serve beers to customers before they get angry. The drunker
    they get, and the longer they have to wait, the likelier they are to start fighting. As the waiter
    you can also headbutt the patrons if you really feel like it. I worked on bug-fixing and refactoring 
    the AI after submission. I also tried out the new UI Toolkit for Unity.`,
    sourceCode: "https://github.com/MrAbnox/LD49",
    projectLink: "https://pedrorainha.itch.io/ld-49-happy-hour",
  },
  {
    title: "Crate Spider",
    year: 2021,
    imgSrc: require("../img/portfolio/crate-spiderpng.png"),
    description: `Crate Spider is a challenging game inspired by SpeedRunners and Spider-Man. The
    goal of the game is to clear all levels as fast as possible. Once you get the hang of how to 
    keep your momentum the game is really fun. It was made as a prototype for the class Making Games
    at the IT University of Copenhagen. `,
    projectLink: "https://predmada.itch.io/crate-spider",
  },
  {
    title: "Larry's Rumble",
    year: 2019,
    imgSrc: require("../img/portfolio/larrys-rumble.png"),
    description: `Larry's Rumble was a multiplayer brawler game. You play as Larry the Lobster, and you have to
		melee fight the other players. It was my first multiplayer game, and I used the mirror framework for networking.`,
    projectLink: "https://www.youtube.com/watch?v=FL8F9671tTg",
  },
  {
    title: "Procedural RPG",
    year: 2019,
    imgSrc: require("../img/portfolio/procedural-rpg.png"),
    description: `This was my exam project for the games Elective of my A.P. Degree. You play as a small man who travels a big procedural world.
	  Along the way there are Ninja's who try to ruin your day, kill or be killed. I used an algorithm inspired dby Conway's
	Game of Life to generate the terrain. For the AI I used A*. The game was played on Android phones. `,
    projectLink: "https://www.youtube.com/watch?v=MiTozrF5V2A",
  },
  {
    title: "Adam's Tower Defense",
    year: 2019,
    imgSrc: require("../img/portfolio/tower-defense.png"),
    description: `My tower defense game was created as an assignment for the Games elective course
    during my A.P. Degree. The task was to create a tower defense game, where if the path was blocked,
    the AI would destroy towers to make a new path.`,
    projectLink: "https://predmada.itch.io/adams-tower-defense",
  },
  {
    title: "Project Boost",
    year: 2018,
    imgSrc: require("../img/portfolio/boost.png"),
    description: `Project Boost was my second ever Unity project. It was created as part of a 
    Udemy course to prepare me for my Games elective on the 4th Semester of my A.P. Degree.`,
    projectLink: "https://predmada.itch.io/project-boost",
  },
];

export default games;
