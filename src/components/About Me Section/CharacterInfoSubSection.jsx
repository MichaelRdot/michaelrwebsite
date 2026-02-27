import './CharacterInfoSubSection.css';
import './AboutMeSection.css';

function CharacterInfoSubSection() {
    const meows = [
        `${import.meta.env.BASE_URL}Cat Call.m4a`,
        `${import.meta.env.BASE_URL}Chill Meow.m4a`,
        `${import.meta.env.BASE_URL}Meow #1.m4a`,
        `${import.meta.env.BASE_URL}Meow Deep.m4a`,
        `${import.meta.env.BASE_URL}Meowth.m4a`,
        `${import.meta.env.BASE_URL}Ruff.m4a`,
        `${import.meta.env.BASE_URL}Sassy Meow.m4a`,
        `${import.meta.env.BASE_URL}Sparky Meow.m4a`]

    const playRandomMeow = () => {
        const random = meows[Math.floor(Math.random() * meows.length)]
        const audio = new Audio(random)
        audio.currentTime = 0
        audio.play()
    }

    return (
        <>
            <div className="about-title-bar">Character Info</div>
            <div className="about-row-1">

                <button className="photo-container" onClick={() => playRandomMeow()}>
                    <div className="photo-hover-wrapper">
                        <img src={`${import.meta.env.BASE_URL}Miraak, My Boy!!.jpg`} className="photo-normal" alt="Portrait" />
                        <img src={`${import.meta.env.BASE_URL}Miraak, My (Evil) Boy!!.jpg`} className="photo-hover" alt="Portrait" />
                    </div>
                </button>

                <div className="info-left">
                    <div className="info-card">
                        <div className="char-info-card-header">Character Name</div>
                        <div className="char-info-card-body">Michael A. Russelburg</div>
                    </div>
                    <div className="info-card">
                        <div className="char-info-card-header">Class</div>
                        <div className="char-info-card-body">Inventor (Computer Science)</div>
                    </div>
                </div>

                <div className="info-right">
                    <div className="info-card">
                        <div className="char-info-card-header">Ancestry & Heritage</div>
                        <div className="char-info-card-body">Human</div>
                    </div>
                    <div className="info-card">
                        <div className="char-info-card-header">Background</div>
                        <div className="char-info-card-body">Scholar (Software Engineering)</div>
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