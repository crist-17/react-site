import React, { useEffect, useState } from 'react';

const Example4 = () => {
    const [posts,setPosts] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
            .then((res) => res.json())
            .then((data) => setPosts(data))
    }, {})



    return (
        <div>
            <h2>예제4: api 호출</h2>
            <ul>
                {(posts.map)(
                    (p) => (
                        <li key={p.id}>{p.title}{p.body}</li>
                    )
                )}
                <li>
                    tssd
                </li>
            </ul>
        </div>
    );
};

export default Example4;