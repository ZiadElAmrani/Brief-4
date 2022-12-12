<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TodoCotroller;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/', [TodoCotroller::class, 'indexTodo']);
Route::post('/insertTodo', [TodoCotroller::class, 'insertTodo']);
Route::get('/editTodo/{id}', [TodoCotroller::class, 'editTodo']);
Route::put('/updateTodo/{id}', [TodoCotroller::class, 'updateTodo']);
Route::delete('/deleteTodo/{id}', [TodoCotroller::class, 'deleteTodo']);

