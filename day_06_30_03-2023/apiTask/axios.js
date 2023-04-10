const axios = require("axios")


async function creatUser() {
    const values = {
        method: "post",
        url: "http://localhost:3090/createUser",
        data: {
            "fullName": "trivikra srinivas",
            "userName": "trivikramSrinivas",
            "mobileNumber": 9603989615,
            "email": "trivikramSrinivas@gmail.com",
            "password": "trivikramSrinivas123"
        },
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        }
    }
    const createdData = await axios(values)

    return createdData.data
}


async function getUser() {
const userData = await axios.get("http://localhost:3090/getUser")
return userData.data.data

}

const checkCreatedUser =async ()=>{

    const createdUser = await creatUser()

    console.log(createdUser)
}

const getUsers = async ()=>{
    const usersData = await getUser()
    console.log(usersData)
}


//checkCreatedUser()
getUsers()

