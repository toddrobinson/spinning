<nav class="mainNav navbar navbar-inverse">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="/">Indoor Spinning</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li><a href="/about">About</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Tracks<span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="/tracks">All Tracks</a></li>
            <li><a href="/tracks/create">Create Track</a></li>
          </ul>
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        @if (Auth::guest())
        <li><a href="/auth/register">Register</a></li>
        <li><a href="/auth/login">Log In</a></li>
        @else
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">{{Auth::user()->name}}<span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="/home">Home</a></li>
            <li><a href="/tracks/user/{{Auth::user()->id}}">My Tracks</a></li>
            <li class="divider"></li>
            <li><a href="/auth/logout">Logout</a></li>
          </ul>
        </li>
        @endif
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
