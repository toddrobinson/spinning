<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Track extends Model {

	protected $guarded = [
		'id',

	];

	protected $fillable = [
		'title',
		'numberOfIntervals',
		'length',
		'intervalData'
	];


	/*
	* An article belongs to one user.
	*
	*
	*/
	public function user()
	{
		return $this->belongsTo('App\User');
	}

}
