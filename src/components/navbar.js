import React from 'react';
import './navbar.css';
import logo from '../pictures/logo.png';

function Navbar(props) {

    const handleMode=(e)=>{
        if(props.mode==="light"){
            props.setMode("dark");
        } else {
            props.setMode("light");
        }
    }

  return (
    <div className='navbar'>
      <div className="firstNav">
        <img src={logo} alt="" />
        Sudoku Solver
      </div>
      <div className="secondNav">
        <div className="radio-input">
            <label className="label">
                <input type="radio" name="radio" />
                <span className="check" onClick={(e)=>props.setMatrixSize(4)}></span>
                <p>4x4</p>
            </label>
            <label className="label">
                <input type="radio" name="radio" />
                <span className="check" onClick={(e)=>props.setMatrixSize(9)}></span>
                <p>9x9</p>
            </label>
        </div>
        <div class="sign">
          -by_A<span class="fast-flicker">n</span>ki<span class="flicker">t_K</span>umar
        </div>
      </div>
    </div>
  )
}

export default Navbar
