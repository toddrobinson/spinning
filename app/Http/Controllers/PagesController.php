<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

class PagesController extends Controller {
	//The welcome page view
	public function welcome() {
		return view('pages.welcome');
	}
	//The about page view
	public function about() {
		return view('pages.about');
	}

}
