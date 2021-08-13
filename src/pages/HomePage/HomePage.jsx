import * as uploadsAPI from '../../utilities/uploads-api'
import { useState, useEffect } from 'react';
import UploadCard from '../../components/UploadCard/UploadCard';

export default function HomePage({ user, setUser }) {
    const [title, setTitle] = useState('');
    const [uploads, setUploads] = useState([]);

    useEffect(function () {
        uploadsAPI.getAll().then(uploads => setUploads(uploads));
    }, []);

    return (
        <main>
            <nav><i className="fas fa-video">Live</i></nav>
            <nav>Following</nav>
            <nav>For You</nav>
            <section className="flex-ctr-ctr">
                {uploads.map(v => <UploadCard upload={v} key={v._id} />)}
            </section>
        </main>
    )
}


// const [colors, setColors] = useState(
//     style={format: colors,
//         --background-color: 'rgb(0,0,0)'}
// )