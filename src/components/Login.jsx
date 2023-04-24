
export function Login() {
    const submitHandler = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;

        if (email === '' || password === '') {
            console.log('los campos no pueden estar vacios ');
            return;
        }

        if (email !== '' && !regexEmail.test(email)) {
            console.log('debes escribir una direccion de correo valida');
            return;
        }

        if (email !== 'challenge@alkemy.org' || password !== 'react') {
            console.log('credenciales invalidas');
            return;
        }

        console.log('estamos listos para enviar la informacion');
    }
    return(
        <>
            <h2>Formulario de login</h2>
            <form onSubmit={submitHandler}>
                <label>
                    <span>Correo electronico:</span><br/>
                    <input type="email" name="email"/>
                </label>

                <br/>

                <label>
                    <span>Contraseña:</span><br/>
                    <input type="password" name="password"/>
                </label>

                <button type="submit">ingresar</button>
            </form>
        </>
    )
}