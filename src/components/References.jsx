import React from 'react';
import { Link } from 'react-router-dom';
import './References.css';

function References() {
  // Exact references from Infographic.jsx - lines 446-517
  const references = [
    "American Alliance of Museums. (2017, Spring). Spring 2017: Designing emotion [Exhibition journal]. https://www.aam-us.org/programs/exhibition-journal/spring-2017-designing-emotion/",
    "Apuke, O. D., Omar, B., Iyendo, T. O., Tunca, E. A., & Gever, C. V. (2025). Comparing the therapeutic effect of social media-based art, music and poetry therapies intervention on treating post-traumatic stress disorder symptoms of flood victims. Journal of Asian and African Studies, 60(1), 340–355. https://doi.org/10.1177/00219096231171539",
    "Armstrong, J., Evans, L., Legari, S., Ostheimer, R. T., Palamara, A., & Wiskera, E. (2021). Weaving trauma awareness into museum education. Journal of Museum Education, 46(1), 1–10.",
    "Arts-Based Healing-Centered Engagement: Wisdom from artists, creatives, educators, and community members in Los Angeles County. (2024). [Report]. Los Angeles County Department of Arts and Culture.",
    "Book review: Interpreting difficult history at museums and historic sites, by Liz Sevcenko. (2017). Exhibition Journal: Designing Emotion, 36(1), 4–6.",
    "Chin, S., Hezel, S., & Handa, K. (2017). Designing to foster connections and inspire action. Exhibition Journal: Designing Emotion, 36(1), 16–18.",
    "Corrado, M., Wolf, D., & Bills, L. (2022). Trauma triptych: Inviting cross-disciplinary collaboration in art therapy, social work, and psychiatry. International Journal of Art Therapy. https://doi.org/10.1080/17454832.2022.2123011",
    "Costello, C. M., & Walters, M. E. (2022). Integrating resiliency into neurobiologically-focused mental health counseling through mindfulness. Journal of Creativity in Mental Health, 17(3), 350–362.",
    "Cowan, B., Laird, R., & Mckeown, J. (2017). Mending the mind and the spirit: The role of objects and exhibitions in health and healing. Exhibition Journal: Designing Emotion, 36(1), 19–21.",
    "Cowan, B., Laird, R., & Mckeown, J. (2021). Museum objects, health and healing: The exhibitions–wellness connection. Routledge.",
    "Cusick, J. (2022). SAMHSA's six principles of trauma-informed care [Guide]. Substance Abuse and Mental Health Services Administration. https://www.samhsa.gov",
    "Damsgaard, J. B., Beck, B. D., & Brinkmann, S. (2025). Dynamic aesthetic emancipation: Transforming trauma care through creative modalities. Journal of Humanistic Counseling, 64(1), 16–35. https://doi.org/10.1002/johc.12235",
    "Davis, M. (2019, August 9). Maslow's forgotten pinnacle: Self-transcendence. Big Think. https://bigthink.com/neuropsych/maslow-self-transcendence/",
    "Dhillon, J. (2025). The impact of awe and transcendence experience on mental resilience. Journal of Trauma Studies and Art, 5(1), 45–60.",
    "Diamond, S., Ronel, N., & Shrira, A. (2020). From a world of threat to a world at which to wonder: Self-transcendent emotions through the creative experience of Holocaust survivor artists. Psychology of Aesthetics, Creativity, and the Arts, 14(4), 430–440.",
    "Duncum, P. (2004). Visual culture isn't just visual: Multiliteracy, multimodality, and meaning. Studies in Art Education, 45(3), 252–264.",
    "Ferguson, H. (2024). Meeting at the precipice: Creative visualization in the treatment of trauma. Psychoanalysis, Self and Context, 19(2), 211–219. https://doi.org/10.1080/24720038.2024.2302364",
    "German, S., & Harris, J. (2017). Agile objects. Journal of Museum Education, 42(3), 248–257. https://doi.org/10.1080/10598650.2017.1336369",
    "Goldy, S. P., & Piff, P. K. (2022). Imaginary worlds are awesome: Awe provides a key to understanding the individual and social functions of imaginary worlds. Social Psychological and Personality Science, 13(10), 1009–1017.",
    "Grant, K. (2022). Magic at work! Exploring how expressive arts therapies support healing from trauma and adverse childhood experiences: Developing a method for adolescents (Master's thesis, Lesley University). DigitalCommons@Lesley. https://digitalcommons.lesley.edu/expressive_theses/591",
    "Gupta, N. (2025). Integrating spiritual emergency through visionary art therapy: A Jungian autoethnography of psychospiritual trauma healing to benefit the collective. Journal of Humanistic Psychology, 65(2), 200–215. https://doi.org/10.1177/00221678251350406",
    "Hubard, O. M. (2007). Complete engagement: Embodied response in art museum education. Art Education, 60(3), 20–25.",
    "Jensen, K., & Grøn, K. (2015). The kaleidoscope of culture: Expanding the museum experience and narrative by inviting visitors into the curatorial process. Museum Management and Curatorship, 30(2), 150–165.",
    "Keifer-Boyd, K. (2017). Activist art education: Engaging in social justice through artmaking. National Art Education Association.",
    "Keltner, D., & Haidt, J. (2003). Approaching awe: A moral, spiritual, and aesthetic emotion. Cognition and Emotion, 17(2), 297–314.",
    "King, J. L. (2016). Art therapy, trauma, and neuroscience: Theoretical and practical perspectives. Routledge.",
    "Krasny, E. (n.d.). Caring activism: Assembly, collection, and the museum. In preparation.",
    "Krasny, E., & Perry, L. (2023). Introduction. In E. Krasny & L. Perry (Eds.), Curating with care (pp. 1–10). Routledge.",
    "Lau, B., Scott, J., & Seriff, S. (2017). Designing for outrage: Inviting disruption and contested truth into museum exhibitions. Exhibition Journal: Designing Emotion, 36(1), 13–15.",
    "Lehrer, E., & Milton, C. E. (2011). Introduction: Witnesses to witnessing. In E. Lehrer & C. E. Milton (Eds.), Curating difficult knowledge (pp. 1–20). Palgrave Macmillan.",
    "Love, A. R., & Villeneuve, P. (2017). Visitor-centered exhibitions and edu-curation in art museums. Rowman & Littlefield.",
    "Magsamen, S., & Ross, I. (2023). Your brain on art: How the arts transform us. Random House.",
    "Mani, C. (2023). Visible assemblages: Six affordances of curating from the peripheries. Curatorial Studies Journal, 12(1), 50–65.",
    "Mann, S., & Cohen, D. M. (2017). Crying at the museum: A call for responsible emotional design. Exhibition Journal: Designing Emotion, 36(1), 50–59.",
    "Marques, B., & McIntosh, J. (Eds.). (2025b). Designing therapeutic environments: Social and cultural practice for health and well-being. Routledge.",
    "Marsh, N. R. (2017). Contemporary art and \"discomfort\" among Millennials: An academic museum case study. Exhibition Journal: Designing Emotion, 36(1), 10–12.",
    "Maslow, A. H. (1968). Toward a psychology of being (2nd ed.). Van Nostrand.",
    "McNiff, S. (2008). Arts-based research. In G. J. Knowles & A. L. Cole (Eds.), Handbook of the arts in qualitative research (pp. 29–40). Sage.",
    "Moustakas, C. (1989). Heuristic research: Design, methodology, and applications. Sage.",
    "Nainis, N. A. (1999). Getting the picture: The healing capacity of expressive visual art (Doctoral dissertation, The George Washington University). ProQuest Dissertations Publishing.",
    "Norris, L., & Tisdale, R. (2017). Nuts and bolts: Developing a toolkit for emotion in museums. Exhibition Journal: Designing Emotion, 36(1), 1–3.",
    "Oepen, R., & Gruber, H. (2024). Art-based interventions and art therapy to promote health of migrant populations: A systematic literature review. Arts & Health, 16(3), 266–284. https://doi.org/10.1080/17533015.2023.2252003",
    "O'Mills, C. C. K. (2017). Crossing the smoke bridge: Memory, emotion, social interaction, and the sense of smell in exhibitions. Exhibition Journal: Designing Emotion, 36(1), 7–9.",
    "Piff, P. K., Dietze, P., Feinberg, M., Stancato, D. M., & Keltner, D. (2015). Awe, the small self, and prosocial behavior. Journal of Personality and Social Psychology, 108(6), 883–899.",
    "Pittman, S. (1994). Trauma and recovery. Second Opinion, 20(2), 109–120.",
    "Rappolt-Schlichtmann, G., Evans, M., Reich, C., & Cahill, C. (2017). Core emotion and engagement in informal science learning. Exhibition Journal: Designing Emotion, 36(1), 22–24.",
    "Ringel, S. (2016). The role of the creative process in holding and facilitating traumatic experience. Contemporary Psychoanalysis, 52(3), 391–409.",
    "Rosenberg, F., Parsa, A., Humble, L., & McGee, C. (2009). Meet Me: Making art accessible to people with dementia. Museum of Modern Art.",
    "Salom, A. (2011). Reinventing the setting: Art therapy in museums. The Arts in Psychotherapy, 38(2), 81–85.",
    "Salomon-Gimmon, M. (2022). The contribution of a music and arts rehabilitation program to creative identity, well-being, and community integration. Community Mental Health Journal, 58(7), 1334–1345.",
    "Samuel, K. J. (2024). Art as a form of communication for trauma survivors. Research Invention Journal of Research in Education, 4(2), 6–11.",
    "Sanders-Bustle, L. (2008). Visual artifact journals as creative and critical springboards for meaning making. Art Education, 61(3), 8–14.",
    "Simon, N. (2010). The participatory museum. Museum 2.0.",
    "Smith, M. J. (2022). Bittersweet Woman. Draft2Digital.",
    "Stellar, J. E., Gordon, A. M., Piff, P. K., Cordaro, D. T., Anderson, C. L., Bai, Y., Maruskin, L. A., & Keltner, D. (2017). Self-transcendent emotions and their social functions. Emotion Review, 9(3), 200–207.",
    "Tedeschi, R. G., & Calhoun, L. G. (1996). The Posttraumatic Growth Inventory: Measuring the positive legacy of trauma. Journal of Traumatic Stress, 9(3), 455–471.",
    "Tedeschi, R. G., & Calhoun, L. G. (2004). Posttraumatic growth: Conceptual foundations and empirical evidence. Psychological Inquiry, 15(1), 1–18.",
    "The Children's Museum of Indianapolis. (n.d.). Emmett Till & Mamie Till-Mobley: Let the world see [Museum exhibition]. https://www.childrensmuseum.org/traveling-exhibits/emmett-till-mamie-till-mobley-let-the-world-see",
    "The power of art: How creativity can heal and transform lives. (2024). British Journal of Arts and Humanities, 216–223. https://doi.org/10.34104/bjah.02402160223",
    "Valdesolo, P. (2021). Stop making sense? Annals of the New York Academy of Sciences, 1501(1), 1–10.",
    "Van der Kolk, B. A. (1994). The body keeps the score: Memory and the evolving psychobiology of PTSD. Harvard Review of Psychiatry, 1(5), 253–265.",
    "Villeneuve, P., & Love, A. R. (2017). Visitor-centered exhibitions and edu-curation in art museums. Rowman & Littlefield.",
    "Villeneuve, P., & Sitzia, E. (2018). Considering competing values in art museum exhibition curation. Palgrave Macmillan.",
    "Wang, R., Xia, F., Wan, L., Chen, Q., & Liu, H. (2024). Exploring the integration of art healing principles into the environmental design of public spaces: A multidisciplinary approach. Frontiers in Artificial Intelligence and Applications. https://doi.org/10.3233/faia240067",
    "Weisser, A. S., & Koch, A. (2017). Talking through our pain: Visitor responses at the 9/11 Memorial Museum. Exhibition Journal: Designing Emotion, 36(1), 13–15.",
    "Westin, A. (2022). Imagining otherwise: Art and movement as tools for recovery. In R. Lazzarino & C. Murphy (Eds.), Modern slavery and human trafficking (pp. 218–232). Policy Press.",
    "Willcox, L. (2017). Vulnerability in the art room: Explorations of visual journals and risks in the creation of a psychologically safe environment. Art Education, 70(5), 11–19.",
    "Williams, R., & Rosen, V. (2025). Y'all means all: A case study in welcoming trauma survivors to the art museum. Journal of Museum Education, 50(1), 5–14. https://doi.org/10.1080/10598650.2025.2451599",
    "Williams, R. (2010) Honoring the Personal Response, Journal of Museum Education, 35:1, 93-102, https://doi.org/10.1080/10598650.2010.11510653",
    "Willshaw, J. A. (2021). Transforming the posttraumatic self: A heuristic arts-based understanding of identity after childhood medical trauma (Doctoral dissertation, Saybrook University). ProQuest Dissertations Publishing.",
    "Zhang, G. (2025). Trauma-informed art therapy in museum spaces: Bridging healing and community engagement (Doctoral dissertation, Drexel University). https://doi.org/10.17918/00010996"
  ];

  return (
    <div className="references-container">
      <div className="references-content">
        <div className="references-header">
          <Link to="/infographic" className="back-link">
            ← Back to Infographic
          </Link>
          <h1 className="references-title">Complete References List</h1>
          <p className="references-subtitle">
            A comprehensive bibliography of academic articles informing the "Reframing Environments for Resilience" framework. This framework was synthesized from 71 academic articles on art, art therapy, art education, environmental design, trauma informed practice, museum studies, and curation.
          </p>
        </div>

        <ul className="references-list">
          {references.map((ref, index) => (
            <li key={index} className="reference-item">
              {ref}
            </li>
          ))}
        </ul>

        <div className="references-footer">
          <p className="references-count">
            Total Articles: {references.length}
          </p>
          <Link to="/infographic" className="references-link">
            Return to Infographic
          </Link>
        </div>
      </div>
    </div>
  );
}

export default References;
