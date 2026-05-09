import '../../styles/sections.css';
import myImage from '../../assets/heroSectionRightPic.png';
function Hero() {
    return (
        <section className="hero-section" id="home">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-7 hero-content">
                        
                        <h3 className="hello-text">Hello, I'm</h3>
                        <h1 className="name-text ">Mostafa Mohamed</h1>
                        <h2 className="job-text typing-text">I'm a <span>Web Developer</span></h2>
                        <p className="description-text">I'm a web developer with a passion for creating beautiful and functional websites.</p>
                        <div className="hero-buttons">
                            <a href="#" className="btn btn-primary contact-btn">Contact Me</a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5 hero-visual" aria-hidden="true">
                        <div className="hero-image-placeholder">
                            <img src={myImage} className='right-hand-img'></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero;