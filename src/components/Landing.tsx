import axios from "axios";
import React, { useEffect, useState } from "react";
import { postType } from "../App";
import Post from "./Post";

const Landing = ({ posts }: { posts: postType[] }) => {
	// const user = useSelector((state: any) => state.user);
	const [story, setstory] = useState([]);

	useEffect(() => {
		axios.get("/data/story.json").then((res) => {
			const data = res.data;
			setstory(data);
		});
	}, []);

	// console.log(story);

	return (
		<div className="container landing">
			<div className="row">
				<div className="col-8">
					<div className="card story">
						{story.map((stori: any) => (
							<div className="story-img">
								<img src={stori.profile} alt="profile" />
							</div>
						))}
					</div>
					<div className="posts">
						{posts.length !== 0
							? posts.map((post) => <Post post={post} />)
							: null}
					</div>
				</div>
				<div className="col-4">
					<div className="menu-top">
						<img
							className="user-img"
							src="https://picsum.photos/100"
							alt="hehe"
						/>
						<div className="user-name">
							<span className="span-str">
								<strong>Richard Douglas</strong>
							</span>
							<span>@richardoug</span>
						</div>
					</div>
					<div className="menu-down">
						<div className="menu-mid">
							<p className="light"> Suggestions for you</p>
						</div>
						<div className="suggest-box">
							{story.slice(0, 4).map((stori: any, index: number) => (
								<div className="sug-card" key={index}>
									<div className="sug-user" key={index}>
										<img className="sug-img" src={stori.profile} alt="" />
										<span className="sug-name">
											{" "}
											<strong>{stori.username}</strong>{" "}
										</span>
									</div>
									<span className="follow">Follow</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Landing;
