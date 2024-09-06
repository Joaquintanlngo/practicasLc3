import { useState } from "react"


const Login = () => {
    const [username, setUsername] = useState('')
    
    const handleChange = (e) => {

        let newUserName = e.target.value;
        if(e.target.value.includes('o') || e.target.value.includes('O')){
            alert("Por favor, ¡Nombres de usuario sin la letra o!");
        }
        setUsername(newUserName);
    }

    const handleRegister = () => {

        if(username.includes('o') || username.includes('O') || username.trim() === ""){
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