import MembersHome from '../pages/MembersHome';
import MemberLogin from '../pages/MemberLogin';
import MemberRegister from '../pages/MemberRegister';

export default [
    {
        key: 1,
        path: '/members',
        name: 'members',
        title: 'members.main',
        defaultMessage: 'Members',
        component: MembersHome
    },
    {
        key: 2,
        path: '/members/login',
        name: 'members login',
        title: 'members.login',
        defaultMessage: 'Members Login',
        component: MemberLogin
    },
    {
        key: 3,
        path: '/members/register',
        name: 'members',
        title: 'members.register',
        defaultMessage: 'Members Register',
        component: MemberRegister
    },
]