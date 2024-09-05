import { toast } from "react-toastify";
import profile from '../assets/profile.png';

function ProfileBadge() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  console.log("The user is", user);
  const logout = async () => {
    localStorage.removeItem("user");
    localStorage.removeItem("tokens");
    localStorage.removeItem("favorites");

    const tokens = await JSON.parse(localStorage.getItem("tokens") || "{}");
    console.log("the token after logout is", tokens);

    const favorite = await JSON.parse(
      localStorage.getItem("favorites") || "{}"
    );
    console.log("the favorites after logout is", favorite);
    toast.success("Logged out successfully");
    window.location.reload();
  };

  return (
    <div className="absolute z-20 flex flex-col items-center justify-center max-w-sm p-8 mx-auto text-center bg-white border border-gray-200 rounded-lg shadow-2xl top-10 w-fit h-fit">
  <div className="relative inline-block mb-4">
    <img
      className="w-16 h-16 border-2 border-green-500 rounded-full shadow-lg "
      src={user?.profile_picture ?? profile}
      alt="user picture"
    />
  </div>

  <div className="mb-4">
    <p className="font-bold text-gray-800 ">
    <i className="w-2 fa-regular fa-user"></i>
    
    <p className="text-2xl">{user?.first_name} {user?.last_name}</p>
      
    </p>
    <p className="flex items-center justify-center gap-3 text-gray-500 text-md">
    <i className="fa-regular fa-envelope"></i>
      {user?.email}
    </p>
    <p className="flex items-center justify-center text-gray-500 text-md">
    {/* <i className="fa-regular fa-phone"></i> */}
      {user?.phone_number}
    </p>
  </div>

  <button
    onClick={logout}
    type="submit"
    className="w-full px-2 py-2 mt-4 text-lg font-semibold text-white transition duration-300 rounded-full bg-gradient-to-r from-green-500 to-orange-500 hover:from-orange-600 hover:to-green-600 focus:outline-none focus:ring-4 focus:ring-pink-300"
  >
    Logout
  </button>
</div>

  );
}

export default ProfileBadge;
