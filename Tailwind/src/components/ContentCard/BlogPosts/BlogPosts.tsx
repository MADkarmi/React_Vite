import BlogPost, { post } from "./BlogPost/BlogPost";

interface BlogPostsProps{
    blogPosts: post[];
}

export default function BlogPosts({blogPosts}:BlogPostsProps){
    return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[20px]">
            {blogPosts.map((post, id) => (
                <BlogPost post={post} key={id}/>
            ))}
        </div>
    );
}