import React, { useEffect, useState } from 'react'

const InputElement = ({label, type, disable, val, taskDetails }) => {
    const [inpval, setInpVal] = useState(val);
    useEffect( () => {

        taskDetails.setForm({
            ...taskDetails.form,
            [label]: inpval,
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inpval]);
  return (
    <>
        <div className="mb-3">
            <label className="form-label font-semibold">{label + '*'}</label>
            <div className="input-group">
                { type === 'textarea' && (
                    <textarea onChange={(e)=>{setInpVal(e.currentTarget.value)}} value={inpval} disabled={disable} className="form-control" placeholder="eg: something here" id="floatingTextarea" autoComplete="off" ></textarea>
                )}

                { type === 'text' && (
                    <input onChange={(e)=>{setInpVal(e.currentTarget.value)}} value={inpval} disabled={disable} type={type} className="form-control" placeholder="eg: Something here" id="basic-url" aria-describedby="basic-addon3 basic-addon4" autoComplete="off" />
                )}

                { type === 'date' && (
                    <input onChange={(e)=>{setInpVal(e.currentTarget.value)}} value={inpval} disabled={disable} type={type} id="basic-url" aria-describedby="basic-addon3 basic-addon4"  name="trip-start"  min="2023-01-01" max="2024-12-31" autoComplete="off"/>
                )}


                { type ==='select' && label === 'Priority' && (
                    <div className="form-floating select">
                        <select onChange={(e)=>{setInpVal(e.currentTarget.value)}} value={inpval} disabled={disable} className="form-select" id="floatingSelect" aria-label="Floating label select example" autoComplete="off"> 
                            <option value="High">High</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>
                )}

                { type ==='select' && label === 'Status' && (
                    <div className="form-floating select">
                        <select onChange={(e)=>{setInpVal(e.currentTarget.value)}} value={inpval} disabled={disable} className="form-select" id="floatingSelect" aria-label="Floating label select example" autoComplete="off"> 
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