import React, { useEffect, useState } from 'react'
import appConfig from "../Credenciales";
import { getAuth, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import AddTask from './AddTask';
import TaskList from './TaskList';
const Home = ({ userEmail }) => {

    const auth = getAuth(appConfig);
    const firestore = getFirestore(appConfig);

    const [myTask, setTask] = useState(null)

    const getTasks = async (user_mail) => {
        const docRef = doc(firestore, `usuarios/${user_mail}`);
        const query = await getDoc(docRef);

        if (query.exists()) {
            const datas = query.data();

            return datas.tareas;
        }
    }
    useEffect(() => {
        async function fetchTask() {
            const tareas = await getTasks(userEmail);
            setTask(tareas)
        }
        fetchTask()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            <h1 className="title text-center">Wellcome to Home</h1>
            <button onClick={() => signOut(auth)}
                className="btn btn-danger float-right me-4"> Cerrar sesion
            </button>
            <hr />
            <AddTask tasks={myTask} setTask={setTask} userEmail={userEmail} />
            <hr />
            {myTask && <TaskList tasks={myTask} setTask={setTask} userEmail={userEmail} />}
            <hr />
        </div >
    )
}

export default Home
