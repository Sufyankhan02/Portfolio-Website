import React, { useState } from 'react';
import '../styles/Payment.css';
import { portfolioData, currencyRates } from '../models/portfolioData';

const Payment = () => {
    const [selectedCurrency, setSelectedCurrency] = useState('');

    const convertPrice = (priceUSD) => {
        if (!selectedCurrency) return null;
        const rate = currencyRates[selectedCurrency].rate;
        const convertedPrice = Math.round(priceUSD * rate);
        return convertedPrice;
    };

    const formatPrice = (priceUSD) => {
        if (!selectedCurrency) return '';
        const symbol = currencyRates[selectedCurrency].symbol;
        const price = convertPrice(priceUSD);
        return `${symbol}${price.toLocaleString()}`;
    };

    return (
        <section id="payment" className="payment section">
            <div className="container">
                <h2 className="section-title">Services & Pricing</h2>
                <p className="payment-subtitle">
                    Professional web solutions tailored to your needs
                </p>

                <div className="country-selector-wrapper">
                    <label htmlFor="currency-select" className="selector-label">
                        Select Your Country:
                    </label>
                    <select
                        id="currency-select"
                        value={selectedCurrency}
                        onChange={(e) => setSelectedCurrency(e.target.value)}
                        className="country-selector"
                    >
                        <option value="" disabled>Select Country</option>
                        {Object.entries(currencyRates).map(([code, data]) => (
                            <option key={code} value={code}>
                                {data.name} ({data.symbol})
                            </option>
                        ))}
                    </select>
                </div>

                {!selectedCurrency ? (
                    <div className="payment-placeholder">
                        <p>Please select your country to view available services and pricing.</p>
                    </div>
                ) : (
                    <div className="services-grid">
                        {portfolioData.projects.map((service) => (
                            <div key={service.id} className="service-card">
                                <div className="service-header">
                                    <h3 className="service-title">{service.title}</h3>
                                    <div className="service-price">
                                        {formatPrice(service.priceUSD)}
                                    </div>
                                </div>
                                <p className="service-description">{service.description}</p>
                                <div className="service-tags">
                                    {service.tags.map((tag, index) => (
                                        <span key={index} className="service-tag">{tag}</span>
                                    ))}
                                </div>
                                <button className="btn btn-purchase">
                                    Purchase Now
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Payment;
