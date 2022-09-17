import React, { useEffect, useState, memo } from 'react';
import { apiRequest } from '../../Helper/Api';
import { Image } from 'antd';

const PokeImage = (props) => {
   const { url } = props;

   const [image, setImage] = useState('');

   useEffect(() => {
      const fetchData = async () => {
         let response = await apiRequest({
            api: url,
         });

         setImage(response.data.sprites.front_default);
      };
      fetchData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
   return <Image src={image} width={100} height={100} preview={false} />;
};

export default memo(PokeImage);
