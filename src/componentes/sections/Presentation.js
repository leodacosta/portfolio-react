import styles from './Presentation.module.css'; 
import ButtonA from '../elements/ButtonA';

function Presentation(){
    return (
        <div className={styles.presentation} id='Presentation'>
            <h4><strong>Bem-vindo ao meu Portfólio.</strong></h4>
            <h1>Olá, eu sou Leonardo da Costa!</h1>
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