import React from 'react';
import { Link } from 'react-router-dom';
import './References.css';

function References() {
  const references = [
    { article: "Elke Krasny: Caring Activism: Assembly, Collection, and the Museum", authors: "Krasny, E." },
    { article: "VISIBLE ASSEMBLAGES SIX AFFORDANCES OF CURATING FROM THE PERIPHERIES", authors: "Mani, C." },
    { article: "Francesca Rosenberg, Amir Parsa, Laurel Humble, Carrie McGee: Meet Me: Making Art Accessible to People with Dementia", authors: "Rosenberg, F., Parsa, A., Humble, L., & McGee, C." },
    { article: "Wisdom Guide with Compendium as Appendix ARTS-BASED HEALING-CENTERED ENGAGEMENT: Wisdom from Artists, Creatives, Educators, and Community Members in Los Angeles County", authors: "Community Members in Los Angeles County" },
    { article: "Considering Competing Values in Art Museum Exhibition Curation Pat Villeneuve With a foreword by Prof. Dr. Emilie Sitzia", authors: "Villeneuve, P., & Sitzia, E." },
    { article: "Lois H. Silverman: Visitor Meaning_Making in Museums for a New Age", authors: "Silverman, L. H." },
    { article: "Kirsten Jensen, Karen Grøn: The Kaleidoscope of Culture: expanding the museum experience and the museum narrative by inviting visitors into the curatorial process", authors: "Jensen, K., & Grøn, K." },
    { article: "Ann Rowson Love, Pat Villeneuve: Edu-Curation and the Edu-Curator", authors: "Love, A. R., & Villeneuve, P." },
    { article: "Erica Lehrer, Cynthia E. Milton: Introduction: Witnesses to Witnessing", authors: "Lehrer, E., & Milton, C. E." },
    { article: "Rui Wang, Feng Xia, Li Wan, Qiang Chen, Huan Liu: Exploring the Integration of Art Healing Principles into the Environmental Design of Public Spaces: A Multidisciplinary Approach", authors: "Wang, R., Xia, F., Wan, L., Chen, Q., & Liu, H." },
    { article: "Bruno Marques, Jacqueline McIntosh: Designing Therapeutic Environments", authors: "Marques, B., & McIntosh, J." },
    { article: "Valdesolo P. (2021). Stop making sense?. Annals of the New York Academy of Sciences, 1501(1), 75–77. https://doi.org/10.1111/nyas.145702021", authors: "Valdesolo, P." },
    { article: "Olga M. Hubard: Complete Engagement: Embodied Response in Art Museum Education", authors: "Hubard, O. M." },
    { article: "Senta German, Jim Harris: Agile Objects, Journal of Museum Education", authors: "German, S., & Harris, J." },
    { article: "Salom, A. (2011). Reinventing the setting: Art therapy in museums. The Arts in Psychotherapy, 38(2), 81–85. https://doi.org/10.1016/j.aip.2011.01.002", authors: "Salom, A." },
    { article: "Clark E. Moustakas: Heuristic Research: Design, Methodology, and Applications", authors: "Moustakas, C. E." },
    { article: "Jennifer E. Stellar, Amie M. Gordon, Paul K. Piff, Daniel T. Cordaro, Craig L. Anderson, Yang Bai, Laura A. Maruskin, Dacher Keltner: Self-Transcendent Emotions and Their Social Functions: Compassion, Gratitude, and Awe Bind Us to Others Through Prosociality", authors: "Stellar, J. E., Gordon, A. M., Piff, P. K., Cordaro, D. T., Anderson, C. L., Bai, Y., Maruskin, L. A., & Keltner, D." },
    { article: "Paul K. Piff, Pia Dietze, Matthew Feinberg, Daniel M. Stancato, Dacher Keltner: Awe, the small self, and prosocial behavior.", authors: "Piff, P. K., Dietze, P., Feinberg, M., Stancato, D. M., & Keltner, D." },
    { article: "Dacher Keltner, Jonathan Haidt: Approaching awe, a moral, spiritual, and aesthetic emotion.", authors: "Keltner, D., & Haidt, J." },
    { article: "Sean P Goldy, Paul K. Piff: Imaginary worlds are awesome: Awe provides a key to understanding the individual and social functions of imaginary worlds", authors: "Goldy, S. P., & Piff, P. K." },
    { article: "Anna Westin: Imagining otherwise: art and movement as tools for recovery", authors: "Westin, A." },
    { article: "Jade A. Willshaw: Transforming the posttraumatic self: A Heuristic Arts-Based Understanding of Identity After Childhood Medical Trauma", authors: "Willshaw, J. A." },
    { article: "Nisha Gupta: Integrating Spiritual Emergency Through Visionary Art Therapy: A Jungian Autoethnography of Psychospiritual Trauma Healing to Benefit the Collective", authors: "Gupta, N." },
    { article: "K. Samuel J: Art as a Form of Communication for Trauma Survivors", authors: "J, K. S." },
    { article: "Shira Diamond, Natti Ronel, Amit Shrira: From a world of threat to a world at which to wonder: Self-transcendent emotions through the creative experience of Holocaust survivor artists.", authors: "Diamond, S., Ronel, N., & Shrira, A." },
    { article: "Jasbir Dhillon: The Impact of Awe and Transcendence Experience on Mental Resilience", authors: "Dhillon, J." },
    { article: "Heather Ferguson: Meeting at the precipice: Creative visualization in the treatment of trauma", authors: "Ferguson, H." },
    { article: "Kendra Grant: Magic at Work! Exploring How Expressive Arts Therapies Support Healing from Trauma and Adverse Childhood Experiences: Developing a Method for Adolescents", authors: "Grant, K." },
    { article: "Susan Magsamen, et al.: Your Brain on Art : How the Arts Transform Us", authors: "Magsamen, S., et al." },
    { article: "Shoshana Ringel: The Role of the Creative Process in Holding and Facilitating Traumatic Experience", authors: "Ringel, S." },
    { article: "Maayan Salomon-Gimmon: The Contribution of a Music and Arts Rehabilitation Program to the Creative Identity, Well-Being, and Community Integration of People With Mental Health Conditions", authors: "Salomon-Gimmon, M." },
    { article: "Oberiri Destiny Apuke, Bahiyah Omar, Timothy Onosahwo Iyendo, Elif Asude Tunca, Celestine Verlumun Gever: Comparing The Therapeutic Effect of Social Media-Based Art, Music and Poetry Therapies Intervention on treating Post-Traumatic Stress Disorder Symptoms of Flood Victims", authors: "Apuke, O. D., Omar, B., Iyendo, T. O., Tunca, E. A., & Gever, C. V." },
    { article: "Renate Oepen, Harald Gruber: Art-based interventions and art therapy to promote health of migrant populations - a systematic literature review of current research.", authors: "Oepen, R., & Gruber, H." },
    { article: "Nancy Ann Nainis: Getting the Picture: The Healing Capacity of Expressive Visual Art", authors: "Nainis, N. A." },
    { article: "British Journal of Arts and Humanities: The Power of Art: How Creativity Can Heal and Transform Lives", authors: "British Journal of Arts and Humanities" },
    { article: "Lynn Sanders-Bustle: Visual Artifact Journals as Creative and Critical Springboards for Meaning Making", authors: "Sanders-Bustle, L." },
    { article: "Libba Willcox Vulnerability in the Art Room: Explorations of Visual Journals and Risks in the Creation of a Psychologically Safe Environment, 10.1080/00043125.2017.1335528", authors: "Willcox, L." }
  ];

  return (
    <div className="references-container">
      <div className="references-content">
        <div className="references-header">
          <Link to="/" className="back-link">
            ← Back to Main Page
          </Link>
          <h1 className="references-title">References</h1>
          <p className="references-subtitle">
            Complete bibliography of articles synthesized for the trauma-informed curatorial framework
          </p>
        </div>

        <div className="references-list">
          {references.map((ref, index) => (
            <div key={index} className="reference-item">
              <div className="reference-authors">{ref.authors}</div>
              <div className="reference-article">{ref.article}</div>
            </div>
          ))}
        </div>

        <div className="references-footer">
          <p className="references-count">
            Total: {references.length} articles
          </p>
          <Link to="/infographic" className="references-link">
            View Framework Infographic →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default References;

