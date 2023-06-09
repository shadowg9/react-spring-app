const uri = "http://localhost:8080/api/accounts"

const UserApi = {
    getUsers: (setUsers) => {
        fetch(uri)
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