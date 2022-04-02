const MongoClient=require('mongodb').MongoClient
const state={
    db:null
}

module.exports.connect=function(done){
    const url='mongodb+srv://react1:Encrypted1@incubator.ovxg8.mongodb.net/incubator?retryWrites=true&w=majority'
    const dbname='incubator'

    MongoClient.connect(url,(err,data)=>{
        if(err) return done(err)
        state.db=data.db(dbname)
        
        done()
    })
}
module.exports.get=function(){
    return state.db
}
