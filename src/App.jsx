import { BrowserRouter, Route, Routes } from 'react-router-dom'
import routers from '@/routers/routers';
import { Suspense } from 'react';
import { SidebarProvider } from '@/contexts/SidebarProvider';
import Sidebar from '@components/Sidebar/Sidebar';
import { ToastProvider } from '@contexts/ToastProvider';
import { StoreProvider } from '@contexts/storeProvider';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function App() {
  return (
    <StoreProvider>
      <ToastProvider>
        <SidebarProvider>
          <Sidebar />
          <BrowserRouter>
            <Suspense fallback={<div className='flex justify-center items-center w-dvw h-dvh'><AiOutlineLoading3Quarters className={`animate-spin-fast text-[30px] text-gray-500`} /></div>}>
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
      </ToastProvider>
    </StoreProvider>
  )
}

export default App