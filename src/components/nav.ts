const nav = document.querySelector<HTMLDivElement>("#nav")!;
nav.innerHTML = `<nav class="navbar navbar-expand-lg navbar-dark color">
<a class="navbar-brand" href="#">Navbar</a>

<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" > 
  <span class="navbar-toggler-icon"></span>
</button> 

<div class="collapse navbar-collapse" id="collapsibleNavbar">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item">
      <a class="nav-link" href="#">Home </a>
    </li>
    
    <li class="nav-item">
      <a class="nav-link" href="#">List</a>
    </li>
    
  </ul>
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-light  my-sm-0" type="submit">Search</button>
  </form>
</div>
</nav>
`;
