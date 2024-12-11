import Layout from "../../components/layout";
import React, { Component } from "react";
import LinkButton from "../../components/linkbutton";
import renderDropdownToggle from "../../components/dropdowntoggle";

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    this.setState((prevState) => ({
      isDropdownOpen: !prevState.isDropdownOpen,
    }));
  }

  render() {
    return (
      <div style = {{paddingBottom: "30px"}}>
        {this.props.content}
        <div>
          {renderDropdownToggle(
            "Sources",
            "isDropdownOpen",
            <ul>
              {this.props.sources.map((source, index) => (
                <li key={index}>
                  <a className="linkbutton" href={source.href}>
                    {source.text}
                  </a>
                </li>
              ))}
            </ul>,
            this.state,
            this.setState.bind(this)
          )}
        </div>
      </div>
    );
  }
}

function BADS() {
  const badsSources = [
    {
      href: "./static/files/publications/2017_Acerbi_Ma.pdf",
      text: "Acerbi, L., & Ma, W. J. (2017). Practical Bayesian optimization for model fitting with Bayesian Adaptive Direct Search. Advances in neural information processing systems, 30.",
    },
  ];

  const badsContent = (
    <div>
      <h2>Bayesian Adaptive Direct Search (BADS)</h2>
      <p>
        Contact:{" "}
        <a className="linkbutton" href="mailto:luigi.acerbi@helsinki.fi">
          Luigi Acerbi (luigi.acerbi@helsinki.fi)
        </a>
      </p>
      <LinkButton
        text="Code (Python)"
        href="https://github.com/acerbilab/pybads"
      />
      <LinkButton
        text="Code (MATLAB)"
        href="https://github.com/acerbilab/bads"
      />
      <LinkButton
        text="Documentation"
        href="https://acerbilab.github.io/pybads/"
      />
      <a href="/files/publications/2017_Acerbi_Ma.pdf">
        <img src="/images/BADS.png" width="100%" alt="BADS" />
      </a>
      BADS is a fast hybrid Bayesian optimization algorithm designed to solve
      difficult optimization problems, in particular related to fitting
      computational models (e.g., via maximum likelihood estimation). BADS has
      been intensively tested for fitting a variety of computational models, and
      is currently being used in many computational labs around the world (see{" "}
      <a
        className="linkbutton"
        href="https://scholar.google.co.uk/scholar?cites=7209174494000095753&as_sdt=2005&sciodt=0,5&hl=en"
      >
        Google Scholar
      </a>{" "}
      for many example applications). In our benchmark with real model-fitting
      problems, BADS performed on par or better than many other common and
      state-of-the-art optimizers, as shown in the original BADS paper{" "}
      <a
        className="linkbutton"
        href="./static/files/publications/2017_Acerbi_Ma.pdf"
      >
        (Acerbi and Ma, 2017)
      </a>
      . BADS requires no specific tuning and runs off-the-shelf similarly to
      other Python optimizers, such as those in scipy.optimize.minimize.
    </div>
  );

  return <Demo content={badsContent} sources={badsSources} />;
}

