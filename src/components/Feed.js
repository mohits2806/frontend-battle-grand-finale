import React from 'react';
import '../style.css';

export default function Feed() {

  document.title = "Feed | LinkWitch";

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


            {/* Post 1 */}
            <div className='card'>
              <div className='post'>
                <div className='up'>
                  <img src='/imgs/elon.jpg' alt='elon musk' height={50} width={50} style={{borderRadius:'50%', float:'left'}}/>
                    <div className='mid' style={{marginLeft:'10px'}}>
                      <span className='highlight post-name'>Elon Musk</span>
                      &nbsp;&#9679;&nbsp;
                      <span className='degree'>3rd+</span>
                      <p className='headline'>CEO @Tesla Motors</p>
                    </div>
                </div>
                <div className='post-title'>
                  <p>Elon Musk has announced a new project that will revolutionize the world</p>
                </div>
                    <img src='/imgs/post1.jpg' alt='post' width={'100%'}/>
                    <div className='down'>
                      <div className='count'>
                        <img src='/imgs/like-count.png' alt='likes' height={20} width={20} style={{borderRadius:'50%'}}/>10470
                        &nbsp;&#9679;&nbsp;
                        <span style={{position:'relative', right:'0'}}>242 comments</span>
                      </div>
                      <hr/>
                      <div className='interaction'>
                        <img src='/imgs/like.png' alt='like' height={20} width={20}/>
                        &nbsp;<span className='nav-links'>Like</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src='/imgs/comment.png' alt='comment' height={20} width={20}/>
                        &nbsp;<span className='nav-links'>Comment</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src='/imgs/share.png' alt='share' height={20} width={20}/>
                        &nbsp;<span className='nav-links'>Share</span>
                      </div>
                    </div>
              </div>
            </div>



            {/* Post 2 */}
            <div className='card'>
              <div className='post'>
                <div className='up'>
                  <img src='/imgs/warren.jpg' alt='img' height={50} width={50} style={{borderRadius:'50%', float:'left'}}/>
                    <div className='mid' style={{marginLeft:'10px'}}>
                      <span className='highlight post-name'>Warren Buffet</span>
                      &nbsp;&#9679;&nbsp;
                      <span className='degree'>2nd+</span>
                      <p className='headline'>Founder @Berkshire Hathway INC.</p>
                    </div>
                </div>
                <div className='post-title'>
                  <p>Warren Buffet has announced a new project that will revolutionize the world</p>
                </div>
                    <img src='/imgs/post2.jpg' alt='post' width={'100%'}/>
                    <div className='down'>
                      <div className='count'>
                        <img src='/imgs/like-count.png' alt='likes' height={20} width={20} style={{borderRadius:'50%'}}/>1039
                        &nbsp;&#9679;&nbsp;
                        <span style={{position:'relative', right:'0'}}>22 comments</span>
                      </div>
                      <hr/>
                      <div className='interaction'>
                        <img src='/imgs/like.png' alt='like' height={20} width={20}/>
                        &nbsp;<span className='nav-links'>Like</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src='/imgs/comment.png' alt='comment' height={20} width={20}/>
                        &nbsp;<span className='nav-links'>Comment</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src='/imgs/share.png' alt='share' height={20} width={20}/>
                        &nbsp;<span className='nav-links'>Share</span>
                      </div>
                    </div>
              </div>
            </div>



            {/* Post 3 */}
            <div className='card'>
              <div className='post'>
                <div className='up'>
                  <img src='/imgs/charlie.jpg' alt='img' height={50} width={50} style={{borderRadius:'50%', float:'left'}}/>
                    <div className='mid' style={{marginLeft:'10px'}}>
                      <span className='highlight post-name'>Charlie Munger</span>
                      &nbsp;&#9679;&nbsp;
                      <span className='degree'>1st</span>
                      <p className='headline'>Co-Founder @Berkshire Hathway INC.</p>
                    </div>
                </div>
                <div className='post-title'>
                  <p>Charlie Munger has announced a new project that will revolutionize the world</p>
                </div>
                    <img src='/imgs/post3.jpg' alt='post' width={'100%'}/>
                    <div className='down'>
                      <div className='count'>
                        <img src='/imgs/like-count.png' alt='likes' height={20} width={20} style={{borderRadius:'50%'}}/>12449
                        &nbsp;&#9679;&nbsp;
                        <span style={{position:'relative', right:'0'}}>2122 comments</span>
                      </div>
                      <hr/>
                      <div className='interaction'>
                        <img src='/imgs/like.png' alt='like' height={20} width={20}/>
                        &nbsp;<span className='nav-links'>Like</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src='/imgs/comment.png' alt='comment' height={20} width={20}/>
                        &nbsp;<span className='nav-links'>Comment</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src='/imgs/share.png' alt='share' height={20} width={20}/>
                        &nbsp;<span className='nav-links'>Share</span>
                      </div>
                    </div>
              </div>
            </div>



            {/* Post 4 */}
            <div className='card'>
              <div className='post'>
                <div className='up'>
                  <img src='/imgs/virat.jpg' alt='img' height={50} width={50} style={{borderRadius:'50%', float:'left'}}/>
                    <div className='mid' style={{marginLeft:'10px'}}>
                      <span className='highlight post-name'>Virat Kohli</span>
                      &nbsp;&#9679;&nbsp;
                      <span className='degree'>1st</span>
                      <p className='headline'>Captain @Royal Challengers Banglore</p>
                    </div>
                </div>
                <div className='post-title'>
                  <p>Virat Kohli has announced a new project that will revolutionize the world</p>
                </div>
                    <img src='/imgs/post4.jpg' alt='post' width={'100%'}/>
                    <div className='down'>
                      <div className='count'>
                        <img src='/imgs/like-count.png' alt='likes' height={20} width={20} style={{borderRadius:'50%'}}/>121449
                        &nbsp;&#9679;&nbsp;
                        <span style={{position:'relative', right:'0'}}>2142 comments</span>
                      </div>
                      <hr/>
                      <div className='interaction'>
                        <img src='/imgs/like.png' alt='like' height={20} width={20}/>
                        &nbsp;<span className='nav-links'>Like</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src='/imgs/comment.png' alt='comment' height={20} width={20}/>
                        &nbsp;<span className='nav-links'>Comment</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src='/imgs/share.png' alt='share' height={20} width={20}/>
                        &nbsp;<span className='nav-links'>Share</span>
                      </div>
                    </div>
              </div>
            </div>



            {/* Post 5 */}
            <div className='card'>
              <div className='post'>
                <div className='up'>
                  <img src='/imgs/mahi.jpg' alt='img' height={50} width={50} style={{borderRadius:'50%', float:'left'}}/>
                    <div className='mid' style={{marginLeft:'10px'}}>
                      <span className='highlight post-name'>Mahendra Singh Dhoni</span>
                      &nbsp;&#9679;&nbsp;
                      <span className='degree'>2nd</span>
                      <p className='headline'>Cricketer</p>
                    </div>
                </div>
                <div className='post-title'>
                  <p>Thala for a reason</p>
                </div>
                    <img src='/imgs/post5.jpg' alt='post' width={'100%'}/>
                    <div className='down'>
                      <div className='count'>
                        <img src='/imgs/like-count.png' alt='likes' height={20} width={20} style={{borderRadius:'50%'}}/>21749
                        &nbsp;&#9679;&nbsp;
                        <span style={{position:'relative', right:'0'}}>232 comments</span>
                      </div>
                      <hr/>
                      <div className='interaction'>
                        <img src='/imgs/like.png' alt='like' height={20} width={20}/>
                        &nbsp;<span className='nav-links'>Like</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src='/imgs/comment.png' alt='comment' height={20} width={20}/>
                        &nbsp;<span className='nav-links'>Comment</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src='/imgs/share.png' alt='share' height={20} width={20}/>
                        &nbsp;<span className='nav-links'>Share</span>
                      </div>
                    </div>
              </div>
            </div>
          </div>

          <div className='box box3'>
            <p>LinkedIn Corporation © 2024</p>
            <p>All Rights Reserved</p>
          </div>
        </div>
      </section>
    </>
  )
}
