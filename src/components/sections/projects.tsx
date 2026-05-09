import todoIMG from "../../assets/todo-project.png";
import landIMG from "../../assets/landingIMG.png";
function projects(){
    const handleTodoDemo = ()=>{
        window.open('https://mostafamohamed123456.github.io/TodoList/')
    }
    const handleTodoGithub = ()=>{
        window.open('https://github.com/mostafamohamed123456/TodoList.git')
    }
    const handleLandingDemo = ()=>{
        window.open('https://mostafamohamed123456.github.io/Creative/')
    }
    const handleLandingGithub = ()=>{
        window.open('https://github.com/mostafamohamed123456/Creative.git')
    }
    return(
        <section className="projects-section">
            <h3 className="projects-text"><span>Latest</span> Projects</h3>
                <div className="container cards-container">
                    <div className="card">
                        <div className="card__img"><img src={todoIMG}></img></div>
                        <div className="card__descr-wrapper">
                            <p className="card__title">Todo List</p>
                            <ul className="tag">
                                <li className="tag__name">Javascript</li>
                                <li className="tag__name">TypeScript</li>
                                <li className="tag__name">CSS</li>
                                <li className="tag__name">HTML</li>
                            </ul>
                        <div className="card__links">
                            <div>
                            <a className="link" onClick={handleTodoDemo}><i className="fas fa-link"></i> Preview</a>
                            </div>
                            <div>
                            <a className="link" onClick={handleTodoGithub}><i className="github fab fa-github"></i> Code</a>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card__img"><img src={landIMG}></img></div>
                        <div className="card__descr-wrapper">
                            <p className="card__title">Landing Page</p>
                            <ul className="tag">
                                <li className="tag__name">HTML5</li>
                                <li className="tag__name">CSS3</li>
                                <li className="tag__name">Bootstrap</li>
                                <li className="tag__name">JavaScript</li>
                            </ul>
                        <div className="card__links">
                            <div>
                            <a className="link" onClick={handleLandingDemo}><i className="fas fa-link"></i> Preview</a>
                            </div>
                            <div>
                            <a className="link" onClick={handleLandingGithub}><i className="github fab fa-github"></i> Code</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__img"><img src={todoIMG}></img></div>
                        <div className="card__descr-wrapper">
                            <p className="card__title">Admin Dashboard</p>
                            <ul className="tag">
                                <li className="tag__name">Javascript</li>
                                <li className="tag__name">TypeScript</li>
                                <li className="tag__name">CSS</li>
                                <li className="tag__name">HTML</li>
                            </ul>
                        <div className="card__links">
                            <div>
                            <a className="link" href="#"><i className="fas fa-link"></i> Preview</a>
                            </div>
                            <div>
                            <a className="link" href="#"><i className="github fab fa-github"></i> Code</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                
                <button  className="button">
                <span className="button__icon-wrapper">
                    <svg
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="button__icon-svg"
                    width="10"
                    >
                    <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                    ></path>
                    </svg>

                    <svg
                    viewBox="0 0 14 15"
                    fill="none"
                    width="10"
                    xmlns="http://www.w3.org/2000/svg"
                    className="button__icon-svg button__icon-svg--copy"
                    >
                    <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                    ></path>
                    </svg>
                </span>
                Explore All
                </button>


        </section>
    )
}
export default projects