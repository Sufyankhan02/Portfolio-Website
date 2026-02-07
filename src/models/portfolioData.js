export const portfolioData = {
    bio: "I am a passionate fullstack developer with a keen eye for design. I love creating seamless web experiences that look great and work perfectly. My journey started with a curiosity for how things work on the internet, and simpler HTML pages have evolved into complex React applications.",
    skills: ["React", "JavaScript (ES6+)", "CSS3 & HTML5", "Node.js", "Git", "Responsive Design"],
    projects: [
        {
            id: 1,
            title: "Restaurant Website",
            description: "A modern, responsive website for a fine dining restaurant with menu showcase, table reservation system, and gallery.",
            tags: ["React", "Framer Motion", "Tailwind CSS"],
            link: "https://codewithsadee.github.io/grilli/",
            priceUSD: 999
        },
        {
            id: 2,
            title: "AI Hotel Receptionist",
            description: "An intelligent voice-enabled AI agent dealing with hotel guests, handling reservations, check-ins, and inquiries seamlessly.",
            tags: ["Python", "OpenAI API", "Hume AI"],
            link: "https://github.com/Sufyankhan02/ReceptionBot",
            priceUSD: 2999
        },
        {
            id: 3,
            title: "Task Management Tool",
            description: "A productivity application to help teams collaborate and track project progress efficiently.",
            tags: ["React", "Redux", "Material UI"],
            link: "https://github.com/Sufyankhan02/Task-Management",
            priceUSD: 499
        },
        {
            id: 4,
            title: "Weather Forecast API",
            description: "A weather application providing accurate forecasts based on user location using global weather APIs.",
            tags: ["JavaScript", "APIs", "HTML/CSS"],
            link: "https://github.com/Sufyankhan02/Weather-Forecast-API",
            priceUSD: 499
        },
        {
            id: 5,
            title: "Wedding Website",
            description: "A beautiful, romantic website for weddings with RSVP management, photo gallery, and event timeline.",
            tags: ["React", "CSS Animations", "Firebase"],
            link: "https://github.com/Sufyankhan02/wedding-invitations",
            priceUSD: 1499
        }
    ]
};

// Currency conversion rates (approximate)
export const currencyRates = {
    USD: { symbol: '$', rate: 1, name: 'United States' },
    EUR: { symbol: '€', rate: 0.92, name: 'Europe' },
    GBP: { symbol: '£', rate: 0.79, name: 'United Kingdom' },
    INR: { symbol: '₹', rate: 83, name: 'India' },
    CAD: { symbol: 'C$', rate: 1.35, name: 'Canada' },
    AUD: { symbol: 'A$', rate: 1.52, name: 'Australia' },
    KWD: { symbol: 'KD', rate: 0.31, name: 'Kuwait' },
    SAR: { symbol: 'SR', rate: 3.75, name: 'Saudi Arabia' }
};
