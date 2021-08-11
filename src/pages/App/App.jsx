import * as uploadsAPI from '../../utilities/uploads-api';
import { useState, useEffect, useRef } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import Home from '../Home/Home'
import LoginForm from '../../components/LoginForm/LoginForm';
import NavBar from '../../components/NavBar/NavBar';
import VideoCard from '../../components/VideoCard/VideoCard';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
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
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      <Switch>
        <Route path="/signup">
          <AuthPage setUser={setUser} />
        </Route>
        <Route path="/login">
          <LoginForm setUser={setUser} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Redirect to="/" />
      </Switch>
      <section className="flex-ctr-ctr">
        <input type="file" ref={fileInputRef} />
        <input value={title} onChange={(evt) => setTitle(evt.target.value)} placeholder="Video Title" />
        <button onClick={handleUpload}>Upload Video</button>
      </section>
      <section>
        {uploads.map(v => <VideoCard upload={v} key={v._id} />)}
      </section>
    </main>
  );
}