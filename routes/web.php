<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Core\BookController;
use App\Http\Controllers\Core\CategoryController;

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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::prefix('admin')->group(function (){
    Route::resources([
        'book'  => BookController::class,
        'category' => CategoryController::class,
    ]);
});
Route::resource('admin/book', BookController::class);

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
