<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;

class TodoCotroller extends Controller
{
    public function indexTodo()
    {
        $data = Todo::all();
        return response()->json($data);
        /* return view('indexTodo', compact('data')); */
    }

    public function insertTodo(Request $req)
    {
        $obj = new Todo();
        $obj->name = $req->name;
        $obj->save();
    }

    public function editTodo($id)
    {
        $todo = Todo::where('id', $id)->get();
        return view('/editTodo', compact('todo'));
    }

    public function updateTodo(Request $req, $id)
    {
        Todo::where('id', $id)->update(['name' => $req->name]);
        return redirect('/');
    }

    public function deleteTodo($id){
        Todo::where('id', $id)->delete();
        return redirect('/');
    }
}
