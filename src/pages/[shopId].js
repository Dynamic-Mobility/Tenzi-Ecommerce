import Cto from '@/Components/Cto'
import Footer from '@/Components/Footer'
import Hero from '@/Components/Hero'
import NavBar from '@/Components/Navbar'
import Products from '@/Components/[Products]'
import Random from '@/Components/Random'
import React,{useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '@/Redux/Services/Products'
import { getAllProducts } from '@/Redux/Features/Products'
import { toast } from 'react-toastify'


const LandingPage  = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const shopId = router.query.shopId
  const [isOpen,setIsOpen] = useState(false)

  useEffect(() =>{
    if(shopId){
      try{
      dispatch(getAllProducts(shopId))
      }
      catch(e){
        toast.error(e.message)
      }
    }
  },[shopId]);
  return (
    <>
    <NavBar isOpen={isOpen} setIsOpen={setIsOpen}/>
    <Hero isOpen={isOpen} setIsOpen={setIsOpen}/>
    <Products />
    <Cto />
    <Random />
    <Footer />
    </>
  )
}

export default LandingPage