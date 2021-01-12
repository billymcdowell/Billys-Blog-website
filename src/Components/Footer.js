import React from "react";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-inner">
        <div style={{ width: "50%" }}>
          <h4>About</h4>
          <p>I am a paragraph of text</p>
        </div>
        <div style={{ width: "25%" }}>
          <h4>Projects</h4>
          <ul>
            <li>
              <a href="#">Option 1</a>
            </li>
            <li>
              <a href="#">Option 2</a>
            </li>
            <li>
              <a href="#">Option 3</a>
            </li>
          </ul>
        </div>
        <div style={{ width: "25%", display: "block" }}>
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="#">email@email.com</a>
            </li>
            <li>
              <a href="#">07749303440</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="footer-inner"
        style={{
          borderTop: "1px solid #e5e5e5",
          paddingBottom: "0",
          color: "#818181"
        }}
      >
        This is the bottom of the footer
      </div>
    </div>
  );
}
