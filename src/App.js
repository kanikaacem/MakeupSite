import {useEffect} from "react";
import Header from './Component/Layout/Header';
import MiddleContent from './Component/Layout/MiddleContent';
import Footer from './Component/Layout/Footer';
import FixedDiv from './Component/Common/FixedDiv';
import {useSelector,useDispatch} from "react-redux";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './GlobalStyles';
function App() {
  // const dispatch = useDispatch();
  // useEffect(()=>{
  //  setTimeout(()=>{
  //     dispatch({'type':'LOADED'});
  //  },5000);
  // })
  const theme = useSelector(state => state.theme)

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
      <div className="App">
        <Header></Header>
        <MiddleContent></MiddleContent>
        <Footer></Footer>
        <FixedDiv></FixedDiv>
      </div>
      </>
    </ThemeProvider>
);
}

export default App;
