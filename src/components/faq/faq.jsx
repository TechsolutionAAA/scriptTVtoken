import "./faq.css";

const Faq = () => {

    return (
        <div className="faq-container">
            <div className="faq-title">
                <div className="faq-label">SCPT</div>
                <div className="faq-label">SPAY</div>
            </div>
            <div className="faq-content">
                <div className="content-label">1,000,000,000</div>
                <div className="content-label">Total Supply</div>
                <div className="content-label">5,000,000,000</div>
            </div>
            <div className="faq-content">
                <div className="content-label">NA</div>
                <div className="content-label">Circulating Supply</div>
                <div className="content-label">NA</div>
            </div>
            <div className="faq-content">
                <div className="content-label">$0.025</div>
                <div className="content-label">Price At Launch</div>
                <div className="content-label">TBA</div>
            </div>
            <div className="faq-content">
                <div className="content-label">Governance</div>
                <div className="content-label">Use Case</div>
                <div className="content-label">Transactions</div>
            </div>
            <div className="faq-description">Want To Learn More ?</div>
            <div className="faq-button">
                Read the whitepapper
            </div>
        </div>
    );

}

export default Faq;