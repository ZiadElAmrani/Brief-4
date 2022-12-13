
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TodoCotroller;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [TodoCotroller::class, 'indexTodo']);
Route::post('/insertTodo', [TodoCtroller::class, 'insertTodo']);
Route::get('/editTodo/{id}', [TodoCotroler::class, 'editTodo']);
Route::post('/updateTodo/{id}', [TodoCotroller::class, 'updateTodo']);
Route::get('deleteTodo/{id}', [TodoCotroller::class, 'deleteTodo']);