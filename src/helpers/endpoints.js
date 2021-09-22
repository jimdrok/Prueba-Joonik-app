import axios from "axios";


export async function handleEmail(email) {
  const result = await axios.post('https://api.joonik.com/login/email', { "email": email })
  return (result?.data)
}


export async function handlePassword(password , token ) {
  const result = await axios(
    {
      url: 'https://api.joonik.com/login/password' ,
      headers: {
        'Authorization' : `Bearer ${token}`,
        'Content-Type' : 'application/json'
      },
      method: "POST",
      data: {"password": password},
    }
  )
  return result?.data
}

export async function handleData(token) {
  console.log(token)
  const result = await axios(
    {
      url: 'https://api.joonik.com/posts' ,
      headers: {
        'Authorization' : `Bearer ${token}`
      },
      method: "GET",
    }
  )

  console.log(result)

  return result?.data
}