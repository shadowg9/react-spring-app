import React, { useState } from 'react';
import AddUserApi from '../../apis/AddUserApi'



const Register = props => {

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
  
   

    const handleSubmit = (event) => {
        const user = {
            "first_name": fname,
            "last_name": lname,
            "email": email,
            "username": username,
            "password": password
        }

        AddUserApi.addUsers(user)

        setFname('')
        setLname('')
        setEmail('')
        setUsername('')
        setPassword('')


    }



    return (
        <div style={{ border: "1px white solid", padding: "15px", margin: "15px" }}>



            <form onSubmit={handleSubmit}>
                <h3>Sign Up</h3>
                <div className="mb-3">
                    <label>First Name</label>
                    <input type="text" className="form-control" placeholder="First name" onChange={(event) => { setFname(event.target.value) }} />
                </div>

                <div className="mb-3">
                    <label>Last Name</label>
                    <input type="text" className="form-control" placeholder="Last Name" onChange={(event) => { setLname(event.target.value) }} />
                </div>

                <div className="mb-3">
                    <label>Email Address</label>


                    <input type="text" className="form-control" placeholder="Email Address" onChange={(event) => { setEmail(event.target.value) }} />

                </div>

                <div className="mb-3">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Enter Username" onChange={(event) => { setUsername(event.target.value) }} />
                </div>

                <div className="mb-3">
                    <label>Password</label>
                    <input type="text" className="form-control" placeholder="Enter Password" onChange={(event) => { setPassword(event.target.value) }} />
                </div>

                
                <div className="d-grid">


                    <button type="submit" className="btn btn-success">

                        Register 
                    </button>
                </div>








            </form>
        </div>


    );
};



export default Register;