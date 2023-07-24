import { useContext } from "react";
import { FBAuthContext } from "../firebase/FBAuthProvider";
import { useNavigate } from "react-router-dom";

import ProfileWishList from "../components/ProfilePage/ProfileWishList";
import OrderHistory from "../components/ProfilePage/OrderHistory";

import Button from "../components/UI/Button";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { profile, deleteProfile } = useContext(FBAuthContext);

  const handleDeleteProfile = async () => {
    try {
      await deleteProfile();
      navigate("/");
    } catch (error) {
      console.error("Error deleting profile:", error);
    }
  };

  return (
    <div className="flex flex-col container mt-20 p-8 mx-auto">
      <div className="flex items-center justify-center">
        <div className="bg-blue-500 text-white rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold">
          {profile?.firstName ? profile.firstName.charAt(0) : "U"}
        </div>
        <div className="ml-4 text-2xl font-bold">
          {profile?.firstName ? profile.firstName : "User"}
        </div>
      </div>
      <OrderHistory profile={profile} />
      <ProfileWishList />
      <div className="flex justify-end">
        <Button
          className="text-white py-2 px-4 rounded bg-red-500"
          onClick={handleDeleteProfile}
        >
          Delete Profile
        </Button>
      </div>
    </div>
  );
};

export default ProfilePage;
