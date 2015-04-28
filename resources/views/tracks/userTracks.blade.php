@extends('app')

@section('title', 'Tracks')
@section('content')
<div class="page-header">
  @if(count($tracks)!= 0 )
  <h1>{{$tracks[0]->user->name}}'s Tracks</h1>
  @else
  <h1>Uh oh!</h1>
  @endif
</div>
@include('tracks/trackList')


@stop
