import "./PortfolioElement.scss";
import * as React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import YouTubeIcon from "@mui/icons-material/YouTube";

function PortfolioElement(props) {
  let {
    title,
    imgSrc,
    year,
    description,
    responsibilities,
    projectLink,
    sourceCode,
    video,
    gameEngine
  } = props.elementInfo;

  let buttons = () => {
    let jsx = [];
    let counter = 0;
    if (projectLink) {
      jsx[counter++] = (
        <span
          onClick={() => window.open(projectLink)}
          className="Portfolio-element-button"
        >
          <LinkIcon className="Portfolio-element-icon" />
          <span>Project</span>
        </span>
      );
    }
    if (sourceCode) {
      jsx[counter++] = (
        <span
          onClick={() => window.open(sourceCode)}
          className="Portfolio-element-button"
        >
          <GitHubIcon className="Portfolio-element-icon" />
          <span>Source code</span>
        </span>
      );
    }
    if (video) {
      jsx[counter++] = (
        <span
          onClick={() => window.open(video)}
          className="Portfolio-element-button"
        >
          <YouTubeIcon className="Portfolio-element-icon" />
          <span>Gameplay</span>
        </span>
      );
    }
    return jsx;
  };


  let DisplayResponsibilitiesIfExists = () => {
    
      if(responsibilities) {
        return <div>
          <span className="Portfolio-element-section-title">
            Responsibilities:
            <br />
            <span className="Portfolio-element-responsibilities">
              {responsibilities}
            </span>
          </span>
        </div>
      }
    
  }

  return (
    <div className="Portfolio-element">
      <div className="Portfolio-element-title">
        <span>{title}</span>
      </div>

      <div className="Portfolio-element-image">
        <img alt={title} src={imgSrc} />
      </div>

      <div className="Portfolio-element-section-title">
        <span>
          Year: <span style={{ color: "white" }}>{year}</span>
        </span>
      </div>
      <div className="Portfolio-element-section-title">
        <span>
          Engine: <span style={{ color: "white" }}>{gameEngine}</span>
        </span>
      </div>

      <div className="Portfolio-element-section-title">
        <span>
          Description: <br />
          <span className="Portfolio-element-description">{description}</span>
        </span>
      </div>
      {DisplayResponsibilitiesIfExists()}


      <div className="Portfolio-element-buttons">{buttons()}</div>
    </div>
  );
}

export default PortfolioElement;
