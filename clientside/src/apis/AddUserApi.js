const uri = "http://localhost:8080/api/accounts/create"

const AddUserApi = {
  

    addUsers: (user) => {
        fetch(uri, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(data => {
                alert("User is Registered: " + JSON.stringify(data))
            })
            .catch(error => console.error(error))
    }
}

export default AddUserApi; 