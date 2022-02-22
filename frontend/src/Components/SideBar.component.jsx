import React from 'react';
import { Link } from 'react-router-dom';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaGem, FaListUl } from 'react-icons/fa';
import 'react-pro-sidebar/dist/css/styles.css';

const SideBar = () => {
  return (
    <ProSidebar>
      <Menu iconShape='square'>
        <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
        <SubMenu title='Components' icon={<FaListUl />}>
          <MenuItem>
            Categories <Link to='/category' />{' '}
          </MenuItem>
          <MenuItem>
            Products <Link to='/product' />
          </MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
};
export default SideBar;
