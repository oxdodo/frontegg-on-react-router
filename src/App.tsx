import { useState } from 'react'
import { Routes, Route } from 'react-router'

import { FronteggProvider } from "@frontegg/react";

import { Home } from './Home'
import { Settings } from './Settings'
import ProtectRoute from './Route'

const fronteggOptions = {
  contextOptions: {
    baseUrl: import.meta.env.VITE_FRONTEGG_BASE_URL,
    clientId: import.meta.env.VITE_FRONTEGG_CLIENT_ID, 
    appId: import.meta.env.VITE_FRONTEGG_APP_ID,
  }
}

function App() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            <FronteggProvider customLoader={setIsLoading} {...fronteggOptions}>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="private-route" element={<ProtectRoute><Settings /></ProtectRoute>}/>
                </Routes>
            </FronteggProvider>
            {isLoading && 'This is my custom Loader'}
        </>
    );
}

export default App;
