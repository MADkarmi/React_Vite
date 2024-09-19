import styled from "@emotion/styled";

interface BlogPostProps{
    post: post
}

export interface post{
    id: number;
    title: string;
    date: string;
    content: string;
};

const Post = styled.div`
    border-radius: 10px;
    padding: 20px;
    text-align: left;
    background: ${({theme}) => theme.color.color1};
    color: ${({theme}) => theme.color.primaryColor};

    h3 {
        margin-bottom: 10px;
    }

    p {
        margin-bottom: 10px;
    }
`

const Button = styled.button`
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 5px 10px;
    background: ${({theme}) => theme.color.buttonBackgroundGreen};
    color: ${({theme}) => theme.color.buttonColor};
    transition: background 0.3s ease;

    &:hover {
        background: ${({theme}) => theme.color.buttonHoverLighterGreen};
    }
`
export default function BlogPost({post}:BlogPostProps){
    return(
        <Post key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.date}</p>
            <p>{post.content}</p>
            <Button>Read More</Button>
        </Post>
    );
}