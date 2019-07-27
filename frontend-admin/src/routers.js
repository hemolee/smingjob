import React from "react";
import {Redirect} from "react-router-dom";

/* views */

import Home from './common/Home'
import Login from './common/Login'
import CorporationAdmin from './admin/Corporation'
import InterviewerAdmin from "./admin/Interviewer"
import NoticeDetail from './notice/NoticeDetailAdmin'
import NoticeList from './notice/NoticeList'
import NoticeUpload from './notice/NoticeUpload'
import NoticeModify from './notice/NoticeModify'
import NoticeDetailAdmin from './notice/NoticeDetailAdmin'
import Join from './common/Join'
import InterviewerModify from './interviewer/Modify'
import CorporationModify from './corporation/Modify'
import PrAdmin from "./pr/Pr"
import AliveAdmin from "./admin/Alive"
import AliveDetail from "./admin/AliveDetail"
import LoginAdmin from "./common/Login"
import Test from "./notice/ApplicantList"
import PRDetail from "./pr/PRDetail";

export const routerConfig = [
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/home" />
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/noticeDetail',
        component: NoticeDetail
    }, 
    {
        path: '/noticeUpload',
        component: NoticeUpload
    },
    {
        path: '/noticeModify',
        component: NoticeModify
    },
    {
        path: '/NoticeDetailAdmin',
        component: NoticeDetailAdmin
    },    
    {
        path: '/NoticeAdmin',
        component: NoticeList
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/corporationAdmin',
        component: CorporationAdmin
    },
    {
        path: '/interviewerAdmin',
        component: InterviewerAdmin
    },
    {
        path: '/join',
        component: Join
    },
    {
        path: '/interviewerModify',
        component: InterviewerModify
    },
    {
        path: '/corporationModify',
        component: CorporationModify
    },
    {
        path: '/prAdmin',
        component: PrAdmin
    },
    {
        path: '/prDetail',
        component: PRDetail
    },
    {
        path: '/aliveAdmin',
        component: AliveAdmin
    },
    {
        path: '/aliveDetail',
        component: AliveDetail
    },
    {
        path: '/homeAdmin',
        component: LoginAdmin
    },
    {
        path: '/test',
        component: Test
    }
]