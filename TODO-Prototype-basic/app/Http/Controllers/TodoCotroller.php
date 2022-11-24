<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;

class TodoCotroller extends Controller
{
    public function indexTodo()
    {
        $data = Todo::all();
        return response()->json([
            "success" => 200,
            "data" => $data
        ]);
    }

    public function insertTodo(Request $req)
    {
        $obj = new Todo();

        $obj->name = $req->name;
        $obj->save();
        return redirect('/');
    }

    public function editTodo($id)
    {

        $data = Todo::where('id', $id)->get();
        return view('editTodo', compact('data'));
    }

    public function updateTodo(Request $req, $id)
    {
        $todo = Todo::where('id', $id)->update(['name' => $req->name]);
        return redirect('/');
    }

    public function deleteTodo(Request $req)
    {
        Todo::where('id', $req->id)->delete();
        return redirect('/');
    }
}
