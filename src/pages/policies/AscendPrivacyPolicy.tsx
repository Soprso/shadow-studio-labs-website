import { Seo } from '../../components/Seo'
import { PolicyLayout } from '../../components/PolicyLayout'
import { PolicySection } from '../../components/PolicySection'

// Review this date whenever the policy is updated.
const LAST_UPDATED = 'November 6, 2026'

const googleLinkClasses = 'font-medium text-accent transition-colors hover:text-accent-hover'

export function AscendPrivacyPolicy() {
  return (
    <>
      <Seo
        title="ASCEND Privacy Policy"
        description="Privacy policy for ASCEND, a real-life RPG-style personal progression app for Android by Shadow Studio Labs. Learn what progress data stays on your device and how Google advertising services are used."
        canonicalPath="/privacy/ascend"
      />
      <PolicyLayout appName="ASCEND" lastUpdated={LAST_UPDATED}>
        <PolicySection title="Introduction">
          <p>
            This privacy policy describes how Shadow Studio Labs operates the ASCEND application
            (Android package <code>com.shadowstudiolabs.ascend</code>, also referred to as
            &quot;ASCEND&quot;, &quot;the app&quot;, &quot;we&quot;, &quot;us&quot; or
            &quot;our&quot;). ASCEND is a real-life RPG-style personal progression application: it
            turns your daily objectives and bonus trials into EXP, ranks, titles, achievements and
            collectible cards, and stores that progression on your device.
          </p>
          <p>
            This policy explains what information the app stores locally, what information may be
            processed by independent third-party services (primarily Google&apos;s advertising
            services), how those services are used, and what choices you have. It applies to the
            ASCEND mobile application only — not to other Shadow Studio Labs applications, which
            have their own policies.
          </p>
          <p>To make this policy easy to follow, we separate three categories of information:</p>
          <ul>
            <li>
              <strong>Information collected directly by Shadow Studio Labs:</strong> ASCEND has no
              backend and no account system, so we do not receive your gameplay data. The only
              information that can reach us is information you deliberately send yourself, such as
              a backup file you choose to share with us when asking for support.
            </li>
            <li>
              <strong>Information stored locally on your device:</strong> your progression, profile
              and preferences are kept in a local SQLite database inside the app&apos;s private
              storage on your Android device.
            </li>
            <li>
              <strong>Information processed independently by third parties:</strong> Google
              provides the advertising and consent services used by the app. Google processes
              certain technical information under its own privacy policy, independently of Shadow
              Studio Labs.
            </li>
          </ul>
        </PolicySection>

        <PolicySection title="Information stored locally on your device">
          <p>
            ASCEND stores all gameplay data locally. The app writes its progress into a SQLite
            database file (<code>ascend.db</code>) inside the app&apos;s private storage on your
            device. Shadow Studio Labs does not operate a central ASCEND gameplay database, does
            not receive this data, and does not automatically back it up to the cloud.
          </p>
          <p>The local database contains the following kinds of records:</p>
          <ul>
            <li>
              <strong>Player profile:</strong> the display name you choose on first launch, your
              current rank (E through S), your lifetime EXP, your equipped title, your interface
              sound preference, first-run acceptance flags, and creation/update timestamps.
            </li>
            <li>
              <strong>Daily objective records:</strong> which daily objectives you completed on
              each date, when each completion happened, the EXP awarded, the daily targets you
              configured, and which days were celebrated.
            </li>
            <li>
              <strong>Bonus trial progress:</strong> completion status, completion time, EXP
              awarded and card-unlock status for each of the thirty bonus trials.
            </li>
            <li>
              <strong>Collectible card ownership:</strong> which of the thirty-six cards you have
              unlocked, the unlock date, and the source of the unlock (quest completion or a
              rewarded advertisement).
            </li>
            <li>
              <strong>Titles and inventory:</strong> the titles you have earned, when you earned
              them, which title you have equipped, and which title rewards you have acknowledged.
            </li>
            <li>
              <strong>Achievements and rank history:</strong> the achievements you have unlocked
              with the EXP earned and timestamp for each, plus your rank-promotion history.
            </li>
            <li>
              <strong>Reward log:</strong> a local record of rewards already granted (for example,
              a card earned from a rewarded ad) so the same reward cannot be granted twice.
            </li>
            <li>
              <strong>App preferences and settings:</strong> values from the Settings screen, such
              as custom daily targets and the state of in-app notification badges.
            </li>
          </ul>
          <p>
            None of this information is transmitted to Shadow Studio Labs. Because there is no
            account and no cloud sync, your progression cannot be restored on another device
            unless you export a backup file yourself and import it there (see &quot;Export and
            backup&quot; below).
          </p>
        </PolicySection>

        <PolicySection title="Account and registration">
          <p>
            ASCEND does not require an account. There is no sign-in, no email or phone-number
            registration, and no server-side user profile.
          </p>
          <p>
            The first-launch &quot;Registration&quot; step in the app only asks you to choose a
            display name for your local player record. That name is written to the local database
            on your device and is not sent to Shadow Studio Labs or to any other party by the app.
            It appears only inside the app&apos;s own interface.
          </p>
          <p>
            The absence of an account system means Shadow Studio Labs does not hold an account
            record for you — it does not mean that no information at all is ever processed by
            anyone. Google&apos;s advertising services process technical information as described
            in the Advertising section below, independently of this app&apos;s account model.
          </p>
        </PolicySection>

        <PolicySection title="Advertising — Google AdMob">
          <p>
            ASCEND uses <strong>rewarded advertisements only</strong>, provided by Google AdMob
            through the Google Mobile Ads SDK (the{' '}
            <code>react-native-google-mobile-ads</code> package). No banner, interstitial or
            app-open advertisements are shown.
          </p>
          <p>
            A rewarded advertisement is requested only when you choose to watch one in order to
            claim an eligible collectible card. Nothing is downloaded or requested in the
            background while you play, and if you never choose to watch an ad, the app never
            requests one.
          </p>
          <p>
            When an advertisement is requested or displayed, Google&apos;s advertising SDK may
            process technical information. Depending on Google&apos;s SDK configuration, the
            consent choices in effect, and your device settings, this may include:
          </p>
          <ul>
            <li>
              <strong>Advertising identifiers,</strong> such as the Android advertising ID (Ad ID)
              and the app set ID.
            </li>
            <li>
              <strong>IP address,</strong> which can be used to derive a coarse, country-level or
              city-level location.
            </li>
            <li>
              <strong>Device and browser information,</strong> such as device model, operating
              system, language, screen size and carrier.
            </li>
            <li>
              <strong>Approximate location</strong> derived from the IP address rather than from
              any location permission (ASCEND does not request a location permission).
            </li>
            <li>
              <strong>Ad interaction information,</strong> such as whether an ad was shown,
              clicked, viewed to completion, or closed before the reward was confirmed.
            </li>
            <li>
              <strong>Diagnostic information,</strong> such as app launch time, performance and
              error signals used for ad delivery, measurement, reporting, fraud prevention and
              security.
            </li>
            <li>
              <strong>Your consent status</strong> as recorded by Google&apos;s consent platform
              for this app.
            </li>
          </ul>
          <p>
            Google and its advertising partners may use this information for ad delivery,
            measurement, reporting, fraud prevention, and other purposes described in their own
            policies. Shadow Studio Labs does not directly receive or store most of the information
            collected by Google&apos;s advertising SDK. The app passes no name, email address or
            account details to Google, and the only advertising-related information that comes back
            into the app is the confirmation that a rewarded advertisement was completed, which
            unlocks the card locally on your device.
          </p>
          <p>
            ASCEND requests <strong>non-personalized advertisements</strong> — every rewarded ad
            request is made with the SDK&apos;s non-personalized-ads-only option. This setting
            controls how the app asks for ads; it does not prevent Google&apos;s SDK from
            processing the technical information described above, and Google&apos;s own policies
            continue to govern that processing.
          </p>
          <p>
            The Android advertising ID is optional. You can view, reset or delete it through the
            advertising controls in your Google Play or device settings. For details on how Google
            uses advertising data and which controls are available to you, see Google&apos;s
            policies linked at the end of this page.
          </p>
        </PolicySection>

        <PolicySection title="Privacy and consent management — Google UMP">
          <p>
            ASCEND integrates Google&apos;s User Messaging Platform (UMP), Google&apos;s consent
            management solution for the Google Mobile Ads SDK.
          </p>
          <ul>
            <li>
              Before advertisements are initialized, the app asks the UMP SDK whether consent
              information needs to be updated, and it may present a privacy and consent message
              where one is required and available.
            </li>
            <li>
              Your consent choices affect whether advertisements can be requested at all, and which
              kinds of advertising requests may be made. If consent cannot be given when it is
              required, the app will not request advertisements, and the rewarded card claim will
              be unavailable — every other part of ASCEND remains usable.
            </li>
            <li>
              You can reopen the available advertising privacy choices at any time from
              <strong> Settings → Ad Privacy Options</strong> inside ASCEND.
            </li>
            <li>
              Whether a consent message is shown, and which choices are offered, depends on your
              jurisdiction, Google&apos;s determination for your region, and your device settings.
              Different users may see different forms, or none at all, and consent may not always
              be obtainable (for example, while offline). This policy does not promise that a
              consent form is displayed to every user, or that consent is recorded successfully in
              every circumstance.
            </li>
          </ul>
          <p>
            Google&apos;s handling of consent information and any information processed through
            UMP is subject to Google&apos;s own privacy policy and consent documentation, linked
            below.
          </p>
        </PolicySection>

        <PolicySection title="Export and backup">
          <p>
            ASCEND lets you export your full progression as a JSON backup file and import it again
            later. This happens only when you ask for it:
          </p>
          <ul>
            <li>
              <strong>Export:</strong> the app writes a backup file to a temporary local folder and
              opens your device&apos;s share sheet. Nothing is uploaded. Whatever file you decide
              to send — to a cloud drive, a messaging app, or to us for support — is sent by you,
              to the destination you chose.
            </li>
            <li>
              <strong>Import:</strong> you pick a file from your device; it is validated locally
              before it replaces your current save.
            </li>
          </ul>
          <p>
            Backup files contain your display name, EXP, rank, cards, titles, achievements and
            quest history. They are plain, <strong>unencrypted JSON</strong>, so treat them like
            any personal file and store them somewhere private. Shadow Studio Labs never receives a
            backup file unless you choose to send it to us yourself.
          </p>
        </PolicySection>

        <PolicySection title="Data sharing">
          <p>
            Shadow Studio Labs does not sell personal information and does not share your gameplay
            data with anyone, because we never receive it. The following limited sharing does take
            place:
          </p>
          <ul>
            <li>
              <strong>Google (Google AdMob and UMP):</strong> when you choose to watch a rewarded
              advertisement, Google&apos;s SDK communicates with Google&apos;s servers and may
              process the technical information listed in the Advertising section — advertising
              identifiers, IP address, device information, approximate location, ad interactions,
              diagnostics and consent status — for ad delivery, measurement, fraud prevention and
              as otherwise described in Google&apos;s policies. This processing happens
              independently of Shadow Studio Labs.
            </li>
            <li>
              <strong>Recipients you choose:</strong> if you export a backup and share it through
              your device&apos;s share sheet, the recipient of that file is chosen entirely by you.
            </li>
            <li>
              <strong>Legal requirements:</strong> we may disclose information we actually hold
              (which is limited to what you voluntarily send us) if we are legally required to do
              so.
            </li>
          </ul>
          <p>
            Google may work with other companies as part of its advertising services, under
            Google&apos;s own policies and agreements. Shadow Studio Labs does not control that
            downstream processing.
          </p>
        </PolicySection>

        <PolicySection title="Data retention and deletion">
          <ul>
            <li>
              <strong>Gameplay data stays on your device.</strong> Your progression remains in the
              app&apos;s local database until you remove it. Shadow Studio Labs holds no copy of
              it.
            </li>
            <li>
              <strong>Delete your progress in the app:</strong> Settings → Data →{' '}
              <strong>Erase All Data</strong> permanently deletes your quests, daily logs, cards,
              titles, achievements and rank promotions from this device.
            </li>
            <li>
              <strong>Uninstalling the app</strong> removes the app&apos;s local data on most
              devices. However, ASCEND is configured with Android&apos;s{' '}
              <code>allowBackup=&quot;true&quot;</code>, so the Android backup and restore service
              may include the app&apos;s data in device backups you have enabled (for example
              Google Backup). You can control or disable backup for this app in your device&apos;s
              backup settings, and restored backups may bring progress back after a reinstall.
            </li>
            <li>
              <strong>Exported backup files</strong> remain wherever you put them. Deleting them is
              up to you, since Shadow Studio Labs never received a copy.
            </li>
            <li>
              <strong>Third-party information:</strong> Google retains information it processes
              according to its own retention periods and privacy policy. Uninstalling ASCEND or
              erasing your local data does not delete information that Google has already
              collected through its advertising SDK, and Shadow Studio Labs cannot delete it for
              you.
            </li>
          </ul>
        </PolicySection>

        <PolicySection title="Device permissions">
          <p>
            ASCEND requests only the following Android permissions, each of which is required for a
            specific app feature:
          </p>
          <ul>
            <li>
              <strong>Internet access (<code>INTERNET</code>):</strong> required to load rewarded
              advertisements from Google AdMob and to communicate with Google&apos;s consent
              platform. This is the app&apos;s only network access.
            </li>
            <li>
              <strong>
                Audio settings (<code>MODIFY_AUDIO_SETTINGS</code>):
              </strong>{' '}
              used to configure the device audio mode so interface sounds and effects play
              correctly.
            </li>
            <li>
              <strong>Vibration (<code>VIBRATE</code>):</strong> used for the optional haptic
              feedback that accompanies button presses and rewards.
            </li>
          </ul>
          <p>
            ASCEND does not request access to your contacts, calendar, microphone, camera, precise
            location, phone state, SMS messages, or the list of other apps installed on your
            device, and it does not send push notifications. Storage permissions
            (<code>READ_EXTERNAL_STORAGE</code>, <code>WRITE_EXTERNAL_STORAGE</code>), the
            display-over-other-apps permission (<code>SYSTEM_ALERT_WINDOW</code>) and other broad
            permissions are explicitly blocked in the app&apos;s configuration; file access is
            limited to the system file picker used when you import a backup.
          </p>
        </PolicySection>

        <PolicySection title="Data security">
          <p>
            ASCEND stores its database in the app&apos;s private application storage on your
            device, which Android isolates per application, so other apps on the device cannot read
            it through normal means. Advertising and consent requests are made over HTTPS, so that
            traffic is protected in transit by TLS.
          </p>
          <p>
            We take reasonable technical steps to protect the app and the information we do hold.
            No method of storage or transmission is completely secure. Please also note that
            exported backup files are unencrypted JSON: they are as secure as wherever you store
            them. The third-party services described in this policy apply their own security
            practices, which may differ from ours.
          </p>
        </PolicySection>

        <PolicySection title="Children&apos;s privacy">
          <p>
            ASCEND is intended for a general audience. The app is not designed to attract children
            and it does not include an age gate, so we cannot technically prevent a child from
            opening it.
          </p>
          <p>
            Because ASCEND has no account system and does not ask for personal information
            directly, Shadow Studio Labs does not knowingly collect personal information from
            children through the app. The display name you choose stays on your device and is never
            sent to us.
          </p>
          <p>
            The Google Mobile Ads SDK may still process the technical information described in the
            Advertising section when a rewarded advertisement is requested or shown, subject to
            Google&apos;s own policies and consent requirements. If you believe a child under 13
            has sent personal information to Shadow Studio Labs directly (for example, in a support
            message), please contact us using the address below and we will address it.
          </p>
        </PolicySection>

        <PolicySection title="International users">
          <p>
            ASCEND may be distributed internationally through Google Play, and people in different
            countries may use the app.
          </p>
          <p>
            Because the app&apos;s only third-party integration is Google&apos;s advertising and
            consent services, information processed by those services may be handled in countries
            other than your own, according to Google&apos;s own privacy practices, policies and
            legal obligations. Shadow Studio Labs does not operate servers that store your gameplay
            data.
          </p>
        </PolicySection>

        <PolicySection title="Your privacy choices and rights">
          <ul>
            <li>
              <strong>Advertising privacy options in the app:</strong> open ASCEND → Settings →{' '}
              <strong>Ad Privacy Options</strong> to review or change the advertising consent
              choices Google makes available for your region. If no advertising privacy choices
              need to be changed on your device, the app will tell you so.
            </li>
            <li>
              <strong>Google advertising controls:</strong> you can manage ad personalization and
              view or reset your advertising ID through Google&apos;s Ads Settings and your device
              settings.
            </li>
            <li>
              <strong>Your device:</strong> Android lets you reset or delete the advertising ID,
              limit ad tracking, control backups, and revoke app permissions at any time.
            </li>
            <li>
              <strong>Your local data:</strong> you can export your progression, or delete it
              entirely with Settings → Data → Erase All Data.
            </li>
            <li>
              <strong>Contact us:</strong> for questions about this policy, or for help with
              information that Shadow Studio Labs actually controls (anything you choose to send us
              directly, such as a backup file attached to a support request), use the contact
              address below. Because gameplay data never reaches us, we cannot delete data stored
              on your device or data held independently by Google — use the in-app and Google
              controls above for those.
            </li>
          </ul>
        </PolicySection>

        <PolicySection title="Third-party privacy policies">
          <p>
            ASCEND relies on Google&apos;s advertising and consent services, which operate under
            their own privacy policies. We link to the relevant official documentation below:
          </p>
          <ul>
            <li>
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className={googleLinkClasses}
              >
                Google Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noopener noreferrer"
                className={googleLinkClasses}
              >
                How Google uses data from apps and sites that use its services
              </a>
            </li>
            <li>
              <a
                href="https://developers.google.com/admob/android/privacy/play-data-disclosure"
                target="_blank"
                rel="noopener noreferrer"
                className={googleLinkClasses}
              >
                Google Mobile Ads SDK — Google Play data disclosure
              </a>
            </li>
            <li>
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className={googleLinkClasses}
              >
                Google Ads Settings
              </a>
            </li>
            <li>
              <a
                href="https://play.google.com/about/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className={googleLinkClasses}
              >
                Google Play — Privacy and security
              </a>
            </li>
          </ul>
        </PolicySection>

        <PolicySection title="Changes to this policy">
          <p>
            We may update this privacy policy from time to time to reflect changes to ASCEND, its
            features, its advertising integrations, or to how information is handled. Any changes
            will be published on this page with an updated &quot;Last updated&quot; date, which is
            shown at the top of this page. We encourage you to review this page periodically.
          </p>
          <p>
            Current revision: <strong>{LAST_UPDATED}</strong>.
          </p>
        </PolicySection>
      </PolicyLayout>
    </>
  )
}
