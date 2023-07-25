const uri = "http://localhost:8080/api/accounts/delete/{Id}"

const DeleteUserApi = {
    deleteUser: (userId) => {
        return fetch(uri, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('HTTP status ${response.status}');
                }
                return response.json();
            })

            .catch((error) => {
                console.error('Error deleting user:', error);
                throw error;
            });
            
    },
};







export default DeleteUserApi; 