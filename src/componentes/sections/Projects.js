import ButtonB from '../elements/ButtonB';
import styles from './Projects.module.css';
import Cards from '../elements/Cards';
import arquitetura from '../../Images/Projects/arquitetura.svg';
import ccxp from '../../Images/Projects/ccxp.svg';
import portfolio from '../../Images/Projects/portfolio.svg'

function Projects(){
    return (
        <div className={styles.projects} id='Projects'>
            <h1> Projetos </h1>
            <Cards
            img={arquitetura}
            title="Tradição em projetos de arquitetura"
            tech="HTML, CSS e JS"
            description="Desenvolvimento de uma Landing Page para formação em Tecnologia"
            repo="https://github.com/odranoeL6/projeto-landing-page-arquitetura"
            site="https://projetosdearquitetura-desafio1.netlify.app/"
                />
            <Cards
            img={ccxp}
            title="Landing Page CCXP"
            tech="HTML, CSS e JS"
            description="Desenvolvimento de uma Landing Page para formação em Tecnologia"
            repo="https://github.com/odranoeL6/Landing-Page-CCXP"
            site="https://landing-page-ccxp-one.vercel.app/"
                />
            <Cards
            img={portfolio}
            title="Meu Portfólio"
            tech="React"
            description="Este é o meu portfólio em React.JS"
            repo="https://github.com/odranoeL6/portfolio-react"
            site="https://portfolio-react-rosy-alpha.vercel.app/"
                />
            <ButtonB text='Acesse meu repositório' link='https://github.com/odranoeL6?tab=repositories'/>
        </div>
    )
}

export default Projects;