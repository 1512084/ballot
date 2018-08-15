import React,{Component} from 'react';
import {Form, Input, Message, Button} from 'semantic-ui-react';
import Ballot from '../ethereum/ballot';
import web3 from '../ethereum/web3';
import {Router} from '../routes';

class DelegateForm extends Component{
    state={
        value:'',
        errorMessage:'',
        loading: false
    }
    onSubmit=async event=>{
        event.preventDefault();
        const ballot=Ballot(this.props.address);
        this.setState({loading: true});
        try{
            const accounts=await web3.eth.getAccounts();
            await ballot.methods.delegate(this.state.value).send({
                from: accounts[0]
                
            });
            Router.replaceRoute(`/ballots/${this.props.address}`);
        }catch (err){
            this.setState({errorMessage: err.message});
        }
        this.setState({loading: false, value: ''});
    };
    render(){
        return(
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
            <Form.Field>
                <label>Address of Delegate</label>
                <Input
                    value={this.state.value}
                    onChange={event=>this.setState({value: event.target.value})}
                    label="Address"
                    labelPosition="right"
                />
            </Form.Field>
            <Message error header="Oops!" content={this.state.errorMessage}/>
            <Button primary loading={this.state.loading}>
                Delegate!
            </Button>
        </Form>
        );
        
    }
}

export default DelegateForm;