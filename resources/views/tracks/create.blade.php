@extends('app')
@section('title', 'Create a Track')
@section('content')
<div class="row">
  <div class="page-header">
    <h1>Create a track</h1>
  </div>
  {!! Form::open(['url' => 'tracks']) !!}
  <div class="form-group">
    {!! Form::label('name' ,'Title:')!!}
    {!! Form::text('title', null, ['class' => 'form-control', 'placeholder' => 'My super awesome track!']) !!}
  </div>
  <div class="form-group">
    {!! Form::label('numberOfIntervals' ,'Number of Intervals:')!!}
    <input class="form-control" name="numberOfIntervals" id="numberOfIntervals" type="number" value="1" min="1" max="100">
  </div>
  <div class="form-group">
    <input class="form-control" name="intervalData" id="numberOfIntervals" type="hidden" value='{"userId":1,"id":1,"title":"sunt aut facere repellat provident occaecati excepturi optio reprehenderit","body":"quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"}'>
  </div>
  <div class="form-group">
    {!! Form::submit('Create Track', ['class' => 'btn btn-primary form-control']) !!}
  </div>
</div>
  {!! Form::close() !!}

@stop



@section('footer')
<script src="scripts/form.js"></script>

@stop
