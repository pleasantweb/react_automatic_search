import {useState,useEffect} from 'react'
import axios from 'axios'
export default function FetchBook() {
//    const [bookTitle,setBookTitle] = useState([])
 useEffect(()=>{
    const source = axios.CancelToken.source()
 
    const fetchData =async ()=>{
     try{
        const res =await axios({
            method : 'GET',
            url: `https://www.googleapis.com/books/v1/volumes/mHvYAAAAMAAJ`,
           //  params:{q:query,printType:'books'},
            
        })
        const dataa = await res.data
       // console.log(dataa);

        // let jj = await dataa.items.map(b=>b.volumeInfo.title)
        // setBookTitle(jj)
     
     }catch(err){
        if(axios.isCancel(err)){

        }
     }
    }
    fetchData()
    return ()=>{
        source.cancel()
    }
 },[])


    return null
    
}
