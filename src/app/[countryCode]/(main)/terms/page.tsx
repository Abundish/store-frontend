export default function TermsPage() {
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
                        Terms &amp; Conditions
                    </h1>
                    <p className="font-dm-mono text-[#7A9B7A] text-[12px] uppercase tracking-[0.12em]">
                        Last updated April 01, 2026
                    </p>
                </div>
            </section>

            <div className="max-w-[800px] mx-auto px-6">
                <div className="w-full h-px bg-[#D8E8D0]" />
            </div>

            {/* Content */}
            <section className="max-w-[800px] mx-auto px-6 py-12 pb-24">
                <div className="flex flex-col gap-10 font-dm-sans text-[#3D5A3D] text-[15px] leading-[1.8]">

                    {/* Agreement */}
                    <div className="flex flex-col gap-4">
                        <SectionHeading>Agreement to Our Legal Terms</SectionHeading>
                        <p>
                            We are <strong>Abundish</strong> (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;), a company registered in Nigeria at 15 Wole Olateju Crescent, Lagos 106104.
                        </p>
                        <p>
                            We operate the website{" "}
                            <a href="https://abundish.info" target="_blank" rel="noopener noreferrer" className="text-[#006b2f] underline underline-offset-2">
                                https://abundish.info
                            </a>{" "}
                            (the &ldquo;Site&rdquo;), as well as any other related products and services that refer or link to these legal terms (collectively, the &ldquo;Services&rdquo;).
                        </p>
                        <p>
                            You can contact us by phone at <strong>0912 746 7870</strong>, email at{" "}
                            <a href="mailto:abundishappstores@gmail.com" className="text-[#006b2f] underline underline-offset-2">
                                abundishappstores@gmail.com
                            </a>
                            , or by mail to 15 Wole Olateju Crescent, Lagos 106104, Nigeria.
                        </p>
                        <p>
                            These Legal Terms constitute a legally binding agreement made between you and Abundish, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms.{" "}
                            <strong>IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.</strong>
                        </p>
                        <p>
                            We reserve the right to make changes or modifications to these Legal Terms at any time and for any reason. We will alert you about any changes by updating the &ldquo;Last updated&rdquo; date of these Legal Terms. Your continued use of the Services after the date such revised Legal Terms are posted constitutes acceptance of those changes.
                        </p>
                        <p>
                            The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services.
                        </p>
                        <p>We recommend that you print a copy of these Legal Terms for your records.</p>
                    </div>

                    <Divider />

                    {/* TOC */}
                    <div className="flex flex-col gap-4">
                        <SectionHeading>Table of Contents</SectionHeading>
                        <ol className="list-decimal list-outside ml-5 flex flex-col gap-2 font-dm-mono text-[13px] text-[#006b2f] uppercase tracking-[0.08em]">
                            {[
                                ["#services", "Our Services"],
                                ["#ip", "Intellectual Property Rights"],
                                ["#userreps", "User Representations"],
                                ["#userreg", "User Registration"],
                                ["#products", "Products"],
                                ["#purchases", "Purchases and Payment"],
                                ["#subscriptions", "Subscriptions"],
                                ["#returnno", "Return Policy"],
                                ["#prohibited", "Prohibited Activities"],
                                ["#ugc", "User Generated Contributions"],
                                ["#license", "Contribution Licence"],
                                ["#sitemanage", "Services Management"],
                                ["#ppyes", "Privacy Policy"],
                                ["#terms", "Term and Termination"],
                                ["#modifications", "Modifications and Interruptions"],
                                ["#law", "Governing Law"],
                                ["#disputes", "Dispute Resolution"],
                                ["#corrections", "Corrections"],
                                ["#disclaimer", "Disclaimer"],
                                ["#liability", "Limitations of Liability"],
                                ["#indemnification", "Indemnification"],
                                ["#userdata", "User Data"],
                                ["#electronic", "Electronic Communications, Transactions, and Signatures"],
                                ["#misc", "Miscellaneous"],
                                ["#contact", "Contact Us"],
                            ].map(([href, label]) => (
                                <li key={href}>
                                    <a href={href} className="hover:text-[#0D3D20] transition-colors">{label}</a>
                                </li>
                            ))}
                        </ol>
                    </div>

                    <Divider />

                    {/* 1 */}
                    <div id="services" className="flex flex-col gap-4">
                        <SectionHeading number="1.">Our Services</SectionHeading>
                        <p>
                            The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
                        </p>
                    </div>

                    <Divider />

                    {/* 2 */}
                    <div id="ip" className="flex flex-col gap-5">
                        <SectionHeading number="2.">Intellectual Property Rights</SectionHeading>
                        <div className="flex flex-col gap-3">
                            <SubHeading>Our intellectual property</SubHeading>
                            <p>
                                We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the &ldquo;Content&rdquo;), as well as the trademarks, service marks, and logos contained therein (the &ldquo;Marks&rdquo;).
                            </p>
                            <p>
                                Our Content and Marks are protected by copyright and trademark laws and treaties around the world. The Content and Marks are provided in or through the Services &ldquo;AS IS&rdquo; for your personal, non-commercial use or internal business purpose only.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <SubHeading>Your use of our Services</SubHeading>
                            <p>
                                Subject to your compliance with these Legal Terms, we grant you a non-exclusive, non-transferable, revocable licence to access the Services and download or print a copy of any portion of the Content to which you have properly gained access, solely for your personal, non-commercial use or internal business purpose.
                            </p>
                            <p>
                                Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
                            </p>
                            <p>
                                If you wish to make any use of the Services, Content, or Marks other than as set out in this section, please address your request to:{" "}
                                <a href="mailto:abundishappstores@gmail.com" className="text-[#006b2f] underline underline-offset-2">abundishappstores@gmail.com</a>.
                            </p>
                            <p>
                                We reserve all rights not expressly granted to you in and to the Services, Content, and Marks. Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <SubHeading>Your submissions</SubHeading>
                            <p>
                                <strong>Submissions:</strong> By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services (&ldquo;Submissions&rdquo;), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.
                            </p>
                            <p>
                                <strong>You are responsible for what you post or upload.</strong> By sending us Submissions through any part of the Services you confirm that you have read and agree with our Prohibited Activities section and will not post, send, publish, upload, or transmit through the Services any Submission that is illegal, harassing, hateful, harmful, defamatory, obscene, bullying, abusive, discriminatory, threatening, sexually explicit, false, inaccurate, deceitful, or misleading. You also warrant that any such Submission is original to you or that you have the necessary rights and licences to submit it.
                            </p>
                            <p>
                                You are solely responsible for your Submissions and you expressly agree to reimburse us for any and all losses that we may suffer because of your breach of this section, any third party&apos;s intellectual property rights, or applicable law.
                            </p>
                        </div>
                    </div>

                    <Divider />

                    {/* 3 */}
                    <div id="userreps" className="flex flex-col gap-4">
                        <SectionHeading number="3.">User Representations</SectionHeading>
                        <p>By using the Services, you represent and warrant that:</p>
                        <ol className="list-decimal list-outside ml-5 flex flex-col gap-2">
                            <li>All registration information you submit will be true, accurate, current, and complete.</li>
                            <li>You will maintain the accuracy of such information and promptly update it as necessary.</li>
                            <li>You have the legal capacity and you agree to comply with these Legal Terms.</li>
                            <li>You are not a minor in the jurisdiction in which you reside.</li>
                            <li>You will not access the Services through automated or non-human means, whether through a bot, script, or otherwise.</li>
                            <li>You will not use the Services for any illegal or unauthorised purpose.</li>
                            <li>Your use of the Services will not violate any applicable law or regulation.</li>
                        </ol>
                        <p>
                            If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).
                        </p>
                    </div>

                    <Divider />

                    {/* 4 */}
                    <div id="userreg" className="flex flex-col gap-4">
                        <SectionHeading number="4.">User Registration</SectionHeading>
                        <p>
                            You may be required to register to use the Services. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
                        </p>
                    </div>

                    <Divider />

                    {/* 5 */}
                    <div id="products" className="flex flex-col gap-4">
                        <SectionHeading number="5.">Products</SectionHeading>
                        <p>
                            We make every effort to display as accurately as possible the colours, features, specifications, and details of the products available on the Services. However, we do not guarantee that the colours, features, specifications, and details of the products will be accurate, complete, reliable, current, or free of other errors, and your electronic display may not accurately reflect the actual colours and details of the products.
                        </p>
                        <p>
                            All products are subject to availability, and we cannot guarantee that items will be in stock. We reserve the right to discontinue any products at any time for any reason. Prices for all products are subject to change.
                        </p>
                    </div>

                    <Divider />

                    {/* 6 */}
                    <div id="purchases" className="flex flex-col gap-4">
                        <SectionHeading number="6.">Purchases and Payment</SectionHeading>
                        <p>We accept the following forms of payment: Visa, Mastercard.</p>
                        <p>
                            You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. All payments shall be in <strong>Nigerian Naira</strong>.
                        </p>
                        <p>
                            You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you authorise us to charge your chosen payment provider for any such amounts upon placing your order. We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment.
                        </p>
                        <p>
                            We reserve the right to refuse any order placed through the Services. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order.
                        </p>
                    </div>

                    <Divider />

                    {/* 7 */}
                    <div id="subscriptions" className="flex flex-col gap-5">
                        <SectionHeading number="7.">Subscriptions</SectionHeading>
                        <div className="flex flex-col gap-3">
                            <SubHeading>Billing and Renewal</SubHeading>
                            <p>
                                Your subscription will continue and automatically renew unless cancelled. You consent to our charging your payment method on a recurring basis without requiring your prior approval for each recurring charge, until such time as you cancel the applicable order. The length of your billing cycle will depend on the type of subscription plan you choose when you subscribed to the Services.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <SubHeading>Cancellation</SubHeading>
                            <p>
                                You can cancel your subscription at any time by logging into your account. Your cancellation will take effect at the end of the current paid term. If you have any questions or are unsatisfied with our Services, please email us at{" "}
                                <a href="mailto:abundishappstores@gmail.com" className="text-[#006b2f] underline underline-offset-2">abundishappstores@gmail.com</a>.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <SubHeading>Fee Changes</SubHeading>
                            <p>
                                We may, from time to time, make changes to the subscription fee and will communicate any price changes to you in accordance with applicable law.
                            </p>
                        </div>
                    </div>

                    <Divider />

                    {/* 8 */}
                    <div id="returnno" className="flex flex-col gap-4">
                        <SectionHeading number="8.">Return Policy</SectionHeading>
                        <p>All sales are final and no refund will be issued.</p>
                    </div>

                    <Divider />

                    {/* 9 */}
                    <div id="prohibited" className="flex flex-col gap-4">
                        <SectionHeading number="9.">Prohibited Activities</SectionHeading>
                        <p>
                            You may not access or use the Services for any purpose other than that for which we make the Services available. As a user of the Services, you agree not to:
                        </p>
                        <ul className="list-disc list-outside ml-5 flex flex-col gap-2">
                            {[
                                "Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.",
                                "Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.",
                                "Circumvent, disable, or otherwise interfere with security-related features of the Services.",
                                "Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.",
                                "Use any information obtained from the Services in order to harass, abuse, or harm another person.",
                                "Make improper use of our support services or submit false reports of abuse or misconduct.",
                                "Use the Services in a manner inconsistent with any applicable laws or regulations.",
                                "Engage in unauthorised framing of or linking to the Services.",
                                "Upload or transmit viruses, Trojan horses, or other material that interferes with any party's uninterrupted use and enjoyment of the Services.",
                                "Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.",
                                "Delete the copyright or other proprietary rights notice from any Content.",
                                "Attempt to impersonate another user or person or use the username of another user.",
                                "Upload or transmit any material that acts as a passive or active information collection or transmission mechanism, including spyware or passive collection mechanisms.",
                                "Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.",
                                "Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.",
                                "Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.",
                                "Copy or adapt the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.",
                                "Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.",
                                "Use a buying agent or purchasing agent to make purchases on the Services.",
                                "Make any unauthorised use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email.",
                                "Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavour or commercial enterprise.",
                                "Use the Services to advertise or offer to sell goods and services.",
                                "Sell or otherwise transfer your profile.",
                            ].map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </div>

                    <Divider />

                    {/* 10 */}
                    <div id="ugc" className="flex flex-col gap-4">
                        <SectionHeading number="10.">User Generated Contributions</SectionHeading>
                        <p>
                            The Services does not offer users to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, &ldquo;Contributions&rdquo;).
                        </p>
                        <p>When you create or make available any Contributions, you thereby represent and warrant that:</p>
                        <ul className="list-disc list-outside ml-5 flex flex-col gap-2">
                            {[
                                "The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.",
                                "You are the creator and owner of or have the necessary licences, rights, consents, releases, and permissions to use and to authorise us, the Services, and other users of the Services to use your Contributions.",
                                "You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person.",
                                "Your Contributions are not false, inaccurate, or misleading.",
                                "Your Contributions are not unsolicited or unauthorised advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.",
                                "Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libellous, slanderous, or otherwise objectionable.",
                                "Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.",
                                "Your Contributions are not used to harass or threaten any other person and to promote violence against a specific person or class of people.",
                                "Your Contributions do not violate any applicable law, regulation, or rule.",
                                "Your Contributions do not violate the privacy or publicity rights of any third party.",
                                "Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.",
                                "Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.",
                                "Your Contributions do not otherwise violate, or link to material that violates, any provision of these Legal Terms, or any applicable law or regulation.",
                            ].map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                        <p>
                            Any use of the Services in violation of the foregoing violates these Legal Terms and may result in, among other things, termination or suspension of your rights to use the Services.
                        </p>
                    </div>

                    <Divider />

                    {/* 11 */}
                    <div id="license" className="flex flex-col gap-4">
                        <SectionHeading number="11.">Contribution Licence</SectionHeading>
                        <p>
                            You and Services agree that we may access, store, process, and use any information and personal data that you provide following the terms of the Privacy Policy and your choices (including settings).
                        </p>
                        <p>
                            By submitting suggestions or other feedback regarding the Services, you agree that we can use and share such feedback for any purpose without compensation to you.
                        </p>
                        <p>
                            We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Services. You are solely responsible for your Contributions to the Services and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.
                        </p>
                    </div>

                    <Divider />

                    {/* 12 */}
                    <div id="sitemanage" className="flex flex-col gap-4">
                        <SectionHeading number="12.">Services Management</SectionHeading>
                        <p>
                            We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.
                        </p>
                    </div>

                    <Divider />

                    {/* 13 */}
                    <div id="ppyes" className="flex flex-col gap-4">
                        <SectionHeading number="13.">Privacy Policy</SectionHeading>
                        <p>
                            We care about data privacy and security. Please review our Privacy Policy:{" "}
                            <a href="https://abundish.info/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#006b2f] underline underline-offset-2">
                                https://abundish.info/privacy-policy
                            </a>
                            . By using the Services, you agree to be bound by our Privacy Policy, which is incorporated into these Legal Terms.
                        </p>
                    </div>

                    <Divider />

                    {/* 14 */}
                    <div id="terms" className="flex flex-col gap-4">
                        <SectionHeading number="14.">Term and Termination</SectionHeading>
                        <p>
                            These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
                        </p>
                        <p>
                            If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.
                        </p>
                    </div>

                    <Divider />

                    {/* 15 */}
                    <div id="modifications" className="flex flex-col gap-4">
                        <SectionHeading number="15.">Modifications and Interruptions</SectionHeading>
                        <p>
                            We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. We also reserve the right to modify or discontinue all or part of the Services without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.
                        </p>
                        <p>
                            We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services.
                        </p>
                    </div>

                    <Divider />

                    {/* 16 */}
                    <div id="law" className="flex flex-col gap-4">
                        <SectionHeading number="16.">Governing Law</SectionHeading>
                        <p>
                            These Legal Terms shall be governed by and defined following the laws of <strong>Nigeria</strong>. Abundish and yourself irrevocably consent that the courts of Nigeria shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these Legal Terms.
                        </p>
                    </div>

                    <Divider />

                    {/* 17 */}
                    <div id="disputes" className="flex flex-col gap-5">
                        <SectionHeading number="17.">Dispute Resolution</SectionHeading>
                        <div className="flex flex-col gap-3">
                            <SubHeading>Informal Negotiations</SubHeading>
                            <p>
                                To expedite resolution and control the cost of any dispute, controversy, or claim related to these Legal Terms (each a &ldquo;Dispute&rdquo;), the Parties agree to first attempt to negotiate any Dispute informally for at least thirty (30) days before initiating arbitration. Such informal negotiations commence upon written notice from one Party to the other Party.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <SubHeading>Binding Arbitration</SubHeading>
                            <p>
                                Any dispute arising out of or in connection with these Legal Terms, including any question regarding its existence, validity, or termination, shall be referred to and finally resolved by the International Commercial Arbitration Court under the European Arbitration Chamber (Belgium, Brussels, Avenue Louise, 146) according to the Rules of this ICAC. The seat of arbitration shall be Nigeria. The governing law of these Legal Terms shall be the substantive law of Nigeria.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <SubHeading>Restrictions</SubHeading>
                            <p>
                                The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law: (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis; and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <SubHeading>Exceptions to Informal Negotiations and Arbitration</SubHeading>
                            <p>
                                The Parties agree that the following Disputes are not subject to the above provisions: (a) any Disputes seeking to enforce or protect, or concerning the validity of, any of the intellectual property rights of a Party; (b) any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or unauthorised use; and (c) any claim for injunctive relief.
                            </p>
                        </div>
                    </div>

                    <Divider />

                    {/* 18 */}
                    <div id="corrections" className="flex flex-col gap-4">
                        <SectionHeading number="18.">Corrections</SectionHeading>
                        <p>
                            There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.
                        </p>
                    </div>

                    <Divider />

                    {/* 19 */}
                    <div id="disclaimer" className="flex flex-col gap-4">
                        <SectionHeading number="19.">Disclaimer</SectionHeading>
                        <p className="uppercase text-[13px] leading-[1.7]">
                            THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES&apos; CONTENT AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, PERSONAL INJURY OR PROPERTY DAMAGE, UNAUTHORISED ACCESS TO OR USE OF OUR SECURE SERVERS, ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, OR ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY.
                        </p>
                    </div>

                    <Divider />

                    {/* 20 */}
                    <div id="liability" className="flex flex-col gap-4">
                        <SectionHeading number="20.">Limitations of Liability</SectionHeading>
                        <p className="uppercase text-[13px] leading-[1.7]">
                            IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE THREE (3) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING. CERTAIN LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
                        </p>
                    </div>

                    <Divider />

                    {/* 21 */}
                    <div id="indemnification" className="flex flex-col gap-4">
                        <SectionHeading number="21.">Indemnification</SectionHeading>
                        <p>
                            You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys&apos; fees and expenses, made by any third party due to or arising out of: (1) use of the Services; (2) breach of these Legal Terms; (3) any breach of your representations and warranties set forth in these Legal Terms; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Services with whom you connected via the Services.
                        </p>
                    </div>

                    <Divider />

                    {/* 22 */}
                    <div id="userdata" className="flex flex-col gap-4">
                        <SectionHeading number="22.">User Data</SectionHeading>
                        <p>
                            We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.
                        </p>
                    </div>

                    <Divider />

                    {/* 23 */}
                    <div id="electronic" className="flex flex-col gap-4">
                        <SectionHeading number="23.">Electronic Communications, Transactions, and Signatures</SectionHeading>
                        <p>
                            Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES.
                        </p>
                    </div>

                    <Divider />

                    {/* 24 */}
                    <div id="misc" className="flex flex-col gap-4">
                        <SectionHeading number="24.">Miscellaneous</SectionHeading>
                        <p>
                            These Legal Terms and any policies or operating rules posted by us on the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control.
                        </p>
                        <p>
                            If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the Services.
                        </p>
                    </div>

                    <Divider />

                    {/* 25 */}
                    <div id="contact" className="flex flex-col gap-4">
                        <SectionHeading number="25.">Contact Us</SectionHeading>
                        <p>
                            In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:
                        </p>
                        <div className="bg-[#EEF3EC] border border-[#C8DEC2] rounded-[14px] px-6 py-5 flex flex-col gap-1 font-dm-mono text-[13px] text-[#3D5A3D]">
                            <p className="font-semibold">Abundish</p>
                            <p>15 Wole Olateju Crescent</p>
                            <p>Lagos, 106104</p>
                            <p>Nigeria</p>
                            <p className="mt-2">Phone: 0912 746 7870</p>
                            <a href="mailto:abundishappstores@gmail.com" className="text-[#006b2f] underline underline-offset-2">
                                abundishappstores@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

function SectionHeading({ children, number }: { children: React.ReactNode; number?: string }) {
    return (
        <h2 className="font-fraunces text-[#006b2f] text-[24px] leading-snug flex items-baseline gap-2">
            {number && <span className="font-dm-mono text-[#C8DEC2] text-[13px] shrink-0">{number}</span>}
            {children}
        </h2>
    )
}

function SubHeading({ children }: { children: React.ReactNode }) {
    return <h3 className="font-fraunces text-[#1A3B1A] text-[18px] leading-snug">{children}</h3>
}

function Divider() {
    return <div className="w-full h-px bg-[#D8E8D0]" />
}