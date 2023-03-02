import React,{useState,useRef} from 'react'
import SubHeader from './SubHeader'
import moment from 'moment'
import { Tooltip,Fab,IconButton } from '@mui/material'
import AnimateButton from '../generic/AnimateButton'
import { Print } from '@mui/icons-material'
import { useTheme } from '@mui/material'
import { useReactToPrint } from "react-to-print";
import ReportContent from './ReportContent'

const Report = () => {
  const printDivRef=useRef()
  const theme = useTheme()
  var todayDate = moment.utc().format('YYYY-MM-DD HH:mm:ss')
  const [vessel, setVessel] = useState()
  const [active, setActive] = useState('3month')
  var prevDate = moment().subtract(1, 'day').format('YYYY-MM-DD HH:mm:ss')
  const [dateRange, setDateRange] = useState({ start: prevDate, end: todayDate })
  const _updateDateRange = (range) => {
    setDateRange({
      start: moment(range[0].$d).format('YYYY-MM-DD HH:mm:ss'),
      end: moment(range[1].$d).format('YYYY-MM-DD HH:mm:ss'),
    })
  }
  const _updateButtonDateRange = (range) => {
    setDateRange({
      start: moment(range[0]).format('YYYY-MM-DD HH:mm:ss'),
      end: moment(range[1]).format('YYYY-MM-DD HH:mm:ss'),
    })
  }
  const handlePrint = useReactToPrint({
    content: () => printDivRef.current,
  });
  return (
    <div>
    <Tooltip title="Print Report">
        <Fab
          onClick={handlePrint}
          component="div"
          size="medium"
          variant="circular"
          color="secondary"
          sx={{
            borderRadius: 0,
            borderTopLeftRadius: '50%',
            borderBottomLeftRadius: '50%',
            borderTopRightRadius: '50%',
            borderBottomRightRadius: '50%',
            top: '15%',
            position: 'fixed',
            right: 10,
            zIndex: 100,
            boxShadow: 'transparent',
          }}>
          <AnimateButton type="scale">
            <IconButton color="inherit" size="large" disableRipple>
              <Print />
            </IconButton>
          </AnimateButton>
        </Fab>
      </Tooltip>
     <SubHeader name={'Report Analysis'} active={active} setActive={setActive} dateRange={dateRange} updateDateRange={_updateDateRange} updateButtonDateRange={_updateButtonDateRange}/>
     <div ref={printDivRef}>
     <ReportContent dateRange={dateRange}  />
     </div>
    
    </div>
  )
}

export default Report