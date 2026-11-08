import { Seo } from '../../components/Seo'
import { PolicyLayout } from '../../components/PolicyLayout'
import { PolicySection } from '../../components/PolicySection'

// Review this date whenever the policy is updated.
const LAST_UPDATED = 'August 15, 2026'

export function FanPrivacyPolicy() {
  return (
    <>
      <Seo
        title="FAN — Virtual Breeze Privacy Policy"
        description="Privacy policy for FAN — Virtual Breeze, an application by Shadow Studio Labs."
      />
      <PolicyLayout appName="FAN — Virtual Breeze" lastUpdated={LAST_UPDATED}>
        <PolicySection title="Overview">
          <p>
            This privacy policy explains what information the FAN — Virtual Breeze application
            (&quot;FAN&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;) collects and how it
            is used. Shadow Studio Labs built FAN as a simple virtual fan experience.
          </p>
          <p>
            FAN does not require an account and Shadow Studio Labs does not collect personal
            information from you. This policy explains what data the app stores locally on your
            device and what information may be processed by third-party advertising services.
          </p>
        </PolicySection>

        <PolicySection title="Data collected directly by Shadow Studio Labs">
          <p>Shadow Studio Labs does not collect any personal information through FAN. Specifically:</p>
          <ul>
            <li>FAN does not require an account and has no user login.</li>
            <li>FAN does not collect your name, email address or phone number.</li>
            <li>FAN does not collect your precise location.</li>
            <li>FAN does not access your contacts, camera, microphone or photos.</li>
            <li>FAN has no backend server of its own and does not use Firebase.</li>
            <li>FAN does not use analytics SDKs or crash-reporting services.</li>
          </ul>
        </PolicySection>

        <PolicySection title="Local storage">
          <p>
            FAN stores your fan preferences and unlocked-skin state locally on your device. This
            includes the following local storage keys:
          </p>
          <ul>
            <li>
              <code>@shadowfan/unlocked-skins</code>
            </li>
            <li>
              <code>@shadowfan/skin</code>
            </li>
            <li>
              <code>@shadowfan/theme</code>
            </li>
            <li>
              <code>@shadowfan/fan-color</code>
            </li>
          </ul>
          <p>
            These values are local preferences only. They do not represent a user account or a
            personal profile, and they are not transmitted to Shadow Studio Labs or to any server.
            You can clear this data at any time by clearing the app&apos;s data or uninstalling the
            app.
          </p>
        </PolicySection>

        <PolicySection title="Third-party advertising (Google Mobile Ads)">
          <p>
            FAN uses Google Mobile Ads (AdMob) to serve <strong>rewarded advertisements</strong>.
            You explicitly choose to watch a rewarded advertisement in order to unlock certain fan
            skins. There are no banner ads, interstitial ads, app-open ads or forced advertisements
            in FAN, and the app requests non-personalized advertisements.
          </p>
          <p>
            Google Mobile Ads may process information such as advertising identifiers, device
            information, IP address, screen and device characteristics, and ad interaction
            information. Google may use this information for purposes such as ad serving,
            measurement, frequency management and fraud prevention.
          </p>
          <p>
            FAN does not provide Google Mobile Ads with custom personal information such as your
            name, email address, phone number or account information.
          </p>
        </PolicySection>

        <PolicySection title="Information processed by third parties">
          <p>
            It is important to distinguish between data collected directly by Shadow Studio Labs
            and data processed by third-party advertising services. Shadow Studio Labs collects no
            personal information from FAN. When you watch a rewarded advertisement, Google Mobile
            Ads may process the information described above, and Google&apos;s own privacy policy
            governs its handling of that information. Please review Google&apos;s privacy policy for
            more details:
          </p>
          <p>
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent transition-colors hover:text-accent-hover"
            >
              https://policies.google.com/privacy
            </a>
          </p>
        </PolicySection>

        <PolicySection title="Changes to this policy">
          <p>
            We may update this privacy policy from time to time. Any changes will be reflected on
            this page with an updated &quot;Last updated&quot; date.
          </p>
        </PolicySection>
      </PolicyLayout>
    </>
  )
}
