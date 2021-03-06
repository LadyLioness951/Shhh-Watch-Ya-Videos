import * as uploadsAPI from '../../utilities/uploads-api';
import { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import './UploadPage.css';

export default function UploadPage() {
    const [title, setTitle] = useState('');
    const [categories, setCategories] = useState([]);
    const [uploadCategories, setUploadCategories] = useState([]);
    const [hashtags, setHashtags] = useState([]);
    const [uploadHashtags, setUploadHashtags] = useState([]);
    const history = useHistory();
    // Use a ref prop on the <input> in the JSX to
    // create a reference to the <input>, i.e.,
    // inputRef.current will be the <input> DOM element
    const fileInputRef = useRef();
  
    // Fetch existing uploaded photos after first render
    // Photos will be sorted in the controller with the most recent first
    useEffect(function() {
      async function fetchCategories() {
        const categories = await uploadsAPI.getCategories();
        const hashtags = await uploadsAPI.getHashtags();
        setCategories(categories);
        setHashtags(hashtags);
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
      formData.append('categories', uploadCategories);
      formData.append('hashtags', uploadHashtags);
      const newUpload = await uploadsAPI.upload(formData);
      // setUploads([newUpload, ...uploads]);
      // Clear the description and file inputs
      setTitle('');
      fileInputRef.current.value = '';
      history.push('/home');
    }

    function handleCategories(evt){
      setUploadCategories(Array.from(evt.target.selectedOptions, (item) => item.value))
    }

    function handleHashtags(evt){
      setUploadHashtags(Array.from(evt.target.selectedOptions, (item) => item.value))
    }

    return (
        <div className="uploadPage">
            <section className="flex-ctr-ctr">
                <input className="file" type="file" ref={fileInputRef} />
                <div className="title">
                  Title: <input value={title} onChange={(evt) => setTitle(evt.target.value)} />
                </div>
                <div className="cat">
                  <div>
                    <h3 className="description"><span><strong><em>To select multiple categories:</em></strong></span></h3>
                    <p><span><strong><u>On Mac:</u></strong></span>&nbsp;Hold down command and select the categories you want.</p> 
                    <p><span><strong><u>On Windows:</u></strong></span>&nbsp;Hold down shift and select the 1st and last category if you want multiple in a row,
                                otherwise hold down control and select the categories you want.</p> 
                    <p><span><strong><u>On Linux:</u></strong></span>&nbsp;Hold down control and select the categories you want.</p>
                  </div>
                  <label> Categories: 
                    <select name="categories" multiple onChange={handleCategories}>
                      {
                        categories.map((category) => (
                          <option value={category._id}>{category.name}</option>
                        ))
                      }
                    </select>
                  </label>
                  <label> Hashtags: 
                    <select name="hashtags" multiple onChange={handleHashtags}>
                      {
                        hashtags.map((hashtag) => (
                          <option value={hashtag._id}>{hashtag.name}</option>
                        ))
                      }
                    </select>
                  </label>
                </div>
                <button className="btn" onClick={handleUpload}>Upload Video</button>
            </section>
        </div>
    )
}