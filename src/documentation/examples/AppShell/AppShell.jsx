import React from 'react';
import AppShell from '@bufferapp/ui/AppShell';
import { Gear } from '@bufferapp/ui/Icon';

import { gray } from '@bufferapp/ui/style/colors';

const userMenuItems = [
  {
    id: '2',
    title: 'Preferences',
    icon: <Gear color={gray} />,
    onItemClick: () => console.info('Preferences'),
  },
];

const helpMenuItems = [
  {
    id: '1',
    title: 'FAQ',
    onItemClick: () => console.info('FAQ'),
  },
  {
    id: '2',
    title: 'Status',
    onItemClick: () => console.info('Status'),
  },
  {
    id: '3',
    title: 'Pricing & Plans',
    onItemClick: () => console.info('Pricing'),
  },
  {
    id: '4',
    title: 'Wishlist',
    onItemClick: () => console.info('Wishlist'),
  },
];

/** AppShell Example */
export default function ExampleAppShell() {
  return (
    <AppShell
      activeProduct="publish"
      user={{
        name: 'Hamish Macpherson',
        email: 'hamstu@gmail.com',
        avatar:
          'https://pbs.twimg.com/profile_images/847849987841167360/WEVTxvUA_400x400.jpg',
        menuItems: userMenuItems,
      }}
      helpMenuItems={helpMenuItems}
      content={<div>Main content.</div>}
      displaySkipLink
    />
  );
}
