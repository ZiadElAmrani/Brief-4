import { Routes, Route, Link } from 'react-router-dom';

import {Home} from './components/Home';
import {TodoIndex} from './components/Todos/TodoIndex'; 
import {TodoCreate} from './components/Todos/TodoCreate'; 
import {TodoEdit} from './components/Todos/TodoEdit'; 



function App() {
  return (
    <div className='bg-red-500'>
      <div className='max-w-7xl mx-auto min-h-screen'>
        <nav>
          <ul className='flex'>
            <li className='m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>
              <Link to="/">Home</Link>
            </li>
            <li className='m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>
              <Link to="/Todos">Todos</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Todos" element={<TodoIndex />}></Route>
          <Route path="/Todos/create" element={<TodoCreate />}></Route>
          <Route path="/Todos/:id/edit" element={<TodoEdit />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
