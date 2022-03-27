import {useState} from 'react'

import Input from '../../../../shared/form/Input'
import SubmitButton from '../../../../shared/form/SubmitButton'

import styles from './ServiceForm.module.css'

function ServiceForm({btnText,handleSubmit,projectData}){

    const [service,setService] = useState({})


    function submit(e){
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }

    function handleChange(e){
        setService({...service,[e.target.name]:e.target.value})
    }

    return(
    <form onSubmit={submit} className={styles.form}>
        <Input 
            type="text" 
            name="name" 
            text="Nome do serviço" 
            placeholder="Insira o nome do serviço"
            handleOnChange={handleChange}
        />
        <Input 
            type="number" 
            name="cost" 
            text="Custo do serviço" 
            placeholder="Insira o custo do serviço"
            handleOnChange={handleChange}
        />
        <Input 
            type="text" 
            name="description" 
            text="Descrição do serviço " 
            placeholder="Descreva o serviço"
            handleOnChange={handleChange}
        />
        <SubmitButton 
            text={btnText}
        />
    </form>
    )
}

export default ServiceForm
