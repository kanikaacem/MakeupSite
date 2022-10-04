import {useEffect} from "react";
import Header from './Component/Layout/Header';
import MiddleContent from './Component/Layout/MiddleContent';
import Footer from './Component/Layout/Footer';
import {useSelector,useDispatch} from "react-redux";
function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.isLoading)
  // useEffect(()=>{
  //  setTimeout(()=>{
  //     dispatch({'type':'LOADED'});
  //  },5000);
  // })
  return (<>
    {!isLoading && <div className="App">
      <Header></Header>
      <MiddleContent></MiddleContent>
      <Footer></Footer>
    </div>}
  </>
);
}

export default App;
