import './PostCard.css'

export default function PostCard(props){
    return(
        <>
        <div className="card blog-card">
            <div className="blog-title">{props.title}</div>
            <div className="blog-content">
                {props.content}
            </div>
        </div>
        </>
    );
}