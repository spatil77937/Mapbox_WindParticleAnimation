import React from 'react'
//import useSelectedVesselStore from 'store/vesselStore'
//import DateRangePicker from 'generic-component/DateRangePicker'
//import useBookmarkStore from 'store/bookmarkStore'
import { Typography, Grid, Divider, MenuItem, FormControl, Box, useMediaQuery, Button, Select,InputLabel } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { LocalizationProvider } from '@mui/x-date-pickers-pro'
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs'
import { MobileDateRangePicker } from '@mui/x-date-pickers-pro/MobileDateRangePicker'
import TextField from '@mui/material/TextField'
import { DesktopDateRangePicker } from '@mui/x-date-pickers-pro/DesktopDateRangePicker'
import moment from 'moment'
import { lighten } from '@mui/material'
import SelectList from './SelectList'
import PrintIcon from '@mui/icons-material/Print';

const SubHeader = ({ name, dateRange, updateDateRange, active, setActive, updateButtonDateRange }) => {
  const theme = useTheme()
  const matchesXs = useMediaQuery(theme.breakpoints.down('md'))
  const [time, setTime] = React.useState('');
  var secondDate = new Date(moment.utc().format('YYYY-MM-DD HH:mm:ss'))
  const handleChange = (event) => {
    setTime(event.target.value);
    if (event.target.value === '5min') {
        let FirstDate = new Date(moment.utc(secondDate).subtract(5, 'minutes')._d)
        let range = [FirstDate, secondDate]
        updateButtonDateRange(range)
      }
      if (event.target.value === '10min') {
        let FirstDate = new Date(moment.utc(secondDate).subtract(10, 'minutes')._d)
        let range = [FirstDate, secondDate]
        updateButtonDateRange(range)
      }
      if (event.target.value === '20min') {
        let FirstDate = new Date(moment.utc(secondDate).subtract(20, 'minutes')._d)
        let range = [FirstDate, secondDate]
        updateButtonDateRange(range)
      }
      if (event.target.value === '30min') {
        let FirstDate = new Date(moment.utc(secondDate).subtract(20, 'minutes')._d)
        let range = [FirstDate, secondDate]
        updateButtonDateRange(range)
      }
      if (event.target.value === '1hr') {
        let FirstDate = new Date(moment.utc(secondDate).subtract(1, 'hours')._d)
        let range = [FirstDate, secondDate]
        updateButtonDateRange(range)
      }
      if (event.target.value === '2hr') {
        let FirstDate = new Date(moment.utc(secondDate).subtract(2, 'hours')._d)
        let range = [FirstDate, secondDate]
        updateButtonDateRange(range)
      }
      if (event.target.value === '3hr') {
        let FirstDate = new Date(moment.utc(secondDate).subtract(3, 'hours')._d)
        let range = [FirstDate, secondDate]
        updateButtonDateRange(range)
      }
      if (event.target.value === '6hr') {
        let FirstDate = new Date(moment.utc(secondDate).subtract(6, 'hours')._d)
        let range = [FirstDate, secondDate]
        updateButtonDateRange(range)
      }
      if (event.target.value === '12hr') {
        let FirstDate = new Date(moment.utc(secondDate).subtract(12, 'hours')._d)
        let range = [FirstDate, secondDate]
        updateButtonDateRange(range)
      }
      if (event.target.value === '1day') {
        let FirstDate = new Date(moment.utc(secondDate).subtract(1, 'days')._d)
        let range = [FirstDate, secondDate]
        updateButtonDateRange(range)
      }
      if (event.target.value === '2day') {
        let FirstDate = new Date(moment.utc(secondDate).subtract(2, 'days')._d)
        let range = [FirstDate, secondDate]
        updateButtonDateRange(range)
      }
      if (event.target.value === '7day') {
        let FirstDate = new Date(moment.utc(secondDate).subtract(7, 'days')._d)
        let range = [FirstDate, secondDate]
        updateButtonDateRange(range)
      }
  };

  //const selectedVessel = useSelectedVesselStore((state) => state.selectedVessel)
  // const isBookmarkEnable = useBookmarkStore((state) => state.isBookmarkEnable)
  // const updateIsBookmarkEnable = useBookmarkStore((state) => state.setIsBookmarkEnable)
  const ButtonsGeneric = {
    color : theme.palette.text.primary,
    fontSize:'0.75rem',
    borderRadius: '3px',
    borderColor: 'grey !important',
    '&:hover': {
      borderColor: theme.palette.text.primary,
    },
  }
  const ButtonsGenericActive = {
    color : theme.palette.text.primary,
    fontSize:'0.75rem',
    borderRadius: '3px',
    borderColor: theme.palette.text.primary,
    background: lighten(theme.palette.background.paper, 0.01),
  }
 
  return (
    <>
      <Grid sx={dateRange ? { pt: 1, pl: 2, pr: 1 } : { pt: 1.625, pl: 2, pr: 1, pb: 1 }} container justify="space-between" spacing={1.5} alignItems="center">
        <Grid container item md={4} xs={12} sx={{ justifyContent: { xs: 'center', md: 'flex-start', lg: 'flex-start' } }}>
          <Typography sx={{ fontWeight: 600, fontSize: '1.22rem' }} component="h3" variant="h3">
            {name}
          </Typography>
        </Grid>
        <Grid container item md={8} xs={12} sx={{ justifyContent: { xs: 'center', md: 'end', lg: 'end' } }}>
        <Grid container justifyContent="flex-end" item xs={12} md={5}>
          <SelectList/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Grid>
        <Grid item container justifyContent="flex-end" xs={12} md={'auto'}>
        <FormControl variant="outlined" sx={{ minWidth: 170 }}>
      {time === "" ? 
        <InputLabel id="demo-simple-select-standard-label">Select Time</InputLabel>
        : ""}
        <Select
          id="demo-simple-select-standard"
          value={time}
          onChange={handleChange}
          label={""}
          //InputLabelProps={{ shrink: false }}
        >
      
          <MenuItem value={'5min'}>Last 5 minutes</MenuItem>
          <MenuItem value={'10min'}>Last 10 Minutes</MenuItem>
          <MenuItem value={'20min'}>Last 20 Minutes</MenuItem>
          <MenuItem value={'30min'}>Last 20 Minutes</MenuItem>
          <MenuItem value={'1hr'}>Last 1 hour</MenuItem>
          <MenuItem value={'2hr'}>Last 2 hour</MenuItem>
          <MenuItem value={'3hr'}>Last 3 hour</MenuItem>
          <MenuItem value={'6hr'}>Last 6 hour</MenuItem>
          <MenuItem value={'12hr'}>Last 12 hour</MenuItem>
          <MenuItem value={'1day'}>Last 1 day</MenuItem>
          <MenuItem value={'2day'}>Last 2 days</MenuItem>
          <MenuItem value={'7day'}>Last 7 days</MenuItem>
        </Select>
      </FormControl> &nbsp;&nbsp;
        </Grid>
        <Grid container item xs={12} md={4} sx={{ '& .MuiDateRangePickerInput-root': { justifyContent: 'flex-end' } }} justifyContent="flex-end">
                <LocalizationProvider dateAdapter={AdapterDayjs} localeText={{ start: '', end: '' }}>
                  <DesktopDateRangePicker
                    setActive={setActive}
                    value={[dateRange.start, dateRange.end]}
                    onChange={(newValue) => {
                      updateDateRange(newValue)
                    }}
                    PopperProps={{ placement: 'bottom-start' }}
                    inputFormat="DD - MMM - YYYY"
                    renderInput={(startProps, endProps) => (
                      <React.Fragment>
                        <TextField {...startProps} size="small" sx={{ border: 'none', width: '43%' }} />
                        <Box sx={{ mx: 1.6 }}> to </Box>
                        <TextField {...endProps} size="small" sx={{ width: '43%', border: 'none' }} />
                      </React.Fragment>
                    )}
                  />
                </LocalizationProvider>
        </Grid>
        </Grid>
      </Grid>
      <Divider/>
    </>
  )
}
export default SubHeader
