import {useState} from 'react';
import axios from 'axios';

    export const TodoCreate = () => {
    const [formValues, setFormValues] = useState({
        name:""
    })

    const onChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setFormValues({...formValues, [name]:value})
    }

    const TodoCreate = async(e) => {
        e.preventDefault();
        await axios.post('http://127.0.0.1:8000/api/insertTodo', formValues)
        setFormValues({
            name: ""
        })
        console.log("inserted succesfully");
    };

    return (
        <div className='mt-12'>
            <form className='max-w-md mx-auto p-4 bg-white shadow-md rounded-sm'>
                <div className='space-y-6'>
                    <div className='mb-4'>
                        <label htmlFor='name' className='block mb-2 text-sm font-medium'>Todo Name: </label>
                        <input name="name" value={formValues["name"]} onChange={onChange} className='border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2'></input>
                    </div>
                </div>
                <div className="my-4">
                    <button onClick={TodoCreate} className='px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>Add</button>
                </div>
            </form>
        </div>
    )
}
