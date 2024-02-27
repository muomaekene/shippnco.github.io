import styled from "styled-components";

import { devices } from "../utils/breakpoints";

const ArticleTitle = ({ title }) => {
  return <Heading>{title}</Heading>;
};

export default ArticleTitle;

const Heading = styled.h4`
  font-family: "Overpass", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  color: #d90429;

  @media ${devices.mobileL} {
    font-size: 20px;
  }
`;
