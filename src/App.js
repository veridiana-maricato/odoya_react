import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

//hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

// context 
import { AuthProvider } from './context/AuthContext';

// components
import Footer from './components/Footer';
import NavBar from './components/NavBar';

// pages
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Recepies from './pages/Recepies/Recepies';
import Order from './pages/Order/Order';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Cart from './pages/Cart/Cart';
import Adress from './pages/Adress/Adress';
import Payment from './pages/Payment/Payment';

function App() {

  const [user, setUser] = useState(undefined)
  const { auth } = useAuthentication()

  const loadingUser = user === undefined

  // user will no longer be undefined
  // user will become new user || user will come as false
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if (loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <AuthProvider value={{ user }} >
        <BrowserRouter>
          <NavBar />
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/order' element={<Order />} />
              <Route path='/recepies' element={<Recepies />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/cart/adress' element={<Adress />} />
              <Route path='/cart/payment' element={<Payment />} />
              <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
              <Route path='/register' element={!user ? <Register /> : <Navigate to='/' />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
