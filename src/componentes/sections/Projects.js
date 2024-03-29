import ButtonC from '../elements/ButtonC.js';
import styles from './Projects.module.css';
import Cards from '../elements/Cards';
import uidesign1 from '../../Images/Projects/uidesign1.png';
import arquitetura from '../../Images/Projects/arquitetura.png';
import ccxp from '../../Images/Projects/ccxp.svg';
import portfolio from '../../Images/Projects/portfolio.png';
import planejador from '../../Images/Projects/planejador.png';
import movielist from '../../Images/Projects/movie-list.png';


function Projects(){
    return (
        <div className={styles.projects} id='Projects'>
            <h1> Projetos </h1>
            <Cards id='ui'
            img={uidesign1}
            title="UI Design - DeliverEase"
            tool="Figma"
            description="Desenvolvimento de uma Interface de Usuário para uma empresa fictícia, com sua Identidade Visual e Benchmarking"
            concept="https://www.figma.com/file/G4mjFAhXv7bK0TDjN0tI3x/UI-Design---DeliverEase?type=design&node-id=0-1&mode=design&t=PAa6K4czeCpWnq6u-0"
            site="https://www.figma.com/community/file/1355350521948741336"
                />
            <Cards
            img={arquitetura}
            title="Tradição em projetos de arquitetura"
            tool="HTML e CSS"
            description="Desenvolvimento de uma Landing Page para formação em Tecnologia"
            concept="https://github.com/leodacosta/projeto-landing-page-arquitetura"
            site="https://projetosdearquitetura-desafio1.netlify.app/"
                />
            <Cards
            img={ccxp}
            title="Landing Page CCXP"
            tool="HTML, CSS e JS"
            description="Ideia de Landing Page como um Projeto para o festival CCXP"
            concept="https://github.com/leodacosta/Landing-Page-CCXP"
            site="https://landing-page-ccxp-one.vercel.app/"
                />
            <Cards
            img={portfolio}
            title="Meu Portfólio"
            tool="React"
            description="Este é o meu portfólio em React.JS"
            concept="https://github.com/leodacosta/portfolio-react"
            site="https://portfolio-react-rosy-alpha.vercel.app/"
                />
            <Cards
            img={planejador}
            title="Planejador Diário"
            tool="React"
            description="Interface de lista de tarefas sendo um planejador diário, possível de edição de tarefa e seu status"
            concept="https://github.com/leodacosta/react-js-interface"
            site="https://tasklist-bay.vercel.app/"
                />
            <Cards
            img={movielist}
            title="Movie List"
            tool="React, SASS, Vite e React Router"
            description="Lista de filmes criada usando React.JS que possibilita o usuário procurar por filmes, utilizando uma API do site The Movie DB"
            concept="https://github.com/leodacosta/movie-list"
            site="https://movie-list-mu-three.vercel.app/"
                />

            <ButtonC id='button' text='Acesse meu GitHub' link='https://github.com/leodacosta'/>
        </div>
    )
}

export default Projects;