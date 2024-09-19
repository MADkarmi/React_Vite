import "./BlogPost.scss";

interface BlogPostProps{
    post: post
}

export interface post{
    id: number;
    title: string;
    date: string;
    content: string;
};

export default function BlogPost({post}:BlogPostProps){
    return(
        <div key={post.id} className="blog-post">
            <h3>{post.title}</h3>
            <p>{post.date}</p>
            <p>{post.content}</p>
            <button>Read More</button>
        </div>
    );
}