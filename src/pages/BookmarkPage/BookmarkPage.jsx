import UploadCard from "../../components/UploadCard/UploadCard";
import { useState } from 'react';
import './BookmarkPage.css';

export default function BookmarkPage() {
    const [activeTab, setActiveTab] = useState(0);

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
                <section>
                    {uploads.map(v => <UploadCard upload={v} key={v._id} />)}
                </section>
            }
            { activeTab === 1 &&
                <section>
                    <h1>Hashtags</h1>
                </section>
            }
            { activeTab === 2 &&
                <section>
                    <h1>Sounds</h1>
                </section>
            }
            { activeTab === 3 &&
                <section>
                    <h1>Effects</h1>
                </section>
            }
        </div>
    )
}