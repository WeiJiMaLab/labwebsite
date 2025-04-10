import Layout from "../../components/layout";

const WeijiPage = () => {
  return (
    <Layout>
      <div className="banner" style={{paddingTop: "60px"}}>
        <div className="container">

          <div className="frostedCard">
            <div className="row">
              <div className="col-md-6">
                <h1>Wei Ji Ma</h1>
                <h4>Professor of Neural Science and Psychology</h4>
                <div className="mt-3">
                  <a href="mailto:wei.ma@nyu.edu" className="button me-2">
                    Email
                  </a>
                  <a
                    href="https://scholar.google.com/citations?user=Y6QqQYAAAAAJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button"
                  >
                    Google Scholar
                  </a>
                </div>
              </div>

              <div className="col-md-5">
                <img
                  src="/images/weiji.jpg"
                  alt="Wei Ji Ma"
                  style={{
                    borderRadius: "100%",
                    objectFit: "cover",
                    width: "200px", // Adjust size as needed
                    height: "200px"
                  }}
                />
              </div>
            </div>
            
          </div>
        </div>
        <div>
        <br /><br />
          <div className="bio-section">
            <h3>Long Bio</h3>
            <p>
              Wei Ji Ma is Professor of <a href="http://www.cns.nyu.edu">Neural Science</a> and <a href="http://psych.nyu.edu">Psychology</a> at NYU. His lab studies decision-making in perception, attention, working memory, social cognition, and planning, using a combination of human behavioral experiments, computational modeling, and - through collaboration - electrophysiology and neuroimaging.
            </p>
            <p>
              Wei Ji grew up in the Netherlands and received M.Sc.s in Physics and Mathematics from the University of Groningen. He did his Ph.D. in Physics at the same place, but was mostly supervised by <a href="https://en.wikipedia.org/wiki/Erik_Verlinde">Erik Verlinde</a> at Utrecht University and Princeton University. He continued as a postdoc in computational neuroscience, first with <a href="https://alleninstitute.org/what-we-do/brain-science/about/team/staff-profiles/christof-koch/">Christof Koch</a> at Caltech and then with <a href="https://www.unige.ch/medecine/neuf/en/research/grecherche/alexandre-pouget/">Alexandre Pouget</a> at the University of Rochester. Along the way, he became more interested and involved in experimental psychology and the mathematical modeling of cognition.
            </p>
            <p>
              He was Assistant Professor of Neuroscience at <a href="http://www.bcm.edu">Baylor College of Medicine</a> from 2008 to 2013, with an affiliate appointment in Psychology at <a href="http://www.rice.edu">Rice University</a>. He has been at NYU since 2013, as full Professor since 2020. He has affiliate appointments in the <a href="https://med.nyu.edu/neuroscience/">Neuroscience Institute</a>, the <a href="https://isdm.nyu.edu">Institute for the Study of Decision Making</a>, the <a href="http://cds.nyu.edu">Center for Data Science</a>, and the <a href="http://cess.nyu.edu">Center for Experimental Social Science</a>.
            </p>
            <p>
              From 2016 to 2021, Wei Ji was Co-Program Director (with <a href="http://www.cns.nyu.edu/corefaculty/Wang.php">Xiao-Jing Wang</a>) of the NIH-funded <a href="https://as.nyu.edu/cns/UndergraduateProgram/FundingOpportunities/CompTrainingGrant.html">Training Program in Computational Neuroscience</a> at NYU.
            </p>
            <p>
              Moreover, Wei Ji is active in mentorship, community-building, and outreach. He is a founding member of the <a href="http://scaan.net">Scientist Action and Advocacy Network</a> (founder: <a href="https://wtadler.com">Will Adler</a>) and of <a href="https://www.neuwrite.org/neuwrite-nyu/">NeuWrite NYU</a> (founder: <a href="https://www.linkedin.com/in/alexdino">Alex Berardino</a>). With <a href="http://www.cns.nyu.edu/corefaculty/Alberini.php">Cristina Alberini</a>, Wei Ji founded the <a href="http://www.growingupinscience.com">Growing up in Science seminar series</a>, in which scientists tell their "unofficial stories". <a href="http://www.cns.nyu.edu/events/growingupinscience/unofficial.html#Wei Ji">Read</a> or <a href="https://www.youtube.com/watch?v=hFQeabuyhMo">listen to</a> Wei Ji's own unofficial story.
            </p>
            <p>
              Besides his academic work, Wei Ji is the co-founder (with <a href="http://www.ruralchina.org/our-team">Diane Geng</a> and <a href="https://academics.morris.umn.edu/sara-lam">Sara Lam</a>) of the <a href="http://www.ruralchina.org">Rural China Education Foundation</a>. He enjoys strategy games, badminton, <a href="https://www.jodyoberfelder.com/thebrainpiece/">science-art collaborations</a>, immersive theater, and exploring food.
            </p>
          </div>

          <div className="bio-section">
            <h3>中文简介</h3>
            <p>
              马伟基是美国纽约大学神经科学和心理学教授，他注重研究人类的感知、记忆及决策。他是一名荷兰华裔，其祖辈在上世纪二十年代从中国烟台移民到荷兰。马伟基于格罗宁根大学先后获得物理学硕士、数学硕士和物理学博士学位。从2002至2008年间，他分别在加州理工学院和罗彻斯特大学从事计算神经学方面的博士后研究工作，并在贝勒医学院开始他的教学生涯(2008-2013)。他长期致力于教育政策、非营利组织管理及科学普及领域的发展，并于2005年成立了乡村教育促进会。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WeijiPage; 