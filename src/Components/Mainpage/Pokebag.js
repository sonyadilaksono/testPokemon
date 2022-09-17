import { DeleteFilled } from '@ant-design/icons';
import { Button, Card, Col, Row, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import PokeImage from './PokeImage';
const { Title, Text } = Typography;

export const Pokebag = (props) => {
   const [items, setItems] = useState([]);
   const gridStyle = {
      width: '100%',
      textAlign: 'center',
   };
   const removePokemon = (val) => {
      const filterData = items.filter((pokeBag) => pokeBag.nickname !== val);
      localStorage.setItem('pokebag', JSON.stringify(filterData));
      setItems(filterData);
   };

   useEffect(() => {
      const getStorage = localStorage.getItem('pokebag');
      const listPokebag = JSON.parse(getStorage) || [];
      setItems(listPokebag);
   }, []);

   return (
      <>
         <div className="p-md">
            <Title level={2}>Pokebag</Title>
            <Row gutter={[16, 16]}>
               {items?.map((pokeBag) => {
                  return (
                     <Col span={12}>
                        <Card>
                           <Card.Grid
                              style={gridStyle}
                              className={'p-none pokebag'}
                           >
                              <Text strong className="pokemon-nickname">
                                 {pokeBag?.nickname}
                              </Text>
                              <Text strong className="pokemon-name">
                                 {pokeBag?.name}
                              </Text>
                              <PokeImage url={pokeBag?.url} />
                              <div className="pokedelete">
                                 <Button
                                    type="primary"
                                    icon={<DeleteFilled />}
                                    onClick={() =>
                                       removePokemon(pokeBag?.nickname)
                                    }
                                 ></Button>
                              </div>
                           </Card.Grid>
                        </Card>
                     </Col>
                  );
               })}
            </Row>
         </div>
      </>
   );
};
