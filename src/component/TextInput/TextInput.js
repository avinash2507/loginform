import styles from './TextInput.module.css'

const TextInput = ({label,name,...props}) => {
  return (<div className={styles.textContainer}>
  
  <label htmlFor={name}><b>{label}</b></label>
  <input name={name} {...props} className={styles.textInputField} />
  </div>

  )
}

export default TextInput