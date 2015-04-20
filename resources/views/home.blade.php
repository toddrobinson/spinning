@extends('app')
@section('title', 'Home')
@section('content')
<div class="container">
	<div class="row">
		<div class="col-md-12">
			<div class="page-header">
					<h1 class="text-center">Hi, {{Auth::user()->name}}! </h1>
			</div>
			<p>Your email address: {{Auth::user()->email}}</p>
			<p>Have a look at your <a href="/tracks/user/{{Auth::user()->id}}">tracks</a></p>

		</div>
	</div>
</div>
@endsection
