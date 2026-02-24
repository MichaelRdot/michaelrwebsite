import './AboutMeSection.css'
import AttributesSubSection from "./AttributesSubSection.jsx";
import SkillsSubSection from "./SkillsSubSection.jsx";
import CharacterInfoSubSection from "./CharacterInfoSubSection.jsx";

function AboutMeSection() {
    return (
        <section id="aboutMeSection" className="about-section">
            {/* ROW 1 - Photo + Character Info */}
            <CharacterInfoSubSection />

            {/* ROW 2 - Attributes */}
            <AttributesSubSection />

            {/* ROW 3 - Skills */}
            <SkillsSubSection />
        </section>
    )
}

export default AboutMeSection;