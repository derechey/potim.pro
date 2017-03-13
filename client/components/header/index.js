import React from 'react';
import AppBar from 'material-ui/AppBar';
import Menu from './menu'


const styles = {
    background: '#8c8b8b'
};

const Header = () => (
    <AppBar
        style={styles}
        title="PRO"
        iconElementRight={<Menu />}
    />
);

export default Header;