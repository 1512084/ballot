import web3 from './web3';
import BallotFactory from './build/BallotFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(BallotFactory.interface),
    '0xaBcCE15B37577664c24472A3240E65dC9E81F215'
);

export default instance;