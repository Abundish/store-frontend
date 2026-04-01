export default function PrivacyPolicyPage() {
    return (
        <div className="bg-[#F9F6EE] min-h-screen">

            {/* Header */}
            <section className="max-w-[800px] mx-auto px-6 pt-16 pb-10 lg:pt-24">
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-px bg-[#FFCC00]" />
                        <p className="font-dm-mono text-[#008528] text-[11px] uppercase tracking-[0.16em]">
                            Legal
                        </p>
                    </div>
                    <h1 className="font-fraunces text-[#006b2f] text-[44px] sm:text-[52px] leading-[1.05]">
                        Privacy Policy
                    </h1>
                    <p className="font-dm-mono text-[#7A9B7A] text-[12px] uppercase tracking-[0.12em]">
                        Last updated April 01, 2026
                    </p>
                </div>
            </section>

            {/* Divider */}
            <div className="max-w-[800px] mx-auto px-6">
                <div className="w-full h-px bg-[#D8E8D0]" />
            </div>

            {/* Content */}
            <section className="max-w-[800px] mx-auto px-6 py-12 pb-24">
                <div className="flex flex-col gap-10 font-dm-sans text-[#3D5A3D] text-[15px] leading-[1.8]">

                    {/* Intro */}
                    <div className="flex flex-col gap-4">
                        <p>
                            This Privacy Notice for <strong>Abundish Limited</strong> (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
                            &ldquo;our&rdquo;) describes how and why we might access, collect, store, use, and/or
                            share (&ldquo;process&rdquo;) your personal information when you use our services
                            (&ldquo;Services&rdquo;), including when you:
                        </p>
                        <ul className="list-disc list-outside ml-5 flex flex-col gap-2">
                            <li>
                                Visit our website at{" "}
                                <a
                                    href="https://abundish.info"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#006b2f] underline underline-offset-2"
                                >
                                    https://abundish.info
                                </a>{" "}
                                or any website of ours that links to this Privacy Notice
                            </li>
                            <li>
                                Use <strong>Farm to Table</strong>. Abundish is a grocery delivery platform that
                                connects customers directly with local farmers for fresh, traceable produce,
                                stored at our facility and delivered to your door.
                            </li>
                            <li>
                                Engage with us in other related ways, including any marketing or events
                            </li>
                        </ul>
                        <p>
                            <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you
                            understand your privacy rights and choices. We are responsible for making decisions
                            about how your personal information is processed. If you do not agree with our
                            policies and practices, please do not use our Services. If you still have any
                            questions or concerns, please contact us at{" "}
                            <a
                                href="mailto:abundishappstores@gmail.com"
                                className="text-[#006b2f] underline underline-offset-2"
                            >
                                abundishappstores@gmail.com
                            </a>
                            .
                        </p>
                    </div>

                    <Divider />

                    {/* Summary */}
                    <div className="flex flex-col gap-4">
                        <SectionHeading>Summary of Key Points</SectionHeading>
                        <p className="italic">
                            This summary provides key points from our Privacy Notice. You can find more
                            details about any of these topics in the table of contents below.
                        </p>
                        <ul className="list-disc list-outside ml-5 flex flex-col gap-3">
                            <li>
                                <strong>What personal information do we process?</strong> When you visit, use,
                                or navigate our Services, we may process personal information depending on how
                                you interact with us and the choices you make.
                            </li>
                            <li>
                                <strong>Do we process any sensitive personal information?</strong> We do not
                                process sensitive personal information.
                            </li>
                            <li>
                                <strong>Do we collect any information from third parties?</strong> We do not
                                collect any information from third parties.
                            </li>
                            <li>
                                <strong>How do we process your information?</strong> We process your information
                                to provide, improve, and administer our Services, communicate with you, for
                                security and fraud prevention, and to comply with law.
                            </li>
                            <li>
                                <strong>How do we keep your information safe?</strong> We have adequate
                                organisational and technical processes and procedures in place to protect your
                                personal information. However, no electronic transmission over the internet can
                                be guaranteed to be 100% secure.
                            </li>
                            <li>
                                <strong>What are your rights?</strong> Depending on where you are located, the
                                applicable privacy law may mean you have certain rights regarding your personal
                                information.
                            </li>
                            <li>
                                <strong>How do you exercise your rights?</strong> The easiest way is by
                                submitting a{" "}
                                <a
                                    href="https://app.termly.io/dsar/24d52b0a-f41d-44ea-bf39-cf753fbfd4fd"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#006b2f] underline underline-offset-2"
                                >
                                    data subject access request
                                </a>
                                , or by contacting us directly.
                            </li>
                        </ul>
                    </div>

                    <Divider />

                    {/* TOC */}
                    <div className="flex flex-col gap-4">
                        <SectionHeading>Table of Contents</SectionHeading>
                        <ol className="list-decimal list-outside ml-5 flex flex-col gap-2 font-dm-mono text-[13px] text-[#006b2f] uppercase tracking-[0.08em]">
                            {[
                                ["#infocollect", "What information do we collect?"],
                                ["#infouse", "How do we process your information?"],
                                ["#whoshare", "When and with whom do we share your personal information?"],
                                ["#cookies", "Do we use cookies and other tracking technologies?"],
                                ["#ai", "Do we offer artificial intelligence-based products?"],
                                ["#sociallogins", "How do we handle your social logins?"],
                                ["#inforetain", "How long do we keep your information?"],
                                ["#infosafe", "How do we keep your information safe?"],
                                ["#infominors", "Do we collect information from minors?"],
                                ["#privacyrights", "What are your privacy rights?"],
                                ["#DNT", "Controls for do-not-track features"],
                                ["#policyupdates", "Do we make updates to this notice?"],
                                ["#contact", "How can you contact us about this notice?"],
                                ["#request", "How can you review, update, or delete the data we collect from you?"],
                            ].map(([href, label], i) => (
                                <li key={href}>
                                    <a href={href} className="hover:text-[#0D3D20] transition-colors">
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </div>

                    <Divider />

                    {/* Section 1 */}
                    <div id="infocollect" className="flex flex-col gap-6">
                        <SectionHeading number="1.">What Information Do We Collect?</SectionHeading>

                        <div className="flex flex-col gap-3">
                            <SubHeading>Personal information you disclose to us</SubHeading>
                            <p><em>We collect personal information that you provide to us.</em></p>
                            <p>
                                We collect personal information that you voluntarily provide to us when you
                                register on the Services, express an interest in obtaining information about us
                                or our products and Services, when you participate in activities on the
                                Services, or otherwise when you contact us.
                            </p>
                            <p>The personal information we collect may include:</p>
                            <ul className="list-disc list-outside ml-5 flex flex-col gap-1">
                                {["Names", "Phone numbers", "Email addresses", "Mailing addresses", "Passwords"].map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                            <p>
                                <strong>Sensitive Information.</strong> We do not process sensitive information.
                            </p>
                            <p>
                                <strong>Payment Data.</strong> We may collect data necessary to process your
                                payment if you choose to make purchases, such as your payment instrument number
                                and the security code associated with your payment instrument. All payment data
                                is handled and stored by{" "}
                                <strong>Paystack</strong>. You may find their privacy notice at{" "}
                                <a
                                    href="https://paystack.com/privacy/merchant"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#006b2f] underline underline-offset-2"
                                >
                                    https://paystack.com/privacy/merchant
                                </a>
                                .
                            </p>
                            <p>
                                <strong>Social Media Login Data.</strong> We may provide you with the option to
                                register with us using your existing social media account details, like your
                                Facebook, X, or other social media account. If you choose to register this way,
                                we will collect certain profile information about you from the social media
                                provider.
                            </p>
                            <p>
                                All personal information that you provide to us must be true, complete, and
                                accurate, and you must notify us of any changes to such personal information.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3">
                            <SubHeading>Information automatically collected</SubHeading>
                            <p>
                                <em>
                                    Some information &mdash; such as your Internet Protocol (IP) address and/or
                                    browser and device characteristics &mdash; is collected automatically when
                                    you visit our Services.
                                </em>
                            </p>
                            <p>
                                We automatically collect certain information when you visit, use, or navigate
                                the Services. This information does not reveal your specific identity but may
                                include device and usage information, such as your IP address, browser and
                                device characteristics, operating system, language preferences, referring URLs,
                                device name, country, location, information about how and when you use our
                                Services, and other technical information.
                            </p>
                            <p>
                                Like many businesses, we also collect information through cookies and similar
                                technologies. The information we collects includes:
                            </p>
                            <ul className="list-disc list-outside ml-5 flex flex-col gap-2">
                                <li>
                                    <strong>Log and Usage Data.</strong> Service-related, diagnostic, usage, and
                                    performance information our servers automatically collect when you access or
                                    use our Services.
                                </li>
                                <li>
                                    <strong>Device Data.</strong> Information about your computer, phone, tablet,
                                    or other device you use to access the Services.
                                </li>
                                <li>
                                    <strong>Location Data.</strong> Information about your device&apos;s location,
                                    which can be either precise or imprecise.
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-3">
                            <SubHeading>Google API</SubHeading>
                            <p>
                                Our use of information received from Google APIs will adhere to the{" "}
                                <a
                                    href="https://developers.google.com/terms/api-services-user-data-policy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#006b2f] underline underline-offset-2"
                                >
                                    Google API Services User Data Policy
                                </a>
                                , including the{" "}
                                <a
                                    href="https://developers.google.com/terms/api-services-user-data-policy#limited-use"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#006b2f] underline underline-offset-2"
                                >
                                    Limited Use requirements
                                </a>
                                .
                            </p>
                        </div>
                    </div>

                    <Divider />

                    {/* Section 2 */}
                    <div id="infouse" className="flex flex-col gap-4">
                        <SectionHeading number="2.">How Do We Process Your Information?</SectionHeading>
                        <p>
                            <em>
                                We process your information to provide, improve, and administer our Services,
                                communicate with you, for security and fraud prevention, and to comply with law.
                                We may also process your information for other purposes with your consent.
                            </em>
                        </p>
                        <p>We process your personal information for a variety of reasons, including:</p>
                        <ul className="list-disc list-outside ml-5 flex flex-col gap-2">
                            {[
                                ["To facilitate account creation and authentication", "We may process your information so you can create and log in to your account."],
                                ["To deliver and facilitate delivery of services", "We may process your information to provide you with the requested service."],
                                ["To respond to user inquiries/offer support", "We may process your information to respond to your inquiries and solve any potential issues."],
                                ["To send administrative information to you", "We may process your information to send you details about our products and services, changes to our terms and policies."],
                                ["To fulfil and manage your orders", "We may process your information to fulfil and manage your orders, payments, returns, and exchanges."],
                                ["To request feedback", "We may process your information when necessary to request feedback and to contact you about your use of our Services."],
                                ["To send you marketing and promotional communications", "We may process your personal information for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out at any time."],
                                ["To deliver targeted advertising to you", "We may process your information to develop and display personalised content and advertising tailored to your interests."],
                                ["To administer prize draws and competitions", "We may process your information to administer prize draws and competitions."],
                                ["To evaluate and improve our Services", "We may process your information to identify usage trends, determine the effectiveness of our promotional campaigns, and to evaluate and improve our Services."],
                                ["To identify usage trends", "We may process information about how you use our Services to better understand how they are being used."],
                                ["To comply with our legal obligations", "We may process your information to comply with our legal obligations, respond to legal requests, and exercise, establish, or defend our legal rights."],
                            ].map(([title, body]) => (
                                <li key={title as string}>
                                    <strong>{title}.</strong> {body}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Divider />

                    {/* Section 3 */}
                    <div id="whoshare" className="flex flex-col gap-4">
                        <SectionHeading number="3.">When and With Whom Do We Share Your Personal Information?</SectionHeading>
                        <p>
                            <em>
                                We may share information in specific situations described in this section and/or
                                with the following categories of third parties.
                            </em>
                        </p>
                        <p>
                            <strong>Vendors, Consultants, and Other Third-Party Service Providers.</strong> We
                            may share your data with third-party vendors, service providers, contractors, or
                            agents who perform services for us or on our behalf. We have contracts in place
                            with our third parties designed to help safeguard your personal information.
                        </p>
                        <p>The categories of third parties we may share personal information with include:</p>
                        <ul className="list-disc list-outside ml-5 flex flex-col gap-1">
                            {[
                                "Ad Networks",
                                "Social Networks",
                                "Data Analytics Services",
                                "Order Fulfilment Service Providers",
                                "Payment Processors",
                                "Performance Monitoring Tools",
                                "Retargeting Platforms",
                                "Sales & Marketing Tools",
                                "User Account Registration & Authentication Services",
                            ].map((item) => <li key={item}>{item}</li>)}
                        </ul>
                        <p>We may also need to share your personal information in the following situations:</p>
                        <ul className="list-disc list-outside ml-5 flex flex-col gap-2">
                            <li>
                                <strong>Business Transfers.</strong> We may share or transfer your information
                                in connection with, or during negotiations of, any merger, sale of company
                                assets, financing, or acquisition of all or a portion of our business.
                            </li>
                            <li>
                                <strong>When we use Google Maps Platform APIs.</strong> We may share your
                                information with certain Google Maps Platform APIs. Google Maps uses GPS, Wi-Fi,
                                and cell towers to estimate your location. We obtain and store on your device
                                your location. You may revoke your consent anytime by contacting us.
                            </li>
                        </ul>
                    </div>

                    <Divider />

                    {/* Section 4 */}
                    <div id="cookies" className="flex flex-col gap-4">
                        <SectionHeading number="4.">Do We Use Cookies and Other Tracking Technologies?</SectionHeading>
                        <p>
                            <em>We may use cookies and other tracking technologies to collect and store your information.</em>
                        </p>
                        <p>
                            We may use cookies and similar tracking technologies (like web beacons and pixels)
                            to gather information when you interact with our Services. Some online tracking
                            technologies help us maintain the security of our Services and your account,
                            prevent crashes, fix bugs, save your preferences, and assist with basic site
                            functions.
                        </p>
                        <p>
                            We also permit third parties and service providers to use online tracking
                            technologies on our Services for analytics and advertising, including to help
                            manage and display advertisements, to tailor advertisements to your interests, or
                            to send abandoned shopping cart reminders. Specific information about how we use
                            such technologies and how you can refuse certain cookies is set out in our Cookie
                            Notice.
                        </p>
                        <div className="flex flex-col gap-2">
                            <SubHeading>Google Analytics</SubHeading>
                            <p>
                                We may share your information with Google Analytics to track and analyse the use
                                of the Services. The Google Analytics Advertising Features we may use include
                                Remarketing with Google Analytics and Google Analytics Demographics and Interests
                                Reporting. To opt out of being tracked by Google Analytics across the Services,
                                visit{" "}
                                <a
                                    href="https://tools.google.com/dlpage/gaoptout"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#006b2f] underline underline-offset-2"
                                >
                                    https://tools.google.com/dlpage/gaoptout
                                </a>
                                . For more information on the privacy practices of Google, please visit the{" "}
                                <a
                                    href="https://policies.google.com/privacy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#006b2f] underline underline-offset-2"
                                >
                                    Google Privacy &amp; Terms page
                                </a>
                                .
                            </p>
                        </div>
                    </div>

                    <Divider />

                    {/* Section 5 */}
                    <div id="ai" className="flex flex-col gap-4">
                        <SectionHeading number="5.">Do We Offer Artificial Intelligence-Based Products?</SectionHeading>
                        <p>
                            <em>We offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies.</em>
                        </p>
                        <p>
                            As part of our Services, we offer products, features, or tools powered by
                            artificial intelligence, machine learning, or similar technologies (collectively,
                            &ldquo;AI Products&rdquo;). These tools are designed to enhance your experience
                            and provide you with innovative solutions. The terms in this Privacy Notice govern
                            your use of the AI Products within our Services.
                        </p>
                        <p>
                            We provide the AI Products through third-party service providers (&ldquo;AI
                            Service Providers&rdquo;), including <strong>OpenAI</strong>. Your input, output,
                            and personal information will be shared with and processed by these AI Service
                            Providers to enable your use of our AI Products. You must not use the AI Products
                            in any way that violates the terms or policies of any AI Service Provider.
                        </p>
                        <p>
                            Our AI Products are designed for the following functions:{" "}
                            <strong>AI bots</strong>.
                        </p>
                        <p>
                            All personal information processed using our AI Products is handled in line with
                            our Privacy Notice and our agreement with third parties, ensuring high security and
                            safeguards for your personal information throughout the process.
                        </p>
                    </div>

                    <Divider />

                    {/* Section 6 */}
                    <div id="sociallogins" className="flex flex-col gap-4">
                        <SectionHeading number="6.">How Do We Handle Your Social Logins?</SectionHeading>
                        <p>
                            <em>If you choose to register or log in to our Services using a social media account, we may have access to certain information about you.</em>
                        </p>
                        <p>
                            Our Services offer you the ability to register and log in using your third-party
                            social media account details (like your Facebook or X logins). Where you choose to
                            do this, we will receive certain profile information about you from your social
                            media provider. The profile information we receive may vary depending on the social
                            media provider concerned, but will often include your name, email address, friends
                            list, and profile picture, as well as other information you choose to make public.
                        </p>
                        <p>
                            We will use the information we receive only for the purposes described in this
                            Privacy Notice. Please note that we do not control, and are not responsible for,
                            other uses of your personal information by your third-party social media provider.
                            We recommend that you review their privacy notice to understand how they collect,
                            use, and share your personal information.
                        </p>
                    </div>

                    <Divider />

                    {/* Section 7 */}
                    <div id="inforetain" className="flex flex-col gap-4">
                        <SectionHeading number="7.">How Long Do We Keep Your Information?</SectionHeading>
                        <p>
                            <em>We keep your information for as long as necessary to fulfil the purposes outlined in this Privacy Notice unless otherwise required by law.</em>
                        </p>
                        <p>
                            We will only keep your personal information for as long as it is necessary for the
                            purposes set out in this Privacy Notice, unless a longer retention period is
                            required or permitted by law (such as tax, accounting, or other legal
                            requirements). No purpose in this notice will require us keeping your personal
                            information for longer than the period of time in which users have an account with
                            us.
                        </p>
                        <p>
                            When we have no ongoing legitimate business need to process your personal
                            information, we will either delete or anonymise such information, or, if this is
                            not possible, we will securely store your personal information and isolate it from
                            any further processing until deletion is possible.
                        </p>
                    </div>

                    <Divider />

                    {/* Section 8 */}
                    <div id="infosafe" className="flex flex-col gap-4">
                        <SectionHeading number="8.">How Do We Keep Your Information Safe?</SectionHeading>
                        <p>
                            <em>We aim to protect your personal information through a system of organisational and technical security measures.</em>
                        </p>
                        <p>
                            We have implemented appropriate and reasonable technical and organisational
                            security measures designed to protect the security of any personal information we
                            process. However, despite our safeguards and efforts to secure your information,
                            no electronic transmission over the Internet or information storage technology can
                            be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers,
                            cybercriminals, or other unauthorised third parties will not be able to defeat our
                            security and improperly collect, access, steal, or modify your information.
                            Although we will do our best to protect your personal information, transmission of
                            personal information to and from our Services is at your own risk. You should only
                            access the Services within a secure environment.
                        </p>
                    </div>

                    <Divider />

                    {/* Section 9 */}
                    <div id="infominors" className="flex flex-col gap-4">
                        <SectionHeading number="9.">Do We Collect Information From Minors?</SectionHeading>
                        <p>
                            <em>We do not knowingly collect data from or market to children under 18 years of age.</em>
                        </p>
                        <p>
                            We do not knowingly collect, solicit data from, or market to children under 18
                            years of age, nor do we knowingly sell such personal information. By using the
                            Services, you represent that you are at least 18, or that you are the parent or
                            guardian of such a minor and consent to such minor dependent&apos;s use of the
                            Services. If we learn that personal information from users less than 18 years of
                            age has been collected, we will deactivate the account and take reasonable measures
                            to promptly delete such data from our records. If you become aware of any data we
                            may have collected from children under age 18, please contact us at{" "}
                            <a
                                href="mailto:abundishappstores@gmail.com"
                                className="text-[#006b2f] underline underline-offset-2"
                            >
                                abundishappstores@gmail.com
                            </a>
                            .
                        </p>
                    </div>

                    <Divider />

                    {/* Section 10 */}
                    <div id="privacyrights" className="flex flex-col gap-4">
                        <SectionHeading number="10.">What Are Your Privacy Rights?</SectionHeading>
                        <p>
                            <em>You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.</em>
                        </p>
                        <p>
                            <strong>Withdrawing your consent:</strong> If we are relying on your consent to
                            process your personal information, you have the right to withdraw your consent at
                            any time by contacting us using the contact details provided in section 13 below.
                            Please note that this will not affect the lawfulness of the processing before its
                            withdrawal.
                        </p>
                        <p>
                            <strong>Opting out of marketing and promotional communications:</strong> You can
                            unsubscribe from our marketing and promotional communications at any time by
                            clicking on the unsubscribe link in the emails that we send, or by contacting us
                            using the details provided in section 13. You will then be removed from the
                            marketing lists. However, we may still communicate with you to send you
                            service-related messages that are necessary for the administration and use of your
                            account.
                        </p>
                        <div className="flex flex-col gap-2">
                            <SubHeading>Account Information</SubHeading>
                            <p>
                                If you would at any time like to review or change the information in your account
                                or terminate your account, you can contact us using the contact information
                                provided. Upon your request to terminate your account, we will deactivate or
                                delete your account and information from our active databases. However, we may
                                retain some information in our files to prevent fraud, troubleshoot problems,
                                assist with any investigations, enforce our legal terms and/or comply with
                                applicable legal requirements.
                            </p>
                            <p>
                                <strong>Cookies and similar technologies:</strong> Most web browsers are set to
                                accept cookies by default. If you prefer, you can usually choose to set your
                                browser to remove cookies and to reject cookies. If you choose to remove or
                                reject cookies, this could affect certain features or services of our Services.
                            </p>
                            <p>
                                If you have questions or comments about your privacy rights, you may email us at{" "}
                                <a
                                    href="mailto:abundishappstores@gmail.com"
                                    className="text-[#006b2f] underline underline-offset-2"
                                >
                                    abundishappstores@gmail.com
                                </a>
                                .
                            </p>
                        </div>
                    </div>

                    <Divider />

                    {/* Section 11 */}
                    <div id="DNT" className="flex flex-col gap-4">
                        <SectionHeading number="11.">Controls for Do-Not-Track Features</SectionHeading>
                        <p>
                            Most web browsers and some mobile operating systems and mobile applications include
                            a Do-Not-Track (&ldquo;DNT&rdquo;) feature or setting you can activate to signal
                            your privacy preference not to have data about your online browsing activities
                            monitored and collected. At this stage, no uniform technology standard for
                            recognising and implementing DNT signals has been finalised. As such, we do not
                            currently respond to DNT browser signals or any other mechanism that automatically
                            communicates your choice not to be tracked online. If a standard for online
                            tracking is adopted that we must follow in the future, we will inform you about
                            that practice in a revised version of this Privacy Notice.
                        </p>
                    </div>

                    <Divider />

                    {/* Section 12 */}
                    <div id="policyupdates" className="flex flex-col gap-4">
                        <SectionHeading number="12.">Do We Make Updates to This Notice?</SectionHeading>
                        <p>
                            <em>Yes, we will update this notice as necessary to stay compliant with relevant laws.</em>
                        </p>
                        <p>
                            We may update this Privacy Notice from time to time. The updated version will be
                            indicated by an updated &ldquo;Revised&rdquo; date at the top of this Privacy
                            Notice. If we make material changes to this Privacy Notice, we may notify you
                            either by prominently posting a notice of such changes or by directly sending you
                            a notification. We encourage you to review this Privacy Notice frequently to be
                            informed of how we are protecting your information.
                        </p>
                    </div>

                    <Divider />

                    {/* Section 13 */}
                    <div id="contact" className="flex flex-col gap-4">
                        <SectionHeading number="13.">How Can You Contact Us About This Notice?</SectionHeading>
                        <p>
                            If you have questions or comments about this notice, you may email us at{" "}
                            <a
                                href="mailto:abundishappstores@gmail.com"
                                className="text-[#006b2f] underline underline-offset-2"
                            >
                                abundishappstores@gmail.com
                            </a>{" "}
                            or contact us by post at:
                        </p>
                        <div className="bg-[#EEF3EC] border border-[#C8DEC2] rounded-[14px] px-6 py-5 flex flex-col gap-1 font-dm-mono text-[13px] text-[#3D5A3D]">
                            <p className="font-semibold">Abundish Limited</p>
                            <p>15 Wole Olateju Crescent</p>
                            <p>Lagos, 106104</p>
                            <p>Nigeria</p>
                        </div>
                    </div>

                    <Divider />

                    {/* Section 14 */}
                    <div id="request" className="flex flex-col gap-4">
                        <SectionHeading number="14.">How Can You Review, Update, or Delete the Data We Collect From You?</SectionHeading>
                        <p>
                            Based on the applicable laws of your country, you may have the right to request
                            access to the personal information we collect from you, details about how we have
                            processed it, correct inaccuracies, or delete your personal information. You may
                            also have the right to withdraw your consent to our processing of your personal
                            information. These rights may be limited in some circumstances by applicable law.
                            To request to review, update, or delete your personal information, please fill out
                            and submit a{" "}
                            <a
                                href="https://app.termly.io/dsar/24d52b0a-f41d-44ea-bf39-cf753fbfd4fd"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#006b2f] underline underline-offset-2"
                            >
                                data subject access request
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

function SectionHeading({
    children,
    number,
}: {
    children: React.ReactNode
    number?: string
}) {
    return (
        <h2 className="font-fraunces text-[#006b2f] text-[24px] leading-snug flex items-baseline gap-2">
            {number && (
                <span className="font-dm-mono text-[#C8DEC2] text-[13px] shrink-0">{number}</span>
            )}
            {children}
        </h2>
    )
}

function SubHeading({ children }: { children: React.ReactNode }) {
    return (
        <h3 className="font-fraunces text-[#1A3B1A] text-[18px] leading-snug">{children}</h3>
    )
}

function Divider() {
    return <div className="w-full h-px bg-[#D8E8D0]" />
}