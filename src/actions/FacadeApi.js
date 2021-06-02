import axios from 'axios';
// import { fetchBooks } from './book.action';
// import React  from 'react ';


//Using the Facade pattern with third-party functionalities


/**  It is also a common approach to use a Facade to interact 
 , with a third-party library or some complex native functionalities.*/


 /**
  * automatically inject authentication tokens
    parse the body of the response so that we don’t need to call  response.json() every time
    throw an error if the request did not succeed
  */



//  define object that access interface 
// Now we have a class that wraps existing native functionalities with additional logic. 
// You can easily expand it if you ever need some additional functionalities 
// or if you need to adjust it for the API you use.



 
class FacadeApi {

      get(url) {
        return axios.get(url)
        .then(Response=>{
            try{
                        
                const NextIterator = [];
                for ( let key in Response.data) { // if has next iterator 
                    NextIterator.push( {
                        ...Response.data[key],
                        id: key
                    } );
                }
                // dispatch(fetchBookSuccess(NextIterator));
                return  NextIterator;
            
            }catch{
                console.log("error in passed data ");
            }
           
    
          }).catch(err=>{
                        console.log(err);
          });
      }
 
}

export  default FacadeApi;