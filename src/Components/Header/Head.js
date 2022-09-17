import React from 'react';
import { DingtalkOutlined } from '@ant-design/icons';

export const Head = () => {
   return (
      <>
         <section className="Head">
            <div className="container Headclass">
               <div className="Logo">
                  <DingtalkOutlined />
                  <span>Pokemon GO</span>
               </div>
            </div>
         </section>
      </>
   );
};
