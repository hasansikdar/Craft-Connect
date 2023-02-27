import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { Authcontext } from '../../Context/UserContext';
import SharedPostCard from './SharedPostCard';

const SharedPost = () => {

    const { user } = useContext(Authcontext)

    const { data: posts = [], refetch } = useQuery({
        queryKey: [user?.email],
        // queryKey: ["posts" ,user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/sharedPost/${user?.email}`);
            const data = res.json();
            return data;
        },
    });

    return (
        <div>
            {
                posts.map((post) => <SharedPostCard
                    key={post._id}
                    post={post}
                    refetch={refetch}
                ></SharedPostCard>)
            }
        </div>
    );
};

export default SharedPost;