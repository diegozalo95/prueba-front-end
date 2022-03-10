import React from 'react'
import '../styles/Login.scss'
import '../styles/Form.scss'
import LoginImage from '../assets/images/login.svg'

const Login = () => {
  return (
    <div className='login'>
      <div className='login__container'>
        <div className='login__image'>
          <img src={LoginImage}
            className="login__img"
            alt="" />
        </div>
        <h2 className='login__title'>Inicia sesión</h2>
        <form className='login__form form'>
          <fieldset className="form__fieldset">
            <label className="form__label">E-mail</label>
            <input type="text"
                placeholder="Ingresa tu e-mail"
                className="form__input" />
          </fieldset>
          <fieldset className="form__fieldset">
            <label className="form__label">Contraseña</label>
            <input type="password"
              placeholder="Ingresa tu contraseña"
              className="form__input" />
          </fieldset>
          <fieldset className="form__fieldset">
            <button className='form__button'>Ingresar</button>
          </fieldset>
        </form>
        <div className='login__google'>
          <a href="/"
            className='login__google-link'>Ingresa con Google</a>
        </div>
        <div className='login__register'>
          <p className='login__register-text'>No tienes cuenta?</p>
          <a href="/"
            className='login__register-link'>Registrate</a>
        </div>
      </div>
    </div>
  )
}

export default Login