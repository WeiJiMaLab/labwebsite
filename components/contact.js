import Image from "next/image";
import { Row, Col } from "reactstrap";
import React from "react";

export default function Contact() {
  return (
    <div className="banner" style={{paddingBottom: "100px"}}>
      <h1>Getting to Know Us</h1>
      <p>
        If you would like to get to know the lab, here are a few things you can
        do:
      </p>
      <ul>
        <li>
          Try out the tasks we use in the{" "}
          <a href="https://weijimalab.github.io">Ma Lab Interactive Task Arena</a>
          . Some come with example data.
        </li>
        <li>
          Read the{" "}
          <a href="https://www.quantamagazine.org/neural-noise-shows-the-uncertainty-of-our-memories-20220118/">
            2022 article in Quanta Magazine
          </a>{" "}
          about a collaborative project with the lab of Clay Curtis.
        </li>
        <li>
          Listen to the Feb 4, 2020{" "}
          <a href="https://www.codykommers.com/post/14-weiji-ma-on-dealing-with-imposter-syndrome">
            interview with Weiji
          </a>{" "}
          on the podcast <i>Cognitive Revolution</i> by Cody Kommers.
        </li>
        <li>
          Read the 2019{" "}
          <a href="https://www.apa.org/monitor/2019/02/decisions">
            profile of the lab
          </a>{" "}
          in the <i>APA Monitor</i>.
        </li>
        <li>
          Visit the{" "}
          <a href="https://www.youtube.com/channel/UCRRkHqeEViHxRocVdj9yFgA">
            Ma Lab YouTube Channel
          </a>{" "}
          for tutorials, research talks, Weiji telling his life story, and other
          things you didn't think you needed (and probably don't).
        </li>
        <li>
          To hear Wei Ji's views on science outreach, science advocacy, and
          academic activism, you can{" "}
          <a href="https://www.youtube.com/watch?v=Kj0byhMbR2o">watch the video</a>{" "}
          of his acceptance speech of the{" "}
          <a href="https://cognitivesciencesociety.org/elman-prize/">
            Elman Prize for Scientific Achievement and Community Building
          </a>
          .
        </li>
      </ul>
      <br/><br/>
      <h1>Contact Us</h1>
      <Row>
        <Col md="3">
          <h3>Address</h3>
        </Col>
        <Col md="9">
          Wei Ji Ma Lab
          <br />
          Meyer Hall
          <br />
          4 Washington Place
          <br />
          New York, NY 10003
        </Col>
      </Row>
      <Row>
        <Col md="3">
          <h3>Email</h3>
        </Col>
        <Col md="9">
          <a href="mailto:weijima@nyu.edu">weijima@nyu.edu</a>
        </Col>
      </Row>
    </div>
  );
}
