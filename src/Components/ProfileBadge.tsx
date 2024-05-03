function ProfileBadge() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
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
