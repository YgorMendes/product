import React from 'react';
import { AvatarProfile, Header as HeaderDS } from '@neogrid/design-system';
import './styles.less';

export const Header = () => {
  return (
    <HeaderDS>
      <AvatarProfile fullName="User Name" email="user@email.com" />
    </HeaderDS>
  );
};
