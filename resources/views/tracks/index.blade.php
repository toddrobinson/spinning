@extends('app')

@section('title', 'Tracks')
@section('content')
<div class="page-header">
  <h1>Tracks</h1>
</div>
<div class="row tracksIndex">
  <div class="col-md-12">
      @if (count($tracks) === 0)
        <h2>No tracks!</h2>
        <p>Why don't you go make one!</p>
        <a href="/tracks/create"><button class="btn btn-primary">Create a track!</button></a>
      @endif
      @foreach ($tracks as $track)
      <article>
          <p><a href="/tracks/{{$track->id}}"><h2><small>Title: </small>{{$track->title}}</h2></a></p>
          <p>{{$track->numberOfIntervals}} Intervals</p>
          <p>{{$track->length}} minutes long</p>
      </article>
      @endforeach
  </div>
</div>


@stop
