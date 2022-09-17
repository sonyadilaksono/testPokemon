import { Card, Col, Row, Typography, Button } from 'antd';

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PokeImage from './PokeImage';
import { connect } from 'react-redux';
import {
   fetchPokemons,
   fetchMorePokemons,
} from '../../Reduxjs/Actions/Pokedex';

const { Title, Text } = Typography;

const Pokedex = (props) => {
   const { pokedex, fetchPokemons, fetchMorePokemons } = props;
   const gridStyle = {
      width: '100%',
      textAlign: 'center',
   };

   const getParams = (offset) => {
      var params = [];
      params.push(`?offset=${offset}`);
      params.push(`limit=10`);
      return params.join('&');
   };

   useEffect(() => {
      fetchPokemons(getParams(pokedex.offset));
   }, []);

   const onLoadMore = () => {
      fetchMorePokemons(getParams(pokedex.offset + 10));
   };

   return (
      <>
         <div className="p-md">
            <Title level={2}>Pokedex</Title>
            <Row gutter={[16, 16]}>
               {pokedex?.data?.map((pokemon, idx) => {
                  return (
                     <Col key={idx} span={12}>
                        <Link to="/pokemon" state={pokemon}>
                           <Card>
                              <Card.Grid style={gridStyle} className={'p-none'}>
                                 <Text strong>{pokemon?.name}</Text>

                                 <PokeImage url={pokemon?.url} />
                              </Card.Grid>
                           </Card>
                        </Link>
                     </Col>
                  );
               })}
               <Col span={24}>
                  <Button type="primary" block onClick={onLoadMore}>
                     Load More
                  </Button>
               </Col>
            </Row>
         </div>
      </>
   );
};

const mapStateToProps = (state) => ({
   pokedex: state.pokedex,
});

const mapDispatchToProps = (dispatch) => ({
   fetchPokemons: (params) => dispatch(fetchPokemons(params)),
   fetchMorePokemons: (params) => dispatch(fetchMorePokemons(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);
