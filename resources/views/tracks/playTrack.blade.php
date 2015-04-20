@extends('app')
@section('title' , 'Play Track')

@section('content')
<div class="row">
  <div class="col-md-12 text-center">
    <button>ah</button>
    <div id="chart_div"></div>
  </div>
</div>

@stop

@section('footer')
<script type="text/javascript" src="https://www.google.com/jsapi?autoload={'modules':[{'name':'visualization','version':'1.1','packages':['gauge']}]}"></script>
<script src="/scripts/trackPlay.js"></script>
@stop
