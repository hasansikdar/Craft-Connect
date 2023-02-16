import React from 'react';
import { useQuery } from "@tanstack/react-query";

const Chatlist = () => {
    const { data: allusers = [] } = useQuery({
        queryKey: ["allusers"],
        queryFn: async () => {
          const res = await fetch("http://localhost:5000/allusers");
          const data = await res.json();
          return data;
        },
      });
      
    return(
        <div>
            
            <div className="flex flex-col">
            <div className="flex flex-row items-center justify-between text-xs">
            <span className="font-bold">Active Conversations</span>
            <span
                className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full"
                >{allusers.length}</span
            >
            </div>
            <div className="flex flex-col space-y-1 mt-4 -mx-2 h-80 overflow-y-auto">
                {allusers.map((chatusers) => (
                <div key={chatusers._id}>
                <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                    <div className="h-12 w-12 rounded-full border overflow-hidden">
                        <img
                        src={chatusers.photoURL.profileImage}
                        alt="photoURL"
                        classNameName="w-10 h-10 object-cover rounded-full mt-4 mb-2"
                        />
                    </div>
                    <div className="ml-2 text-sm font-semibold">{chatusers.displayName}</div>
                </button>
                </div>
                ))}
            </div>
            </div>
        </div>
    );
};

export default Chatlist;