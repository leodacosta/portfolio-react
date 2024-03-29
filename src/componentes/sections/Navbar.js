import styles from './Navbar.module.css';
import { FaWhatsapp, FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';

function Navbar(){
    return (
        <div className={styles.navbar}>
            <ul>
                <li><Nav.Link href='#Presentation'><b>Apresentação</b></Nav.Link></li>
                |
                <li><Nav.Link href='#Skills'><b>Habilidades</b></Nav.Link></li>
                |
                <li><Nav.Link href='#Projects'><b>Projetos</b></Nav.Link></li> 
            </ul> 
            <ul>
                <li><a href='https://wa.me/5511985566930'><FaWhatsapp size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/leonardo-dacosta/'><FaLinkedin size={30}/></a></li>
                <li><a href='https://github.com/leodacosta'><FaGithub size={30}/></a></li>
                <li><a href='https://www.instagram.com/lxonrd/'><FaInstagram size={30}/></a></li>
                <li><a href='https://www.facebook.com/leonardo.dacosta.1420/'><FaFacebook size={30}/></a></li>
            </ul>
        </div>
    )   
}

export default Navbar;