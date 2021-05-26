import React from 'react';


const Book =({year, auther,title,onEdit ,book})=>{
  return(
    <tr >
    <td>{title}</td>
    <td>{auther}</td>
    <td>{year}</td>
    <td>
        {/* <button type="button " className="btn btn-danger">
                Delete
        </button> */}
        {/* <button type="button " className="btn btn-default" onClick={()=>onEdit(book)}>
                Edit
        </button> */}
    </td>
    </tr>
  );

};

export default Book;