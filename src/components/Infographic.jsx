import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Infographic.css';
import Chart from 'chart.js/auto';

function Infographic() {
  const spatialChartRef = useRef(null);
  const spatialChartInstance = useRef(null);

  useEffect(() => {
    // Chart.js Configuration - Updated Colors using CSS variables
    const colorPrimary = getComputedStyle(document.documentElement).getPropertyValue('--color-primary').trim() || '#85252A';
    const colorSecondary = getComputedStyle(document.documentElement).getPropertyValue('--color-secondary').trim() || '#9E4A28';
    const chartDarkRed = getComputedStyle(document.documentElement).getPropertyValue('--chart-dark-red').trim() || '#4d0000';
    const chartMaroon = getComputedStyle(document.documentElement).getPropertyValue('--chart-maroon').trim() || '#6a0000';
    const chartRedBrown = getComputedStyle(document.documentElement).getPropertyValue('--chart-red-brown').trim() || '#70331D';
    const chartLightOrange = getComputedStyle(document.documentElement).getPropertyValue('--chart-light-orange').trim() || '#C4623C';
    const chartDarkOrange = getComputedStyle(document.documentElement).getPropertyValue('--chart-dark-orange').trim() || '#9E4A28';
    const radarDataFill = getComputedStyle(document.documentElement).getPropertyValue('--radar-data-fill').trim() || 'rgba(158, 74, 40, 0.2)';
    const colorDark = getComputedStyle(document.documentElement).getPropertyValue('--color-dark').trim() || '#2A2A2A';

    // Updated font family for Chart.js elements
    Chart.defaults.font.family = "'Inter', sans-serif";
    Chart.defaults.color = colorDark;

    // Spatial Chart (Radar Chart)
    if (spatialChartRef.current && !spatialChartInstance.current) {
      spatialChartInstance.current = new Chart(spatialChartRef.current, {
        type: 'radar',
        data: {
          labels: [
            'Psychological Safety',
            'Design as Pedagogy',
            'Affective Architecture',
            'Object Dynamics',
            'Cultural Sensitivity'
          ],
          datasets: [{
            label: 'Conceptual Emphasis (1-10)',
            data: [9, 8, 10, 6, 7],
            backgroundColor: radarDataFill,
            borderColor: colorPrimary,
            pointBackgroundColor: colorPrimary,
            pointBorderColor: colorDark,
            pointHoverBackgroundColor: colorPrimary,
            pointHoverBorderColor: colorDark,
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            r: {
              angleLines: { color: 'rgba(0, 0, 0, 0.1)' },
              grid: { color: 'rgba(0, 0, 0, 0.1)' },
              pointLabels: {
                font: { size: 10 },
                color: colorDark
              },
              ticks: {
                beginAtZero: true,
                max: 10,
                stepSize: 2,
                backdropColor: 'rgba(255, 255, 255, 0.7)',
                font: { size: 9 },
                color: colorDark,
                showLabelBackdrop: false
              }
            }
          },
          plugins: {
            legend: { display: false },
            title: { display: false }
          }
        }
      });
    }

    // Cleanup function
    return () => {
      if (spatialChartInstance.current) {
        spatialChartInstance.current.destroy();
        spatialChartInstance.current = null;
      }
    };
  }, []);

  const downloadHtmlFile = () => {
    try {
      const htmlContent = document.documentElement.outerHTML;
      const blob = new Blob([htmlContent], { type: 'text/html' });
      const a = document.createElement('a');
      const url = URL.createObjectURL(blob);
      a.href = url;
      a.download = 'reframed-resilience-infographic.html';
      document.body.appendChild(a);
      a.click();
      URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error during file download:", error);
    }
  };

  return (
    <div className="infographic-container">
      <div className="infographic-content">
        
        {/* HEADER / TITLE */}
        <header className="infographic-header">
          <div className="mb-4">
            <Link to="/" className="back-link">
              ← Back to Main Page
            </Link>
          </div>
          <h1 className="infographic-title">
            Reframing Environments for Resilience
          </h1>
          <h2 className="infographic-subtitle">
            A Data-Driven Framework for Trauma-Informed Museum Practice
          </h2>
          <p className="infographic-nav-hint">
            1. Principles 2. Foundation 3. Environment 4. Outcomes 5. Implications 6. Framework 7. References
          </p>
        </header>

        {/* MODERNIZED STICKY NAVIGATION WITH GRADIENTS */}
        <nav className="sticky-nav-gradient">
          <div className="nav-links-container">
            <a href="#section1_principles" className="nav-link-gradient">1. Principles</a>
            <a href="#section2_foundation" className="nav-link-gradient">2. Foundation</a>
            <a href="#section3_environment" className="nav-link-gradient">3. Environment</a>
            <a href="#section4_result" className="nav-link-gradient">4. Outcomes</a>
            <a href="#section5_gaps" className="nav-link-gradient">5. Implications</a>
            <a href="#section6_framework" className="nav-link-gradient">6. Framework</a>
            <a href="#section7_references" className="nav-link-gradient">7. References</a>
          </div>
        </nav>

        {/* INTRO: ARTICLES SYNTHESIZED */}
        <section className="intro-section">
          <h3 className="section-header">
            Articles Synthesized
          </h3>
          <p className="intro-text">
            This framework, synthesized from <span className="font-bold text-secondary">70 articles</span> across the key concepts of art, trauma, and design, reveals that museums can effectively integrate trauma-informed principles. This integration allows them to design environments that cultivate safety, agency, and healing, repositioning the institution as a vital space of active care, connection, and recovery. This approach examines not only what is known about trauma-informed museum practice but also how knowledge from multiple disciplines can inform new principles for curating spaces of recovery and connection; creating an interaction between communicative modes of visual thinking (Duncum, P, 2004). This is an iterative process of learning to build a language around the field that encompasses trauma-aware practices.
          </p>
        </section>

        {/* 1. CORE PRINCIPLES (6 TIC Principles) */}
        <section id="section1_principles" className="section-with-offset">
          <h3 className="section-header">
            1. The Six Core Principles of Trauma-Informed Care (TIC)
          </h3>
          <p className="section-description">
            The foundation of a care-curated space rests on the six guiding principles of Trauma-Informed Care, derived from SAMHSA's Six Principles of Trauma-Informed Care (Cusick, 2022) and supported by (Corrado et al., 2021; Maddock, 2021; Armstrong et al., 2020; Tedeschi &amp; Calhoun, 2004), ensuring every interaction prioritizes safety, trust, and empowerment.
          </p>
          <div className="principles-grid">
            <div className="principle-card">
              <h4 className="principle-title">Safety (Physical &amp; Emotional)</h4>
              <p className="principle-text">Ensuring both visitors and staff feel safe, structurally and emotionally, throughout the space.</p>
            </div>
            <div className="principle-card">
              <h4 className="principle-title">Trustworthiness &amp; Transparency</h4>
              <p className="principle-text">Maintaining clear communication about processes, expectations, and object narratives.</p>
            </div>
            <div className="principle-card">
              <h4 className="principle-title">Peer Support &amp; Mutual Help</h4>
              <p className="principle-text">Fostering opportunities for connection, shared experience, and collective healing.</p>
            </div>
            <div className="principle-card">
              <h4 className="principle-title">Collaboration &amp; Mutuality</h4>
              <p className="principle-text">Sharing power between staff, curators, and visitors in the interpretive process.</p>
            </div>
            <div className="principle-card">
              <h4 className="principle-title">Empowerment, Voice, &amp; Choice</h4>
              <p className="principle-text">Valuing and validating visitor experiences and offering choices in engagement paths.</p>
            </div>
            <div className="principle-card">
              <h4 className="principle-title">Cultural, Historical, &amp; Gender Considerations</h4>
              <p className="principle-text">Actively recognizing and addressing historical bias, inequality, and cultural context.</p>
            </div>
          </div>
        </section>

        {/* 2. THE FOUNDATION: CREATIVE & THEORETICAL GROUNDING */}
        <section id="section2_foundation" className="section-with-offset foundation-section">
          <h3 className="section-header secondary">
            2. The Foundation: Creative &amp; Theoretical Grounding
          </h3>
          <div className="foundation-grid">
            <div>
              <p className="foundation-text">
                The <span className="font-bold">why</span> of this framework is built on established theories of human psychology and creativity. Art acts as more than just an aesthetic object; I found it to be a tool for communication, a catalyst for awe, and a method for relational knowledge-making.
              </p>
              <p className="foundation-text-small">
                I found that sources like Moustakas (1989) and Willshaw (2021) position <span className="font-bold">creativity as a reflective and relational form of knowledge-making</span>. This is amplified by research from Keltner &amp; Haidt (2003) and Piff et al. (2015), which defines <span className="font-bold">awe as a powerful self-transcendent emotion</span> that fosters prosocial behavior. Finally, I argue that sources like Samuel (2024) highlight <span className="font-bold">art's role as a vital non-verbal communication tool</span> for processing experiences that defy words for trauma survivors, facilitating emotional expression and healing when verbal communication proves inadequate (Samuel, 2024). King (2016) expands this understanding by situating art within a neurobiological framework with the primary tenets of <span className="font-bold">neuroplasticity in reframing experience</span> involved in trauma recovery. Bringing trauma-informed principles into curatorial design aligns with <span className="font-bold">Post-Traumatic Growth (PTG)</span>, defined as positive psychological change emerging through meaning reconstruction after trauma (Tedeschi &amp; Calhoun, 2004; Tedeschi &amp; Moore, 2021).
              </p>
            </div>

            {/* Donut Chart (50% / 25% / 25%) - SVG */}
            <div className="donut-chart-container">
              <h4 className="chart-title">Key Theoretical Pillars</h4>
              <div className="donut-chart-wrapper">
                <svg viewBox="0 0 100 100" className="donut-chart">
                  <circle cx="50" cy="50" r="48" fill="#fcf1eb" stroke="rgba(0,0,0,0.1)" strokeWidth="1"></circle>
                  <path d="M 50,2 A 48,48 0 1,1 50,98 L 50,50 Z" style={{fill: 'var(--chart-dark-red)'}}></path>
                  <path d="M 50,98 A 48,48 0 0,1 2,50 L 50,50 Z" style={{fill: 'var(--chart-maroon)'}}></path>
                  <path d="M 2,50 A 48,48 0 0,1 50,2 L 50,50 Z" style={{fill: 'var(--chart-dark-orange)'}}></path>
                  <circle cx="50" cy="50" r="28" fill="white"></circle>
                </svg>
              </div>
              <div className="chart-legend">
                <div className="chart-legend-item">
                  <span className="legend-color" style={{backgroundColor: 'var(--chart-dark-red)'}}></span>
                  Art as Non-Verbal Communication (50%)
                </div>
                <div className="chart-legend-item">
                  <span className="legend-color" style={{backgroundColor: 'var(--chart-maroon)'}}></span>
                  Heuristic &amp; Creative Inquiry (25%)
                </div>
                <div className="chart-legend-item">
                  <span className="legend-color" style={{backgroundColor: 'var(--chart-dark-orange)'}}></span>
                  Awe &amp; Self-Transcendence (25%)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. THE ENVIRONMENT: SPATIAL & AFFECTIVE APPLICATIONS */}
        <section id="section3_environment" className="section-with-offset environment-section">
          <h3 className="section-header">
            3. The Environment: Spatial &amp; Affective Applications
          </h3>
          <div className="environment-grid">
            <div className="radar-chart-container">
              <h4 className="chart-title">Elements of a Trauma-Informed Space</h4>
              <div className="chart-container">
                <canvas ref={spatialChartRef}></canvas>
              </div>
              <div className="chart-note">Scores reflect conceptual emphasis in synthesized literature (Scale 1-10).</div>
            </div>
            <div>
              <p className="environment-text">
                The <span className="font-bold">how</span> involves intentionally designing the museum as an <span className="font-bold italic">affective architecture</span>. I argue that this framework moves beyond <span className="italic">what</span> is displayed to <span className="italic">how</span> it is displayed, treating the environment as an active participant in the visitor's experience.
              </p>
              <p className="environment-text-small">
                I identified key spatial components. <span className="font-bold">Psychological Safety</span> (Willcox, 2016) is paramount, created through intentional design. I found that this <span className="italic">Reinventing the Setting</span> (Salom, 2011) treats the space as a pedagogy of care. This is supported by <span className="font-bold">Psychotherapeutic Object Dynamics</span> (Cowan et al., 2017; Gupta, 2025; Diamond et al., 2020), where objects are curated to invite emotional reactions and imaginative leaps in a safe context. <span className="font-bold">Design as a translational practice</span> situates a bridge between trauma-informed museum pedagogy and the creative, spatial, and narrative dimensions of curatorial content. Williams and Rosen's (2025) work has become a central anchor in shaping this chapter because it demonstrates how trauma-informed principles can be applied inside a museum setting without collapsing the distinction between education and clinical therapy. Their case study shows how PTSD survivors participating in Cognitive Processing Therapy (CPT) engaged with intentionally structured museum experiences designed to reinforce therapeutic skills, regulate emotional intensity, and restore a sense of capability within public space.
              </p>
            </div>
          </div>
        </section>

        {/* 4. THE RESULT: EMBODIED PRACTICES & HEALING OUTCOMES */}
        <section id="section4_result" className="section-with-offset outcomes-section">
          <h3 className="section-header secondary">
            4. The Result: Embodied Practices &amp; Healing Outcomes
          </h3>
          <div className="outcomes-grid">
            <div>
              <p className="outcomes-text">
                The <span className="font-bold">what</span> is the measurable human outcome. I found that when a trauma-informed theoretical grounding is applied to a purposefully designed space, it enables embodied practices that lead directly to resilience and healing.
              </p>
              <div className="outcomes-cards">
                <div className="outcome-card">
                  <h4 className="outcome-card-title">Primary Outcomes</h4>
                  <ul className="outcome-list">
                    <li><span className="font-semibold">Bringing trauma-informed principles into curatorial design aligns with Post-Traumatic Growth (PTG)</span>, defined as positive psychological change emerging through meaning reconstruction after trauma (Tedeschi &amp; Calhoun, 2004; Tedeschi &amp; Moore, 2021).</li>
                    <li>Through this engagement is the possibility of facilitating <span className="font-semibold">Meaning-Making</span> of past experiences.</li>
                    <li>Through this engagement reduces the task load of processing emotional experiences, and focuses on embodied response (Costello &amp; Walters, 2020; Salom, 2011; Keltner &amp; Haidt (2003)) and <span className="font-semibold">Emotional Regulation</span> (Dhillon, 2025).</li>
                    <li>Ultimately fostering the <span className="font-semibold">Prosocial Behavior</span> (Stellar et al., 2017) that rebuilds social bonds.</li>
                  </ul>
                </div>
                <div className="outcome-card">
                  <h4 className="outcome-card-title">Key Practices</h4>
                  <ul className="outcome-list">
                    <li>I argue this is achieved through <span className="font-semibold">Embodied Connection</span> (Westin, 2022), where art and movement allow visitors to reconnect with their own memories.</li>
                    <li>Interventions possible in this framework invite <span className="font-semibold">Co-advisors</span> into the exhibition space.</li>
                    <li><span className="font-semibold">Cognitive Processing Therapy (CPT)</span>, an evidence-based approach proven effective for various traumas, offers a structure designed to ensure cumulative skill-building and foster crucial group trust (Williams &amp; Rosen, 2025).</li>
                    <li>PTG (post traumatic growth) supports the concept of <span className="font-semibold">Trauma Healing &amp; Reprocessing</span> finding Resilience &amp; Self-Regulation.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Horizontal Bar Chart */}
            <div className="bar-chart-container">
              <h4 className="chart-title">Primary Healing Outcomes</h4>
              <div className="bar-chart">
                <div className="bar-item">
                  <div className="bar-label">Post-Traumatic Growth (PTG)</div>
                  <div className="bar-wrapper">
                    <div className="bar-fill bar-color-1" style={{width: '100%'}}></div>
                  </div>
                </div>
                <div className="bar-item">
                  <div className="bar-label">Meaning-Making</div>
                  <div className="bar-wrapper">
                    <div className="bar-fill bar-color-2" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="bar-item">
                  <div className="bar-label">Emotional Regulation</div>
                  <div className="bar-wrapper">
                    <div className="bar-fill bar-color-3" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="bar-item">
                  <div className="bar-label">Embodied Connection</div>
                  <div className="bar-wrapper">
                    <div className="bar-fill bar-color-4" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="bar-item">
                  <div className="bar-label">Prosocial Behavior</div>
                  <div className="bar-wrapper">
                    <div className="bar-fill bar-color-5" style={{width: '70%'}}></div>
                  </div>
                </div>
              </div>
              <div className="bar-chart-scale">
                <span className="font-bold">Lighter Impact</span>
                <span>...</span>
                <span className="font-bold">Stronger Impact</span>
              </div>
              <div className="chart-note">Bar length reflects conceptual importance in the framework's literature review.</div>
            </div>
          </div>
        </section>

        {/* 5. IMPLICATIONS, GAPS, AND FUTURE RESEARCH */}
        <section id="section5_gaps" className="section-with-offset">
          <h3 className="section-header">
            5. Implications, Gaps, and Future Research
          </h3>
          <p className="section-description">
            Based on the literature I synthesized, three primary challenges prevent the widespread adoption of trauma-informed curatorial models.
          </p>
          <div className="challenges-grid">
            <div className="challenge-card">
              <h4 className="challenge-title">Conflict: Institutional Ideologies</h4>
              <p className="challenge-text">
                <span className="font-bold">Core Conflict:</span> The traditional museum structure conflicts with the required posture of visitor-centered spaces that emphasize empathy and engagement (American Alliance of Museums, 2017; Love &amp; Villeneuve, 2017; Villeneuve &amp; Sitzia, 2018).
              </p>
              <p className="challenge-text">
                <span className="font-bold">Goal Shift:</span> We must understand the therapeutic function of the creative process, in order for museums to move beyond purely aesthetic and historical presentation toward a robust, care-centered institutional model.
              </p>
            </div>
            <div className="challenge-card secondary">
              <h4 className="challenge-title">Challenge: Training &amp; Methodology</h4>
              <p className="challenge-text">
                <span className="font-bold">Challenge:</span> Museum staff often lack the essential skills to facilitate deep meaning-making or therapeutic dialogue (American Alliance of Museums, 2017; Lehrer and Milton, 2011; Mani, C. 2023)
              </p>
              <p className="challenge-text">
                <span className="font-bold">Gap:</span> There is a gap in the standardized system of assessment or consistent methodological guidance for evaluating the long-term effectiveness of therapeutic environmental design (Wang et al.).
              </p>
            </div>
            <div className="challenge-card">
              <h4 className="challenge-title">Future Research: Integration &amp; Scale</h4>
              <p className="challenge-text">
                <span className="font-bold">Need 1 (Integration):</span> Studies must explore how to intentionally set proper conditions to bring the Healing-Centered Engagement (HCE) framework to scale across diverse museum settings.
              </p>
              <p className="challenge-text">
                <span className="font-bold">Need 2 (Interpretation):</span> Explore methods to honor the visitor's personal interpretation with the established art-historical context to support both healing and educational goals Williams, R. (2010; Jensen &amp; Grøn).
              </p>
            </div>
          </div>
        </section>

        {/* 6. THE FRAMEWORK (The Core Cyclical Model) */}
        <section id="section6_framework" className="section-with-offset framework-section">
          <h3 className="section-header secondary">
            6. The Framework
          </h3>
          <p className="framework-description">
            These three domains are not sequential, but cyclical and interdependent. The theory informs the space, which in turn enables the practice. The outcomes of that practice then reinforce the theory, creating a holistic and healing-centered curatorial model.
          </p>

          {/* Desktop/Tablet View: Grid Flow */}
          <div className="framework-flow-desktop">
            <div className="framework-box box-1">
              <div className="framework-number">1</div>
              <h4 className="framework-box-title">Creative Inquiry + Theoretical Grounding</h4>
              <p className="framework-box-text">
                (Honoring Personal Response, Affective Roles of Imagination, Reflection, Awe, Creative Visualization in Trauma Care, Self-Transcendence)
              </p>
            </div>
            <div className="framework-connector">→</div>
            <div className="framework-box box-2">
              <div className="framework-number">2</div>
              <h4 className="framework-box-title">Spatial Application</h4>
              <p className="framework-box-text">
                (Reframing Environments, Psychological Safety, Design Supports Safety and Regulation, Affective Architecture, Developing Emotionally Resonant Space, Visitor Agency to Orient/Modulate/Re-engage)
              </p>
            </div>
            <div className="framework-connector">→</div>
            <div className="framework-box box-3">
              <div className="framework-number">3</div>
              <h4 className="framework-box-title">Embodied Outcomes</h4>
              <p className="framework-box-text">
                (Expressive Engagement as Catalyst for Post Traumatic Growth, Narrative Re-authoring, Meaning-Making, Emotional Regulation)
              </p>
            </div>
          </div>

          {/* Mobile View: Stacked Flow */}
          <div className="framework-flow-mobile">
            <div className="framework-box box-1">
              <div className="framework-number">1. Creative Inquiry + Theoretical Grounding</div>
              <p className="framework-box-text">(Honoring Personal Response, Affective Roles of Imagination, Reflection, Awe, Creative Visualization in Trauma Care, Self-Transcendence)</p>
            </div>
            <div className="framework-connector-mobile">↓</div>
            <div className="framework-box box-2">
              <div className="framework-number">2. Spatial Application</div>
              <p className="framework-box-text">(Reframing Environments, Psychological Safety, Design Supports Safety and Regulation, Affective Architecture, Developing Emotionally Resonant Space, Visitor Agency to Orient/Modulate/Re-engage)</p>
            </div>
            <div className="framework-connector-mobile">↓</div>
            <div className="framework-box box-3">
              <div className="framework-number">3. Embodied Outcomes</div>
              <p className="framework-box-text">(Expressive Engagement as Catalyst for Post Traumatic Growth, Narrative Re-authoring, Meaning-Making, Emotional Regulation)</p>
            </div>
          </div>
        </section>

        {/* FOOTER / SOURCE */}
        <footer className="infographic-footer">
          <p className="footer-text">
            The framework enables practices leading to: <span className="font-bold primary-color">Post-Traumatic Growth, Meaning-Making, Emotional Regulation, and Prosocial Behavior.</span>
          </p>
          <p className="footer-text-small">
            This infographic visualizes a framework I synthesized from 70 academic articles on art, art therapy, art education, environmental design, trauma informed practice, museum studies, and curation.
          </p>
          <Link to="/references" className="footer-link">
            View Complete References List →
          </Link>
        </footer>

        {/* 7. REFERENCES SECTION */}
        <section id="section7_references" className="references-section">
          <h3 className="references-title">
            7. References
          </h3>
          <ul className="references-list">
            <li>American Alliance of Museums. (2017, Spring). Spring 2017: Designing emotion [Exhibition journal]. https://www.aam-us.org/programs/exhibition-journal/spring-2017-designing-emotion/ </li>
            <li>Apuke, O. D., Omar, B., Iyendo, T. O., Tunca, E. A., &amp; Gever, C. V. (2025). Comparing the therapeutic effect of social media-based art, music and poetry therapies intervention on treating post-traumatic stress disorder symptoms of flood victims. Journal of Asian and African Studies, 60(1), 340–355. https://doi.org/10.1177/00219096231171539 </li>
            <li>Armstrong, J., Evans, L., Legari, S., Ostheimer, R. T., Palamara, A., &amp; Wiskera, E. (2021). Weaving trauma awareness into museum education. Journal of Museum Education, 46(1), 1–10.</li>
            <li>Arts-Based Healing-Centered Engagement: Wisdom from artists, creatives, educators, and community members in Los Angeles County. (2024). [Report]. Los Angeles County Department of Arts and Culture.</li>
            <li>Book review: Interpreting difficult history at museums and historic sites, by Liz Sevcenko. (2017). Exhibition Journal: Designing Emotion, 36(1), 4–6.</li>
            <li>Chin, S., Hezel, S., &amp; Handa, K. (2017). Designing to foster connections and inspire action. Exhibition Journal: Designing Emotion, 36(1), 16–18.</li>
            <li>Corrado, M., Wolf, D., &amp; Bills, L. (2022). Trauma triptych: Inviting cross-disciplinary collaboration in art therapy, social work, and psychiatry. International Journal of Art Therapy. https://doi.org/10.1080/17454832.2022.2123011 </li>
            <li>Costello, C. M., &amp; Walters, M. E. (2022). Integrating resiliency into neurobiologically-focused mental health counseling through mindfulness. Journal of Creativity in Mental Health, 17(3), 350–362.</li>
            <li>Cowan, B., Laird, R., &amp; Mckeown, J. (2017). Mending the mind and the spirit: The role of objects and exhibitions in health and healing. Exhibition Journal: Designing Emotion, 36(1), 19–21.</li>
            <li>Cowan, B., Laird, R., &amp; Mckeown, J. (2021). Museum objects, health and healing: The exhibitions–wellness connection. Routledge.</li>
            <li>Cusick, J. (2022). SAMHSA's six principles of trauma-informed care [Guide]. Substance Abuse and Mental Health Services Administration. https://www.samhsa.gov</li>
            <li>Damsgaard, J. B., Beck, B. D., &amp; Brinkmann, S. (2025). Dynamic aesthetic emancipation: Transforming trauma care through creative modalities. Journal of Humanistic Counseling, 64(1), 16–35. https://doi.org/10.1002/johc.12235</li>
            <li>Davis, M. (2019, August 9). Maslow's forgotten pinnacle: Self-transcendence. Big Think. https://bigthink.com/neuropsych/maslow-self-transcendence/</li>
            <li>Dhillon, J. (2025). The impact of awe and transcendence experience on mental resilience. Journal of Trauma Studies and Art, 5(1), 45–60.</li>
            <li>Diamond, S., Ronel, N., &amp; Shrira, A. (2020). From a world of threat to a world at which to wonder: Self-transcendent emotions through the creative experience of Holocaust survivor artists. Psychology of Aesthetics, Creativity, and the Arts, 14(4), 430–440.</li>
            <li>Duncum, P. (2004). Visual culture isn't just visual: Multiliteracy, multimodality, and meaning. Studies in Art Education, 45(3), 252–264.</li>
            <li>Ferguson, H. (2024). Meeting at the precipice: Creative visualization in the treatment of trauma. Psychoanalysis, Self and Context, 19(2), 211–219. https://doi.org/10.1080/24720038.2024.2302364 </li>
            <li>German, S., &amp; Harris, J. (2017). Agile objects. Journal of Museum Education, 42(3), 248–257. https://doi.org/10.1080/10598650.2017.1336369 </li>
            <li>Goldy, S. P., &amp; Piff, P. K. (2022). Imaginary worlds are awesome: Awe provides a key to understanding the individual and social functions of imaginary worlds. Social Psychological and Personality Science, 13(10), 1009–1017.</li>
            <li>Grant, K. (2022). Magic at work! Exploring how expressive arts therapies support healing from trauma and adverse childhood experiences: Developing a method for adolescents (Master's thesis, Lesley University). DigitalCommons@Lesley. https://digitalcommons.lesley.edu/expressive_theses/591 </li>
            <li>Gupta, N. (2025). Integrating spiritual emergency through visionary art therapy: A Jungian autoethnography of psychospiritual trauma healing to benefit the collective. Journal of Humanistic Psychology, 65(2), 200–215. https://doi.org/10.1177/00221678251350406 </li>
            <li>Hubard, O. M. (2007). Complete engagement: Embodied response in art museum education. Art Education, 60(3), 20–25.</li>
            <li>Jensen, K., &amp; Grøn, K. (2015). The kaleidoscope of culture: Expanding the museum experience and narrative by inviting visitors into the curatorial process. Museum Management and Curatorship, 30(2), 150–165.</li>
            <li>Keifer-Boyd, K. (2017). Activist art education: Engaging in social justice through artmaking. National Art Education Association.</li>
            <li>Keltner, D., &amp; Haidt, J. (2003). Approaching awe: A moral, spiritual, and aesthetic emotion. Cognition and Emotion, 17(2), 297–314.</li>
            <li>King, J. L. (2016). Art therapy, trauma, and neuroscience: Theoretical and practical perspectives. Routledge.</li>
            <li>Krasny, E. (n.d.). Caring activism: Assembly, collection, and the museum. In preparation.</li>
            <li>Krasny, E., &amp; Perry, L. (2023). Introduction. In E. Krasny &amp; L. Perry (Eds.), Curating with care (pp. 1–10). Routledge.</li>
            <li>Lau, B., Scott, J., &amp; Seriff, S. (2017). Designing for outrage: Inviting disruption and contested truth into museum exhibitions. Exhibition Journal: Designing Emotion, 36(1), 13–15.</li>
            <li>Lehrer, E., &amp; Milton, C. E. (2011). Introduction: Witnesses to witnessing. In E. Lehrer &amp; C. E. Milton (Eds.), Curating difficult knowledge (pp. 1–20). Palgrave Macmillan.</li>
            <li>Love, A. R., &amp; Villeneuve, P. (2017). Visitor-centered exhibitions and edu-curation in art museums. Rowman &amp; Littlefield.</li>
            <li>Magsamen, S., &amp; Ross, I. (2023). Your brain on art: How the arts transform us. Random House.</li>
            <li>Mani, C. (2023). Visible assemblages: Six affordances of curating from the peripheries. Curatorial Studies Journal, 12(1), 50–65.</li>
            <li>Mann, S., &amp; Cohen, D. M. (2017). Crying at the museum: A call for responsible emotional design. Exhibition Journal: Designing Emotion, 36(1), 50–59.</li>
            <li>Marques, B., &amp; McIntosh, J. (Eds.). (2025b). Designing therapeutic environments: Social and cultural practice for health and well-being. Routledge.</li>
            <li>Marsh, N. R. (2017). Contemporary art and "discomfort" among Millennials: An academic museum case study. Exhibition Journal: Designing Emotion, 36(1), 10–12.</li>
            <li>Maslow, A. H. (1968). Toward a psychology of being (2nd ed.). Van Nostrand.</li>
            <li>McNiff, S. (2008). Arts-based research. In G. J. Knowles &amp; A. L. Cole (Eds.), Handbook of the arts in qualitative research (pp. 29–40). Sage.</li>
            <li>Moustakas, C. (1989). Heuristic research: Design, methodology, and applications. Sage.</li>
            <li>Nainis, N. A. (1999). Getting the picture: The healing capacity of expressive visual art (Doctoral dissertation, The George Washington University). ProQuest Dissertations Publishing.</li>
            <li>Norris, L., &amp; Tisdale, R. (2017). Nuts and bolts: Developing a toolkit for emotion in museums. Exhibition Journal: Designing Emotion, 36(1), 1–3.</li>
            <li>Oepen, R., &amp; Gruber, H. (2024). Art-based interventions and art therapy to promote health of migrant populations: A systematic literature review. Arts &amp; Health, 16(3), 266–284. https://doi.org/10.1080/17533015.2023.2252003</li>
            <li>O'Mills, C. C. K. (2017). Crossing the smoke bridge: Memory, emotion, social interaction, and the sense of smell in exhibitions. Exhibition Journal: Designing Emotion, 36(1), 7–9.</li>
            <li>Piff, P. K., Dietze, P., Feinberg, M., Stancato, D. M., &amp; Keltner, D. (2015). Awe, the small self, and prosocial behavior. Journal of Personality and Social Psychology, 108(6), 883–899.</li>
            <li>Pittman, S. (1994). Trauma and recovery. Second Opinion, 20(2), 109–120.</li>
            <li>Rappolt-Schlichtmann, G., Evans, M., Reich, C., &amp; Cahill, C. (2017). Core emotion and engagement in informal science learning. Exhibition Journal: Designing Emotion, 36(1), 22–24.</li>
            <li>Ringel, S. (2016). The role of the creative process in holding and facilitating traumatic experience. Contemporary Psychoanalysis, 52(3), 391–409.</li>
            <li>Rosenberg, F., Parsa, A., Humble, L., &amp; McGee, C. (2009). Meet Me: Making art accessible to people with dementia. Museum of Modern Art.</li>
            <li>Salom, A. (2011). Reinventing the setting: Art therapy in museums. The Arts in Psychotherapy, 38(2), 81–85.</li>
            <li>Salomon-Gimmon, M. (2022). The contribution of a music and arts rehabilitation program to creative identity, well-being, and community integration. Community Mental Health Journal, 58(7), 1334–1345.</li>
            <li>Samuel, K. J. (2024). Art as a form of communication for trauma survivors. Research Invention Journal of Research in Education, 4(2), 6–11.</li>
            <li>Sanders-Bustle, L. (2008). Visual artifact journals as creative and critical springboards for meaning making. Art Education, 61(3), 8–14.</li>
            <li>Simon, N. (2010). The participatory museum. Museum 2.0.</li>
            <li>Smith, M. J. (2022). Bittersweet Woman. Draft2Digital.</li>
            <li>Stellar, J. E., Gordon, A. M., Piff, P. K., Cordaro, D. T., Anderson, C. L., Bai, Y., Maruskin, L. A., &amp; Keltner, D. (2017). Self-transcendent emotions and their social functions. Emotion Review, 9(3), 200–207.</li>
            <li>Tedeschi, R. G., &amp; Calhoun, L. G. (1996). The Posttraumatic Growth Inventory: Measuring the positive legacy of trauma. Journal of Traumatic Stress, 9(3), 455–471.</li>
            <li>Tedeschi, R. G., &amp; Calhoun, L. G. (2004). Posttraumatic growth: Conceptual foundations and empirical evidence. Psychological Inquiry, 15(1), 1–18.</li>
            <li>The power of art: How creativity can heal and transform lives. (2024). British Journal of Arts and Humanities, 216–223. https://doi.org/10.34104/bjah.02402160223</li>
            <li>Valdesolo, P. (2021). Stop making sense? Annals of the New York Academy of Sciences, 1501(1), 1–10.</li>
            <li>Van der Kolk, B. A. (1994). The body keeps the score: Memory and the evolving psychobiology of PTSD. Harvard Review of Psychiatry, 1(5), 253–265.</li>
            <li>Villeneuve, P., &amp; Love, A. R. (2017). Visitor-centered exhibitions and edu-curation in art museums. Rowman &amp; Littlefield.</li>
            <li>Villeneuve, P., &amp; Sitzia, E. (2018). Considering competing values in art museum exhibition curation. Palgrave Macmillan.</li>
            <li>Wang, R., Xia, F., Wan, L., Chen, Q., &amp; Liu, H. (2024). Exploring the integration of art healing principles into the environmental design of public spaces: A multidisciplinary approach. Frontiers in Artificial Intelligence and Applications. https://doi.org/10.3233/faia240067 </li>
            <li>Weisser, A. S., &amp; Koch, A. (2017). Talking through our pain: Visitor responses at the 9/11 Memorial Museum. Exhibition Journal: Designing Emotion, 36(1), 13–15.</li>
            <li>Westin, A. (2022). Imagining otherwise: Art and movement as tools for recovery. In R. Lazzarino &amp; C. Murphy (Eds.), Modern slavery and human trafficking (pp. 218–232). Policy Press.</li>
            <li>Willcox, L. (2017). Vulnerability in the art room: Explorations of visual journals and risks in the creation of a psychologically safe environment. Art Education, 70(5), 11–19.</li>
            <li>Williams, R., &amp; Rosen, V. (2025). Y'all means all: A case study in welcoming trauma survivors to the art museum. Journal of Museum Education, 50(1), 5–14. https://doi.org/10.1080/10598650.2025.2451599 </li>
            <li>Williams, R. (2010) Honoring the Personal Response, Journal of Museum Education, 35:1, 93-102, https://doi.org/10.1080/10598650.2010.11510653 </li>
            <li>Willshaw, J. A. (2021). Transforming the posttraumatic self: A heuristic arts-based understanding of identity after childhood medical trauma (Doctoral dissertation, Saybrook University). ProQuest Dissertations Publishing.</li>
            <li>Zhang, G. (2025). Trauma-informed art therapy in museum spaces: Bridging healing and community engagement (Doctoral dissertation, Drexel University). https://doi.org/10.17918/00010996</li>
          </ul>
        </section>

      </div>
      
      {/* Download Button Section */}
      <div className="download-section">
        <button onClick={downloadHtmlFile} className="download-button">
          Download Infographic as HTML File
        </button>
      </div>
    </div>
  );
}

export default Infographic;
