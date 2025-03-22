import React from 'react'

const Hero = () => {
  return (
    <section>
        <section className="text-gray-600 body-font bg-[var(--color-BgColor)] text-[var(--color-TextColor)]">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-500">Irresistible Ice Cream: 
        <br className="hidden lg:inline-block sm:text-xl"/>A Delight in Every Scoop!
      </h1>
      <p className="mb-8 leading-relaxed">Ice cream is a delightful frozen dessert loved by people of all ages. Made from dairy or non-dairy alternatives, it comes in a variety of flavors, from classic vanilla to exotic mango and rich chocolate. The creamy texture and sweet taste make it a perfect treat for any occasion. Whether served in cones, cups, or sundaes, ice cream brings joy with every bite.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
    <div className='bg-transparent'>
      <img src="assets/icebaby1.png"></img>
    </div>
  </div>
</section>
    </section>
  )
}

export default Hero
