import Section from "./Section";
import BodyContent from "./BodyContent";
import SectionTitle from "./SectionTitle";
import Tracking from "./Tracking";

import trackingIllustrator from "./../images/tracking.png";

import styled from "styled-components";
import { devices } from "../utils/breakpoints";
import SectionImage from "./SectionImage";

const Track = () => {
  return (
    <Section backgroundColor="#000">
      <Flex>
        <div className="section-body">
          <SectionTitle color="#fff" title="Track Your Shipment" />
          <BodyContent
            color="#a0a0a4"
            content=" If you have recently shipped a package with us, enter your tracking
          code below to check shipping status."
          />
          <Tracking />
        </div>

        <SectionImage
          imgSrc={trackingIllustrator}
          imgAlt="Illustration of guy holding a calculator"
        />
      </Flex>
    </Section>
  );
};

export default Track;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${devices.tablet} {
    flex-direction: row;
  }

  .section-body {
    width: 100%;

    @media ${devices.tablet} {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  img {
    max-inline-size: 100%;
    block-size: auto;
    width: 100%;

    @media ${devices.tablet} {
      width: 50%;
    }
  }
`;
