import { Suspense } from 'react'

import { Route, Switch } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

const AppRouter = () => (
    <Switch>
        {Object.values(routeConfig).map(({ element, path }) => (
            <Route path={path}>
                <Suspense fallback={<div>FALLBACK MOCK</div>}>
                    {element}
                </Suspense>
            </Route>
        ))}
    </Switch>
)

export default AppRouter
