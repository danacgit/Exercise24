

const MyNav=()=>{
    return(
          <header class="text-bg-success">
            <div class="container-fluid ">
              <nav class="navbar navbar-expand-lg ">
                    <a class="navbar-brand" href="/"><img src="website-img/logo.png" height="50" alt="Logo"/></a>
                   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                   </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                  
                 <ul class="navbar-nav ml-auto col-12 col-lg-auto me-lg-auto mb-2 my-lg-auto justify-content-center">
                   
                  <li>
                     <div class="dropdown">
                      <button class="btn btn-success dropdown-toggle mt-3" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              About 
                      </button>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="about">About Us</a>
                        <a class="dropdown-item" href="faq">FAQ</a>
                        <a class="dropdown-item" href="soon">Terms</a>
                      </div>
                    </div>
                    
                  </li>
                  <li>
                  <div class="dropdown">
                    <button class="btn btn-success dropdown-toggle mt-3 " type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Shop by Age
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                     <a class="dropdown-item" href="product">0-2 years</a>
                     <a class="dropdown-item" href="soon">3-5 years</a>
                     <a class="dropdown-item" href="soon">5+ years</a>
                    </div>
                  </div>
                  </li>
                  <li>
                    <div class="dropdown">
                      <button class="btn btn-success dropdown-toggle mt-3" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Shop by Category 
                      </button>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="game">games & puzzles</a>
                        <a class="dropdown-item" href="soon">learning toys</a>
                        <a class="dropdown-item" href="soon">STEM toys</a>
                        <a class="dropdown-item" href="soon">arts & crafts</a>
                        <a class="dropdown-item" href="soon">outdoor play</a>
                      </div>
                    </div>
                    
                  </li>
                  
                 </ul>
                
                  </div>
                  
                  <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 mt-3 ml-auto" role="search">
                    <input type="search" class="form-control form-control-dark text-bg-light" placeholder="Search product..." aria-label="Search"/>
                  </form>
                 
                
                 <button type="button" class="btn btn-light mt-3" data-bs-toggle="modal" data-bs-target="#modalId">
                   Login
                 </button>

                 <div class="modal fade" id="modalId" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm" role="document">
                   <div class="modal-content" role="form">
                    <div class="modal-header">
                     <h5 class="modal-title text-black" id="modalTitleId">Login or sign up</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                   </div>
                          <div class="modal-body">
                           <div class="mb-3">
                            <label for="email" class="text-black">Email</label>  
                             <input type="text" class="form-control" id="email"/>
                           </div>
                          <div class="mb-3">    
                           <label for="password"  class="text-black">Password</label>
                            <input type="password" class="form-control" id="password"/>
                          </div>
                         </div>
                          <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Sign In</button>
                              <button type="button" class="btn btn-secondary">Creat Account</button>
                          </div>
                    </div>
                  </div>
                </div>  
                </nav>
              
                 <script>
                  const myModal = new bootstrap.Modal(document.getElementById('modalId'), options)
      
                 </script>
                </div>
        
           
            </header>
    )
}

export default MyNav;