function IBS() {
  const ibsSources = [
    {
      href: "./static/files/publications/2020 Van Opheusden Acerbi Ma.pdf",
      text: "van Opheusden, B., Acerbi, L., & Ma, W. J. (2020). Unbiased and efficient log-likelihood estimation with inverse binomial sampling. PLoS computational biology, 16(12), e1008483.",
    },
  ];

  const ibsContent = (
    <div>
      <h2>Inverse Binomial Sampling (IBS)</h2>
      <p>
        Contact:{" "}
        <a className="linkbutton" href="mailto:luigi.acerbi@helsinki.fi">
          Luigi Acerbi (luigi.acerbi@helsinki.fi)
        </a>
        ,{" "}
        <a className="linkbutton" href="mailto:basvanopheusden@nyu.edu">
          Bas van Opheusden (basvanopheusden@nyu.edu)
        </a>
      </p>
      <LinkButton
        text="Code"
        href="https://github.com/basvanopheusden/ibs-development"
      />
      <LinkButton
        text="Documentation"
        href="https://github.com/acerbilab/ibs/wiki"
      />
      <a href="/files/publications/2020 Van Opheusden Acerbi Ma.pdf">
        <img src="/images/IBS.png" width="100%" alt="IBS" />
      </a>
      The fate of scientific hypotheses often relies on the ability of a
      computational model to explain the data, quantified in modern statistical
      approaches by the likelihood function. The log-likelihood is the key
      element for parameter estimation and model evaluation. However, the
      log-likelihood of complex models in fields such as computational biology
      and neuroscience is often intractable to compute analytically or
      numerically. In those cases, researchers can often only estimate the
      log-likelihood by comparing observed data with synthetic observations
      generated by model simulations. Standard techniques to approximate the
      likelihood via simulation either use summary statistics of the data or are
      at risk of producing substantial biases in the estimate. Here, we explore
      another method, inverse binomial sampling (IBS), which can estimate the
      log-likelihood of an entire data set efficiently and without bias. For
      each observation, IBS draws samples from the simulator model until one
      matches the observation. The log-likelihood estimate is then a function of
      the number of samples drawn. The variance of this estimator is uniformly
      bounded, achieves the minimum variance for an unbiased estimator, and we
      can compute calibrated estimates of the variance. We provide theoretical
      arguments in favor of IBS and an empirical assessment of the method for
      maximum-likelihood estimation with simulation-based models. As case
      studies, we take three model-fitting problems of increasing complexity
      from computational and cognitive neuroscience. In all problems, IBS
      generally produces lower error in the estimated parameters and maximum
      log-likelihood values than alternative sampling methods with the same
      average number of samples. Our results demonstrate the potential of IBS as
      a practical, robust, and easy to implement method for log-likelihood
      evaluation when exact techniques are not available.
    </div>
  );

  return <Demo content={ibsContent} sources={ibsSources} />;
}

function BayesianStatistics() {
  const bayesianSources = [
    {
      href: "./static/files/tutorial/bayesian_tutorial_20200617.pdf",
      text: "Slides (Part 1)",
    },
    {
      href: "./static/files/tutorial/bayesian_tutorial_20200624.pdf",
      text: "Slides (Part 2)",
    },
    {
      href: "https://docs.google.com/presentation/d/1OMLTBOSkeJB4pd9BgAl6rQYLNYvQydlzHwwTZgi5MUk/edit#slide=id.p",
      text: "Slides with notes (Part 2)",
    },
    {
      href: "https://colab.research.google.com/drive/1UzlnsH_RJiBSu3nMngLH4MwGii_WKMgC?usp=sharing",
      text: "Code example (presidential heights)",
    },
    {
      href: "https://colab.research.google.com/drive/1dibSGcrZZXdawXU9q_jFwudM1FRUAPsw?usp=sharing",
      text: "Code example (Aspen’s change detection task)",
    },
  ];

  const bayesianContent = (
    <div>
      <h2>Tutorial in Bayesian statistics</h2>
      <div>
        <h3>Bayesian Statistics Part 1: Basics and Bayes factors</h3>
        <p>
          Presenter: Ronald van den Berg
          <br />
          <LinkButton
            text="Video"
            href="https://www.youtube.com/watch?v=sNnNW8QOEbE&t=4s"
          />
          <LinkButton
            text="Slides"
            href="./static/files/tutorial/bayesian_tutorial_20200617.pdf"
          />
        </p>
        <p>
          Part 1 reviewed frequentist hypothesis testing (based on p values) and
          contrasted this approach with Bayesian hypothesis testing (using Bayes
          factors). Basic concepts of Bayesian statistics were reviewed
          (posteriors, priors, etc) and several standard hypothesis tests were
          discussed from both the frequentist and Bayesian perspective,
          including correlation, t-test, and ANOVA.
          <br />
          Prerequisites: basic probability theory, basic frequentist statistics
        </p>
      </div>
      <br/>
      <div>
        <h3>Bayesian Statistics Part 2: Parameter estimation and practice</h3>
          Presenter: Gianni Galbiati
          <br />
          <LinkButton
            text="Video"
            href="https://www.youtube.com/watch?v=mS-3MQvdQOY&list=PLmX7T5IuDU4e2bKeemAVvFdqSPADKu8pJ&index=3&t=3s"
          />
          <LinkButton
            text="Slides"
            href="./static/files/tutorial/bayesian_tutorial_20200624.pdf"
          />
          <LinkButton
            text="Slides (with notes)"
            href="https://docs.google.com/presentation/d/1OMLTBOSkeJB4pd9BgAl6rQYLNYvQydlzHwwTZgi5MUk/edit#slide=id.p"
          />
          <LinkButton
            text="Code example (presidential heights)"
            href="https://colab.research.google.com/drive/1UzlnsH_RJiBSu3nMngLH4MwGii_WKMgC?usp=sharing"
          />
          <LinkButton
            text="Code example (Aspen’s change detection task)"
            href="https://colab.research.google.com/drive/1dibSGcrZZXdawXU9q_jFwudM1FRUAPsw?usp=sharing"
          />
          Part 2 covered Bayesian parameter estimation with a practical
          emphasis. The first section briefly covered parameter estimation as a
          statistical paradigm for scientific inference and software options for
          doing it in Python. The second section was a hands-on tutorial using
          PyMC3 to complete analyses in worksheets.
          <br />
          Prerequisites: basic probability theory, basic frequentist statistics
      </div>
    </div>
  );

  return <Demo content={bayesianContent} sources={bayesianSources} />;
}

