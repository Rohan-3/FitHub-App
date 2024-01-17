import { useState,useEffect } from "react"

const useFetch = (url) => {

    const [api, setApi] = useState()
    useEffect(()=>{
        fetch(url)
        .then((temp)=> temp.json())
        .then((data) => setApi(data))
        .catch((err)=>console.log(err))
    },[url])
 return api;
}

export default useFetch