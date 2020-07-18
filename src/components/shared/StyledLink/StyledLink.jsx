import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {linkStyle} from '../../styled/partials';

const StyledRouterLink = styled(Link)`
  ${linkStyle};
`;

const StyledLink = ({to, children}) => {
  return (
    <StyledRouterLink to={to}>{children}</StyledRouterLink>
  )
}

export default StyledLink;
