import React ,{Component } from 'react';
// import {books} from '../data'; // data contain books that has been created 
import Book  from '../component/Book';
import {connect} from 'react-redux';
import {fetchBooks} from '../actions/book.action';
import {history} from '../index';

class Books extends Component {
    constructor(props){
        super(props);
    }


    componentWillMount(){
        this.props.onFetch();
    }



    // handleEdit(Book){
    //     history.push({
    //         pathname:`/edit/${Book.title}`,
    //         state:{
    //             book:Book,

    //         }
    //     })
    // }

    render(){
        return(
            <div>
                <table className="table table-striped">
                    <thead>
                     
                        <th>Title</th>
                        <th>Auther</th>
                        <th>Year</th>
                        {/* <th>Actions</th> */}
                    </thead>
                    <tbody>
                        {
                           this.props.books.map(book=>{
                               console.log(book.title);
                               return(
                                <Book key={Math.round()*3} book={book}  title={book.title}  auther={book.auther}  year={book.year}  />
                               );
                               
                           })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
};


const mapStateToProps=(state)=>{
    return{
        books:state.booksData.books || [],
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onFetch:()=>{
            dispatch(fetchBooks())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);