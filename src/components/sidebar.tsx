import * as RR from "react-router-dom";
import {NavLink} from "@mantine/core";
import {IconBadge, IconBuilding, IconDashboard, IconMoneybag, IconUser} from "@tabler/icons-react";
import './sidebar.css'

export function Sidebar() {
    return (
        <>
            {[
                {label: 'Dashboard', link: '/', icon: <IconDashboard size="1rem"/>},
                {label: 'Accommodations', link: '/accommodations', icon: <IconBuilding size="1rem"/>},
                {label: 'Profile', link: '/profile', icon: <IconUser size="1rem"/>},
                {label: 'Badge', link: '/badge', icon: <IconBadge size="1rem"/>},
                {label: 'Insurance', link: '/insurance', icon: <IconMoneybag size="1rem"/>},
            ].map(nav => (
                <RR.NavLink to={nav.link} key={nav.link}>
                    {({isActive}) => (
                        <NavLink
                            component={'span'}
                            active={isActive}
                            label={nav.label}
                            leftSection={nav.icon}
                        />
                    )}
                </RR.NavLink>
            ))}
        </>
    )
}