import React from "react";
import "./ProfessionalPhilosophy.css";
import titleSlide from "../assets/images/philosophy/title-slide.jpg";
import conceptualSynthesis from "../assets/images/philosophy/conceptual-synthesis.jpg";
import dataCollection from "../assets/images/philosophy/data-collection.jpg";
import findingConnections from "../assets/images/philosophy/finding-connections.jpg";

function ProfessionalPhilosophy() {
  return (
    <main className="ph" id="philosophy">
      <header className="ph-hero">
        <div className="ph-wrap">
          <p className="ph-label">Professional Philosophy · Amanda Smith</p>
          <h1>Expressions of Corporeality</h1>
          <p className="ph-hero-sub">
            Navigating Ethical Safeguards and Relational Containers in Sensory Art Education
          </p>
          <div className="ph-hero-meta">
            <span>Art Education &amp; Visual Culture</span>
            <span>Minor: Special Education &amp; Rehabilitation Counseling</span>
            <span>The University of Arizona</span>
          </div>
          <nav className="ph-jump" aria-label="On this page">
            <a href="#ph-beliefs">Beliefs</a>
            <a href="#ph-unity">Service &amp; Unity</a>
            <a href="#ph-connections">Course Connections</a>
            <a href="#ph-practice">Advocacy in Practice</a>
            <a href="#ph-refs">References</a>
          </nav>
          <figure className="ph-hero-slide">
            <img
              src={titleSlide}
              alt="Title slide: Expressions of Corporeality: Navigating Ethical Safeguards and Relational Containers in Sensory Art Education, with metallic folded forms and QR codes for the counselor and student surveys."
            />
          </figure>
        </div>
      </header>

      <section className="ph-section" aria-labelledby="ph-who">
        <div className="ph-wrap ph-intro">
          <div>
            <p className="ph-label">01 / Who I am becoming</p>
            <h2 className="ph-h2" id="ph-who">
              A Philosophy of Care in the Studio
            </h2>
          </div>
          <div>
            <p className="ph-lede">
              As a doctoral candidate in Art Education &amp; Visual Culture minoring in Special
              Education &amp; Rehabilitation Counseling, my goal is to explore how we can integrate
              counseling frameworks, leadership, and advocacy into art education spaces to build
              safe, non-coercive classroom environments.
            </p>
            <p>
              I approach students, peers, and counseling professionals as experts in their own lived
              experience, using a reflexive lens to decenter rigid academic production in favor of
              human-centered care. Traditional art studio spaces routinely prioritize standardized
              aesthetic production, finished artistic products, and rigid curriculum timelines over
              open sensory regulation and emotional care.
            </p>
            <p>
              My inquiry sets out to decenter rigid curriculum expectations using the participatory
              propositions of Brazilian artist Lygia Clark (1920–1988), such as <em>Bichos</em> and{" "}
              <em>Caminhando</em>. Working with Clark&apos;s propositions allows us to understand
              these practices on their own terms, demonstrating how meaning emerges from lived
              experience, touch, presence, and human connection in simultaneity.
            </p>
          </div>
        </div>
      </section>

      <section className="ph-section" id="ph-beliefs" aria-labelledby="ph-beliefs-h">
        <div className="ph-wrap">
          <p className="ph-label">02 / What I believe</p>
          <h2 className="ph-h2" id="ph-beliefs-h">
            Core Values
          </h2>
          <div className="ph-values">
            <article className="ph-card">
              <span className="ph-num">I.</span>
              <h3 className="ph-h3">Care Is Never Neutral</h3>
              <p>
                Inviting learners into tactile, sensory, or disorienting experiences is never
                neutral. It requires vocalizing standards of care from the beginning, establishing
                briefing and debriefing routines, and respecting boundaries so students retain the
                right to pause or decline participation at any time.
              </p>
            </article>
            <article className="ph-card">
              <span className="ph-num">II.</span>
              <h3 className="ph-h3">Listening as Leadership</h3>
              <p>
                As an educator, listening is central to leadership. Recognizing that asking students
                to do something vulnerable can feel strange or disorienting, I aim to create a space
                where students feel safe to be heard, where mistakes can be made and learned from in
                real time, and where their presence is validated.
              </p>
            </article>
            <article className="ph-card">
              <span className="ph-num">III.</span>
              <h3 className="ph-h3">Pacing as Care</h3>
              <p>
                I treat pacing itself as a primary ethical safeguard. Self pacing gives learners room
                to process sensory choices without feeling rushed or self-conscious.
              </p>
            </article>
            <article className="ph-card">
              <span className="ph-num">IV.</span>
              <h3 className="ph-h3">Choice &amp; Consent</h3>
              <p>
                Sensory interaction with objects must remain completely self-directed. Learners
                retain full autonomy over how, when, and to what degree they engage with tactile
                materials and movement.
              </p>
            </article>
            <article className="ph-card">
              <span className="ph-num">V.</span>
              <h3 className="ph-h3">Humble Materials &amp; Play</h3>
              <p>
                Using simple, humble materials (paper, scissors, yarn, rubber bands) removes the
                intimidation of making &quot;fine art.&quot; Playful engagement with humble materials
                invites silliness, laughter, and room for mistakes, fostering a low-stakes
                environment where emotional regulation may occur naturally.
              </p>
            </article>
            <article className="ph-card">
              <span className="ph-num">VI.</span>
              <h3 className="ph-h3">A Relational Container</h3>
              <p>
                I am not trying to create a therapy model. I am seeking feedback from the counseling
                community to understand how we can build a &quot;relational container&quot; in art
                education—a safe classroom space where standards of confidentiality, ethics,
                voluntary consent, and mutual respect are established from the outset. These ideas
                should be shared values amongst all communities.
              </p>
            </article>
          </div>
          <div className="ph-values-pad" />
        </div>
      </section>

      <section className="ph-section" id="ph-unity" aria-labelledby="ph-unity-h">
        <div className="ph-wrap">
          <p className="ph-label">03 / Dass &amp; Gorman concepts</p>
          <h2 className="ph-h2" id="ph-unity-h">
            Service &amp; Unity
          </h2>
          <div className="ph-unity">
            <blockquote className="ph-quote">
              &quot;The instinctive response of an open heart.&quot;
              <cite>Dass &amp; Gorman, 1985, p. 5</cite>
            </blockquote>
            <div>
              <p>
                Dass and Gorman (1985) describe helping as natural compassion, an expression of the
                kinship we share. They frame service not as an end in itself but as part of a larger
                journey from separateness toward unity.
              </p>
              <ul className="ph-concepts">
                <li>
                  <strong>Separateness and unity.</strong> Each appeal for help shows us where we
                  still feel separate and where we must grow.
                </li>
                <li>
                  <strong>Service as a path.</strong> Caring for others is a vehicle for
                  understanding life more deeply, and it changes the helper as well as the one being
                  helped.
                </li>
                <li>
                  <strong>Feedback on the path.</strong> Our fears and resistances surface as we
                  help, giving us the chance to see them clearly and loosen their hold.
                </li>
              </ul>
              <p className="ph-unity-note">
                In the studio, I see this unity when students working together as neighbors,
                teammates, and collaborators resolve a disorienting experience and participate
                through hands-on material agency.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ph-section" aria-label="Conceptual synthesis">
        <div className="ph-wrap">
          <figure className="ph-figure">
            <img
              src={conceptualSynthesis}
              alt="Conceptual Synthesis diagram on a coral and orange gradient. Three framed boxes connect: Art Education and Visual Culture at top; Special Education and SERP Pedagogical Lens and Clinical Counseling and Rehabilitation below; an Intersection box labeled Classroom Relational Containers and Safeguards. Collage photos of hands folding paper and QR codes for the student and counselor surveys border the slide."
            />
            <figcaption>
              <b>Figure 1</b>
              <span>
                Conceptual Synthesis: Art Education &amp; Visual Culture, Special Education &amp;
                SERP, Clinical Counseling &amp; Rehabilitation, and Overlap 1 (Classroom Relational
                Containers &amp; Safeguards).
                <span className="ph-credit">
                  Google. (2026, November 8). System flowchart for needs assessment [Large language
                  model]. google.com
                </span>
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="ph-section" id="ph-connections" aria-labelledby="ph-connect-h">
        <div className="ph-wrap">
          <p className="ph-label">04 / Connecting to course content</p>
          <h2 className="ph-h2" id="ph-connect-h">
            Course Connections
          </h2>
          <div className="ph-connect">
            <div>
              <h3 className="ph-h3">Relational Leadership</h3>
              <p>
                Kress et al. (2025) present relational-cultural theory as a framework for counselor
                leadership. It affirms what I hope to practice as a classroom leader: growth happens
                in connection, and listening is a form of leadership.
              </p>
            </div>
            <div>
              <h3 className="ph-h3">Rehabilitation Counseling Practice</h3>
              <p>
                Hartley and Tarvydas (2023) trace rehabilitation counseling&apos;s shift from
                paternalism to empowerment, where respect for autonomy means &quot;recognizing the
                client as the expert on their own life&quot; (&quot;What Is Rehabilitation
                Counseling?&quot; section, para. 5). I approach my students the same way. Their
                person–environment view, that outcomes grow from the interaction between a person and
                their surroundings, supports designing the studio itself as a relational container.
              </p>
              <p>
                Their holistic lens attends to &quot;connections between the body, mind, spirit, and
                community&quot; (Hartley &amp; Tarvydas, 2023, &quot;What Is Rehabilitation
                Counseling?&quot; section, para. 12), which speaks to corporeality in my practice.
              </p>
            </div>
            <div>
              <h3 className="ph-h3">Scaffolding &amp; Choice</h3>
              <p>
                Vygotskian scaffolding is a teaching method where an educator or mentor provides
                targeted support to help a learner master a task within their Zone of Proximal
                Development (Vygotsky, 1978; Wood et al., 1976). Universal Design for Learning
                offers multiple means of engagement and consent to participate.
              </p>
            </div>
            <div>
              <h3 className="ph-h3">Learning by Hand</h3>
              <p>
                Piaget&apos;s theory of cognitive development states that children actively construct
                knowledge through hands-on environmental interaction rather than passively absorbing
                information (Piaget, 1952). I utilize tactile discovery, and embodied theory in the
                classroom.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ph-section" id="ph-practice" aria-labelledby="ph-practice-h">
        <div className="ph-wrap">
          <p className="ph-label">05 / Advocacy Needs Assessment</p>
          <h2 className="ph-h2" id="ph-practice-h">
            Advocacy in Practice
          </h2>
          <div className="ph-intro ph-intro-spaced">
            <div>
              <p className="ph-lede">
                A vital need exists for co-creating embodied relational safeguards within educational
                spaces in collaboration with counseling practitioners.
              </p>
            </div>
            <div>
              <p>
                Rather than imposing rigid administrative policy deadlines before counseling feedback
                is complete, my primary actionable goal is to continuously bring the care framework I
                have learned across my SERP classes directly into the ongoing studio workshops I am
                conducting with my students through Fall 2027.
              </p>
              <p>
                Data collection uses a multi-modal, consent-based design across three distinct
                stakeholder groups identified in my initial asset map.
              </p>
            </div>
          </div>

          <figure className="ph-figure">
            <img
              src={dataCollection}
              alt="Data Collection Strategy diagram on a coral gradient. A triangle links the Student Reflection Form (active pilot sensation), the Counseling Community Survey (asynchronous feedback), and Peer Needs-Assessment Interviews (projected somatic and play focus). Center labels read Student-Peer Alignment and Practitioner Alignment. Photos show hands holding cut paper loops and folded paper forms, with QR codes for both surveys."
            />
            <figcaption>
              <b>Figure 2</b>
              <span>
                Three-Tier Data Collection &amp; Framework Alignment: Student Reflection Survey,
                Counseling Community Survey, and Qualitative Peer Interviews.
                <span className="ph-credit">
                  Google. (2026, November 8). Data collection, needs assessment [Large language
                  model]. google.com
                </span>
              </span>
            </figcaption>
          </figure>

          <p className="ph-label">Transparent Dual-Survey Comparison Matrix</p>
          <div className="ph-table-wrap">
            <table>
              <thead>
                <tr>
                  <th scope="col">Dimension</th>
                  <th scope="col">Student-Facing Survey (Gen Ed Studio)</th>
                  <th scope="col">Counselor-Facing Survey (SERP Community)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Language Style</td>
                  <td data-label="Student-Facing Survey">
                    Plain-language, sensation to embodied-focused.
                  </td>
                  <td data-label="Counselor-Facing Survey">Reflexive, and Resource-focused.</td>
                </tr>
                <tr>
                  <td>Primary Focus</td>
                  <td data-label="Student-Facing Survey">
                    Personal autonomy, choices, room pacing, tactile play.
                  </td>
                  <td data-label="Counselor-Facing Survey">
                    Co-creating safeguards, and boundaries in classroom ethics at introduction to
                    workshops and beginning of semester practices.
                  </td>
                </tr>
                <tr>
                  <td>Advocacy Value</td>
                  <td data-label="Student-Facing Survey">
                    Teaches students their lived experience and comfort matters.
                  </td>
                  <td data-label="Counselor-Facing Survey">
                    Engages counseling peers as collaborative experts in care.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <figure className="ph-figure">
            <img
              src={findingConnections}
              alt="Finding Connections comparison on a coral gradient. Left: Studio Relational Container (Art Education): embodied learning, sensory exploration, open-ended play, facilitated by educator, low-stakes materials, option to observe or opt out without penalty. Right: Clinical Therapeutic Container (Counseling): clinical diagnosis, trauma processing, treatment plans, facilitated by licensed counseling clinician, formal confidentiality and HIPAA boundaries. Overlap: voluntary consent, emotional safety, grounding. A black and white portrait of Lygia Clark sits above the overlap."
            />
            <figcaption>
              <b>Figure 3</b>
              <span>
                Finding Connections: Studio Relational Containers (Art Education), Clinical
                Therapeutic Containers (Counseling), and the Overlap (Voluntary Consent, Emotional
                Safety, Grounding). I aim to highlight the overlap in our respective fields.
                <span className="ph-credit">
                  Google. (2026, November 8). Venn diagram, needs assessment [Large language model].
                  google.com
                </span>
              </span>
            </figcaption>
          </figure>

          <p className="ph-label">Ongoing Workshop &amp; Defense Timeline (2026–2027)</p>
          <div className="ph-timeline">
            <div className="ph-phase">
              <p className="ph-label">Phase 1 · Fall 2026</p>
              <h3 className="ph-h3">Present Phase</h3>
              <p>
                Complete SERP 645 report; gather student reflection pilot data; conduct open
                counselor outreach.
              </p>
            </div>
            <div className="ph-phase">
              <p className="ph-label">Phase 2 · Spring / Summer 2027</p>
              <h3 className="ph-h3">Ongoing Practice</h3>
              <p>
                Conduct ongoing sensory workshops in art education classrooms; execute peer
                interviews with somatic and play therapy peers.
              </p>
            </div>
            <div className="ph-phase">
              <p className="ph-label">Phase 3 · Fall 2027</p>
              <h3 className="ph-h3">Implementation &amp; Defense</h3>
              <p>
                Synthesize qualitative data; co-create interdisciplinary classroom care guidelines;
                defend dissertation framework.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ph-section" aria-labelledby="ph-growing">
        <div className="ph-wrap ph-intro">
          <div>
            <p className="ph-label">06 / A philosophy in progress</p>
            <h2 className="ph-h2" id="ph-growing">
              Still Becoming
            </h2>
          </div>
          <div>
            <div className="ph-callout">
              <p>
                This philosophy is not final. As this project evolved through my counseling
                coursework, my positionality changed around asking questions about classroom ethics,
                advocacy in my design, and care in my leadership. I aim to also test the experiences
                out for myself in other classroom environments and my own creative work to examine
                the embodied act as an instructor and art practitioner.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ph-section" id="ph-refs" aria-labelledby="ph-refs-h">
        <div className="ph-wrap">
          <p className="ph-label">07 / Sources</p>
          <h2 className="ph-h2" id="ph-refs-h">
            References
          </h2>
          <div className="ph-refs">
            <p>
              Anthropic. (2026). <em>Claude</em> (Opus 5.5 version) [Large language model].{" "}
              <a href="https://claude.ai" target="_blank" rel="noopener noreferrer">
                https://claude.ai
              </a>
            </p>
            <p>
              Dass, R., &amp; Gorman, P. (1985). <em>How can I help? Stories and reflections on service</em>.
              Alfred A. Knopf.
            </p>
            <p>
              Hartley, M. T., &amp; Tarvydas, V. M. (2023). Rehabilitation counseling: A specialty
              practice of the counseling profession. In M. T. Hartley &amp; V. M. Tarvydas (Eds.),{" "}
              <em>The professional practice of rehabilitation counseling</em> (3rd ed.). Springer
              Publishing.
            </p>
            <p>
              Kress, V. E., Caputo, L. G. D., &amp; Forner, E. (2025). Relational-cultural theory as a
              framework for counselor leadership. <em>Journal of Counselor Leadership and Advocacy, 12</em>
              (1), 82–97.{" "}
              <a
                href="https://doi.org/10.1080/2326716X.2024.2332183"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://doi.org/10.1080/2326716X.2024.2332183
              </a>
            </p>
            <p>
              Piaget, J. (1952). <em>The origins of intelligence in children</em> (M. Cook, Trans.).
              International Universities Press.
            </p>
            <p>
              Vygotsky, L. S. (1978). <em>Mind in society: The development of higher psychological processes</em>{" "}
              (M. Cole, V. John-Steiner, S. Scribner, &amp; E. Souberman, Eds.). Harvard University
              Press.{" "}
              <a href="https://doi.org/10.2307/j.ctvjf9vz4" target="_blank" rel="noopener noreferrer">
                https://doi.org/10.2307/j.ctvjf9vz4
              </a>
            </p>
            <p>
              Wood, D., Bruner, J. S., &amp; Ross, G. (1976). The role of tutoring in problem solving.{" "}
              <em>Journal of Child Psychology and Psychiatry, 17</em>(2), 89–100.{" "}
              <a
                href="https://doi.org/10.1111/j.1469-7610.1976.tb00381.x"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://doi.org/10.1111/j.1469-7610.1976.tb00381.x
              </a>
            </p>
          </div>
          <a
            className="ph-download"
            href="https://drive.google.com/file/d/1e2Xznqfjcvd0ESMxSQxoaGall-MsrbfY/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the full Advocacy Needs Assessment (PDF)
          </a>
        </div>
      </section>

      <footer className="ph-foot">
        <div className="ph-wrap">
          Amanda Smith · Professional Philosophy · The University of Arizona · 2026
        </div>
      </footer>
    </main>
  );
}

export default ProfessionalPhilosophy;
