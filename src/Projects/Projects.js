import '../socialButtons.css'
import './Projects.css'
import Accordion from '@material-ui/core/Accordion';
import {PROJECTS} from '../assets/data.js'
import TechStack from "../TechStack/TechStack.js"
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    overrides: {
        MuiAccordion: {
            root: {
                margin: "20px 0 0 0",
                background: "#202A44",
            }
        },
        MuiAccordionDetails: {
            root: {
                background: "#d5dfe3"
            }
        }
    },
  });

function Projects() {


    return (
        <div class="accordion-container">
            <h1 id="projects">Projects</h1>
            <ThemeProvider theme={theme}>
                {PROJECTS.map((project) => {
                    let trophy = (project.winner)? <i class="fa fa-trophy fa-lg" id="trophy" aria-hidden="true"></i> : null;
                    let projectAdditional = (project.additional)? <span class="project-additional">{project.additional}</span> : null;
                    let git = (project.links.github)? (
                        <a
                            href={project.links.github}
                            class="social-buttons__button social-button social-button--github"
                            aria-label="GitHub"
                        >       
                            <span class="icon social-button__inner">
                                <i class="fab fa-github"></i>
                            </span>
                        </a>
                        ): null;
                    let devPost = (project.links.devpost)? <a href={project.links.devpost} class="project-link"> Devpost </a> : null;
                    let live = (project.links.live)? <a href={project.links.live} class="project-link"> Demo </a> : null;
                    return (
                        <Accordion square={false}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}>
                            <div class="project-header">
                                <div class="project-title">
                                {project.title}
                                </div>
                                {trophy}
                                <div class="project-summary">
                                {project.summary}
                                </div>
                            </div>
                            <div class="project-link-wrapper">
                                {devPost}
                                {live}
                                {git}
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div class="duties">
                                {projectAdditional}
                                <ul>
                                {project.duties.map((duty) => {
                                    if(duty.split(" ")[0] === "Winner" || duty.split(" ")[0] === "Finalist") {
                                        return <li class="winner">{duty}</li>
                                    } else {
                                        return <li>{duty}</li>
                                    }
                                })}
                                </ul>
                                <TechStack className="tech-stack" techStack={project.tech}/>
                            </div>
                        </AccordionDetails>
                        </Accordion>
                    )
                })}
            </ThemeProvider>
        </div>
    )
}


export default Projects;