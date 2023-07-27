import React, { useEffect, useState } from 'react';
import UserApi from '../../apis/UserApi';
// import DeleteUserApi from '../../apis/DeleteUserApi';






const Emp = ({userId}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        UserApi.getUsers(setUsers)
    }, [])



    const handleDelete = (userId) => {
        fetch(`http://localhost:8080/api/accounts/delete/${userId}`, {
          method: "DELETE",
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP status ${response.status}`);
            }
            // Update state to remove the deleted user from the 'users' array
            setUsers(users.filter((user) => user.user_id !== userId));
            console.log('User deleted successfully!');
          })
          .catch((error) => {
            console.error('Error deleting user:', error);
          });
      };
      





  

    



 

    return (
        <div>

            <h2 className='display-4'>Employee Database</h2>

            <table className='table' style={{ width: "70%", margin: "auto" }}>
                <thead>
                    <tr>
                        <th>UserID</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>First</th>
                        <th>Last</th>
                        <th>Email</th>
                        <th>Notes</th>
                    </tr>

                </thead>

                <tbody>
                    {
                        users.map((c, index) =>
                            <tr key={index}>
                                <td>{c.user_id}</td>
                                <td>{c.username}</td>
                                <td>{c.password}</td>
                                <td>{c.first_name}</td>
                                <td>{c.last_name}</td>
                                <td>{c.email}</td>
                                <td>{c.notes}</td>
                                <td><button className='btn btn-danger' onClick={() => handleDelete(c.user_id)} >Delete</button></td>
                                
                               
                               
                                
                            </tr>)
                    }
                </tbody>

            </table>

            

        </div>





      
    );

};




export default Emp;

 /* <td><button className='btn btn-danger' onClick={e => handleDelete(index, e)}>Delete</button></td>
                                <td><button className='btn btn-primary'>Update</button></td> */






