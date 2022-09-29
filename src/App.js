import "./App.css";

import Navbar from "./components/nav";

function App() {
  function handleScroll() {
    var scrolled = document.scrollingElement.scrollTop;
    let navbar = document.getElementById("menuParent");
    if (window.screen.width < 768) return;
    if (scrolled >= 120) navbar.style.backgroundColor = "#171717";
    else navbar.style.backgroundColor = "transparent";
  }
  window.addEventListener("scroll", handleScroll);
  return (
    <div className="App">
      <Navbar />

      <p className="relative top-96 pt-96 text-white">Scroll Text</p>
    </div>
  );
}

export default App;
