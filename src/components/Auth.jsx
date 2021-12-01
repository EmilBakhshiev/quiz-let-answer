import React from 'react';
import { Link } from "react-router-dom";
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { AuthInput } from './AuthInput';
import { SIGN_UP_TITLE } from '../utils/constants';
import Raleway from '../vendor/fonts/Raleway-VariableFont_wght.ttf'

function Auth({ onSubmit, title }) {
  return (
    <Container
      maxWidth='sm'
      sx={{
        paddingTop: 30,
        paddingBottom: 30,
      }}
    >
      <Container
        sx={{
          background: 'white',
          paddingTop: 2,
          paddingBottom: 5,
          borderRadius: '6px',
          boxShadow:
            ' 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
          width: '80%',
        }}
      >
        <Box component='form' onSubmit={onSubmit} noValidate>
          <Typography
            component='h2'
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              margin: '20px',
              fontSize: '20px',
              fontFamily: 'Raleway',
              letterSpacing: 3,
            }}
          >
            {' '}
            {title}{' '}
          </Typography>
          <AuthInput label='Почта' type='email' />
          <AuthInput label='Пароль' type='password' />
          {title === SIGN_UP_TITLE ? (
            <AuthInput label='Повторите Пароль' type='password' />
          ) : null}
          <Button
            variant='contained'
            sx={{ width: '100%', padding: '10px', marginTop: '30px' }}
          >
            Зарегистрироваться
          </Button>
          {title === SIGN_UP_TITLE ? (
            <Typography component='p' sx={{marginTop: '20px', textAlign: 'center', fontFamily: 'Raleway'}}>
              Вы уже зарегистрировались? {' '}
              <Link to='/sign-in'>Войти</Link>
            </Typography>
          ) : null}
        </Box>
      </Container>
    </Container>
  );
}

export default Auth;