function FourInARow() {
  const fourInARowSources = [
    {
      href: "./static/files/publications/2021_van_Opheusden_Galbiati_Kuperwajs_Bnaya_li_Ma.pdf",
      text: "van Opheusden, B., Galbiati, G., Kuperwajs, I., Bnaya, Z., & Ma, W. J. (2021). Revealing the impact of expertise on human planning with a two-player board game.",
    },
  ];

  const fourInARowContent = (
    <div>
      <h2>Four-in-a-row</h2>
      <p>
        In the paper{" "}
        <a
          className="linkbutton"
          href="./static/files/publications/2021_van_Opheusden_Galbiati_Kuperwajs_Bnaya_li_Ma.pdf"
        >
          <i>
            Revealing the impact of expertise on human planning with a
            two-player board game
          </i>
        </a>{" "}
        (2021), we conducted a set of experiments on the game four-in-a-row,
        played on a 4-by-9 board. We also introduced a computational model of
        human moves. Here, you can try out the experiments and explore the data.
      </p>
      <LinkButton
        text="Code"
        href="https://github.com/basvanopheusden/fourinarow"
      />
      <LinkButton
        text="Try experiment"
        href="https://weijimalab.github.io/four_in_a_row/try_experiments.html"
      />
      <LinkButton
        text="Explore data"
        href="https://weijimalab.github.io/four_in_a_row/explore_data.html"
      />
      <a href="/files/publications/2021_van_Opheusden_Galbiati_Kuperwajs_Bnaya_li_Ma.pdf">
        <img src="/images/4-in-a-row.jpg" width="100%" alt="Four-in-a-row" />
      </a>
    </div>
  );

  return <Demo content={fourInARowContent} sources={fourInARowSources} />;
}

