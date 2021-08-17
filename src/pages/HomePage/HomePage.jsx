import * as uploadsAPI from '../../utilities/uploads-api'
import { useState, useEffect } from 'react';
import UploadCard from '../../components/UploadCard/UploadCard';
import './HomePage.css';

export default function HomePage({ user, setUser }) {
    const [activeLink, setActiveLink] = useState(0);
    const [userHome, setUserHome] = useState({
        live: [],
        following: [],
        forYou: [],
    });
    
    useEffect(function () {
        async function fetchHome() {
            const following = await uploadsAPI.getForYouVideos();
            const forYou = await uploadsAPI.getForYouVideos();
            setUserHome({...userHome, forYou: forYou, following: following});
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
                    <h2>Live Videos Coming &nbsp; 🔜</h2>
                </section>
            }    
            {activeLink === 1 &&
                <section className="flex-ctr-ctr">
                    {userHome.following.map(v => <UploadCard upload={v} key={v._id} />)}
                </section>
            }    
            {activeLink === 2 &&
                <section className="flex-ctr-ctr">
                    {userHome.forYou.map(v => <UploadCard upload={v} key={v._id} />)}
                </section>
            }    
        </main>
    )
}

