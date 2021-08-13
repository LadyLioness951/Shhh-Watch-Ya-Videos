import * as uploadsAPI from '../../utilities/uploads-api'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UploadCard from '../../components/UploadCard/UploadCard';

export default function Profile({ user, setUser }) {
    const [title, setTitle] = useState('');
    const [uploads, setUploads] = useState([]);

    useEffect(function () {
        uploadsAPI.getAll().then(uploads => setUploads(uploads));
    }, []);
    return (
        <div>
            <div></div>
            <h4></h4>
            <Link>Following</Link>
            <Link>Followers</Link>
            <Link>Likes</Link>
            <button>Edit Profile</button>
            <button><i className="fas fa-bookmark"></i></button>
            <Link>Add Bio</Link>
            <li><i className="fas fa-film"></i>
            <section className="flex-ctr-ctr">
                {uploads.map(v => <UploadCard upload={v} key={v._id} />)}
            </section>
            </li>
            <li><i className="fas fa-star"></i></li>
        </div>
    )
}