function VPModels() {
  const vpSources = [
    {
      href: "./static/files/publications/2012 Van den Berg Shin Ma PNAS.pdf",
      text: "Van den Berg, R., Shin, H., Chou, W. C., George, R., & Ma, W. J. (2012). Variability in encoding precision accounts for visual short-term memory limitations. Proceedings of the National Academy of Sciences, 109(22), 8780-8785.",
    },
    {
      href: "./static/files/publications/2012 Keshvari Ma.pdf",
      text: "Keshvari, S., Van den Berg, R., & Ma, W. J. (2012). Probabilistic computation in human perception under variability in encoding precision. PLoS One, 7(6), e40216.",
    },
    {
      href: "./static/files/publications/2013 Keshvari Ma.pdf",
      text: "Keshvari, S., Van den Berg, R., & Ma, W. J. (2013). No evidence for an item limit in change detection. PLoS computational biology, 9(2), e1002927.",
    },
  ];

  const vpContent = (
    <div>
      <h2>Variable-precision (VP) models</h2>
      <p>
        The variable-precision model is currently (2016) the best available
        model of set size effects in visual working memory. In this model, the
        observer has a noisy representation of all items in a memory array. The
        precision of this representation is itself modeled as a random variable
        - possibly reflecting fluctuations in attention. Mean precision
        decreases monotonically with set size. The VP model consistently
        outperforms the fixed-capacity, item-limit model by Pashler 1988 and
        Cowan 2001, and more recent variants. Here, we provide simple,
        stand-alone Matlab scripts to analyze data from two common paradigms:
        delayed estimation and change detection. In its basic form, the model
        has three parameters (for change detection) and four (for delayed
        estimation). Note that the VP model here (with a gamma distribution on
        precision) is slightly different from the one implemented in MemToolbox.
        Email us if you have any questions.
      </p>
      <div>
        <b>VP on delayed-estimation data</b>
        <div>
          <div>
            Most basic variable-precision model (use this if you are just
            starting)
          </div>
          <LinkButton
            text="Zip file (8 KB)"
            href="./static/files/dataAndCode/VPA_code.zip"
          />
        </div>
        <div>
          <div>Complete package (many variants)</div>
          <LinkButton
            text="Github"
            href="https://github.com/NYUMaLab/delayed_estimation_benchmark"
          />
        </div>
        <div>
          <div>Code authors</div>
          <a className="linkbutton" href="mailto:nronaldvdberg@gmail.com">
            Ronald van den Berg
          </a>
        </div>
      </div>
      <div>
        <b>VP on change detection data with controlled magnitude change</b>
        <div>
          <LinkButton
            text="Github"
            href="https://github.com/NYUMaLab/change_detection"
          />
          <LinkButton
            text="Code ZIP (664 MB)"
            href="./static/files/dataAndCode/Set_Size_Files.zip"
          />
          <LinkButton
            text="Code ZIP - Small (9.2 MB)"
            href="./static/files/dataAndCode/Set_Size_Files_Light.zip"
          />
        </div>
        <div>
          <div>Code authors</div>
          <a className="linkbutton" href="mailto:shaiyan@mit.edu">
            Shaiyan Keshvari
          </a>
        </div>
      </div>
      <div>
        <b>VP on change detection data with uncontrolled magnitude change</b>
        <div>
          <LinkButton
            text="Github"
            href="https://github.com/NYUMaLab/VP-on-change-detection-data-with-uncontrolled-magnitude-change"
          />
          <LinkButton
            text="Code ZIP"
            href="./static/files/dataAndCode/CDsimple_for_website.zip"
          />
        </div>
        <div>
          <div>Code authors</div>
          <a className="linkbutton" href="mailto:weijima@nyu.edu">
            Wei Ji Ma
          </a>
        </div>
      </div>
    </div>
  );

  return <Demo content={vpContent} sources={vpSources} />;
}

function DelayedEstimation() {
  const delayedEstimationSources = [
    {
      href: "./static/files/publications/2004 Wilken Ma.pdf",
      text: "Wilken, P., & Ma, W. J. (2004). A detection theory account of change detection. Journal of vision, 4(12), 11-11.",
    },
    {
      href: "http://media.wix.com/ugd//049fb3_99f64b76bc92288d138dc59105b36794.pdf",
      text: "Zhang, W., & Luck, S. J. (2008). Discrete fixed-resolution representations in visual working memory. Nature, 453(7192), 233-235.",
    },
    {
      href: "http://www.paulbays.com/pdf/BayCatHus09.pdf",
      text: "Bays, P. M., Catalao, R. F., & Husain, M. (2009). The precision of visual working memory is set by allocation of a shared resource. Journal of vision, 9(10), 7-7.",
    },
    {
      href: "http://www.psy.vanderbilt.edu/tonglab/web/papers/Rademaker_Tong_JoV_2012.pdf",
      text: "Rademaker, R. L., Tredway, C. H., & Tong, F. (2012). Introspective judgments predict the precision and likelihood of successful maintenance of visual working memory. Journal of vision, 12(13), 21-21.",
    },
    {
      href: "./static/files/publications/2012 Van den Berg Shin Ma PNAS.pdf",
      text: "Van den Berg, R., Shin, H., Chou, W. C., George, R., & Ma, W. J. (2012). Variability in encoding precision accounts for visual short-term memory limitations. Proceedings of the National Academy of Sciences, 109(22), 8780-8785.",
    },
    {
      href: "./static/files/publications/2014 Van den Berg Ma Psych Review.pdf",
      text: "Van den Berg, R., Awh, E., & Ma, W. J. (2014). Factorial comparison of working memory models. Psychological review, 121(1), 124.",
    },
  ];

  const delayedEstimationContent = (
    <div>
      <h2>Delayed-estimation benchmark data and factorial model comparison</h2>
      <p>
        Delayed estimation is a psychophysical paradigm developed in 2004 by
        Patrick Wilken and Wei Ji Ma, that is used to probe the contents of
        working memory. Observers remember one or multiple items and after a
        delay, report on a continuous scale the feature value of a stimulus at
        one probed location. This benchmark data set contains data from 10
        experiments and 6 laboratories. Additional data sets are welcome. Email
        us if you have any to add. Below, we also provide complete code to
        analyze the data.
      </p>
      <div>
        <LinkButton
          text="Github"
          href="https://github.com/NYUMaLab/delayed_estimation_benchmark"
        />
        <LinkButton
          text="All benchmark data"
          href="./static/files/dataAndCode/Van_den_Berg_2014_DATA.zip"
        />
        <LinkButton
          text="Code to analyze the benchmark data"
          href="./static/files/dataAndCode/Van_den_Berg_2014_CODE.zip"
        />
      </div>
      <div>
        <div>Code authors</div>
        <a className="linkbutton" href="mailto:nronaldvdberg@gmail.com">
          Ronald van den Berg
        </a>
      </div>
    </div>
  );

  return (
    <Demo
      content={delayedEstimationContent}
      sources={delayedEstimationSources}
    />
  );
}

