import { useState } from "react"

const NewTask = ({addTask}) => {
    
    const [newTask, setnewTask] = useState("")
    
    const handleInput = (e) => {
        setnewTask(e.target.value)
        
    }

    const handleTask = (e) => {
        e.preventDefault();
        if (newTask.trim() !== ""){

            const newTaskTransformed = {
                title: newTask
            }
    
            addTask(newTaskTransformed);
            setnewTask("");
        }
    }

    
    return  (
        <>
            <form action="">
                <input type="text" onChange={handleInput} value={newTask}/>
                <button onClick={handleTask}>Agregar</button>
            </form>
        </>
    )
}

export default NewTask;