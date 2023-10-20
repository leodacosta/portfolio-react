import styles from './Presentation.module.css'; 
import ButtonA from '../elements/ButtonA';
import { useEffect, useState } from 'react';

function Presentation(){
    const [text, setText] = useState('');
    const toRotate = ['Leonardo da Costa', 'Desenvolvedor Front-End'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100);


    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return()=> {clearInterval(ticker)}

    }, [text])

    const toType = () =>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1)

        setText(updatedText);

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }   else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }

    }

    return (
        <div className={styles.presentation} id='Presentation'>
            <h4><strong> Bem-vindo ao meu Portfólio. </strong></h4>
            <h1> Olá, eu sou {text} </h1>
            <p> 
                Sou um aficionado por tecnologia e busco cada vez mais soluções que tragam inovações para o meu dia a dia. <br/>
                Como estudante da área de Tecnologia, busco aprimorar-me para obter cada dia mais o compromisso <br/>
                de resolver situações complexas e trazer resultados para as pessoas que buscam o meu trabalho. <br/>
                Abaixo, se é possível enxergar alguns de meus projetos.
            </p>
            <ButtonA link='https://github.com/odranoeL6' text='Conecte-se comigo!'/>
        </div>
    )
}

export default Presentation;