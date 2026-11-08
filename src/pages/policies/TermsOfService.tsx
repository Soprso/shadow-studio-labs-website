import { Seo } from '../../components/Seo'
import { PolicyLayout } from '../../components/PolicyLayout'
import { PolicySection } from '../../components/PolicySection'
import { apps } from '../../data/apps'
import { site } from '../../data/site'

// Review this date whenever the Terms of Service are updated.
const LAST_UPDATED = 'November 8, 2026'

const linkClasses = 'font-medium text-accent transition-colors hover:text-accent-hover'
const legalPoliciesUrl = `${site.siteUrl}/privacy`
const appPolicies = apps.filter((app) => app.privacyPath)

export function TermsOfService() {
  return (
    <>
      <Seo
        title="Terms of Service — Shadow Studio Labs"
        description="Terms of Service for the website and Android applications published by Shadow Studio Labs, an independent software studio and sole proprietorship based in India."
        canonicalPath="/terms"
      />
      <PolicyLayout
        appName="Terms of Service"
        lastUpdated={LAST_UPDATED}
        eyebrow="Legal"
        contactDescription="If you have questions about these Terms of Service, need help with an application, or wish to raise a grievance, you can reach us at:"
      >
        <PolicySection title="1. Introduction and Acceptance of Terms">
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your access to and use of the
            website at{' '}
            <a
              href={site.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClasses}
            >
              {site.siteUrl.replace(/^https?:\/\//, '')}
            </a>{' '}
            and the mobile applications, features and other digital services published by Shadow
            Studio Labs (together, the &quot;Services&quot;). The Services include applications
            distributed through Google Play.
          </p>
          <p>
            By downloading, installing, accessing or using any of the Services, you agree to these
            Terms. If you do not agree, please do not use the Services and uninstall any
            application you have installed. If you use the Services on behalf of an organisation,
            you confirm that you have authority to accept these Terms on its behalf.
          </p>
          <p>
            These Terms should be read together with our{' '}
            <a
              href={legalPoliciesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClasses}
            >
              Privacy Policies
            </a>{' '}
            and the app-specific privacy policy that applies to an application you use. They
            should also be read with the terms, policies and payment rules that apply to Google
            Play. Where a Google Play policy governs the store, payment or refund process, that
            policy applies to that process. These Terms govern the relationship between you and
            Shadow Studio Labs.
          </p>
        </PolicySection>

        <PolicySection title="2. About Shadow Studio Labs">
          <p>
            Shadow Studio Labs is an independent software studio and a sole proprietorship based in
            India. We design, develop and publish mobile applications and other digital products,
            and we operate this website as a home for our products and legal information.
          </p>
          <p>
            References to &quot;Shadow Studio Labs&quot;, &quot;we&quot;, &quot;us&quot; and
            &quot;our&quot; mean the Shadow Studio Labs sole proprietorship. Shadow Studio Labs is
            independent from Google. Google Play, Google AdMob and Google Play Billing are services
            operated by Google, and your use of those services is also subject to Google&apos;s own
            terms and policies.
          </p>
        </PolicySection>

        <PolicySection title="3. Eligibility and Account Requirements">
          <p>
            You must be legally capable of entering into a binding contract under the laws that
            apply to you in order to use the Services. If you are below the age of majority in your
            country, you may use the Services only with the involvement and consent of a parent or
            legal guardian.
          </p>
          <p>
            Age requirements can differ between our applications. The Google Play listing for each
            application states its target audience and content rating, and an app-specific privacy
            policy may describe the intended audience. You must comply with the age requirements
            that apply to the application you use. This page does not make a single age declaration
            for every application; the listing and policy for the relevant application control.
          </p>
          <p>
            As of the Last Updated date, our published applications do not require a Shadow Studio
            Labs account, sign-in, username or password. You can use them without creating an
            account with us. If a future application offers an optional account, you will be
            responsible for keeping your account details accurate and secure, for activity carried
            out through your account, and for not sharing your account credentials with anyone
            else.
          </p>
          <p>
            A Google account and the Google Play Store may be required to download an application,
            make an in-app purchase or manage a subscription. Those requirements are set by Google,
            not by Shadow Studio Labs, and are governed by Google&apos;s terms.
          </p>
        </PolicySection>

        <PolicySection title="4. Use of Applications and Services">
          <p>
            Subject to these Terms, we grant you a limited, personal, non-exclusive,
            non-transferable and revocable licence to install and use our applications on a device
            that you own or control, for your own personal and non-commercial use. You may use this
            website for lawful, informational purposes.
          </p>
          <p>
            This licence is for the intended use of the Services only. It does not give you any
            right to use our software, content or branding in a way that is not expressly permitted
            by these Terms. Your use of an application is also subject to the rules of the app store
            from which you obtained it.
          </p>
          <p>
            Some features may require an internet connection, a compatible device, certain device
            permissions or access to third-party services. Features, content and availability may
            differ by application, device, operating-system version and region. We may release
            updates, and some updates may be required for an application to continue working
            correctly.
          </p>
        </PolicySection>

        <PolicySection title="5. User Responsibilities and Prohibited Activities">
          <p>You agree to use the Services lawfully and responsibly. In particular, you must not:</p>
          <ul>
            <li>
              use the Services in breach of any applicable law, regulation, court order or
              third-party right;
            </li>
            <li>
              reverse engineer, decompile, disassemble or otherwise attempt to derive the source
              code of an application, except where applicable law expressly permits it;
            </li>
            <li>
              modify, adapt, translate, create derivative works from, distribute, sublicense, rent,
              lease, sell, resell or commercially exploit the Services or any part of them;
            </li>
            <li>
              remove, obscure or alter any copyright, trademark, attribution or other proprietary
              notice;
            </li>
            <li>
              bypass, tamper with or circumvent advertisements, purchase flows, entitlement checks,
              reward verification or any other access control;
            </li>
            <li>
              use bots, scrapers, automated scripts or other means to access, copy or overload the
              Services, or attempt to gain unauthorised access to any system or network;
            </li>
            <li>
              introduce malware, viruses or any other harmful code, or interfere with the
              operation, security or integrity of the Services;
            </li>
            <li>
              impersonate another person, misrepresent your affiliation, or use the Services to
              harass, threaten, defame, abuse or infringe the rights of others;
            </li>
            <li>
              use the Services to distribute unlawful, infringing, deceptive or harmful content; or
            </li>
            <li>
              use the Services in any way that could damage, disable, overburden or impair them, or
              interfere with another person&apos;s use of them.
            </li>
          </ul>
          <p>
            We may investigate suspected violations and take reasonable action, including removing
            content, restricting access or suspending or terminating use of the Services. You are
            responsible for any activity carried out through your device, your app-store account or
            any account you use with the Services.
          </p>
        </PolicySection>

        <PolicySection title="6. Intellectual Property Rights">
          <p>
            The Services and their contents — including the applications, website, software, source
            code, design, user interfaces, text, graphics, logos, icons, images, audio, video and
            the selection and arrangement of those elements — are owned by Shadow Studio Labs or
            used under licence, and are protected by Indian and international intellectual property
            laws.
          </p>
          <p>
            Your licence to use the Services does not transfer any ownership rights to you. You may
            not copy, reproduce, republish, upload, post, transmit, distribute or otherwise use our
            content except as expressly permitted by these Terms or by applicable law. All rights
            not expressly granted are reserved.
          </p>
          <p>
            Third-party names, logos, products and content — including Google Play, Google AdMob
            and Google Play Billing — are the property of their respective owners. References to
            them do not imply any endorsement, sponsorship or affiliation beyond the service
            relationship described in these Terms.
          </p>
          <p>
            If you send us feedback, suggestions or ideas about the Services, you do so voluntarily.
            To the extent permitted by law, we may use that feedback without any obligation to
            compensate you or to keep it confidential. Please do not send us confidential
            information unless we have agreed to receive it.
          </p>
          <p>
            Our applications generally store the preferences, progress and other content you create
            locally on your device. We do not claim ownership of that local content, and we do not
            receive it unless you choose to send it to us.
          </p>
        </PolicySection>

        <PolicySection title="7. Advertisements and Third-Party Services">
          <p>
            Some of our applications display advertisements through Google Mobile Ads (AdMob).
            Advertisements may be personalised or non-personalised depending on the app, your
            consent choices, your device settings and the region in which you use the application.
            Our{' '}
            <a
              href={legalPoliciesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClasses}
            >
              Privacy Policies
            </a>{' '}
            and the relevant app-specific privacy policy explain how advertising data is handled.
          </p>
          <p>
            Some advertisements are optional rewarded advertisements. Watching a rewarded
            advertisement may unlock content or a benefit within an application, but only where
            that feature is offered and only after the advertising service confirms that the
            requirements for the reward have been met. We do not guarantee that a particular
            advertisement, reward, offer or amount of content will always be available.
          </p>
          <p>
            We do not control the content of third-party advertisements, and we do not endorse the
            products or services advertised. Any interaction you have with an advertiser, including
            a purchase or a visit to an advertiser&apos;s website, is between you and that
            advertiser. You should review the advertiser&apos;s own terms and privacy policy before
            providing information or entering into a transaction.
          </p>
          <p>
            The Services also rely on third-party providers for functions such as app distribution,
            advertising, payment processing, hosting and media delivery. Those providers operate
            under their own terms and policies, and we are not responsible for their independent
            acts or omissions.
          </p>
        </PolicySection>

        <PolicySection title="8. In-App Purchases and Payments">
          <p>
            Certain applications may offer optional paid digital content, features or other digital
            items (collectively, &quot;Premium Content&quot;) through Google Play Billing. Premium
            Content may be offered as a one-time purchase or, where an application offers it, as a
            subscription. The Google Play listing and the in-app purchase screen indicate which type
            applies to a particular item.
          </p>
          <p>
            A one-time purchase (sometimes described as a &quot;permanent&quot;, &quot;lifetime&quot;
            or &quot;unlock&quot; purchase) is a single payment that is not intended to renew.
            Subject to these Terms, Google Play&apos;s policies and applicable law, a valid one-time
            purchase is intended to remain available to the Google account used to make the purchase
            for as long as the relevant application supports the purchased feature. A subscription
            is a recurring payment that provides access for the applicable billing period and renews
            automatically unless cancelled through Google Play.
          </p>
          <p>
            Purchases are processed by Google through Google Play Billing. Shadow Studio Labs does
            not process your payment directly and does not collect or store your payment card
            details. Google&apos;s terms, payment policies and privacy policy govern the payment
            transaction, including the payment method, billing, taxes, renewals and account
            requirements.
          </p>
          <p>
            The price, currency, taxes and availability of Premium Content are shown by Google Play
            at the time of purchase and may vary by country or region. The price displayed at
            checkout is the price that applies to that transaction. We may change the price or
            availability of Premium Content for future purchases, but changes do not affect a
            completed purchase except as required by applicable law or Google Play policy.
          </p>
          <p>
            You must be authorised to use the payment method you select. By confirming a purchase,
            you authorise Google to charge the applicable amount. A purchase may require a Google
            account and may be subject to Google&apos;s verification and fraud-prevention checks.
            Access to purchased content may depend on the application, your Google account and an
            internet connection.
          </p>
          <p>
            If a purchase fails, is charged incorrectly or does not appear as expected, please
            contact Google Play support first, because Google controls the payment and billing
            record. You may also contact us, and we will help where we reasonably can.
          </p>
        </PolicySection>

        <PolicySection title="9. Premium Features and Digital Content">
          <p>
            Premium Content is licensed to you, not sold to you. Subject to these Terms, the
            applicable Google Play terms and applicable law, you receive a limited, personal,
            non-exclusive, non-transferable and revocable licence to use the Premium Content within
            the relevant application for your own personal, non-commercial use.
          </p>
          <p>
            A valid one-time purchase is intended to remain available to the original purchasing
            Google account for as long as the relevant application supports the purchased feature.
            We will not arbitrarily revoke a valid permanent purchase. Access may nevertheless be
            affected by the limited exceptions described in the Refunds and Cancellation section,
            such as a refund, a reversed transaction, a chargeback, a fraudulent or unauthorised
            purchase, or a legal requirement.
          </p>
          <p>
            Premium Content may be linked to the Google account used for the purchase. It may not be
            transferable between accounts, devices, platforms or regions, and access may require
            you to be signed in to the same Google account. Some Premium Content may require an
            internet connection or a compatible version of the application.
          </p>
          <p>
            To restore an eligible purchase after reinstalling an application or using another
            compatible device, sign in to Google Play with the same Google account used for the
            original purchase and use the application&apos;s restore option, if one is provided.
            Google Play Billing is designed to restore eligible purchases associated with that
            account. If a purchase does not restore, please contact Google Play support first; we
            can assist where reasonably possible but cannot override Google&apos;s billing records.
          </p>
          <p>
            Unless a purchase is expressly described as a permanent one-time purchase, virtual
            items, virtual currency, unlocks and similar digital content do not have monetary value,
            are not redeemable for cash and do not give you any ownership or property interest.
            They may be changed, replaced, limited or discontinued as the application evolves.
            Where required by applicable law or Google Play policy, we will respect any rights you
            have in relation to a purchase.
          </p>
          <p>
            We may add, modify, update or remove features and content to improve the Services,
            address legal or technical requirements or reflect changes to third-party services. If
            we discontinue a feature for which you made a valid permanent purchase, we will handle
            the change in accordance with Google Play policy and applicable law, which may include a
            remedy where required.
          </p>
        </PolicySection>

        <PolicySection title="10. Refunds and Cancellation">
          <p>
            Purchases made through Google Play are subject to Google Play&apos;s payment, refund and
            cancellation policies. Google handles refund requests for Google Play purchases, and
            Google — not Shadow Studio Labs — decides whether a refund is approved under those
            policies. You can find Google&apos;s refund information and request a refund through
            your Google Play account:
          </p>
          <p>
            <a
              href="https://support.google.com/googleplay/answer/2479637"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClasses}
            >
              Google Play — Request a refund for a Google Play purchase
            </a>
          </p>
          <p>
            We do not process refunds directly for Google Play purchases. If you believe you were
            charged in error, please contact Google Play support and, if you wish, contact us with
            the relevant details so that we can help where reasonably possible.
          </p>
          <p>
            <strong>One-time permanent purchases.</strong> A valid permanent purchase is not
            intended to be revoked arbitrarily. However, access may be reversed or adjusted where:
          </p>
          <ul>
            <li>the purchase is refunded through Google Play;</li>
            <li>
              the transaction is reversed, charged back or declined by the payment provider;
            </li>
            <li>
              the purchase was fraudulent, unauthorised or made in violation of these Terms or
              Google Play policy;
            </li>
            <li>we are required to do so by law or by a competent authority; or</li>
            <li>
              the application or the purchased feature is discontinued, in which case we will
              handle the change in accordance with Google Play policy and applicable law.
            </li>
          </ul>
          <p>
            <strong>Subscriptions.</strong> If an application offers a subscription, the
            subscription is managed through Google Play. Subscriptions may renew automatically
            unless cancelled before the renewal date. You can view and cancel a subscription in
            your Google Play account settings. Cancellation stops future billing but does not
            usually reverse a charge that has already been made, and access may continue until the
            end of the current billing period unless stated otherwise. Uninstalling an application
            does not cancel a subscription.
          </p>
          <p>
            Digital content that has already been accessed, downloaded or consumed may not be
            refundable except where required by applicable law or Google Play policy. We encourage
            you to check the description of any Premium Content before purchasing it.
          </p>
          <p>
            Nothing in these Terms limits any mandatory consumer rights you may have under
            applicable law, including the Consumer Protection Act, 2019 (where applicable), or your
            right to contact Google Play or a competent consumer authority.
          </p>
        </PolicySection>

        <PolicySection title="11. Privacy and Data Protection">
          <p>
            Our{' '}
            <a
              href={legalPoliciesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClasses}
            >
              Privacy Policies index
            </a>{' '}
            explains how we handle information across the Services. Each application also has its
            own privacy policy, which explains what that application stores locally, what
            information may be processed by third-party services such as Google AdMob and Google
            Play Billing, and how you can contact us about privacy matters.
          </p>
          <p>The published app-specific privacy policies are available at:</p>
          <ul>
            {appPolicies.map((app) => (
              <li key={app.slug}>
                <a
                  href={`${site.siteUrl}${app.privacyPath}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClasses}
                >
                  {app.name} Privacy Policy
                </a>
              </li>
            ))}
          </ul>
          <p>
            If an application does not have a separate policy, the Privacy Policies index applies.
            By using the Services, you acknowledge that information will be handled as described in
            the applicable policy. Some of our applications are designed to work without an account
            and store your preferences and progress locally on your device. Third-party providers
            process information under their own privacy policies, which we link to in the relevant
            policy.
          </p>
          <p>
            We take reasonable technical and organisational measures to protect the Services and
            the information we control. However, no method of transmission or storage is completely
            secure, and we cannot guarantee absolute security. Please review the applicable privacy
            policy for more information.
          </p>
        </PolicySection>

        <PolicySection title="12. Third-Party Links and Services">
          <p>
            The Services may contain links to, or integrations with, websites, applications and
            services operated by third parties, including Google Play, Google AdMob, Google Play
            Billing, hosting providers and advertising partners. These third-party services are not
            owned or controlled by Shadow Studio Labs, and we do not endorse them merely by linking
            to or integrating them.
          </p>
          <p>
            We are not responsible for the content, availability, security, accuracy or practices of
            third-party services. Your use of a third-party service is governed by that
            provider&apos;s own terms and privacy policy. You should review those terms before using
            the service or providing information to it.
          </p>
          <p>
            Any dealings you have with a third party — including an advertiser, a payment provider
            or an app store — are solely between you and that third party. To the maximum extent
            permitted by law, Shadow Studio Labs is not liable for any loss or damage arising from
            those dealings.
          </p>
        </PolicySection>

        <PolicySection title="13. Service Availability and Modifications">
          <p>
            The Services are provided on an &quot;as available&quot; basis. We do not guarantee that
            they will be available at all times, in every location, on every device or without
            interruption. Access may be affected by maintenance, updates, network conditions,
            device compatibility, regional restrictions, third-party outages or events beyond our
            reasonable control.
          </p>
          <p>
            Subject to our commitments regarding valid permanent purchases in Sections 9 and 10, we
            may modify, update, suspend or discontinue any part of the Services, including features,
            content, advertisements and Premium Content, at any time. We may also require you to
            install an update to continue using an application. Where practicable, we will try to
            give reasonable notice of material changes, but we are not obliged to do so where
            immediate action is necessary for security, legal or operational reasons.
          </p>
          <p>
            Except as described in Sections 9 and 10, we do not guarantee that any particular
            advertisement, reward, feature, purchase option or piece of content will remain
            available. To the maximum extent permitted by law, we are not liable for any
            modification, suspension or discontinuation of the Services.
          </p>
        </PolicySection>

        <PolicySection title="14. Disclaimer of Warranties">
          <p>
            To the maximum extent permitted by applicable law, the Services and all content made
            available through them are provided &quot;as is&quot; and &quot;as available&quot;,
            without warranties of any kind, whether express, implied or statutory. This includes,
            to the extent permitted by law, any implied warranties of merchantability, fitness for a
            particular purpose, title, non-infringement, accuracy, reliability, availability,
            security and freedom from viruses or other harmful components.
          </p>
          <p>
            We do not warrant that the Services will meet your requirements, that they will be
            uninterrupted, timely, secure or error-free, that defects will be corrected, or that any
            content, advertisement or third-party service will be accurate, complete, current or
            suitable for your purposes.
          </p>
          <p>
            No advice or information obtained from us or through the Services creates any warranty
            that is not expressly stated in these Terms. Some jurisdictions do not allow the
            exclusion of certain warranties, so some of the exclusions above may not apply to you.
            Nothing in these Terms excludes or limits any rights that cannot be excluded or limited
            by law.
          </p>
        </PolicySection>

        <PolicySection title="15. Limitation of Liability">
          <p>
            To the maximum extent permitted by applicable law, Shadow Studio Labs and its
            proprietor, employees, contractors, agents, suppliers and partners will not be liable
            for any indirect, incidental, special, consequential, punitive or exemplary damages, or
            for any loss of profits, revenue, data, goodwill, business opportunity, device or
            software damage, or the cost of substitute services, arising out of or in connection
            with your use of, or inability to use, the Services.
          </p>
          <p>
            This limitation applies to claims arising from the Services, content, advertisements,
            third-party services, Premium Content, purchases, unauthorised access or any other
            matter relating to these Terms, whether the claim is based on contract, tort, statute or
            any other legal theory, and whether or not we have been advised of the possibility of
            such loss.
          </p>
          <p>
            To the maximum extent permitted by law, our total aggregate liability to you for all
            claims relating to the Services will not exceed the total amount you paid for the
            affected Service during the twelve (12) months immediately before the event giving rise
            to the claim.
          </p>
          <p>
            Nothing in these Terms excludes or limits liability that cannot be excluded or limited
            by applicable law, including liability for fraud or for death or personal injury caused
            by negligence where such liability cannot lawfully be excluded. Mandatory consumer
            rights under applicable law, including the Consumer Protection Act, 2019 where
            applicable, are not affected.
          </p>
        </PolicySection>

        <PolicySection title="16. Suspension and Termination">
          <p>
            We may suspend, restrict or terminate your access to all or part of the Services if we
            reasonably believe that you have violated these Terms, that your use poses a risk to
            the Services, other users or third parties, that we are required to do so by law, or
            that it is necessary to prevent fraud, abuse or misuse. We may also remove content or
            features where necessary.
          </p>
          <p>
            You may stop using the Services at any time and uninstall any application you no longer
            wish to use. Uninstalling an application does not automatically cancel a subscription or
            reverse a charge; subscriptions and purchases must be managed through Google Play as
            described in the Refunds and Cancellation section.
          </p>
          <p>
            When your access ends, the licence granted to you under these Terms also ends, and you
            must stop using the Services. This is subject to the permanent-purchase commitments in
            Sections 9 and 10. Termination does not automatically entitle you to a refund, except
            where required by applicable law or Google Play policy. The sections of these Terms that
            by their nature should survive termination — including intellectual property,
            disclaimers, limitation of liability, governing law and contact provisions — will
            continue to apply.
          </p>
        </PolicySection>

        <PolicySection title="17. Changes to These Terms">
          <p>
            We may update these Terms from time to time to reflect changes to the Services, our
            practices, third-party services or applicable law. The revised Terms will be published
            on this page with an updated &quot;Last updated&quot; date. Where appropriate, we may
            also provide notice through the website, an application or an app-store listing.
          </p>
          <p>
            Changes take effect when the revised Terms are published, unless a different effective
            date is stated. By continuing to use the Services after the effective date, you agree to
            the revised Terms. If you do not agree to the revised Terms, please stop using the
            Services. We encourage you to review this page periodically.
          </p>
          <p>
            Current revision: <strong>{LAST_UPDATED}</strong>.
          </p>
        </PolicySection>

        <PolicySection title="18. Governing Law and Jurisdiction">
          <p>
            These Terms and any dispute or claim arising out of or in connection with them or the
            Services are governed by the laws of India, without regard to conflict-of-law
            principles.
          </p>
          <p>
            Subject to any mandatory consumer protection rights that apply to you, you and Shadow
            Studio Labs agree to submit to the exclusive jurisdiction of the competent courts in
            India for the resolution of any dispute arising out of or relating to these Terms or the
            Services.
          </p>
          <p>
            The Services may be accessed from countries other than India. If you access the Services
            from outside India, you are responsible for complying with the laws that apply to you.
            Nothing in these Terms limits any mandatory rights you may have under the consumer laws
            of your country of residence.
          </p>
        </PolicySection>

        <PolicySection title="19. Contact Information and Grievances">
          <p>
            Shadow Studio Labs is a sole proprietorship based in India. For questions about these
            Terms, support with an application, privacy questions, purchase-related help or
            grievances, you can contact us at:
          </p>
          <p>
            <a href="mailto:shadowstudiolabs@gmail.com" className={linkClasses}>
              shadowstudiolabs@gmail.com
            </a>
          </p>
          <p>
            If you are raising a grievance, please use the email address above and include
            &quot;Grievance&quot; in the subject line. Please include enough information for us to
            understand the issue — for example, the application name and version, your device and
            Android version, a description of what happened, and any relevant order or purchase
            reference. Please do not send payment card details or other sensitive information by
            email.
          </p>
          <p>
            We will review and respond to messages within a reasonable period. If a dedicated
            grievance officer or a specific statutory response period is required for a service we
            operate under applicable Indian law, we will publish those details on this page. Nothing
            in this section prevents you from approaching a consumer forum, regulator or other
            competent authority.
          </p>
          <p>
            For refunds, cancellations and billing disputes relating to Google Play purchases,
            please contact Google Play support as described in the Refunds and Cancellation section,
            because Google controls the payment and billing record.
          </p>
        </PolicySection>
      </PolicyLayout>
    </>
  )
}
