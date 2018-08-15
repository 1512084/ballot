const routes = require('next-routes')();

routes
    .add('/ballots/new','/ballots/new')
    .add('/ballots/:address','/ballots/show')
    
module.exports=routes;