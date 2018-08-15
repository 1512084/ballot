import React,{Component} from 'react';
import factory from '../ethereum/factory';
import {Card,Button} from 'semantic-ui-react';
import Layout from '../components/Layout';
import {Link} from '../routes';

class BallotIndex extends Component{
    static async getInitialProps(){
        const ballots = await factory.methods.getDeployedBallots().call();
        return {ballots};
    }

    renderBallots(){
        const item =this.props.ballots.map(address => {
            return {
                header: address,
                description: (
                    <Link route={`/ballots/${address}`}>
                        <a> View Ballot</a>
                    </Link>
                ),
                fluid: true
            };
        });
        return <Card.Group items={item}/>
    }

    render(){
       // return <div>{this.props.campaigns[0]}</div>
       return(
       <Layout>
       <div>
       <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"></link>
       <h3>MỘT CHIẾC TRÀ SỮA</h3>
       <Link route="ballots/new">
       <a>
       <Button
            floated="right"
            content="Create Ballot"
            icon="add circle"
            primary={true}
       />
        </a>
        </Link>
       {this.renderBallots()}
       </div>
       </Layout>
       );
    }
}   
export default BallotIndex;