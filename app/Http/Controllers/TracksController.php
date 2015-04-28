<?php namespace App\Http\Controllers;
use App\Track;
use App\Http\Requests;
use App\Http\Controllers\Controller;

use Request;
use Auth;
use Flash;

class TracksController extends Controller {

	public function __construct()
	{
		$this->middleware('auth', ['except' => ['index' , 'show' , 'intervalData' , 'userTracks' , 'playTrack']]);
	}





	/**
	 * Display a listing of all the tracks.
	 *
	 * @return Response
	 */
	public function index()
	{
		$tracks = Track::all();

		return view('tracks.index', compact('tracks'));
	}

	/**
	 * Show the form for creating a track.
	 *
	 * @return Response
	 */
	public function create()
	{
		return view('tracks.create');
	}

	/**
	 * Store a newly created track in storage.
	 *
	 * @return Response
	 */
	public function store(Requests\CreateTrackRequest $request)
	{
		//Body of function won't fire if validation fails.
		$track = new Track($request->all());
		Auth::user()->tracks()->save($track);
		Flash::success('Track Created');
		return redirect('tracks');
	}

	/**
	 * Display the specified track .
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{

		$track = Track::find($id);
		return view('tracks.show', compact('track'));

	}
	/*
	* Return the interval data for the specified track
	*
	*
	*
	*/
	public function intervalData($id)
	{
		$track = Track::find($id);
		$trackIntervalData = $track->intervalData;
		return($trackIntervalData);

	}


	/*
	* Show user tracks.
	*
	*/
	public function userTracks($id)
	{
		$tracks =  Track::where('user_id', $id)->get();
		return view('tracks.userTracks', compact('tracks'));

	}

	/*
	*Play individual track
	*
	*
	*/
	public function playTrack($id)
	{
		$track = Track::find($id);
		return view('tracks.playTrack', compact('track'));
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}
