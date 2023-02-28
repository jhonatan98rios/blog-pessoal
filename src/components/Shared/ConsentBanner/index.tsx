import useDidMountEffect from "hooks/useDidMountEffect ";
import CookieConsent from "react-cookie-consent";

export function ConsentBanner() {

  useDidMountEffect(() => {
    acceptHandler()
  }, [])

  function acceptHandler() {
    if (typeof window !== 'undefined') {
      window.gtag('consent', 'update', {
        ad_storage: 'granted',
        analytics_storage: 'granted',
      })
    }
  }

  return (
    <CookieConsent
      expires={180}
      cookieName="analytics.consent"

      buttonText="Aceitar"
      declineButtonText="Recusar"

      style={{ background: "var(--primary)" }}
      buttonStyle={{ background: "#fff", color: "var(--gray700)" }}
      declineButtonStyle={{ background: "transparent", color: "#fff", border: 'none' }}

      enableDeclineButton={true}
      onAccept={acceptHandler}
    >
      Esse site utiliza cookies para melhorar sua experiência de navegação.
    </CookieConsent>
  );
}
