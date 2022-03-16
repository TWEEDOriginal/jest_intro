const { default: axios } = require("axios");

const async_functions = {
   get_user : (url) => axios.get(url)
   .then(
       res => 
      { 
    // console.log(res.data)
      return res.data }
   )
   .catch(err =>{   
    // console.log('errorrrrr')  
 return 'errorrrrr' } )
}

async_functions.get_user('https://google.com/admin')


module.exports = async_functions;