import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const TodoEdit = () => {
    const navigate = useNavigate();
    const[name, setName] = useState({
        name:""
    
    })
    const[id, setId] = useState(null)

    useEffect(() => {
        setId(localStorage.getItem('ID'))
        setName({...name,name:localStorage.getItem('name')})
        console.log(localStorage.getItem('name'));
    }, []);

    const onChange = (e) =>{
        const NAME = e.target.name;
        const value = e.target.value;
        setName({...name, [NAME]:value})
    }

    const TodoUpdate = async(e) => {
        e.preventDefault();
            console.log(name);
        await axios.put(`http://127.0.0.1:8000/api/updateTodo/${id}`, name);
        console.log("edited succesfully");
        navigate("/Todos");
    }

return <>
        <div className='mt-12'>
            <form className='max-w-md mx-auto p-4 bg-white shadow-md rounded-sm'>
                <div className='space-y-6'>
                    <div className='mb-4'>
                        <label htmlFor='name' className='block mb-2 text-sm font-medium'>Todo Name: </label>
                        <input key={id} name="name" value={name.name} onChange={onChange} className='border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2'></input>
                    </div>
                </div>
                <div className="my-4">
                    <button onClick={TodoUpdate} className='px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>Update</button>
                </div>
            </form>
        </div>
    </>
}
export default TodoEdit;