import Banner from "../assets/banner.jpg"
const Hero = () => {
  return (
    <div className="hero">
      <div className="banner">
        <img className="banner-img" src={Banner} alt="none" />
        <p className="banner-text">Hello Fitness <br />Freaks!</p>
        </div>
      <div className="banner-button">
        <button className="btn">Get Started</button>
      </div>
    </div>
  )
}

export default Hero