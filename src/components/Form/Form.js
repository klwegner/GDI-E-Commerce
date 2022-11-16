import './Form.css';

function Form() {
    return(
        <div className="formCon">
        <form>
            <label>City</label>
            <input placeholder='Enter city'/>
            <label>Address</label>
            <input placeholder='Enter Address'/>
            <label> Recipient's details</label>
            <label>Name and Surname</label>
            <input placeholder='Enter name and surname'/>
            <label>Phone</label>
            <input placeholder='input phone number'/>
            <label>Email</label>
            <input placeholder='input email'/>
            <button> Payment Card</button>
            <button> Cash on Delivery</button>
        </form>
{/* need a checkbox and then add margin above the checkbox*/}
        <p>I agree to the terms of the offer and the loyalty policy</p>
        <button>Place an order</button>

        </div>
    )
}
export default Form;