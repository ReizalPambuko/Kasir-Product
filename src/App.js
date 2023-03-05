import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Sukses from '../src/pages/Sukses';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<Home />} />
          <Route path='/sukses' element={<Sukses />} />
        </Route>
      </Routes>
    </BrowserRouter>
    )
  }
}
