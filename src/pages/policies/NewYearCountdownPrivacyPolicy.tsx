import { Seo } from '../../components/Seo'
import { PolicyLayout } from '../../components/PolicyLayout'
import { PolicySection } from '../../components/PolicySection'
import { site } from '../../data/site'

// Review this date whenever the policy is updated.
const LAST_UPDATED = 'November 27, 2026'

const linkClasses = 'font-medium text-accent transition-colors hover:text-accent-hover'

export function NewYearCountdownPrivacyPolicy() {
  return (
    <>
      <Seo
        title="2027 New Year Countdown — Privacy Policy"
        description="Privacy policy for 2027 New Year Countdown, an Android countdown and postcard app by Shadow Studio Labs. Explains local storage, app permissions, rewarded advertising and the app's offline-first design."
        canonicalPath="/privacy/new-year-countdown"
      />
      <PolicyLayout appName="2027 New Year Countdown" lastUpdated={LAST_UPDATED}>
        <PolicySection title="Introduction">
          <p>
            This privacy policy describes how Shadow Studio Labs operates the 2027 New Year Countdown
            application (Android package <code>com.shadowstudiolabs.newyear2027</code>, also referred to
            as &quot;New Year Countdown&quot;, &quot;the app&quot;, &quot;we&quot;, &quot;us&quot; or
            &quot;our&quot;). The app provides a live countdown to the next New Year, a snowfall
            animation, festive background music and a collection of 50 New Year postcards that you can
            personalize and save to your device.
          </p>
          <p>
            New Year Countdown is designed to work without an account. The app has no sign-in screen, no
            user profile and no backend service operated by Shadow Studio Labs. The countdown, music,
            postcard artwork, personalization settings and unlocked postcards stay on your device.
            Internet access is used only for the app&apos;s Google advertising and consent components, as
            described in this policy.
          </p>
          <p>
            This policy explains what information the app stores locally, which Android permissions it
            requests, what information may be processed by Google&apos;s advertising services, and what
            choices you have. It applies to the New Year Countdown mobile application only — not to other
            Shadow Studio Labs applications, which have their own policies.
          </p>
          <p>This policy was last updated on <strong>{LAST_UPDATED}</strong>.</p>
        </PolicySection>

        <PolicySection title="Our privacy approach">
          <p>New Year Countdown is built around a small, local-first design:</p>
          <ul>
            <li>
              <strong>Local-first functionality:</strong> the countdown is calculated on your device, and
              the music, postcard artwork and personalization tools are bundled with the app. No account,
              cloud sync or Shadow Studio Labs server is involved.
            </li>
            <li>
              <strong>No direct collection:</strong> Shadow Studio Labs does not collect your name, email
              address, phone number, location, messages, postcards or app settings.
            </li>
            <li>
              <strong>No analytics or crash reporting:</strong> the app does not include analytics SDKs,
              crash-reporting SDKs, tracking libraries or telemetry.
            </li>
            <li>
              <strong>Advertising only:</strong> the app uses Google Mobile Ads and Google&apos;s User
              Messaging Platform for optional rewarded advertisements and advertising consent. Google
              processes certain technical information independently under its own privacy policy.
            </li>
          </ul>
          <p>
            <strong>Important distinction:</strong> your postcard messages, downloaded postcards, music
            preference and unlocked-postcard list are not transmitted to Shadow Studio Labs. Separately,
            Google&apos;s advertising and consent components may process limited technical information as
            described under &quot;Advertising and third-party advertising services&quot; below.
          </p>
        </PolicySection>

        <PolicySection title="Information we collect">
          <p>
            <strong>
              Shadow Studio Labs does not directly collect personal information through New Year
              Countdown.
            </strong>{' '}
            The app has no account system, no registration form, no sign-in and no Shadow Studio Labs
            backend. The app does not ask for your name, email address, phone number, postal address or
            location, and it does not upload your messages or postcards.
          </p>
          <p>
            The only information the app handles directly is stored locally on your device and is
            described under &quot;Information stored on your device&quot; below. The app&apos;s
            advertising and consent components are provided by Google and are described separately.
          </p>
        </PolicySection>

        <PolicySection title="Information we do not collect">
          <p>
            Shadow Studio Labs does not collect, request or store the following through New Year
            Countdown:
          </p>
          <ul>
            <li>your name, email address, phone number or postal address;</li>
            <li>your precise or approximate location;</li>
            <li>your contacts, calendar, call logs or SMS messages;</li>
            <li>photographs, videos or audio from your device;</li>
            <li>camera or microphone content;</li>
            <li>health, fitness, biometric or financial information;</li>
            <li>passwords, payment details or account credentials;</li>
            <li>a list of other applications installed on your device;</li>
            <li>analytics events, crash reports or usage telemetry;</li>
            <li>push-notification tokens or advertising profiles created by us.</li>
          </ul>
          <p>
            The app does not operate a server that receives your postcard messages, postcard downloads,
            music preference or unlocked-postcard list. It does not sell personal information.
          </p>
        </PolicySection>

        <PolicySection title="Information stored on your device">
          <p>
            New Year Countdown stores a small amount of app data locally in Android&apos;s app-private
            storage. This data is used only to remember your choices and unlocked content:
          </p>
          <ul>
            <li>
              <strong>Music preference:</strong> whether background music is enabled. This is stored in a
              local DataStore preferences file named <code>new_year_2027_settings</code> under the key{' '}
              <code>music_enabled</code>.
            </li>
            <li>
              <strong>Unlocked postcards:</strong> the identifiers of postcards you have unlocked through a
              rewarded advertisement. These are stored in the same local DataStore file under the key{' '}
              <code>unlocked_cards</code>.
            </li>
            <li>
              <strong>Bundled content:</strong> the countdown, snowfall animation, background music,
              intro video and 50 postcard images are read-only assets packaged inside the app.
            </li>
            <li>
              <strong>Saved postcards:</strong> when you choose to download a postcard, the app renders the
              image on your device and saves it to the <code>Pictures/NewYear2027</code> folder through
              Android&apos;s MediaStore. The saved image remains in your device gallery until you delete
              it. The app does not upload the saved image.
            </li>
          </ul>
          <p>
            The app has no database and no cloud-sync feature. Android backup is disabled for the app (
            <code>android:allowBackup=&quot;false&quot;</code>, with backup and device-transfer rules that
            exclude app data), so the app&apos;s local settings and unlock state are not included in
            Android cloud backup or device-to-device transfer. Local data is protected by the Android
            application sandbox; the app does not apply additional encryption to its local preferences
            beyond the protection provided by the operating system.
          </p>
        </PolicySection>

        <PolicySection title="App permissions">
          <p>
            New Year Countdown requests only the following Android permissions. You can review or revoke
            permissions through your device settings at any time.
          </p>
          <ul>
            <li>
              <strong>Internet access (<code>INTERNET</code>):</strong> required to load Google rewarded
              advertisements and to run Google&apos;s advertising consent flow. The countdown, music,
              postcards and postcard personalization work without internet access.
            </li>
            <li>
              <strong>Network state (<code>ACCESS_NETWORK_STATE</code>):</strong> allows the Google Mobile
              Ads SDK to check whether a network connection is available before requesting an
              advertisement.
            </li>
          </ul>
          <p>
            The app does not request location, camera, microphone, contacts, calendar, phone-state, SMS,
            notification or broad storage permissions. It does not read or browse your existing photo
            library. When you save a postcard, the app writes only the image you chose to save through
            Android&apos;s scoped-storage MediaStore API, which does not require a storage permission on
            the Android versions supported by the app (Android 10 and above). To avoid overwriting an
            earlier download, the app checks MediaStore for existing file names that begin with the{' '}
            <code>NewYear2027_</code> prefix; it does not read the contents of other photos.
          </p>
        </PolicySection>

        <PolicySection title="Device information and technical data">
          <p>
            Shadow Studio Labs does not collect device identifiers, device model, operating-system
            version, IP address or other technical information through New Year Countdown. The app does
            not create a device profile and does not transmit app usage data to us.
          </p>
          <p>
            Google&apos;s advertising and consent components may process certain device and technical
            information independently when you use the app&apos;s advertising features. That processing is
            described in the next section.
          </p>
        </PolicySection>

        <PolicySection title="Advertising and third-party advertising services">
          <p>
            New Year Countdown uses the Google Mobile Ads SDK (AdMob) to serve{' '}
            <strong>rewarded advertisements only</strong>. You explicitly choose to watch a rewarded
            advertisement in order to unlock a postcard that is not one of the five free postcards. The
            app does not display banner advertisements, interstitial advertisements, app-open
            advertisements or forced advertisements.
          </p>
          <p>
            The app also uses Google&apos;s User Messaging Platform (UMP) to collect and manage advertising
            consent where required. Advertising is initialized only after the consent flow reports that
            ads may be requested. If consent is not available, the app does not load a rewarded ad. When
            Google requires a privacy-options choice, the app shows an <strong>Ad privacy settings</strong>{' '}
            row in Settings that opens Google&apos;s privacy options form.
          </p>
          <p>
            The Google Mobile Ads SDK may automatically collect and share the following categories of
            information for advertising, measurement and fraud-prevention purposes, as described in
            Google&apos;s own documentation:
          </p>
          <ul>
            <li>
              <strong>IP address,</strong> which may be used to estimate the general location of the
              device.
            </li>
            <li>
              <strong>Device and account identifiers,</strong> including the Android advertising ID, the
              app set ID and, where applicable, other identifiers related to signed-in accounts on the
              device.
            </li>
            <li>
              <strong>User product interactions,</strong> such as app launches, taps and video views
              within an advertisement.
            </li>
            <li>
              <strong>Diagnostic information</strong> about the performance of the app and the SDK, such
              as app launch time, hang rate and energy usage.
            </li>
            <li>
              <strong>Consent information</strong> processed through Google&apos;s UMP consent flow.
            </li>
          </ul>
          <p>
            This information is collected and processed by Google&apos;s SDKs. Shadow Studio Labs does not
            receive it directly, and the app does not pass Google your name, email address, postcard
            messages, saved postcards, music preference or unlocked-postcard list.
          </p>
          <p>
            Rewarded unlocks are granted from Google&apos;s reward callback and recorded locally in the
            app&apos;s DataStore. There is no server-side reward verification, and the app does not send
            your unlock history to Shadow Studio Labs. The Android advertising ID can be reset or deleted
            through your device&apos;s advertising controls. You can revisit your advertising consent
            choices through Settings → Privacy &amp; ads → Ad privacy settings when Google makes that
            option available.
          </p>
          <p>
            Rewarded advertisements require an internet connection. If you are offline or an ad cannot be
            loaded, locked postcards remain locked; the rest of the app continues to work offline.
          </p>
        </PolicySection>

        <PolicySection title="Analytics and crash reporting">
          <p>
            New Year Countdown does not include analytics SDKs, crash-reporting SDKs, tracking libraries
            or third-party telemetry. Shadow Studio Labs does not receive crash reports, screen views,
            session data or usage statistics from the app.
          </p>
          <p>
            The Google Mobile Ads SDK may process diagnostic information for advertising performance and
            fraud prevention as described above. That processing is performed by Google under
            Google&apos;s privacy policy and is not an analytics service operated by Shadow Studio Labs.
          </p>
        </PolicySection>

        <PolicySection title="Home-screen widgets, notifications and accounts">
          <p>
            New Year Countdown does not provide a home-screen widget. The countdown is displayed inside
            the app, and the app does not write countdown data to a widget provider or to another app.
          </p>
          <p>
            The app does not request notification permission and does not send push notifications or
            scheduled local notifications. It does not require an account, sign-in, email address or phone
            number, and it does not create a user profile. There is no cloud sync, so the app&apos;s
            settings and unlocked-postcard list are not associated with an account.
          </p>
        </PolicySection>

        <PolicySection title="Third-party services">
          <p>
            The only independent third-party services used by New Year Countdown are Google&apos;s
            advertising and consent services:
          </p>
          <ul>
            <li>
              <strong>Google Mobile Ads (AdMob):</strong> loads and displays rewarded advertisements and
              processes the technical information described above.
            </li>
            <li>
              <strong>Google User Messaging Platform (UMP):</strong> presents advertising consent and
              privacy-options forms where required.
            </li>
          </ul>
          <p>
            The app does not use a Shadow Studio Labs backend, cloud database, media CDN, analytics
            service, crash-reporting service, social-login provider or payment provider. Postcard artwork
            and music are bundled with the app rather than downloaded from a server.
          </p>
        </PolicySection>

        <PolicySection title="Data sharing and disclosure">
          <p>
            Shadow Studio Labs does not sell personal information. We do not share your postcard messages,
            saved postcards, music preference or unlocked-postcard list with any third party.
          </p>
          <p>
            Google may process the advertising and consent information described in this policy
            independently, under its own privacy policy. We do not receive that information and cannot
            access Google&apos;s advertising records.
          </p>
          <p>
            Because the app has no backend, Shadow Studio Labs holds no app data to disclose. If you
            contact us directly (for example, by email), we will hold the information you choose to send
            in that message for the purpose of responding to you. We may disclose information we actually
            hold if required to do so by law or to protect our legal rights.
          </p>
        </PolicySection>

        <PolicySection title="Data security">
          <p>
            Local app data is protected by the Android application sandbox, and Android backup is
            disabled for the app. Advertising and consent traffic handled by Google&apos;s SDKs is
            transmitted over HTTPS/TLS. The app does not operate a server that stores your data.
          </p>
          <p>
            No method of storage or transmission is completely secure. Please keep your device and screen
            lock secure. If you save postcards to your gallery, those files are protected by your
            device&apos;s own storage and gallery protections.
          </p>
        </PolicySection>

        <PolicySection title="Data retention and deletion">
          <p>
            <strong>On your device:</strong> the music preference and unlocked-postcard list remain in
            app-private storage until you clear the app&apos;s data in Android settings or uninstall the
            app. Uninstalling the app removes this local data.
          </p>
          <ul>
            <li>
              <strong>Saved postcards:</strong> postcards you download remain in{' '}
              <code>Pictures/NewYear2027</code> until you delete them from your gallery or file manager.
              Uninstalling the app does not delete images you have already saved.
            </li>
            <li>
              <strong>Shadow Studio Labs data:</strong> we do not hold a server-side copy of your app data,
              so there is no account or server profile to delete. If you have emailed us, you can ask us to
              delete that correspondence.
            </li>
            <li>
              <strong>Google data:</strong> Google retains advertising and consent data for its own
              purposes and retention periods, as described in Google&apos;s privacy policy. Shadow Studio
              Labs does not control those periods and cannot delete data Google holds independently.
            </li>
          </ul>
        </PolicySection>

        <PolicySection title="Children&apos;s privacy">
          <p>
            New Year Countdown is intended for a general audience. It is not specifically directed at
            children under the age of 13 and is not designed as a children&apos;s app. The app has no age
            gate, but it also has no account system and does not ask for a name, email address, phone
            number or other personal details.
          </p>
          <p>
            Shadow Studio Labs does not knowingly collect personal information from children through New
            Year Countdown. Google&apos;s advertising and consent components may still process the
            technical information described in this policy when a rewarded advertisement is requested. If
            you believe a child has used the app and you have a privacy concern, please contact us using
            the address below.
          </p>
        </PolicySection>

        <PolicySection title="Your privacy choices and rights">
          <ul>
            <li>
              <strong>Manage local data:</strong> clear the app&apos;s data in Android settings or uninstall
              the app to remove the music preference and unlocked-postcard list.
            </li>
            <li>
              <strong>Manage saved postcards:</strong> delete downloaded images from your gallery or file
              manager at any time.
            </li>
            <li>
              <strong>Manage advertising consent:</strong> use Settings → Privacy &amp; ads → Ad privacy
              settings when Google makes the privacy-options form available.
            </li>
            <li>
              <strong>Manage advertising identifiers:</strong> reset or delete the Android advertising ID
              through your device&apos;s advertising controls.
            </li>
            <li>
              <strong>Review permissions:</strong> check the app&apos;s permissions in Android settings.
              Internet access is needed only for rewarded ads and consent.
            </li>
            <li>
              <strong>Contact us:</strong> if you have questions about this policy or believe we hold
              information you would like corrected or deleted, email us at the address below.
            </li>
          </ul>
          <p>
            Depending on where you live, you may have additional rights under applicable data-protection
            laws, such as the right to access, correct, delete or restrict the processing of personal
            information. Because Shadow Studio Labs does not hold your app data, most requests can be
            handled directly on your device. For information held independently by Google, please use
            Google&apos;s own privacy controls and data-rights processes.
          </p>
        </PolicySection>

        <PolicySection title="International data transfers">
          <p>
            New Year Countdown does not transfer your app data internationally because the app does not
            send that data to Shadow Studio Labs. Google&apos;s advertising and consent services may
            process information in countries other than the one you live in, under the safeguards
            described in Google&apos;s privacy policy.
          </p>
        </PolicySection>

        <PolicySection title="Third-party privacy policies">
          <p>
            Google&apos;s advertising and consent services operate under Google&apos;s own privacy
            policies. We link to the relevant documentation below:
          </p>
          <ul>
            <li>
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClasses}
              >
                Google Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://developers.google.com/admob/android/privacy/play-data-disclosure"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClasses}
              >
                Google Mobile Ads SDK — Google Play data disclosure
              </a>
            </li>
            <li>
              <a
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClasses}
              >
                How Google uses data from apps and sites that use its services
              </a>
            </li>
          </ul>
        </PolicySection>

        <PolicySection title="Changes to this policy">
          <p>
            We may update this privacy policy from time to time to reflect changes to New Year
            Countdown, its advertising components, or applicable law. Updates will be published on this
            page with a revised &quot;Last updated&quot; date. Current revision:{' '}
            <strong>{LAST_UPDATED}</strong>.
          </p>
        </PolicySection>

        <PolicySection title="Contact information">
          <p>
            If you have questions about this privacy policy or New Year Countdown, contact Shadow Studio
            Labs at:
          </p>
          <ul>
            <li>
              <a href={`mailto:${site.email}`} className={linkClasses}>
                {site.email}
              </a>
            </li>
          </ul>
        </PolicySection>
      </PolicyLayout>
    </>
  )
}
