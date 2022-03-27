import styles from './NewProject.module.css'
import ProjectFrom from './ProjectForm'
import {useNavigate} from 'react-router-dom'
function NewProject() {
    const history = useNavigate();
    function createPost(project){
        //initialize cost and services
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(project)
        })
        .then(resp =>resp.json())
        .then((data)=>{
            //console.log(data)
            history('/projects',{state:{message:'Projeto criado com sucesso'}})
        })
        .catch((err)=>{console.log(err)})
    }

    return (
        <section className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectFrom handleSubmit={createPost} btnText="Criar projeto"/>
        </section>
    )
}
export default NewProject