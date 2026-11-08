import { Seo } from '../../components/Seo'
import { PolicyLayout } from '../../components/PolicyLayout'
import { PolicySection } from '../../components/PolicySection'

// Review this date whenever the policy is updated.
const LAST_UPDATED = 'October 29, 2026'

export function ChristmasCountdownPrivacyPolicy() {
  return (
    <>
      <Seo
        title="Privacy Policy | Christmas Countdown Wallpapers"
        description="Privacy policy for Christmas Countdown Wallpapers, an Android countdown, collectible-card and wallpaper app by Shadow Studio Labs."
        canonicalPath="/privacy/christmas-countdown"
      />
      <PolicyLayout appName="Christmas Countdown Wallpapers" lastUpdated={LAST_UPDATED}>
        <PolicySection title="Introduction">
          <p>
            This privacy policy describes how Shadow Studio Labs operates the Christmas Countdown
            Wallpapers application (Android package{' '}
            <code>com.rshadowmonarch123.christmascountdown</code>, also referred to as
            &quot;Christmas Countdown&quot;, &quot;the app&quot;, &quot;we&quot;, &quot;us&quot; or
            &quot;our&quot;). Christmas Countdown is a festive Android app featuring a Christmas
            countdown timer, four selectable themes, background music, a downloadable wallpaper
            gallery, a collectible-card collection, a daily streak reward system, and a home-screen
            countdown widget.
          </p>
          <p>
            The app does not require an account and never asks for your name, email address, phone
            number or any other personal details directly. This policy explains what information is
            stored locally on your device, which network requests the app makes, and how
            independent third-party services we rely on may process technical information as part
            of delivering their services.
          </p>
          <p>
            This policy covers two distinct categories of data handling:
          </p>
          <ul>
            <li>
              <strong>Services operated by Shadow Studio Labs:</strong> a serverless card-manifest
              and wallpaper-manifest API hosted on Netlify, which the app uses to retrieve
              collectible-card and wallpaper content. We also maintain the Cloudinary media account
              from which card artwork, thumbnail images and MP4 video content are delivered.
            </li>
            <li>
              <strong>Independent third-party services:</strong> Cloudinary, which delivers the
              card and wallpaper media; Google, which provides the Google Mobile Ads SDK used for
              rewarded advertisements; and Netlify, which hosts the manifest API. These providers
              operate independently under their own privacy policies, which are linked at the end
              of this page.
            </li>
          </ul>
        </PolicySection>

        <PolicySection title="Information we collect">
          <p>
            Shadow Studio Labs does not directly collect personal information through Christmas
            Countdown. The app has no account system, no sign-in screen, and no form that asks
            for your name, email address, contact details or location. The sections below describe
            what information the app and its third-party components handle.
          </p>

          <p>
            <strong>Information stored locally on your device (by Shadow Studio Labs).</strong>{' '}
            The app stores the following data entirely on your device using AsyncStorage. None of
            this information is transmitted to Shadow Studio Labs:
          </p>
          <ul>
            <li>
              <strong>Theme preference</strong> (<code>@christmas/theme</code>): which of the four
              visual themes you have selected — Jingle Bells, Merry Christmas, Rudolph&apos;s
              Reindeer or Silent Night.
            </li>
            <li>
              <strong>Audio mute preference</strong> (<code>@christmas/muted</code>): whether
              background music is muted.
            </li>
            <li>
              <strong>Card manifest cache</strong> (<code>@christmas/cards-manifest/v4</code>):
              a local cache of the collectible-card catalog retrieved from the Netlify API, used
              to render the collection immediately on launch without waiting for a network
              response. The cache contains card metadata and Cloudinary delivery URLs only — it
              does not contain personal data.
            </li>
            <li>
              <strong>Wallpaper manifest cache</strong> (<code>@christmas/manifest</code>): a
              local cache of the wallpaper catalog, serving the same purpose as the card manifest
              cache above.
            </li>
            <li>
              <strong>Daily streak and card collection progress</strong>{' '}
              (<code>@christmas/character-streak/data</code>): your consecutive-day streak count,
              the highest streak you have achieved, the dates on which you have claimed daily
              rewards, the card IDs you have permanently unlocked through the daily streak (seven
              standard cards), the Legendary milestone card (unlocked after seven consecutive
              days), and the Mythic calendar-event cards (granted automatically on December 25
              and December 31 by local device date). This record also tracks whether pending
              reward animations have been shown.
            </li>
            <li>
              <strong>Rewarded-ad unlock progress</strong>{' '}
              (<code>@christmas/ad-unlocks/v1</code>): the number of rewarded advertisements you
              have watched for each collectible card that requires them, and whether the unlock
              threshold has been reached. This data stays on your device and is not verified or
              stored by any server.
            </li>
          </ul>

          <p>
            <strong>Information processed by third parties.</strong> When you use the app,
            independent third-party services process technical information as described in the
            sections below. Shadow Studio Labs does not receive this information directly.
          </p>
        </PolicySection>

        <PolicySection title="Advertising and rewarded ads">
          <p>
            Christmas Countdown uses the Google Mobile Ads SDK (
            <code>react-native-google-mobile-ads</code>) to serve <strong>rewarded advertisements
            only</strong>. You explicitly choose to watch a rewarded advertisement in order to
            earn unlock credits towards eligible collectible cards. The app does not display
            banner advertisements, interstitial advertisements, or app-open advertisements.
          </p>
          <p>
            The Google Mobile Ads SDK may automatically collect and share the following categories
            of technical information for advertising, analytics and fraud-prevention purposes, as
            described in Google&apos;s own documentation:
          </p>
          <ul>
            <li>
              <strong>IP address,</strong> which may be used to estimate the general location of
              the device.
            </li>
            <li>
              <strong>User product interactions,</strong> such as app launches, taps and video
              views within the ad.
            </li>
            <li>
              <strong>Diagnostic information</strong> about the performance of the app and the
              SDK, such as app launch time, hang rate and energy usage.
            </li>
            <li>
              <strong>Device and account identifiers,</strong> including the Android advertising
              ID (Ad ID), the app set ID and, where applicable, other identifiers related to
              signed-in accounts on the device.
            </li>
          </ul>
          <p>
            This information is collected and processed by the Google Mobile Ads SDK automatically.
            It is not collected by Shadow Studio Labs directly, and the app does not pass Google
            any custom personal information such as your name, email address or account details.
          </p>
          <p>
            The Android advertising ID is optional and can be reset or deleted by you through the
            advertising controls in your device settings. For details on how Google uses
            advertising data and the controls available to you, see Google&apos;s privacy policy
            linked at the end of this page.
          </p>
          <p>
            Rewarded-ad unlock credits are verified solely by the Google Mobile Ads SDK. When the
            SDK confirms a reward was earned, one credit is recorded in local device storage under{' '}
            <code>@christmas/ad-unlocks/v1</code>. No server-side reward verification takes place
            and no credit information is transmitted to Shadow Studio Labs.
          </p>
        </PolicySection>

        <PolicySection title="Cloudinary and online content">
          <p>
            Collectible-card artwork (static images and animated MP4 videos), card thumbnail
            images and wallpaper images are delivered from Cloudinary&apos;s content-delivery
            network. When the app loads a card image, video or wallpaper, a standard HTTP request
            is sent to Cloudinary. Cloudinary receives the following technical request metadata:
          </p>
          <ul>
            <li>Your IP address.</li>
            <li>The device and app user agent.</li>
            <li>The URL of the requested resource.</li>
            <li>The date and time of the request.</li>
          </ul>
          <p>
            The app does not upload photographs or videos from your device to Cloudinary. When
            you save a wallpaper to your device gallery, the file is downloaded from Cloudinary
            to a temporary local folder and then imported into your device media library by the
            Android media library API. No file from your device is ever sent to Cloudinary or to
            Shadow Studio Labs.
          </p>
        </PolicySection>

        <PolicySection title="Card and wallpaper manifest API">
          <p>
            When the app opens the collectible-card collection or the wallpaper gallery, it
            requests the relevant catalog from the following API endpoints operated by Shadow
            Studio Labs and hosted on Netlify:
          </p>
          <ul>
            <li>
              <code>https://christmas2026countdown.netlify.app/api/cards</code> — returns the
              collectible-card catalog with Cloudinary delivery URLs.
            </li>
            <li>
              <code>https://christmas2026countdown.netlify.app/api/wallpapers</code> — returns the
              wallpaper catalog with Cloudinary delivery URLs.
            </li>
          </ul>
          <p>
            These requests do not include your name, email address, phone number, location or any
            account information. Like any request made over the internet, Netlify&apos;s
            infrastructure necessarily receives standard technical request metadata — your IP
            address, the device user agent, the time and the requested URL — to route and serve
            the response. Netlify processes this information under its own privacy notice, which
            is linked at the end of this page. Shadow Studio Labs does not store a log linking
            your IP address to any card you have viewed or unlocked.
          </p>
          <p>
            The app caches each API response in AsyncStorage for up to six hours. Once the cache
            is fresh, the app can render card and wallpaper content without making a new network
            request. A user-initiated pull-to-refresh bypasses the freshness window. The cached
            data contains card and wallpaper metadata only, not personal information.
          </p>
        </PolicySection>

        <PolicySection title="Local storage and app preferences">
          <p>
            All preference, progress and cache data described in this policy is stored locally on
            your device using React Native&apos;s AsyncStorage. This data is not transmitted to
            Shadow Studio Labs or to any server other than what is described in this policy.
          </p>
          <ul>
            <li>
              <strong>Theme and audio preferences</strong> stay on your device and are removed
              when you clear the app&apos;s data or uninstall the app.
            </li>
            <li>
              <strong>Card collection and daily streak progress</strong> also stay on your device.
              Because there is no account system, your progress cannot be restored from a different
              device or after a reinstall.
            </li>
            <li>
              <strong>Rewarded-ad unlock credits</strong> are stored locally and are cleared when
              you clear the app&apos;s data or uninstall the app.
            </li>
            <li>
              <strong>Manifest caches</strong> are cleared automatically by the app when the
              cache format changes and can also be cleared by clearing the app&apos;s data.
            </li>
          </ul>
          <p>
            The app is configured with Android&apos;s <code>allowBackup=&quot;true&quot;</code>,
            so Android&apos;s own backup service may include app data in device backups you have
            enabled, for example through Google Backup. You can control or disable backup for this
            app in your device&apos;s backup settings.
          </p>
        </PolicySection>

        <PolicySection title="How we use information">
          <ul>
            <li>
              <strong>Delivering app content:</strong> the manifest API requests and Cloudinary
              deliveries are used to show you collectible-card artwork, wallpapers and the
              Christmas countdown experience.
            </li>
            <li>
              <strong>Local app functionality:</strong> locally stored preferences and progress
              data let the app remember your chosen theme, your audio setting, your card collection
              and your streak without requiring an account.
            </li>
            <li>
              <strong>Rewarded-ad functionality:</strong> the Google Mobile Ads SDK processes
              technical information to serve and measure rewarded advertisements and to grant
              collectible-card unlock credits when you choose to watch an ad.
            </li>
            <li>
              <strong>Security and reliability:</strong> Netlify processes request metadata to
              operate and protect the manifest API.
            </li>
          </ul>
          <p>
            Shadow Studio Labs does not use information from the app to build a profile of you,
            and does not sell personal information. Google and the other providers listed here
            may use and share the information they process for their own purposes — which may
            include personalised advertising — under their own privacy policies.
          </p>
        </PolicySection>

        <PolicySection title="Sharing and third-party services">
          <p>
            Shadow Studio Labs does not sell personal information. The following third-party
            providers receive technical information as a necessary part of the services they
            deliver to this app:
          </p>
          <ul>
            <li>
              <strong>Google (Google Mobile Ads / AdMob):</strong> processes device identifiers,
              IP address, interaction data and diagnostic information for the purpose of serving
              and measuring rewarded advertisements, preventing invalid ad traffic, and — at
              Google&apos;s discretion — for personalised advertising, as described in
              Google&apos;s privacy policy. This information is processed by Google independently
              and is not received by Shadow Studio Labs.
            </li>
            <li>
              <strong>Cloudinary:</strong> receives standard request metadata (IP address, user
              agent, requested URL and timestamp) when the app loads card artwork, card thumbnails,
              card video content or wallpaper images from Cloudinary&apos;s CDN. Cloudinary
              processes this information under its own privacy policy.
            </li>
            <li>
              <strong>Netlify:</strong> hosts the card and wallpaper manifest API endpoints.
              Netlify receives and processes standard server-side request logs under its own
              privacy notice.
            </li>
          </ul>
        </PolicySection>

        <PolicySection title="Device permissions">
          <p>
            Christmas Countdown requests the following Android permissions to support its
            features. You can review or revoke permissions through your device settings at any
            time.
          </p>
          <ul>
            <li>
              <strong>Internet access (<code>INTERNET</code>):</strong> required to fetch the
              card and wallpaper catalogs from the Netlify API, to load card and wallpaper media
              from Cloudinary, and to load rewarded advertisements from Google Mobile Ads.
            </li>
            <li>
              <strong>Audio settings (<code>MODIFY_AUDIO_SETTINGS</code>):</strong> used to
              configure the device audio mode so the Christmas-themed background music can play.
            </li>
            <li>
              <strong>Audio recording declaration (<code>RECORD_AUDIO</code>):</strong> declared
              in the app manifest as required by the audio playback library (expo-audio); the app
              does not record audio from the microphone.
            </li>
            <li>
              <strong>
                Foreground service (<code>FOREGROUND_SERVICE</code>,{' '}
                <code>FOREGROUND_SERVICE_MEDIA_PLAYBACK</code>):
              </strong>{' '}
              declared by the background audio playback library (expo-audio) to support media
              controls while music plays.
            </li>
            <li>
              <strong>
                Media library — modern Android (<code>READ_MEDIA_IMAGES</code>,{' '}
                <code>READ_MEDIA_VIDEO</code>, <code>READ_MEDIA_AUDIO</code>,{' '}
                <code>READ_MEDIA_VISUAL_USER_SELECTED</code>):
              </strong>{' '}
              used to save downloaded wallpapers to your device gallery on Android 13 and above.
              The app does not read or browse media already in your library; it only writes the
              file you explicitly choose to save.
            </li>
            <li>
              <strong>
                Media library and storage — older Android (
                <code>READ_EXTERNAL_STORAGE</code>,{' '}
                <code>WRITE_EXTERNAL_STORAGE</code>, capped at API level 32):
              </strong>{' '}
              used to save downloaded wallpapers to your device gallery on Android 12 and below.
              These permissions are not granted on Android 13 and above.
            </li>
            <li>
              <strong>Vibration (<code>VIBRATE</code>):</strong> used for optional haptic
              feedback in the app.
            </li>
            <li>
              <strong>
                Display over other apps (<code>SYSTEM_ALERT_WINDOW</code>):
              </strong>{' '}
              declared in the app manifest. Android only grants this permission if you enable it
              yourself in Settings; it is not required for the countdown, wallpaper or card
              features.
            </li>
          </ul>
          <p>
            The app does not request access to your device location, camera, contacts, phone
            state, SMS messages or the list of other apps installed on your device. It does not
            request a notification permission and does not send push notifications.
          </p>
        </PolicySection>

        <PolicySection title="Data retention and deletion">
          <p>
            The app has no account system. There is no user profile held by Shadow Studio Labs
            for you to delete, and no in-app deletion workflow is needed.
          </p>
          <ul>
            <li>
              <strong>On your device:</strong> all locally stored preferences, card collection
              progress, streak data and rewarded-ad credits are removed when you clear the
              app&apos;s data in your device settings or when you uninstall the app. Wallpaper
              files you have saved to your device media library remain there until you delete them
              manually.
            </li>
            <li>
              <strong>Third-party data:</strong> Google, Cloudinary and Netlify each retain server
              logs and advertising or analytical data for their own purposes and for their own
              retention periods, as described in their respective privacy policies. Shadow Studio
              Labs does not control those periods and cannot delete data that those providers hold
              independently. To request deletion of data held by those providers, use the contact
              and data-rights processes described in their own policies.
            </li>
            <li>
              <strong>Uninstalling the app</strong> does not delete data that Google or other
              third-party providers have already collected through their SDKs or services.
            </li>
          </ul>
        </PolicySection>

        <PolicySection title="Security">
          <p>
            Network requests from the app — to the Netlify manifest API, to Cloudinary, and to
            Google&apos;s advertising services — are made over HTTPS, so this traffic is
            protected in transit by TLS. Google also states that user data collected by the
            Google Mobile Ads SDK is encrypted in transit using TLS.
          </p>
          <p>
            We take reasonable technical steps to protect the services we operate. No method of
            transmission or storage is completely secure. The third-party services listed in this
            policy apply their own security practices, which may differ from ours.
          </p>
        </PolicySection>

        <PolicySection title="Children&apos;s privacy">
          <p>
            Christmas Countdown Wallpapers is intended for a general audience. The app is not
            specifically directed at children under the age of 13, and it is not currently
            enrolled in the Google Play Families program.
          </p>
          <p>
            The app does not include an age gate, so we cannot technically prevent a child under
            13 from opening it. Because the app has no account system and never asks for a name,
            email address or any other personal information, Shadow Studio Labs does not
            knowingly collect personal information from children and does not hold a user profile
            of any child who uses the app. The Google Mobile Ads SDK may still process the
            technical information described in this policy when rewarded advertisements are served.
            If you believe a child under 13 has used the app and you have a concern, please
            contact us using the address below.
          </p>
        </PolicySection>

        <PolicySection title="Third-party privacy policies">
          <p>
            The independent services used by Christmas Countdown operate under their own privacy
            policies. We link to the relevant documentation below; please review it for details
            on how those providers handle information:
          </p>
          <ul>
            <li>
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent transition-colors hover:text-accent-hover"
              >
                Google Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://developers.google.com/admob/android/privacy/play-data-disclosure"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent transition-colors hover:text-accent-hover"
              >
                Google Mobile Ads SDK — Google Play data disclosure
              </a>
            </li>
            <li>
              <a
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent transition-colors hover:text-accent-hover"
              >
                How Google uses data from apps and sites that use its services
              </a>
            </li>
            <li>
              <a
                href="https://cloudinary.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent transition-colors hover:text-accent-hover"
              >
                Cloudinary Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://www.netlify.com/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent transition-colors hover:text-accent-hover"
              >
                Netlify Privacy Policy
              </a>
            </li>
          </ul>
        </PolicySection>

        <PolicySection title="Changes to this policy">
          <p>
            We may update this privacy policy from time to time to reflect changes to the app,
            to third-party services, or to applicable law. Any changes will be published on this
            page with an updated &quot;Last updated&quot; date. We encourage you to review this
            page periodically. Continued use of the app after an update constitutes your
            acceptance of the revised policy.
          </p>
        </PolicySection>
      </PolicyLayout>
    </>
  )
}
