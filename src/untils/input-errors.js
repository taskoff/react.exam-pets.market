const objCreator = (key, value, arg)=>{
 return {
     key: value(arg)
 }
}