@extends('app')

@section('title', 'Tracks')
@section('content')
<div class="page-header">
  <h1>{{$tracks[0]->user->name}}'s Tracks</h1>
</div>
@include('tracks/trackList')


@stop
