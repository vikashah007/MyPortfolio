
import React from 'react';
import "./Dummyfooter.css";
import { FaLinkedin , FaGithub} from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { TbBrandLinktree } from "react-icons/tb";

const Dummyfooter= () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h3 className="footer-title">Vikash Kumar</h3>
          <p>Excited to turn ideas into reality? Let's connect and create something amazing!</p>
        </div>

        <div className="footer-links">
          <a href="itscoolvikash@gmail.com" className="footer-link"><CgMail/></a>
          <a href="itscoolvikash@gmail.com" className="footer-link"><TbBrandLinktree/></a>
          <a href="https://github.com/vikashah007" target="_blank" rel="noopener noreferrer" className="footer-link"><FaGithub/></a>
          <a href="https://www.linkedin.com/in/vikash-kumar-shah-80265a233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="footer-link"><FaLinkedin/></a>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Kumar_Vikash_Shah. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Dummyfooter;