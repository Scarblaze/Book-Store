import React from 'react'
import bannerImg from '../../assets/banner.png'

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row py-16 justify-between items-centre gap-12'>

      <div className='md:w-1/2 w-full flex items-center md:justify-end'>
        <img src={bannerImg} alt="" />
      </div>

      <div className='md:w-1/2 w-full'>
        <h1 className='md:text-5xl text-2xl font-medium mb-7'>New Releases this Week</h1>
        <p className='mb-10'>Discover the latest literary gems in and stay ahead of the curve with fresh titles from bestselling authors, exciting debuts, and highly anticipated books across all genres. Whether you're a fiction fanatic or a non-fiction enthusiast, our curated selection is updated regularly to bring you the books you won't want to miss. </p>

        <button className='btn-primary'>Subscribe</button>
      </div>

    </div>
  )
}

export default Banner
