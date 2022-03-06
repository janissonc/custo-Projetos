import styles from './NewProject.module.css'
import ProjectFrom from './ProjectForm'
function NewProject() {
    return (
        <section className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectFrom btnText="Criar projeto"/>
        </section>
    )
}
export default NewProject