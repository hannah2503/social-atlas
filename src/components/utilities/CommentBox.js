import React from 'react';



const CommentBox =({ handleChange, handleSubmit }) => {

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="comment" placeholder="Add your review here..." onChange={handleChange}/>
        <input type="submit"/>
      </form>
    </div>
  );

};


export default CommentBox;
