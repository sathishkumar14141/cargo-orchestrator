import { useState, type FormEvent } from 'react'
import {
  Alert,
  Box,
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
} from '@mui/material'

function SignIn() {
  const [notice, setNotice] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setNotice('Authentication is not connected yet. Contact your administrator to enable sign-in.')
  }

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        bgcolor: 'background.paper',
      }}
    >
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          p: { md: 6, lg: 10 },
          color: 'common.white',
          background: 'linear-gradient(145deg, #111827 10%, #123d42 100%)',
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          CargoFlow
        </Typography>
        <Box sx={{ maxWidth: 520 }}>
          <Typography variant="overline" sx={{ color: 'secondary.light', letterSpacing: 2 }}>
            CARGO OPERATIONS PLATFORM
          </Typography>
          <Typography component="h1" variant="h2" sx={{ mt: 2, fontWeight: 700 }}>
            Move your operations forward.
          </Typography>
          <Typography sx={{ mt: 2, color: 'grey.300', fontSize: '1.1rem' }}>
            Sign in to manage your branches and bookings from one workspace.
          </Typography>
        </Box>
        <Typography variant="body2" sx={{ color: 'grey.400' }}>
          CargoFlow · Operations workspace
        </Typography>
      </Box>

      <Box
        sx={{
          flex: { xs: 1, md: '0 0 48%' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: { xs: 2, sm: 4 },
          bgcolor: 'background.default',
        }}
      >
        <Paper
          component="form"
          onSubmit={handleSubmit}
          elevation={0}
          sx={{
            width: '100%',
            maxWidth: 440,
            p: { xs: 3, sm: 5 },
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Typography variant="overline" sx={{ color: 'secondary.dark', fontWeight: 700 }}>
            WELCOME BACK
          </Typography>
          <Typography component="h2" variant="h4" sx={{ mt: 1, fontWeight: 700 }}>
            Sign in
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 1, mb: 4 }}>
            Enter your account details to continue.
          </Typography>

          <TextField
            fullWidth
            required
            autoComplete="username"
            autoFocus
            id="email"
            label="Email address"
            name="email"
            type="email"
            sx={{ mb: 2.5 }}
          />
          <TextField
            fullWidth
            required
            autoComplete="current-password"
            id="password"
            label="Password"
            name="password"
            type="password"
            sx={{ mb: 3 }}
          />
          {notice && (
            <Alert severity="info" sx={{ mb: 2 }}>
              {notice}
            </Alert>
          )}
          <Button type="submit" fullWidth variant="contained" size="large">
            Sign in
          </Button>
          <Divider sx={{ my: 3 }}>or</Divider>
          <Button
            type="button"
            fullWidth
            variant="outlined"
            size="large"
            onClick={() =>
              setNotice('Google sign-in is not configured yet. Set up Google OAuth to continue.')
            }
            startIcon={
              <Box component="span" aria-hidden="true" sx={{ color: '#4285f4', fontWeight: 700 }}>
                G
              </Box>
            }
            sx={{
              color: 'text.primary',
              borderColor: 'divider',
              textTransform: 'none',
              '&:hover': { borderColor: 'text.secondary', bgcolor: 'action.hover' },
            }}
          >
            Continue with Google
          </Button>
        </Paper>
      </Box>
    </Box>
  )
}

export default SignIn
