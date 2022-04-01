const initialState = {
  feedback: [],
  profile:{}
};

const FeedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FEEDBACK":
      const { feedback } = action.payload;
      console.log(feedback)
      return {
        ...state,
        feedback: feedback,
      };
      case "PROFILE":
        const { profile } = action.payload;
        return {
          ...state,
          profile: profile,
        }

    default:
      return {
        state,
      };
  }
};

export default FeedbackReducer;
