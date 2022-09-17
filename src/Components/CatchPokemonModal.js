import { useState, useImperativeHandle, forwardRef } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
import { Button, Input, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const { Title } = Typography;

export const CatchPokemonModal = forwardRef((props, ref) => {
   const [open, setOpen] = useState(false);
   const [successCatch, isSuccessCatch] = useState('fail');
   const [nickname, setNickname] = useState('');
   const location = useLocation();
   console.log(location);

   const _toogleModal = () => {
      if (!open) {
         const catchPokemon = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
         if (catchPokemon === 2) {
            isSuccessCatch('success');
         } else {
            isSuccessCatch('fail');
         }
      }
      setOpen(!open);
   };

   useImperativeHandle(ref, () => ({
      toogleModal: () => _toogleModal(),
   }));

   const _onSaveToPokebag = () => {
      const getStorage = localStorage.getItem('pokebag');
      const listPokebag = JSON.parse(getStorage) || [];
      listPokebag.push({ ...location.state, nickname: nickname });
      localStorage.setItem('pokebag', JSON.stringify(listPokebag));
      isSuccessCatch('afterSuccess');
   };

   const _getContent = () => {
      switch (successCatch) {
         case 'fail':
            return (
               <>
                  <Title level={2}>Not Today !!!</Title>
                  <Button
                     onClick={_toogleModal}
                     type="primary"
                     size={'large'}
                     block
                  >
                     <Title level={5}>CLOSE</Title>
                  </Button>
               </>
            );

         case 'success':
            return (
               <>
                  <div className="get-pokemon">
                     <div className="getPokemonSukses">
                        <Title>Gotcha!</Title>
                        <Title level={5}>
                           Now enter your {location.state.name} nickname
                        </Title>
                        <Input
                           onChange={(e) => setNickname(e.target.value)}
                           size="small"
                           value={nickname}
                           prefix={<UserOutlined />}
                        />
                        <Button
                           type="primary"
                           size="large"
                           block
                           onClick={_onSaveToPokebag}
                        >
                           <Title level={5}>Submit</Title>
                        </Button>
                     </div>
                  </div>
               </>
            );
         case 'afterSuccess':
            return (
               <>
                  <Title level={2}>
                     Your Pokemon is safe and sound in your pokebag.
                  </Title>
                  <div className="afterSuccess">
                     <Button onClick={_toogleModal} type="primary" size="large">
                        <Title level={5}>CLOSE</Title>
                     </Button>
                     <Link to="/pokebag">
                        <Button
                           onClick={_toogleModal}
                           type="primary"
                           size="large"
                        >
                           <Title level={5}>SEE POKEBAG</Title>
                        </Button>
                     </Link>
                  </div>
               </>
            );
      }
   };

   return (
      <>
         <BottomSheet open={open} className="layer" onDismiss={_toogleModal}>
            {_getContent()}
         </BottomSheet>
      </>
   );
});
