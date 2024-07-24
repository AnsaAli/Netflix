import React from 'react';
import Header from './Header';
import YoutubeEmbed from '../utils/YoutubeEmbed';
import { CrimeStories } from './CrimeStories';
import { Banner } from './Banner';
import { ContinueWatchg } from './ContinueWatchg';

const Browse = () => {
  return (
      <div className=' relative'>
      <Header />
      <div className='relative'>
        {/* <YoutubeEmbed  /> */}
        <Banner />
        <div className='absolute top-20  w-full'>
          <CrimeStories />
        </div>
        <div className='absolute top-64  w-full'>
          <ContinueWatchg />
        </div>
      </div>
    </div>
  )
}

export default Browse;
