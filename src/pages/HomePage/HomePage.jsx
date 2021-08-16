import * as uploadsAPI from '../../utilities/uploads-api'
import { useState, useEffect } from 'react';
import UploadCard from '../../components/UploadCard/UploadCard';
import './HomePage.css';

export default function HomePage({ user, setUser }) {
    const [title, setTitle] = useState('');
    const [uploads, setUploads] = useState([]);
    const [activeLink, setActiveLink] = useState(0);
    const [userHome, setUserHome] = useState({
        live: [],
        following: [],
        forYou: [],
    });

    useEffect(function () {
        uploadsAPI.getAll().then(uploads => setUploads(uploads));
    }, []);
    
    useEffect(function () {
        async function fetchHome() {
            const forYou = await uploadsAPI.getForYouVideos();
            console.log(forYou);
            setUserHome({...userHome, forYou: forYou});
        }
        fetchHome();
    }, []);

    return (
        <main className="HomePage">
            <ul className="link">
                <li onClick={() => setActiveLink(0)}><i className="fas fa-video">Live</i></li>
                <li onClick={() => setActiveLink(1)}>Following</li>
                <li onClick={() => setActiveLink(2)}>For You</li>
            </ul>
            {activeLink === 0 &&
                <section className="flex-ctr-ctr">
                    <h2>Live Videos</h2>
                </section>
            }    
            {activeLink === 1 &&
                <section className="flex-ctr-ctr">
                    <h2>videos of peeps I'm following</h2>
                </section>
            }    
            {activeLink === 2 &&
                <section className="flex-ctr-ctr">
                    {uploads.map(v => <UploadCard upload={v} key={v._id} />)}
                </section>
            }    
        </main>
    )
}

