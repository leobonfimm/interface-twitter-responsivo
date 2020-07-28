import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  PorfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <PorfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Leonardo Bonfim</h1>
        <h2>leobonfimm95</h2>

        <p>Developer at Grendene S/A</p>

        <ul>
          <li>
            <LocationIcon />
            Sobral, Ceará
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 06 de novembro de 1995
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672 </strong> seguidores
          </span>
        </Followage>
      </PorfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
