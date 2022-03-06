import { useEffect, useState } from 'react'

import Input from '../../shared/form/Input'
import Select from '../../shared/form/Select'
import SubmitButton from '../../shared/form/SubmitButton'
import styles from './ProjectForm.module.css'

function ProjectFrom({btnText}) {
    const [categories,setCategories] = useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then((resp)=>resp.json())
        .then((data)=>{
            setCategories(data)
        })
        .catch((err)=>{console.error(err)})
    },[])
  

    return (
        <form className={styles.form}> 
            
            <Input 
                type="text"
                text="Nome do projeto" 
                name="name"
                placeholder="Insira o nome do projeto"
            />
            <Input 
                type="number"
                text="Orçamento total do projeto" 
                name="bugets"
                placeholder="Insira o orçamento total"
            />
            <Select 
                text="Selecione a categoria" 
                name="categoria_id" 
                options={categories}
            />
            <SubmitButton text={btnText}/>

        </form>
    )
}

export default ProjectFrom