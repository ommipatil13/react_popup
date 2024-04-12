import React from 'react';

const Modal = ({ open, close }) => {
    return (

        <div >

            {open && < div className='modalContainer' >
                <div className='modal'>
                    <div className='head'>
                        <h2>Pop Up</h2>
                        <button className='btn' onClick={close}>&times;</button>
                    </div>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <button >ok</button>
                </div>


            </div >}

        </div>


    )
}

export default Modal