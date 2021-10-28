const games = [
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
