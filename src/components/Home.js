import React from 'react';

function Home(props) {
  const handleChange = () => {};

  return (
    <>
      <div className='container text-center mt-3'>
        <h1>To Do List</h1>
        <div className='row'>
          <div className='mb-3 col-md-9'>
            <textarea
              className='form-control'
              id='exampleFormControlTextarea1'
              rows='1'
              placeholder='Add something to list'
              onChange={handleChange}
            ></textarea>
          </div>
          <div className='col-md-3'>
            <button className='btn'>
              <i className='fa-solid fa-plus fa-2x'></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
