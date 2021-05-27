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
} from '../actions/types';


const defaultState= {
    books:[],
    error:null,
    isLoading:false,
};

const booksReducer=(state= defaultState, action)=>{
    switch(action.type){
        case DELETE_BOOK_SUCCESS:
            const filterBook= state.books.filter(book=> book.id !== action.payload.id);
            return {...state , books:filterBook};
        case EDIT_BOOK_SUCCESS:
            const updateBook = state.books.filter(book => book.id !== action.payload.id );
            return{...state ,books:[...updateBook]};

        case ADD_BOOK_SUCCESS:
            return{...state ,books:[...state.books,action.payload]};
        case FETCH_BOOK_SUCCESS:
            return {...state,books:action.payload};
        default:
            return state;
    }
};

export default booksReducer;