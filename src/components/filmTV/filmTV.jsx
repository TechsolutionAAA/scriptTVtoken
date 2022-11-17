import "./filmtv.css";
import { STAR } from "../../config/images";

const FilmTV = () => {
    return (
        <div className="filmtv-container">
            <div className="filmtv-title-section">
                <div className="flimtv-title">
                    <span className="title-yellow">
                        Film+TV
                    </span>
                    <span className="title-white">
                        meets
                    </span>
                    <span className="title-yellow">
                        DEFI
                    </span>
                </div>
                <div className="flimtv-description">
                    The blockchain that is built to bridge the gap between traditional media and web3 comparing to other projects.
                </div>
            </div>
            <div className="filmtv-content">
                <div className="content-detail">
                    <div className="detail-section">
                        <img src={STAR} alt="" className="star-logo" />
                        <div className="section-content">
                            <div className="section-title">
                                Become Validator, Lighting Or Script Node.
                            </div>
                            <div className="section-description">
                                All with multiple benefits. All explained further here
                            </div>
                        </div>
                    </div>
                    <div className="detail-section">
                        <img src={STAR} alt="" className="star-logo" />
                        <div className="section-content">
                            <div className="section-title">
                                Earn with Script and more!
                            </div>
                            <div className="section-description">
                                A simple model where you earn rewards whilst consuming content. Participate to the network further and earn airdrops, off chain rewards and more
                            </div>
                        </div>
                    </div>
                    <div className="detail-button">
                        Stake On Script Network
                    </div>
                </div>
                <div className="content-board">
                    <div className="board-title">Estimate Your Rewards</div>
                    <div className="slide-bar-container">
                        <div className="slide-bar">
                            <div className="slide-title">
                                SCPT <span className="text-yellow">1,147,575</span>
                            </div>
                            <div className="slide">
                                <div className="slide_background">
                                    <div className="slide_color"></div>
                                    <span></span>
                                </div>
                            </div>
                            <div className="slide-value">
                                <p>0</p>
                                <p>2,000,000</p>
                            </div>
                        </div>
                        <div className="slide-bar">
                            <div className="slide-title">
                                Locking it for 365 Days(<span>155</span>)
                            </div>
                            <div className="slide">
                                <div className="slide_background">
                                    <div className="slide_color wid"></div>
                                    <span className="wid1"></span>
                                </div>
                            </div>
                            <div className="slide-value">
                                <p>Min Lock</p>
                                <p>Max Lock</p>
                            </div>
                        </div>
                    </div>
                    <div className="round-reward-box">
                        <div className="total-description">
                            <span>
                                Your
                            </span>
                            <span>
                                Estimated Rewards
                            </span>
                        </div>
                        <div className="total-spay">24,291 SPAY</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FilmTV;