import React from "react";
import { Button, Grid, Column } from "@carbon/react";

const LandingPage = () => {
  return (
    <Grid className="landing-page" fullWidth>
      <Column lg={16} md={8} sm={4} className="landing-page__r2">
        <Grid className="tabs-group-content">
          <Column md={4} lg={7} sm={4} className="landing-page__tab-content">
            <img
              className="landing-page__headshot"
              src={`${process.env.PUBLIC_URL}/headshot.jpeg`}
              alt="Tex Albuja"
            />
            <h2 className="landing-page__subheading">Hi, I'm Tex Albuja</h2>
            <p className="landing-page__p">
              I'm a Software Engineer and I want to become a Software
              Generalist, in the meantime I can share my journey with <b>You</b>
            </p>
            <Button className="landing-page__button" onClick={() => {}}>
              Connect
            </Button>
          </Column>
          <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
            <div class="yellow-sticky">
              <object
                data="sticky_notes/yellow.svg"
                aria-label="Yellow sticky"
              ></object>
            </div>
            <div class="violet-sticky">
              <object
                data="sticky_notes/violet.svg"
                aria-label="Violet sticky"
              ></object>
            </div>
            <div class="teal-sticky">
              <object
                data="sticky_notes/teal.svg"
                aria-label="Teal sticky"
              ></object>
            </div>
          </Column>
        </Grid>
      </Column>
    </Grid>
  );
};

export default LandingPage;
