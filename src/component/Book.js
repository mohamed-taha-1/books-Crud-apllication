import React from 'react';


const Book =({year, auther,title,onEdit, onDelete,book})=>{
  return(
    <tr >
    <td>{title}</td>
    <td>{auther}</td>
    <td>{year}</td>
    <td>
        <button type="button " className="btn btn-danger" onClick={()=> onDelete(book.id)}>
                Delete
        </button> 
         <button type="button " className="btn button btn-default" onClick={()=>onEdit(book)}>
                Edit
        </button>
    </td>
    </tr>
  );

};

export default Book;