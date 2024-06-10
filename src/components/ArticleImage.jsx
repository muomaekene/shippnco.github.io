import styled from "styled-components";

const ArticleImage = ({ imgSrc, imgAlt }) => {
  return <Image src={imgSrc} alt={imgAlt} />;
};

export default ArticleImage;

const Image = styled.img`
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
`;
