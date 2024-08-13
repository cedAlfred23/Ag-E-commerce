import axios from "axios";
import { UserModel } from "./_models";
import { jwtDecode, JwtPayload } from "jwt-decode";

const API_URL = "http://127.0.0.1:8000/api/";
// const API_URL = import.meta.env.API_URL;

interface CustomJwtPayload extends JwtPayload {
  user_id: any; // Define the type of user_data property
}

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}auth/user`;
export const LOGIN_URL = `${API_URL}auth/token/`;
export const REGISTER_URL = `${API_URL}auth/user/register/`;
export const REFRESH_TOKEN_URL = `${API_URL}auth/token/refresh/`;

const tokens = JSON.parse(localStorage.getItem("tokens") || "{}");
const access_token = tokens.access;
console.log("The access token in local storage is ", access_token);
const refresh_token = tokens.refresh;
console.log("The refresh token in local storage is ", refresh_token);

async function isTokenValid(token: string): Promise<boolean> {
  // const access_token = await JSON.parse(localStorage.getItem("access_token") || "{}");
  console.log('The token is ', token);
  try {
    const decodedToken: CustomJwtPayload = jwtDecode(token);
    const currentTime = Date.now().valueOf() / 1000;
    console.log("The jwt time is ", decodedToken.exp);
    console.log("The surrent time is ", currentTime);

    if (decodedToken.exp && decodedToken.exp < currentTime) {
      console.log("Token expired");
      return false;
    }

    return true;
  } catch (error) {
    console.log("Invalid token");
    return false;
  }
}

async function refresh_token_api() {
  console.log("The token value is ", isTokenValid(access_token));
  if (!isTokenValid(access_token)) {
    // Use the refresh token to get a new access token...
    try {
      const response = await axios.post(REFRESH_TOKEN_URL, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          // Authorization: `Bearer ${access_token}`, // Add the token to the Authorization header
        },
        refresh: `${refresh_token}`,
      });
      console.log("The lrefresh token received on login.tsx is ", response);
      localStorage.setItem("tokens", JSON.stringify(response));

      const tokens = JSON.parse(localStorage.getItem("tokens") || "{}");
      console.log("The tokens in local storage is ", tokens.access);

      return response;
    } catch (error) {
      console.error("Error getting user by token", error);
      throw error;
    }
  }
  return;
}

// Server should return AuthModel
export async function login(username: string, password: string) {
  console.log("The login url is " + LOGIN_URL);
  const response = await axios.post(LOGIN_URL, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      HeaderKey: "HeaderValue",
      "Access-Control-Allow-Origin": "*",
    },
    username,
    password,
  });
  return response.data;
}

export async function getUserByToken(userToken: string) {
  refresh_token_api();
  const decoded = jwtDecode<CustomJwtPayload>(userToken);
  const userId = decoded.user_id;

  try {
    const response = await axios.get<UserModel>(
      GET_USER_BY_ACCESSTOKEN_URL + "/" + userId + "/",
      {
        headers: {
          Authorization: `Bearer ${access_token}`, // Add the token to the Authorization header
        },
      }
    );

    return response;
  } catch (error) {
    console.error("Error getting user by token", error);
    throw error;
  }
}

// Server should return AuthModel
export async function register(
  username: string,
  email: string,
  password: string
) {
  console.log("The login url is " + LOGIN_URL);
  console.log(email, username, password);
  const response = await axios.post(REGISTER_URL, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      HeaderKey: "HeaderValue",
      "Access-Control-Allow-Origin": "*",
    },
    email,
    username,
    password,
  });
  return response;
}

export async function getProducts() {
  refresh_token_api();
  const response = await axios.get(`${API_URL}shop/products/`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    },
  });
  console.log("Response for product to be sent", response.data);
  return await response.data;
}
