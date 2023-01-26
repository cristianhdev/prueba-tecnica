import React, { useEffect,useState } from 'react'

export const useFetch = (url, username, password) => {

    const [stateLogin, setStateLogin] = useState({
        token: ""
    })

    const getUserLogin = async () => {

        try {
            const data = await fetch(url, {
                headers: {
                    'Content-Type': 'application/json',
                    'Autorization': 'Basic ' + btoa(username + ":" + password)
                }
            },)
            const response = await data.json()

            setStateLogin(response)
        } catch (error) {
            throw new Error(error)
        }


    }

    useEffect(() => {
        getUserLogin()
    }, [URL])

    return {
        ...stateLogin
    }


}
