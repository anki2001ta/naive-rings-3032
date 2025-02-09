import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { CartLoginItems } from '../Pages/Cart/CartLoginItems';
import Home from '../Component/Home'
import IndivisualPage from '../Pages/IndivisualPage'
// import Login from '../Pages/login'
import LoginForm from '../Component/LoginForm'
import BevverageProducts from '../Pages/BevverageProducts'
import ElectronicProducts from '../Pages/ElectronicProducts'
import FruitsAndVegetables from '../Pages/FruitsAndVegetables'
import RegisterForm from '../Component/RegisterForm'
import {Address} from '../Pages/Cart/Address';
import {PaymentPage} from '../Pages/Cart/PaymentPage';
const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<LoginForm />}/>
            <Route path='/beverages' element={<BevverageProducts />}/>
            <Route path='/electronicProducts' element={<ElectronicProducts />}/>
            {/* <Route path='/electronicProducts' element={<ElectronicProducts />}/> */}
            <Route path='/indivisualPage' element={<IndivisualPage />}/>
            <Route path='/fruitsAndVegetables' element={<FruitsAndVegetables />}/>
            <Route path='/cart' element={<CartLoginItems />}/>
            <Route path='/register' element={<RegisterForm />}/>
            <Route path='/address' element={<Address />}/>
            <Route path='/payment' element={<PaymentPage />}/>
            <Route path='*' element={<h1>*Error* Page Not Found</h1>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes