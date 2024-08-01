import { BuildOutlined, BulbOutlined, DashboardOutlined, ProjectOutlined, ShopOutlined } from '@ant-design/icons'
import { IResourceItem } from '@refinedev/core'
export const resources: IResourceItem[] = [
    {
        name: 'dashboard',
        list: '/',
        meta: {
            lable: 'Dashboard',
            icon: <DashboardOutlined />
        },
    },
    {
        name: 'companies',
        list: '/companies',
        show: '/companies/:id',
        create: '/companies/new',
        edit: '/companies/edit/:id',
        meta:{
            lable: 'Companies',
            icon: <ShopOutlined />
        }
    },
    {
        name: 'tasks',
        list: '/tasks',
        create: '/task/new',
        edit: '/task/edit/:id',
        meta: {
            lable: 'Tasks',
            icon: <ProjectOutlined />
        }
    },
    {
        name: 'apis',
        list: '/apis',
        show: '/api/:id',
        create: '/api/new',
        edit: '/api/edit/:id',
        meta:{
            lable: 'APIs',
            icon: <BulbOutlined />
        }
    },
]