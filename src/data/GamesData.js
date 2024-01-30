const games = [
  {
    title: "Core Decay",
    imgSrc: require("../img/portfolio/core_decay_logo.jpg"),
    year: "To be announced",
    company: "Slipgate-Ironworks",
    role: "Programmer & Tech Artist",
    description: `Core Decay is a game inspired by Deus Ex and System Shock 2. In the game combat is high-stakes and unforgiving, but it is not the only path to success. You may find it useful to avoid hostile engagement altogether and instead find creative solutions to reach your goals.
    Talk to and persuade people, explore alternate routes, hack computers and security systems, discover lost logs, keycodes and passwords, and use every tool at your disposal to reach your objectives.
    `,
    responsibilities: [
      <span className="portfolio-element-point-list">●</span>," Implement art assets from artists and setup gameobjects in Unity",
      <br />,

      <span className="portfolio-element-point-list">●</span>," Gameplay programming",
      <br />,
      <span className="portfolio-element-point-list">●</span>," Tools Programming",
      <br />,
      <span className="portfolio-element-point-list">●</span>," Juice gameplay elements",
    ],
    gameEngine: "Unity",
    projectLink: "https://store.steampowered.com/app/1260940/Core_Decay/",
    video: "https://www.youtube.com/watch?v=cpVB-52enLA",
  },
  {
    title: "Co-Pirates",
    imgSrc: require("../img/portfolio/co-pirates.png"),
    year: 2023,
    company: "IT-University of Copenhagen",
    role: "Systems & Audio Programmer",
    description: `Co-Pirates is a 3-player local couch roguelike co-op game, where 3 pirates search the high seas in the quest for plunder.
    The game currently features two floors and two very diverse boss fights. Let us know how far you get!
    We developed this project for our thesis to help us understand if adding roguelite mechanics to a couch co-op game will make it more replayable.    `,
    responsibilities: [
      <span className="portfolio-element-point-list">●</span>," Create various systems enabling gameplay, such as an interactable system allowing players to interact with different types of objects.",
      <br />,

      <span className="portfolio-element-point-list">●</span>," Implement audio using FMOD",
      <br />,
      <span className="portfolio-element-point-list">●</span>," Gameplay programming",
      <br />,
      <span className="portfolio-element-point-list">●</span>," AI Programming",
      <br />,
      <span className="portfolio-element-point-list">●</span>," UI Programming",
      <br />,
      <span className="portfolio-element-point-list">●</span>," Character selection menu",
    ],
    gameEngine: "Unity",
    projectLink: "https://pedrorainha.itch.io/co-pirates",
    video: "https://www.youtube.com/watch?v=SiepPmR8soU",
  },
  {
    title: "The Great Oaks",
    imgSrc: require("../img/portfolio/great_oaks.png"),
    year: 2022,
    company: "IT-University of Copenhagen",
    role: "Programmer",
    description: `The Great Oaks is a 2.5D narrative driven local co-op platformer. It was created for the course Game World Design, where our 
    goal was to create the first level of a believable game world that would leave the player asking for more. The game uniquely incorporates a 
    dialogue system into a local co-op game, where the players each get to make choices for what they characters say to each other. 
    Together with our narrative/audio designer I designed and implemented the dialogue system.`,
    responsibilities: [
      <span className="portfolio-element-point-list">●</span>," Set up and decide how we worked with git",
      <br />,

      <span className="portfolio-element-point-list">●</span>," Set up the initial project with packages and FMOD",
      <br />,
      <span className="portfolio-element-point-list">●</span>," Participate in meetings and help design the game",
      <br />,
      <span className="portfolio-element-point-list">●</span>," Work together with designers to create and implement the dialogue system",
      <br />,
      <span className="portfolio-element-point-list">●</span>," Implement camera system that transitions between puzzle views and normal game view",
      <br />,
      <span className="portfolio-element-point-list">●</span>," Character selection menu",
      <br />,
      <span className="portfolio-element-point-list">●</span>," Various bug fixes and pair programming tasks",
    ],
    gameEngine: "Unity",
    projectLink: "https://barrythecoolbee.itch.io/the-great-oaks",
    video: "https://youtu.be/d1KePsYD-4g",
  },
  {
    title: "Funky Monkey",
    imgSrc: require("../img/portfolio/funky_monkey.png"),
    role: "Programmer/Designer",
    year: 2024,
    description: `A game made for Global Game Jam 2024 where the theme was "Make Me Laugh". We decided to create a humerous game where you play as a monkey, pranking people
     by throwing bananas at them. I did most of the programming and the audio implementation.`,
    gameEngine: "Unity",
    projectLink:
      "https://nnaya.itch.io/funky-monkey",
      video: "https://youtu.be/tfFdpWestGI"
  },
  {
    title: "Boat Attack",
    imgSrc: require("../img/portfolio/boat_attack.jpeg"),
    role: "Programmer",
    company: "Unity Technologies",
    year: 2022,
    description: `While I did not work on the gameplay of Boat Attack, I helped restructure the folder architecture of the 2021 branch to make it compatible with assembly 
    definitions. I also implemented integrations tests for the input system and the replay cameras in the game. This was done while I was a 
    student worker at Unity Technologies. Our main goal was to document the process of adding tests to an existing project. I did this by 
    making the project compatible with assembly definitions, and due to time contraints, with as little code changes as possible. 
    I would have liked to introduce interfaces and refactor some code to make it more testable.`,
    responsibilities: [
      <span className="portfolio-element-point-list">●</span>," Refactor the folder structure and implement assembly definitions",
      <br />,
      <span className="portfolio-element-point-list">●</span>," Implement Unit Tests to showcase how to use Unity Test Framework",
    ],
    gameEngine: "Unity",
    sourceCode:
      "https://github.com/Unity-Technologies/BoatAttack/tree/testing/2021-update",
  },
  {
    title: "Feral Sitters",
    imgSrc: require("../img/portfolio/feral_sitters.png"),
    year: 2021,
    company: "IT-University of Copenhagen",
    role: "Tech Lead",
    description: `Feral Sitters is a 4 player local co-op game created for my semester project for the course Making Games during my 1st semester 
    at the IT-University. The goal of the game is for the players to complete a list of tasks to take care of a human baby.
    I was the tech lead for the project, and helped create the systems that allows players to carry object, place objects 
    inside other objects, as well as heating up the bottle of milk. I also set up a continous deployment pipeline that would create builds 
    whenever we pushed to our main branch.`,
    responsibilities: [
      <span className="portfolio-element-point-list">●</span>," Participate in meetings and help design the game",
      <br />,
      <span className="portfolio-element-point-list">●</span>," I had the tech lead role and I set up and decide how we worked with git",
      <br />,
      <span className="portfolio-element-point-list">●</span>," Created Continous Deployment pipeline for game builds with Github Actions",
      <br />,
      <span className="portfolio-element-point-list">●</span>," Create basic AI for the baby running around",
      <br />,
      <span className="portfolio-element-point-list">●</span>," Create interactable system that allows players to interact with the items in the game",
      <br />,
      <span className="portfolio-element-point-list">●</span>," Create system to heat up bottles for the baby by putting them in the microwave, oven or near the fireplace",
      <br />,
      <span className="portfolio-element-point-list">●</span>," Various bug fixes and pair programming tasks",
      <br />,
      <span className="portfolio-element-point-list">●</span>," Character selection menu",
      <br />,
      <span className="portfolio-element-point-list">●</span>," Various bug fixes and pair programming tasks",
    ],
    gameEngine: "Unity",
    projectLink: "https://pedrorainha.itch.io/feralsitters",
    video: "https://www.youtube.com/watch?v=bYEzVGHy4xM",
  }
  ,
  {
    title: "RogueDino",
    imgSrc: require("../img/portfolio/rogue_dino_2.png"),
    year: 2021,
    company: "IT-University of Copenhagen",
    role: "Audio Programmer & Systems Programmer",
    gameEngine: "Simple Render Engine",
    description: `This project is a 2D Top-Down Rogue-like game inspired by the traditional and
    basic elements of a game of this genre. It is composed of procedurally generated
    rooms, different weapons and some enemies randomly distributed through the rooms.
    The player must defend itself and kill all the enemies of the level. The project was
    developed using C++, using the Simple Render Engine by Morten Nobel.`,
    responsibilities: [
      <span className="portfolio-element-point-list">●</span>," Implemented FMOD into the engine",
      <br />,
      <span className="portfolio-element-point-list">●</span>," Created Audio Component to game objects can play sounds",
      <br />,
      <span className="portfolio-element-point-list">●</span>," Create basic game object serialization system from JSON",
    ],
    projectLink: "https://predmada.itch.io/roguedino",
    sourceCode: "https://github.com/BapInc/GamesProgrammingExam",
    video: "https://www.youtube.com/watch?v=jT3ySnlIO50",
  },
  {
    title: "Space Monkeys",
    role: "Programmer",
    imgSrc: require("../img/portfolio/space_monkeys.png"),
    year: 2022,
    description: `Space Monkeys was made with limited time while I was volunteering for Nordic GameJam in 2022. Using a Lego Technic hub 
    me and my partner created a controller that would be used as a flight joystick. The game is a simple game where you shoot asteroids 
    while avoiding being hit by them. The game can be played with the customer controller we created, or with mouse and keyboard.`,
    responsibilities: "",
    gameEngine: "Unity",
    projectLink: "https://predmada.itch.io/space-monkeys",
  },
  {
    title: "Happy Hour",
    imgSrc: require("../img/portfolio/happy-hour.png"),
    year: 2021,
    role: "Programmer",
    description: `Happy Hour was made for Ludom Dare 49. The theme was 'unstable' and we decided
    to make a beer serving game. You have to serve beers to customers before they get angry. The drunker
    they get, and the longer they have to wait, the likelier they are to start fighting. As the waiter
    you can also headbutt the patrons if you really feel like it. I worked on bug-fixing and refactoring 
    the AI after submission. I also tried out the new UI Toolkit for Unity.`,
    responsibilities: "",
    gameEngine: "Unity",
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
    gameEngine: "Unity",
    projectLink: "https://predmada.itch.io/crate-spider",
  },
  {
    title: "Larry's Rumble",
    year: 2019,
    imgSrc: require("../img/portfolio/larrys-rumble.png"),
    description: `Larry's Rumble was a multiplayer brawler game. You play as Larry the Lobster, and you have to
		melee fight the other players. It was my first multiplayer game, and I used the mirror framework for networking.`,
    gameEngine: "Unity",
    projectLink: "https://www.youtube.com/watch?v=FL8F9671tTg",
  },
  {
    title: "Procedural RPG",
    year: 2019,
    imgSrc: require("../img/portfolio/procedural-rpg.png"),
    description: `This was my exam project for the games Elective of my A.P. Degree. You play as a small man who travels a big procedural world.
	  Along the way there are Ninja's who try to ruin your day, kill or be killed. I used an algorithm inspired dby Conway's
	Game of Life to generate the terrain. For the AI I used A*. The game was played on Android phones. `,
    gameEngine: "Unity",
    projectLink: "https://www.youtube.com/watch?v=MiTozrF5V2A",
  },
  {
    title: "Adam's Tower Defense",
    year: 2019,
    imgSrc: require("../img/portfolio/tower-defense.png"),
    description: `My tower defense game was created as an assignment for the Games elective course
    during my A.P. Degree. The task was to create a tower defense game, where if the path was blocked,
    the AI would destroy towers to make a new path.`,
    gameEngine: "Unity",
    projectLink: "https://predmada.itch.io/adams-tower-defense",
  },
  {
    title: "Project Boost",
    year: 2018,
    imgSrc: require("../img/portfolio/boost.png"),
    description: `Project Boost was my second ever Unity project. It was created as part of a 
    Udemy course to prepare me for my Games elective on the 4th Semester of my A.P. Degree.`,
    gameEngine: "Unity",
    projectLink: "https://predmada.itch.io/project-boost",
  },
];

export default games;
