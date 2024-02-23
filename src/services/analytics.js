import ReactGA from "react-ga4";

const sendEventAnalytics = (category, action, label) => {
    ReactGA.event({
        category: category,
        action: action,
        label: label,
    });
}

export default sendEventAnalytics;