import './App.css';
import GlobalStyle from './Styles/Global';
import RoutesPage from './Routes/index';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {

  return (
    <>

      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        style={{ width: "19.6875rem", margin: "1.25rem" }}
      />
      <GlobalStyle />
      <RoutesPage />
    </>

  );
}

export default App;
