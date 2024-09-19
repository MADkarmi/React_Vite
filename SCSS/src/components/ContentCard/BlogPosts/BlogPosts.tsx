import BlogPost, { post } from "./BlogPost/BlogPost";
import "./BlogPosts.scss";

interface BlogPostsProps{
    blogPosts: post[];
}

export default function BlogPosts({blogPosts}:BlogPostsProps){
    return (
        <div className="blog-posts">
            {blogPosts.map((post) => (
                <BlogPost post={post}/>
            ))}
        </div>
    );
}