var db = require('../config/connection')
var collection = require('../config/collections')
var bcrypt = require('bcrypt')
const { reject } = require('bcrypt/promises')


module.exports = {
    doSignUp:(data)=>{
        return new Promise (async(resolve,reject)=>{
            let response={}
            let user= await db.get().collection(collection.USER_COLLECTION).findOne({email:data.email})
            if(user){
                response.userExist=true
                resolve(response)
            }else {
                data.password=await bcrypt.hash(data.password,10)
                const userData={
                    userName:data.userName,
                    email:data.email,
                    password:data.password
                }
                db.get().collection(collection.USER_COLLECTION).insertOne(userData).then(()=>{
                    response.userExist=false
                    resolve(response)
            
            })
        }
        })

        
    },
    doLogin:(data)=>{
        return new Promise(async(resolve,reject)=>{
            let response={}
            let user=await db.get().collection(collection.USER_COLLECTION).findOne({email:data.email})
            if(user){
                bcrypt.compare(data.password,user.password).then((status)=>{
                    if(status){
                        response.loggedIn=true
                        response.id=user._id
                        resolve(response)
                    }else{
                        response.loggedIn=false
                        resolve(response)
                    }
                })
            }else{
                response.loggedIn=false
                resolve(response)
            }
        })
    },
    saveApplication:(data)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.USER_APPLICATION).insertOne(data).then((res)=>{
                resolve(res)
            })
        })
    }
}