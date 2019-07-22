import React, { useState } from "react";
import { Route, Switch, Link } from "react-router-dom";
import MovieList from "./Movies/Movie";
import SavedList from "./Movies/SavedList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route path="/Movie/:id" component={Movie} />
        </Switch>
     
    </div>
  );
};

export default App;
