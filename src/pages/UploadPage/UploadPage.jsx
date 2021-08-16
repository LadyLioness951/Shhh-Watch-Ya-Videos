import * as uploadsAPI from '../../utilities/uploads-api';
import { useState, useEffect, useRef } from 'react';
import './UploadPage.css';

export default function UploadPage() {
    const [title, setTitle] = useState('');
    const [categories, setCategories] = useState([]);
    const [uploadCategories, setUploadCategories] = useState([]);
    // Use a ref prop on the <input> in the JSX to
    // create a reference to the <input>, i.e.,
    // inputRef.current will be the <input> DOM element
    const fileInputRef = useRef();
  
    // Fetch existing uploaded photos after first render
    // Photos will be sorted in the controller with the most recent first
    useEffect(function() {
      async function fetchCategories() {
        const categories = await uploadsAPI.getCategories();
        setCategories(categories);
      }
      fetchCategories();
    }, []);
  
    /*--- Event Handlers ---*/
  
    async function handleUpload() {
      // Use FormData object to send the inputs in the fetch request
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_a_file
      const formData = new FormData();
      formData.append('title', title);
      formData.append('upload', fileInputRef.current.files[0]);
      formData.append('categories', uploadCategories)
      const newUpload = await uploadsAPI.upload(formData);
      // setUploads([newUpload, ...uploads]);
      // Clear the description and file inputs
      setTitle('');
      fileInputRef.current.value = '';
    }

    function handleCategories(evt){
      setUploadCategories(Array.from(evt.target.selectedOptions, (item) => item.value))
    }

    return (
        <div>
            <section className="flex-ctr-ctr">
                <input type="file" ref={fileInputRef} />
                Title: <input value={title} onChange={(evt) => setTitle(evt.target.value)} />
                <select name="categories" multiple onChange={handleCategories}>
                  {
                    categories.map((category) => (
                      <option value={category._id}>{category.name}</option>
                    ))
                  }
                </select>

                <button onClick={handleUpload}>Upload Video</button>
            </section>
        </div>
    )
}