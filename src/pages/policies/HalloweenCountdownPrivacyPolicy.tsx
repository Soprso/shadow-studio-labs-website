import { Seo } from '../../components/Seo'
import { PolicyLayout } from '../../components/PolicyLayout'
import { PolicySection } from '../../components/PolicySection'

// Review this date whenever the policy is updated.
const LAST_UPDATED = 'October 21, 2026'

export function HalloweenCountdownPrivacyPolicy() {
  return (
    <>
      <Seo
        title="Halloween Countdown Wallpapers Privacy Policy"
        description="Privacy policy for Halloween Countdown Wallpapers, an Android countdown and wallpaper app by Shadow Studio Labs."
        canonicalPath="/privacy/halloween-countdown"
      />
      <PolicyLayout appName="Halloween Countdown Wallpapers" lastUpdated={LAST_UPDATED}>
        <PolicySection title="Overview">
          <p>
            This privacy policy explains what information the Halloween Countdown Wallpapers
            application (Android package <code>com.halloween.countdown</code>, &quot;Halloween
            Countdown&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;) handles and how it is used.
            Shadow Studio Labs built Halloween Countdown as a Halloween-themed countdown and
            wallpaper app.
          </p>
          <p>
            Halloween Countdown does not require an account and has no sign-in. The app shows a
            countdown, lets you browse and download Halloween wallpapers and videos, saves the
            wallpapers you choose to your device, and shows advertisements. It never asks you for
            your name, email address, phone number or any other personal details.
          </p>
          <p>
            This policy separates two different kinds of processing:
          </p>
          <ul>
            <li>
              <strong>Services operated by Shadow Studio Labs:</strong> a small serverless
              wallpaper-catalogue service that lists the wallpapers available in the app. It is
              operated by us and hosted on Vercel.
            </li>
            <li>
              <strong>Independent third-party services:</strong> Cloudinary, which delivers the
              wallpaper images, videos and video posters, and Google, which provides the Google
              Mobile Ads SDK used to serve advertisements. These providers process information
              under their own privacy policies, which we link to at the end of this policy.
            </li>
          </ul>
        </PolicySection>

        <PolicySection title="Services used by the app">
          <ul>
            <li>
              <strong>Wallpaper catalogue (operated by Shadow Studio Labs, hosted on Vercel):</strong>{' '}
              the app asks this service for the list of wallpapers and their media links. The
              service does not require an account, does not receive personal details, and does not
              receive the wallpapers you download or the preferences you set.
            </li>
            <li>
              <strong>Cloudinary (third party):</strong> the wallpaper images, videos and video
              posters are delivered from Cloudinary&apos;s network when you view, download or save
              them.
            </li>
            <li>
              <strong>Google Mobile Ads / AdMob (third party):</strong> the app uses the Google
              Mobile Ads SDK to serve advertisements, including rewarded advertisements that you
              can choose to watch in exchange for unlocking content.
            </li>
          </ul>
        </PolicySection>

        <PolicySection title="Information handled by Shadow Studio Labs">
          <p>
            When you open the wallpaper gallery, the app requests the wallpaper catalogue from{' '}
            <code>https://halloween-countdown-manifest.vercel.app/api/wallpapers</code>. The
            response is a JSON object containing the wallpaper list. Each entry gives the
            wallpaper&apos;s identifier and its Cloudinary public id, its size in pixels, its file
            format, whether it is an image or a video, the links used to play and download a
            video wallpaper, and whether it is behind a rewarded advertisement. The request does
            not contain your name, email address, phone number, location or any account
            information, and the catalogue is not linked to an account or to a device identifier
            that we store.
          </p>
          <ul>
            <li>
              Wallpapers you download, save or set as your wallpaper, and the preferences you
              choose in the app, are <strong>not</strong> uploaded to any Shadow Studio Labs
              server.
            </li>
            <li>
              We do not use the app to build an advertising profile of you, and we do not sell
              personal information.
            </li>
            <li>
              Like any service reachable over the internet, the catalogue request necessarily
              exposes standard technical request metadata to the infrastructure that delivers it,
              such as your IP address, the device and app user agent, the time of the request and
              the URL requested. Vercel, which hosts the service, processes this information to
              operate, secure and support its network under its own privacy notice.
            </li>
          </ul>
        </PolicySection>

        <PolicySection title="Information processed by third parties">
          <p>
            It is important to distinguish between information handled by services we operate and
            information processed by independent third parties. Shadow Studio Labs does not ask you
            for personal information through the app. The providers below process technical
            information as part of delivering their services, under their own privacy policies.
          </p>

          <p>
            <strong>Cloudinary (wallpaper media delivery).</strong> Wallpaper images, videos and
            video posters are downloaded from Cloudinary. Each time media is requested, Cloudinary
            receives standard request metadata such as your IP address, the device and app user
            agent, the requested URL and the time of the request. The app does not upload photos or
            videos from your device to Cloudinary.
          </p>

          <p>
            <strong>Google Mobile Ads (advertisements).</strong> The Google Mobile Ads SDK may
            automatically collect and share the following categories of information for advertising,
            analytics and fraud-prevention purposes, as described in Google&apos;s own disclosure:
          </p>
          <ul>
            <li>
              <strong>IP address,</strong> which may be used to estimate the general location of a
              device.
            </li>
            <li>
              <strong>User product interactions,</strong> such as app launches, taps and video
              views.
            </li>
            <li>
              <strong>Diagnostic information</strong> about the performance of the app and the SDK,
              including app launch time, hang rate and energy usage.
            </li>
            <li>
              <strong>Device and account identifiers,</strong> including the Android advertising
              (ad) ID, the app set ID and, where applicable, other identifiers related to
              signed-in accounts on the device.
            </li>
          </ul>
          <p>
            This information is collected and shared by the Google Mobile Ads SDK automatically. It
            is not collected by Shadow Studio Labs directly, and the app does not send Google any
            custom personal information such as your name, email address or phone number. Google
            reports that user data collected by the Google Mobile Ads SDK is encrypted in transit
            using the Transport Layer Security (TLS) protocol.
          </p>
          <p>
            The advertising ID is optional in Android and can be reset or deleted by you using the
            ad ID controls in your device settings. Halloween Countdown does not include an in-app
            consent or advertising-preference screen, so changes to advertising options are made
            through those device settings and through the tools described in Google&apos;s privacy
            policy.
          </p>

          <p>
            <strong>Network service providers.</strong> Your mobile network operator, internet
            service provider and any other network intermediary necessarily handle your IP address
            and related request metadata in order to route the traffic that loads wallpapers and
            advertisements. They do so under their own policies, which are outside our control.
          </p>
        </PolicySection>

        <PolicySection title="Wallpapers, downloading and saving to your device">
          <ul>
            <li>
              When you choose a wallpaper, the app downloads the file from Cloudinary to a private
              folder on your device and asks the Android media library to save it to your gallery or
              wallpaper folder.
            </li>
            <li>
              Before a wallpaper is saved, the app checks the media permission that applies to
              your version of Android and may ask you for it if Android still allows the
              request. Depending on your version of Android and on the permissions you have
              already granted, you may see a permission prompt at that point, or the save may
              complete without any prompt.
            </li>
            <li>
              The app does not scan or browse the photos and videos already on your device, and it
              does not upload media from your device.
            </li>
            <li>
              Downloading and saving happen locally on your device. No personal information is sent
              to Shadow Studio Labs as part of this process.
            </li>
          </ul>
        </PolicySection>

        <PolicySection title="Local storage and device backups">
          <p>
            The app stores a small number of preferences on your device using local storage
            (AsyncStorage), for example your chosen theme, whether background music is enabled and
            other settings. These values stay on your device. They are not transmitted to Shadow
            Studio Labs, they are not linked to an account, and they do not contain personal
            information. You can clear them at any time by clearing the app&apos;s data or
            uninstalling the app.
          </p>
          <p>
            The app is configured with Android&apos;s <code>allowBackup=&quot;true&quot;</code>, so
            Android&apos;s own backup service may include app data in the device backups you have
            enabled (for example, your Google backup). You can control or disable backup for this
            app in your device&apos;s backup settings, and you can remove local app data by clearing
            the app&apos;s data or uninstalling it.
          </p>
        </PolicySection>

        <PolicySection title="Device permissions">
          <p>
            The app requests the following permissions so that it can do what it is designed to do.
            You can manage or revoke them through your device settings at any time.
          </p>
          <ul>
            <li>
              <strong>Internet access and network state:</strong> used to download the wallpaper
              catalogue, the wallpaper media and to load advertisements.
            </li>
            <li>
              <strong>Advertising ID and advertising services:</strong> used by the Google Mobile
              Ads SDK to serve and measure advertisements.
            </li>
            <li>
              <strong>Media and storage:</strong> used to write a wallpaper you choose into your
              device&apos;s media library. The app asks only for the permission it needs in order to
              add media to that library, and which permission that is depends on your version of
              Android. The app does not read the photos and videos already on your device.
            </li>
            <li>
              <strong>Audio settings, foreground service and wake lock:</strong> the audio setting
              lets the app set the device audio mode so the theme soundtrack can play. The
              foreground service and wake lock permissions are declared by the Google Mobile Ads
              SDK and the Android libraries it depends on; the app does not run a foreground
              service of its own. The app does not play audio or wallpaper video in the
              background: the soundtrack and the video previews pause when the app goes to the
              background. The app has no notification permission and does not show notifications.
            </li>
            <li>
              <strong>Vibration:</strong> used for optional haptic feedback.
            </li>
            <li>
              <strong>Display over other apps:</strong> declared in the app manifest. Android only
              grants this permission if you enable it yourself in Settings, and it is not required
              for the countdown or wallpaper features.
            </li>
          </ul>
          <p>
            The app does not request access to your location, camera, contacts, phone state or SMS
            messages, it does not request permission to see the other apps installed on your device,
            and it does not record audio from the microphone.
          </p>
        </PolicySection>

        <PolicySection title="How information is used">
          <ul>
            <li>
              <strong>Providing the app:</strong> to deliver the wallpaper catalogue, the wallpaper
              media and the countdown experience on your device.
            </li>
            <li>
              <strong>Advertising:</strong> to select and serve advertisements, including rewarded
              advertisements, and to measure ad performance and prevent invalid ad traffic, as
              described by Google.
            </li>
            <li>
              <strong>Diagnostics and reliability:</strong> to keep the app and the advertising
              components stable and to understand performance problems.
            </li>
            <li>
              <strong>Security:</strong> to detect abuse of our services and to protect them.
            </li>
          </ul>
          <p>
            Shadow Studio Labs does not use the information described in this policy to build a
            profile of you, and does not sell personal information. Google and the other providers
            listed here may use and share the information they process for their own purposes,
            which can include personalised advertising, under their own policies.
          </p>
        </PolicySection>

        <PolicySection title="Data retention and deletion">
          <p>
            The app has no account system. You cannot create an account, and there is no in-app
            account to delete, so we do not hold a user profile for you.
          </p>
          <ul>
            <li>
              <strong>On your device:</strong> preferences and downloads stay on your device and are
              removed when you clear the app&apos;s data, uninstall the app or delete the files.
              Files you have saved to your media library stay there until you delete them.
            </li>
            <li>
              <strong>Developer-retained information:</strong> the only information you may choose
              to send us is what you include in an email to us. We keep it only for as long as we
              need it to deal with your request or to meet legal obligations. Because the app has
              no account system, there is no in-app deletion workflow; if you want the information
              you have sent us deleted, contact us using the address below and we will deal with
              that request and confirm what we are able to remove.
            </li>
            <li>
              <strong>Third-party data:</strong> Vercel, Cloudinary and Google each process or
              retain request and advertising data for their own purposes and for their own
              retention periods, which are described in their privacy policies. Shadow Studio Labs
              does not set or control those periods, and we cannot delete data that those providers
              retain independently of us. To request deletion from them, use the contact and rights
              processes described in their own policies.
            </li>
          </ul>
        </PolicySection>

        <PolicySection title="Security">
          <p>
            The network requests we inspected in the app — to the wallpaper catalogue, to Cloudinary
            and to Google&apos;s advertising services — use HTTPS, so this traffic is protected by
            TLS. Google also states that user data collected by the Google Mobile Ads SDK is
            encrypted in transit using TLS.
          </p>
          <p>
            We take reasonable technical and organisational steps to protect the services we
            operate. However, no method of transmission or storage is completely secure, and the
            third-party services listed here apply their own security practices, which may differ
            from ours.
          </p>
        </PolicySection>

        <PolicySection title="Children&apos;s privacy">
          <p>
            Halloween Countdown Wallpapers is intended for a general audience aged 13 and above. It
            is not deliberately directed at children under the age of 13, and it is not part of the
            Google Play Families program.
          </p>
          <p>
            The app does not include an age gate, so we cannot technically stop a child under 13
            from opening it. Because the app has no account system and never asks for names,
            contact details or any other personal information, we do not knowingly collect personal
            information from children and we do not hold a profile of a child who uses the app.
            Google Mobile Ads may still process the technical data described in this policy when
            advertisements are served. If you believe a child under 13 has used the app, please
            contact us so that we can take appropriate action.
          </p>
        </PolicySection>

        <PolicySection title="Third-party privacy policies">
          <p>
            The services listed above have their own privacy policies, which govern the
            information they process:
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
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent transition-colors hover:text-accent-hover"
              >
                Vercel Privacy Notice
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
          </ul>
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
