import React, { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }


  const handleFormSubmit = (event) => {
    event.preventDefault();
    if(inputValue.length==0){
      alert("can't be empty")
    }
    else{
      setTodos([...todos, inputValue ]);
    }
    setInputValue('');

    // if (inputValue.trim()) {
    //   setTodos([...todos, { id: Date.now(), text: inputValue }]);
    //   setInputValue('');
    // }
  };

  const handleModify = (event) =>{
    console.log(event.target.value);
  }



const handleDelete = () => {
      console.log('deleted');
};





  // const handleDeleteTodo = (id) => {
  //   const filteredTodos = todos.filter((todo) => todo.id !== id);
  //   setTodos(filteredTodos);
  // };

  return (
    <div className="min-h-screen bg-gray-200">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">To-Do List</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="flex mb-4">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Add a to-do item"
              className="bg-white focus:outline-none border border-gray-300 py-2 px-4 rounded-md mr-2 w-full"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
            >
              Add
            </button>
          </div>
        </form>
        <div className="flex flex-col">
                <div className="flex ">
                  <div className="w-1/3 flex justify-center">
                    <h2 className="text-xl font-bold mb-4">Notes</h2>
                  </div>
                  <div className="w-1/3 flex justify-center">
                    <h2 className="text-xl font-bold mb-4">Date</h2>
                  </div>
                  <div className="w-1/3 flex justify-center">
                    <h2 className="text-xl font-bold mb-4">Change</h2>
                  </div>
                </div>
      </div>



        <div className="bg-white rounded-md shadow-md p-4">

        <ul>
              {todos.map((todo, index) => (
                // <li key={index}>{todo}</li>
                <div key={todo} className="flex flex-col my-4">
                <div className="flex">
                  <div className="w-1/3 flex justify-center">
                  <li>{todo}</li>
                  </div>
                  <div className="w-1/3 flex justify-center">
                    <li >{new Date().toDateString()}</li>
                  </div>
                  <div className="w-1/3 flex justify-center">
                    <li>
                        <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=> handleModify(index) }>
                          Modify
                        </button>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleDelete}>
                          Delete
                        </button>
                    </li>
                  </div>
                </div>
              </div>

              ))}
       </ul>
        </div>
      </div>
    </div>
  );



}

export default App;
