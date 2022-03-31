import "./TechStack.css"

function TechStack(props) {
    return (
        <div class="tech-stack">
            {props.techStack.map((tech) => <span class="tech">{tech}</span>)}
        </div>
    )
}

export default TechStack;