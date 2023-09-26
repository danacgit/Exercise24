const ContactUs = () => {
    return (

    <div className="container">
         <h2>Submit the form below to contact us</h2>
    <form method="post" id="contact">
    <label for="Name"> Email </label>
    <br/> 
    <input type="text" name="Name" required/>  
    <br/>    
    <label for="Message"> Message </label>
    <br/>    
    <textarea rows="4" cols="50"></textarea>
    <br/>
    <input type="submit" value="Submit"/>
    </form>
    </div>
    
     );
}
 
export default ContactUs ;