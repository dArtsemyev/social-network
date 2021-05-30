import React from "react";
import s from "./Post.module.css"

type PostPropsType = {
    message: string
    likeCount: number
}

function Post(props: PostPropsType) {
    return (
        <div className={s.item}>
            <img src="https://images.wallpaperscraft.ru/image/kraska_piatna_kvadraty_121700_2608x2608.jpg" alt="userAva"/>
            {props.message}
            <div>
                <span>{props.likeCount} like</span>
            </div>
        </div>
    );
}

export default Post;