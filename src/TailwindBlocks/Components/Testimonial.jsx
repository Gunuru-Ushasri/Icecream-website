import React from 'react'

const Testimonial = () => {
  return (
    <section>
        <section className="text-gray-600 body-font bg-[var(--color-BgColor)] text-[var(--color-TextColor)]">
        <h1 className='text-6xl text-white-500 text-center font-serif'>Reviews</h1>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="assets/team1.webp"/>
          <p className="leading-relaxed">Absolutely delicious! 🍦 The flavors are rich and creamy, and every scoop melts perfectly in your mouth. My favorite treat on a hot day! – ⭐⭐⭐⭐⭐</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-gray-500 font-medium title-font tracking-wider text-sm ">HOLDEN CAULFIELD</h2>
          <p className="text-gray-500">Senior Product Designer</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="assets/team2.webp"/>
          <p className="leading-relaxed">So many amazing flavors to choose from! The texture is smooth, and the taste is just heavenly. Definitely the best ice cream in town!" – ⭐⭐⭐⭐⭐</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-gray-500 font-medium title-font tracking-wider text-sm">ALPER KAMU</h2>
          <p className="text-gray-500">UI Develeoper</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 p-4">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="assets/team3.png"/>
          <p className="leading-relaxed">Love the variety and freshness! Each bite is packed with flavor, and the presentation is just as great as the taste. Highly recommend!</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-gray-500 font-medium title-font tracking-wider text-sm ">HENRY LETHAM</h2>
          <p className="text-gray-500">CTO</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </section>
  )
}

export default Testimonial
