import { TextField } from '@mui/material'
import { styled } from '@mui/material/styles';
import React from 'react'

export const AuthInput = styled(TextField)({
  marginBottom: '20px',
  width: '100%',
  '& label.Mui-focused': {
    color: '#F1B550',
  },
  '& input': {
    fontWeight: 'lighter',
    fontSize: '16px',
    lineHeight: '10px',
  },
  '& .Mui-error': {
    color: '#E67D51',
  },
  '& label.Mui-error': {
    color: '#E67D51',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: '1px solid rgba(14, 14, 14, 0.08)',
    },
    '&:hover fieldset': {
      borderColor: '#F1B550',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#F1B550',
    },
    '&.Mui-error fieldset': {
      borderColor: '#E67D51',
    },
  },
});