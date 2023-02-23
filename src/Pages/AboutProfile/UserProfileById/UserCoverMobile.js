import React from 'react';
import cover from "../../../assets/cover.jpg";
import UserProfileMobile from './UserProfileMobile';


const UserCoverMobile = () => {
    return (
      <div>
        <div className="hidden">
          <div
            style={{
              background: `URL(${cover})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              width: "320px",
              height: "132px",
              // marginTop: "100px",
              marginLeft: "58px",
              marginRight: "",
              borderTopLeftRadius: "5px",
              borderTopRightRadius: "5px",
            }}
          ></div>
          <UserProfileMobile/>
        </div>
      </div>
    );
};

export default UserCoverMobile;