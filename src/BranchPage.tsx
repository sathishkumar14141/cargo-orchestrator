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

type Branch = {
  name: string
  code: string
  city: string
  type: string
  active: boolean
  service: string
}

const cities = ['Chennai', 'Delhi', 'Mumbai', 'Bengaluru', 'Kolkata']

function BranchPage() {
  const [branches, setBranches] = useState<Branch[]>([
    {
      name: 'Chennai Central',
      code: 'MAA-01',
      city: 'Chennai',
      type: 'Port',
      active: true,
      service: 'Domestic',
    },
    {
      name: 'Mumbai Gateway',
      code: 'BOM-02',
      city: 'Mumbai',
      type: 'Warehouse',
      active: true,
      service: 'International',
    },
  ])
  const [name, setName] = useState('')
  const [code, setCode] = useState('')
  const [city, setCity] = useState<string | null>(null)
  const [type, setType] = useState('')
  const [active, setActive] = useState(true)
  const [service, setService] = useState('Domestic')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!city) return

    setBranches((current) => [
      ...current,
      { name, code, city, type, active, service },
    ])
    setName('')
    setCode('')
    setCity(null)
    setType('')
    setActive(true)
    setService('Domestic')
  }

  return (
    <Box>
      <Typography component="h1" variant="h4" sx={{ mb: 1, fontWeight: 700 }}>
        Branches
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Sample branch form and records. Changes are held in memory for this session.
      </Typography>

      <Paper
        component="form"
        onSubmit={handleSubmit}
        elevation={0}
        sx={{ p: { xs: 2, sm: 3 }, mb: 3, border: '1px solid', borderColor: 'divider' }}
      >
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          Add branch
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
            label="Branch name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            required
            label="Branch code"
            value={code}
            onChange={(event) => setCode(event.target.value)}
          />
          <Autocomplete
            options={cities}
            value={city}
            onChange={(_event, newCity) => setCity(newCity)}
            renderInput={(params) => <TextField {...params} label="City" required />}
          />
          <TextField
            select
            required
            label="Branch type"
            value={type}
            onChange={(event) => setType(event.target.value)}
          >
            <MenuItem value="Port">Port</MenuItem>
            <MenuItem value="Warehouse">Warehouse</MenuItem>
            <MenuItem value="Distribution center">Distribution center</MenuItem>
          </TextField>
          <FormControl>
            <FormLabel>Service area</FormLabel>
            <RadioGroup
              row
              value={service}
              onChange={(event) => setService(event.target.value)}
            >
              <FormControlLabel value="Domestic" control={<Radio />} label="Domestic" />
              <FormControlLabel
                value="International"
                control={<Radio />}
                label="International"
              />
            </RadioGroup>
          </FormControl>
          <FormControlLabel
            control={
              <Checkbox
                checked={active}
                onChange={(event) => setActive(event.target.checked)}
              />
            }
            label="Branch is active"
          />
        </Box>
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Add branch
        </Button>
      </Paper>

      <TableContainer
        component={Paper}
        elevation={0}
        sx={{ border: '1px solid', borderColor: 'divider' }}
      >
        <Table aria-label="Branch records">
          <TableHead>
            <TableRow>
              <TableCell>Branch name</TableCell>
              <TableCell>Code</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Service area</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {branches.map((branch) => (
              <TableRow key={branch.code}>
                <TableCell>{branch.name}</TableCell>
                <TableCell>{branch.code}</TableCell>
                <TableCell>{branch.city}</TableCell>
                <TableCell>{branch.type}</TableCell>
                <TableCell>{branch.service}</TableCell>
                <TableCell>{branch.active ? 'Active' : 'Inactive'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default BranchPage
