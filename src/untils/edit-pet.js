import getCookie from './coockie';

const editPet = async (data, petId)=>{
    try {
    
        const promise = await fetch(`http://localhost:4000/edit/${petId}`, {
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

export default editPet