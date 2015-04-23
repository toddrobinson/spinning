@extends('app')
@section('title' , 'Play Track')

@section('content')
<div class="page-header">
  <h3 class="trackTitle" trackid="{{$track->id}}">{{$track->title}} <small>  <strong>{{$track->numberOfIntervals}}</strong> Intervals <strong>{{$track->length}}</strong> Minutes Long</small></h3>
</div>

<div class="row">
  <div class="col-md-12 text-center">
    <input class="btn btn-primary" type="button" value="START!">
  </div>
</div>

<div class="row text-center">
  <div class="col-md-3">
    <h3>Interval</h3>
    <strong id="intervalRange"><span id="currentIntervalNum">1</span>/{{$track->numberOfIntervals}}</strong>
  </div>
  <div class="col-md-6">
    <h3>Effort level (1-10)</h3>
    <strong id="LEVEL"></strong>
    <div class="progress center-block" id="intensityBar">

      <div class="progress-bar" style="">
        <span class="sr-only">50% Complete (warning)</span>
      </div>

    </div>
  </div>
  <div class="col-md-3">
    <div class="timeInInterval">
      <h3>Current Interval Time</h3>
      <strong id="timeInCurrentInterval"></strong>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-md-12">
    <h3 clas="text-center">Overall Completion <!-- <small>Time Remaining:  <span id="totalTimeLeft">{{$track->length}}</span> </small> --></h3>
    <div class="progress totalCompletion">
      <div class="progress-bar progress-bar-info progress-bar-striped active" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;">
        0%
        <span class="sr-only">0% Complete</span>
      </div>
    </div>
</div>
  </div>
</div>

@stop

@section('footer')
<script src="/scripts/trackPlay.js"></script>
@stop
