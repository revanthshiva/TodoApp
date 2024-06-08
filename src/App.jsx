import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {

  const [todoList, setTodoList] = useState('');
  const [data, setData] = useState(['']);

  const addTodo = () => {
    setData([...data, todoList]);
    console.log(todoList);
    console.log(data);
  }

  return (
    <>

      <div className=" w-100    text-center h-lvh mt-5">
        <h1 className="text-5xl text-white">TODO APP</h1>
        <div className='  w-100  top-[10em]'>
          <div className="flex  justify-center mt-[10em]">
            <input type="text" className='w-[600px] h-20 text-7xl' onChange={(e) => setTodoList(e.target.value)} value={todoList} />
            <button className='ms-10  bg-slate-700 p-7  ' onClick={() => addTodo()} >ADD</button>
          </div>
        </div>


        <div className=" text-white">

          <ul className='text-white '>
            {data.map((value, index) => (
              <div key={index}>
                <li>{value}</li>
                <button className='p-7 bg-red-500 '>Remove</button>
              </div>
            ))}


          </ul>
        </div>

      </div>

    </>
  )
}

export default App
