import * as React from 'react'
import { PageContainer, PageContent } from './layout.style'
import Nav from '../nav/nav';

const Layout = ({ children } : { children : React.ReactNode }) => {
  return (
    <PageContainer>
      <Nav />
      <PageContent>
        {children}
      </PageContent>
    </PageContainer>
  );
}

export default Layout;