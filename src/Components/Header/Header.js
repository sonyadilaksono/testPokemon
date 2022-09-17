import { Header } from 'antd/lib/layout/layout';
import React from 'react';
// import { Category } from './Category';
import { Navbar } from './Navbar';
// import { Search } from './Search';

export const Headers = () => {
   return (
      <>
         <Header>
            <Navbar />
            {/* <Search /> */}
            {/* <Category /> */}
         </Header>
      </>
   );
};
