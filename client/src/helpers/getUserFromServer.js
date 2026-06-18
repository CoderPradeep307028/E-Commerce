import { SERVER_URL } from '../config'

const getUserFromServer = async() =>{
    const res = await fetch(`${SERVER_URL}/api/auth/user`,{
        credentials:'include'
    })
    const data = await res.json()

    return data
}

export default getUserFromServer