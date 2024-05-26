import toast from "react-hot-toast";
import { apiConnector } from "../apiconnector";
import { userEndpoints } from "../apis";
import { setLoading, setToken } from "../../slices/authSlice";
import { setUser } from "../../slices/userSlice";

const {
    USER_SIGNUP_API,
    USER_LOGIN_API,
    UPDATE_USER_DATA_API,
    SHOW_USER_DETAILS_API
} = userEndpoints;

export const signUp = (data, navigate) => {
    return async (dispatch) => {
        let result = null;
        const toastId = toast.loading("Loading...");
        try {

            console.log("Before backend function call", data);

            if (data.Password !== data.ConfirmPass) {
                toast.dismiss(toastId);
                toast.error("Password and ConfirmPass Not Same");
                return null;
            }

            const response = await apiConnector("POST", USER_SIGNUP_API, data);

            console.log("after backend function call");

            if (!response?.data?.success) {
                throw new Error("Could Not Create User");
            }

            result = response?.data?.data;
            toast.success("User Registered Successfully");
            navigate("/signIn");
        } catch (error) {
            toast.error("Internal Server Error");
            console.log("USER_SIGNUP_API Error......", error);
            console.log("Error Message ", error.message);
        }

        toast.dismiss(toastId);
        return result;
    };
};

export const login = (data, navigate) => {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        try {
            const { Email, Password } = data;
            console.log("Login API response.....");

            const response = await apiConnector("POST", USER_LOGIN_API, {
                Email,
                Password,
            });

            console.log("Login API response.....", response);

            toast.success("Login Successful");
            dispatch(setToken(response.data.token));
            dispatch(setUser({ ...response.data.user }));
            localStorage.setItem("Token", JSON.stringify(response.data.token));
            navigate("/");
        } catch (error) {
            console.log("LOGIN API ERROR............", error);
            toast.error("Place Check Email and Password");
        }
        dispatch(setLoading(false));
        toast.dismiss(toastId);
    };
};

export const updateUser = (data, Token, navigate) => {
    return async (dispatch) => {
        let result = null;
        const toastId = toast.loading("Loading...");
        try {
            const response = await apiConnector("POST", UPDATE_USER_DATA_API, data, {
                Authorization: `Bearer ${Token}`,
            });

            if (!response?.data?.success) {
                throw new Error("Could Not Create User");
            }

            result = response?.data?.updatedUserDetails;

            dispatch(setUser({ ...response.data.updatedUserDetails }));
            localStorage.setItem("user", JSON.stringify(response.data.updatedUserDetails));
            navigate("/");
        } catch (error) {
            console.log("CREATE_USER_DATA_API Error......", error);
            console.log("Error Message ", error.message);
        }

        toast.dismiss(toastId);
        return result;
    };
};

export const getUserDetails = (Token, navigate) => {
    console.log("slice call")
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        try {
            const response = await apiConnector("GET", SHOW_USER_DETAILS_API, null, {
                Authorization: `Bearer ${Token}`,
            });

            if (!response.data.success) {
                throw new Error(response.data.message);
            }
            dispatch(setUser(response?.data?.user));
            console.log("getUser responce ", response?.data?.user);
        } catch (error) {
            dispatch(logout(navigate));
            toast.error("SHOW_USER_DETAILS_API ERROR...");
            console.log("SHOW_USER_DETAILS_API ERROR....", error);
        }

        toast.dismiss(toastId);
    };
};

export const logout = (navigate) => {
    return (dispatch) => {
        dispatch(setToken(null));
        dispatch(setUser(null));
        localStorage.removeItem("Token");
        localStorage.removeItem("user");
        toast.success("Logged Out");
        navigate("/");
    };
};
