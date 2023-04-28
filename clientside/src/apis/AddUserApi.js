uri = "http://localhost:8080/api/account"

const AddUserApi = {
  

    addUsers: (user) => {
        fetch(URI, {
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