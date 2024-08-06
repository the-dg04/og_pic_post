import { useParams } from "react-router-dom";
import {Helmet} from "react-helmet";
import PostCard from "./PostCard";
import DownloadCard from "./DownloadCard";
import OgImage from "../utils/og";
import { useEffect, useState } from "react";
export default function PostPage(){
    const params=useParams();
    const [url,setUrl]=useState("");
    useEffect(()=>{
        const fetchUrl=async()=>{
            const new_url=await OgImage()
            setUrl(new_url)
            console.log(url);
        }
        fetchUrl()
    },[])

    const handleClick=()=>{
        var win = window.open();
        win.document.write('<iframe src="' + url  + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
    }

    return(
        <>
            <PostCard title={params.title} content={params.content}/>
            <DownloadCard title={params.title} content={params.content}/>
            {/* <a href={url}>Download og:image</a> */}
            <button className="blocky" onClick={handleClick}>Download og:image</button>
        </>
    );
}