import { useState } from 'react'

export default function SignUpForm ({setToken}){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);


    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const response = await fetch ('https://fsa-jwt-practice.herokuapp.com/signup',{
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({username, password})
            });
            const result = response.json();
            console.log("result:",result)
            
            setToken(result.token);
            //console.log(token) is null

         

        }catch (error) {
            setError(error.message);
        }

    }

    return (
        <section>
        <h2>Sign Up</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
            <label>
                Username: <input value={username}
                onChange = {e=>setUsername(e.target.value)} />
            </label>
            <label>
                Password: <input value={password}
                onChange = {e=>setPassword(e.target.value)}/>
            </label>
            <button>Submit</button>
        </form>
        </section>
    );
}