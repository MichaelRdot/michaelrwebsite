import './CharacterInfoSubSection.css';
import './AboutMeSection.css';

function CharacterInfoSubSection() {
    return (
        <>
            <div className="about-title-bar">Character Info</div>
            <div className="about-row-1">

                {/* Photo */}
                <div className="photo-container">
                    <div className="photo-placeholder">

                    </div>
                </div>

                {/* Middle - Name & Class */}
                <div className="info-left">
                    <div className="info-card">
                        <div className="char-info-card-header">Character Name</div>
                        <div className="char-info-card-body">Michael A. Russelburg</div>
                    </div>
                    <div className="info-card">
                        <div className="char-info-card-header">Class</div>
                        <div className="char-info-card-body">Inventor</div>
                    </div>
                </div>

                {/* Right - Ancestry, Background, Size/Alignment/Age */}
                <div className="info-right">
                    <div className="info-card">
                        <div className="char-info-card-header">Ancestry & Heritage</div>
                        <div className="char-info-card-body">Human</div>
                    </div>
                    <div className="info-card">
                        <div className="char-info-card-header">Background</div>
                        <div className="char-info-card-body">Scholar</div>
                    </div>
                    <div className="info-row-3">
                        <div className="info-card">
                            <div className="char-info-card-header">Size</div>
                            <div className="char-info-card-body">Medium</div>
                        </div>
                        <div className="info-card">
                            <div className="char-info-card-header">Alignment</div>
                            <div className="char-info-card-body">Neutral Good</div>
                        </div>
                        <div className="info-card">
                            <div className="char-info-card-header">Age</div>
                            <div className="char-info-card-body">22</div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CharacterInfoSubSection;