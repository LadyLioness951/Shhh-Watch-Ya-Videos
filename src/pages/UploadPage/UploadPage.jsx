import * as uploadsAPI from '../../utilities/uploads-api';
import { useState, useEffect, useRef } from 'react';

export default function Profile() {
    const [title, setTitle] = useState('');
    const [uploads, setUploads] = useState([]);
    // Use a ref prop on the <input> in the JSX to
    // create a reference to the <input>, i.e.,
    // inputRef.current will be the <input> DOM element
    const fileInputRef = useRef();
  
    // Fetch existing uploaded photos after first render
    // Photos will be sorted in the controller with the most recent first
    useEffect(function() {
      uploadsAPI.getAll().then(uploads => setUploads(uploads));
    }, []);
  
    /*--- Event Handlers ---*/
  
    async function handleUpload() {
      // Use FormData object to send the inputs in the fetch request
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_a_file
      const formData = new FormData();
      formData.append('title', title);
      formData.append('upload', fileInputRef.current.files[0]);
      const newUpload = await uploadsAPI.upload(formData);
      setUploads([newUpload, ...uploads]);
      // Clear the description and file inputs
      setTitle('');
      fileInputRef.current.value = '';
    }
    return (
        <div>
            <section className="flex-ctr-ctr">
                <input type="file" ref={fileInputRef} />
                <input value={title} onChange={(evt) => setTitle(evt.target.value)} placeholder="Video Title" />
                <button onClick={handleUpload}>Upload Video</button>
            </section>
        </div>
    )
}