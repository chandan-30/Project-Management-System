import React from 'react'

const InputElement = ({label, type, disable, val}) => {
  return (
    <>
        <div className="mb-3">
            <label className="form-label font-semibold">{label}</label>
            <div className="input-group">
                { type === 'textarea' && (
                    <textarea onChange={()=>{}} value={val} disabled={disable} className="form-control" placeholder="eg: something here" id="floatingTextarea"></textarea>
                )}

                { type === 'text' && (
                    <input onChange={()=>{}}  value={val} disabled={disable} type={type} className="form-control" placeholder="eg: Something here" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                )}

                { type === 'date' && (
                    <input onChange={()=>{}}  value={val} disabled={disable} type={type} id="basic-url" aria-describedby="basic-addon3 basic-addon4"  name="trip-start"  min="2023-01-01" max="2024-12-31"/>
                )}


                { type ==='select' && label === 'Priority' && (
                    <div className="form-floating select">
                        <select onChange={()=>{}}  value={val} disabled={disable} className="form-select" id="floatingSelect" aria-label="Floating label select example"> 
                            <option value="High">High</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>
                )}

                { type ==='select' && label === 'Status' && (
                    <div className="form-floating select">
                        <select onChange={()=>{}}  value={val} disabled={disable} className="form-select" id="floatingSelect" aria-label="Floating label select example"> 
                            <option value="Complete">Complete</option>
                            <option value="Incomplete">Incomplete</option>
                        </select>
                    </div>
                )}
                
            </div>
        </div>
    </>
  )
}

export default InputElement