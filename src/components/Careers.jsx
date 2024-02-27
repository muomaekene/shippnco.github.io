import SectionTitle from "./SectionTitle";
import ArticleContent from "./ArticleContent";
import Section from "./Section";
import SectionImage from "./SectionImage";
import SectionHeader from "./SectionHeader";
import Button from "./Button";

import deliveryPeople from "../images/delivery-people.jpg";
import manWriting from "../images/man-writing.jpg";
import manInStore from "../images/man-in-store.jpg";

import styled from "styled-components";

import { devices } from "../utils/breakpoints";

const Careers = () => {
  return (
    <Section idValue="careers">
      <SectionTitle title="Become Part of Our Team" />
      <Flex>
        <div className="flex-item-1">
          <SectionImage imgSrc={deliveryPeople} imgAlt="delivering items" />
          <SectionImage imgSrc={manWriting} imgAlt="man writing" />
          <SectionImage imgSrc={manInStore} imgAlt="man inspecting store" />
        </div>
        <div className="flex-item-2">
          <SectionHeader content="Interested in Building a Career While Making an Impact in a Fast Developing and Connected World?" />
          <ArticleContent content="Meet our people, see where we work and join a diverse, dynamic and growing organization that continually invests in advancing your skills and professional opportunites while contributing something meaniful to the modern world." />
          <ArticleContent content="SHIPPN is home and every staff is a family member. Check out our job openings and see where you can come in." />
          <Button name="Find Opportunities" />
        </div>
      </Flex>
    </Section>
  );
};

export default Careers;

const Flex = styled.div`
  display: block;

  @media ${devices.tablet} {
    display: flex;
    flex-wrap: wrap;

    .flex-item-1 {
      flex: 1;
      margin-right: 20px;
    }

    .flex-item-2 {
      flex: 1;
      margin-top: -4px;
    }
  }
`;
