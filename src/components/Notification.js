import React from 'react';
import '../style.css';

export default function Notification() {

  document.title = "Linkwitch - Notifications";
  return (
    <>
      <section id='notification'>
        <div className='container'>
          <div className='box box1'>
            <h5 style={{margin:'1rem 0.5rem'}}>Manage Your Notifications</h5>
            <p className='nav-links'>View Settings</p>
          </div>

          <div className='box box2'>
            <div className='card'>
              {/* 1st notification */}
              <div className='up'>
                    <img src='/imgs/warren.jpg' alt='img' height={50} width={50} style={{borderRadius:'50%', float:'left'}}/>
                      <div className='mid' style={{marginLeft:'10px'}}>
                        <span className='highlight post-name'>Warren Buffet</span>
                        &nbsp;
                        <span className='degree'>posted: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ut aliquam praesentium nemo sint tempore, sequi quam provident distinctio, laboriosam voluptatum eum fugiat...</span>
                      </div>
                </div>
                <hr/>
              {/* 2nd notification */}
              <div className='up'>
                    <img src='/imgs/charlie.jpg' alt='img' height={50} width={50} style={{borderRadius:'50%', float:'left'}}/>
                      <div className='mid' style={{marginLeft:'10px'}}>
                        <span className='highlight post-name'>Charlie Munger</span>
                        &nbsp;
                        <span className='degree'>posted: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ut aliquam praesentium nemo sint tempore, sequi quam provident distinctio, laboriosam voluptatum eum fugiatLorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ut aliquam praesentium nemo sint tempore, sequi quam provident distinctio, laboriosam voluptatum eum fugiatLorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ut aliquam praesentium nemo sint tempore, sequi quam provident distinctio, laboriosam voluptatum eum fugiat...</span>
                      </div>
              </div>
              <hr/>


              {/* 3rd notification */}
              <div className='up'>
                    <img src='/imgs/charlie.jpg' alt='img' height={50} width={50} style={{borderRadius:'50%', float:'left'}}/>
                      <div className='mid' style={{marginLeft:'10px'}}>
                        <span className='highlight post-name'>Charlie Munger</span>
                        &nbsp;
                        <span className='degree'>Liked your post</span>
                      </div>
              </div>
              <hr/>


              {/* 4th notification */}
              <div className='up'>
                    <img src='/imgs/virat.jpg' alt='img' height={50} width={50} style={{borderRadius:'50%', float:'left'}}/>
                      <div className='mid' style={{marginLeft:'10px'}}>
                        <span className='highlight post-name'>Virat Kohli</span>
                        &nbsp;
                        <span className='degree'>Commented on <span className='nav-links'>Mahendra Singh Dohni</span>'s Post: Happy Birthday Mahi Bhai</span>
                      </div>
              </div>
              <hr/>

              {/* 5th notification */}
              <div className='up'>
                    <img src='/imgs/mahi.jpg' alt='img' height={50} width={50} style={{borderRadius:'50%', float:'left'}}/>
                      <div className='mid' style={{marginLeft:'10px'}}>
                        <span className='highlight post-name'>Mahendra Singh Dohn</span>
                        &nbsp;
                        <span className='degree'>Liked your post</span>
                      </div>
              </div>
              <hr/>

              {/* 6th notification */}
              {/* notification */}
            <div className='up'>
                    <img src='/imgs/virat.jpg' alt='img' height={50} width={50} style={{borderRadius:'50%', float:'left'}}/>
                      <div className='mid' style={{marginLeft:'10px'}}>
                        <span className='highlight post-name'>Virat Kohli</span>
                        &nbsp;
                        <span className='degree'>posted: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel numquam aliquam dolorum itaque accusantium quisquam veritatis debitis ratione suscipit voluptatem! Nulla quae ut consequuntur praesentium pariatur nostrum quas blanditiis facere, autem ex rerum obcaecati veniam laboriosam harum voluptates tempora totam voluptatibus, voluptas reprehenderit! Deserunt earum quam reiciendis fuga omnis debitis.</span>
                      </div>
              </div>
              <hr/>
              {/* 1st notification */}
              <div className='up'>
                    <img src='/imgs/warren.jpg' alt='img' height={50} width={50} style={{borderRadius:'50%', float:'left'}}/>
                      <div className='mid' style={{marginLeft:'10px'}}>
                        <span className='highlight post-name'>Warren Buffet</span>
                        &nbsp;
                        <span className='degree'>posted: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ut aliquam praesentium nemo sint tempore, sequi quam provident distinctio, laboriosam voluptatum eum fugiat...</span>
                      </div>
                </div>
                <hr/>
              {/* 2nd notification */}
              <div className='up'>
                    <img src='/imgs/charlie.jpg' alt='img' height={50} width={50} style={{borderRadius:'50%', float:'left'}}/>
                      <div className='mid' style={{marginLeft:'10px'}}>
                        <span className='highlight post-name'>Charlie Munger</span>
                        &nbsp;
                        <span className='degree'>posted: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ut aliquam praesentium nemo sint tempore, sequi quam provident distinctio, laboriosam voluptatum eum fugiatLorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ut aliquam praesentium nemo sint tempore, sequi quam provident distinctio, laboriosam voluptatum eum fugiatLorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ut aliquam praesentium nemo sint tempore, sequi quam provident distinctio, laboriosam voluptatum eum fugiat...</span>
                      </div>
              </div>
              <hr/>


              {/* 3rd notification */}
              <div className='up'>
                    <img src='/imgs/charlie.jpg' alt='img' height={50} width={50} style={{borderRadius:'50%', float:'left'}}/>
                      <div className='mid' style={{marginLeft:'10px'}}>
                        <span className='highlight post-name'>Charlie Munger</span>
                        &nbsp;
                        <span className='degree'>Liked your post</span>
                      </div>
              </div>
              <hr/>


              {/* 4th notification */}
              <div className='up'>
                    <img src='/imgs/virat.jpg' alt='img' height={50} width={50} style={{borderRadius:'50%', float:'left'}}/>
                      <div className='mid' style={{marginLeft:'10px'}}>
                        <span className='highlight post-name'>Virat Kohli</span>
                        &nbsp;
                        <span className='degree'>Commented on <span className='nav-links'>Mahendra Singh Dohni</span>'s Post: Happy Birthday Mahi Bhai</span>
                      </div>
              </div>
              <hr/>

              {/* 5th notification */}
              <div className='up'>
                    <img src='/imgs/mahi.jpg' alt='img' height={50} width={50} style={{borderRadius:'50%', float:'left'}}/>
                      <div className='mid' style={{marginLeft:'10px'}}>
                        <span className='highlight post-name'>Mahendra Singh Dohn</span>
                        &nbsp;
                        <span className='degree'>Liked your post</span>
                      </div>
              </div>
              <hr/>

              {/* 6th notification */}
              {/* notification */}
            <div className='up'>
                    <img src='/imgs/virat.jpg' alt='img' height={50} width={50} style={{borderRadius:'50%', float:'left'}}/>
                      <div className='mid' style={{marginLeft:'10px'}}>
                        <span className='highlight post-name'>Virat Kohli</span>
                        &nbsp;
                        <span className='degree'>posted: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel numquam aliquam dolorum itaque accusantium quisquam veritatis debitis ratione suscipit voluptatem! Nulla quae ut consequuntur praesentium pariatur nostrum quas blanditiis facere, autem ex rerum obcaecati veniam laboriosam harum voluptates tempora totam voluptatibus, voluptas reprehenderit! Deserunt earum quam reiciendis fuga omnis debitis.</span>
                      </div>
              </div>
              <hr/>
              {/* 1st notification */}
              <div className='up'>
                    <img src='/imgs/warren.jpg' alt='img' height={50} width={50} style={{borderRadius:'50%', float:'left'}}/>
                      <div className='mid' style={{marginLeft:'10px'}}>
                        <span className='highlight post-name'>Warren Buffet</span>
                        &nbsp;
                        <span className='degree'>posted: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ut aliquam praesentium nemo sint tempore, sequi quam provident distinctio, laboriosam voluptatum eum fugiat...</span>
                      </div>
                </div>
                <hr/>
              {/* 2nd notification */}
              <div className='up'>
                    <img src='/imgs/charlie.jpg' alt='img' height={50} width={50} style={{borderRadius:'50%', float:'left'}}/>
                      <div className='mid' style={{marginLeft:'10px'}}>
                        <span className='highlight post-name'>Charlie Munger</span>
                        &nbsp;
                        <span className='degree'>posted: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ut aliquam praesentium nemo sint tempore, sequi quam provident distinctio, laboriosam voluptatum eum fugiatLorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ut aliquam praesentium nemo sint tempore, sequi quam provident distinctio, laboriosam voluptatum eum fugiatLorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ut aliquam praesentium nemo sint tempore, sequi quam provident distinctio, laboriosam voluptatum eum fugiat...</span>
                      </div>
              </div>
              <hr/>


              {/* 3rd notification */}
              <div className='up'>
                    <img src='/imgs/charlie.jpg' alt='img' height={50} width={50} style={{borderRadius:'50%', float:'left'}}/>
                      <div className='mid' style={{marginLeft:'10px'}}>
                        <span className='highlight post-name'>Charlie Munger</span>
                        &nbsp;
                        <span className='degree'>Liked your post</span>
                      </div>
              </div>
              <hr/>


              {/* 4th notification */}
              <div className='up'>
                    <img src='/imgs/virat.jpg' alt='img' height={50} width={50} style={{borderRadius:'50%', float:'left'}}/>
                      <div className='mid' style={{marginLeft:'10px'}}>
                        <span className='highlight post-name'>Virat Kohli</span>
                        &nbsp;
                        <span className='degree'>Commented on <span className='nav-links'>Mahendra Singh Dohni</span>'s Post: Happy Birthday Mahi Bhai</span>
                      </div>
              </div>
              <hr/>

              {/* 5th notification */}
              <div className='up'>
                    <img src='/imgs/mahi.jpg' alt='img' height={50} width={50} style={{borderRadius:'50%', float:'left'}}/>
                      <div className='mid' style={{marginLeft:'10px'}}>
                        <span className='highlight post-name'>Mahendra Singh Dohn</span>
                        &nbsp;
                        <span className='degree'>Liked your post</span>
                      </div>
              </div>
              <hr/>

              {/* 6th notification */}
              {/* notification */}
            <div className='up'>
                    <img src='/imgs/virat.jpg' alt='img' height={50} width={50} style={{borderRadius:'50%', float:'left'}}/>
                      <div className='mid' style={{marginLeft:'10px'}}>
                        <span className='highlight post-name'>Virat Kohli</span>
                        &nbsp;
                        <span className='degree'>posted: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel numquam aliquam dolorum itaque accusantium quisquam veritatis debitis ratione suscipit voluptatem! Nulla quae ut consequuntur praesentium pariatur nostrum quas blanditiis facere, autem ex rerum obcaecati veniam laboriosam harum voluptates tempora totam voluptatibus, voluptas reprehenderit! Deserunt earum quam reiciendis fuga omnis debitis.</span>
                      </div>
              </div>
              <hr/>
              {/* 1st notification */}
              <div className='up'>
                    <img src='/imgs/warren.jpg' alt='img' height={50} width={50} style={{borderRadius:'50%', float:'left'}}/>
                      <div className='mid' style={{marginLeft:'10px'}}>
                        <span className='highlight post-name'>Warren Buffet</span>
                        &nbsp;
                        <span className='degree'>posted: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ut aliquam praesentium nemo sint tempore, sequi quam provident distinctio, laboriosam voluptatum eum fugiat...</span>
                      </div>
                </div>
                <hr/>
              {/* 2nd notification */}
              <div className='up'>
                    <img src='/imgs/charlie.jpg' alt='img' height={50} width={50} style={{borderRadius:'50%', float:'left'}}/>
                      <div className='mid' style={{marginLeft:'10px'}}>
                        <span className='highlight post-name'>Charlie Munger</span>
                        &nbsp;
                        <span className='degree'>posted: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ut aliquam praesentium nemo sint tempore, sequi quam provident distinctio, laboriosam voluptatum eum fugiatLorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ut aliquam praesentium nemo sint tempore, sequi quam provident distinctio, laboriosam voluptatum eum fugiatLorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ut aliquam praesentium nemo sint tempore, sequi quam provident distinctio, laboriosam voluptatum eum fugiat...</span>
                      </div>
              </div>
              <hr/>


              {/* 3rd notification */}
              <div className='up'>
                    <img src='/imgs/charlie.jpg' alt='img' height={50} width={50} style={{borderRadius:'50%', float:'left'}}/>
                      <div className='mid' style={{marginLeft:'10px'}}>
                        <span className='highlight post-name'>Charlie Munger</span>
                        &nbsp;
                        <span className='degree'>Liked your post</span>
                      </div>
              </div>
              <hr/>


              {/* 4th notification */}
              <div className='up'>
                    <img src='/imgs/virat.jpg' alt='img' height={50} width={50} style={{borderRadius:'50%', float:'left'}}/>
                      <div className='mid' style={{marginLeft:'10px'}}>
                        <span className='highlight post-name'>Virat Kohli</span>
                        &nbsp;
                        <span className='degree'>Commented on <span className='nav-links'>Mahendra Singh Dohni</span>'s Post: Happy Birthday Mahi Bhai</span>
                      </div>
              </div>
              <hr/>

              {/* 5th notification */}
              <div className='up'>
                    <img src='/imgs/mahi.jpg' alt='img' height={50} width={50} style={{borderRadius:'50%', float:'left'}}/>
                      <div className='mid' style={{marginLeft:'10px'}}>
                        <span className='highlight post-name'>Mahendra Singh Dohn</span>
                        &nbsp;
                        <span className='degree'>Liked your post</span>
                      </div>
              </div>
              <hr/>

              {/* 6th notification */}
              {/* notification */}
            <div className='up'>
                    <img src='/imgs/virat.jpg' alt='img' height={50} width={50} style={{borderRadius:'50%', float:'left'}}/>
                      <div className='mid' style={{marginLeft:'10px'}}>
                        <span className='highlight post-name'>Virat Kohli</span>
                        &nbsp;
                        <span className='degree'>posted: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel numquam aliquam dolorum itaque accusantium quisquam veritatis debitis ratione suscipit voluptatem! Nulla quae ut consequuntur praesentium pariatur nostrum quas blanditiis facere, autem ex rerum obcaecati veniam laboriosam harum voluptates tempora totam voluptatibus, voluptas reprehenderit! Deserunt earum quam reiciendis fuga omnis debitis.</span>
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
