import Layout, { Content, Footer } from 'antd/lib/layout/layout';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.less';
import { Headers } from './Components/Header/Header';
import { Pages } from './Components/Mainpage/Pages';
import { Pokebag } from './Components/Mainpage/Pokebag';
import { Pokemon } from './Components/Mainpage/Pokemon';
import './Resources/style/Util.scss';
import { Provider } from 'react-redux';
import store from './Reduxjs';

function App() {
   return (
      <>
         <Provider store={store}>
            <Layout style={{ maxWidth: '480px', margin: '0 auto' }}>
               <Router>
                  <Headers />
                  <Content>
                     <Routes>
                        <Route path="/" element={<Pages />}></Route>
                        <Route path="/Pokebag" element={<Pokebag />}></Route>
                        <Route path="/Pokemon" element={<Pokemon />}></Route>
                     </Routes>
                  </Content>
                  {/* <Footer /> */}
               </Router>
            </Layout>
         </Provider>
      </>
   );
}
export default App;
