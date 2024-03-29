import { FaWhatsapp, FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer(){
    return (
        <div className={styles.footer}>
            <ul>
                <li><a href='https://wa.me/5511985566930'><FaWhatsapp size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/leonardo-dacosta/'><FaLinkedin size={30}/></a></li>
                <li><a href='https://github.com/leodacosta'><FaGithub size={30}/></a></li>
                <li><a href='https://www.instagram.com/lxonrd/'><FaInstagram size={30}/></a></li>
                <li><a href='https://www.facebook.com/leonardo.dacosta.1420/'><FaFacebook size={30}/></a></li>
            </ul>
            <p><a href='mailto:leodacosta1996@gmail.com'> leodacosta1996@gmail.com </a></p>
            <p> Leonardo Roberto da Costa Guilherme © 2023 </p>
        </div>
    )
}

export default Footer;