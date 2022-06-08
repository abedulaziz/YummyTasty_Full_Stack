<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\RestaurantController;
use App\Http\Controllers\UserController;


// user associated APIs
Route::get('/list-users', [UserController::class, 'listUsers']);
Route::post('/login', [UserController::class, 'logIn']);
Route::post('/signup', [UserController::class, 'signUp']);
Route::post('/user-profile', [UserController::class, 'getUserInfo']);
Route::post('/update-profile', [UserController::class, 'updateProfile']);


// restaurants associated APIs
Route::get("/list_restaurants", [RestaurantController::class, "listRestaurants"]);
Route::post("/restaurant-profile", [RestaurantController::class, "restaurantProfile"]);
