import {
    DELETE_BOOK_ERROR,
    DELETE_BOOK_LOADING, 
    DELETE_BOOK_SUCCESS,

    ADD_BOOK_ERROR,
    ADD_BOOK_LOADING, 
    ADD_BOOK_SUCCESS,

    EDIT_BOOK_ERROR,
    EDIT_BOOK_LOADING, 
    EDTI_BOOK_SUCCESS, 

    FETCH_BOOK_ERROR,
    FETCH_BOOK_LOADING, 
    FETCH_BOOK_SUCCESS,
    EDIT_BOOK_SUCCESS, 
} from './types';

import {books} from '../data';
import  {history } from '../index';

import axios   from 'axios';

// create ----------------------------------------------------------


export const createBookSuccess=(data)=>{

    return{
        type:ADD_BOOK_SUCCESS,
        payload:data,
    }
}

const url='https://books-b372a-default-rtdb.firebaseio.com/books.json';


export const createBook=(book)=>{

    // if(book.title){

    //     // edit if the book is exist and has and title 

    //     const data = {
    //         title:book.title,
    //         auther:book.auther,
    //         year:book. year
    //     };


    //     return (dispatch)=>{
    //         dispatch(editBook(data));
    //     }




    // }else{

    const data={
        id:Math.random()*3,
        title:book.title,
        auther:book.auther,
        year:book. year
    };

    return(dispatch)=>{

        return axios.post('https://books-b372a-default-rtdb.firebaseio.com/books.json',data)
        .then( res=>{
            // console.log(res.data);
            
            dispatch(createBookSuccess(res.data));
            history.push('/');

        }).catch(err=>{console.log(err)});

       
    }

}



// edit------------------------------------------------------------



// export const editBookSuccess=(data)=>{

//     return{
//         type:EDIT_BOOK_SUCCESS,
//         payload:data,
//     }
// }




// export const editBook=(data)=>{
//     return(dispatch)=>{

//         return axios.put('https://books-b372a-default-rtdb.firebaseio.com/books.json',data)
//         .then( res=>{
//             // console.log(res.data);
            
//             dispatch(editBookSuccess(res.data));
//             history.push('/');

//         }).catch(err=>{console.log(err)});

       
//     }


// }


// delete------------------------------------------------------------


// fetch --------------------------------------------------------------

export const fetchBookSuccess=(data)=>{
    return{
        type:FETCH_BOOK_SUCCESS,
        payload:data,

    }

};

const normalizeResponse=(data)=>{
    const arr=data.map(item =>{
        const key =Object.keys(item);

        key.forEach(k =>{
            item[k.toLowerCase()]=item[k];
            delete item[k];
        });
        return item;
    });

    return arr;
}
export const fetchBooks=()=>{
    return (dispatch)=>{
        
    
        
        return  axios.get('https://books-b372a-default-rtdb.firebaseio.com/books.json')
            .then(Response=>{
                // const data= normalizeResponse(Response.data);
                
               
            try{
                const fetchedOrders = [];
                for ( let key in Response.data ) {
                    fetchedOrders.push( {
                        ...Response.data[key],
                        id: key
                    } );
                }
                dispatch(fetchBookSuccess(fetchedOrders));
            
            }catch{
                console.log("error in passed data ");
            }

            


            }).catch(err=>{
                    console.log(err);
            });
    };
}