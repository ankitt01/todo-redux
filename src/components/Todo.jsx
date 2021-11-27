import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {addTodo, deleteTodo, removeTodo} from '../actions'
export const Todo = () => {
    const [inputData, setInputData] = useState('')
    const dispatch = useDispatch()
    const list = useSelector((state) => state.list)
    return (
        <div>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                    <figcaption>Add your list here ✌</figcaption>
                    </figure>

                    <div className="addItems">
                        <input type="text" placeholder="✍ Add Items " value={inputData} onChange={(e) => setInputData(e.target.value)}/>
                        <i className="fa fa-plus add-btn" onClick={() => dispatch(addTodo(inputData), setInputData(""))} />
                    </div>

                    <div className="showItems">
                        {
                            list.map((ele) => {
                                return (
                                    <div className="eachItem" key={ele.id}>
                                        <h3>{ele.data}</h3>
                                        <div className="todo-btn">
                                            <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => dispatch(deleteTodo(ele.id))} />
                                        </div>
                                    </div>
                                )
                                
                            })
                        }
                        
                    </div>
                </div>
                </div>
        </div>
    )
}
