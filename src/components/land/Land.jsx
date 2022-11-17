import "./land.css";
import { BROADCAST } from "../../config/images";

const Land = () => {

    return (
        <div className="land-container">
            <div className="land-title">
                <div className="subtitle">Introducing Two Tokens For Governance and Utility To Our Network</div>
                <div className="title">- SCPT and SPAY</div>
            </div>
            <div className="logo-container">
                <div className="description">
                    <div className="description-title">
                        <img src={BROADCAST} alt="broadcast" width={150} height={150} />
                        Decentralised TV And Film For You, And Everyone With A Device
                    </div>
                    <div className="description-body">Introducing SCPT – the token for the overall network and script blockchain and SPAY - the operational token of the Script.TV blockchain, used for gas, payments and rewards on and off chain
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Land;
