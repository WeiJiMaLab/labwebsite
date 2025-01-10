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
            Center for Neural Science and the Department of Psychology at{" "}
            <b>New York University</b>. Founded in 2008 and relocated to NYU in
            2013, our lab investigates human cognition and perception through
            the frameworks of computational cognitive science and computational
            neuroscience.
          </p>
          <br />
          <p>
            Our primary goal is to understand the algorithms and mechanisms the
            brain uses to make decisions with incomplete information. To achieve
            this, we employ a combination of <b>human behavioral experiments</b>{" "}
            and <b>cognitive modeling</b>. Additionally, we model neural
            populations, train neural networks, and collaborate with experts in
            neurophysiology and neuroimaging.
          </p>
          <br />
          <p>
            The lab's current research focuses on <b>multi-step planning</b>,{" "}
            <b>approximate inference and resource rationality</b>, and{" "}
            <b>collaborative decision-making</b>. Over the years, we have also
            contributed to the study of visual and multisensory perception,
            working memory, visual attention, neural coding theories, and{" "}
            perceptual computation Other areas of exploration include{" "}
            experimental validation of these theories, exploration/exploitation
            trade-offs, and social networks.
          </p>
          <br />
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
