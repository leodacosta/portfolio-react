import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer(){
    return (
        <div className={styles.footer}>
            <ul>
                <li><a href='https://www.instagram.com/lxonrd/'><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/leodacosta'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/leonardo-roberto-da-costa-guilherme-88291b158/'><FaLinkedin size={30}/></a></li>    
            </ul>
            <p> leodacosta1996@gmail.com </p>
            <p> Leonardo Roberto da Costa Guilherme © 2023 </p>
        </div>
    )
}

export default Footer;