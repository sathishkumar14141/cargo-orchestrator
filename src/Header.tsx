import { AppBar, Toolbar, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import NavigationMenu from './NavigationMenu'

function Header() {
  return (
    <AppBar position="static" color="primary" elevation={0}>
      <Toolbar
        sx={{
          maxWidth: 'none',
          width: '100%',
          boxSizing: 'border-box',
          px: { xs: 2, sm: 4 },
          minHeight: 72,
          justifyContent: 'flex-start',
          gap: { xs: 2, sm: 4 },
        }}
      >
        <Typography
          component={RouterLink}
          to="/dashboard"
          variant="h6"
          sx={{
            color: 'common.white',
            fontWeight: 700,
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          CargoFlow
        </Typography>
        <NavigationMenu />
      </Toolbar>
    </AppBar>
  )
}

export default Header
