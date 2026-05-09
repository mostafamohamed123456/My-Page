import myProfile from "../../assets/PP.jpg"
function aboutMe(){
    return(
        <section className="about-section" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-7 about-content">
                        <h3 className="about-text">About Me</h3>
                        <p className="description-text">Front-End Developer focused on building modern, responsive, and user-friendly web applications using React.js and JavaScript.
                        I enjoy turning ideas into clean, fast, and interactive websites with attention to performance, usability, and smooth user experience.</p>
                        <div className="about-btns mt-5">
                            <a href=""><i className="instagram fab fa-instagram"></i></a>
                            <a href=""><i className="facebook fab fa-facebook"></i></a>
                            <a href=""><i className="whatsapp fab fa-whatsapp"></i></a>
                            <a href=""><i className="linkedin fab fa-linkedin"></i></a>
                            <a href=""><i className="github fab fa-github"></i></a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5 hero-visual" aria-hidden="true">
                        <div className="hero-image-placeholder">
                            <img src={myProfile} className='right-hand-img-about'></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default aboutMe