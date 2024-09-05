import { useState } from "react";
import Modal from "./Modal";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import { Link, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import ProfileBadge from "./ProfileBadge";
import profile from '../assets/profile.png';

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
              
              <img src={profile} alt=""  className="w-8 h-8 border-2 border-green-500 rounded-full shadow-lg "/>
              <div className= {`nav-user ${isProfilOpen ? 'block' : 'hidden'}  flex  absolute justify-center `} >
              <ProfileBadge />
              </div>
            </a>
          )}
          {/* <!--cart--> */}{" "}

          {!user ? (
            <a
              href="#"
              className="nav-user"
              type="button"
              onClick={handleOpenRegister}
            >
              <i
                      id="like"
                      className={`fa fa-heart px-1.5 sm:px-3 text-sm lg:text-lg`}
                      // ${isFavorite(products) ? "text-green-500" : "text-black"}
                    ></i>
            </a>
          ) : (
            <Link to="/favorites" className="nav-cart">
            <i
                      id="like"
                      className={`fa fa-heart px-1.5 sm:px-3 text-sm lg:text-lg`}
                      // ${isFavorite(products) ? "text-green-500" : "text-black"}
                    ></i>
          </Link>
          )}
          
          {!user ? (
            <a
              href="#"
              className="nav-user"
              type="button"
              onClick={handleOpenRegister}
            >
              <i className="fa-solid fa-cart-shopping"></i>
            </a>
          ) : (
            <Link to="/cartpage" className="nav-cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
          )}

{!user ? (
            <a
              href="#"
              className="nav-user"
              type="button"
              onClick={handleOpenRegister}
            >
              <i className="fa-solid fa-circle-info"></i>
            </a>
          ) : (
            <Link to="/myorders" className="nav-cart">
            <i className="fa-solid fa-circle-info"></i>
          </Link>
          )}


          
          
          
          
          
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
