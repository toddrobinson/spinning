@extends('app')

@section('title', 'Tracks')
@section('content')
@include('flash::message')
<div class="page-header">
  <h1>Tracks</h1>
</div>
@include('tracks/trackList')


@stop
