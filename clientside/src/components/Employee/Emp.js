import React, { useEffect, useState } from 'react';
import UserApi from '../../apis/UserApi';



const Emp = props => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        UserApi.getUsers(setUsers)
    }, [])

    // const handleDelete = (index,e) => {
    //     setUsers(users.filter((c, i) => i !== index));
    // }


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
                               
                               
                                
                            </tr>)
                    }
                </tbody>

            </table>

        </div>
    );

};


 /* <td><button className='btn btn-danger' onClick={e => handleDelete(index, e)}>Delete</button></td>
                                <td><button className='btn btn-primary'>Update</button></td> */




export default Emp;

