import * as uploadsAPI from '../../utilities/uploads-api'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UploadCard from '../../components/UploadCard/UploadCard';
import './ProfilePage.css';

export default function Profile({ user, setUser }) {
    const [title, setTitle] = useState('');
    const [uploads, setUploads] = useState([]);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(function () {
        uploadsAPI.getAll().then(uploads => setUploads(uploads));
    }, []);
    return (
        <div className="ProfilePage">
            <div></div>
            <h4></h4>
            <Link>Following</Link>
            &nbsp;&nbsp;
            <Link>Followers</Link>
            &nbsp;&nbsp;
            <Link>Likes</Link>
            &nbsp;&nbsp;
            <Link>
                <button>Edit Profile</button>
            </Link>
            &nbsp;
            <Link>
                <button><i className="fas fa-bookmark"></i></button>
            </Link>

            <ul className="tabs">
                <li 
                    style={{borderBottom: activeTab === 0 && '3px solid white'}}
                    onClick={() => setActiveTab(0)}
                ><i className="fas fa-film"></i></li>
                <li 
                    style={{borderBottom: activeTab === 1 && '3px solid white'}}
                    onClick={() => setActiveTab(1)}    
                ><i className="fas fa-star"></i></li>
            </ul>

            { activeTab === 0 && 
                <section className="flex-ctr-ctr">
                    {uploads.map(v => <UploadCard upload={v} key={v._id} />)}
                </section>
            }

            { activeTab === 1 && 
                <section className="flex-ctr-ctr">
                    <h1>tab 2</h1>
                </section>
            }
        </div>
    )
}