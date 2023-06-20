import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Logo } from '../../assets/logo';
import { Menu, Sider } from '@neogrid/design-system';
import './styles.less';

export const AsideMenu = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const itemSelectedStore = localStorage.getItem('item-selected');
  const [defaultSelectedItem, setDefaultSelectedItem] = useState(
    itemSelectedStore || ''
  );

  const navigate = useNavigate();

  function clickItem(item: string) {
    localStorage.setItem('item-selected', item);
  }

  const url = window.location.href;
  useEffect(() => {
    if (itemSelectedStore) {
      setDefaultSelectedItem(itemSelectedStore);
    }
    if (url.includes('login')) {
      setDefaultSelectedItem('login');
    }
  }, [url, itemSelectedStore]);

  const menuItems: any = [
    {
      label: 'Product A',
      id: 'logo',
      icon: <Logo className="aside-menu_logo" color="#9661f8" />,
      type: 'main'
    },
    {
      label: 'Home',
      id: 'home',
      icon: <HomeOutlined />,
      onClick: () => {
        navigate('/');
        clickItem('home');
      }
    }
  ];

  return (
    <Sider
      collapsible
      onCollapse={() => {
        setCollapsed((currentValue) => !currentValue);
      }}
      defaultCollapsed={collapsed}
    >
      <Menu
        defaultSelectedItem={defaultSelectedItem}
        isCollapsed={collapsed}
        items={menuItems}
      />
    </Sider>
  );
};
