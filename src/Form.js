import React,{Component} from 'react';
import './Form.css'
class Form extends Component{


    constructor(props){
        super(props);
        this.state = {
            fullname:"Sajjal",
            email:"nairsajjal@gmai.com",
            phone:"9988868905",
            message:"Sample text all"            
        
        
        
        }
    }

    handlename = (event) => {
            this.setState({ fullname:event.target.value })
            console.log(event.target.value);
    }

    handleemail = (event) => {
        this.setState({ email:event.target.value })
        console.log(event.target.value);
}

handlenumber = (event) => {
    this.setState({ phone:event.target.value })
    console.log(event.target.value);
}

handlemessage = (event) => {
    this.setState({ message:event.target.value })
    console.log(event.target.value);
}

handlesubmit = (event) => {
    alert(`my name is ${this.state.fullname}`);
    event.preventDefault();
}
    render(){
        return(
            <div>
                <form onSubmit={this.handlesubmit}>
                    <label>Fullname</label><br />
                    <input type="text" value={this.state.fullname} 
                        onChange={this.handlename}/> <br/>

                    <label>Email</label><br />
                    <input type="email" value={this.state.email}
                            onChange={this.handleemail} /> <br />

                    <label>Mobile-Number</label><br />
                    <input type="number" value={this.state.phone}
                                onChange={this.handlenumber}
                    /> <br/>

                    <label>Message</label><br />
                    <textarea value={this.state.message}
                        onChange={this.handlemessage}
                    /><br /><br />

                    <input type="submit" value="send" />
                </form>
            </div>
        )
    }
}
export default Form;