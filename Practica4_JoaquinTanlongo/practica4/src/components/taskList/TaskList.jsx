import Task from "../task/Task"

const TaskList = ({list, onDelete}) =>{
    const listMapped = list.map((task, index) => (
            <Task
                key={index}
                title={task.title}
                onDelete={onDelete}
            />
    ));

    return listMapped;
}

export default TaskList