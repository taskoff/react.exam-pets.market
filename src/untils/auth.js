const authication = async (data, context, history, path)=>{
    try {
        const promise = await fetch(`http://localhost:4000/${path}`, {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(data) ,
       })
       const res = await promise.json()
       const authToken = promise.headers.get('Authorization');
       document.cookie = `x-auth-token=${authToken}`;
       context.loginIn(res.username, res._id);
       history.push('/')

    } catch (e){
        console.log(e)
    }
}

export default authication;