import axios from "axios";

export interface userType {
	username: string;
	profilePicture: string;
}

// export interface storyType {
// 	profile: string;
// }

const updateUser = () => {
	return (dispatch: any) => {
		axios.get("/data/user.json").then((res) => {
			const data = res.data;
			dispatch({
				type: "UPDATE_USER",
				payload: data,
			});
		});
	};
};

// const updateStory = () => {
// 	return (dispatch: any) => {
// 		axios.get("/data/story.json").then((res) => {
// 			const data = res.data;
// 			dispatch({
// 				type: "UPDATE_STORY",
// 				payload: data,
// 			});
// 		});
// 	};
// };

export { updateUser };
