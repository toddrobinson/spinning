<?php namespace App\Http\Controllers;
use App\Track;
use App\Http\Requests;
use App\Http\Controllers\Controller;

use Request;

class TracksController extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$tracks = Track::all();

		return view('tracks.index', compact('tracks'));
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		return view('tracks.create');
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store(Requests\CreateTrackRequest $request)
	{
		//Body of function won't fire if validation fails.
		Track::create($request->all());
		return redirect('tracks');
	}

	/**
	 * Display the specified resource.
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
	*
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
