import { toast } from "react-toastify";

function ProfileBadge() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const logout = async () => {
    localStorage.removeItem('user');
    localStorage.removeItem('tokens');
    localStorage.removeItem('favorites');

    const tokens = await JSON.parse(localStorage.getItem('tokens') || '{}');
    console.log('the token after logout is', tokens)

    const favorite = await JSON.parse(localStorage.getItem('favorites') || '{}');
    console.log('the favorites after logout is', favorite)
    toast.success('Logged out successfully');
  }

  return (
    <div className="">
      <h2>{user["username"]}</h2>
      <p>{user?.email}</p>

      <button
      onClick={logout}
        type="submit"
        className="w-40 mt-5 text-white bg-[#4CBB17] focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Logout
      </button>
    </div>
  );
}

export default ProfileBadge;
