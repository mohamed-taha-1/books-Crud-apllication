import React ,{Component } from 'react';
// import {books} from '../data'; // data contain books that has been created 
import Book  from '../component/Book';
import {connect} from 'react-redux';
import {fetchBooks} from '../actions/book.action';
import {history} from '../index';
import {deleteBook} from '../actions/book.action';
class Books extends Component {
    constructor(props){
        super(props);
    }


    componentWillMount(){
        this.props.onFetch();
    }



    handleEdit(Book){
        history.push({
            pathname:`/edit/${Book.id}`,
            state:{
                book:Book,

            }
        })
    }

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
                               {/* console.log(book.id); */} 
                              
                               return(
                                <Book key={Math.round()*3} book={book} onDelete={this.props.onDelete} title={book.title} onEdit={this.handleEdit.bind(this)} auther={book.auther}  year={book.year}  />
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
        },

        onDelete:(id)=>{
            dispatch(deleteBook(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);