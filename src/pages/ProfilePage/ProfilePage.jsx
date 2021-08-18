import * as usersAPI from '../../utilities/users-api';
import * as uploadsAPI from '../../utilities/uploads-api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UploadCard from '../../components/UploadCard/UploadCard';
import './ProfilePage.css';

export default function Profile({ user, setUser }) {
    const [activeTab, setActiveTab] = useState(0);
    const [showFollowing, setShowFollowing] = useState(false)
    const [showFollowers, setShowFollowers] = useState(false)
    const [userProfile, setUserProfile] = useState({
        following: [],
        followers: [],
        uploads: [],
        likedVideos: [],
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
            const likedVideos = await uploadsAPI.getLikedVideos();
        setUserProfile({...profile, likedVideos: likedVideos});
        }
        fetchProfile();
    }, []);

    return (
        <div className="ProfilePage">
            <div>
                <h4>Profile Pic Coming Soon...</h4>
                <img width="100" height="100" src="https://media.giphy.com/media/ZXkraFrlIW1D25M6ZJ/giphy.gif"/>
            </div>
            <div className="sublinks">
                <div>
                    {userProfile.following.length}
                    <br />
                    <Link onClick={handleShowFollowing}>Following</Link>
                </div>
                &nbsp;&nbsp;         
                <div>
                    {userProfile.followers.length}
                    <br />
                    <Link onClick={handleShowFollowers}>Followers</Link>
                </div>
                &nbsp;&nbsp;
                <div>
                    {userProfile.likeCount}
                    <br />
                    <Link>Likes</Link>
                </div>
                &nbsp;&nbsp;
                <Link to="/editprofile">
                    <button>Edit Profile</button>
                </Link>
                &nbsp;
                <Link to="/bookmark">
                    <button><i className="fas fa-bookmark"></i></button>
                </Link>
            </div>
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
                    style={{borderBottom: activeTab === 0 && '3px solid black'}}
                    onClick={() => setActiveTab(0)}
                ><i className="fas fa-film"></i></li>
                <li 
                    style={{borderBottom: activeTab === 1 && '3px solid black'}}
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
                    {userProfile.likedVideos.map(v => <UploadCard upload={v} key={v._id} />)}
                </section>
            }
        </div>
    )
}