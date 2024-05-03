function FeatureBanner() {
  return (
    <div>

      {/* <!--featured products--> */}
      <section className="mt-16 bg-white">
        <div className="max-w-screen-xl px-2 py-4 mx-auto sm:py-4 lg:px-6">
          <p className="mb-5 text-sm text-center uppercase">
            innovation & confort
          </p>
          <h2 className="mb-10 text-lg font-bold text-center uppercase lg:text-2xl">
            Discover our features
          </h2>
          <div className="grid h-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5">
            <div className="flex flex-col h-auto col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 md:h-full">
              <a
                href=""
                className="relative flex flex-col flex-grow px-4 pt-40 pb-4 overflow-hidden rounded-lg group"
              >
                <img
                  src="/avocado.webp"
                  className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="absolute top-0 left-0 z-10 p-4 text-lg font-medium text-white xs:text-xl md:text-3xl">
                  Avocado
                </h3>
              </a>
            </div>
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
              <a
                href=""
                className="relative flex flex-col px-4 pt-40 pb-4 mb-4 overflow-hidden rounded-lg group"
              >
                <img
                  src="/spinach.webp"
                  className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="absolute top-0 left-0 z-10 p-4 text-lg font-medium text-white xs:text-xl md:text-3xl">
                  Spinach
                </h3>
              </a>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-2">
                <a
                  href=""
                  className="relative flex flex-col px-4 pt-40 pb-4 overflow-hidden rounded-lg group"
                >
                  <img
                    src="/feature.webp"
                    className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="absolute top-0 left-0 z-10 p-4 text-lg font-medium text-white xs:text-xl md:text-3xl">
                    Green Pepper
                  </h3>
                </a>
                <a
                  href=""
                  className="relative flex flex-col px-4 pt-40 pb-4 overflow-hidden rounded-lg group"
                >
                  <img
                    src="/cucumber.webp"
                    className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="absolute top-0 left-0 z-10 p-4 text-2xl font-medium text-white xs:text-xl md:text-3xl">
                    Cucumber
                  </h3>
                </a>
              </div>
            </div>
            <div className="flex flex-col h-auto col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 md:h-full">
              <a
                href=""
                className="relative flex flex-col flex-grow px-4 pt-40 pb-4 overflow-hidden rounded-lg group"
              >
                <img
                  src="/beetroot.webp"
                  alt=""
                  className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="absolute top-0 left-0 z-10 p-4 text-lg font-medium text-white xs:text-xl md:text-3xl">
                  Beetroot
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FeatureBanner