import React from "react";

const Navbar = () => {
	return (
		<div className="Container">
			<nav class="navbar navbar-expand-lg bg-body-tertiary bg-secondary">
  <div class="container-fluid">
    <a class="navbar-brand text-white" href="#">Start Bootstrap</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
        <a class="nav-link text-white" href="#">About</a>
        <a class="nav-link text-white" href="#">Services</a>
        <a class="nav-link text-white" href="#">Content</a>
      </div>
    </div>
  </div>
</nav>
            

		</div>
	);
};

export default Navbar;
