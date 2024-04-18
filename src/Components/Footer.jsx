import Contact from "./Contact"
import Copyrights from "./Copyrights"
import Map from "./Map"

const Footer = () => {
  return (
    <footer className="footer-section">
      <Map/>
      <Contact/>
      <Copyrights/>
    </footer>
  )
}

export default Footer