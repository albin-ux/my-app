import React, { useState, useRef} from 'react';
import Movie from './Movie';
export default function NewMovie() {
  const [movies, setMovie] = useState([]);
  const inputRef = useRef();
  const anotherRef = useRef();

  function AddItem(event){
    if (inputRef.current.value == ""){
      alert("Du måste skriva in en titel")
    }
    else if (anotherRef.current.value == 0) {
      alert("Du måste skriva in ett betyg")
    }
    else {
      const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;

      setMovie([...movies, {
        id: newId,
        title: inputRef.current.value,
        grade: anotherRef.current.value
      }]);

      inputRef.current.value = "";
      anotherRef.current.value = "";
    }

    }

  function deleteMovie(id) {
    setMovie(movies.filter((item) => item.id !== id));
  }

  function sortTitle(){

  }

  function sortGrade(){
    
  }
  return (
    <div>
        <input className="form-control" placeholder="Lägg till en ny film" ref={inputRef}/>
        <select class="form-control" placeholder="Välj ett betyg" ref={anotherRef}>
                    <option value="0">Välj betyg här...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
        <button type="submit" className="btn btn-success mt-3" onClick={() => {AddItem()}}>Lägg till film</button>
        <ul className="list-group">
            { movies.map(movie => <Movie key={movie.id} item ={movie} deleteMovie={deleteMovie} />)}
        </ul>
        <button type="submit" className="btn btn-success mt-3" onClick={() => {AddItem()}}>Lägg till film</button>
        <button type="submit" className="btn btn-success mt-3" onClick={() => {AddItem()}}>Lägg till film</button>
    </div>

  );
}
