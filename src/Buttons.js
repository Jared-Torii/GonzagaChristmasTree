import React from 'react'
import './Buttons.css'

function Buttons() {
    return (
        <div className='buttongroup'>
            
                <button className='b1' onClick={f1}> Button 1 </button>
                <button className='b2' onClick={f2}> Button 2 </button>
                <button className='b3' onClick={f3}> Button 3 </button>
                <button className='b4' onClick={f4}> Button 4 </button>
            
        </div>
    )


    function f1(){
        alert('test 1');
    }

    function f2(){
        alert('test 2');
    }

    function f3(){
        alert('test 3');
    }

    function f4(){
        alert('test 4');
    }
}
export default Buttons



/**
 * important links
 * https://www.w3schools.com/howto/howto_css_more_button.asp
 * https://www.w3schools.com/howto/howto_js_fullscreen_overlay.asp
 */