function ChangeDetection() {
  const changeDetectionSources = [
    {
      href: "./static/files/publications/2004 Wilken Ma.pdf",
      text: "Wilken, P., & Ma, W. J. (2004). A detection theory account of change detection. Journal of vision, 4(12), 11-11.",
    },
    {
      href: "./static/files/publications/2012 Keshvari Ma.pdf",
      text: "Keshvari, S., Van den Berg, R., & Ma, W. J. (2012). Probabilistic computation in human perception under variability in encoding precision. PLoS One, 7(6), e40216.",
    },
    {
      href: "./static/files/publications/2013 Keshvari Ma.pdf",
      text: "Keshvari, S., Van den Berg, R., & Ma, W. J. (2013). No evidence for an item limit in change detection. PLoS computational biology, 9(2), e1002927.",
    },
  ];

  const changeDetectionContent = (
    <div>
      <h2>Change detection</h2>
      <p>
        Change detection is a classic paradigm developed by W.A. Phillips (1974)
        and Harold Pashler (1988), to assess the limitations of visual
        short-term memory. Our lab has made two improvements to this paradigm:
        first, we vary the magnitude of change on a continuum, so that we can
        plot entire psychometric curves and thus have more power to compare
        models. Second, we test new models, especially noise-based
        (continuous-resource) models, and found that they do better than
        item-limit (slot) models.
      </p>
      <div>
        <LinkButton
          text="Github"
          href="https://github.com/NYUMaLab/change_detection"
        />
        <LinkButton
          text="Code ZIP (664 MB)"
          href="./static/files/dataAndCode/Set_Size_Files.zip"
        />
        <LinkButton
          text="Code ZIP - Small (9.2 MB)"
          href="./static/files/dataAndCode/Set_Size_Files_Light.zip"
        />
      </div>
      <div>
        <LinkButton
          text="Noise-based models of change detection"
          href="./static/files/publications/2004 Wilken Ma.pdf"
        />
        <LinkButton
          text="Change magnitude variation"
          href="./static/files/publications/2012 Keshvari Ma.pdf"
        />
        <LinkButton
          text="Detailed testing of VSTM limitation models"
          href="./static/files/publications/2013 Keshvari Ma.pdf"
        />
      </div>

      <div>
        <div>Code authors</div>
        <a className="linkbutton" href="mailto:shaiyan@mit.edu">
          Shaiyan Keshvari
        </a>
      </div>
    </div>
  );

  return (
    <Demo content={changeDetectionContent} sources={changeDetectionSources} />
  );
}

function BayesianMicrosaccadeDetection() {
  const bmdSources = [
    { href: "./static/files/dataAndCode/BMD.zip", text: "Code" },
  ];

  const bmdContent = (
    <div>
      <h2>Bayesian microsaccade detection</h2>
      <LinkButton text="Code" href="./static/files/dataAndCode/BMD.zip" />
    </div>
  );

  return <Demo content={bmdContent} sources={bmdSources} />;
}

export default function Demos() {
  return (
    <Layout>
      <div className="banner">
        <h1>Demos</h1>
        <BADS />
        <IBS />
        <FourInARow />
        <BayesianStatistics />
        <VPModels />
        <DelayedEstimation />
        <ChangeDetection />
        <BayesianMicrosaccadeDetection />
      </div>
    </Layout>
  );
}