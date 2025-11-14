import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Infographic.css';
import Chart from 'chart.js/auto';

function Infographic() {
  const groundingChartRef = useRef(null);
  const spatialChartRef = useRef(null);
  const outcomesChartRef = useRef(null);
  const groundingChartInstance = useRef(null);
  const spatialChartInstance = useRef(null);
  const outcomesChartInstance = useRef(null);

  useEffect(() => {
    // Chart.js Configuration - Updated Colors
    const colorPrimaryDark = '#6A0000'; 
    const colorSecondaryDark = '#85252a';
    const colorAccent = '#9e4a28'; // Sienna
    const colorLightest = '#f7f7f7';
    const colorCharcoal = '#000000'; 
    const colorPTG = '#8b0303'; 

    // Full array of 5 distinct colors for the bar chart
    const barColors = [
      colorPTG,                   // 1. Post-Traumatic Growth (New darkest)
      colorPrimaryDark,           // 2. Meaning-Making
      colorSecondaryDark,         // 3. Emotional Regulation
      colorAccent,                // 4. Embodied Connection
      '#500000'                   // 5. Prosocial Behavior (Darkest red variant)
    ];

    // Default color array for other charts (doughnut)
    const chartColors = [colorAccent, colorSecondaryDark, colorPrimaryDark, '#662222']; 

    // Updated font family for Chart.js elements
    Chart.defaults.font.family = "'Helvetica Neue', Helvetica, Arial, sans-serif";
    Chart.defaults.color = colorPrimaryDark;
    Chart.defaults.plugins.legend.labels.color = colorSecondaryDark;

    const tooltipTitleCallback = (tooltipItems) => {
      const item = tooltipItems[0];
      let label = item.chart.data.labels[item.dataIndex];
      if (Array.isArray(label)) {
        return label.join(' ');
      } else {
        return label;
      }
    };

    // Grounding Chart
    if (groundingChartRef.current && !groundingChartInstance.current) {
      groundingChartInstance.current = new Chart(groundingChartRef.current, {
        type: 'doughnut',
        data: {
          labels: ['Awe & Self-Transcendence', 'Heuristic & Creative Inquiry', 'Art as Non-Verbal Communication'],
          datasets: [{
            label: 'Theoretical Pillars',
            data: [45, 30, 25],
            backgroundColor: chartColors,
            borderColor: colorLightest,
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
            },
            title: {
              display: true,
              text: 'Key Theoretical Pillars',
              font: { size: 16 },
              color: colorPrimaryDark
            },
            tooltip: {
              callbacks: {
                title: tooltipTitleCallback
              }
            }
          }
        }
      });
    }

    // Spatial Chart
    if (spatialChartRef.current && !spatialChartInstance.current) {
      spatialChartInstance.current = new Chart(spatialChartRef.current, {
        type: 'radar',
        data: {
          labels: ['Psychological Safety', 'Design as Pedagogy', 'Affective Architecture', 'Object Dynamics', 'Cultural Sensitivity'],
          datasets: [{
            label: 'Spatial Elements',
            data: [9, 8, 9, 7, 8],
            backgroundColor: 'rgba(158, 74, 40, 0.2)', /* Accent with opacity */
            borderColor: colorAccent,
            pointBackgroundColor: colorAccent,
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: colorAccent
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            r: {
              angleLines: { color: '#666666' }, 
              grid: { color: '#666666' },     
              pointLabels: {
                font: { size: 12 },
                color: colorPrimaryDark 
              },
              ticks: {
                backdropColor: 'transparent',
                color: colorCharcoal, 
                stepSize: 2
              },
              suggestedMin: 0,
              suggestedMax: 10
            }
          },
          plugins: {
            legend: {
              display: false
            },
            title: {
              display: true,
              text: 'Elements of a Trauma-Informed Space',
              font: { size: 16 },
              color: colorPrimaryDark
            },
            tooltip: {
              callbacks: {
                title: tooltipTitleCallback
              }
            }
          }
        }
      });
    }

    // Outcomes Chart - NOW USES 5 DISTINCT COLORS
    if (outcomesChartRef.current && !outcomesChartInstance.current) {
      outcomesChartInstance.current = new Chart(outcomesChartRef.current, {
        type: 'bar',
        data: {
          labels: [
            ['Post-Traumatic', 'Growth (PTG)'], 
            'Meaning-Making', 
            'Emotional Regulation', 
            'Embodied Connection', 
            'Prosocial Behavior'
          ],
          datasets: [{
            label: 'Frequency in Literature',
            data: [10, 9, 8, 8, 7],
            backgroundColor: barColors, // Using the new 5-color array
            borderColor: colorPrimaryDark,
            borderWidth: 1
          }]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              grid: { color: colorLightest },
              ticks: { color: colorCharcoal }
            },
            y: {
              grid: { display: false },
              ticks: { color: colorPrimaryDark, font: { size: 12 } }
            }
          },
          plugins: {
            legend: {
              display: false
            },
            title: {
              display: true,
              text: 'Primary Healing Outcomes',
              font: { size: 16 },
              color: colorPrimaryDark
            },
            tooltip: {
              callbacks: {
                title: tooltipTitleCallback
              }
            }
          }
        }
      });
    }

    // Cleanup function
    return () => {
      if (groundingChartInstance.current) {
        groundingChartInstance.current.destroy();
        groundingChartInstance.current = null;
      }
      if (spatialChartInstance.current) {
        spatialChartInstance.current.destroy();
        spatialChartInstance.current = null;
      }
      if (outcomesChartInstance.current) {
        outcomesChartInstance.current.destroy();
        outcomesChartInstance.current = null;
      }
    };
  }, []);

  const downloadHtmlFile = () => {
    try {
      // Get the entire HTML content of the document
      const htmlContent = document.documentElement.outerHTML;
      
      // Create a Blob from the content
      const blob = new Blob([htmlContent], { type: 'text/html' });
      
      // Create a temporary link element
      const a = document.createElement('a');
      
      // Create a URL for the Blob
      const url = URL.createObjectURL(blob);
      a.href = url;
      
      // Set the filename for download
      a.download = 'curating_for_care_infographic.html';
      
      // Append to the body, click it, and remove it
      document.body.appendChild(a);
      a.click();
      
      // Clean up the temporary URL object
      URL.revokeObjectURL(url);
      document.body.removeChild(a);
      
    } catch (error) {
      console.error("Error during file download:", error);
    }
  };

  return (
    <div className="infographic-container text-[#6A0000]">
      <div className="container mx-auto p-4 md:p-10 max-w-7xl">
        <div className="mb-4">
          <Link to="/" className="back-link">
            ← Back to Main Page
          </Link>
        </div>
        <header className="text-center mb-6 pt-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#6A0000]">Curating for Care</h1>
          <p className="text-xl md:text-2xl font-medium text-[#85252a]">A Data-Driven Framework for Trauma-Informed Museum Practice</p>
        </header>

        {/* STICKY NAVIGATION BAR (TABLE OF CONTENTS) */}
        <nav className="sticky-nav bg-white p-3 rounded-lg shadow-xl mb-12 border-b-4 border-[#9e4a28]">
          <div className="flex flex-wrap justify-center space-x-2 md:space-x-6 text-sm md:text-base">
            <a href="#section1_principles" className="text-[#6A0000] hover:text-[#9e4a28] font-medium transition duration-150 p-1 rounded-md">1. Principles</a>
            <a href="#section2_foundation" className="text-[#6A0000] hover:text-[#9e4a28] font-medium transition duration-150 p-1 rounded-md">2. Foundation</a>
            <a href="#section3_environment" className="text-[#6A0000] hover:text-[#9e4a28] font-medium transition duration-150 p-1 rounded-md">3. Environment</a>
            <a href="#section4_result" className="text-[#6A0000] hover:text-[#9e4a28] font-medium transition duration-150 p-1 rounded-md">4. Outcomes</a>
            <a href="#section5_gaps" className="text-[#6A0000] hover:text-[#9e4a28] font-medium transition duration-150 p-1 rounded-md">5. Implications</a>
            <a href="#section6_framework" className="text-[#6A0000] hover:text-[#9e4a28] font-medium transition duration-150 p-1 rounded-md">6. Framework</a>
          </div>
        </nav>

        {/* INITIAL STATS SECTION */}
        <section className="mb-20"> 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="stat-card md:col-span-1">
              <div className="stat-number">44</div>
              <div className="stat-label">Articles Synthesized</div>
            </div>
            <div className="md:col-span-2 bg-white rounded-lg shadow-md p-6 md:p-8 flex items-center"> 
              <p className="text-lg text-[#000000]">
                This framework, synthesized from <strong>44 academic articles</strong> across the key concepts of <strong>art, trauma, and design</strong>, reveals that museums can effectively integrate trauma-informed principles. This integration allows them to design environments that cultivate <strong>safety, agency, and healing</strong>, repositioning the institution as a vital space of active care, connection, and recovery.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 1: CORE PRINCIPLES */}
        <section id="section1_principles" className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-12 pt-16 -mt-16 accent-border">
          <h2 className="text-3xl font-bold text-center text-[#6A0000] mb-8">1. The Six Core Principles of Trauma-Informed Care (TIC)</h2>
          <p className="text-lg text-center text-[#85252a] mb-8 max-w-4xl mx-auto">
            The foundation of a care-curated space rests on the six guiding principles of <strong><em>Trauma-Informed Care</em></strong>, derived from <strong><em>SAMHSA's Six Principles of Trauma-Informed Care</em> (Cusick, 2022)</strong> and supported by (Corrado et al., 2021; Maddock, 2021; Armstrong et al., 2020; Tedeschi &amp; Calhoun, 2004), ensuring every interaction prioritizes safety, trust, and empowerment.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 rounded-lg bg-[#f7f7f7] border-2 border-[#9e4a28] text-center">
              <h3 className="font-bold text-xl text-[#6A0000]">Safety (Physical &amp; Emotional)</h3>
              <p className="text-sm text-[#85252a] font-medium">Ensuring both visitors and staff feel safe, structurally and emotionally, throughout the space.</p>
            </div>
            <div className="p-4 rounded-lg bg-[#f7f7f7] border-2 border-[#9e4a28] text-center">
              <h3 className="font-bold text-xl text-[#6A0000]">Trustworthiness &amp; Transparency</h3>
              <p className="text-sm text-[#85252a] font-medium">Maintaining clear communication about processes, expectations, and object narratives.</p>
            </div>
            <div className="p-4 rounded-lg bg-[#f7f7f7] border-2 border-[#9e4a28] text-center">
              <h3 className="font-bold text-xl text-[#6A0000]">Peer Support &amp; Mutual Help</h3>
              <p className="text-sm text-[#85252a] font-medium">Fostering opportunities for connection, shared experience, and collective healing.</p>
            </div>
            <div className="p-4 rounded-lg bg-[#f7f7f7] border-2 border-[#9e4a28] text-center">
              <h3 className="font-bold text-xl text-[#6A0000]">Collaboration &amp; Mutuality</h3>
              <p className="text-sm text-[#85252a] font-medium">Sharing power between staff, curators, and visitors in the interpretive process.</p>
            </div>
            <div className="p-4 rounded-lg bg-[#f7f7f7] border-2 border-[#9e4a28] text-center">
              <h3 className="font-bold text-xl text-[#6A0000]">Empowerment, Voice, &amp; Choice</h3>
              <p className="text-sm text-[#85252a] font-medium">Valuing and validating visitor experiences and offering choices in engagement paths.</p>
            </div>
            <div className="p-4 rounded-lg bg-[#f7f7f7] border-2 border-[#9e4a28] text-center">
              <h3 className="font-bold text-xl text-[#6A0000]">Cultural, Historical, &amp; Gender Considerations</h3>
              <p className="text-sm text-[#85252a] font-medium">Actively recognizing and addressing historical bias, inequality, and cultural context.</p>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE FOUNDATION */}
        <section id="section2_foundation" className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-12 pt-16 -mt-16 accent-border"> 
          <h2 className="text-3xl font-bold text-center text-[#6A0000] mb-6">2. The Foundation: Creative &amp; Theoretical Grounding</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-[#85252a] mb-4 font-medium">
                The <em>why</em> of this framework is built on established theories of human psychology and creativity. My synthesis shows that art acts as more than just an aesthetic object; I found it to be a tool for communication, a catalyst for awe, and a method for relational knowledge-making.
              </p>
              <p className="text-md text-[#000000] font-medium">
                I found that sources like Moustakas (1989) and Willshaw (2021) position <strong>creativity as a reflective and relational form of knowledge-making</strong>. This is amplified by research from Keltner &amp; Haidt (2003) and Piff et al. (2015), which defines <strong>awe</strong> as a powerful self-transcendent emotion that fosters prosocial behavior. Finally, I argue that sources like Samuel (2024) highlight art's role as a vital <strong>non-verbal communication tool</strong> for processing experiences that defy words.
              </p>
            </div>
            <div className="chart-container">
              <canvas ref={groundingChartRef}></canvas>
            </div>
          </div>
        </section>

        {/* SECTION 3: THE ENVIRONMENT */}
        <section id="section3_environment" className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-12 pt-16 -mt-16 accent-border">
          <h2 className="text-3xl font-bold text-center text-[#6A0000] mb-6">3. The Environment: Spatial &amp; Affective Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="chart-container">
              <canvas ref={spatialChartRef}></canvas>
            </div>
            <div>
              <p className="text-lg text-[#85252a] mb-4 font-medium">
                The <em>how</em> involves intentionally designing the museum as an affective architecture. I argue that this framework moves beyond what is displayed to how it is displayed, treating the environment as an active participant in the visitor's experience.
              </p>
              <p className="text-md text-[#000000] font-medium">
                I identified key spatial components. <strong>Psychological Safety</strong> (Willcox, 2016) is paramount, created through intentional design. I found that this <strong>Reinventing the Setting</strong> (Salom, 2011) treats the space as a <em>pedagogy of care</em>. This is supported by <strong>Psychotherapeutic Object Dynamics</strong> (Cowan et al., 2017; Gupta, 2025; Diamond et al., 2020), where objects are curated to invite emotional reactions and imaginative leaps in a safe context.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: THE RESULTS */}
        <section id="section4_result" className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-12 pt-16 -mt-16 accent-border">
          <h2 className="text-3xl font-bold text-center text-[#6A0000] mb-6">4. The Result: Embodied Practices &amp; Healing Outcomes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-[#85252a] mb-4 font-medium">
                The <em>what</em> is the measurable human outcome. I found that when a trauma-informed theoretical grounding is applied to a purposefully designed space, it enables embodied practices that lead directly to resilience and healing.
              </p>
              <p className="text-md text-[#000000] font-medium">
                I identified the primary outcomes in my matrix as profound. <strong>Post-Traumatic Growth (PTG)</strong> (Moustakas, 1989; Gupta, 2025; Dhillon, 2025) is a consistent theme. I argue this is achieved through <strong>Embodied Connection</strong> (Westin, 2022), where art and movement allow visitors to reconnect with their own memories. Interventions possible in this framework invite co advisors into the exhibition space. <strong>PTG (post traumatic growth) supports the concept of Trauma Healing &amp; Reprocessing</strong> finding <strong>Resilience &amp; Self-Regulation</strong>. PTG (post traumatic growth) is defined by (Tedeschi, R. G., &amp; Calhoun, L. G. 2004). Through this engagement is the possibility of facilitating <strong>Meaning-Making</strong> of past experiences, reduces the task load of processing emotional experiences, and focuses on embodied response (Costello &amp; Walters, 2020; Salom, 2011; Keltner &amp; Haidt (2003)) and <strong>Emotional Regulation</strong> (Dhillon, 2025), ultimately fostering the <strong>Prosocial Behavior</strong> (Stellar et al., 2017) that rebuilds social bonds.
              </p>
            </div>
            <div className="chart-container">
              <canvas ref={outcomesChartRef}></canvas>
            </div>
          </div>
        </section>

        {/* SECTION 5: GAPS, CONFLICTS, AND FUTURE RESEARCH */}
        <section id="section5_gaps" className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-12 pt-16 -mt-16 accent-border">
          <h2 className="text-3xl font-bold text-center text-[#6A0000] mb-6">5. Implications, Gaps, and Future Research</h2>
          <p className="text-lg text-center text-[#85252a] mb-8 max-w-3xl mx-auto font-medium">
            Based on the literature I synthesized, three primary challenges prevent the widespread adoption of trauma-informed curatorial models.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="challenge-card">
              <h3 className="font-bold text-xl text-[#6A0000] mb-2">Conflict: Institutional Ideologies</h3>
              <p className="text-sm font-medium text-[#85252a] mb-1">
                <strong>Core Conflict:</strong> The traditional museum structure conflicts with the required posture of <strong><em>Caring Activism</em> <em>Curating for Care</em></strong> (Krasny).
              </p>
              <p className="text-sm font-medium text-[#85252a]">
                <strong>Goal Shift:</strong> We must understand the therapeutic function of the creative process, in order for museums to move beyond purely aesthetic and historical presentation toward a robust, care-centered institutional model.
              </p>
            </div>
            <div className="challenge-card">
              <h3 className="font-bold text-xl text-[#6A0000] mb-2">Challenge: Training &amp; Methodology</h3>
              <p className="text-sm font-medium text-[#85252a] mb-1">
                <strong>Challenge:</strong> Museum staff often lack the essential skills <strong><em>beyond art history</em></strong> to facilitate deep meaning-making or therapeutic dialogue (Villeneuve).
              </p>
              <p className="text-sm font-medium text-[#85252a]">
                <strong>Gap:</strong> There is no <strong>standardized system</strong> of assessment or consistent methodological guidance for evaluating the <strong><em>long-term</em></strong> effectiveness of therapeutic environmental design (Wang et al.).
              </p>
            </div>
            <div className="challenge-card">
              <h3 className="font-bold text-xl text-[#6A0000] mb-2">Future Research: Integration &amp; Scale</h3>
              <p className="text-sm font-medium text-[#85252a] mb-1">
                <strong>Need 1:</strong> Studies must explore how to <strong><em>intentionally set proper conditions</em></strong> to bring the <strong><em>Healing-Centered Engagement (HCE)</em></strong> framework to scale across diverse museum settings.
              </p>
              <p className="text-sm font-medium text-[#85252a]">
                <strong>Need 2:</strong> Explore methods to harmonize the visitor's <strong><em>personal interpretation</em></strong> with the established <strong><em>art-historical context</em></strong> to support both healing and educational goals (Jensen &amp; Grøn).
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: THE FRAMEWORK */}
        <section id="section6_framework" className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-12 pt-16 -mt-16 accent-border">
          <h2 className="text-3xl font-bold text-center text-[#6A0000] mb-6">6. The Framework</h2>
          <p className="text-lg text-center text-[#85252a] mb-8 max-w-3xl mx-auto font-medium">
            These three domains are not sequential, but cyclical and interdependent. The theory informs the space, which in turn enables the practice. The outcomes of that practice then reinforce the theory, creating a holistic and healing-centered curatorial model.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-4">
            <div className="flow-box w-full md:w-1/4">
              <h3 className="text-lg">1. Theoretical Grounding</h3>
              <p className="text-sm font-normal">(Awe, Creativity, Self-Transcendence)</p>
            </div>
            <div className="flow-arrow -rotate-90 md:rotate-0">→</div>
            <div className="flow-box w-full md:w-1/4">
              <h3 className="text-lg">2. Spatial Application</h3>
              <p className="text-sm font-normal">(Psychological Safety, Affective Architecture, Object Dynamics)</p>
            </div>
            <div className="flow-arrow -rotate-90 md:rotate-0">→</div>
            <div className="flow-box w-full md:w-1/4">
              <h3 className="text-lg">3. Embodied Outcomes</h3>
              <p className="text-sm font-normal">(PTG, Meaning-Making, Emotional Regulation)</p>
            </div>
          </div>
        </section>

        <footer className="text-center mt-12">
          <p className="text-md text-[#85252a] font-medium">This infographic visualizes a framework I synthesized from <strong>44</strong> academic articles on <strong>art, art therapy, art education, environmental design, trauma informed practice, museum studies, and curation</strong>.</p>
          <div className="mt-4">
            <Link to="/references" className="text-[#6A0000] hover:text-[#9e4a28] font-medium transition duration-150 underline">
              View Complete References List →
            </Link>
          </div>
        </footer>
        
        {/* DOWNLOAD BUTTON */}
        <div className="text-center mt-8 mb-12">
          <button 
            onClick={downloadHtmlFile}
            className="bg-[#9e4a28] hover:bg-[#85252a] text-white font-bold py-2 px-6 rounded-full transition duration-300 shadow-lg"
          >
            Download Infographic (HTML)
          </button>
        </div>
      </div>
    </div>
  );
}

export default Infographic;

