import React from "react";
import Layout from "../components/layout";

const courses = [
  {
    title: "Bayesian modeling of behavior (Graduate)",
    semesters: [
      {
        term: "Fall 2016",
        details: "PSYCH-GA 3405-004, NEURL-GA 3042-006, NEURL-UA 302-006",
        syllabus:
          "./static/files/courses/2016 Bayesian modeling of behavior - Syllabus.pdf",
      },
      {
        term: "Fall 2017",
        details: "PSYCH-GA 3405-003, NEURL-GA 3042-001, NEURL-UA 302-007",
        syllabus:
          "./static/files/courses/2017 Bayesian modeling of behavior - Syllabus.pdf",
      },
      {
        term: "Fall 2018",
        details: "PSYCH-GA 3405-003, NEURL-GA 3042-004",
        syllabus:
          "./static/files/courses/2018 Bayesian modeling of behavior - Syllabus.pdf",
      },
      {
        term: "Spring 2021",
        details: "PSYCH-GA 3405",
        syllabus:
          "https://docs.google.com/document/d/1a-AoYxOngcvqrGN-rjffJ9y8iLMAAuXo7_BRDOG1o7s/edit",
      },
    ],
    description:
      "Bayesian inference is the mathematical framework for making optimal decisions and actions when the state of the world is not exactly known. This course will provide an intuitive yet mathematically rigorous introduction to Bayesian models of behavior in perception, memory, decision-making, and cognitive reasoning. While this is primarily a psychology course, we will also discuss connections to economics and neuroscience. This course is not about Bayesian data analysis, but about theories that the brain itself is a Bayesian decision-maker. Nevertheless, we will spend some time on model fitting and model comparison.",
  },
  {
    title: "Introduction to theoretical neuroscience (Undergraduate)",
    semesters: [
      {
        term: "Fall 2020",
        details: "NEURL-UA 302-004",
        syllabus:
          "https://docs.google.com/document/d/1yKjM8BZ1DaJyFQl8Fohpa-FdGkOWNC3DHHyfbEnaHik/edit",
      },
    ],
    description:
      "Part of a more structured curriculum in computational neuroscience at the undergraduate level, this course introduces students to computational neuroscience at the level of populations of neurons, behavior, and networks. Specific topics: the brain in numbers, receptive fields, tuning curves, linear-nonlinear models, neural variability, choice probability, signal detection theory, population codes, correlations, neural decoding, brain-machine interfaces, neural networks, and artificial intelligence. Programming is done in Matlab; no familiarity is assumed. In terms of math, a good grasp of Calculus 1 is sufficient.",
  },
  {
    title: "Psychological Science and Society (Undergraduate)",
    semesters: [
      {
        term: "Spring 2019",
        details: "PSYCH-UA 300",
        syllabus:
          "https://docs.google.com/document/d/1kjNSLFZjszrh1_VE5uIaQdldyXBs2ZH6vSyzJTGQ_AU/edit?usp=sharing",
      },
      {
        term: "Spring 2020",
        details: "PSYCH-UA 300",
        syllabus:
          "https://docs.google.com/document/d/1rn3qmbqQsjb0b6TciNwfD0mgGhBnwU4wLaWSvz_H36A/edit?usp=sharing",
      },
    ],
    description:
      "This new advanced elective will prepare students to be informed, critical, and active consumers of empirical psychological research. Students will learn to understand the research process by dissecting published papers and tracing the transition of research findings into popular writings about psychological research. By the end of the course, students will be able to critically examine the status and origin of claims based on psychology research in the popular media (“getting back to the sources” and debunking myths); possess a basic understanding of the societal relevance of several bodies of psychology research; understand how to correctly interpret statistics in the context of research; and possess basic skills of communicating and writing about psychology research aimed at a general audience (e.g. Scientific American, Psychology Today).",
  },
  {
    title: "From illusions to inference (Undergraduate)",
    semesters: [
      { term: "Spring 2014", details: "PSYCH-UA 300-012" },
      { term: "Spring 2015", details: "PSYCH-UA 300-007" },
      {
        term: "Spring 2016",
        details: "PSYCH-UA 60",
        syllabus:
          "./static/files/courses/2016 Illusions to inference - Syllabus.pdf",
      },
      {
        term: "Spring 2017",
        details: "PSYCH-UA 60",
        syllabus:
          "./static/files/courses/2017 Illusions to inference - Syllabus.pdf",
      },
      { term: "Fall 2019", details: "PSYCH-UA 60" },
    ],
    description:
      "Why do we see two lines of the same length as different? Why do healthy people hear spoken words in noise? Why do wine experts get fooled by food coloring? Our sensory perception easily falls prey to illusions and biases. It is tempting to think of these as failures of our brain, but they are not! In fact, they reveal the difficult challenges that our brain faces when interpreting the world, and the clever (and sometimes not so clever) solutions that it comes up with. We will use a wide variety of well-known and lesser-known illusions (visual, auditory, tactile, vestibular, and multisensory) to understand the central concept of inference in perception: the notion that the brain constantly forms hypotheses about the outside world and tries to figure out which of them is most probable. We will draw parallels with examples from online shopping to medical diagnosis to spam filtering to election forecasting to searching for crashed planes.",
  },
  {
    title: "Bayesian modeling of behavior (Crash course)",
    semesters: [
      {
        term: "Cosyne 2019 Tutorial",
        details: "",
        syllabus: "http://www.cosyne.org/c/index.php?title=Tutorial_2019",
      },
    ],
    description:
      "Bayesian inference is the mathematical framework for making optimal decisions and actions when the state of the world is not exactly known. In this tutorial, we discussed why one would do Bayesian modeling of behavior and how Bayesian concepts can help explain everyday perception. We used various perceptual illusions as examples. We worked through the mathematical details of decision tasks designed to illustrate Bayesian concepts: likelihood ratios, competition between prior and likelihood, nuisance parameters, measurement noise, and hierarchical inference. We discussed model fitting and model comparison techniques. We also discussed criticisms and shortcomings of Bayesian models of behavior.",
  },
  {
    title: "Introduction to neural data analysis (Undergraduate)",
    semesters: [
      {
        term: "Spring 2016",
        details: "NEURL-UA 302-005",
        syllabus:
          "./static/files/courses/2016 Intro to neural data analysis - Syllabus.pdf",
      },
      {
        term: "Spring 2017",
        details: "NEURL-UA 302-005",
        syllabus:
          "./static/files/courses/2017 Intro to neural data analysis - Syllabus.pdf",
      },
      {
        term: "Spring 2018",
        details: "NEURL-UA 302-003",
        syllabus:
          "./static/files/courses/2018 Intro to neural data analysis - Syllabus.pdf",
      },
    ],
    description:
      "This course will provide a rigorous introduction to basic data analysis, probability theory, hypothesis testing, and model fitting in neuroscience. We will pay special attention to the assumptions behind and relations between different techniques. The course will emphasize the ability to work with data on your own. This course is strongly recommended if you want to do research in neuroscience. We will use real data sets from many NYU labs. We will go in more depth on the math behind the statistics than most statistics courses. You will learn to program in Python.",
  },
  {
    title:
      "Introduction to theoretical neuroscience (Undergraduate and Graduate)",
    semesters: [
      {
        term: "Spring 2015",
        details: "NEURL‐UA 302‐011/012 and NEURL-GA 3042-001/004",
        syllabus:
          "./static/files/courses/2015 Intro to theoretical neuroscience - Syllabus.pdf",
      },
    ],
    description:
      "This course will introduce concepts and techniques related to the modeling of neural systems and behavior at an elementary level. The course will span the breadth of neuroscience, from ions to behavior. For each of those areas, we will focus in on one model or calculation and study that in depth. We will also discuss modern applications of theoretical neuroscience. Throughout the course, we will use both math and numerical simulations. Several tutorials will be integrated into the course: on the programming language Python, differential equations, and probability.",
  },
  {
    title: "Neural population coding (Graduate)",
    semesters: [
      {
        term: "Spring 2014",
        details: "NEURL-GA 3042-002 (co-taught with Roozbeh Kiani)",
        syllabus:
          "./static/files/courses/2014 Neural population coding - Syllabus.pdf",
      },
    ],
    description:
      "Recent technical advances in systems neuroscience have facilitated large-scale recordings from the nervous system. This seminar series explores the new opportunities that they offer for understanding neural computation. By reading and discussing experimental and theoretical papers, students will learn about several aspects of population codes, including: (i) encoding and decoding of information, (ii) the effects of network structure on population responses, (iii) high-dimensional representations and complex computations supported by them, and (iv) characterization of response dynamics. A guiding focus will be on the interplay between theory and experiment.",
  },
];

const Course = ({ title, semesters, description }) => (
  <div style={{paddingBottom: "30px"}}>
    <h2>{title}</h2>
    {semesters.map((semester, index) => (
      <p key={index}>
        <b>{semester.term}</b>: {semester.details} (
        <a href={semester.syllabus}>Syllabus</a>)<br />
      </p>
    ))}
    <p>{description}</p>
  </div>
);

const Teaching = () => (
  <Layout>
    <div className="banner">
    <h1>Teaching</h1>
      {courses.map((course, index) => (
        <Course key={index} {...course} />
      ))}
    </div>
  </Layout>
);

export default Teaching;
