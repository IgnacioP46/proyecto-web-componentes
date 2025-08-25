import "../cards/cards.css";
import { projects } from "../data/data";

export const ProjectCard = (project) => `
<div class="project-card">
 <a href="${project.link}" target="_blank">
    <img src=${project.image} alt=${project.title} />
  </a>
  <div class="header">
    <h2>${project.title}</h2>
    <div>
      <a href=${project.github} target="_blank">
        <img src="./assets/logo GitHub.png" alt="GitHub Icon" />
      </a>
      <a href=${project.link} target="_blank">
        <img src="./assets/logo Link.png" alt="Link icon" />
      </a>
    </div>
  </div>
  <div class="detail">
    <p>${project.description}</p>
    <p class="tech">${project.tech.join(" - ")}</p>
  </div>
</div>
`;

