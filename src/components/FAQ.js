const FAQ = () => {
    return (    <div className="container mt-3">
    <div className="accordion " id="accordionExample">
        <h3>FAQ Page:</h3>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button text-primary bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
             01. Can I track my shipment?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <p>Yes, you will receive a tracking number via email once your order ships. You can track updates on our website or the carrier's site. </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed text-primary bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                02. What is your return policy?
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            <p>We offer free 30-day returns/exchanges on all unopened and undamaged items. Just pack them in the original box and include your receipt for a refund or exchange.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed text-primary bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                03. Are your toys BPA and phthalate free
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>Yes, all of our toys are made without BPA, phthalates or other potentially harmful chemicals. Safety is our top priority.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button className="accordion-button text-primary bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
             04. What types of toys do you sell?
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <p>Hooray Toys offers a wide range of toys for children of all ages. We carry baby toys, dolls, action figures, trucks, puzzles, board games, STEM toys, craft kits, and more. Our toys are designed to inspire creativity, imagination, and fun in kids. </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button className="accordion-button text-primary bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
             05. Where are your toys manufactured?
            </button>
          </h2>
          <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <p>Our toys meet all US safety standards and the majority are manufactured in the USA or other countries with strict quality control. We source from ethical manufacturers who share our commitment to safe products. </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSix">
            <button className="accordion-button text-primary bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
             06. What safety tests do your toys pass?
            </button>
          </h2>
          <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <p>All of our toys undergo rigorous safety testing for durability and to ensure they do not contain any harmful chemicals like lead or phthalates. We comply with ASTM F963 toy safety standards. </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSeven">
            <button className="accordion-button text-primary bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
             07. Do I need to create an account to make purchases?
            </button>
          </h2>
          <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <p>Creating an account is optional. You can checkout as a guest if preferred. Registered accounts can view order history and save shipping addresses. </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingEight">
            <button className="accordion-button text-primary bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
             08. What payment methods do you accept?
            </button>
          </h2>
          <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <p>We accept Visa, Mastercard, American Express, Discover, PayPal and Amazon Pay. Payment is processed at the time the order is placed. </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingNine">
            <button className="accordion-button text-primary bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
             09. How much does shipping cost?
            </button>
          </h2>
          <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <p>Standard shipping on all orders is $5.99. We also offer free shipping on orders over $50. </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTen">
            <button className="accordion-button text-primary bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
             10. How do I clean and care for toys?
            </button>
          </h2>
          <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <p>Check the tags and instructions for care information specific to each toy. Most can be wiped clean with a damp cloth and mild detergent. Do not submerge. </p>
            </div>
          </div>
        </div>
      </div>
    </div> );
}
 
export default FAQ;