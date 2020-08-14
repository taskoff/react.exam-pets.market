const getPetInfo = async (id)=>{
    const promise = await fetch(`http://localhost:4000/details/${id}`);
    const res = await promise.json(); 
    return res;
}



export default getPetInfo;