import CookieConsent, { Cookies } from "react-cookie-consent";

export function ConsentBanner() {
  return (
    <CookieConsent
      buttonText="Concordo"
      cookieName="nextauth.consent"
      style={{ background: "var(--primary)" }}
      buttonStyle={{ background: "#fff", color: "var(--gray700)" }}
      expires={150}
    >
      Esse site utiliza cookies para melhorar sua experiência.
    </CookieConsent>
  );
}
