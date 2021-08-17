import * as uploadsAPI from '../../utilities/uploads-api';
import { useState } from 'react';
// import './Comments.css';

export default function Comment({
    thisUpload, setThisUpload}) {
        const [formData, setFormData] = useState('');

    async function handleSubmit(evt) {
        evt.preventDefault();
        const updatedUpload = await uploadsAPI.createComments({ content: formData}, thisUpload._id);
        setThisUpload(updatedUpload);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={(evt) => setFormData(evt.target.value)} 
                type="text"
                name="content"
                value={formData}
            />
            <button type='submit'>Submit Comment</button>
        </form>
    )
}

