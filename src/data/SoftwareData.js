const softwareProjects = [
  {
    title: "Quadtree",
    year: 2020,
    imgSrc: require("../img/portfolio/quadtree.png"),
    description: `For personal research I decided to look into how the quadtree datastructure worked, 
    and I made a visual implementation in Unity.`,
    sourceCode: "https://github.com/AdamSai/Quadtree",
  },
  {
    title: "System Integration",
    year: 2020,
    imgSrc: require("../img/portfolio/si_exam.png"),
    description: `For my System Integration exam at my bachelor's, we were tasked with creating
    multiple microservices, which integrated with a legacy system. We also used RabbitMQ as a message broker
    between some of the services and Kafka to aggregate data. My main responsibility was the monolithic legacy system
    and setting up Camunda and BPMN. Linked is a repository explaining the project
    and linking to the different services we developed.`,
    sourceCode: "https://github.com/SOFTBoiS/SI_Exam_Repository",
  },
  {
    title: "Large Systems Development",
    year: 2020,
    imgSrc: require("../img/portfolio/LSD.png"),
    description: `In a group of 10 we were tasked to create a frontend and backend project. Inbetween those two
    we had a Contract project with interfaces for both the backend and frontend. For both projects I set up Continous Integration,
    for the backend Continous Deployment and for the frontend Continous Delivery. I also setup logging for the projects, and lastly I set up
    monitoring using Prometheus and Grafana.`,
    projectLink: "https://github.com/CBASoftwareDevolopment2020/LSD-Project",
    sourceCode: "https://dev.azure.com/teamd-backend/lsd/_git/LSD-Frontend",
  },
];

export default softwareProjects;
