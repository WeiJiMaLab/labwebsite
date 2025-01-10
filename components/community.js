import React from "react";
import Layout from "./layout";

const Community = () => {
  return (
    <div className = "banner">
      <h1>Community involvement</h1>
      <p>
        We care deeply about quality of teaching, good mentorship, a healthy lab
        culture, outreach, and engaging with the broader community. Examples:
      </p>
      <ul>
        <li>
          <a href="https://docs.google.com/document/d/1f6foaCkHiCkPKjO0gdKkkdm2dn1EKn5xRKZv-Ut5Dg4/edit">
            Here is our statement on lab culture and expectations.
          </a>
        </li>
        <li>
          Wei Ji has been running the{" "}
          <a href="http://www.growingupinscience.com">Growing up in Science</a>{" "}
          mentorship network since 2014.
        </li>
        <li>
          He is also a founding member of the{" "}
          <a href="http://www.scaan.net">Scientist Action and Advocacy Network</a>.
        </li>
        <li>
          The lab is collaborating with{" "}
          <a href="https://mindhive.science/">MindHive</a> to bring cognitive
          science curriculum to high schools. This curriculum is designed to
          empower students to do their own studies.
        </li>
      </ul>
      <p>
        You can read more about these topics on{" "}
        <a href="community/lablife">Lab culture</a> and{" "}
        <a href="community/outreach">Outreach</a>. Many lab members are also
        active in these and other community efforts, and Weiji strongly
        encourages this participation.
      </p>
    </div>
  );
};

export default Community;
