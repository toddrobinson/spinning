<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
|
*/

Route::get('/', 'PagesController@welcome');
Route::get('about' ,'PagesController@about');


Route::get('home', 'HomeController@index');
Route::get('tracks/intervals/{id}', 'TracksController@intervalData');
Route::get('tracks/user/{id}', 'TracksController@userTracks');
Route::get('tracks/play/{id}', 'TracksController@playTrack');
Route::resource('tracks', 'TracksController');

Route::controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController',
]);
