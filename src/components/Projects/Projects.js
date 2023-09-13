import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import moonbase from "../../Assets/Projects/moonbase.png";
import playbook from "../../Assets/Projects/cover-blue-edition.png";
import disk from "../../Assets/Projects/broken-disk.png";
import locks from "../../Assets/Projects/locks.png"
import killchain from "../../Assets/Projects/kill-chain.png"
import schiltron from "../../Assets/Projects/schiltron.png"
import hacker from "../../Assets/Projects/hacker.png"
import interop from "../../Assets/Projects/interop.png"
import bonzi from "../../Assets/Projects/bonzi.png"
import ams from "../../Assets/Projects/ams.png"
import web from "../../Assets/Projects/web.png"
import cloud from "../../Assets/Projects/cloud.png"
import earth from "../../Assets/Projects/earth.png"

function Projects() {
  const links = [
   {
    url: "https://www.inwed.org.uk/activity/voices-in-infosec-linkedin-live-event/",
    description: "International Women in Engineering Day LinkedIn live panel on achieving success and breaking into the cybersecurity field"
   },
    {
      url: "https://blogs.cisco.com/author/jeffbollinger",
      description: "Cisco Security Blogs by Jeff Bollinger"
    },
    {
      url: "https://podcasts.apple.com/us/podcast/how-cisco-uses-web-security-appliance-to-protect-its/id343898585?i=1000370866442",
      description: "Cisco TAC Security Podcast: Web Security with Jeff Bollinger"
    },
    {
      url: "https://www.zdnet.com/article/linkedin-has-massively-cut-the-time-it-takes-to-detect-security-threats-heres-how-it-did-it/",
      description: "ZDNet article: LinkedIn has massively cut the time it takes to detect security threats."
    },
    {
      url: "https://www.rsaconference.com/library/blog/crafting-the-infosec-playbook-security-monitoring-and-incident-response-master-pl",
      description: "RSA: Crafting the Infosec Playbook by Jeff Bollinger Book Review."
    },
    {
      url: "https://solutionsreview.com/security-information-event-management/the-6-highest-rated-siem-books-available-on-amazon/",
      description: "Book Review and ranking of Crafting the Infosec Playbook by Jeff Bollinger"
    },
    {
      url: "https://www.theregister.com/2016/07/27/cisco_warns_responders_drop_ego_assimilate_with_the_ir_playbook/",
      description: "Interview with Jeff Bollinger and The Register on confirmation bias in incident response"
    },
    {
      url: "https://dl.acm.org/doi/abs/10.1145/1111635.1111636",
      description: "ACM SIGCAS Computers and Society: Responsible Disclosure by Jeff Bollinger"
    },
    {
      url: "https://www.splunk.com/en_us/blog/learn/cybersecurity-infosec-books.html",
      description: "Splunk blog review of Crafting the Infosec Playbook by Jeff Bollinger"
    },
    {
      url: "https://www.cisco.com/c/dam/global/en_uk/products/collateral/cybersecurity-series-2019-threat-hunting.pdf",
      description: "Interviewed, quoted, and consulted on Cisco's Cybersecurity Series: Threat Hunting article"
    },
    {
      url: "https://www.cisco.com/c/dam/en_us/about/ciscoitatwork/borderless_networks/docs/cisco_it_case_study_wsa.pdf",
      description: "Intereviewed, quoted, and consulted on Cisco IT Infrastructure Case Study on Web Security"
    },
    {
      url: "https://www.cisco.com/c/dam/en_us/about/ciscoitatwork/downloads/ciscoitatwork/pdf/CSIRT_Network-Based_Intrusion_Prevention_System_Case_Study.pdf",
      description: "Interviewed, quoted, and consulted on Cisco Datacenter Case Study on Network Intrusion Prevention"
    },
    {
      url: "https://sils.unc.edu/news/2015/bollinger-infosec-book",
      description: "Article on Jeff Bollinger from UNC School of Information and Library Science"
    },
    {
      url: "https://www.oreilly.com/pub/au/6508",
      description: "O'Reilly Author Page for Jeff Bollinger"
    },
    {
      url: "https://github.com/meirwah/awesome-incident-response",
      description: "Crafting the Infosec Playbook by Jeff Bollinger on Awesome Incident Response Github collection"
    }
  ]; 
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        <strong className="purple">Publications and Conferences </strong>
        </h1>
        <p style={{ color: "white" }}>
          This is a non-exhaustive list of blogs, articles, conferences hosted, and other publications I've created or co-created.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moonbase}
              isBlog={false}
              title="(Re)building Threat Detection and Incident Response at LinkedIn"
              description="This blog discusses how LinkedIn rebuilt its security operations platform and teams, scaled to protect nearly 20,000 employees and more than 875 million members, and our approach and strategy to achieve this objective. In subsequent posts, we will do a deep dive into how we built and scaled threat detection, improved asset visibility, and enhanced our ability to respond to incidents within minutes, with many lessons learned along the way."
              demoLink="https://engineering.linkedin.com/blog/2022/-re-building-threat-detection-and-incident-response-at-linkedin"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={playbook}
              isBlog={false}
              title="Crafting the Infosec Playbook"
              description={
                <span>
                  Co-authored this <a href="https://www.oreilly.com/library/view/crafting-the-infosec/9781491913598/" target="_blank" rel="noopener noreferrer">O'Reilly</a> book on building an incident response program and creating the process, philosophy, and architecture for implementing an information security monitoring program. The book was also translated into Japanese.
                </span>
              }            
              demoLink="https://www.infosecplaybook.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={disk}
              isBlog={false}
              title="Disk Image Deception"
              description="While working with Cisco's CSIRT, I co-authored a blog post highlighting our encounter with a malspam campaign that misused the .IMG file extension. Following this, our team developed specific incident response rules. One rule identified malicious disk image files in user inboxes, which had a minimal false-positive rate. Another tracked unusual activities tied to the registry assembly executable, a target for the Nanocore malware. We also emphasized monitoring uncommon command executions. Our experience taught us three main lessons: the limitation of auto-mitigation tools, the challenges of implementing simple solutions like blocking extensions in diverse enterprises, and the significance of understanding attacker behavior (TTPs) over solely focusing on known threat indicators."
              demoLink="https://blogs.cisco.com/security/disk-image-deception-incident-response"
            />
          </Col>
          </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={killchain}
              isBlog={false}
              title="The Right Data at the Right Time"
              description="Presented at the SANS SIEM Summit on defining the right observability for security monitoring and how to apply the data collection principles to delivering security monitoring."
              demoLink="https://www.sans.org/presentations/the-right-data-at-the-right-time/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={locks}
              isBlog={false}
              title="Cognitive Bias in Incident Response"
              description="In the blog 'Cognitive Bias in Incident Response', I illustrate into the pitfalls of overconfidence in cybersecurity incident response, highlighting the Dunning–Kruger (DK) effect. This cognitive bias leads some less-experienced analysts to mistakenly believe they possess superior skills. Drawing from the words of Charles Darwin and supported by the findings of Dunning and Kruger's studies, I illustrate how this misplaced confidence can manifest in the realm of IT security. Through a real-world scenario, the dangers of the DK effect become apparent, revealing that a premature assurance can lead to incomplete threat analysis and responses. The article emphasizes the importance of standardized methodologies, comprehensive documentation, and continuous training to combat these biases."
              demoLink="https://blogs.cisco.com/security/cognitive-bias-in-incident-response"
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={schiltron}
              isBlog={false}
              title="CSIRT Schiltron: Training, Techniques, and Talent"
              description="Developed and delivered this presentation on enabling readiness and improving capabilities with evolving threat profiles that require new approaches and new skillsets for incident reponse teams."
              demoLink="https://www.first.org/resources/papers/conf2019/1100-CSIRT-Schiltron-Final.pdf"
            />
          </Col>
          </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hacker}
              isBlog={false}
              title="How Computer Incident Response teams use Cyber Threat Intelligence (CTI) to keep up with the miscreants"
              description={
                <span>Developed and delivered this presentation at <a href="https://www.lacnic.net/2567/44/evento/first-symposium---lacnic" target="_blank" rel="noopener noreferrer">LACNIC 29</a> in Panama on the topics of cyber threat intelligence and how to apply lessons to responding to incidents and enhancing security monitoring playbooks to detect threat actors based on known tactics, techniques, and procedures.
              </span>
              }
              demoLink="https://www.first.org/events/symposium/panama2018/program#pHow-Computer-Incident-Response-teams-use-Cyber-Threat-Intelligence-CTI-to-ensure-they-keep-up-with-the-miscreants"
            />
          </Col>
         
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={interop}
              isBlog={false}
              title="Incident Detection and Response"
              description={
                <span>Developed and delivered this presentation at <a href="https://archive.interop.jp/2017/en/about/" target="_blank" rel="noopener noreferrer">InterOp Japan</a> on building a world class security team and demonstrating our approaches with web filtering and intrusion detection.
              </span>
              }
              demoLink="https://archive.interop.jp/2017/en/about/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bonzi}
              isBlog={false}
              title="Ad-Weary Or, “What Could Possibly Go Wrong?”"
              description={
                <span>Developed and delivered this presentation at both <a href="https://www.bsidesasheville.com/" target="_blank" rel="noopener noreferrer">Security B-Sides Asheville</a> and <a href="https://www.lacnic.net/2106/11/evento/welcome-to-lacnic-26-lacnog-2016" target="_blank" rel="noopener noreferrer">LACNIC/LACNOG 26</a> in Costa Rica on the threat of Ad-ware in enterprise networks and some of the more problematic issues I worked on while security monitoring and responding to threats. This presentation shows some of the tactics used and some of the research involved in preventing data loss and other damange from malicious or problematic advertising software.
              </span>
              }
              demoLink="https://www.youtube.com/watch?v=zfIAifhRMto"
            />
          </Col>
          </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ams}
              isBlog={false}
              title="FIRST Technical Colloquium Amsterdam"
              description={
                <span>Presented at, and have organized and hosted for 10 years the annual <a href="https://www.first.org/events/colloquia/" target="_blank" rel="noopener noreferrer">FIRST Technical Colloquium</a> in Amsterdam, Netherlands where in the decade of conference proceedings and trainings has produced hundreds of topical talks and presentations on threat actors, incident handling and management, threat research, malware analysis, threat intelligence, and many other varied information security related topics. The FIRST TC in Amsterdam is the longest running, <b>free</b> security conference in the world.
              </span>
              }
              demoLink="https://www.first.org/events/colloquia/amsterdam2022/program#pFIRST-TC-Amsterdam-2020-Day-1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={web}
              isBlog={false}
              title="The State of Web Security: Attack and Response"
              description={
                <span>Developed and delivered this presentation at several <a href="https://www.ciscolive.com/" target="_blank" rel="noopener noreferrer">Cisco Live events</a> in both the United States and Australia. This in-depth presentation covered the state of the art for web based attacks at the time, include drive-by downloads and watering hole attacks. The presentation detailed how to protect enterprises from such threats through HTTP/S inspection and creative web-based logging and monitoring. The Australia presentation earned a Distinguished Speaker Award for positive audience feedback.
              </span>
              }
              demoLink="https://www.alcatron.net/Cisco%20Live%202013%20Melbourne/Cisco%20Live%20Content/Security/BRKSEC-2010%20%20The%20State%20of%20Web%20Security%20-%20Attack%20and%20Response.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cloud}
              isBlog={false}
              title="Cloud Security Observability for Detection and Response"
              description={
                <span>Discussed enterprise scale security observability for incident response and threat detection, and how to approach customizing on each organization's unique requirements on the <a href="https://cloud.withgoogle.com/cloudsecurity/podcast/" target="_blank" rel="noopener noreferrer">Google Cloud Security Podcast</a>
              </span>
              }
              demoLink="https://cloud.withgoogle.com/cloudsecurity/podcast/ep96-cloud-security-observability-for-detection-and-response/"
            />
          </Col>
          </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={8} className="project-card">
            <ProjectCard
              imgPath={earth}
              isBlog={false}
              title=""
              description={
                <span>
                  <strong className="purple"><h2>Additional Links</h2></strong>
                  <ul>
                    {links.map((link, index) => (
                    <li key={index}>
                      <a href={link.url} target="_blank" rel="noopener noreferrer">{link.description}</a>
                    </li>
                ))}
                  </ul>
              </span>
              }         
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
