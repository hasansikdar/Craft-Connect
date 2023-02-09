import React from 'react';

const SearchFriends = ({allusers}) => {
    return (
      <div>
        <div className="mt-3">
          {allusers.map((allUser) => {
            return (
              <div>
                <div className="flex items-center">
                  <img
                    className="mr-3 w-[6%] rounded-full"
                    src={allUser.photoURL}
                    alt=""
                  />
                  <p className="">{allUser.displayName}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
};

export default SearchFriends;