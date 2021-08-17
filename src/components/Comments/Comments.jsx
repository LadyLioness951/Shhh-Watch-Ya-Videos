import * as uploadsAPI from '../../utilities/uploads-api';
import { useState } from 'react';
// import './Comments.css';

export default function Comment({upload, setUpload}) {
    const [formData, setFormData] = useState('');

    async function handleSubmit(evt) {
        evt.preventDefault();
        const updatedUpload = await uploadsAPI.createComments({ content: formData}, upload._id);
        setUpload(updatedUpload);
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

