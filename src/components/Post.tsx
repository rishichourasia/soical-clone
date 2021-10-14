import React, { useState } from "react";
import { postType } from "../App";

const Post = ({ post }: { post: postType }) => {
	const [liked, setliked] = useState<boolean>(false);

	return (
		<div className="card post">
			<div className="card-header">
				<div className="leftSide">
					<img className="pro" src={post.profile} alt="." />
					<h5 className="title">{post.username}</h5>
				</div>
				<i className="bi bi-three-dots-vertical dot"></i>
			</div>
			<img src={post.post} alt="post" />
			<span className="side">
				<strong>200 Likes</strong>
			</span>
			<div className="buttons">
				<i
					className={liked ? "bi bi-heart-fill liked" : "bi bi-heart"}
					onClick={() => {
						setliked(!liked);
					}}
				></i>
				<i className="bi bi-chat"></i>
				<i className="bi bi-share"></i>
			</div>
		</div>
	);
};

export default Post;
