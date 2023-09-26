
const MyFooter = () => {
    return (
<footer>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">   
      <div class="col mb-3"></div>
      <div class="col mb-3"></div>
      <div class="col mb-3"></div>
      <div class="col mb-3">
       <h5>Customer Service</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="contact" class="nav-link p-0 text-muted">Contact us</a></li>
          <li class="nav-item mb-2"><a href="soon" class="nav-link p-0 text-muted">Track My Order</a></li>
        </ul>
      </div>
  
      <div class="col mb-3" id="about">
        <h5>About</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="about" class="nav-link p-0 text-muted">About Us</a></li>
          <li class="nav-item mb-2"><a href="faq" class="nav-link p-0 text-muted">FAQ</a></li>
          <li class="nav-item mb-2"><a href="soon" class="nav-link p-0 text-muted">Terms</a></li>
        </ul>
      </div>


      </div>

<div className="container" >
 <a className=" ml-5 p-2 icon-link link-dark link-underline-success link-underline-opacity-25" to="https://www.facebook.com/" target="_blank">
 <i className="bi bi-facebook" style={{fontSize: "30px"}}></i>
</a>

  <a className=" p-2 icon-link link-dark link-underline-success link-underline-opacity-25" href="https://twitter.com/home?lang=en/" target="_blank">
   <i className="bi bi-twitter" style={{fontSize: "30px"}} ></i></a>
   
  <a className="p-2 icon-link link-dark link-underline-success link-underline-opacity-25" href="https://www.instagram.com/" target="_blank">
    <i className="bi bi-instagram " style={{fontSize: "30px"}}  ></i>
   </a>
   
   <a className="p-2 icon-link link-dark link-underline-success link-underline-opacity-25" href="https://www.tiktok.com/en/" target="_blank">
    <i className="bi bi-tiktok" style={{fontSize: "30px"}} ></i>
   </a>
   <a className="p-2 icon-link link-dark link-underline-success link-underline-opacity-25" href="https://web.wechat.com/?lang=en/" target="_blank">
    <i className="bi bi-wechat" style={{fontSize: "30px"}} ></i>
   </a>


   <a className="p-2 icon-link link-dark link-underline-success link-underline-opacity-25" href="https://www.youtube.com/" target="_blank">
    <i className="bi bi-youtube " style={{fontSize: "30px"}} ></i>
   </a>

   <div class="container copyright py-2">
   <small>Copyright &copy; 2023 Hooray Toys Inc. All Rights Reserved</small>
  </div>

</div>

</footer>

       );
}
 
export default MyFooter;