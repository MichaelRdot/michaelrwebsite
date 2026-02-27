import './AboutMeSection.css'
import AttributesSubSection from "./AttributesSubSection.jsx";
import SkillsSubSection from "./SkillsSubSection.jsx";
import CharacterInfoSubSection from "./CharacterInfoSubSection.jsx";

function AboutMeSection() {
    return (
        <section id="aboutMeSection" className="about-section">
            <CharacterInfoSubSection />
            <AttributesSubSection />
            <SkillsSubSection />
        </section>
    )
}

export default AboutMeSection;