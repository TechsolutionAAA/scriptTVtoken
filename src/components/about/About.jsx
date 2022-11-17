import "./about.css";

const About = () => {
    return (
        <div className="about-container">
            <div className="about-title">
                About
            </div>
            <div className="about-description">Introducing our team – made up of entrepreneurs, product managers, strategists, operators, engineers and evangelists all focused on the common goal.
            </div>
            <div className="about-content">
                <div className="about-card">
                    <div className="about-card-title">
                        $SCPT
                    </div>
                    <div className="about-card-description">
                        Beyond beign a token of goverance for producing and validating blocks, SCPT acts as a direct incentive for users to not only watch and dicover great new content but also to share their bandwidth and memory for the videos, which in effect, will improve the stream quality.
                    </div>
                </div>
                <div className="about-card">
                    <div className="about-card-title">
                        $SPAY
                    </div>
                    <div className="about-card-description">
                        SPAY however, has a different usecase. it is the operational token of the script network blockchain, as is for rewards for guardians & edge nodes, gas nft trading, off chain rewards offline.
                    </div>
                </div>
            </div>
            <div className="about-description">
                The Protocol Is Built On Our Own, Script Blockchain. Although Both Tokens Have Limited Supply, Script Network Is Focused To Deliver Significant Scale Across The Platform And Future Applications For Our Users, Investors And Partners.
            </div>
            <div className="about-discord-btn">
                Join the conversation on discord
            </div>
        </div>
    );
}

export default About;