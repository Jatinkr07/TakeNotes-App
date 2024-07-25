/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { getInitials } from "../../utils/helper";

const ProfileInfo = ({ onLogout, userInfo }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center justify-center w-12 h-12 font-bold rounded-full text-slate-950 bg-slate-100">
        {getInitials(userInfo?.username)}
      </div>

      <div>
        <p className="text-sm font-medium">{userInfo?.username}</p>
      </div>

      <button
        className="p-1 text-white bg-red-600 rounded-md text-md hover:opacity-90"
        onClick={onLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default ProfileInfo;
