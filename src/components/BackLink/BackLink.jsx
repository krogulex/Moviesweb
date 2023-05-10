import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  :hover {
    color: #e1a126;
  }
`;

export const BackLink = ({ to, from }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      Back to {from.slice(1) === '' ? "Home" : from.slice(1, 6) }
    </StyledLink>
  );
};