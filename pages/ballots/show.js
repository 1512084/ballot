import React,{Component} from 'react';
import web3 from '../../ethereum/web3';
import Ballot from '../../ethereum/ballot';
import {Card,Grid} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import {Link} from '../../routes';
import VoteForm from '../../components/VoteForm';
import ProposalCard from '../../components/ProposalCard';
import RightForm from '../../components/RightVote';
import DelegateForm from '../../components/Delegate';


class BallotShow extends Component{
    static async getInitialProps(props){
        const {address} = props.query;
        const ballot=Ballot(address);
        const proposalCount=await ballot.methods.proposalCount().call();
        const approvalCount=await ballot.methods.approvalCount().call();
        const voterCount=await ballot.methods.voterCount().call();
        const WinnerAtTime=await ballot.methods.winnerName().call();
        const manager=await ballot.methods.chairperson().call();
        const proposals=await Promise.all(
          Array(parseInt(proposalCount)).fill().map((element, index) =>{
              return ballot.methods.proposals(index).call()
          })  
        );
        console.log(proposals);
        
        return {address, proposals, proposalCount,approvalCount,voterCount,manager,WinnerAtTime};
    }
   
    renderProposalCards(){
        return this.props.proposals.map((proposal,index)=>{
            return <ProposalCard
                key={index}
                id={index}
                proposal={proposal}
            />
        });
        
        
    }


    renderCards(){
        const {
            proposalCount,
            approvalCount,
            voterCount,
            proposals,
            manager,
            WinnerAtTime
        } = this.props;
        const items = [
            {
                header: manager, 
                meta: 'Địa chỉ Manager',
                description: 'Manager là người tạo ra cuộc bầu cử và có thể cấp quyền cho người đi bầu cử',
                style: {overflowWrap: 'break-word'}
            },
            {
                header: proposalCount, 
                meta: 'Số lượng ứng cử viên',
                description: 'Bạn sẽ bình chọn cho những ứng cử viên này',
                style: {overflowWrap: 'break-word'}
            },
            {
                header: approvalCount, 
                meta: 'Số lượng người đi bầu cử',
                description: 'Số lượng cử tri tham gia bầu cử',
                style: {overflowWrap: 'break-word'}
            },
            {
                header: voterCount, 
                meta: 'Số lượng người đã bầu',
                description: 'Số lượng cử tri đã sử dụng phiếu bầu của mình',
                style: {overflowWrap: 'break-word'}
            },
            {
                header: web3.utils.toAscii(WinnerAtTime), 
                meta: 'Ứng cử viên chiến thắng',
                description: 'Ứng cử viên có số phiếu cao nhất đến thời điểm hiện tại (Bị sai nếu có nhiều hơn 1 ứng cử viên cao phiếu nhất)',
                style: {overflowWrap: 'break-word'}
            }
           
            
        ]; 
        return <Card.Group items={items}/>
    }
    render () {
        
        return (
            <Layout>
                <h3> Ballot Show </h3>
                <Grid>
                    <Grid.Row>
                    <Grid.Column width={10}>
                        {this.renderCards()}
                        <h3>List of Proposals</h3>
                        {this.renderProposalCards()}
                    </Grid.Column>

                    <Grid.Column width={6}>
                        <VoteForm address={this.props.address}/>
                        <p></p>
                        <RightForm address={this.props.address}/>
                        <p></p>
                        <DelegateForm address={this.props.address}/>
                    </Grid.Column>
                    </Grid.Row>
                    
                </Grid> 
                </Layout>
               
                
            
        );
    }
}
export default BallotShow;