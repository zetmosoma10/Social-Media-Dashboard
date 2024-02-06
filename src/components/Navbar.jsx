import Toggle from "./Toggle";

function NavBar() {
  return (
    <nav>
      <div className="nav-container container">
        <div className="nav-header ">
          <h1 className="heading">Social Media Dashboard</h1>
          <p className="total-followers">Total Followers: 23,004</p>
        </div>
        <Toggle />
      </div>
    </nav>
  );
}

export default NavBar;
