import React from 'react';
import Auth from '../components/Auth';
import { login } from '../utils/authAPi';
import { SIGN_IN_TITLE } from '../utils/constants';
import useFormWithValidation from '../hooks/useFormWithValidation'
import { Alert, Fade } from '@mui/material';


function SignIn({ navigate, setLoggedIn }) {
 const { values, errors, isValid, handleChange, resetForm } =
    useFormWithValidation({});

  function handleOnSubmit(evt) {
    evt.preventDefault();
    login(values.email, values.password)
      .then((res) => {
        if (res.token) {
            setLoggedIn(true)
          localStorage.setItem('jwt', res.token);
          navigate(`/`);
        }
      })
      .catch((err) => {
  alert('Неверный логин или пароль')
        console.log(err);
      })
      .finally(() => {
        
        resetForm();
      });
    
  }
  return <Auth textButton={'Войти'} onChange={handleChange} onSubmit={handleOnSubmit} title={SIGN_IN_TITLE} />;
}

export default SignIn;
