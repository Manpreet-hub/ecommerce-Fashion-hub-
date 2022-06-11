const localStorageData = localStorage.getItem("token");
export const initialAuthState = {
  isAuthenticated: localStorageData ? true : false,
  user: "",
  error: "",
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "INIT_AUTH":
      return { ...state, isAuthenticated: true, user: action.payload };
    case "RESET_AUTH":
      return { ...state, user: "", isAuthenticated: false };
    case "Auth_FAILURE":
      return { ...state, error: action.payload };
  }
};
