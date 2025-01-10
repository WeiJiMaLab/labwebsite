import Layout from "../../components/layout";
import ZoomableImage from "../../components/zoomableimage";
import React, { useState } from "react";
import renderDropdownToggle from "../../components/dropdowntoggle";

const ResearchIntro = () => (
  <div className="container">
    <div>
      <ZoomableImage
        src="/images/transitmap.svg"
        alt="Subway map of current projects"
      />
      <div style={{ textAlign: "center", paddingBottom: "20px" }}>
        <div style={{ maxWidth: "40vw", margin: "0 auto" }}>
          <small>
            <i>
              <b>Subway map of current projects, by Jordan Lei. </b>
              Zoom and Pan to see details.
            </i>
          </small>
        </div>
      </div>
    </div>
    <div>
      <div>
        We aim to understand the strategies and algorithms of human
        decision-making using behavioral experiments, mathematical modeling, and
        neural networks. We are also interested in the neural basis of
        decision-making. Some of our work has more to do with encoding and
        representation than with decision-making. The lab's current focus areas
        are
        <ol>
          <li>Planning and sequential decision-making</li>
          <li>Social decision-making</li>
          <li>Approximate inference and resource rationality</li>
        </ol>
      </div>
    </div>
    <div>
      We have also worked extensively on{" "}
      <a href="#track1">visual and multisensory perception</a>,{" "}
      <a href="#track2">working memory</a>,{" "}
      <a href="#track2a">visual attention</a>,{" "}
      <a href="#track3">theories of neural coding and perceptual computation</a>
      , experimental tests of these theories,{" "}
      <a href="/files/publications/2019%20Song%20Bnaya%20Ma.pdf">
        exploration/exploitation
      </a>
      , and{" "}
      <a href="/files/publications/2017%20Stolarczyk%20Bhardwaj%20Bassler%20Ma%20Josic.pdf">
        social networks
      </a>
      , but those are currently less active. Our neural modeling work falls into
      a tradition that takes behavioral data and the problems faced by the
      organism as starting points to understand neural processes; for this, we
      use language of probability theory and machine learning. Our modeling
      usually starts with principles of optimality or rationality, but often
      ends up having suboptimal twists. This contrasts with another tradition,
      rooted in physics, in which neural measurements and in particular temporal
      dynamics are central, and theories are formulated in terms of differential
      equations and dynamical systems.
      <br />
      <br />
      <div>
        <ZoomableImage
          width={800}
          height={800}
          src="/images/201904 Origin tree of Ma Lab projects.jpg"
          alt="Origin tree of projects in the Ma Lab"
        />
        <div style={{ textAlign: "center", paddingBottom: "20px" }}>
          <div style={{ maxWidth: "40vw", margin: "0 auto" }}>
            <small>
              <i>
                <b>
                  Origin tree of projects in the Ma Lab, created by Wei Ji Ma.{" "}
                </b>
                Each project is part of a lineage of projects. This diagram
                shows how projects followed from each other, color-coded by
                topic area. Zoom and Pan to see details.
              </i>
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ResearchPlanning = () => (
  <ResearchDirection
    id="track5"
    title="Planning and sequential decision-making"
    intro={
      <p>
        Planning can be defined as the mental simulation of futures, as in
        navigation, career planning, programming, or national policy. Cognitive
        science has mostly studied planning in relatively simple sequential
        decision tasks, where simplicity could for example be measured by the
        size of the state space. Many real-world decision-tasks are more
        complex. In various projects, we are exploring the way people plan
        (mentally simulate future states) in relatively complex tasks, where
        exhaustive calculation is intractable for people, but we can still have
        experimental control and we can fit and compare models.
      </p>
    }
    content={
      <ul>
        <li>
          <b>Combinatorial planning in a two-player game</b> (Bas van Opheusden,
          Zahy Bnaya, Gianni Galbiati, Yunqi Li). Psychologists have long been
          interested in chess, because it might teach us about the nature of
          expertise and about the types of heuristics that people when the
          decision tree is large. However, chess is difficult to model
          quantitatively. Instead, we use a simpler game, akin to tic-tac-toe.
          For this game, we are developing an AI-inspired quantitative model
          that can simultaneously predict people's choices, position
          evaluations, reaction times, and eye movements.
          <ul>
            <li>
              <a href="https://basvanopheusden.github.io/">
                Play the game and explore the data
              </a>
            </li>
            <li>
              Van Opheusden B, Galbiati G, Bnaya Z, Li Y, Ma WJ (2017), A
              computational model for decision tree search.{" "}
              <i>
                Proceedings of{" "}
                <a href="http://www.cognitivesciencesociety.org/conference/cogsci2017/">
                  the 39th Annual Meeting of the Cognitive Science Society
                </a>
              </i>
              , 1254-1259.{" "}
              <a
                class="pub-link"
                href="/files/publications/2017 Van Opheusden Galbiati Bnaya Li Ma.pdf"
              >
                PDF
              </a>
            </li>
            <li>
              Van Opheusden B, Galbiati G, Bnaya Z, Ma WJ (2016), Do people
              think like computers?{" "}
              <a href="http://download.springer.com/static/pdf/802/bok%253A978-3-319-50935-8.pdf?originUrl=http%3A%2F%2Flink.springer.com%2Fbook%2F10.1007%2F978-3-319-50935-8&token2=exp=1487006806~acl=%2Fstatic%2Fpdf%2F802%2Fbok%25253A978-3-319-50935-8.pdf%3ForiginUrl%3Dhttp%253A%252F%252Flink.springer.com%252Fbook%252F10.1007%252F978-3-319-50935-8*~hmac=9078368466415ab169ccb39afa797c521057e0bed17c28cd07079c81e507f059">
                <i>Computers and Games</i> 2016, Leiden, The Netherlands, Series
                Volume 10068
              </a>
              . Eds. Plaat A, Kosters W, Van den Herik J 212-224.{" "}
              <a
                class="pub-link"
                href="/files/publications/2016 VanOpheusden_Bnaya_Galbiati_Ma.pdf"
              >
                PDF
              </a>
            </li>
          </ul>
        </li>
        <li>
          <b>Combinatorial planning in a two-player game - big data</b> (Ionatan
          Kuperwajs and Bas van Opheusden). We have partnered with{" "}
          <a href="https://www.peak.net">Peak Brain Training</a> to put
          four-in-a-row on their mobile game platform. We now have tens of
          millions of games that we can use to ask questions about learning and
          strategy.
        </li>
        <li>
          <b>Combinatorial planning in a one-player game</b> (Yichen Li and Zahy
          Bnaya). We use Rush Hour to study how people plan in a deterministic
          game with a large decision tree.
        </li>
        <li>
          <b>Procrastination</b> (Peipei Zhang) We build reinforcement learning
          models of procrastination.
        </li>
        <li>
          <b>Information sampling in a trust game.</b> See "Social
          decision-making" below.
        </li>
        <li>
          <b>Collaborative planning.</b> When planning collaboratively with a
          partner to solve a task, an agent needs to build beliefs over the
          background knowledge, current knowledge, policy, and goals of the
          partner. We currently have three projects in which collaboration is
          crucial.
        </li>
      </ul>
    }
  />
);

const ResearchSocial = () => (
  <ResearchDirection
    id="track6"
    title="Social decision-making"
    intro={
      <p>
        Social decision-making involves understanding how people make decisions
        that affect others. This includes studying generosity, altruism, trust,
        and the effects of social factors such as race on decision-making.
      </p>
    }
    content={
      <ul>
        <li>
          <b>Characterizing generosity</b> (Carolina di Tella and Paul
          Glimcher). If you can choose between $40 for yourself and $20 for me,
          or $30 for yourself and $50 for me, which would you choose? Economists
          have come up with different utility functions of how people weigh what
          they get themselves and what others get. We test these models using
          maximally informative experimental trials, both when the other is a
          friend and when the other is a stranger.
        </li>
        <li>
          <b>Is altruism intuitive?</b> (Carolina di Tella). We ask whether
          having a heavy cognitive load makes people more or less altruistic.
        </li>
        <li>
          <b>Altruism and group selection</b> (Carolina di Tella). We ask
          whether altruism has benefits when groups compete.
        </li>
        <li>
          <b>Information sampling in a trust game.</b> To determine whether
          someone can be trusted, you need to gather information about that
          person. However, if the other feels that you are gathering too much
          information about them, this might itself hamper trust building. This
          project investigates how these two social costs trade off against each
          other.
        </li>
        <li>
          <b>Effects of race on emotion judgment</b> (Jenn Laura Lee and Jon
          Freeman). In judging whether a face is happy or angry, racial biases
          might play a role. Using parametrically varying emotional face
          stimuli, we have collected behavioral data on how people judge emotion
          on a fine scale. We are now modeling these data using a
          drift-diffusion model.
        </li>
      </ul>
    }
  />
);

const ResearchApprox = () => (
  <ResearchDirection
    id="track4"
    title="Approximate inference and resource rationality"
    intro={
      <p>
        While we have extensive experience in the lab comparing Bayesian/optimal
        to alternative models (e.g.{" "}
        <a href="http://www.cns.nyu.edu/malab/static/files/publications/2016%20Shen%20Ma.pdf">
          Shen and Ma 2016
        </a>
        ), those alternatives are often not very satisfactory, because they are
        often specific to the task. We are interested in more general
        approximate frameworks.
      </p>
    }
    content={
      <ul>
        <li>
          <b>Resource-rational attention and working memory</b> (Ronald van den
          Berg, Aspen Yoo) In{" "}
          <a href="http://www.cns.nyu.edu/malab/static/files/publications/2018%20Van%20den%20Berg%20Ma.pdf">
            one recent paper (Van den Berg and Ma, 2018)
          </a>
          , we conceptualized set size effects in working memory as resulting
          from an optimal trade-off between performance and cost. This is an
          example of a <i>resource-rational</i> theory. In{" "}
          <a href="http://www.cns.nyu.edu/malab/static/files/publications/2018%20Yoo%20Klyszejko%20Curtis%20Ma.pdf">
            a related paper (Yoo et al., 2018)
          </a>
          , we examined how attention is near-optimally allocated to items with
          different behavioral relevance.
        </li>
        <li>
          <b>Effect of reward on working memory</b> (Ronald van den Berg and
          Qijia Zou) In a follow-up study, we ask whether paying people more can
          improve their working memory.
        </li>
        <li>
          <b>Partially committal observers</b> (Jenn Laura Lee) In a spatial
          cluster detection task, we ask whether the brain, when doing a
          categorization task with nuisance parameters, commits to specific
          values (point estimates) of those nuisance parameters, or maintains
          full probability distributions over them.
        </li>
        <li>
          <b>Approximate inference superproject</b> (Heiko Schütt and others)
          Across five different data sets, we ask whether the brain uses partial
          committal algorithms when making category decisions.
        </li>
        <li>
          <b>Approximate inference through sequential sampling</b> (Xiang Li and
          Luigi Acerbi) We ask if the brain is doing something like sequential
          Bayesian optimization in multi-alternative decision-making.
        </li>
      </ul>
    }
  />
);

const ResearchPerception = () => (
  <ResearchDirection
    id="track1"
    title="Visual and multisensory perception"
    intro={
      <p>
        Most of our work on visual and multisensory perception focuses on
        questions of inference and probabilistic representation. In Bayesian
        inference, an observer builds beliefs about world states based on
        observations and assumptions about the statistical structure of the
        world. If the assumptions are correct, then the Bayesian observer
        achieves optimal performance. When necessary, Bayesian observers
        integrate pieces of information in a way that takes into account the
        uncertainty of these pieces. We call this probabilistic computation.
        There is evidence from simple perceptual tasks that humans and monkeys
        perform probabilistic computation and are sometimes close to optimal.
        Relatively little work has been done in more complex perceptual
        decisions, such as extracting visual structure or categories from simple
        features. We are interested both in optimality and in probabilistic
        computation in such tasks, in particular ones in which the observer
        needs to integrate information from multiple items into a global,
        categorical judgment. We are also interested in confidence ratings.
      </p>
    }
    content={
      <div>
        <div>
          <ul>
            <li>
              Are confidence ratings based on posterior probabilities? Hsin-Hung
              Li
            </li>
            <li>
              Does uncertainty get taken into account in collinearity detection?
              Yanli Zhou, Luigi Acerbi
            </li>
            <li>
              How does the brain resolve visual ambiguity in the aperture
              problem? Edgar Walker
            </li>
            <li>
              Causal inference in auditory-visual perception. Luigi Acerbi and
              Trevor Holland
            </li>
            <li>
              How does the brain detect and discriminate clusters? Jenn Laura
              Lee
            </li>
          </ul>
        </div>
        <div>
          <b>Background and reviews</b> |
          <a
            href="./static/files/publications/2009 SAGE Encylopedia.pdf"
            alt="short, general introduction"
          >
            {" "}
            SAGE Encyclopedia of perception 2009
          </a>{" "}
          |
          <a
            href="./static/files/publications/2010 Ma.pdf"
            alt="signal detection theory versus Bayesian inference"
          >
            {" "}
            Vision Research 2010
          </a>{" "}
          |<a href="./static/files/publications/2012 Ma.pdf"> TICS 2012</a> |
          <a
            href="./static/files/publications/2013 Pouget Latham.pdf"
            alt="focus on future directions"
          >
            {" "}
            Nature Neuroscience 2013
          </a>{" "}
          |
          <a href="./static/files/publications/2014 Ma Jazayeri.pdf">
            {" "}
            Annual Review of Neuroscience 2014
          </a>
          <p></p>
          <b>Categorization</b> |{" "}
          <a href="./static/files/publications/2013 Qamar Ma.pdf">PNAS 2013</a>
          <p>
            We study a categorization task in which taking sensory uncertainty
            into account would help categorization performance, and ask whether
            people indeed do so.{" "}
          </p>
          <b>Causal inference in multisensory perception</b> |{" "}
          <a href="./static/files/publications/2007 Kording Shams.pdf">
            PLoS ONE 2007
          </a>{" "}
          |{" "}
          <a href="./static/files/publications/2013 Magnotti Beauchamp.pdf">
            Frontiers in Psychology 2013
          </a>{" "}
          |{" "}
          <a
            class="pub-link"
            href="./static/files/publications/2018 Acerbi Dokka Angelaki Ma.pdf"
          >
            PLoS Computational Biology 2018
          </a>
          <p>
            When you hear a sound and see something happening at the same time,
            these two stimuli might or might not have anything to do with each
            other. The brain must figure out which stimuli belong together and
            which don't.
          </p>
          <b>Sameness judgment</b> |{" "}
          <a href="./static/files/publications/2012 Van den Berg Ma PNAS1">
            PNAS 2012
          </a>
          <p>
            Judging whether a set of stimuli are the same or different is an
            important cognitive function and might underlie more abstract
            notions of similarity and equivalence.
          </p>
          <b>Confidence ratings</b> |{" "}
          <a
            class="pub-link"
            href="./static/files/publications/2017 Van den Berg Yoo Ma.pdf"
          >
            Psychological Review 2017
          </a>{" "}
          |{" "}
          <a
            class="pub-link"
            href="https://www.biorxiv.org/content/early/2017/11/16/218222"
          >
            Neural Computation 2018
          </a>{" "}
          We ask whether confidence ratings are based on posterior
          probabilities, and if so, how criteria are placed.
          <b>Visual search.</b> See "Visual attention" below.
          <b>Change detection.</b> See "Working memory" below.
          <b>Neural implementation.</b> See "Neural coding and computation"
          below.
        </div>
      </div>
    }
  />
);

const ResearchWorkingMemory = () => (
  <ResearchDirection
    id="track2"
    title="Working memory"
    intro={
      <p>
        Traditional models of working memory assert that items are remembered in
        an all-or-none fashion. We have shown that more important than quantity
        limitations are quality limitations: the memory of each item is noisy
        and the more items have to be remembered, the higher the noise level.
        This type of model is also called a "resource model". In another line of
        work, we try to take the decision stage of working memory tasks
        seriously; for example, to understand change detection, one has to
        understand the process of comparing the remembered stimuli with the
        current stimuli. Along these lines, we are currently examining whether
        working memory contains a useful representation of uncertainty. Finally,
        we recently wrote about what determines whether a neural network
        maintains a memory using persistent activity versus sequential activity.
      </p>
    }
    content={
      <div>
        <div>
          <ul>
            <li>
              Incentivized reports of working memory confidence (Maija Honig and
              Daryl Fougnie)
            </li>
            <li>How is luminance contrast remembered? Stuart Jackson</li>
            <li>
              What is the source of interference in the n-back task? (Long Ni)
            </li>
            <li>Bayesian models of word recognition memory (Aspen Yoo)</li>
            <li>
              How is visual working memory uncertainty encoded in cortical
              activity? (Aspen Yoo, Tommy Sprague, and Clay Curtis)
            </li>
            <li>
              Memory of patterned stimuli, and the effects of feature expertise
              (Gianni Galbiati)
            </li>
            <li>
              Delayed localization: a new working memory paradigm (Aditi Singh
              and Andra Mihali)
            </li>
          </ul>
        </div>
        <div>
          <img
            src="./static/images/wilkenma.gif"
            className="project-image"
            id="wilkenma"
          />
          <b>Review of the resource view of working memory</b> |{" "}
          <a href="./static/files/publications/2014 Ma Bays.pdf">
            Nature Neuroscience 2014
          </a>
          <p></p>
          <b>Neural basis of working memory</b> |{" "}
          <a href="http://www.cns.nyu.edu/malab/static/files/publications/2019%20Orhan%20Ma.pdf">
            Nature Neuroscience 2019
          </a>
          <p></p>
          <b>Variable precision</b> |{" "}
          <a href="./static/files/publications/2012 Van den Berg Shin Ma PNAS.pdf">
            PNAS 2012
          </a>{" "}
          |{" "}
          <a
            href="./static/files/publications/2014 Van den Berg Ma.pdf"
            alt="introducing factorial model comparison"
          >
            Psychological Review 2014
          </a>
          <p>
            These papers develop the theory that the precision of encoding an
            item in working memory is variable from trial to trial and from item
            to item.
          </p>
          <b>Resource-rational theory of set size effects</b> |{" "}
          <a href="./static/files/publications/2018%20Van%20den%20Berg%20Ma.pdf">
            eLife 2018
          </a>
          <p>
            We propose a conceptually new way of thinking about resource
            limitations: not as a strict limitation, but as the result of a
            rational trade-off between performance and neural cost. The law of
            diminishing returns makes an appearance.
          </p>
          <b>Delayed estimation</b> |{" "}
          <a
            href="./static/files/publications/2004 JVision.pdf"
            alt="origin of the technique"
          >
            Journal of Vision 2004
          </a>{" "}
          |{" "}
          <a href="./static/files/publications/2012 Van den Berg Shin Ma PNAS.pdf">
            PNAS 2012
          </a>{" "}
          |{" "}
          <a
            href="./static/files/publications/2014 Van den Berg Ma.pdf"
            alt="introducing factorial model comparison"
          >
            Psychological Review 2014
          </a>
          <p>
            This is a task we introduced in working memory studies. Observers
            estimate the value of a remembered stimulus feature on a continuum.
            Models of set size effects are frequently tested using delayed
            estimation.
          </p>
          <b>Change detection and change localization</b> |{" "}
          <a href="./static/files/publications/2011 Elmore Wright.pdf">
            Current Biology 2011
          </a>{" "}
          |{" "}
          <a href="./static/file/publications/2012 Van den Berg Shin Ma PNAS.pdf">
            PNAS 2012
          </a>{" "}
          |{" "}
          <a href="./static/files/publications/2012 Keshvari Ma.pdf">
            PLOS ONE 2012
          </a>{" "}
          |{" "}
          <a href="./static/files/publications/2013 Keshvari Ma.pdf">
            PLOS Computation Biology 2013
          </a>{" "}
          |{" "}
          <a
            className="pub-link"
            href="./static/files/publications/2015 Devkar Wright Ma.pdf"
          >
            PDF
          </a>{" "}
          |{" "}
          <a
            className="pub-link"
            href="./static/files/publications/2017 Devkar Wright Ma.pdf"
          >
            Journal of Vision 2017
          </a>
          <p>
            Classic tasks with a twist: we always systematically vary the
            magnitude of change. Our main questions: what processes underlie the
            dependence of change detection behavior on set size; does
            uncertainty (reliability) get taken into account in change detection
            decisions? We have asked these questions both in humans and in
            non-human primates. Our main modeling framework combines limited
            resources, variable precision, and Bayesian inference. See also the
            data and code available <a href="./resources.html">here</a>.
          </p>
        </div>
      </div>
    }
  />
);

const ResearchVisualAttention = () => (
  <ResearchDirection
    id="track2a"
    title="Visual attention"
    intro={
      <p>
        We have several projects on distributed attention and several on
        selective attention. Our distributed attention projects use visual
        search using simple, briefly presented stimuli. First, we examine the
        effects of the number of items (set size) on precision and performance,
        similar to working memory. Signal detection theories of visual search
        often do not contain resource limitations. We have shown that resource
        limitations are the rule rather than the exception. Second, we ask how
        close decision-making in visual search is to optimal. Third, we ask how
        distractor heterogeneity (diversity) affects search behavior. Signal
        detection theory studies of visual search have usually focused on
        homogeneous distractors, for computational tractability. However,
        homogeneous distractors are not very natural. We try to do better by
        studying heterogeneous distractors, still in a signal detection theory
        context. In the realm of selective attention, we have worked on the role
        of uncertainty in attention (probabilistic computation), detecting
        microsaccades, and attentional deficits in ADHD.
      </p>
    }
    content={
      <div>
        <div>
          <ul>
            <li>How to optimally allocate attention? Nuwan de Silva</li>
            <li>
              How do task, memory demands, and stimulus spacing affect visual
              search with heterogeneous distractors? Andra Mihali
            </li>
            <li>
              How do various distractor statistics affect visual search with
              heterogeneous distractors? Joshua Calder-Travis
            </li>
          </ul>
        </div>
        <div>
          <b>Distributed attention: optimality</b> |{" "}
          <a href="./static/files/publications/2011 NatNeuro.pdf">
            Nature Neuroscience 2011
          </a>{" "}
          |{" "}
          <a href="./static/files/publications/2015 Ma Van den Berg.pdf">
            Vision Research 2015
          </a>{" "}
          |{" "}
          <a href="./static/files/publications/2016 Shen Ma.pdf">
            Psychological Review 2016
          </a>
          <p>
            These papers compare optimal against heuristic decision rules in
            visual search.
          </p>
          <b>Distributed attention: set size effects</b> |{" "}
          <a href="./static/file/publications/2012 Mazyar Ma.pdf">
            Journal of Vision 2012
          </a>{" "}
          |{" "}
          <a href="./static/file/publications/2013 Mazyar Ma.pdf">
            Journal of Vision 2013
          </a>
          <p>
            These papers study the effects of set size on visual search
            decisions.
          </p>
          <b>Distributed attention: heterogeneous distractors</b> |{" "}
          <a href="./static/files/publications/2011 NatNeuro.pdf">
            Nature Neuroscience 2011
          </a>{" "}
          |{" "}
          <a href="./static/file/publications/2012 Mazyar Ma.pdf">
            Journal of Vision 2012
          </a>{" "}
          |{" "}
          <a href="./static/file/publications/2013 Mazyar Ma.pdf">
            Journal of Vision 2013
          </a>{" "}
          |{" "}
          <a
            target="_blank"
            className="pub-link"
            href="./static/files/publications/2015 Bhardwaj Ma Josic.pdf"
          >
            Neural Computation 2015
          </a>{" "}
          |{" "}
          <a
            className="pub-link"
            href="./static/files/publications/2016 Bhardwaj Josic.pdf"
          >
            PLoS ONE 2016
          </a>
          <p>These papers use heterogeneous distractors in visual search.</p>
          <b>Distributed attention: multiple-object tracking</b> |{" "}
          <a href="./static/files/publications/2009 Ma Huang.pdf">
            Journal of Vision 2009
          </a>
          <p>
            Tracking multiple objects at once requires dividing attention, but
            it also has an inference (decision-making) component.
          </p>
          <b>Selective attention: the role of uncertainty</b> |{" "}
          <a href="https://www.biorxiv.org/content/early/2017/08/10/175075">
            PNAS 2018
          </a>
          <p>
            We asked whether the brain takes into account the level of
            uncertainty in setting decision criteria, when uncertainty is
            manipulated through attention.
          </p>
          <b>Selective attention: ADHD</b> |{" "}
          <a href="http://www.cns.nyu.edu/malab/static/files/publications/2018%20Mihali%20Young%20Adler%20Halassa%20Ma.pdf">
            Computational Psychiatry 2018
          </a>
          <p>
            We use a new experimental paradigm and a computational model to
            separately characterize perceptual and executive deficits.
          </p>
          <b>Selective attention: detecting microsaccades</b> |{" "}
          <a href="./static/files/publications/2017 Mihali van Opheusden Ma.pdf">
            Journal of Vision 2017
          </a>
          <p>
            Microsaccades have been used as a marker of selective attention.
            This paper develops a Bayesian method to detect microsaccades in
            noisy eye tracker data.
          </p>
        </div>
      </div>
    }
  />
);

const ResearchNeuralCoding = () => (
    <ResearchDirection
        id="track3"
        title="Neural coding and neural computation"
        intro={
            <p>
                Bayesian inference is a successful mathematical framework for describing
                how humans and other animals make perceptual decisions under
                uncertainty. This raises the question how neural circuits implement, and
                learn to implement, Bayesian inference. Our lab has developed theories
                for such implementation; these theories establish experimentally
                testable correspondences between neural population activity and Bayesian
                behavior. We have proposed how Bayesian cue combination could be
                implemented using populations of cortical neurons; we call this form of
                coding <i>probabilistic population codes</i> (PPCs). Physiologists have
                since confirmed several predictions arising from this framework. We have
                generalized the theories to more complex computations, including
                decision-making, visual search, and categorization, often including
                detailed human behavioral experiments. We have shown that behaviorally
                relevant perceptual uncertainty can be decoded from fMRI activity. Most
                recently, we discovered that generic neural networks can easily learn to
                approximate Bayesian computation. Ongoing NIH-funded research in
                collaboration with the laboratory of Andreas Tolias strives to elucidate
                how neural populations encode uncertainty in primary visual cortex.
            </p>
        }
        content={
            <div>
                <div>
                    <ul>
                        <li>
                            How is uncertainty encoded and propagated in visual
                            categorization? Edgar Walker and Andreas Tolias.
                        </li>
                    </ul>
                </div>
                <div>
                    <b>Reviews</b> |{" "}
                    <a href="http://dx.doi.org/10.1016/j.conb.2008.07.004">
                        Current Opinion in Neurobiology 2008
                    </a>{" "}
                    |{" "}
                    <a
                        href="./static/files/publications/2010 Ma.pdf"
                        alt="signal detection theory versus Bayesian inference"
                    >
                        Vision Research 2010
                    </a>{" "}
                    |{" "}
                    <a href="./static/files/publications/2014 Ma Jazayeri.pdf">
                        Annual Review of Neuroscience 2014
                    </a>
                    <p></p>
                    <b>Cue combination</b> |{" "}
                    <a href="./static/files/publications/2006 Ma Pouget.pdf">
                        Nature Neuroscience 2006
                    </a>
                    <p>
                        Foundational paper of probabilistic population codes, with an
                        application to cue combination.
                    </p>
                    <b>Decision-making</b> |{" "}
                    <a href="./static/files/publications/2008 Beck Pouget.pdf">
                        Neuron 2008
                    </a>
                    <p>
                        Tasks in which the observer accumulates evidence over time. We
                        introduce an alternative to the drift-diffusion model.
                    </p>
                    <b>
                        Experimental tests of the likelihood component of probabilistic
                        population codes
                    </b>{" "}
                    |{" "}
                    <a href="./static/files/publications/2015 Van Bergen Jehee.pdf">
                        Nature Neuroscience 2015
                    </a>
                    <p>
                        In these papers, we show that behaviorally relevant likelihood
                        functions (and associated uncertainty) can be decoded on a
                        trial-by-trial basis from either the BOLD response in early visual
                        cortex or from multi-unit activity in V1.
                    </p>
                    <b>Physiological tests of Poisson-like variability</b> |{" "}
                    <a href="./static/files/publications/2012 Berens Tolias.pdf">
                        Journal of Neuroscience 2012
                    </a>
                    <p>
                        In this paper, we examine some of the basic predictions of
                        Poisson-like PPCs in monkey primate visual cortex.
                    </p>
                    <b>More complex probabilistic inference with PPCs</b> |{" "}
                    <a href="./static/files/publications/2011 Ma Pouget.pdf">
                        Nature Neuroscience 2011
                    </a>{" "}
                    (visual search) |{" "}
                    <a href="./static/files/publications/2013 Qamar Ma.pdf">
                        PNAS 2013
                    </a>{" "}
                    (categorization) |{" "}
                    <a href="./static/files/publications/2013 Ma Rahmati.pdf">
                        Multisensory Research 2013
                    </a>{" "}
                    (causal inference)
                    <p>
                        These papers describe how more complex computations could be
                        implemented using probabilistic population codes.
                    </p>
                    <b>Neural population coding of multiple stimuli</b> |{" "}
                    <a
                        target="_blank"
                        className="pub-link"
                        href="./static/files/publications/2015 Orhan Ma.pdf"
                    >
                        Journal of Neuroscience 2015
                    </a>
                    <p>
                        We ask what happens if a single population has to encode multiple
                        stimuli.
                    </p>
                    <b>Probabilistic inference with generic neural networks</b> |{" "}
                    <a href="./static/files/publications/2017 Orhan Ma.pdf">
                        Nature Communications 2017
                    </a>
                    <p>
                        This paper uses a radically different approach from the papers
                        above: instead of manually constructing networks, we train very
                        simple neural networks, with comparable results. This paper reflects
                        our current thinking on the neural implementation of Bayesian
                        computation.
                    </p>
                    <b>Neural mechanisms of working memory</b> |{" "}
                    <a href="http://www.cns.nyu.edu/malab/static/files/publications/2019%20Orhan%20Ma.pdf">
                        Nature Neuroscience 2019
                    </a>
                    <p>
                        In neural networks, we examine what task properties and what
                        intrinsic network properties determine whether the mechanisms of
                        maintenance of working memory are more sequential (across the
                        population) or more persistent (within single neurons).
                    </p>
                </div>
            </div>
        }
    />
);

// A component that renders a research direction with a button to show/hide details
class ResearchDirection extends React.Component {
    constructor(props) {
        super(props);
        // Initialize the state with detailsOpen set to false
        this.state = { detailsOpen: false };
    }

    render() {
        // Destructure the title, intro, and content props
        const { title, intro, content } = this.props;
        return (
            <div className="row" id={this.props.id}>
                <h2 className="col-xs-12">{title}</h2>
                <div className="col-md-12">
                    {intro}
                    {renderDropdownToggle(
                        "Show / Hide Details", // Button text
                        "detailsOpen", // State key to toggle
                        <div style={{ paddingLeft: "100px" }}>{content}</div>, // Content to show/hide
                        this.state, // Current state
                        this.setState.bind(this) // Function to update state
                    )}
                </div>
            </div>
        );
    }
}

const Direction = () => (
  <Layout>
    <div className="banner">
      <h1>Research</h1>
      <ResearchIntro />
      <ResearchPlanning />
      <ResearchSocial />
      <ResearchApprox />
      <ResearchPerception />
      <ResearchWorkingMemory />
      <ResearchVisualAttention />
      <ResearchNeuralCoding />
    </div>
  </Layout>
);

export default Direction;
