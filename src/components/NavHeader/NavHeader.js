import React from "react";
import { Link } from "react-router-dom";
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
  HeaderName,
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
        <HeaderName element={Link} to="/" prefix="">
          <img src="logo.svg" alt="texalbuja.dev logo"></img>
        </HeaderName>
        <HeaderNavigation aria-label="Carbon Tutorial">
          <HeaderMenuItem element={Link} to="/technical-leadership">
            Technical Leadership
          </HeaderMenuItem>
          <HeaderMenuItem element={Link} to="/software-architecture">
            Software Architecture
          </HeaderMenuItem>
          <HeaderMenuItem element={Link} to="/developer-effectiveness">
            Developer Effectiveness
          </HeaderMenuItem>
          <HeaderMenuItem element={Link} to="/blog">
            Blog
          </HeaderMenuItem>
        </HeaderNavigation>
        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}
        >
          <SideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem element={Link} to="/technical-leadership">
                Technical Leadership
              </HeaderMenuItem>
              <HeaderMenuItem element={Link} to="/software-architecture">
                Software Architecture
              </HeaderMenuItem>
              <HeaderMenuItem element={Link} to="/developer-effectiveness">
                Developer Effectiveness
              </HeaderMenuItem>
              <HeaderMenuItem element={Link} to="/blog">
                Blog
              </HeaderMenuItem>
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
