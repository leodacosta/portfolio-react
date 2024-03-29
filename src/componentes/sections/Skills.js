import styles from './Skills.module.css';
import figma from '../../Images/Skills/figma.svg';
import css from '../../Images/Skills/css.svg';
import html from '../../Images/Skills/html.svg';
import javascript from '../../Images/Skills/javascript.svg';
import react from '../../Images/Skills/react.svg';
import typescript from '../../Images/Skills/typescript.svg';
import sass from '../../Images/Skills/sass.svg';


function Skills(){
    return (
        <div className={styles.skill} id='Skills'>
            <h1> Habilidades </h1>
            <p> Conheça um pouco das minhas principais habilidades e conhecimentos. </p>
            <div>
                <img src={figma}/>
                <img src={css}/>
                <img src={html}/>
                <img src={javascript}/>
                <img src={react}/>
                <img src={typescript}/>
                <img src={sass}/>
            </div>
        </div>
    )
}

export default Skills;