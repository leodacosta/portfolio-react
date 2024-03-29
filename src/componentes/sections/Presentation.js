import styles from './Presentation.module.css'; 
import ButtonA from '../elements/ButtonA';
import { useEffect, useState } from 'react';

function Presentation(){
    const [text, setText] = useState('');
    const toRotate = ['Leonardo da Costa', 'UX/UI Designer & Web Developer'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 95;
    const [delta, setDelta] = useState(95);


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
            <h1> Bem-vindo ao <strong> meu Portfólio! </strong> <br></br> <br></br>
            Olá, eu sou {text} </h1>
            <p> 
                Sou um aficionado pelas áreas de Design e Tecnologia, e busco cada vez mais soluções que tragam inovações para o meu dia a dia. <br/>
                Como estudante destas mesmas, busco aprimorar-me para obter cada dia mais o compromisso <br/>
                de resolver situações complexas e trazer resultados para as pessoas que buscam o meu trabalho. <br/>
                Abaixo, se é possível ver alguns de meus projetos.
            </p>
            <ButtonA link='https://www.linkedin.com/in/leonardo-da-costa-88291b158/' text='Conecte-se comigo no LinkedIn!'/>
        </div>
    )
}

export default Presentation;