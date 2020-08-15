

const errorHandler = (promise, res, history)=>{
    if(promise.status > 300 && promise.status < 500){
        alert(res.msg);
        return true;
     }else if(promise.status>=500){
         history.push('/2')
         return true;
     }
}

export default errorHandler;