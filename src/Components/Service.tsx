function Service() {
    const data = [{
        title: "Free shipping",
        description:
            "Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet 33 nihil molestias. Rem perspiciatis iure ut laborum inventore et maxime amet.", 
            color: "#FFE5EC"
    },
    {
        title: "Free shipping",
        description:
            "Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet 33 nihil molestias. Rem perspiciatis iure ut laborum inventore et maxime amet.", 
    color: "#D8F3DC"
        },
    {
        title: "Free shipping",
        description:
            "Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet 33 nihil molestias. Rem perspiciatis iure ut laborum inventore et maxime amet.", 
    color: "#e7d3fd"
        }
]
  return (
    <>
      {/* <!--services--> */}
      <section className="flex flex-wrap justify-center py-10 mt-16 bg-gray-50">
        {data.map((item, index) => (
          <div key={index} className="p-4 max-w-[420px]">
            <div className="flex flex-col h-full p-8 rounded-lg" style={{ backgroundColor: item.color }}>
              <div className="flex items-center mb-3">
                <div className="inline-flex items-center flex-shrink-0 w-8 h-8 mr-3">
                  <i className="fa fa-shipping-fast text-[#7C0A02] text-xl"></i>
                </div>
                <h2 className="text-lg font-bold text-black uppercase">
                  {item.title}
                </h2>
              </div>
              <div className="flex flex-col justify-center flex-grow">
                <p className="text-sm leading-relaxed text-gray-700">
                  {item.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center mt-3 text-black hover:opacity-25"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}

export default Service