import styles from './Cards.module.css';
import ButtonB from './ButtonB'
import {useState} from 'react';

function Cards({img, title, tool, description, concept, site}){

    const [info, setInfo] = useState(false)

    function infoOn(){
        setInfo(true)
    }

    function infoOff(){
        setInfo(false)
    }

    return (
        <div  onMouseLeave={infoOff} className={styles.card}>
            <a onMouseEnter={infoOn} href={site}>
                <img src={img} alt='ERRO'/>
            </a>

            {info === true &&(
                <section>
                <h3> {title} </h3>
                <p> <strong> Ferramenta(s): </strong> {tool} </p>
                <p> {description} </p>
                <ButtonB text='Veja esta concepção' link={concept}/>
            </section>
            )}

        </div>
    )
}

export default Cards;