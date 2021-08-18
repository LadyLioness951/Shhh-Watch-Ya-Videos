import * as usersAPI from '../../utilities/users-api';
import * as uploadsAPI from '../../utilities/uploads-api';
import { useState, useEffect } from 'react';
import UploadCard from "../../components/UploadCard/UploadCard";
import './BookmarkPage.css';

export default function BookmarkPage() {
    const [activeTab, setActiveTab] = useState(0);
    const [userBookmark, setUserBookmark] = useState({
        favoritedVideos: [],
        hashtags: [],
        sounds: [],
        effects: []
    })

    useEffect(function () {
        async function fetchBookmark() {
            const bookmark = await usersAPI.getBookmark();
            setUserBookmark({...userBookmark, favoritedVideos: bookmark.favorites});
            console.log(bookmark);
        }
        fetchBookmark();
    }, []);

    return (
        <div className="BookmarkPage">
            <h1>Favorites</h1>
            <ul className="tabs">
                <li
                    style={{borderBottom: activeTab === 0 && '3px solid black'}}
                    onClick={() => setActiveTab(0)}
                >Videos</li>
                <li
                    style={{borderBottom: activeTab === 1 && '3px solid black'}}
                    onClick={() => setActiveTab(1)}
                >Hashtags</li>
                <li
                    style={{borderBottom: activeTab === 2 && '3px solid black'}}
                    onClick={() => setActiveTab(2)}
                >Sounds</li>
                <li
                    style={{borderBottom: activeTab === 3 && '3px solid black'}}
                    onClick={() => setActiveTab(3)}
                >Effects</li>
            </ul>
            { activeTab === 0 &&
                <section className="favoriteV">
                    {userBookmark.favoritedVideos.map(v => <UploadCard upload={v.upload} key={v._id} />)}
                </section>
            }
            { activeTab === 1 &&
                <section>
                    <img width="280" height="270" src="https://media.giphy.com/media/3oz8xwwCKqrFgLPTJC/giphy.gif"/>
                    <img src="https://media.giphy.com/media/8FuLBRxtL7nwCchUcd/giphy.gif"/>
                </section>
            }
            { activeTab === 2 &&
                <section>
                    <h3>Sounds Coming Soon...</h3>
                    <img width="288" height="288" src="https://media.giphy.com/media/g0jZXv94OHEdx5RHm4/giphy.gif"/>
                    <img width="288" src="https://media.giphy.com/media/lsBYIZnDoDiqyTgubO/giphy.gif"/>
                </section>
            }
            { activeTab === 3 &&
                <section>
                    <h3>Effects Coming Soon...</h3>
                    <img width="350" height="350" src="https://media.giphy.com/media/l0K46F1aMe6A6z8DC/giphy.gif"/>
                    <img width="350" height="350" src="https://media.giphy.com/media/l2SqhHPenG6AHjYkw/giphy.gif"/>
                </section>
            }
        </div>
    )
}