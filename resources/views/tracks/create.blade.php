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
    {!! Form::text('title', null, ['class' => 'form-control', 'placeholder' => 'My super awesome track!', 'required']) !!}
  </div>
  <div class="form-group">
    {!! Form::label('numberOfIntervals' ,'Number of Intervals:')!!}
    <input class="form-control" name="numberOfIntervals" id="numberOfIntervals" readonly type="number" value="1" min="1" max="100" required >
  </div>
  <div class="form-group">
    <input class="btn btn-default"  id="addInterval" type="button" value="Add interval" readonly>
  </div>
  <div class="form-group">
    <input class="form-control" name="intervalData" id="intervalData" type="hidden" value=''>
  </div>
  <div id="intervalContainer">
    <div class="intervalItem form-group" id="1">
      <p>Interval 1</p>
      <label>Length(minutes):</label><input required type="number" value="1" min="1" class="intervalLength form-control">
      <label>Intensity(1-10)</label><input required min="1" max="10" type="number" class="intervalIntensity form-control">
      <hr>
    </div>
  </div>
  <div class="form-group">
    <input class="btn btn-default"  id="addInterval" type="button" value="Add interval" readonly>
  </div>
  <div class="form-group lengthGroup">
    {!! Form::label('length' ,'Length(min):')!!}
    {!! Form::text('length', null, ['class' => 'form-control', 'readonly']) !!}
  </div>
  <div class="form-group">
    {!! Form::submit('Create Track', ['class' => 'btn btn-primary form-control']) !!}
  </div>
</div>
  {!! Form::close() !!}

@stop



@section('footer')
<script src="/scripts/trackCreationForm.js"></script>

@stop
