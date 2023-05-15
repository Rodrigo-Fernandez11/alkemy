import axios from 'axios';
import Swal from 'sweetalert2';
import { Redirect } from 'react-router-dom';

export function Login() {
  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === '' || password === '') {
      Swal.fire('los cambios no deben estar vacios');
      return;
    }

    if (email !== '' && !regexEmail.test(email)) {
      Swal.fire('debes escribir una dirección de correo electrónico válida');
      return;
    }

    if (email !== 'challenge@alkemy.org' || password !== 'react') {
      Swal.fire('credenciales inválidas');
      return;
    }

    axios
      .post('http://challenge-react.alkemy.org', { email, password })
      .then((res) => {
        Swal.fire('¡Perfecto, ingresaste correctamente!');
        console.log(res.data);
        const tokenRecibido = res.data.token;
        localStorage.setItem('token', tokenRecibido);
        <Redirect to='/listado' />
      })
      .catch((error) => {
        Swal.fire('Hubo un error en la solicitud');
        console.error(error);
      });
  };

  return (
    <>
      <h2>Formulario de login</h2>
      <form onSubmit={submitHandler}>
        <label>
          <span>Correo electrónico:</span>
          <br />
          <input type="email" name="email" />
        </label>

        <br />

        <label>
          <span>Contraseña:</span>
          <br />
          <input type="password" name="password" />
        </label>

        <br />

        <button type="submit">Ingresar</button>
      </form>
    </>
  );
}
