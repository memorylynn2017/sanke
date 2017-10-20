import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
const userDetail = r => require.ensure([], () => r(require('@/page/userDetail')), 'userDetail');
const orderDetail = r => require.ensure([], () => r(require('@/page/orderDetail')), 'orderDetail');
const shopDetail = r => require.ensure([], () => r(require('@/page/shopDetail')), 'shopDetail');
const addShop = r => require.ensure([], () => r(require('@/page/addShop')), 'addShop');
const addGoods = r => require.ensure([], () => r(require('@/page/addGoods')), 'addGoods');
const userList = r => require.ensure([], () => r(require('@/page/userList')), 'userList');
const shopList = r => require.ensure([], () => r(require('@/page/shopList')), 'shopList');
const goodList = r => require.ensure([], () => r(require('@/page/goodList')), 'goodList');
const orderList = r => require.ensure([], () => r(require('@/page/orderList')), 'orderList');
const adminList = r => require.ensure([], () => r(require('@/page/adminList')), 'adminList');
const visitor = r => require.ensure([], () => r(require('@/page/visitor')), 'visitor');
const newMember = r => require.ensure([], () => r(require('@/page/newMember')), 'newMember');
const uploadImg = r => require.ensure([], () => r(require('@/page/uploadImg')), 'uploadImg');
const vueEdit = r => require.ensure([], () => r(require('@/page/vueEdit')), 'vueEdit');
const adminSet = r => require.ensure([], () => r(require('@/page/adminSet')), 'adminSet');
const sendMessage = r => require.ensure([], () => r(require('@/page/sendMessage')), 'sendMessage');
const explain = r => require.ensure([], () => r(require('@/page/explain')), 'explain');
const goodDetail = r => require.ensure([], () => r(require('@/page/goodDetail')), 'goodDetail');

const routes = [{
        path: '/',
        component: login
    },
    {
        path: '/manage',
        component: manage,
        name: '',
        children: [{
            path: '',
            component: home,
            meta: [],
        }, {
            path: '/userDetail',
            component: userDetail,
            meta: ['会员管理', '会员信息'],
        },{
            path: '/orderDetail',
            component: orderDetail,
            meta: ['会员管理', '会员信息'],
        },  {
            path: '/addShop',
            component: addShop,
            meta: ['添加数据', '添加商铺'],
        }, {
            path: '/addGoods',
            component: addGoods,
            meta: ['添加数据', '添加商品'],
        }, {
            path: '/userList',
            component: userList,
            meta: ['数据管理', '会员列表'],
        }, {
            path: '/shopList',
            component: shopList,
            meta: ['数据管理', '商家列表'],
        }, {
            path: '/goodList',
            component: goodList,
            meta: ['数据管理', '食品列表'],
        }, {
            path: '/orderList',
            component: orderList,
            meta: ['数据管理', '订单列表'],
        }, {
            path: '/adminList',
            component: adminList,
            meta: ['数据管理', '管理列表'],
        }, {
            path: '/visitor',
            component: visitor,
            meta: ['图表', '用户分布'],
        }, {
            path: '/newMember',
            component: newMember,
            meta: ['图表', '用户数据'],
        }, {
            path: '/uploadImg',
            component: uploadImg,
            meta: ['文本编辑', 'MarkDown'],
        }, {
            path: '/vueEdit',
            component: vueEdit,
            meta: ['编辑', '文本编辑'],
        }, {
            path: '/adminSet',
            component: adminSet,
            meta: ['设置', '管理员设置'],
        }, {
            path: '/sendMessage',
            component: sendMessage,
            meta: ['设置', '发送通知'],
        }, {
            path: '/explain',
            component: explain,
            meta: ['说明', '说明'],
        }, {
            path: '/shopDetail',
            component: shopDetail,
            meta: ['商家列表', '详情'],
        }, {
            path: '/goodDetail',
            component: goodDetail,
            meta: ['商品列表', '详情'],
        }]
    }
]

export default new Router({
    mode: 'history',
    routes,
    strict: process.env.NODE_ENV !== 'production',
})
