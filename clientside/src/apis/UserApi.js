const uri = "http://localhost:8080/api/account"

const UserApi = {
    getUsers: (setUsers) => {
        fetch(URI)
            .then((result) => {
                return result.json(result)
            })
            .then( data => {
                setUsers( data )
            })
            .catch( (error) => {
                console.error(error)
            })
    }

}

export default UserApi;