import { BrowserRouter, Route, Routes } from 'react-router-dom'
import routers from '@/routers/routers';
import { Suspense } from 'react';
import { SidebarProvider } from '@/contexts/SidebarProvider';
import Sidebar from '@components/Sidebar/Sidebar';

function App() {
  return (
    <SidebarProvider>
      <Sidebar />
      <BrowserRouter>
        <Suspense fallback={<div className='flex justify-center items-center w-dvw h-dvh'><p>Loading...</p></div>}>
          <Routes>
            {
              routers.map((item, index) => {
                return (
                  <Route
                    path={item.path}
                    element={<item.component />}
                    key={index}
                  />
                );
              })
            }
          </Routes>
        </Suspense>
      </BrowserRouter>
    </SidebarProvider>
  )
}

export default App