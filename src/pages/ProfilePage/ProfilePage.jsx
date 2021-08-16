import * as usersAPI from '../../utilities/users-api'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UploadCard from '../../components/UploadCard/UploadCard';
import './ProfilePage.css';
import { set } from 'mongoose';

export default function Profile({ user, setUser }) {
    const [title, setTitle] = useState('');
    const [uploads, setUploads] = useState([]);
    const [activeTab, setActiveTab] = useState(0);
    const [showFollowing, setShowFollowing] = useState(false)
    const [showFollowers, setShowFollowers] = useState(false)
    const [userProfile, setUserProfile] = useState({
        following: [],
        followers: [],
        uploads: [],
        likeCount: 0
    });

    function handleShowFollowers() {
        setShowFollowers(!showFollowers)
        setShowFollowing(false) 
    }
    
    function handleShowFollowing() {
        setShowFollowing(!showFollowing)
        setShowFollowers(false)
    }

    useEffect(function () {
        async function fetchProfile() {
            const profile = await usersAPI.getProfile();
            console.log(profile)
            setUserProfile(profile);
        }
        fetchProfile();
    }, []);

    return (
        <div className="ProfilePage">
            <div></div>
            <h4>Profile Pic</h4>
            <div>
                {userProfile.following.length}
                <Link onClick={handleShowFollowing}>Following</Link>
            </div>
            &nbsp;&nbsp;
            <div>
                {userProfile.followers.length}
                <Link onClick={handleShowFollowers}>Followers</Link>
            </div>
            &nbsp;&nbsp;
            <div>
                {userProfile.likeCount}
                <Link>Likes</Link>
            </div>
            &nbsp;&nbsp;
            <Link>
                <button>Edit Profile</button>
            </Link>
            &nbsp;
            <Link>
                <button><i className="fas fa-bookmark"></i></button>
            </Link>
            <div>
                {
                    showFollowing && userProfile.following.map(follow => <p>{follow.following.name}</p>)
                }
            </div>
            <div>
                {
                    showFollowers && userProfile.followers.map(follow => <p>{follow.follower.name}</p>)
                }
            </div>

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
                    {userProfile.uploads.map(v => <UploadCard upload={v} key={v._id} />)}
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