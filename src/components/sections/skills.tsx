function skills(){
    return(
        <section className="skills-section" id="skills">
            <h3 className="skills-text">My <span>Skills</span></h3>
            <div className="container">
                <div className="skill-box">
                    <span className="title">HTML</span>

                    <div className="skill-bar">
                        <span className="skill-per html">
                            <span className="tooltip">97%</span>
                        </span>
                    </div>
                </div>

                <div className="skill-box">
                    <span className="title">CSS</span>

                    <div className="skill-bar">
                        <span className="skill-per css">
                            <span className="tooltip">95%</span>
                        </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title">JavaScript</span>

                    <div className="skill-bar">
                        <span className="skill-per javascript">
                            <span className="tooltip">85%</span>
                        </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title">REACT</span>

                    <div className="skill-bar">
                        <span className="skill-per react">
                            <span className="tooltip">80%</span>
                        </span>
                    </div>
                </div>

                <div className="skill-box">
                    <span className="title">TAILWIND</span>

                    <div className="skill-bar">
                        <span className="skill-per tailwind">
                            <span className="tooltip">85%</span>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default skills