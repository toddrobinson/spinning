@extends('app')

@section('title', '$track->title')


@section('content')
<div class="row">
  <div class="col-md-12 trackSimpleInfo text-center">

      <h1 class="text-center"><small>Title: </small>{{$track->title}}</h1>
      <div class="col-md-6">
        <span>{{$track->numberOfIntervals}} Intervals</span>
      </div>
      <div class="col-md-6">
        <span>{{$track->length/60}} minutes long</span>
      </div>
  </div>
</div>



@stop
