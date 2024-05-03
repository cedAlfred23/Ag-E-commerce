import { useState } from "react";
import Modal from "./Modal";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import { Link, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import ProfileBadge from "./ProfileBadge";

function Nav() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isProfilOpen, setIsProfilOpen] = useState(false);

  const handleProfil = () => {
    console.log('profile clicked')
    setIsProfilOpen(!isProfilOpen)
  }

  const handleOpenRegister = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  };

  const handleClose = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
    toast.success("Logged in successfully");
  };

  const handleOpenRegisterAgain = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  };

  const handleOpenLoginAgain = () => {
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  };

  // const openProfile = () => {
  //   console.log("The user is logged in");
  //   setIsLoginOpen(true);
  // };

  const user = localStorage.getItem("user");
  user;

  return (
    <>
      <nav className="max-w-screen-xl navigation">
        {/* <!--logo--> */}
        <div>
          <Link to="/">
            <h2 className="uppercase text-[#4CBB17] text-base lg:text-xl font-bold text">
              Ag E-Commerce
            </h2>
          </Link>
          {/* <h2>Ag E-Commerce</h2> */}
        </div>
        {/* <!--search--> */}

        <form className="search-box">
          <input type="" placeholder="Search Product Here" required />
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>

        {/* <div>
        <input type="file" capture="environment" />
        </div> */}
        {/* <!--btns--> */}
        <div className="nav-btns">
          {!user ? (
            <a
              href="#"
              className="nav-user"
              type="button"
              onClick={handleOpenRegister}
            >
              <i className="fa-regular fa-user"></i>
            </a>
          ) : (
            <a
              href="#"
              className=""
              type="button"
              onClick={handleProfil}
            >
              <i className="fa-regular fa-user"></i>
              <div className= {`nav-user ${isProfilOpen ? 'block' : 'hidden'}  flex flex-1 absolute top-20 z-20 w-fit h-fit bg-orange-500 p-10 justify-center items-center rounded-md`} >
              <ProfileBadge />
              </div>
            </a>
          )}
          {/* <!--cart--> */}{" "}
          <Link to="/cartpage" className="nav-cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
        </div>
      </nav>

      <Modal isOpen={isLoginOpen}>
        <LoginModal
          openAnotherModal={handleOpenRegisterAgain}
          onClose={handleClose}
        />
      </Modal>

      <Modal isOpen={isRegisterOpen}>
        <RegisterModal
          openAnotherModal={handleOpenLoginAgain}
          onClose={handleClose}
        />
      </Modal>
      <Outlet />
    </>
  );
}

export default Nav;
