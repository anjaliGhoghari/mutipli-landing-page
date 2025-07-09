import React from 'react'
import styles from '../../styles/style'
import card_1 from "../../assets/images/card-1.png"
import arrow_up from "../../assets/icons/arrow-right-up-line.svg"

function Articles() {
  return (
    <>
        <section className='border-b border-containerLine '>
        <div className='container'>
        <div className={`${styles.paddindY} inner-container`}>
        <h2 className={`${styles.heading3} mb-14`}>Articles and our conference pictures</h2>

        {/* <a href="#" className="group relative block bg-black">
  <img
    alt=""
    src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div className="relative p-4 sm:p-6 lg:p-8">
    <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">Developer</p>

    <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

    <div className="mt-32 sm:mt-48 lg:mt-64">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p className="text-sm text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores
          quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
        </p>
      </div>
    </div>
  </div>
</a> */}
       <div className='flex flex-wrap justify-start items-center'>
        <div className='  border border-[#2C2C2C] overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-xl group card relative'>
        <div className='card-content w-[361px] h-[403px]'>
            <img src={card_1} className='object-cover h-full group-hover:h-[299px] w-full transition-all duration-500 group-hover:scale-105'/>
            <div className='m-6 absolute bottom-0 left-0 flex justify-center items-end translate-y-8 transform opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100  '>
            <p className='text-xl font-[380] text-white' >Multipli Monthly: June 2025 Summary</p>
            <img src={arrow_up}/>
            </div>
            </div>
        </div>
       </div>
        </div>
        </div>
        </section>
    </>
  )
}

export default Articles


// <div className="group relative w-[361px] h-[403px] overflow-hidden border border-[#2C2C2C] transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
//   <img
//     src={card_1}
//     alt="card"
//     className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//   />

//   {/* Hover content */}
//   <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
//                   flex justify-between items-center gap-3 translate-y-8 opacity-0 
//                   group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
//     <p className="text-white text-[18px] font-[380] leading-tight">
//       Multipli Monthly: June 2025 Summary
//     </p>
//     <img src={arrow_up} alt="arrow" className="w-5 h-5" />
//   </div>
// </div>
