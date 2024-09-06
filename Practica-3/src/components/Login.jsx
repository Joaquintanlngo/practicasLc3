import { useState } from "react"


const Login = () => {
    const [username, setUsername] = useState('')
    
    const handleChange = (e) => {

        let newUserName = e.target.value;
        setUsername(newUserName);
    }

    const handleRegister = () => {

        if(username.includes('o') || username.includes('O')){
            alert("Usuario inválido para registrarse");
        } else if (username.trim() === ""){
            alert("Usuario inválido para registrarse");
        }else {
            alert("Usuario registrado correctamente");
        }
    }

    return (
        <>
            <form action="">
                <input type="text" onChange={handleChange}/>
                <button type="button" onClick={handleRegister}>Registrarse</button>
            </form>
                <p>{username}</p>
        </>
        )
}


export default Login;