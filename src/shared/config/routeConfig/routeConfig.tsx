import BlockPage from 'pages/BlockPage/BlockPage'

export interface RouterProps {
    path: string
    element: React.ReactNode
}

export enum AppRoutes {
    MAIN = 'main',
    BLOCK = 'block',
    // NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.BLOCK]: '/block',
    //     [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, RouterProps> = {
    [AppRoutes.BLOCK]: {
        path: RoutePath.block,
        element: <BlockPage />,
    },
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <div>MAIN PAGE MOCK</div>,
    },
}
