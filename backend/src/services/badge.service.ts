import Badge from "../models/badge.model"

const createBadge=(title:string,desc:string,org:string)=>new Promise((resolve,reject)=>{
    Badge.create({
        title,
        desc,
        org
    })
    .then(data=>{
        if(data){
            resolve(data._id)
        }
        else{
            reject(new Error("Unable to create"))
        }
    })
    .catch(err=>reject(err))
})

const listBadge=(org:string)=>Badge.find({
    org
})
.select("title desc")

const badgeDetail = (org: string,badge:string) =>
    Badge.findOne({
        org,
        _id:badge
    }).select("title desc");

export default {
    createBadge,
    listBadge,
    badgeDetail
}