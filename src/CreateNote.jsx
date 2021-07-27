import React from 'react';
import './App.css';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';

const CreateNote = (props) => {

    const [note, setNote] = useState({
        title: '',
        content: '',

    });

    const InputEvent = (e) =>
    {

        const {name , value} = e.target;

setNote((pre) =>{

return {
    ...pre,
    [name] : value,
}
})
    }

    const addEvent = () => {

props.passNote(note);

setNote({
    title: '',
    content: '',

})

    }

    return (

        <>
            <div className="row d-flex justify-content-center mt-5">
                <div className="col-md-3 ">
                    <div className="card shadow-lg p-4">
                        <div className="note">
                       
                                <input type="text" name="title" onChange={InputEvent} value={note.title} placeholder="Title" />
                                <textarea className="mt-2" name="content" onChange={InputEvent} value={note.content} placeholder="write your note here">
                                </textarea>
                   
                        </div>
                    </div>
                    <button onClick={addEvent} className="addbtn mb-5"> <AddIcon /> </button>



                </div>
            </div>


        </>
    )


}
export default CreateNote;
