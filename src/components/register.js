import React from 'react';


class Register extends React.Component{
	constructor(props){
		super(props);
		this.state={
			email:'',
			month:'',
			state:'',
			age:'',
			name:''
		}
	}

	onEmailChange = (event) => {
		this.setState({email: event.target.value})
	}

	onMonthChange = (event) => {
		this.setState({month: event.target.value})
	}

	onStateChange = (event) => {
		this.setState({state: event.target.value})
	}

	onAgeChange = (event) => {
		this.setState({age: event.target.value})
	}

	onNameChange = (event) => {
		this.setState({Name: event.target.value})
	}

	onSubmitRegister = () => {
		
}

	render(){
	
	return (
		<div >
			<article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center" >
				<main className="pa4 black-80">
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f1 fw6 ph0 mh0">User Form</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-black  w-100" 
				        type="text" 
				        name="name"  
				        id="name" 
				        onChange = {this.onNameChange}/>
				      </div>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-black w-100" 
				        type="email" 
				        name="email-address"  
				        id="email-address" 
				        onChange = {this.onEmailChange}/>
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Age</label>
				        <input className="b pa2 input-reset ba bg-transparent hover-bg-black w-100" 
				        type="number" 
				        name="age"  
				        id="age" 
				        onChange = {this.onAgeChange}/>
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">State</label>
				        <input className="b pa2 input-reset ba bg-transparent hover-bg-black w-100" 
				        type="text" 
				        name="state"  
				        id="state" 
				        onChange = {this.onStateChange}/>
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Month</label>
				        <input className="b pa2 input-reset ba bg-transparent hover-bg-black w-100" 
				        type="text" 
				        name="month"  
				        id="month" 
				        onChange = {this.onMonthChange}/>
				      </div>
				     
				    </fieldset>
				    <div className="">
				      <input onClick = {this.onSubmitRegister} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
				    </div>
				    
				  </div>
				</main>
			</article>	
			
		</div>
	)
}	
	}

	
export default Register
