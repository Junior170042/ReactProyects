import React, { useState } from 'react'
import appConfig from '../Credenciales.js';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithRedirect,
    GoogleAuthProvider,
}
    from 'firebase/auth'
const Login = () => {
    const [register, setRegister] = useState(false);
    const auth = getAuth(appConfig);

    const gooProvider = new GoogleAuthProvider();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const correo = e.target.email.value;
        const pass = e.target.pwd.value;

        if (register) {

            const newUser = await createUserWithEmailAndPassword(auth, correo, pass)
            console.log(newUser);
        } else {
            signInWithEmailAndPassword(auth, correo, pass);

        }

        e.target.reset();
    }
    return (
        <>
            <div className="container-fluid">
                <h1> {register ? 'Registrar' : 'Iniciar sesion'}</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 mt-3">
                        <label htmlFor="email" className="form-label">
                            Email:
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter email"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pwd" className="form-label">
                            Password:
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="pwd"
                            placeholder="Enter password"
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        {register ? 'Registrar' : 'Iniciar sesion'}
                    </button>
                </form>

                <button type="submit" className="btn btn-primary my-4 me-3"
                    onClick={() => signInWithRedirect(auth, gooProvider)}
                >
                    Acceder con google
                </button>

                <button type="submit" className="btn btn-primary" onClick={() => setRegister(!register)}>
                    {register ? '¿Tengo cuenta? Iniciar sesion' : '¿No tengo cuenta? registar'}
                </button>
            </div>

        </>
    )
}

export default Login
