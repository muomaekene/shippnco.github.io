import React from "react";
import styled from "styled-components";
import GroupTitle from "./GroupTitle";
import Review from "./Review";

import womanSmiling from "../images/woman-smiling.jpeg";
import manSmiling1 from "../images/man-smiling-1.avif";
import manSmiling2 from "../images/man-smiling2.jpg";
import olderWoman from "../images/older-woman.jpg";

const Reviews = () => {
  return (
    <Container>
      <GroupTitle title="Over 50 000 People Have Trusted Us With Their Shipping. Here Are Some Of The Feeback We Got" />
      <Review
        image={womanSmiling}
        name="Jane Doe"
        comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          recusandae non molestiae quis unde qui architecto, velit, quae quia,
          obcaecati soluta!"
      />
      <Review
        image={manSmiling1}
        name="John Doe"
        comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          recusandae non molestiae quis unde qui architecto, velit, quae quia,
          obcaecati soluta!"
      />
      <Review
        image={manSmiling2}
        name="Peter Johnson"
        comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          recusandae non molestiae quis unde qui architecto, velit, quae quia,
          obcaecati soluta!"
      />
      <Review
        image={olderWoman}
        name="Olivia Porter"
        comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          recusandae non molestiae quis unde qui architecto, velit, quae quia,
          obcaecati soluta!"
      />
    </Container>
  );
};

export default Reviews;

const Container = styled.section`
  background: #f7f7e0;
  padding: 20px;
`;
