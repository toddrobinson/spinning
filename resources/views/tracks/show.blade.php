@extends('app')

@section('title', 'Track')


@section('content')
<div class="row">
  <div class="col-md-12 trackSimpleInfo text-center">

      <h1 class="text-center trackTitle" trackId="{{$track->id}}"><small>Title: </small>{{$track->title}}</h1>
      <div class="col-md-6">
        <span>{{$track->numberOfIntervals}} Intervals</span>
      </div>
      <div class="col-md-6">
        <span>{{$track->length}} minutes long</span>
      </div>
  </div>
</div>
<div class="row chartRow">
  <div class="col-md-12 text-center">
    <canvas id="trackChart" width="900" height="400"></canvas>
  </div>
</div>

@stop

@section('footer')
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/1.0.2/Chart.min.js"></script>
<script src="/scripts/trackChart.js"></script>


@stop
