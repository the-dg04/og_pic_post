import './PostCard.css'

export default function DownloadCard(props){
    return(
        <>
        <div className="card download-card">
            <div className="blog-title">{props.title}</div>
            <div className="blog-content">
                {props.content}
            </div>
        </div>
        </>
    );
}