import './App.css';
import Login from './views/Login';
import Home from './views/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path='/' element={
        <ProtectedRoute><Home/></ProtectedRoute>
      }/>
    </Routes>
    </BrowserRouter>
  );
}
export default App;
