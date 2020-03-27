import React from 'react';
import { Layout } from 'antd';
import Breadcrumbs from '../../components/Breadcrumbs';
import MainHeader from '../../components/MainHeader';
import SideMenu from '../../components/SideMenu';
import MainFooter from '../../components/Footer';
import { connect } from 'react-redux';
import { sideCollapse } from '../../actions/utils';
import { ContainerQuery } from 'react-container-query';
import classnames from 'classnames';
import menu from '../../config/main.routes';
import { getMenuMap } from '../../utils';
import './index.less';

const { Content } = Layout;
const siderMenuData = getMenuMap(menu);

const query = {
    'screen-xs': {
        maxWidth: 575,
    },
    'screen-sm': {
        minWidth: 576,
        maxWidth: 767,
    },
    'screen-md': {
        minWidth: 768,
        maxWidth: 991,
    },
    'screen-lg': {
        minWidth: 992,
        maxWidth: 1199,
    },
    'screen-xl': {
        minWidth: 1200,
        maxWidth: 1599,
    },
    'screen-xxl': {
        minWidth: 1600,
    },
};

function MainLayout(props) {
    const handleMenuCollapse = (e) => {
        // console.log(e);
        props.sideCollapse(e);
    };
    
    const layout = (
        <Layout className="layout">
            <div className='sider-view'>
                <SideMenu
                    theme="light"
                    menuData={siderMenuData}
                    onCollapse={handleMenuCollapse}
                    collapsed={props.collapsed}
                    {...props}
                />
            </div>
            <Layout>
                <MainHeader
                    handleMenuCollapse={handleMenuCollapse}
                    {...props}
                />
                <Content>
                    <Breadcrumbs />
                    <div className="site-layout-content">{props.children}</div>
                </Content>
                <MainFooter {...props} />
            </Layout>
        </Layout>
    );

    return (
        <ContainerQuery query={query}>
            {(params) => (
                <div className={classnames(params)}>
                    {layout}
                </div>
            )}
        </ContainerQuery>
    )
}

function mapStateToProps({ collapsed }) {
    return { collapsed }
}

export default connect(mapStateToProps, { sideCollapse })(MainLayout)