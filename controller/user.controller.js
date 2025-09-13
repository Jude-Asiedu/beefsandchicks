function index( req,res){
    const users = ['John','List','James','Fuhad','Rem']
    res.send(users);

}
module.exports = {
    index:index
}