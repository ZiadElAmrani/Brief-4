import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useAsyncValue } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const TodoIndex = () => {
    const [todos, setTodos] =useState([]);
    const navigate = useNavigate();
    const getTodos = async () => {
        const apiTodos = await axios.get("http://127.0.0.1:8000/api/");
        setTodos(apiTodos.data);
    }

    useEffect(() => {
        
        
    getTodos();
    }, []);
    const setData = (T) => {
        const { id, name} = T;
            localStorage.setItem('ID', id);
            localStorage.setItem('name', name);
    }
    const deleteTodo = async(id) => {
        console.log("delete succesfull");
        await axios.delete(`http://127.0.0.1:8000/api/deleteTodo/${id}`);
        getTodos();
        navigate("/Todos");
    }
    
    return (
    <div className='mt-12'>
        <div className='flex justify-end m-2 p-2'>
            <Link to="/todos/create" className='px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>
                Add New Todo
            </Link>
        </div>
        <div className="overflow-x-auto relative">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Todo Id
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Todo Name
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo) => (
                    <tr key={todo.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="py-4 px-6">{todo.id}</td>
                        <td className="py-4 px-6">{todo.name}</td>
                        <td className="py-4 px-6">
                        <a href={`/Todos/${todo.id}/edit`}><button onClick={() => {setData(todo)}} className = "px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">Edit</button></a> 
                        <button onClick={() => deleteTodo(todo.id)} className = "px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded-md">Delete</button>
                        </td>
                    </tr>
                    ))}

                    
                </tbody>
            </table>
        </div>

    </div>
    )
                    
}
