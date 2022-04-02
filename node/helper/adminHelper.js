var db = require('../config/connection')
var collection = require('../config/collections')
const { reject } = require('bcrypt/promises')
const { ObjectId } = require('mongodb')
const async = require('hbs/lib/async')
var bcrypt = require('bcrypt')


module.exports={
    getNewList:()=>{
        return new Promise(async(resolve,reject)=>{
            let newList= await db.get().collection(collection.USER_APPLICATION).find({status:"new"}).toArray()
            
            resolve(newList)
        }) 
    },
    changeStatus:(obj)=>{
        return new Promise((resolve,reject)=>{
            console.log(obj);
            db.get().collection(collection.USER_APPLICATION).updateOne({_id:ObjectId(obj.id)},{$set:{status:obj.status}}).then(()=>{
                console.log("success");
                resolve()
            })
        })
    },
    getPendingList:()=>{
        return new Promise(async(resolve,reject)=>{
            let pendingList=await db.get().collection(collection.USER_APPLICATION).find({status:"Pending"}).toArray()
            resolve(pendingList)
        })
    },
    getApprovedList:()=>{
        return new Promise(async(resolve,reject)=>{
            let approvedList=await db.get().collection(collection.USER_APPLICATION).find({status:"Approved",booked:{$ne:true}}).toArray()
            resolve(approvedList)
        })
    },
    getCompanyDetails:(id)=>{
        return new Promise(async(resolve,reject)=>{
            console.log(id);
            let companyDetails=await db.get().collection(collection.USER_APPLICATION).findOne({_id:ObjectId(id)})
            resolve(companyDetails)
        })
    },  
    getSlots:()=>{
        return new Promise(async(resolve,reject)=>{  
            let response={}
            let slotA=await db.get().collection(collection.SLOT_COLLECTION).find({section:"A"}).toArray()
            let slotB=await db.get().collection(collection.SLOT_COLLECTION).find({section:"B"}).toArray()
            let slotC=await db.get().collection(collection.SLOT_COLLECTION).find({section:"C"}).toArray()
            let slotD=await db.get().collection(collection.SLOT_COLLECTION).find({section:"D"}).toArray()
            let slotE=await db.get().collection(collection.SLOT_COLLECTION).find({section:"E"}).toArray()
            let slotF=await db.get().collection(collection.SLOT_COLLECTION).find({section:"F"}).toArray()
            response.slotA=slotA
            response.slotB=slotB
            response.slotC=slotC
            response.slotD=slotD
            response.slotE=slotE
            response.slotF=slotF

            resolve(response)
        })
    },
    bookSlot:(id,companyId,slot)=>{
        return new Promise(async(resolve,reject)=>{
            console.log(id);
            await db.get().collection(collection.SLOT_COLLECTION).updateOne({_id:ObjectId(id)},{$set:{booked:true}})
            await db.get().collection(collection.USER_APPLICATION).updateOne({_id:ObjectId(companyId)},{$set:{booked:true}})
            let userid=await db.get().collection(collection.USER_APPLICATION).findOne({_id:ObjectId(companyId)})
            await db.get().collection(collection.USER_COLLECTION).updateOne({_id:ObjectId(userid.userid)},{$set:{booked:true,bookedSlot:slot}})
            resolve()
        }) 
    },
    doLogin:(data)=>{
        return new Promise(async(resolve,reject)=>{
            let response={}
            let user=await db.get().collection(collection.ADMIN_COLLECTION).findOne({email:data.email})
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
}