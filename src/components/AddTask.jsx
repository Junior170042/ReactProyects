import React from 'react';
import appConfig from "../Credenciales";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
const firestore = getFirestore(appConfig);

const AddTask = ({ tasks, setTask, userEmail }) => {
    const handleAddTask = async (e) => {
        e.preventDefault();

        const title = e.target.title.value;
        const description = e.target.desc.value;

        const newTask = [...tasks, { id: +new Date(), title: title, description: description }]

        const docRef = doc(firestore, `usuarios/${userEmail}`);
        await updateDoc(docRef, { tareas: [...newTask] })

        setTask(newTask)
        e.target.reset();
    }

    return (
        <div className="container">
            <h1 className="title text-center">Agregar Tareas</h1>

            <form onSubmit={handleAddTask}>
                <div className="mb-3 mt-3">
                    <label htmlFor="title" className="form-label">
                        Title:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        placeholder="Enter email"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">
                        Description:
                    </label>
                    <textarea
                        type="text"
                        className="form-control"
                        id="desc"
                        placeholder="Descripcion"
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Agregar
                </button>
            </form>

        </div>
    )
}

export default AddTask
