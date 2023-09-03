import {DefaultLayout} from './DefaultLayout'
import {useEffect, useState} from 'react'
import {SmLayout} from './SmLayout'
import {useSmallScreen} from '../hooks/useSmallScreen.ts'
import {useLocation, useNavigate} from 'react-router'
import {useAuth} from '@/hooks/useAuth.ts'
import {DoubleLayout} from '@/layouts/DoubleLayout'
import {TopLayout} from '@/layouts/TopLayout'

export const Layout = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const auth = useAuth()
    const isSmallScreen = useSmallScreen()

    const BaseLayout = <DefaultLayout/>
    // const Component = <DoubleLayout/>
    // const Component = <TopLayout/>
    const [layout, setLayout] = useState(BaseLayout)

    if (!auth.token) {
        useEffect(() => navigate('/login'), [location])
    }

    useEffect(() => setLayout(isSmallScreen ? <SmLayout/> : BaseLayout), [isSmallScreen])

    return layout
}
