import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <section id="about">
      <div className="banner">
        <h1>About Us</h1>
        <div className="frostedCard">
          <p>
            We are the research group of <b>Dr. Wei Ji Ma</b>, based in the{" "}
            <b>Center for Neural Science</b> and the{" "}
            <b>Department of Psychology</b> at New York University. Founded in
            2008 and relocated to NYU in 2013, our lab investigates{" "}
            <b>human cognition and perception</b> through the frameworks of{" "}
            <b>computational cognitive science</b> and{" "}
            <b>computational neuroscience</b>.
          </p>
          <p>
            Our primary goal is to understand the algorithms and mechanisms the
            brain uses to make decisions with incomplete information. To achieve
            this, we employ a combination of <b>human behavioral experiments</b>{" "}
            and <b>cognitive modeling</b>. Additionally, we model neural
            populations, train neural networks, and collaborate with experts in
            neurophysiology and neuroimaging.
          </p>
          <p>
            The lab's current research focuses on <b>multi-step planning</b>,{" "}
            <b>approximate inference and resource rationality</b>, and{" "}
            <b>collaborative decision-making</b>. Over the years, we have also
            contributed to the study of{" "}
            <b>visual and multisensory perception</b>, <b>working memory</b>,{" "}
            <b>visual attention</b>, <b>neural coding theories</b>, and{" "}
            <b>perceptual computation</b>. Other areas of exploration include{" "}
            <b>experimental validation of these theories</b>,{" "}
            <b>exploration/exploitation trade-offs</b>, and{" "}
            <b>social networks</b>.
          </p>
          <p>
            Wei Ji recently wrote the book{" "}
            <i>Bayesian Models of Perception and Action: An Introduction</i>,
            along with Konrad Kording and Daniel Goldreich.
          </p>
        </div>
      </div>
    </section>
  );
}
