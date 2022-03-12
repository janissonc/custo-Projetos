import {useLocation} from 'react-router-dom'
import styles from './Projects.module.css'
import Message from "../../shared/message/Message"
import Container from '../../shared/layout/Container'
import LinkButtom from '../../shared/link-button/LinkButton'

function Projects(){
    const location = useLocation();
    let message = '';
    if(location.state){
        message = location.state.message
        console.log("mensagem: "+message)
    }
    return(
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus projetos</h1>
                <LinkButtom to="#" text='Criar projeto'/>
                
            </div>
            {message && (<Message msg={message} type="success"/>)}
            <Container customClass="start">
                <p>Projetos...</p>
            </Container>
                
           

        </div>
    )
}

export default Projects