const Header = () => {
  return (
    <nav>
      <div className="logo" id="home">
        <h1>Cyara</h1>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Service</a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Sign In</a>
          </li>
          <li>
            <a href="#">Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
