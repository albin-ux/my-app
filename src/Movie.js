import React from 'react'

function getStars(grade){
  const star = []
  for(let i=0; i<grade; i++){

    star.push(<img src="./star.png" />)
  }
  return star
}

export default function Movie(props){
  return(

    <li className ="list-group-item">
     {props.item.title}
     {getStars(props.item.grade)}
     <button className="btn btn-sm btn-danger float-end" onClick={() => {props.deleteMovie(props.item.id)}}>X</button>
    </li>

  )
}
