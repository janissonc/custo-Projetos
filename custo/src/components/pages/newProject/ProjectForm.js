import { useEffect, useState } from 'react'

import Input from '../../shared/form/Input'
import Select from '../../shared/form/Select'
import SubmitButton from '../../shared/form/SubmitButton'
import styles from './ProjectForm.module.css'

function ProjectFrom({handleSubmit,btnText, projectData}) {
    const [categories,setCategories] = useState([])
    const [project,setProject] = useState(projectData || {})

    useEffect(()=>{
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then((resp)=>resp.json())
        .then((data)=>{
            console.log(categories)
            setCategories(data)
        })
        .catch((err)=>{console.error(err)})
    },[])
  
    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e){
        //console.log(project)
        setProject({...project,[e.target.name]:e.target.value})
    }

    function handleCategory(e){
        const categoria = categories.find(c=>c.id == e.target.value)
        setProject({
            ...project,
            category: {
            id: categoria.id,
            name: categoria.name,
            color: categoria.color,
            },
        })
    }
    return (
        <form onSubmit={submit} className={styles.form}> 
            
            <Input 
                type="text"
                text="Nome do projeto" 
                name="name"
                placeholder="Insira o nome do projeto"
                handleOnChange={handleChange}
                value={project.name ? project.name : ''}
            />
            <Input 
                type="number"
                text="Orçamento do projeto" 
                name="budget"
                placeholder="Insira o orçamento total"
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ''}
            />
            <Select 
                text="Selecione a categoria" 
                name="category_id" 
                options={categories}
                handleOnChange={handleCategory}
                value={project.category? project.category.id : ''}
            />
            <SubmitButton text={btnText}/>

        </form>
    )
}

export default ProjectFrom