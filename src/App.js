import {ToastContainer} from 'react-toastify'
import  RoutesApp  from "./routes";

import 'react-toastify/dist/ReactToastify.css';


import './index.css'

function App() {
  return (
    <div >
      <ToastContainer autoClose={3000} />
     <RoutesApp/>
    </div>
  );
}

export default App;
