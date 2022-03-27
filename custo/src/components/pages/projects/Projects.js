import {useLocation} from 'react-router-dom'
import styles from './Projects.module.css'
import Message from "../../shared/message/Message"
import Container from '../../shared/layout/Container'
import LinkButtom from '../../shared/link-button/LinkButton'
import { useState , useEffect} from 'react'
import ProjectCard from './projectCard/ProjectCard'
import Loading from '../../shared/loading/Loading'

function Projects(){
    const [projects,setProjects] = useState([])
    const [removeLoading,setRemoveLoading] = useState(false)
    const [projectMessage,setProjectMessage] = useState('')

    const location = useLocation();
    let message = '';
    if(location.state){
        message = location.state.message
        console.log("mensagem: "+message)
    }

    useEffect(()=>{
        setTimeout(()=>{
            fetch("http://localhost:5000/projects",{
                method:"GET",
                headers:{
                    "content-type":"Aplication/json",
                },
            })
            .then((resp)=> resp.json())
            .then((data)=>{
                console.log(data)
                setProjects(data)
                setRemoveLoading(true)
            })
            .catch((err)=>console.error(err))
        },3000)
    },[]);

    function removeProject(id){
        fetch(`http://localhost:5000/projects/${id}`,{
                method:"DELETE",
                headers:{
                    "content-type":"Aplication/json",
                },
            })
            .then((resp)=> resp.json())
            .then((data)=>{
                
                setProjects(projects.filter((project)=> project.id !== id))
                setProjectMessage('Projeto removido com sucesso!')
            })
            .catch((err)=>console.error(err))
    }

    return(
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus projetos</h1>
                <LinkButtom to="/newproject" text='Criar projeto'/>
                
            </div>
            {message && (<Message msg={message} type="success"/>)}
            {projectMessage && (<Message msg={projectMessage} type="success"/>)}
            <Container customClass="start">
                {projects.length > 0 && projects.map((project)=>(
                    <ProjectCard 
                        id={project.id}
                        name={project.name}
                        budget={project.budget}
                        category={project.category}
                        key={project.id}
                        handleRemove={removeProject}
                    />
                ))}
                {!removeLoading && <Loading />}
            </Container>
                
           

        </div>
    )
}

export default Projects