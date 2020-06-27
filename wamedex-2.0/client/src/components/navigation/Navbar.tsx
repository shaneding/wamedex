import React from 'react';
import styled from 'styled-components';
import { withRouter, RouteComponentProps } from 'react-router';

import GithubImg from '../../img/github.png';
import gwf from '../../img/gwf.png';
import { TABLET_BREAKPOINT, HOME_ROUTE } from '../../shared/Constants';
import { PageContent, Heading1, Link } from '../../shared/Styles';

const Navbar = ({ history }: RouteComponentProps) => {
  return (
    <NavbarWrapper>
      <PageContent>
        <Row>
          <NavbarLogo tabIndex={0} onClick={() => history.push(HOME_ROUTE)}>
            <GwfLogo src={gwf} alt="Github logo" />
            Waterloo Metadata Index
          </NavbarLogo>
          <NavbarLinks>
            <Link
              href="https://github.com/castorini/covidex"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubLogo src={GithubImg} alt="Github logo" />
            </Link>

            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSe4_5imtXsvPHGRPFfRaXPaohEpJZAYz8OmDaDe0a4pLsTUdg/viewform?usp=sf_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Feedback
            </Link>
          </NavbarLinks>
        </Row>
      </PageContent>
    </NavbarWrapper>
  );
};

export default withRouter(Navbar);

const NavbarWrapper = styled.div`
  padding: 24px 48px;
  display: flex;
  justify-content: space-between;
  position: relative;
  background-color: #00b3b3;
  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    padding: 24px 16px;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavbarLogo = styled.a`
  display: flex;
  ${Heading1}
  position: relative;
  font-weight: 800;
  cursor: pointer;
  float: left;
  color: ${({ theme }) => theme.white};
  max-width: fit-content;
`;

const NavbarLinks = styled.div`
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.white};

    &:hover {
      color: ${({ theme }) => theme.white};
      filter: brightness(85%);
    }
  }
`;

const GithubLogo = styled.img`
  display: flex;
  height: 24px;
  width: 24px;
  cursor: pointer;
  margin-right: 24px;

  &:hover {
    filter: brightness(85%);
  }
`;

const GwfLogo = styled.img`
padding: 0px;
display: flex;
height: 50px;
width: 50px;
cursor: pointer;
margin-right: 20px;

&:hover {
  filter: brightness(85%);
}
`;
