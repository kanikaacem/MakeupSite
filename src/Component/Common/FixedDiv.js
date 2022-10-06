import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {useSelector,useDispatch} from 'react-redux';

function FixedDiv(){
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  const handleTop = () => {
    dispatch({type:'MOVE_TO_TOP'})
  }

  const handleTheme = () => {
    theme === 'light' ? dispatch({type:'TOGGLE_THEME',payload:'dark'})
                      : dispatch({type:'TOGGLE_THEME',payload:'light'})
  }
  return (<>
   <div className="fixedDiv">
   <SpeedDial
        icon={<SpeedDialIcon 
        />}
        ariaLabel="SpeedDial basic example"
    >
        <SpeedDialAction
        key='full_screen'
        icon={<FullscreenIcon></FullscreenIcon>}
        tooltipTitle='Switch To The Fullscreen'
        />
        
        <SpeedDialAction
        key='move_to_top'
        icon={<KeyboardDoubleArrowUpIcon></KeyboardDoubleArrowUpIcon>}
        tooltipTitle='Move To Top'
        onClick={handleTop}
        />

        <SpeedDialAction
        key='dark_theme'
        icon={
            theme === 'light'?<LightModeIcon></LightModeIcon>:<DarkModeIcon></DarkModeIcon>
        }
        tooltipTitle='Toggle Dark / Light Theme'
        onClick={handleTheme}
        />
    </SpeedDial>
   </div>
  
    </>)
}
export default FixedDiv;