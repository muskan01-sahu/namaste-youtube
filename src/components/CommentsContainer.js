import React from 'react'
import Comment from './Comment'

const commentsData = [
  {
    name: "Akshay Saini",
    text: "lorem ipsum dolor sit amet, consecutor adip",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "lorem ipsum dolor sit amet, consecutor adip",
    replies: [
      {
        name: "Akshay Saini",
        text: "lorem ipsum dolor sit amet, consecutor adip",
        replies: [],
      },
      {
        name: "Akshay Saini",
        text: "lorem ipsum dolor sit amet, consecutor adip",
        replies: [
          {
            name: "Akshay Saini",
            text: "lorem ipsum dolor sit amet, consecutor adip",
            replies: [
              {
                name: "Akshay Saini",
                text: "lorem ipsum dolor sit amet, consecutor adip",
                replies: [
                  {
                    name: "Akshay Saini",
                    text: "lorem ipsum dolor sit amet, consecutor adip",
                    replies: [],
                  },
                  {
                    name: "Akshay Saini",
                    text: "lorem ipsum dolor sit amet, consecutor adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
     
    ],
  },
  {
    name: "Akshay Saini",
    text: "lorem ipsum dolor sit amet, consecutor adip",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "lorem ipsum dolor sit amet, consecutor adip",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "lorem ipsum dolor sit amet, consecutor adip",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "lorem ipsum dolor sit amet, consecutor adip",
    replies: [],
  },
 

];


const CommentList = ({comments}) =>{
  return comments.map((comment,index) => (
    <div key={index} >
      <Comment data={comment}/>
      <div className='pl-5 border border-l-black ml-5'>
        <CommentList comments={comment.replies}/>
      </div>
    </div>
  ));
};


const CommentsContainer = () => {
  return (
    <div className='p-2 m-3'>
      <h1 className='text-2xl font-bold'>Comments:</h1>
      <CommentList comments= {commentsData} />
    </div>
  )
}

export default CommentsContainer

