import React,{useRef} from 'react'
import { CgCalendarDates} from "react-icons/cg";
import { BiBookBookmark } from "react-icons/bi";
import { BsFillBookmarkFill } from "react-icons/bs";
import {IoPerson } from "react-icons/io5";

export default function BookShow(props) {
    
    let ourFullData = props.fullData
    let bookToShow = ourFullData.filter(e=>{
        return e.id === props.showThisBook
    })
    const fetchDAta =()=>{
   let newBookToShow = bookToShow.map((e,i)=>{
        let z =e.volumeInfo
        return (
            <div key={i} ref={resultRef} className={"resultDiv "+ props.class}>
                  <div className="bookShowDiv">
                      <div className="imgdiv">
                       <img src={z.imageLinks.thumbnail} alt="" />
                      </div>
                      <div className="content">
                          <div className="nameDesc">
                          <h1>{z.title}</h1>
                         
                          </div>
                    <div className="details">
                        <div className="detail">
                            <IoPerson />
                        <h3>Authors : {z.authors[0]}</h3>
                        </div>
                        <div className="detail">
                            <BsFillBookmarkFill />
                        {z.categories ? (<h3>Category : {z.categories[0]}</h3>) : ('')}
                            </div>
                            <div className="detail">
                       < CgCalendarDates />
                     <h3>Date Published : {z.publishedDate}</h3>
                     </div>
                     <div className="detail">
                         < BiBookBookmark  />
                     <h3>Page Count : {z.pageCount}</h3>
                     </div>
                     </div>
                      </div>
                  </div>
                  <p>{z.description}</p>
              </div>
        )
    })
    return newBookToShow
}

    const resultRef = useRef()
    return (
       
        <>
         {props.showThisBook !== '' ? (fetchDAta()) : ('')}
        </>
    )
}
