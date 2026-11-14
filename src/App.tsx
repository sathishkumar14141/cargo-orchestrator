import { lazy, Suspense } from 'react'
import { Box, Button, CssBaseline, Paper, ThemeProvider, Typography } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import {
  Link as RouterLink,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom'
import Header from './Header'
import SignIn from './SignIn'

const BranchPage = lazy(() => import('./BranchPage'))
const BookingPage = lazy(() => import('./BookingPage'))

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#111827' },
    secondary: { main: '#14b8a6' },
    background: { default: '#f4f7f8', paper: '#ffffff' },
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: 'Inter, "Segoe UI", Arial, sans-serif',
  },
})

function Dashboard() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 3, sm: 6 },
        border: '1px solid',
        borderColor: 'divider',
        background: 'linear-gradient(135deg, #ffffff 35%, #e8f7f5 100%)',
      }}
    >
      <Typography
        variant="overline"
        sx={{ color: 'secondary.dark', fontWeight: 700, letterSpacing: 1.5 }}
      >
        CARGO OPERATIONS
      </Typography>
      <Typography component="h1" variant="h3" sx={{ mt: 1, fontWeight: 700 }}>
        Welcome to your dashboard
      </Typography>
      <Typography color="text.secondary" sx={{ mt: 2, maxWidth: 620 }}>
        Your cargo workspace is ready. Choose a section from the menu to manage
        branches or view bookings.
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 4 }}>
        <Button
          component={RouterLink}
          to="/master/branch"
          variant="contained"
          color="primary"
        >
          Go to branches
        </Button>
        <Button
          component={RouterLink}
          to="/operation/booking"
          variant="outlined"
          color="primary"
        >
          View bookings
        </Button>
      </Box>
    </Paper>
  )
}

function WorkspaceLayout() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Header />
      <Box
        component="main"
        sx={{
          width: '100%',
          maxWidth: 'none',
          boxSizing: 'border-box',
          p: { xs: 2, sm: 4 },
        }}
      >
        <Suspense
          fallback={
            <Typography role="status" color="text.secondary">
              Loading section...
            </Typography>
          }
        >
          <Outlet />
        </Suspense>
      </Box>
    </Box>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route element={<WorkspaceLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/master/branch" element={<BranchPage />} />
          <Route path="/operation/booking" element={<BookingPage />} />
        </Route>
        <Route path="/" element={<Navigate to="/signin" replace />} />
        <Route path="*" element={<Navigate to="/signin" replace />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
