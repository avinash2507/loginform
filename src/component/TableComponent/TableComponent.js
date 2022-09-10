import { useContext } from 'react'
import { StoreContext } from '../../Context/ContextProvider'
import styles from './TableComponent.module.css'
import {Trash} from 'react-feather';

const TableComponent = () => {
    const  {users,deleteUser} = useContext(StoreContext);
    console.log("Users",users);
    const handleDeleteuser =(id)=>{
        deleteUser(id);
    }
  return (
    <div className={styles.tableContainer}>
              <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Date of Birth</th>
            <th>Address</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>      
          {users?.map(({id,dob,phoneNumber, firstName, lastName, email, address, }) => (
             <tr key={id}>
              <td>{firstName}{" "} {lastName}</td>
                <td>{email}</td>
                <td>{phoneNumber}</td>
                <td>{dob}</td>
                <td>{address}</td>
               <td><Trash color="#ca112f" onClick={()=>handleDeleteuser(id)} className={styles.trash} /></td> 
             </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableComponent