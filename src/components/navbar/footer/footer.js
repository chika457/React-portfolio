import "./style.css";

import vk from "./../../../img/icons/vk.svg";
import instagram from "./../../../img/icons/instagram.svg";
import twitter from "./../../../img/icons/twitter.svg";
import gitHub from "./../../../img/icons/gitHub.svg";
import linkedIn from "./../../../img/icons/linkedIn.svg";

const Footer = () => {
  return (<footer className="footer">
    <div className="container">
      <div className="footer__wrapper">
        <ul className="social">
          <li className="social__item"><a href="https://vk.com/akulla754"><img src={vk} alt="Link" /></a></li>
          <li className="social__item"><a href="https://instagram.com/my.oxxi?igshid=OGQ2MjdiOTE="><img src={instagram} alt="Link" /></a></li>
          <li className="social__item"><a href="#!"><img src={twitter} alt="Link" /></a></li>
          <li className="social__item"><a href="https://github.com/chika457"><img src={gitHub} alt="Link" /></a></li>
          <li className="social__item"><a href="#!"><img src={linkedIn} alt="Link" /></a></li>
        </ul>
        <div className="copyright">
          <p>© 2023 frontend-dev.com</p>
        </div>
      </div>
    </div>
  </footer>);
}

export default Footer;
