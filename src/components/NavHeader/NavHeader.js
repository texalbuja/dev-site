import React from "react";
import {
  Header,
  HeaderContainer,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
  Link,
} from "@carbon/react";

import { LogoGithub, LogoLinkedin } from "@carbon/react/icons";

const NavHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Carbon Tutorial">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <Link href="#">
          <img src="/logo.svg" alt="Tex Albuja logo"></img>
        </Link>
        <HeaderNavigation aria-label="Carbon Tutorial">
          <HeaderMenuItem href="/technical-leadership">
            Technical Leadership
          </HeaderMenuItem>
          <HeaderMenuItem href="/software-architecture">
            Software Architecture
          </HeaderMenuItem>
          <HeaderMenuItem href="/developer-effectiveness">
            Developer Effectiveness
          </HeaderMenuItem>
          <HeaderMenuItem href="/blog">Blog</HeaderMenuItem>
        </HeaderNavigation>
        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={true}
        >
          <SideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem href="/technical-leadership">
                Technical Leadership
              </HeaderMenuItem>
              <HeaderMenuItem href="/software-architecture">
                Software Architecture
              </HeaderMenuItem>
              <HeaderMenuItem href="/developer-effectiveness">
                Developer Effectiveness
              </HeaderMenuItem>
              <HeaderMenuItem href="/blog">Blog</HeaderMenuItem>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
        <HeaderGlobalBar>
          <HeaderGlobalAction aria-label="Github" tooltipAlignment="center">
            <LogoGithub size={20} />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="LinkedIn" tooltipAlignment="end">
            <LogoLinkedin size={20} />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    )}
  />
);

export default NavHeader;
