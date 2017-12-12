import React from 'react';



const CommentBox =({ comment, commentChange, commentSubmit }) => {

  return(
    <div>
      <form onSubmit={commentSubmit}>
        <input type="text" name="content" value={comment.content} placeholder="Add your review here..." onChange={commentChange}/>
        <input type="submit" />
      </form>
    </div>
  );

};


export default CommentBox;
