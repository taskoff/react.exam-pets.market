import getCookie from '../auth/coockie';

const cteatePet = async (data)=>{
    try {
    
        const promise = await fetch('http://localhost:4000/create', {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json',
             'Authorization': getCookie('x-auth-token')
         },
         body: JSON.stringify(data) ,
       })
       return promise;
       

    } catch (e){
        console.log(e)
    }
}

export default cteatePet