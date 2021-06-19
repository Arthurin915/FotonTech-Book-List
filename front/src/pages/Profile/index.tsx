import React from "react";
import NavFooter from "../../components/NavFooter";
import { ProfileContainer } from "./styles";

const Profile: React.FC = () => {
  return (
    <ProfileContainer>
      <h1>Uma mera página de perfil em branco!</h1>
      <h2>Não tive tempo durante a semana para desenvolvê-la</h2>
      <NavFooter />
    </ProfileContainer>
  );
};

export default Profile;
