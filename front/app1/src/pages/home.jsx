
import React from 'react';import { useState } from 'react';

const postes = [
    {
        id: 1,
        titre: "pc1",
        descr: "",
        image: "",
    },
    {
        id: 2,
        titre: "pc2",
        descr: "",
        image: "",
    },
];

const Home = () => {
    const [posts, setPosts] = useState(postes);

    return (
        <div className='posts'>
            {posts.map(post => (
                <div key={post.id} className='post'>
                    <div className='images'>
                        <img src={post.image} alt="" />
                    </div>
                    <div className='contenu'>
                        <h2>{post.titre}</h2>
                        <p>{post.descr}</p>
                        <button>Read more</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Home;