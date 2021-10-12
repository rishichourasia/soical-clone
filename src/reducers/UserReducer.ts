import { userType } from "../Actions/action";

const initialState = {
	username: "",
	profilePicture: "",
};

// const initialStory = "";

const userReducer = (state: userType = initialState, action: any) => {
	switch (action.type) {
		case "UPDATE_USER":
			return action.payload;
		default:
			return state;
	}
};

// const storyReducer = (state: any = initialStory, action: any) => {
// 	switch (action.type) {
// 		case "UPDATE_STORY":
// 			return action.payload;
// 		default:
// 			return state;
// 	}
// };

export { userReducer };
