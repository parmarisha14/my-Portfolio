/**
 * Visitor analytics — FRONTEND DEMO MODE.
 * Clearly-marked mock simulation until a backend (Firebase/Cloud) is connected.
 * Real, private analytics switch on when connected.
 */
export const DEMO_MODE = true;
const BASE_VISITS = 1420;
const STORAGE_KEY = "portfolio_simulated_visits";
const SESSION_START_KEY = "portfolio_session_start";
export function getVisitorStats() {
    if (typeof window === "undefined") {
        return {
            totalVisits: BASE_VISITS,
            liveNow: 4,
            avgSessionSeconds: 142,
            topReferrer: "Direct / GitHub",
        };
    }
    // Persist and increment visits
    let stored = parseInt(localStorage.getItem(STORAGE_KEY) || "0", 10);
    if (!sessionStorage.getItem("portfolio_session_active")) {
        sessionStorage.setItem("portfolio_session_active", "true");
        stored += 1;
        localStorage.setItem(STORAGE_KEY, String(stored));
    }
    let sessionStart = parseInt(sessionStorage.getItem(SESSION_START_KEY) || "0", 10);
    if (!sessionStart) {
        sessionStart = Date.now();
        sessionStorage.setItem(SESSION_START_KEY, String(sessionStart));
    }
    const elapsedSeconds = Math.max(1, Math.floor((Date.now() - sessionStart) / 1000));
    const avgSession = Math.round(120 + (elapsedSeconds % 180));
    return {
        totalVisits: BASE_VISITS + stored,
        liveNow: 3 + (Math.floor(Date.now() / 7000) % 4), // Gently fluctuates between 3 and 6
        avgSessionSeconds: avgSession,
        topReferrer: "Direct / GitHub",
    };
}
export function formatSession(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}m ${s.toString().padStart(2, "0")}s`;
}
