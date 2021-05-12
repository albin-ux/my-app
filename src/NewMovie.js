import React, { useState, useRef} from 'react';
import Movie from './Movie';
export default function NewMovie() {
  const [movies, setMovie] = useState([{
    id: 1,
    title: "first movie"

  },{
    id: 2,
    title: "second movie"

  }]);
  const inputRef = useRef();

  function AddItem(event){
    if (event.keyCode === 13){
      const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;

      setMovie([...movies, {
        id: newId,
        title: inputRef.current.value
      }]);

      inputRef.current.value = "";
    }
  }
  function deleteMovie(id) {
    setMovie(movies.filter((item) => item.id !== id));
  }
  return (
    <div>
        <input className="form-control" placeholder="Lägg till en ny film" ref={inputRef} onKeyUp={AddItem}/>
        <ul className="list-group">
            { movies.map(movie => <Movie key={movie.id} item ={movie} deleteMovie={deleteMovie} />)}
        </ul>
    </div>

  );
}
