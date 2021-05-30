import React , {Component}from 'react';
import Book from '../component/Book';
// import {books} from '../data';
import './CreateBook.css';
import {createBook} from '../actions/book.action';
import {connect} from 'react-redux';


class CreateBook extends Component {
    constructor(props){
        super(props);

        this.state={
            id: 0,
            title: '',
            auther: '',
            year: ''
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onAdd(this.state);
        
    }


   handleChange(e){
       this.setState({
           [e.target.name]:e.target.value,
       })
   }

   handelRest(e){
    e.preventDefault();
    this.setState({
            id: 0,
            title: '',
            auther: '',
            year: ''
    })
   }


   componentWillMount(){
       const props=this.props;
       if(props.location && props.location.state){
           const book= props.location.state.book;

           this.setState({
            id:book.id,
            title: book.title ,
            auther: book.auther,
            year: book.year
           })
       }
   }

    render(){
        return(
            <div className="create-book   py-5 mx-auto " >
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group col-sm-11">
                        <input  
                            type="text"
                            className="form-control "
                            name="title"
                            placeholder="Enter Title"
                            onChange={this.handleChange.bind(this)}
                            value={this.state.title}
                            required
                        />
                    </div>
                    <div className="form-group col-sm-11">
                    <input  
                            type="text"
                            className="form-control"
                            name="auther"
                            placeholder="Enter Auther"
                            onChange={this.handleChange.bind(this)}
                            value={this.state.auther}
                            required
                        />
                    </div>
                    <div className="form-group col-sm-11">
                    <input  
                            type="text"
                            className="form-control"
                            name="year"
                            placeholder="Enter Year published"
                            onChange={this.handleChange.bind(this)}
                            value={this.state.year}
                            required
                        />  
                    </div>
                    <div className="form-group col-sm-11">
                        <button type="submit" className="btn btn-outline-primary btn-lg">Add</button>
                        <button type="button" className="btn btn-default  btn-lg" onClick={this.handelRest.bind(this)}>Cancel</button>
                    </div>
                </form>
            </div>
        );
    }
};



const mapDispatchToProps=(dispatch)=>{
    return{
        onAdd:(book)=>{
            dispatch(createBook(book));
        }
    }
};

export default  connect( null,mapDispatchToProps)(CreateBook);