import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info);

    if (!info) return null;
    const{snippet, statistics} = info;


  return (
    <div className='p-2 m-2 w-72 shadow-lg '>
      <img className='rounded-lg' alt='thumbnail' src={snippet?.thumbnails?.medium.url}/>
    <ul>
        <li className='font-bold py-2'>{snippet?.title}</li>
        <li>{snippet?.channelTitle}</li>
        <li>{statistics?.viewCount} views</li>
    </ul>
    </div>
  );
};

export const AdVideoCard = ({info}) =>{
  return(
    <div className='p-1 m-1 border border-red-900'>
      <VideoCard info={info}/>
    </div>
  );
}; 

export default VideoCard
