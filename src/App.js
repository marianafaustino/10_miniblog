import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

//hooks
import { useState, useEffect } from 'react';
import { useAutentication } from './hooks/useAutentication';

//context
import { AuthProvider } from './context/AuthContext';

//pages
import Home from './pages/home/Home';
import About from './pages/about/About';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

//components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CreatePost from './pages/createPost/CreatePost';
import Dashboard from './pages/dashboard/Dashboard';


function App() {

  const [user, setUser]= useState(undefined)
  const {auth}= useAutentication()

  const loadingUser = user === undefined

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      setUser(user)
    })
  },[auth])

  if(loadingUser){
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <AuthProvider value={{user}}>
      <BrowserRouter>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={!user ? <Login/> : <Navigate to="/"/>}/>
          <Route path='/register' element={!user ? <Register/> : <Navigate to="/"/>}/>
          <Route path='/posts/create' element={user ? <CreatePost/> : <Navigate to="/login"/>}/>
          <Route path='/dashboard' element={user ? <Dashboard/> : <Navigate to="/login"/>}/>
        </Routes>
      </div>
      <Footer/>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
