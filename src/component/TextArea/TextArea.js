import styles from './Take.module.css';

const TextArea = ({label,...props}) => {
  return (
    <div className={styles.textAreaContainer}>
        <label><b>{label}</b></label>
        <textarea {...props} className={styles.textInputField} rows={2} cols={3} />
    </div>
  )
}

export default TextArea