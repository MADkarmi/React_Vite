import styled from "@emotion/styled";
import BlogPost, { post } from "./BlogPost/BlogPost";

interface BlogPostsProps{
    blogPosts: post[];
}

const Posts = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
`

export default function BlogPosts({blogPosts}:BlogPostsProps){
    return (
        <Posts>
            {blogPosts.map((post) => (
                <BlogPost post={post}/>
            ))}
        </Posts>
    );
}