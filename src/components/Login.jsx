import axios from 'axios';
import swAlert from 'sweetalert';


export function Login() {

    const submitHandler = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;

        if (email === '' || password === '') {
            swAlert(
                'los cambios no deben estar vacios'
            );
            return;
        }

        if (email !== '' && !regexEmail.test(email)) {
            swAlert(
                'debes escribir uns direccion de correo electronico valida'
            );
            return;
        }

        if (email !== 'challenge@alkemy.org' || password !== 'react') {
            swAlert(
                'credenciales invalidas'
            );
            return;
        }

        axios
            .post('http://challenge-react.alkemy.org', { email, password })
            .then(res => {
                swAlert('perfecto, ingresaste correctamente')
                console.log(res.date);
                const tokenRecibido = res.data.token;
                localStorage.setItem('token', tokenRecibido)
            })
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