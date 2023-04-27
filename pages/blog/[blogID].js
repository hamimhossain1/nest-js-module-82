import { useRouter } from 'next/router';
import React from 'react';

const blogID = () => {
    const route = useRouter()
    const id = route.query.blogID
    return (
        <div>
            <h1>This is dynamic blog page {id}</h1>
        </div>
    );
};

export default blogID;