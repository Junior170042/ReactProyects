import React from 'react'
import appConfig from "../Credenciales";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
const TaskList = ({ tasks, setTask, userEmail }) => {
    const firestore = getFirestore(appConfig);
    const deleteTask = async (idTask) => {
        const newTasks = tasks.filter(t => t.id !== idTask);

        const docRef = doc(firestore, `usuarios/${userEmail}`)

        await updateDoc(docRef, { tareas: [...newTasks] });

        setTask(newTasks);
    }

    return (
        <div className="container">
            <h1 className="title text-center">Tareas Agregadas!</h1>
            <div className="row">

                {
                    tasks.length !== 0 && tasks.map(task => {
                        return <div className="col-sm-5" key={task.id}>
                            <div className="card mb-3 w-80">
                                <div className="card-header bg-primary text-white">
                                    <h1 className="card-title">{task.title}</h1>
                                </div>
                                <div className="card-body"><p>{task.description}</p></div>
                                <div className="card-footer d-flex justify-content-between">
                                    <a href={task.url}>
                                        <button type="button" className="btn btn-success m-2">Ver archivo</button>
                                    </a>
                                    <button type="button" className="btn btn-warning m-2">Editar</button>
                                    <button type="button" className="btn btn-danger m-2" onClick={() => {
                                        deleteTask(task.id)
                                    }}>Eliminar</button>
                                </div>
                            </div>


                        </div>
                    })
                }
            </div>
        </div >
    )
}

export default TaskList