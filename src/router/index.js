import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
const userDetail = r => require.ensure([], () => r(require('@/page/userDetail')), 'userDetail');
const orderDetail = r => require.ensure([], () => r(require('@/page/orderDetail')), 'orderDetail');
const shopDetail = r => require.ensure([], () => r(require('@/page/shopDetail')), 'shopDetail');
const goodDetail = r => require.ensure([], () => r(require('@/page/goodDetail')), 'goodDetail');
const addShop = r => require.ensure([], () => r(require('@/page/addShop')), 'addShop');
const addGood = r => require.ensure([], () => r(require('@/page/addGood')), 'addGood');
const addOrder = r => require.ensure([], () => r(require('@/page/addOrder')), 'addOrder');
const userList = r => require.ensure([], () => r(require('@/page/userList')), 'userList');
const shopList = r => require.ensure([], () => r(require('@/page/shopList')), 'shopList');
const goodList = r => require.ensure([], () => r(require('@/page/goodList')), 'goodList');
const orderList = r => require.ensure([], () => r(require('@/page/orderList')), 'orderList');
const adminList = r => require.ensure([], () => r(require('@/page/adminList')), 'adminList');
const visitor = r => require.ensure([], () => r(require('@/page/visitor')), 'visitor');
const uploadImg = r => require.ensure([], () => r(require('@/page/uploadImg')), 'uploadImg');
const vueEdit = r => require.ensure([], () => r(require('@/page/vueEdit')), 'vueEdit');
const adminSet = r => require.ensure([], () => r(require('@/page/adminSet')), 'adminSet');
const sendMessage = r => require.ensure([], () => r(require('@/page/sendMessage')), 'sendMessage');
const explain = r => require.ensure([], () => r(require('@/page/explain')), 'explain');
const makeInfo = r => require.ensure([], () => r(require('@/page/content/makeInfo')), 'makeInfo');
const artClass = r => require.ensure([], () => r(require('@/page/content/artClass')), 'artClass');
const artMan = r => require.ensure([], () => r(require('@/page/content/artMan')), 'artMan');
const advMan = r => require.ensure([], () => r(require('@/page/content/advMan')), 'advMan');
const shopCom = r => require.ensure([], () => r(require('@/page/content/shopCom')), 'shopCom');




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
            meta: ['会员管理', '详情'],
        }, {
            path: '/orderDetail',
            component: orderDetail,
            meta: ['订单管理', '详情'],
        }, {
            path: '/addShop',
            component: addShop,
            meta: ['添加数据', '添加商铺'],
        }, {
            path: '/addGood',
            component: addGood,
            meta: ['添加数据', '添加商品'],
        },{
            path: '/addOrder',
            component: addOrder,
            meta: ['添加数据', '添加订单'],
        },{
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
        }, {
            path: '/makeInfo',
            component: makeInfo,
            meta: ['内容管理', '市场信息'],
        }, {
            path: '/shopCom',
            component: shopCom,
            meta: ['内容管理', '商家审核'],
        }, {
            path: '/artClass',
            component: artClass,
            meta: ['内容管理', '文章分类'],
        }, {
            path: '/artMan',
            component: artMan,
            meta: ['内容管理', '文章管理'],
        }, {
            path: '/advMan',
            component: advMan,
            meta: ['内容管理', '广告管理'],
        }]
    }
]

export default new Router({
    mode: 'history',
    routes,
    strict: process.env.NODE_ENV !== 'production',
})