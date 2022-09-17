import 'react-spring-bottom-sheet/dist/style.css';
import { Card, Col, Image, Row, Tag, Typography } from 'antd';
import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { apiRequest } from '../../Helper/Api';
import { CatchPokemonModal } from '../CatchPokemonModal.js';
const { Title } = Typography;

export const Pokemon = () => {
   const [detailPokemon, setDetailPokemon] = useState([]);
   const modalRef = useRef('');
   const location = useLocation();
   const gridStyle = {
      width: '100%',
      textAlign: 'center',
   };
   const handleClick = () => {
      modalRef.current.toogleModal();
   };

   useEffect(() => {
      const fetchData = async () => {
         let response = await apiRequest({
            api: location.state.url,
         });
         setDetailPokemon({
            image: response.data.sprites.front_default,
            type: response.data.types,
            move: response.data.moves,
         });
      };
      fetchData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
   return (
      <>
         <Row gutter={[16, 16]}>
            <Col span={24}>
               <Card>
                  <Card.Grid
                     style={gridStyle}
                     className={'p-none detailPokemon'}
                  >
                     <div className="p-md">
                        <Title level={2}>{location.state.name}</Title>
                        {detailPokemon.type?.map((data) => {
                           return (
                              <Tag className={data.type.name}>
                                 <div className={data.type.name}>
                                    {data.type.name}
                                 </div>
                              </Tag>
                           );
                        })}
                        <div>
                           <Image
                              src={detailPokemon.image}
                              width={250}
                              height={250}
                              preview={false}
                           />
                           <Title level={2}>Moves</Title>
                           {detailPokemon.move?.map((data) => {
                              return (
                                 <Tag color="#108ee9" className="m-sm">
                                    {data.move.name}
                                 </Tag>
                              );
                           })}
                        </div>
                        <button onClick={handleClick} className="pokeball">
                           <div className="stage">
                              <div className="box bounce-7">
                                 <Image
                                    width={80}
                                    preview={false}
                                    src={require('../../Resources/Images/Pokeball.png')}
                                 />
                              </div>
                           </div>
                        </button>
                        <CatchPokemonModal ref={modalRef} />
                     </div>
                  </Card.Grid>
               </Card>
            </Col>
         </Row>
      </>
   );
};
