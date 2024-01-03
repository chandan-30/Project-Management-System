import React from 'react'

const InputElement = ({label, type, disable}) => {
  return (
    <>
        <div className="mb-3">
            <label className="form-label font-semibold">{label}</label>
            <div className="input-group">
                { type === 'textarea' && (
                    <textarea disabled={disable} className="form-control" placeholder="eg: something here" id="floatingTextarea"></textarea>
                )}

                { type === 'text' && (
                    <input disabled={disable} type={type} className="form-control" placeholder="eg: Something here" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                )}

                { type === 'date' && (
                    <input disabled={disable} type={type} id="basic-url" aria-describedby="basic-addon3 basic-addon4"  name="trip-start"  min="2023-01-01" max="2024-12-31"/>
                )}

                { type === 'radio' && (
                    <>
                    <div className="form-check form-check-inline">
                        <input disabled={disable} className="form-check-input" type="radio" id="inlineCheckbox1" name="priority" />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">High</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input disabled={disable} className="form-check-input" type="radio" id="inlineCheckbox1" name="priority"  />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">Low</label>
                    </div>
                    </>
                )}

                { type==='select' && (
                    <div className="form-floating select">
                        <select disabled={disable} className="form-select" id="floatingSelect" aria-label="Floating label select example"> 
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