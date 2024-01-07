import React, { useState, useEffect } from 'react';
import { RiCloseCircleLine } from "react-icons/ri";


const ShowTask = ({id, taskId, task}) => {

    const [list, setList] = useState([]);
    

    useEffect( () => {
        setList(Object.entries(task).filter(([key]) => !['_id', '__v'].includes(key)).map(([key, value]) => (
            <div key={key}>
                <p className='text-xl font-bold mt-4 mb-1'>{key}</p>
                <p className='bg-black p-2 rounded-3 max-h-20 overflow-y-auto'>{value}</p>
            </div>
          )));
    }, [task])

  return (
    <>
        <div className="modal fade modal-parent" id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content taskModal__content">
                    <div className="modal-header border-none">
                        <h4 className="text-xl font-bold " id="staticBackdropLabel">{'Task Details'}</h4>
                        <button type="button" className='text-2xl' data-bs-dismiss="modal" aria-label="Close">
                            <RiCloseCircleLine />
                        </button>
                    </div>
                    <div className='modal-body taskModal__body'>
                        {list}
                    </div>
                    <div className="modal-footer border-none">
                        <br />
                        <button type="button" className="btn bg-gray-500 btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ShowTask