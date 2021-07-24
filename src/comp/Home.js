import React,{useRef,useEffect,useState} from 'react'
import '../css/Home.scss'
import { BiSearchAlt } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import UseFetch from './UseFetch'
import {GiBookmarklet} from 'react-icons/gi'
import BookShow from './BookShow'
const Home=()=> {
   const [query,setQuery] = useState('')
   const [bookToShow,setBookToShow] = useState('')
   const [booksTitle,setBooksTitle] = useState([])
   const [bookId,setBookId] = useState([])
   const [bookContainerClass,setBookContainerClass] = useState('')
  const inputCheck = useRef('')
  const suggestionRef = useRef()

const {bookTitle,fullData} = UseFetch(query)

useEffect(()=>{
    
   setBooksTitle(bookTitle.titles)
   setBookId(bookTitle.bookId)
},[bookTitle])


const suggestionTitles = ()=>{

    let suggesionArr = []
    for(let i=0; i<5; i++){
   suggesionArr.push(
        <div key={i} onClick={()=>showMeBook(bookId[i])} className="suggesion">
        <BsSearch />
        <h3>{booksTitle[i]}</h3>
    </div>
   )
    }
    return suggesionArr
}

const showMeBook =(e)=>{
    setBookToShow(e)
 
}
//////////////////////////////////////////////////////////////////////////
    const onTextChange=()=>{
       
        setQuery(inputCheck.current.value)
           if(!suggestionRef.current.classList.contains('openSearchBox')){
               suggestionRef.current.classList.add('openSearchBox')
               inputCheck.current.classList.add('openSearchBox')
               setBookContainerClass('openSearchBox')
            
           }      
       }
  const searchTextSubmit= ()=>{
      setQuery(inputCheck.current.value)
  }
  const checkOutFocus = ()=>{
      setTimeout(()=>{
    if(suggestionRef.current.classList.contains('openSearchBox')){
        suggestionRef.current.classList.remove('openSearchBox')
        inputCheck.current.classList.remove('openSearchBox')
        
        setBookContainerClass('')
    }
},500)
  }
  ////////////////////////////////////////////////////////////////////////
    return (
       <>
          <div className="contianer">
              <div className="logo">
                  <GiBookmarklet />
                  <h1>Books Castle</h1></div>
              <div className="formDiv">
                  <form action="">
                      <input ref={inputCheck} onBlur={()=>checkOutFocus()}  onChange={()=>onTextChange()}  className='inputText' placeholder='Search Books' type="text" name="" id="" />
                      
                      <BiSearchAlt onClick={()=>searchTextSubmit()} className='btn' type='submit' />
                  </form>
                  <div ref={suggestionRef} className="suggestionDiv">
                      <div className="suggestionBox">
                          <div className="suggesions">
                              {booksTitle ? (suggestionTitles()) : ('')}
                          
</div>
                      </div>
                  </div>
              </div>
              <BookShow showThisBook={bookToShow} class={bookContainerClass} fullData={fullData}/>
          </div>

       </>
    )
}
export default Home;