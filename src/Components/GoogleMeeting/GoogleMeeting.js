import React from "react";
import GoogleMeetingIcon from "../../assets/icons/google-meeting.png";

const GoogleMeeting = () => {
  return (
    <div className="mr-3">
      <a target="_blank" href="https://meet.google.com/mjp-urzq-jbp">
        <img className="w-8" src={GoogleMeetingIcon} alt="" />
      </a>
    </div>
  );
};

export default GoogleMeeting;
