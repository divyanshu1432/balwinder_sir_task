import React from 'react';
import './App.css';

const Note = (props) => {

    const deleteNote = () => {

        props.DeleteItem(props.id);

    }

    return (
        <>
            <div>
        <div className="d-flex flex-row justify-content-center">
                        <div className="card w-50" > 
                        <div className="card-body">

<p>  {props.title} </p>
<p>  {props.content} </p>

<button className="button" onClick={deleteNote}> delete </button>

                      
                        
                        
</div>


                    </div>



                </div>


            </div>

        </>
    )
}
export default Note;