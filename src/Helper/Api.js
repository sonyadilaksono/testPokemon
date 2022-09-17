import Axios from 'axios';
export const apiRequest = async ({ api, method = 'get' }) => {
   return new Promise(async (resolve, reject) => {
      await Axios[method](api)
         .then((response) => resolve(response))
         .catch((error) => reject(error));
   });
};
