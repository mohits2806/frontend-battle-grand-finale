import React from 'react';
import '../style.css';

export default function Feed() {

  document.title = "Linkwitch - A best social media app in the world";

  return (
    <>
      <section id="feed">
        <div className='container'>
          <div className='box box1'>
            <img id='cover-img' src="/imgs/cover-img.webp" height={50}/>
            <img id='pfp' src="/imgs/pfp.png" height={50} width={50}/>
            <h2>John Doe</h2>
            <p>Full Stack Developer</p>
            <hr />
            <p>Profile Views: <span className='highlight'>207</span></p>
            <p>Post impressions: <span className='highlight'>367</span></p>
            <hr />
            <p className='nav-links'>Saved items</p>
          </div>


          <div className='box box2'>
            <div className='card'>
              <img src="/imgs/pfp.png" height={50} />
              <h2>Post Title</h2>
              <p>Post Description</p>
              <button>Read More</button>
            </div>
          </div>


          <div className='box box3'>
            hello
            <footer></footer>
          </div>
        </div>
      </section>
    </>
  )
}
