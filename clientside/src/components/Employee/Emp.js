import React, { useEffect, useState } from 'react';
import UserApi from '../apis/UserApi';



const Emp = props => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        UserApi.getUsers(setUsers)
    }, [])

    const handleDelete = (index,e) => {
        setCars(users.filter((c, i) => i !== index));
    }


    return (
        <div>

            <h2 className='display-4'>Employee Database</h2>

            <table className='table' style={{ color: "white", width: "70%", margin: "auto" }}>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Notes</th>
                    </tr>

                </thead>

                <tbody>
                    {
                        users.map((c, index) =>
                            <tr key={index}>
                                <td>{c.username}</td>
                                <td>{c.email}</td>
                                <td>{c.notes}</td>
                               
                                {/* <td><button className='btn btn-danger' onClick={e => handleDelete(index, e)}>Delete</button></td>
                                <td><button className='btn btn-primary'>Update</button></td> */}
                                
                            </tr>)
                    }
                </tbody>

            </table>

        </div>
    );

};





export default Emp;

