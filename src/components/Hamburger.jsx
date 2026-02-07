export default function Hamburger() {
  const handleClick = () => {
    document.querySelector(".nav-links")?.classList.toggle("expanded");
  };

  return (
    <div className="hamburger" onClick={handleClick}>
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </div>
  );
}
