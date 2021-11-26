import React, {useState} from 'react'

export const Todo = () => {
    const [inputData, setInputData] = useState('')
    return (
        <div>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                    <figcaption>Add your list here ✌</figcaption>
                    </figure>

                    <div className="addItems">
                        <input type="text" placeholder="✍ Add Items " value={inputData} onChange={(e) => setInputData(e.target.value)}/>
                        <i className="fa fa-plus add-btn" onClick={() => {}} />
                    </div>
                </div>
                </div>
        </div>
    )
}
