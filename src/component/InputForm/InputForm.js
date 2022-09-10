import { useContext, useState } from "react";
import { StoreContext } from "../../Context/ContextProvider";
import TextArea from "../TextArea/TextArea";
import TextInput from "../TextInput/TextInput";
import styles from "./InputFprm.module.css";
import { v4 as uuidv4 } from 'uuid';

const InputForm = () => {
    const  {addUser} = useContext(StoreContext)
const [userInfo, setUserInfo] = useState({
    firstName:"",
    lastName:"",
    email:"",
    dob:"",
    phoneNumber:0,
    address:""
    
})
const handleChangeFormData = (e) =>{
const {value,name}   = e.target;
console.log("name",name);
console.log("value",value);
setUserInfo({...userInfo,[name]:value})
}
const handleSubmit =(e)=>{
    e.preventDefault();
    console.log("submit",userInfo);
    addUser({id:uuidv4(),...userInfo});
}

  return (
    <form onSubmit={handleSubmit}>
        <div className={styles.container}>
          <h1>User Registration form</h1>
          <p>Please fill in this form to create an account.</p>
          <section className={styles.formContainer}>
            <TextInput type="text" minLength={3} value={userInfo.firstName} onChange={handleChangeFormData} maxLength={30} name="firstName" placeholder="Enter First Name" required label="First Name" />
            <TextInput type="text" name="lastName"  value={userInfo.lastName} onChange={handleChangeFormData}   minLength={3} maxLength={30} placeholder="Enter Last Name" required label="Last Name" />
            <TextInput type="text"  value={userInfo.email} onChange={handleChangeFormData}  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" name="email" placeholder="Enter Email" required label="Email" />
            <TextInput type="date"  value={userInfo.dob} onChange={handleChangeFormData}  name="dob" placeholder="Enter DOB" required label="Date of Birth" />
            <TextInput type="text"  value={userInfo.phoneNumber} onChange={handleChangeFormData}  name="phoneNumber" title="Please enter a 10 digit numbers" pattern="[1-9]{1}[0-9]{9}" placeholder="Enter Phone Number" required label="Phone Number" />
            <TextArea minLength="5"  value={userInfo.address} onChange={handleChangeFormData}  maxLength="100" name="address" placeholder="Enter Address" required label="Address"/>
          </section>
        
          <div className={styles.clearfix}>
      
            <button type="submit" className={styles.btn}>Register</button>
          </div>
        </div>
      </form>

  )
}

export default InputForm