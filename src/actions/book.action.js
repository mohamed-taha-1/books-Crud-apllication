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
import FacadeApi from './FacadeApi';

// create ----------------------------------------------------------


export const createBookSuccess=(data)=>{

    return{
        type:ADD_BOOK_SUCCESS,
        payload:data,
    }
}

const url='https://books-b372a-default-rtdb.firebaseio.com/books';


export const createBook=(book)=>{

    if( book.id){

        // edit if the book is exist and has and title 

        const data = {
            id:book.id,
            title:book.title,
            auther:book.auther,
            year:book. year
        };

        return (dispatch)=>{
            dispatch(editBook(data));
        }




    }else{

     const data={
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
}



// edit------------------------------------------------------------



export const editBookSuccess=(data)=>{

    return{
        type:EDIT_BOOK_SUCCESS,
        payload:data,
    }
}




export const editBook=(data)=>{
    return(dispatch)=>{

        const id= data.id;
        
        return axios.put(`https://books-b372a-default-rtdb.firebaseio.com/books/${id}.json`,data)
        .then(res=>{
            dispatch(editBookSuccess(res.data));
             history.push('/'); 
        }).catch(err=>{console.log(err)});

       
    }


}


// delete------------------------------------------------------------

export  const deleteBookSuccess=(id)=>{
    return {
        type:DELETE_BOOK_SUCCESS,
        payload:{
            id:id
        }
    }
}


export const deleteBook=(id)=>{
    return (dispatch)=>{
        return axios.delete(`${url}/${id}.json`).then(()=>{
            dispatch(deleteBookSuccess(id));
        }).catch(err=>{
            console.log("can not delte this item ",err);
        })
    }
}



// fetch --------------------------------------------------------------

export const fetchBookSuccess=(data)=>{
    return{
        type:FETCH_BOOK_SUCCESS,
        payload:data,

    }

};











export const fetchBooks=()=>{

    



    return (dispatch)=>{
          
        // return  axios.get('https://books-b372a-default-rtdb.firebaseio.com/books.json')
        //     .then(Response=>{
        //         // const data= normalizeResponse(Response.data);
                
               
        //     try{
                
        //         const NextIterator = [];
        //         for ( let key in Response.data) { // if has next iterator 
        //             NextIterator.push( {
        //                 ...Response.data[key],
        //                 id: key
        //             } );
        //         }
        //         dispatch(fetchBookSuccess(NextIterator));
            
        //     }catch{
        //         console.log("error in passed data ");
        //     }

            


        //     }).catch(err=>{
        //             console.log(err);
        //     });


        const api = new FacadeApi();   // create new object from facad api
 
        api.get('https://books-b372a-default-rtdb.firebaseio.com/books.json')
        .then(data => {
            dispatch(fetchBookSuccess(data));
        })
        .catch(error => {
            console.error(error);
        });
    };
}


