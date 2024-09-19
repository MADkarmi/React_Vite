
interface BlogPostProps{
    post: post
}

export interface post{
    id: number;
    title: string;
    date: string;
    content: string;
}

export default function BlogPost({post}:BlogPostProps){
    return(
        <div key={post.id} className="text-left p-5 rounded-[10px] *:mb-[10px] text-lightColors-primary bg-lightColors-second dark:text-darkColors-primary dark:bg-darkColors-second">
            <h3 className=" font-bold text-xl">
                {post.title}
            </h3>
            <p>{post.date}</p>
            <p>{post.content}</p>
            <button className="cursor-pointer transition-[background-color] duration-[0.3s] ease-[ease] px-2.5 py-[5px] rounded-[5px] border-[none]; text-submit-primary bg-submit-secondary hover:bg-submit-light">
                Read More
            </button>
        </div>
    );
}