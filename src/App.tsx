import AppRouter from 'app/providers/router/ui/AppRouter'

import { Navbar } from 'widgets/Navbar'

function App() {
    return (
        <div className="app">
            <Navbar />
            <AppRouter />
        </div>
    )
}

export default App
