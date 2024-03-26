import ButtonC from '../elements/ButtonC.js';
import styles from './Projects.module.css';
import Cards from '../elements/Cards';
import arquitetura from '../../Images/Projects/arquitetura.png';
import ccxp from '../../Images/Projects/ccxp.svg';
import portfolio from '../../Images/Projects/portfolio.png';
import planejador from '../../Images/Projects/planejador.png';
import movielist from '../../Images/Projects/movie-list.png';


function Projects(){
    return (
        <div className={styles.projects} id='Projects'>
            <h1> Projetos </h1>
            <Cards
            img={arquitetura}
            title="Tradição em projetos de arquitetura"
            tool="HTML e CSS"
            description="Desenvolvimento de uma Landing Page para formação em Tecnologia"
            repo="https://github.com/leodacosta/projeto-landing-page-arquitetura"
            site="https://projetosdearquitetura-desafio1.netlify.app/"
                />
            <Cards
            img={ccxp}
            title="Landing Page CCXP"
            tool="HTML, CSS e JS"
            description="Desenvolvimento de uma Landing Page para formação em Tecnologia"
            repo="https://github.com/leodacosta/Landing-Page-CCXP"
            site="https://landing-page-ccxp-one.vercel.app/"
                />
            <Cards
            img={portfolio}
            title="Meu Portfólio"
            tool="React"
            description="Este é o meu portfólio em React.JS"
            repo="https://github.com/leodacosta/portfolio-react"
            site="https://portfolio-react-rosy-alpha.vercel.app/"
                />
            <Cards
            img={planejador}
            title="Planejador Diário"
            tool="React"
            description="Interface de lista de tarefas sendo um planejador diário, possível de edição de tarefa e seu status"
            repo="https://github.com/leodacosta/react-js-interface"
            site="https://tasklist-bay.vercel.app/"
                />
            <Cards
            img={movielist}
            title="Movie List"
            tool="React, SASS, Vite e React Router"
            description="Lista de filmes criada usando React.js que possibilita o usuário procurar por filmes, utilizando uma API do site The Movie DB"
            repo="https://github.com/leodacosta/movie-list"
            site="https://movie-list-mu-three.vercel.app/"
                />

            <ButtonC id='button' text='Acesse meu repositório completo' link='https://github.com/leodacosta?tab=repositories'/>
        </div>
    )
}

export default Projects;