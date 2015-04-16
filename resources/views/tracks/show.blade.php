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
<div class="row">
  <div class="col-md-12">
    <div id="chart_div"></div>
  </div>
</div>
<div class="row">
  <div class="col-md-12 text-center">
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Interval #</th>
          <th>Interval Length <small>(minutes)</small></th>
          <th>Interval Intensity</th>
        </tr>
      </thead>
      <tbody>

      </tbody>
    </table>
  </div>
</div>



@stop

@section('footer')
<script type="text/javascript" src="https://www.google.com/jsapi"></script>
<script src="/scripts/trackChart.js"></script>


@stop
