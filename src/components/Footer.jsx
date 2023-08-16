import React from "react";
import "../App.css";

function Footer() {
  const date = new Date();
  return (
    <div>
      <footer>Copyright {date.getFullYear()} | Sena</footer>
    </div>
  );
}

export default Footer;
