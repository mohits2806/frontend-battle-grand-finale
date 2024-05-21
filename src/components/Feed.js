import React from 'react';
import '../style.css';

export default function Feed() {

  document.title = "Linkwitch - A best social media app in the world";

  return (
    <>
      <section id="feed">
        <div className='container'>
          <div className='box box1'>
            <img id='cover-img' src="/imgs/cover-img.webp" alt='cover' height={50}/>
            <img id='pfp' src="/imgs/pfp.png" alt='pfp' height={70} width={70}/>
            <h2>John Doe</h2>
            <p>Full Stack Developer</p>
            <hr />
            <p>Profile Viewers: <span className='highlight'>207</span></p>
            <p>Post impressions: <span className='highlight'>367</span></p>
            <hr />
            <p className='nav-links'>Saved items</p>
          </div>

          <div className='box box2'>
            <div className='card'>
              <div className='up-card'>
                <img id='pfp' src="/imgs/pfp.png" alt='pfp' height={50} />
                <input id='start-post' type='text' placeholder='Start a Post' />
              </div>
              <div className='down-card'>
                <a href='/' className='nav-links'>Home</a>
                <a href='/' className='nav-links'>Media</a>
                <a href='/' className='nav-links'>Write a Article</a>
              </div>
            </div>
            <hr />
            <div className='card'>
              
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
