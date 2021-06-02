import React from 'react';


const FactoryBook =({year, auther,title,onEdit, onDelete,book})=>{
  return(
    <tr >
    <td>{title}</td>
    <td>{auther}</td>
    <td>{year}</td>
    <td>
        <button type="button " className="btn btn-outline-danger btn-lg col-sm-3" onClick={()=> onDelete(book.id)}>
                Delete
        </button> 
         <button type="button " className="btn  btn-outline-warning  btn-lg col-sm-3" onClick={()=>onEdit(book)}>
                Edit
        </button>
    </td>
    </tr>
  );

};

export default FactoryBook;