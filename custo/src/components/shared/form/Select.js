import styles from './Select.module.css'
function Select({ text, name, options, handleOnChange, value }) {
    return (
        <div className={styles.form_control}>
            <lable htmlFor={name}> {text}:</lable>
            <select name={name} id={name}>
                <option>Selecione uma opcao</option>
                {options.map((option)=>(
                    <option value={option.id} key={option.id}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}
export default Select