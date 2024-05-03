function GetUpdate() {
  return (
    <div>
          {/* <!--update--> */}
      <header className="relative overflow-hidden text-center bg-no-repeat bg-cover h-60" style={{backgroundImage: "url(/feature1.webp)"}}>
        <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden bg-fixed" style={{backgroundColor: "rgba(49, 43, 43, 0.6)"}}>
          <div className="flex items-center justify-center h-full">
            <div className="text-white">
              <h2 className="mb-2 text-xl font-bold uppercase md:text-2xl lg:text-2xl">
                Get update
              </h2>
              <h4 className="mb-6 text-base font-light md:text-base lg:text-xl">
                Subscribe to our newsletter and get <br /> discount 30% off
              </h4>
              <form className="email">
                <input type="email" placeholder="Your email" required autoComplete="true" className="text-sm text-white" />
                <button>
                  <i className="fa fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default GetUpdate