import PaginaPadrao from 'Components/PaginaPadrao'
import Carrinho from 'pages/carrinho'
import Categoria from 'pages/categoria'
import Home from 'pages/home'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<PaginaPadrao/>}>
                <Route index element={<Home/>}/>
                <Route path='/categoria/:nomeCategoria' element={<Categoria/>}/>
                <Route path='/carrinho' element={<Carrinho/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
