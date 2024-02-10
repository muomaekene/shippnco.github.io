import ArticleContent from "./ArticleContent";
import Button from "./Button";

import goldenGate from "../images/golden-gate.jpeg";

import styled from "styled-components";

const Banner = () => {
  return (
    <Container>
      <article className="banner-article">
        <h2 className="banner-title">
          The Most Reliable Shipping Company in The West.
        </h2>
        <ArticleContent
          content="We move and deliver freight from the Bay Area to the world in a
          breeze. Don't hesitate to reach out to us whenever you want to send
          packages across the world."
        />
        <Button name="Get a Quote" />
      </article>
      <img
        src={goldenGate}
        alt="golden-gate-bridge-ship"
        className="banner-image"
      />
    </Container>
  );
};

export default Banner;

const Container = styled.section`
  background: #e6e6e6;

  .banner-article {
    display: flex;
    flex-direction: column;
    padding: 20px 15px;
  }

  .banner-title {
    font-size: 30px;
    font-weight: 500;
  }

  .banner-image {
    width: 100%;
    height: auto;
  }
`;
