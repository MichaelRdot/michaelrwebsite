import './CharacterInfoSubSection.css';
import './AboutMeSection.css';

function CharacterInfoSubSection() {
    return (
        <>
            <div className="about-title-bar">Character Info</div>
            <div className="about-row-1">

                {/* Photo with hover effect */}
                <div className="photo-container">
                    <div className="photo-placeholder">
                        <p>Picture of me,</p>
                        <p>professional.</p>
                        <p className="photo-hint">Hover me!</p>
                    </div>
                </div>

                {/* Middle info - Name & Class */}
                <div className="info-left">
                    <div className="info-box">
                        <span className="info-label">Character Name</span>
                        <div className="info-value">Michael A. Russelburg</div>
                    </div>
                    <div className="info-box">
                        <span className="info-label">Class</span>
                        <div className="info-value">Inventor</div>
                    </div>
                </div>

                {/* Right info - Ancestry, Background, Size/Alignment/Age */}
                <div className="info-right">
                    <div className="info-box">
                        <span className="info-label">Ancestry and Heritage</span>
                        <div className="info-value">Human</div>
                    </div>
                    <div className="info-box">
                        <span className="info-label">Background</span>
                        <div className="info-value">Scholar</div>
                    </div>
                    <div className="info-row-3">
                        <div className="info-box">
                            <span className="info-label">Size</span>
                            <div className="info-value">Medium</div>
                        </div>
                        <div className="info-box">
                            <span className="info-label">Alignment</span>
                            <div className="info-value">Neutral Good</div>
                        </div>
                        <div className="info-box">
                            <span className="info-label">Age</span>
                            <div className="info-value">22</div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CharacterInfoSubSection;