import { Button, Row } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
   const [size] = useState('large');
   return (
      <>
         <Row type={'flex'} justify={'space-between'} gutter={24}>
            <Link to="/">
               <Button type="primary" size={size}>
                  Home
               </Button>
            </Link>

            <Link to="/Pokebag">
               <Button type="primary" size={size}>
                  Pokebag
               </Button>
            </Link>
         </Row>
      </>
   );
};
