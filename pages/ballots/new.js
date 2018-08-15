import React,{Component} from 'react';
import Layout from '../../components/Layout';
import {Form, Button, Input, Message} from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import {Router} from '../../routes';

class BallotNew extends Component{
    state={
        //array:[],
        proposal: '',
        index:'',
        errorMessage:'',
        loading: false
    }
    
    onSubmit=async event=>{
        event.preventDefault();  
        const string =this.state.proposal;
        const convertp = string.substr(1).substr(0, string.length-2).replace(/"/g, "").split(',');
        const converti = this.state.index.split(',').map(function(i){
            return parseInt(i, 10);
        })
        this.setState({loading: true, errorMessage:''});
        try{
            const accounts=await web3.eth.getAccounts();            
            await factory.methods.createBallot(convertp,converti)
            .send({
                from: accounts[0]
            });
            Router.pushRoute('/');
        } catch (err){
            this.setState({errorMessage: err.message});
        }
       this.setState({loading:false});
    };
    render(){
        return(
        <Layout>
        <h3>Create a Ballot</h3>
       
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
            <Form.Field>
                <label> Proposals</label>
                <Input 
                    label="bytes32[] proposalNames" 
                    labelPosition="right"
                    placeholder='["0x5472756d70","0x507574696e","0x4f62616d61","0x416265"]'
                    value={this.state.proposal}
                    onChange={event=>
                        this.setState({proposal: event.target.value})}    
                />
            </Form.Field>  
            <Form.Field>
                <label> Indexs</label>
                <Input 
                    label="uint[] proposalIndexs" 
                    labelPosition="right"
                    placeholder='1,2,3,4'
                    value={this.state.index}
                    onChange={event=>
                        this.setState({index: event.target.value})}    
                />
            </Form.Field>        
            <Message error header="Oops!" content={this.state.errorMessage}/>
            <Button loading={this.state.loading} primary> Create!</Button>
        </Form>
        </Layout>
        );
    }
}

export default BallotNew;