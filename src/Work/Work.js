import '../socialButtons.css'
import './Work.css'
import Accordion from '@material-ui/core/Accordion';
import {WORK} from '../assets/data.js'
import TechStack from "../TechStack/TechStack.js"
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    overrides: {
        MuiAccordion: {
            root: {
                margin: "10px 0 0 0",
                background: "#597387",
            }
        },
        MuiAccordionDetails: {
            root: {
                background: "#d5dfe3"
            }
        }
    },
  });



function Work() {
    return (
        <div class="accordion-container">
            <h1 id="work">Experience</h1>
            <ThemeProvider theme={theme}>
                {WORK.map((job) => {
                    return (
                        <Accordion square={false}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}>
                            <div class="work-header">
                                <div class="work-company">
                                {job.company}
                                </div>
                                <div class="work-title">
                                {job.title}
                                </div>
                            </div>
                            <div class="work-date">
                            {job.date}
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div class="duties">
                                <ul>
                                {job.duties.map((duty) => <li>{duty}</li>)}
                                </ul>
                                <TechStack className="tech-stack" techStack={job.tech}/>
                            </div>
                        </AccordionDetails>
                        </Accordion>
                    )
                })}
            </ThemeProvider>
        </div>
    )
}

export default Work