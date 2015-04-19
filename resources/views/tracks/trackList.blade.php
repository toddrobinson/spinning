<div class="row tracksIndex">
  <div class="col-md-12">
      @if (count($tracks) === 0)
        <h2>No tracks!</h2>
        <p>Why don't you go make one!</p>
        <a href="/tracks/create"><button class="btn btn-primary">Create a track!</button></a>
      @endif
      @foreach ($tracks as $track)
      <article>
          <p><a href="/tracks/{{$track->id}}"><h2><small>Title: </small>{{$track->title}}</h2></a></p>
          <p><strong>{{$track->numberOfIntervals}}</strong> Intervals</p>
          <p><strong>{{$track->length}}</strong> minutes long</p>
          <p>Created by <a href="/tracks/user/{{$track->user_id}}">{{$track->user->name}}</a> </p>
      </article>
      @endforeach
  </div>
</div>
