import axios from "axios"

const HandleLoginAxios=async(url, credentials)=>{
    try{
        console.log("aaja",credentials)
        const res=await axios.post(url,credentials)
        console.log("status",res.status)
        if(res.status===200){
            return {msg:"Login Successfull !!!",res}
        }
        else if(res.status===201)
        {
            return {msg:"Registration Successfull !!!",res}
        }
    } 
    catch(err){
        console.log({...err})
        if(err.response.status===400){
            return {msg:"User Already Exists ",err}
        }
        else if(err.response.status===401){
            return {msg:"Unable To Login!",err}
        }
        else if(err.response.status===403){
            return {msg:"User Not Registered!",err}
        }
        else{
            return {msg:"Something Went Wrong!",err}
        }
    }
}

export default HandleLoginAxios