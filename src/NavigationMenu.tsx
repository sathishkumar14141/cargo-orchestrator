import { useState } from 'react'
import { Box, Button, Menu, MenuItem, SvgIcon } from '@mui/material'
import { Link as RouterLink, useLocation } from 'react-router-dom'

type MenuName = 'master' | 'operation'

function MenuArrow() {
  return (
    <SvgIcon fontSize="small" aria-hidden="true">
      <path d="m7 10 5 5 5-5z" />
    </SvgIcon>
  )
}

function NavigationMenu() {
  const [openMenu, setOpenMenu] = useState<{
    name: MenuName
    anchor: HTMLElement
  } | null>(null)
  const location = useLocation()

  const handleMenuClick =
    (name: MenuName) => (event: React.MouseEvent<HTMLElement>) => {
      setOpenMenu({ name, anchor: event.currentTarget })
    }

  const closeMenu = () => setOpenMenu(null)

  return (
    <Box
      component="nav"
      aria-label="Main menu"
      sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
    >
      <Button
        color={location.pathname.startsWith('/master') ? 'secondary' : 'inherit'}
        aria-haspopup="menu"
        aria-expanded={openMenu?.name === 'master'}
        onClick={handleMenuClick('master')}
        endIcon={<MenuArrow />}
        sx={{ color: 'common.white', textTransform: 'none', fontWeight: 600 }}
      >
        Master
      </Button>
      <Menu
        id="master-menu"
        anchorEl={openMenu?.anchor}
        open={openMenu?.name === 'master'}
        onClose={closeMenu}
      >
        <MenuItem component={RouterLink} to="/master/branch" onClick={closeMenu}>
          Branch
        </MenuItem>
      </Menu>
      <Button
        color={location.pathname.startsWith('/operation') ? 'secondary' : 'inherit'}
        aria-haspopup="menu"
        aria-expanded={openMenu?.name === 'operation'}
        onClick={handleMenuClick('operation')}
        endIcon={<MenuArrow />}
        sx={{ color: 'common.white', textTransform: 'none', fontWeight: 600 }}
      >
        Operation
      </Button>
      <Menu
        id="operation-menu"
        anchorEl={openMenu?.anchor}
        open={openMenu?.name === 'operation'}
        onClose={closeMenu}
      >
        <MenuItem component={RouterLink} to="/operation/booking" onClick={closeMenu}>
          Booking
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default NavigationMenu
