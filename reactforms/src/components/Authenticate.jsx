import { useState } from 'react'

export default function Authenticate ({token}){
    const [error,setError] = useState(null)
    const [success,setSuccess] = useState(null)



    async function handleClick (){
        try {
            const response = await fetch ('https://fsa-jwt-practice.herokuapp.com/authenticate',
            {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            const result = await response.json();
            console.log(result)
            setSuccess(result.message);
        }catch (error){
            setError(error.message);
        }
    }

    return (
        <section>
        <h2>Authenticate</h2>
        {error && <p>{error}</p>}
        {success && <p>{success}</p>}
        <button onClick={handleClick}>Authenticate Token</button>

        </section>

    )
}