import { useState } from "react";


const Task = ({ title, onDelete }) => {

    const [complete, setcomplete] = useState(false);

    const handleComplete = () => {
        
        // if(complete){

        //     setcomplete(false)
        // } else {
        //     setcomplete(true)
        // }

        setcomplete(!complete)
    }

    const handleDelete = () => {
        onDelete(title)
    }



    return (
    <>
        <h3 style={{backgroundColor: complete ? "green" : "red"}}> {title} </h3>
        <button onClick={handleComplete}>{complete ? "Mentí, no la hice" : "Completar"}</button>
        <button onClick={handleDelete}>Eliminar</button>
    </>
    )

}

export default Task;