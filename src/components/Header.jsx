import {
    Toolbar,
    Typography,
    AppBar, Button
  } from '@mui/material';
  import { styled } from '@mui/material/styles';


  
  const HeaderBar = styled(Toolbar)({
    backgroundColor: 'white',
    justifyContent: 'space-between',
  });
  
  
  const HeaderLink = styled(Typography)({
    color: 'black',
    fontWeight: 'lighter',
    fontSize: '19px',
    paddingBottom: '1px',
    margin: 0,
    marginRight: '20px',
  });
  const HeaderButton = styled(Button)({

  })
  
  function Header() {
    return (
      <>
        <AppBar position='static' sx={{ mb: '20px' }}>
          <HeaderBar>
            <HeaderLink>Внести заказ</HeaderLink>
            <HeaderButton variant='contained'>sign up</HeaderButton>
            <HeaderButton variant='contained'>log in</HeaderButton>
          </HeaderBar>
        </AppBar>
      </>
    );
  }
  
  export default Header;