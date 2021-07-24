import {useState,useEffect} from 'react'
import axios from 'axios'
export default function UseFetch(query) {
   const [fullData,setFullData] = useState([]);

   const [bookTitle,setBookTitle] = useState({
      titles:[],
      bookId : []
   });
 useEffect(()=>{
    const source = axios.CancelToken.source()

    const fetchData =async ()=>{
     try{
        const res =await axios({
            method : 'GET',
            url: `https://www.googleapis.com/books/v1/volumes`,
             params:{q:query,printType:'books'},
            
        })
        const dataa = await res.data
 
        let titlesSent = await dataa.items.map(b=>b.volumeInfo.title)
        let IdSent = await dataa.items.map(b=>b.id)
       
        setBookTitle({
           titles : titlesSent,
           bookId : IdSent
        })
        setFullData(dataa.items)
     
     }catch(err){
        if(axios.isCancel(err)){

        }
     }
    }
    fetchData()
    return ()=>{
        source.cancel()
    }
 },[query])


    return {bookTitle,fullData}
    
}
