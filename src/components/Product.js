const Product = () => {
    return ( 
        <div className="container bg-warning">
    <div className="row">
  
      <div className="col-sm-3 my-3 ">
        <img src="product-img/toy1.png" className="img-thumbnail " alt="toy"/>
      </div>
      <div className="col-sm-3 my-3 ">
        <img src="product-img/toy2.jpg" className="img-thumbnail" alt="toy"/>
      </div>
      <div className="col-sm-3  my-3"> 
         <img src="product-img/toy3.png" className="img-thumbnail" alt="toy"/>
     </div>
  
      <div className="col-sm-3 my-3 ">
        <div p-1><img src="product-img/toy4.jpg" className="img-thumbnail my-2" alt="toy"/></div>
      </div>
  
    </div>
  
    <div className="row">
  
      <div className="col-sm-3 my-3">
        <div><img src="product-img/toy5.png" className="img-thumbnail" alt="toy"/> </div>
      </div>

      <div className="col-sm-3 my-4">
        <div><img src="product-img/toy6.png" className="img-thumbnail" alt="toy"/> </div>
      </div>
  
      <div className="col-sm-3 my-4">
        <img src="product-img/toy.jpg" className="img-thumbnail" alt="toy"/>
      </div>
  
      <div className="col-sm-3 my-4">
        <img src="product-img/toy0.jpg" className="img-thumbnail" alt="toy"/>
      </div>
  
    </div>

  
  
  </div>
     );
}
 
export default Product;