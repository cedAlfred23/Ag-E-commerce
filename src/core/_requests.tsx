import axios from "axios";
import { UserModel } from "./_models";
import { jwtDecode, JwtPayload } from "jwt-decode";

const API_URL = "http://127.0.0.1:8000/api/";
// const API_URL = import.meta.env.API_URL;

interface CustomJwtPayload extends JwtPayload {
  user_id: any; // Define the type of user_data property
}

const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}auth/user/`;
const LOGIN_URL = `${API_URL}auth/token/`;
const REGISTER_URL = `${API_URL}auth/user/register/`;
const REFRESH_TOKEN_URL = `${API_URL}auth/token/refresh/`;

const tokens = JSON.parse(localStorage.getItem("tokens") || "{}");
const access_token = tokens.access;
const refresh_token = tokens.refresh;
// console.log("The access token in local storage is ", access_token);
// console.log("The refresh token in local storage is ", refresh_token);

async function isTokenValid(token: string): Promise<boolean> {
  // const access_token = await JSON.parse(localStorage.getItem("access_token") || "{}");
  console.log("The token is ", token);
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
export async function login(email: string, password: string) {
  console.log("The login url is " + LOGIN_URL);
  const response = await axios.post(LOGIN_URL, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      HeaderKey: "HeaderValue",
      "Access-Control-Allow-Origin": "*",
    },
    email,
    password,
  });
  return response.data;
}

export async function getUserByToken(userToken: string) {
  // refresh_token_api();
  // const decoded = jwtDecode<CustomJwtPayload>(userToken);
  // const userId = decoded.user_id;

  try {
    const response = await axios.get(
      GET_USER_BY_ACCESSTOKEN_URL,
      {
        headers: {
          Authorization: `Bearer ${userToken}`, // Add the token to the Authorization header
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
  console.log("The get products url is " + `${API_URL}shop/products/`);
  console.log("Calling get products");
  // refresh_token_api();
  try {
    const response = await axios.get(`${API_URL}shop/products/`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    console.log("The response for products is ", response.data);
    return response.data;
  } catch (error) {
    console.error("Error getting products", error);
    throw error;
  }
  // console.log("Response for product to be sent", response.data);
  // return await response.data;
}

export async function getProductById(productId: string) {
  console.log("The get products url is " + `${API_URL}shop/products/${productId}/`);
  console.log("Calling get products", tokens.access);
  refresh_token_api();
  try {
    const response = await axios.get(`${API_URL}shop/products/${productId}/`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${tokens.access}`,
        "Content-Type": "application/json", // Add the token to the Authorization header
      },
    });
    console.log("The response for products is ", response.data);
    return response.data;
  } catch (error) {
    console.error("Error getting products", error);
    throw error;
  }
  // console.log("Response for product to be sent", response.data);
  // return await response.data;
}

export async function addToWishlist(productId: string){
  console.log("The addToWishlist url is " + `${API_URL}wishlist/add/`);
  console.log("Calling addToWishlist");
  refresh_token_api();
  try {
    const response = await axios.post(
      `${API_URL}wishlist/add/`, 
      {
        product: productId,
      },
      {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokens.access}`,
      },
    });
    console.log("The response for addToWishlist is ", response.data);
    return response.data;
  } catch (error) {
    console.error("Error addToWishlist products", error);
    throw error;
  }
}

export async function getWishlist(){
  console.log("The get products url is " + `${API_URL}wishlist/list/`);
  console.log("Calling get products");
  refresh_token_api();
  try {
    const response = await axios.get(`${API_URL}wishlist/list/`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokens.access}`,
      },
    });
    console.log("The response for products is ", response.data);
    return response.data;
  } catch (error) {
    console.error("Error getting products", error);
    throw error;
  }
  // console.log("Response for product to be sent", response.data);
  // return await response.data;
}

export async function addToCart(productId: string, quantity: number) {
  console.log("The addToCart url is " + `${API_URL}cart/cart/`);
  console.log("Calling addToCart with arguments", productId, quantity);
  
  try {
    const response = await axios.post(
      `${API_URL}cart/cart/`,
      {
        product: productId,
        quantity: quantity,
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokens.access}`,
        },
      }
    );
    console.log("The response for addToCart is ", response.data);
    return response.data;
  } catch (error) {
    console.error("Error adding product to cart", error);
    throw error;
  }
}

export async function getCart(){
  console.log("The getCart url is " + `${API_URL}cart/cart/list/`);
  console.log("Calling getCart");
  // refresh_token_api();
  try {
    const response = await axios.get(`${API_URL}cart/cart/list/`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokens.access}`,
      },
    });
    console.log("The response for getCart is ", response.data);
    return response.data;
  } catch (error) {
    console.error("Error getCart products", error);
    throw error;
  }
  // console.log("Response for product to be sent", response.data);
  // return await response.data;
}

export async function getOrder(){
  console.log("The getCart url is " + `${API_URL}order/seller-order-history/`);
  console.log("Calling getOrders");
  // refresh_token_api();
  try {
    const response = await axios.get(`${API_URL}order/seller-order-history/`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokens.access}`,
      },
    });
    console.log("The response for getOrders is ", response.data);
    return response.data;
  } catch (error) {
    console.error("Error getOrders products", error);
    throw error;
  }
  // console.log("Response for product to be sent", response.data);
  // return await response.data;
}