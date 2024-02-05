function Toggle({ theme, handleToggle }) {
  const themeClass = theme ? "light" : "";
  return (
    <div className="toggle-container">
      <p className={`toggle-text ${themeClass}`}>Dark Mode</p>
      <div onClick={handleToggle} className={`toggler ${themeClass}`}>
        <div className="toggle"></div>
      </div>
    </div>
  );
}

export default Toggle;
