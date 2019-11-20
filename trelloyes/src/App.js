import React from 'react';
import './App.css';
import List from './components/List';
import store from './components/store';

function App() {
  console.log(store);
  let listComponents = store.lists.map(function (list){
  return <List list={list} key={list.id}>{list.header}</List>
  });

  return (
    <div className="App">
      <header>
        <h1>Trelloyes!</h1>
      </header>
      <main>
        {listComponents}
      </main>
    </div>
  );
}

export default App;
