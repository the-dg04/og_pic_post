import { useEffect, useState } from "react";
import {Navigate, useNavigate} from 'react-router-dom'
import './Post.css'
// import '
export default function PostForm(){
    const [title,setTitle]=useState("");
    const [content,setContent]=useState("");
    const [redirect,setRedirect]=useState(false);
    const navigate=useNavigate();
    useEffect(()=>{
        if(redirect){
            navigate(`/post/${title}/${content}`)
        }
    },[redirect])

    return(
        <>
            <input className="title-input" type="text" name="" id="" placeholder="title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            <textarea className="content-input" name="" id="" cols="20" rows="10" placeholder="content" value={content} onChange={(e)=>{setContent(e.target.value)}}></textarea>
            <button className="blocky" onClick={()=>{setRedirect(true)}}>POST</button>
        </>
    );
}