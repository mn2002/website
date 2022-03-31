import "./IconBar.css"
import resume from "../assets/resume.pdf"

function IconBar() {
    return (
        <div class="icon-bar">
            <a
                href="https://github.com/mn2002"
                class="icon social-buttons__button social-button social-button--github"
                aria-label="GitHub"
            >       
                <span class="social-button__inner">
                    <i class="fab fa-github"></i>
                </span>
            </a>
            <a
                    href="mailto:mxnguyyen@gmail.com"
                    class="icon social-buttons__button social-button social-button--mail"
                    aria-label="Facebook"
                >
                    <span class="social-button__inner">
                        <i class="fas fa-envelope"></i>
                    </span>
             </a>
            <a
                    href="https://www.linkedin.com/in/michelle-nguyen-b87117218/"
                    class="icon social-buttons__button social-button social-button--linkedin"
                    aria-label="LinkedIn"
                >
                    <span class="social-button__inner">
                        <i class="fab fa-linkedin-in"></i>
                    </span>
            </a>
            <a
                    href={resume}
                    class="icon social-buttons__button social-button social-button--steam"
                    aria-label="SnapChat"
                >
                    <span class="social-button__inner">
                        <i class="fa fa-file"></i>
                    </span>
            </a>
        </div>
    )
}


export default IconBar;