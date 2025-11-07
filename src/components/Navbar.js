function Navbar() {
  return (
    <nav>
      {/* 1st Layer: Logo / Brand Name */}
      <div className="nav-top">
        <h1>Perfumy</h1>
      </div>

      {/* 2nd Layer: Navigation Links */}
      <div className="nav-middle">
        <ul>
          <li>Home |</li>
          <li>Product |</li>
          <li>About |</li>
          <li>Contact |</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
