const objCreator = (key, value, arg)=>{
    return {
        key: value(arg)
    }
}

export default objCreator;