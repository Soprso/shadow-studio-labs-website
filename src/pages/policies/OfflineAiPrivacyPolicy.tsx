import { Seo } from '../../components/Seo'
import { PolicyLayout } from '../../components/PolicyLayout'
import { PolicySection } from '../../components/PolicySection'

// Review this date whenever the policy is updated.
const LAST_UPDATED = 'November 20, 2026'

const hfLinkClasses = 'font-medium text-accent transition-colors hover:text-accent-hover'

export function OfflineAiPrivacyPolicy() {
  return (
    <>
      <Seo
        title="Offline AI – Privacy Policy"
        description="Privacy policy for Offline AI, an Android app by Shadow Studio Labs that runs GGUF models locally through llama.cpp. Explains local inference/storage, model downloads, and optional AI response reporting submitted by you."
        canonicalPath="/privacy/offline-ai"
      />
      <PolicyLayout appName="Offline AI" lastUpdated={LAST_UPDATED}>
        <PolicySection title="Introduction">
          <p>
            This privacy policy describes how Shadow Studio Labs operates the Offline AI application
            (Android package <code>com.soprso.dhurandharai</code>, also referred to as &quot;Offline AI&quot;,
            &quot;the app&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;). Offline AI is an Android
            application that loads supported GGUF AI models and runs them locally on your device through the
            llama.cpp inference engine, so you can chat with a model without sending your messages to a remote
            AI provider for generation.
          </p>
          <p>
            This policy explains what information the app stores locally on your device, which network requests
            the app may make, how optional AI response reports you explicitly submit are handled, how independent
            third-party services involved in model downloads or reporting infrastructure may process technical
            information, and what choices you have. It applies to the Offline AI mobile application only.
          </p>
          <p>
            Offline AI works without an account, sign-in or registration. <strong>AI inference is local-only:</strong>{' '}
            prompts are processed on your device and replies are generated on your device by the loaded model.
            Internet access may be used for two purposes: (1) downloading model files you choose from Hugging
            Face, and (2) submitting an AI response report only if you explicitly choose to submit it for
            developer review. Ordinary chats, prompts, model outputs and conversations are not automatically
            uploaded.
          </p>
          <p>This policy was last updated on <strong>{LAST_UPDATED}</strong>.</p>
        </PolicySection>

        <PolicySection title="Our privacy approach">
          <p>Offline AI is built with a local-first architecture:</p>
          <ul>
            <li>
              <strong>Local AI inference:</strong> models run through the llama.cpp inference engine on your
              device. Prompts are processed on the device and responses are generated on the device. No cloud AI
              inference service is used.
            </li>
            <li>
              <strong>Local storage:</strong> conversations, messages, model metadata, download records and local
              report records are stored locally on your device in app-private storage. Downloaded GGUF model files
              are kept in the app&apos;s private storage folder.
            </li>
            <li>
              <strong>No account:</strong> the app does not require an account, registration, email address or
              phone number for ordinary chat or for reporting.
            </li>
            <li>
              <strong>Explicit reporting only:</strong> if you choose to submit a report about an AI response,
              only the information shown to you and submitted by you is sent to Shadow Studio Labs&apos; reporting
              backend for safety review. The app does not automatically upload reports, prompts, replies or
              conversations.
            </li>
          </ul>
          <p>
            <strong>Important distinction:</strong> when you do not submit a report, report data stays on your
            device. When you explicitly submit a report, the submitted report data is transmitted over the internet
            to our backend and stored for developer review as described below.
          </p>
        </PolicySection>

        <PolicySection title="Information we collect">
          <p>
            <strong>Shadow Studio Labs does not collect personal information for ordinary chat use of Offline AI.</strong>{' '}
            The app has no account system and no sign-in screen. Shadow Studio Labs does not receive your ordinary
            conversations, prompts, model outputs or usage statistics unless you explicitly include them in a
            report that you choose to submit.
          </p>
          <p>What the app processes <strong>locally on your device</strong> includes:</p>
          <ul>
            <li>messages you type and model replies while you chat;</li>
            <li>conversation titles and timestamps;</li>
            <li>model selection/context settings and model metadata;</li>
            <li>download progress records for model downloads;</li>
            <li>local report records you create, including pending/failed/submitted status and a report reference when available.</li>
          </ul>
          <p>
            <strong>Information submitted only when you explicitly choose to submit an AI response report:</strong>
          </p>
          <ul>
            <li>the report category/reason you select;</li>
            <li>the reported AI response content (or excerpt) that you choose to submit, as shown in the report preview;</li>
            <li>optional additional details you enter;</li>
            <li>limited technical/context metadata needed for review, such as model name, app version, a conversation reference/identifier, submission timestamps, submission status, and an idempotency key used to prevent duplicate submissions;</li>
            <li>a report reference assigned after successful server processing.</li>
          </ul>
          <p>
            Reports are intended for AI safety/content review. <strong>Do not include sensitive personal information</strong>{' '}
            in optional details. The app is not designed to collect unnecessary personal data, and you should not
            submit entire conversations unless the specific reported content requires context (the app does not
            automatically upload whole conversations).
          </p>
        </PolicySection>

        <PolicySection title="Information stored on your device">
          <p>Offline AI stores the following information locally on your device (in app-private storage):</p>
          <ul>
            <li><strong>Conversations and messages:</strong> titles, timestamps, your messages and model replies.</li>
            <li><strong>Model preferences and metadata:</strong> selected/loaded model, context settings, and installed model details.</li>
            <li><strong>Downloaded model files:</strong> GGUF files you download/import, stored in the app&apos;s private model storage.</li>
            <li><strong>Download records:</strong> URL, file name, progress, state and errors for downloads.</li>
            <li>
              <strong>Safety/report records:</strong> locally saved report entries, including pending/failed/submitted
              state, submission attempts, idempotency key, and server-confirmed report reference/status when a
              submission succeeds. Local records are kept so you can review them and retry pending/failed submissions.
            </li>
          </ul>
          <p>
            Local data is protected by the Android application sandbox. The local database is <strong>not</strong>{' '}
            additionally encrypted at rest in this build. The app is configured with{' '}
            <code>android:allowBackup=&quot;false&quot;</code>, so Android backup services do not include this app&apos;s
            data in device backups.
          </p>
        </PolicySection>

        <PolicySection title="AI processing and local inference">
          <p>
            When you load a model and send a message, Offline AI processes the prompt locally in the llama.cpp
            inference engine and generates replies locally on your device. No external AI provider is used to
            generate responses. Inference runs only while a model is loaded and only on-device.
          </p>
          <p>
            Model quality, safety behavior and performance depend on the selected model, prompt/context and your
            device hardware. On-device safeguards are conservative checks and are not a guarantee that unsafe
            output can never appear.
          </p>
        </PolicySection>

        <PolicySection title="Optional AI response reporting, transmission and developer review">
          <p>
            Offline AI includes an in-app reporting flow for AI responses. Reporting is <strong>optional</strong> and
            <strong> user-initiated</strong>. The app shows you a preview of the content to be submitted, discloses
            that the report will be shared with Shadow Studio Labs for safety review, and requires an explicit submit
            action.
          </p>
          <ul>
            <li>
              <strong>Purpose:</strong> to review reported AI content, investigate safety issues, improve app safety
              measures, and support moderation/review workflows.
            </li>
            <li>
              <strong>What may be transmitted when you submit:</strong> report category, reported content/excerpt,
              optional details you provide, model name, app version, conversation reference/identifier, timestamps,
              idempotency/submission metadata, and status/reference information returned by the server.
            </li>
            <li>
              <strong>Transmission/security:</strong> submitted reports are sent over HTTPS to Shadow Studio Labs&apos;
              backend endpoint. Network transmission has inherent risks, but we use HTTPS and server-side handling
              intended to protect submitted data in transit and restrict access.
            </li>
            <li>
              <strong>Storage:</strong> submitted reports are stored in a dedicated Shadow Studio Labs Supabase
              database used for developer reporting and are accessed only through authorized server-side/backend
              processes for developer review.
            </li>
            <li>
              <strong>Developer review:</strong> authorized developers may view, search, filter, update status, add
              private internal notes, and delete submitted reports as appropriate for safety review and moderation.
            </li>
            <li>
              <strong>No automatic uploads:</strong> the app does not automatically upload reports or entire
              conversations. A report is sent only when you explicitly submit it.
            </li>
            <li>
              <strong>Offline/pending behavior:</strong> if submission cannot be completed (for example due to
              connectivity or backend issues), the report is saved locally as pending/failed, not marked as submitted,
              and can be retried manually. It is marked submitted only after server confirmation.
            </li>
          </ul>
          <p>
            After a successful submission, the app may show a confirmation and report reference. Submitting a report
            does not guarantee an individual response or follow-up.
          </p>
        </PolicySection>

        <PolicySection title="Model downloads and third-party services">
          <p>
            To chat with a model you must first download or import its GGUF file. Offline AI may connect to{' '}
            <strong>Hugging Face</strong> (<code>huggingface.co</code>) over HTTPS to download model files you choose.
            When downloading, your device makes an HTTPS request to Hugging Face servers, which may receive standard
            technical request metadata (such as IP address, user agent, requested URL and request time). Hugging Face
            processes that information under its own privacy policy.
          </p>
          <p>
            The app does not send your ordinary chat prompts, replies or conversations to Hugging Face. Apart from
            model downloads and optional report submissions you explicitly initiate, the app is not intended to send
            app content to third-party services.
          </p>
        </PolicySection>

        <PolicySection title="Internet connectivity">
          <p>
            Offline AI requests internet permission and may use network access for:
          </p>
          <ul>
            <li>downloading model files you choose from Hugging Face (HTTPS);</li>
            <li>submitting an AI response report only when you explicitly choose to submit it.</li>
          </ul>
          <p>
            Internet access is <strong>not</strong> required for local model inference/chat once a model is loaded,
            for viewing local conversation history, or for storing a report locally as pending/failed. When you do not
            submit a report, report data remains on your device.
          </p>
        </PolicySection>

        <PolicySection title="Analytics, advertising and tracking">
          <p>
            Offline AI does not include advertising SDKs, analytics SDKs, tracking libraries or third-party telemetry
            for profiling users. Network requests are limited to functionality you initiate, such as model downloads
            and explicit report submissions.
          </p>
        </PolicySection>

        <PolicySection title="Data sharing and disclosure">
          <ul>
            <li>
              <strong>Ordinary conversations are not automatically transmitted to Shadow Studio Labs.</strong> Your
              prompts and replies stay on your device unless you explicitly include reported content in a submitted
              report.
            </li>
            <li>
              <strong>No cloud AI inference provider:</strong> prompts/replies are not sent to external AI services
              for generation.
            </li>
            <li>
              <strong>Optional report submissions:</strong> if you explicitly submit a report, submitted report data is
              shared with Shadow Studio Labs&apos; reporting backend/database for safety review and handled by our
              infrastructure providers as needed to operate the service (for example hosting/backend/database).
            </li>
            <li>
              <strong>Model download providers:</strong> Hugging Face may process standard technical request data when
              you download models.
            </li>
          </ul>
          <p>
            Shadow Studio Labs does not sell personal information. We may disclose information we hold if legally
            required to do so. Information we hold from the app is limited to reports/data you explicitly submit and
            any information you choose to send us directly (for example support messages).
          </p>
        </PolicySection>

        <PolicySection title="Data retention and deletion">
          <p><strong>On your device:</strong></p>
          <ul>
            <li>Conversations/messages can be deleted in-app and are removed when you clear app data or uninstall.</li>
            <li>Downloaded/imported models can be deleted in-app and are removed when you clear app data or uninstall.</li>
            <li>Local report records (including pending/failed/submitted entries stored on-device) can be reviewed and deleted in the app where supported; they are also removed if you clear app data or uninstall.</li>
          </ul>
          <p><strong>Submitted reports (server-side):</strong></p>
          <ul>
            <li>
              Reports you explicitly submit are retained for safety review, abuse prevention, moderation/improvement of
              safety measures, and record-keeping for a period reasonably necessary for those purposes, unless earlier
              deletion is required or appropriate.
            </li>
            <li>
              Authorized developers may review, update, and delete submitted reports. If you need assistance regarding a
              submitted report, contact us with the report reference (if available) and we will review the request as
              appropriate.
            </li>
          </ul>
          <p>
            Shadow Studio Labs does not hold copies of ordinary chats that were never submitted as reports. Uninstalling
            the app does not automatically delete server-side reports you previously submitted successfully.
          </p>
        </PolicySection>

        <PolicySection title="Data security">
          <p>
            Offline AI uses Android app sandboxing for local data, HTTPS for model downloads and report submissions,
            server-side handling for submitted reports, and restricted backend access to reporting infrastructure.
            Submitted report access is intended for authorized developer review only.
          </p>
          <p>
            No method of storage or transmission is completely secure. Local data is not additionally encrypted at rest
            in this build. Please keep your device secure. Do not include unnecessary sensitive personal information in
            report details.
          </p>
        </PolicySection>

        <PolicySection title="Children&apos;s privacy">
          <p>
            Offline AI is intended for a general audience and is not designed for or directed at children. Because the
            app does not require accounts and ordinary chat is local, Shadow Studio Labs does not knowingly collect
            personal information from children through ordinary use. If a child submits personal information in a report
            or support message, contact us and we will address it as appropriate.
          </p>
        </PolicySection>

        <PolicySection title="Your privacy choices and rights">
          <ul>
            <li>Delete local conversations, models and local report records in-app (where available), or clear app data/uninstall.</li>
            <li>Choose whether to submit an AI response report; reporting is optional and explicit.</li>
            <li>If a report submission fails or is pending, you can retry manually or keep/delete it locally depending on app options.</li>
            <li>Review permissions in your device settings (internet access is needed for downloads and explicit report submission).</li>
            <li>Contact us about this policy or submitted report handling; include the report reference if you have one.</li>
          </ul>
        </PolicySection>

        <PolicySection title="Third-party privacy policies">
          <p>Relevant third-party services may have their own privacy policies:</p>
          <ul>
            <li>
              <a href="https://huggingface.co/privacy" target="_blank" rel="noopener noreferrer" className={hfLinkClasses}>
                Hugging Face Privacy Policy
              </a> (model downloads)
            </li>
            <li>
              <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className={hfLinkClasses}>
                Supabase Privacy Policy
              </a> (backend database infrastructure for submitted developer reports, when used)
            </li>
            <li>
              <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener noreferrer" className={hfLinkClasses}>
                Netlify Privacy Policy
              </a> (backend hosting/functions for report submission and dashboard services, when used)
            </li>
          </ul>
        </PolicySection>

        <PolicySection title="Changes to this policy">
          <p>
            We may update this privacy policy from time to time to reflect changes to Offline AI, reporting features,
            infrastructure, or applicable law. Updates will be published on this page with a revised &quot;Last updated&quot;
            date. Current revision: <strong>{LAST_UPDATED}</strong>.
          </p>
        </PolicySection>

        <PolicySection title="Contact information">
          <p>If you have questions about this privacy policy or Offline AI, contact Shadow Studio Labs at:</p>
          <ul>
            <li>
              <a href="mailto:shadowstudiolabs@gmail.com" className={hfLinkClasses}>shadowstudiolabs@gmail.com</a>
            </li>
          </ul>
        </PolicySection>
      </PolicyLayout>
    </>
  )
}
