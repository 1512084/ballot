import React, {Component} from 'react';
import {Card,Button} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Ballot from '../ethereum/ballot';

class ProposalCard extends Component{
 
    render(){
       
        const {id,proposal, proposalCount}=this.props;
       
        const items=[{
            header: web3.utils.toAscii(proposal.name), 
            meta: 'Vote Count: '+proposal.voteCount,
            description: 'Index: '+proposal.index,
            style: {overflowWrap: 'break-word'}
        }];
        return <Card.Group items={items}/>
        
    }
}

export default ProposalCard;