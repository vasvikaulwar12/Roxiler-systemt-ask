import React from 'react';
import './App.css'
import CreateItem from './components/createItem';
import ItemList from './components/itemList';
import UpdateItem from './components/updateItem';
import DeleteItem from './components/deleteItem';

function App() {
  return (
    <div className="App">
      <h1>CRUD Application</h1>
      <CreateItem />
      {/* <ItemList/> */}
      <ItemList />
      <UpdateItem/>
      <DeleteItem/>
     
    </div>
  );
}

export default App;
