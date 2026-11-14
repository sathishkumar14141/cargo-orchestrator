import { useState, type FormEvent } from 'react'
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material'

type Booking = {
  reference: string
  customer: string
  destination: string
  transport: string
  priority: string
  fragile: boolean
}

const customers = ['Acme Imports', 'Northstar Trading', 'Harbor Supply Co.']

function BookingPage() {
  const [bookings, setBookings] = useState<Booking[]>([
    {
      reference: 'CG-2048',
      customer: 'Acme Imports',
      destination: 'Mumbai',
      transport: 'Ocean',
      priority: 'Standard',
      fragile: false,
    },
    {
      reference: 'CG-2049',
      customer: 'Northstar Trading',
      destination: 'Delhi',
      transport: 'Air',
      priority: 'Express',
      fragile: true,
    },
  ])
  const [reference, setReference] = useState('')
  const [customer, setCustomer] = useState<string | null>(null)
  const [destination, setDestination] = useState('')
  const [transport, setTransport] = useState('')
  const [priority, setPriority] = useState('Standard')
  const [fragile, setFragile] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!customer) return

    setBookings((current) => [
      ...current,
      { reference, customer, destination, transport, priority, fragile },
    ])
    setReference('')
    setCustomer(null)
    setDestination('')
    setTransport('')
    setPriority('Standard')
    setFragile(false)
  }

  return (
    <Box>
      <Typography component="h1" variant="h4" sx={{ mb: 1, fontWeight: 700 }}>
        Bookings
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Sample booking form and records. Changes are held in memory for this session.
      </Typography>

      <Paper
        component="form"
        onSubmit={handleSubmit}
        elevation={0}
        sx={{ p: { xs: 2, sm: 3 }, mb: 3, border: '1px solid', borderColor: 'divider' }}
      >
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          Create booking
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' },
            gap: 2,
          }}
        >
          <TextField
            required
            label="Booking reference"
            value={reference}
            onChange={(event) => setReference(event.target.value)}
          />
          <Autocomplete
            options={customers}
            value={customer}
            onChange={(_event, newCustomer) => setCustomer(newCustomer)}
            renderInput={(params) => (
              <TextField {...params} label="Customer" required />
            )}
          />
          <TextField
            select
            required
            label="Destination"
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
          >
            <MenuItem value="Chennai">Chennai</MenuItem>
            <MenuItem value="Delhi">Delhi</MenuItem>
            <MenuItem value="Mumbai">Mumbai</MenuItem>
            <MenuItem value="Kolkata">Kolkata</MenuItem>
          </TextField>
          <TextField
            select
            required
            label="Transport mode"
            value={transport}
            onChange={(event) => setTransport(event.target.value)}
          >
            <MenuItem value="Ocean">Ocean</MenuItem>
            <MenuItem value="Air">Air</MenuItem>
            <MenuItem value="Road">Road</MenuItem>
            <MenuItem value="Rail">Rail</MenuItem>
          </TextField>
          <FormControl>
            <FormLabel>Priority</FormLabel>
            <RadioGroup
              row
              value={priority}
              onChange={(event) => setPriority(event.target.value)}
            >
              <FormControlLabel value="Standard" control={<Radio />} label="Standard" />
              <FormControlLabel value="Express" control={<Radio />} label="Express" />
            </RadioGroup>
          </FormControl>
          <FormControlLabel
            control={
              <Checkbox
                checked={fragile}
                onChange={(event) => setFragile(event.target.checked)}
              />
            }
            label="Fragile cargo"
          />
        </Box>
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Add booking
        </Button>
      </Paper>

      <TableContainer
        component={Paper}
        elevation={0}
        sx={{ border: '1px solid', borderColor: 'divider' }}
      >
        <Table aria-label="Booking records">
          <TableHead>
            <TableRow>
              <TableCell>Reference</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Destination</TableCell>
              <TableCell>Transport</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Cargo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow key={booking.reference}>
                <TableCell>{booking.reference}</TableCell>
                <TableCell>{booking.customer}</TableCell>
                <TableCell>{booking.destination}</TableCell>
                <TableCell>{booking.transport}</TableCell>
                <TableCell>{booking.priority}</TableCell>
                <TableCell>{booking.fragile ? 'Fragile' : 'Standard'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default BookingPage
