import React, { ReactNode } from 'react';
import CategorySideBar from '@/app/(routes)/search/_components/CategorySideBar'
import Header from '@/app/_components/Header';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-4 mt-8">
        <div className="hidden md:block">
          {/* Side Category Nav bar */}
          <CategorySideBar />
        </div>
        <div className="md:col-span-3">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
