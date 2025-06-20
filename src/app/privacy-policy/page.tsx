"use client";

import React, { useEffect } from "react";

function PrivacyPolicyPage() {
  // Enable smooth scrolling
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  // Reusable style classes
  const styles = {
    container:
      "bg-white w-full px-4 sm:px-6 md:px-12 lg:px-24 py-8 md:py-12 lg:py-20 mx-auto",
    section: "flex flex-col gap-6 md:gap-8",
    heading1:
      "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-tomato leading-tight",
    heading2: "text-xl sm:text-2xl font-semibold font-tomato leading-relaxed",
    heading3: "text-base sm:text-lg font-semibold leading-relaxed",
    paragraph: "text-base sm:text-lg font-normal leading-relaxed",
    list: "list-disc list-inside space-y-1 text-base sm:text-lg font-normal leading-relaxed",
    link: "text-sky-600 hover:text-sky-700 transition-colors cursor-pointer",
    tableContainer: "w-full overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0",
  };

  // Function to scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Offset for better visibility
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Summary points data
  const summaryPoints = [
    {
      title: "What personal information do we process?",
      desc: (
        <>
          <span className="text-zinc-600">
            When you visit, use, or navigate our services, we may process
            personal information depending on how you interact with us and the
            services, the choices you make, and the products and features you
            use. Learn more about the
          </span>
          <span
            className={`${styles.link} hover:underline`}
            onClick={() => scrollToSection("section-1")}
          >
            {" "}
            personal information you disclose to us.
          </span>
        </>
      ),
    },
    {
      title: "Do we process any sensitive personal information?",
      desc: (
        <>
          <span className="text-zinc-600">
            We may process sensitive personal information when necessary with
            your consent or as otherwise permitted by applicable law. <br />
          </span>
          <span
            className={`${styles.link} hover:underline`}
            onClick={() => scrollToSection("section-1")}
          >
            Learn more about the sensitive information we process
          </span>
        </>
      ),
    },
    {
      title: "Do we collect any information from third parties?",
      desc: (
        <>
          <span>
            We may collect information from public databases, marketing
            partners, social media platforms, and other outside sources.{" "}
          </span>
          <span
            className={`${styles.link} hover:underline`}
            onClick={() => scrollToSection("section-1")}
          >
            Learn more about information collected from other sources.
          </span>
        </>
      ),
    },
    {
      title: "How do we process your information?",
      desc: (
        <>
          <span>
            We process your information to provide and improve our services,
            communicate with you, and protect against fraud, and to comply with
            the law. We may also process your information for other purposes
            with your consent. We process your information only when we have a
            valid legal reason to do so.{" "}
          </span>
          <span
            className={`${styles.link} hover:underline`}
            onClick={() => scrollToSection("section-2")}
          >
            Learn more about how we process your information
          </span>
        </>
      ),
    },
    {
      title:
        "In what situations and with which types of parties do we share personal information?",
      desc: (
        <>
          <span>
            We may share information in specific situations and with specific
            categories of third parties. <br />
          </span>
          <span
            className={`${styles.link} hover:underline`}
            onClick={() => scrollToSection("section-4")}
          >
            Learn more about when and with whom we share your personal
            information
          </span>
        </>
      ),
    },
    {
      title: "How do we keep your information safe?",
      desc: (
        <>
          <span>
            We have organisational and technical processes and procedures in
            place to protect your personal information. However, no electronic
            transmission over the internet or information storage technology can
            be guaranteed to be 100% secure, so we cannot promise or guarantee
            that hackers, cybercriminals, or other unauthorised third parties
            will not be able to defeat our security and improperly collect,
            access, steal, or modify your information.{" "}
          </span>
          <span
            className={`${styles.link} hover:underline`}
            onClick={() => scrollToSection("section-9")}
          >
            Learn more about how we keep your information safe.
          </span>
        </>
      ),
    },
    {
      title: "What are your rights?",
      desc: (
        <>
          <span>
            Depending on where you are located geographically, the applicable
            privacy law may mean you have certain rights regarding your personal
            information.{" "}
          </span>
          <span
            className={`${styles.link} hover:underline`}
            onClick={() => scrollToSection("section-11")}
          >
            Learn more about your privacy rights.
          </span>
        </>
      ),
    },
    {
      title: "How do you exercise your rights?",
      desc: (
        <span>
          The easiest way to exercise your rights is by submitting a data
          subject access request or by contacting us. We will consider and act
          upon any request in accordance with applicable data protection laws.
          <br />
          <br />
          Want to learn more about what we do with any information we collect?
          Review the privacy notice in full below.
        </span>
      ),
    },
  ];

  // Table of contents items
  const tableOfContents = [
    { text: "1. WHAT INFORMATION DO WE COLLECT?", id: "section-1" },
    { text: "2. HOW DO WE PROCESS YOUR INFORMATION?", id: "section-2" },
    {
      text: "3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?",
      id: "section-3",
    },
    {
      text: "4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?",
      id: "section-4",
    },
    {
      text: "5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?",
      id: "section-5",
    },
    { text: "6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?", id: "section-6" },
    {
      text: "7. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?",
      id: "section-7",
    },
    { text: "8. HOW LONG DO WE KEEP YOUR INFORMATION?", id: "section-8" },
    { text: "9. HOW DO WE KEEP YOUR INFORMATION SAFE?", id: "section-9" },
    { text: "10. DO WE COLLECT INFORMATION FROM MINORS?", id: "section-10" },
    { text: "11. WHAT ARE YOUR PRIVACY RIGHTS?", id: "section-11" },
    { text: "12. CONTROLS FOR DO-NOT-TRACK FEATURES", id: "section-12" },
    {
      text: "13. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?",
      id: "section-13",
    },
    { text: "14. DO WE MAKE UPDATES TO THIS NOTICE?", id: "section-14" },
    { text: "15. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?", id: "section-15" },
    {
      text: "16. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?",
      id: "section-16",
    },
  ];

  // Personal information list items
  const personalInfoItems = [
    "Names",
    "Email address",
    "Interested role",
    "Professional Summary",
    "Operating hours",
    "Address",
    "Level of experience",
    "Mobile number",
    "Country",
    "Operating days",
    "Educational qualification",
    "Company name",
    "Company email address",
    "Representatives Full Name",
    "Type of business",
    "Company address",
    "Company overview",
    "Mobile number",
    "Industry",
  ];

  // Sensitive information items
  const sensitiveInfoItems = [
    "Information about your sex or sexual orientation",
    "Information revealing religious or philosophical beliefs",
    "Student data/information",
    "Gender and inclusivity information",
  ];

  // Third party categories
  const thirdPartyCategories = [
    "Communication & Collaboration Tools",
    "Data Analytics Services",
    "Data Storage Service Providers",
    "Finance & Accounting Tools",
    "Government Entities",
    "Payment Processors",
    "Performance Monitoring Tools",
    "Product Engineering & Design Tools",
    "Sales & Marketing Tools",
    "Website Hosting Service Providers",
    "User Account Registration & Authentication Services",
    "Testing Tools",
    "Recruitment Companies",
    "Retargeting Platforms",
    "Cloud Computing Services",
    "Social Networks",
    "Ad Networks",
    "Order Fulfilment Service Providers",
  ];

  // Table data for US privacy rights
  const privacyTableData = [
    {
      id: "A",
      category: "Identifiers",
      examples:
        "Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, internet protocol address, email address, and account name.",
      collected: "YES",
    },
    {
      id: "B",
      category:
        "Personal information as defined in the California Customer Records Statute",
      examples:
        "Name, contact information, education, employment, employment history, and financial information.",
      collected: "YES",
    },
    {
      id: "C",
      category:
        "Protected classification characteristics under state or federal law",
      examples:
        "Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data",
      collected: "YES",
    },
    {
      id: "D",
      category: "Commercial information",
      examples:
        "Transaction information, purchase history, financial details, and payment information.",
      collected: "YES",
    },
    {
      id: "E",
      category: "Biometric information",
      examples: "Fingerprints and voiceprints",
      collected: "NO",
    },
    {
      id: "F",
      category: "Internet or other similar network activity",
      examples:
        "Browsing history, search history, online behaviour, interest data, and interactions with our services and other websites, applications, systems, and advertisements.",
      collected: "NO",
    },
    {
      id: "G",
      category: "Geolocation data",
      examples: "Device location",
      collected: "YES",
    },
    {
      id: "H",
      category: "Audio, electronic, sensory, or similar information",
      examples:
        "Images and audio, video or call recordings created in connection with our business activities.",
      collected: "NO",
    },
    {
      id: "I",
      category: "Professional or employment-related information",
      examples:
        "Business contact details in order to provide you our services at a business level or job title, work history, and professional qualifications if you apply for a job with us",
      collected: "YES",
    },
    {
      id: "J",
      category: "Education Information",
      examples: "Student records and directory information.",
      collected: "NO",
    },
    {
      id: "K",
      category: "Inferences drawn from collected personal information",
      examples:
        "Inferences may be drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual's preferences and characteristics.",
      collected: "YES",
    },
    {
      id: "L",
      category: "Sensitive personal Information",
      examples:
        "Account login information, debit or credit card numbers, racial or ethnic origin, religious or philosophical beliefs and sex life or sexual orientation.",
      collected: "YES",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        {/* Header Section */}
        <div className={styles.section}>
          <div className="space-y-4">
            <h1 className={styles.heading1}>RECREAX PRIVACY POLICY</h1>
            <h3 className={styles.paragraph}>Last Updated 05 SEPT,2024</h3>
          </div>

          {/* Intro Section */}
          <div className={styles.section}>
            <p className={styles.paragraph}>
              This privacy notice for ReCreaX Ltd
              <span className="font-semibold">
                (&apos;we&apos;, &apos;us&apos;, or &apos;our&apos;)
              </span>{" "}
              , describes how and why we might collect, store, use, and/or share
              <span className="font-semibold">(&apos;process&apos;)</span>
              your information when you use our services{" "}
              <span className="font-semibold">(&apos;Services&apos;)</span>,
              such as when you:
            </p>
            <ul className={styles.list}>
              <li>
                Visit our website at{" "}
                <a href="https://recreax.com" className={styles.link}>
                  https://recreax.com,
                </a>
                or any website of ours that links to this privacy notice which
                is built on Bubble.
              </li>
              <li>
                Download and use our mobile application (ReCreaX), or any other
                application of ours that links to this privacy notice
              </li>
              <li>
                Engage with us in other related ways, including any sales,
                marketing, or events
              </li>
            </ul>
            <div className="space-y-2">
              <h5 className={styles.heading3}>Questions or concerns?</h5>
              <p className={styles.paragraph}>
                Reading this privacy notice will help you understand your
                privacy rights and choices. If you do not agree with our
                policies and practices, please do not use our services. If you
                still have any questions or concerns, please contact us at{" "}
                <a href="mailto:dpo@recreax.com" className={styles.link}>
                  dpo@recreax.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Summary of Key Points */}
        <div className={styles.section}>
          <h2 className={styles.heading2}>SUMMARY OF KEY POINTS</h2>
          <div className={styles.section}>
            <p className={styles.paragraph}>
              This summary provides key points from our privacy notice, but you
              can find out more details about any of these topics by clicking on
              the link to each key point using our table of contents below to
              find the section you are looking for.
            </p>
            {/* Key Points List */}
            {summaryPoints.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <h5 className={styles.heading3}>{item.title}</h5>
                <p className={styles.paragraph}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Table of Contents */}
        <div className={styles.section}>
          <h2 className={styles.heading2}>TABLE OF CONTENTS</h2>
          <div className={styles.paragraph}>
            {tableOfContents.map((item, idx) => (
              <React.Fragment key={idx}>
                <span
                  onClick={() => scrollToSection(item.id)}
                  className={`${styles.link} hover:underline`}
                >
                  {item.text}
                </span>
                {idx < tableOfContents.length - 1 && <br />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Section 1 */}
      <div className={styles.section} id="section-1">
        <h2 className={styles.heading2}>1. WHAT INFORMATION DO WE COLLECT?</h2>
        <div className={styles.section}>
          <div className="space-y-4">
            <h3 className={styles.heading3}>
              i. Personal Information You Disclose To Us
            </h3>
            <p className={styles.paragraph}>
              In Short: We collect personal information that you provide to us.
              <br />
              <br />
              We collect personal information that you voluntarily provide to us
              when you use our services, whether by registering on our
              platforms, expressing interest in our products and services,
              participating in activities on our services, or contacting us in
              any other way.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className={styles.heading3}>
              a. Personal Information Provided by You
            </h3>
            <p className={styles.paragraph}>
              The personal information that we collect depends on the context of
              your interactions with us and the services, the choices you make,
              and the products and features you use. The personal information we
              collect may include the following:
            </p>
            <ul className={`${styles.list} text-zinc-600`}>
              {personalInfoItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className={styles.heading3}>b. Sensitive Information</h3>
            <p className={styles.paragraph}>
              When necessary, with your consent or as otherwise permitted by
              applicable law, we process the following categories of sensitive
              information:
            </p>
            <ul className={`${styles.list} text-zinc-600`}>
              {sensitiveInfoItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className={styles.heading3}>c. Payment Data</h3>
            <p className={styles.paragraph}>
              We may collect data necessary to process your payment if you
              choose to make purchases, such as your payment instrument number,
              and the security code associated with your payment instrument. All
              payment data is handled and stored by Stripe and Paystack.
              <br />
              You may find their privacy notice link(s) here:{" "}
              <a href="https://stripe.com/gb/privacy" className={styles.link}>
                https://stripe.com/gb/privacy
              </a>{" "}
              and{" "}
              <a
                href="https://paystack.com/privacy/merchant#:~:text=We%20may%20access%2C%20disclose%2C%20and,%2C%20safety%2C%20and%20protecting%20rights"
                className={styles.link}
              >
                https://paystack.com/privacy/merchant
              </a>
            </p>
          </div>

          <div className="space-y-4">
            <h3 className={styles.heading3}>d. Social Media Login Data</h3>
            <p className={styles.paragraph}>
              We may provide you with the option to register with us using your
              existing social media account details, such as your Google,
              LinkedIn, or other social media account. If you choose to register
              in this way, we will collect certain profile information about you
              from the social media provider, as described in the section called
              &apos;
              <span
                className={`${styles.link} hover:underline`}
                onClick={() => scrollToSection("section-6")}
              >
                HOW DO WE HANDLE YOUR SOCIAL LOGINS?
              </span>
              &apos; below.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className={styles.heading3}>e. Application Data</h3>
            <p className={styles.paragraph}>
              If you use our application(s), we also may collect the following
              information if you choose to provide us with access or permission:
            </p>
            <ul className={styles.list}>
              <li>
                Geolocation Information. We may request access or permission to
                track location-based information from your mobile device, either
                continuously or while you are using our mobile application(s),
                to provide certain location-based services. If you wish to
                change our access or permissions, you may do so in your
                device&apos;s settings.
              </li>
              <li>
                Mobile Device Access. We may request access or permission to
                certain features from your mobile device, including your mobile
                device&apos;s calendar, camera, reminders, storage, social media
                accounts, and other features. If you wish to change our access
                or permissions, you may do so in your device&apos;s settings.
              </li>
              <li>
                Mobile Device Data. Bubble automatically collect device
                information (such as your mobile device ID, model, and
                manufacturer), operating system, version information and system
                configuration information, device and application identification
                numbers, browser type and version, hardware model Internet
                service provider and/or mobile carrier, and Internet Protocol
                (IP) address (or proxy server). If you are using our
                application(s), Bubble may also collect information about the
                phone network associated with your mobile device, your mobile
                device&apos;s operating system or platform, the type of mobile device
                you use, your mobile device&apos;s unique device ID, and
                information about the features of our application(s) you
                accessed.
              </li>
              <li>
                Push Notifications. We may request to send you push
                notifications regarding your account or certain features of the
                application(s). If you wish to opt out from receiving these
                types of communications, you may turn them off in your
                device&apos;s settings.
              </li>
            </ul>
            <p className={styles.paragraph}>
              This information is primarily needed to maintain the security and
              operation of our application(s), for troubleshooting, and for our
              internal analytics and reporting purposes.
              <br />
              <br />
              All personal information that you provide to us must be true,
              complete, and accurate, and you must notify us of any changes to
              your email address.
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.heading3}>
            ii. Information Automatically Collected
          </h3>
          <p className={styles.paragraph}>
            In Short: Some information — such as your device screen size — is
            collected automatically when you visit our Services.
            <br />
            Bubble automatically collects certain information when you visit,
            use, or navigate the services. This information does not reveal your
            specific identity (like your name or contact information) but may
            include device and usage information, such as your IP address,
            browser and device characteristics, operating system, language
            preferences, referring URLs, device name, country, location,
            information about how and when you use our services, and other
            technical information. This information is primarily needed to
            maintain the security and operation of our services and for our
            internal analytics and reporting purposes, you may find their
            privacy notice link here:{" "}
            <span className={styles.link}>Bubble Privacy Notice.</span>
          </p>
          <p className={styles.paragraph}>
            Like many businesses, we also collect information through cookies
            and similar technologies.
            <br />
            <br />
            The information we collect includes:
          </p>
          <ul className={styles.list}>
            <li>
              Log and Usage Data: Log and usage data are service-related
              diagnostic, usage, and performance information our servers
              automatically collect when you access or use our services and
              which we record in log files. Depending on how you interact with
              us, this log data may include your IP address, device information,
              browser type, settings, and information about your activity in the
              services (such as the date/time stamps associated with your usage,
              pages and files viewed, searches, and other actions you take such
              as which features you use), device event information (such as
              system activity, error reports (sometimes called &apos;crash
              dumps&apos;), and hardware settings).
            </li>
            <li>
              Device Data. Bubble collects device data such as information about
              your computer, phone, tablet, or other device you use to access
              the services. Depending on the device used, this device data may
              include information such as your IP address (or proxy server),
              device and application identification numbers, location, browser
              type, hardware model, internet service provider and/or mobile
              carrier, operating system, and system configuration information.
            </li>
            <li>
              Location Data. We collect location data such as information about
              your device&apos;s location, which can be either precise or
              imprecise. How much information we collect depends on the type and
              settings of the device you use to access the Services. For
              example, we may use GPS and other technologies to collect
              geolocation data that tells us your current location (based on
              your IP address). You can opt out of allowing us to collect this
              information either by refusing access to the information or by
              disabling your Location setting on your device. However, if you
              choose to opt-out, you may not be able to use certain aspects of
              the Services.
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.heading3}>
            iii. Information Collected From Other Sources
          </h3>
          <p className={styles.paragraph}>
            In Short: We may collect limited data from public databases,
            marketing partners, social media platforms, and other outside
            sources.
            <br />
            <br />
            To enhance our ability to provide relevant marketing, offers, and
            services to you and to update our records, we may obtain information
            about you from other sources, such as public databases, joint
            marketing partners, affiliate programs, data providers, social media
            platforms, and from other third parties. This information includes
            mailing addresses, job titles, email addresses, phone numbers,
            intent data (or user behaviour data), Internet Protocol (IP)
            addresses, social media profiles, social media URLs, and custom
            profiles, for purposes of targeted advertising and event promotion.
            <br />
            <br />
            If you interact with us on a social media platform using your social
            media account (e.g. Facebook or X), we receive personal information
            about you from such platforms such as your name, email address, and
            gender. Any personal information that we collect from your social
            media account depends on your social media account&apos;s privacy
            settings. Please note that their use of your information is not
            governed by this privacy notice.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className={styles.section} id="section-2">
        <h2 className={styles.heading2}>
          2. HOW DO WE PROCESS YOUR INFORMATION?
        </h2>
        <div className="space-y-4">
          <p className={styles.paragraph}>
            In Short: We process your information to provide, improve, and
            administer our services, communicate with you, for security and
            fraud prevention, and to comply with law. We may also process your
            information for other purposes with your consent.
            <br />
            <br />
            We process your personal information for a variety of reasons,
            depending on how you interact with our services, including:
          </p>
          <ul className={styles.list}>
            <li>
              To facilitate account creation and authentication and otherwise
              manage user accounts. We may process your information so you can
              create and log in to your account, as well as keep your account in
              working order.
            </li>
            <li>
              To deliver and facilitate delivery of services to the user. We may
              process your information to provide you with the requested
              service.
            </li>
            <li>
              To respond to user inquiries/offer support to users. We may
              process your information to respond to your inquiries and solve
              any potential issues you might have with the requested service.
            </li>
            <li>
              To send administrative information to you. We may process your
              information to send you details about our products and services,
              changes to our terms and policies, and other similar information.
            </li>
            <li>
              To enable user-to-user communications. We may process your
              information if you choose to use any of our offerings that allow
              for communication with another user.
            </li>
            <li>
              To save or protect an individual&apos;s vital interest. We may
              process your information when necessary to save or protect an
              individual&apos;s vital interest, such as to prevent harm.
            </li>
          </ul>
        </div>
      </div>

      {/* Section 3 */}
      <div className={styles.section} id="section-3">
        <h2 className={styles.heading2}>
          3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
        </h2>
        <div className="space-y-4">
          <p className={styles.paragraph}>
            In Short: We only process your personal information when we believe
            it is necessary and we have a valid legal reason (i.e. legal basis)
            to do so under applicable law, like with your consent, to comply
            with laws, to provide you with services to enter into or fulfil our
            contractual obligations, to protect your rights, or to fulfil our
            legitimate business interests.
          </p>
          <p className={`${styles.paragraph} font-semibold`}>
            If you are located in the EU or UK, this section applies to you.
          </p>
          <p className={styles.paragraph}>
            The General Data Protection Regulation (GDPR) and UK GDPR require us
            to explain the valid legal bases we rely on in order to process your
            personal information. As such, we may rely on the following legal
            bases to process your personal information:
          </p>
          <ul className={styles.list}>
            <li>
              <span className="font-semibold">Consent:</span>
              We may process your information if you have given us permission
              (i.e. consent) to use your personal information for a specific
              purpose. You can withdraw your consent at any time. Learn more
              about withdrawing your consent.
            </li>
            <li>
              <span className="font-semibold">Performance of a Contract:</span>
              We may process your personal information when we believe it is
              necessary to fulfil our contractual obligations to you, including
              providing our services or at your request prior to entering into a
              contract with you.
            </li>
            <li>
              <span className="font-semibold">Legal Obligations:</span>
              We may process your information where we believe it is necessary
              for compliance with our legal obligations, such as to cooperate
              with a law enforcement body or regulatory agency, exercise or
              defend our legal rights, or disclose your information as evidence
              in litigation in which we are involved.
            </li>
            <li>
              <span className="font-semibold">Vital Interests:</span>
              We may process your information where we believe it is necessary
              to protect your vital interests or the vital interests of a third
              party, such as situations involving potential threats to the
              safety of any person.
            </li>
          </ul>
          <p className={`${styles.paragraph} font-semibold`}>
            If you are located in Canada, this section applies to you.
          </p>
          <p className={styles.paragraph}>
            We may process your information if you have given us specific
            permission (i.e. express consent) to use your personal information
            for a specific purpose, or in situations where your permission can
            be inferred (i.e. implied consent). You can withdraw your consent at
            any time.
            <br />
            <br />
            In some exceptional cases, we may be legally permitted under
            applicable law to process your information without your consent,
            including, for example:
          </p>
          <ul className={styles.list}>
            <li>
              If collection is clearly in the interests of an individual and
              consent cannot be obtained in a timely way
            </li>
            <li>For investigations and fraud detection and prevention</li>
            <li>
              For business transactions provided certain conditions are met
            </li>
            <li>
              If it is contained in a witness statement and the collection is
              necessary to assess, process, or settle an insurance claim
            </li>
            <li>
              For identifying injured, ill, or deceased persons and
              communicating with next of kin
            </li>
            <li>
              If we have reasonable grounds to believe an individual has been,
              is, or may be victim of financial abuse
            </li>
            <li>
              If it is reasonable to expect that obtaining consent would
              compromise the availability or accuracy of the information, and if
              the collection is necessary for purposes related to investigating
              a breach of an agreement or a contravention of the laws of Canada
              or a province, then consent may not be required
            </li>
            <li>
              If disclosure is required to comply with a subpoena, warrant,
              court order, or rules of the court relating to the production of
              records
            </li>
            <li>
              If it was produced by an individual in the course of their
              employment, business, or profession and the collection is
              consistent with the purposes for which the information was
              produced
            </li>
            <li>
              If the collection is solely for journalistic, artistic, or
              literary purposes
            </li>
            <li>
              If the information is publicly available and is specified by the
              regulations
            </li>
          </ul>
        </div>
      </div>

      {/* Section 4 */}
      <div className={styles.section} id="section-4">
        <h2 className={styles.heading2}>
          4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
        </h2>
        <div className="space-y-4">
          <p className={styles.paragraph}>
            In Short: We may share information in specific situations described
            in this section and/or with the following categories of third
            parties.
          </p>
          <p className={styles.paragraph}>
            <span className="font-semibold">
              Vendors, Consultants, and Other Third-Party Service Providers:
            </span>{" "}
            We may share your data with third-party vendors, service providers,
            contractors, or agents (&apos;third parties&apos;) who perform
            services for us or on our behalf and require access to such
            information to do that work. We have contracts in place with our
            third parties, which are designed to help safeguard your personal
            information. This means that they cannot do anything with your
            personal information unless we have instructed them to do it. They
            will also not share your personal information with any organisation
            apart from us. They also commit to protect the data they hold on our
            behalf and to retain it for the period we instruct.
          </p>
          <p className={styles.paragraph}>
            The categories of third parties we may share personal information
            with are as follows:
          </p>
          <ul className={`${styles.list} text-zinc-600`}>
            {thirdPartyCategories.map((category, idx) => (
              <li key={idx}>{category}</li>
            ))}
          </ul>
          <p className={styles.paragraph}>
            We also may need to share your personal information in the following
            situations:
          </p>
          <ul className={styles.list}>
            <li>
              <span className="font-semibold">Business Transfers:</span>
              We may share or transfer your information in connection with, or
              during negotiations of, any merger, sale of company assets,
              financing, or acquisition of all or a portion of our business to
              another company.
            </li>
            <li>
              <span className="font-semibold">
                When we use Google Maps Platform APIs:{" "}
              </span>
              We may share your information with certain Google Maps Platform
              APIs (e.g. Google Maps API, Places API). We obtain your location
              data and store on your device (&apos;cache&apos;) for twelve (12)
              months. You may revoke your consent anytime by contacting us at
              the contact details provided at the end of this document.
            </li>
            <li>
              <span className="font-semibold">Affiliates:</span> We may share
              your information with our affiliates, in which case we will
              require those affiliates to honour this privacy notice. Affiliates
              include our parent company and any subsidiaries, joint venture
              partners, or other companies that we control or that are under
              common control with us.
            </li>
            <li>
              <span className="font-semibold">Business Partners:</span>
              We may share your information with our business partners to offer
              you certain products, services, or promotions.
            </li>
            <li>
              <span className="font-semibold">Other Users:</span> When you share
              personal information (for example, by posting comments,
              contributions, or other content to the Services) or otherwise
              interact with public areas of the Services, such personal
              information may be viewed by all users and may be publicly made
              available outside the Services in perpetuity. If you interact with
              other users of our Services and register for our Services through
              a social network (such as Google or LinkedIn), your contacts on
              the social network will see your name, profile photo, and
              descriptions of your activity. Similarly, other users will be able
              to view descriptions of your activity, communicate with you within
              our Services, and view your profile.
            </li>
          </ul>
        </div>
      </div>

      {/* Section 5 */}
      <div className={styles.section} id="section-5">
        <h2 className={styles.heading2}>
          5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
        </h2>
        <div className="space-y-4">
          <p className={styles.paragraph}>
            In Short: We may use cookies and other tracking technologies to
            collect and store your information.
            <br />
            We may use cookies and similar tracking technologies (like web
            beacons and clear Gifs) to gather information when you interact with
            our services. Some online tracking technologies help us maintain the
            security of our services and your account, prevent crashes, fix
            bugs, save your preferences, and assist with basic site functions.
            <br />
            We may also permit third parties and service providers to use online
            tracking technologies on our Services for analytics and advertising,
            including to help manage and display advertisements, to tailor
            advertisements to your interests, or to send abandoned shopping cart
            reminders (depending on your communication preferences). The third
            parties and service providers use their technology to provide
            advertisements about products and services tailored to your
            interests which may appear either on our services or on other
            websites.
            <br />
            To the extent these online tracking technologies are deemed to be a
            &apos;sale&apos;/&apos;sharing&apos; (which includes targeted
            advertising, as defined under the applicable laws) under applicable
            US state laws, you can opt out of these online tracking technologies
            by submitting a request as described below under section &apos;
            <span
              className={`${styles.link} hover:underline`}
              onClick={() => scrollToSection("section-13")}
            >
              DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
            </span>
            &apos;
            <br />
            Specific information about how we use such technologies and how you
            can refuse certain cookies is set out in our Cookie Notice.
          </p>
          <h3 className={styles.heading3}>Google Analytics</h3>
          <p className={styles.paragraph}>
            We may share your information with Google Analytics to track and
            analyse the use of the Services. The Google Analytics Advertising
            Features that we may use includes: Google Analytics Demographics and
            Interests Reporting, Google Display Network Impressions Reporting
            and Remarketing with Google Analytics. To opt out of being tracked
            by Google Analytics across the Services, visit{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              className={styles.link}
            >
              https://tools.google.com/dlpage/gaoptout
            </a>
            . You can opt out of Google Analytics Advertising Features through{" "}
            <span className={styles.link}>Ads Settings</span> and Ad Settings
            for mobile apps. Other opt out means include{" "}
            <a
              href="http://optout.networkadvertising.org/"
              className={styles.link}
            >
              http://optout.networkadvertising.org/
            </a>{" "}
            and{" "}
            <a
              href="http://www.networkadvertising.org/mobile-choice"
              className={styles.link}
            >
              http://www.networkadvertising.org/mobile-choice
            </a>
            . For more information on the privacy practices of Google, please
            visit the Google Privacy & Terms page.
          </p>
        </div>
      </div>

      {/* Section 6 */}
      <div className={styles.section} id="section-6">
        <h2 className={styles.heading2}>
          6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
        </h2>
        <p className={styles.paragraph}>
          In Short: If you choose to register or log in to our services using a
          social media account, we may have access to certain information about
          you.
          <br />
          Our Services may offer you the ability to register and log in using
          your third-party social media account details (like your Google or
          LinkedIn logins). Where you choose to do this, we will receive certain
          profile information about you from your social media provider. The
          profile information we receive may vary depending on the social media
          provider concerned, but will often include your name, email address,
          and profile picture, as well as other information you choose to make
          public on such a social media platform.
          <br />
          We will use the information we receive only for the purposes that are
          described in this privacy notice or that are otherwise made clear to
          you on the relevant Services. Please note that we do not control, and
          are not responsible for, other uses of your personal information by
          your third-party social media provider. We recommend that you review
          their privacy notice to understand how they collect, use, and share
          your personal information, and how you can set your privacy
          preferences on their sites and apps.
        </p>
      </div>

      {/* Section 7 */}
      <div className={styles.section} id="section-7">
        <h2 className={styles.heading2}>
          7. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
        </h2>
        <p className={styles.paragraph}>
          In Short: We may transfer, store, and process your information in
          countries other than your own
          <br />
          Our servers are located in the United States. If you are accessing our
          services from outside the United States, please be aware that your
          information may be transferred to, stored, and processed by us in our
          facilities and by those third parties with whom we may share your
          personal information (see &apos;
          <span
            className={`${styles.link} hover:underline`}
            onClick={() => scrollToSection("section-4")}
          >
            WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
          </span>
          &apos; above), in the United States, and other countries.
          <br />
          If you are a resident in the European Economic Area (EEA), United
          Kingdom (UK), or Switzerland, then these countries may not necessarily
          have data protection laws or other similar laws as comprehensive as
          those in your country. However, we will take all necessary measures to
          protect your personal information in accordance with this privacy
          notice and applicable law.
          <br />
          <span className="font-semibold">
            European Commission&apos;s Standard Contractual Clauses:
          </span>{" "}
          <br />
          We have implemented measures to protect your personal information,
          including the use of the European Commission&apos;s Standard
          Contractual Clauses for transfers of personal information between our
          group companies and between us and our third-party providers. These
          clauses require all recipients to protect all personal information
          that they process originating from the EEA or UK in accordance with
          European data protection laws and regulations. Our Standard
          Contractual Clauses can be provided upon request. We have implemented
          similar appropriate safeguards with our third-party service providers
          and partners and further details can be provided upon request.
        </p>
      </div>

      {/* Section 8 */}
      <div className={styles.section} id="section-8">
        <h2 className={styles.heading2}>
          8. HOW LONG DO WE KEEP YOUR INFORMATION?
        </h2>
        <p className={styles.paragraph}>
          In Short: We keep your information for as long as necessary to fulfil
          the purposes outlined in this privacy notice unless otherwise required
          by law.
          <br />
          We will only keep your personal information for as long as it is
          necessary for the purposes set out in this privacy notice, unless a
          longer retention period is required or permitted by law (such as tax,
          accounting, or other legal requirements). No purpose in this notice
          will require us keeping your personal information for longer than
          twelve (12) months past the start of the idle period of the
          user&apos;s account.
          <br />
          Where you violate our Terms and your account is suspended, we may keep
          the identifiers you used to create the account (i.e., email address or
          phone number) indefinitely to prevent repeat policy offenders from
          creating new accounts.
          <br />
          When we have no ongoing legitimate business need to process your
          personal information, we will either delete or anonymise such
          information, or, if this is not possible (for example, because your
          personal information has been stored in backup archives), then we will
          securely store your personal information and isolate it from any
          further processing until deletion is possible.
        </p>
      </div>

      {/* Section 9 */}
      <div className={styles.section} id="section-9">
        <h2 className={styles.heading2}>
          9. HOW DO WE KEEP YOUR INFORMATION SAFE?
        </h2>
        <p className={styles.paragraph}>
          In Short: We aim to protect your personal information through a system
          of organisational and technical security measures.
          <br />
          We have implemented appropriate and reasonable technical and
          organisational security measures designed to protect the security of
          any personal information we process. However, despite our safeguards
          and efforts to secure your information, no electronic transmission
          over the Internet or information storage technology can be guaranteed
          to be 100% secure, so we cannot promise or guarantee that hackers,
          cybercriminals, or other unauthorised third parties will not be able
          to defeat our security and improperly collect, access, steal, or
          modify your information. Although we will do our best to protect your
          personal information, transmission of personal information to and from
          our services is at your own risk. You should only access the services
          within a secure environment.
        </p>
      </div>

      {/* Section 10 */}
      <div className={styles.section} id="section-10">
        <h2 className={styles.heading2}>
          10. DO WE COLLECT INFORMATION FROM MINORS?
        </h2>
        <p className={styles.paragraph}>
          In Short: We do not knowingly collect data from or market to children
          under 18 years of age.
          <br />
          We do not knowingly collect, solicit data from, or market to children
          under 18 years of age, nor do we knowingly sell such personal
          information. By using the services, you represent that you are at
          least 18 or that you are the parent or guardian of such a minor and
          consent to such minor dependent&apos;s use of the services. If we
          learn that personal information from users less than 18 years of age
          has been collected, we will deactivate the account and take reasonable
          measures to promptly delete such data from our records. If you become
          aware of any data we may have collected from children under age 18,
          please contact us at{" "}
          <a href="mailto:dpo@recreax.com" className={styles.link}>
            dpo@recreax.com
          </a>
        </p>
      </div>

      {/* Section 11 */}
      <div className={styles.section} id="section-11">
        <h2 className={styles.heading2}>11. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
        <div className="space-y-4">
          <p className={styles.paragraph}>
            In Short: Depending on your state of residence in the US or in some
            regions, such as the European Economic Area (EEA), United Kingdom
            (UK), Switzerland, and Canada, you have rights that allow you
            greater access to and control over your personal information. You
            may review, change, or terminate your account at any time, depending
            on your country, province, or state of residence.
          </p>
          <p className={styles.paragraph}>
            In some regions (like the EEA, UK, Switzerland, and Canada), you
            have certain rights under applicable data protection laws. These may
            include the right to:{" "}
          </p>
          <ul className={styles.list}>
            <li>
              request access and obtain a copy of your personal information,
            </li>
            <li>request rectification or erasure</li>
            <li> restrict the processing of your personal information;</li>
            <li>if applicable, data portability;</li>
            <li>not be subject to automated decision-making.</li>
          </ul>
          <p className={styles.paragraph}>
            In certain circumstances, you may also have the right to object to
            the processing of your personal information. You can make such a
            request by contacting us using the contact details provided in the
            section &apos;
            <span
              className={`${styles.link} hover:underline`}
              onClick={() => scrollToSection("section-15")}
            >
              HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </span>
            &apos; below.
          </p>
          <p className={styles.paragraph}>
            We will consider and act upon any request in accordance with
            applicable data protection laws.
          </p>
          <p className={styles.paragraph}>
            If you are located in the EEA or UK and you believe we are
            unlawfully processing your personal information, you also have the
            right to complain to your{" "}
            <span className={styles.link}>
              Member State Data Protection Authority or UK Data Protection
              Authority
            </span>
          </p>
          <p className={styles.paragraph}>
            If you are located in Switzerland, you may contact the{" "}
            <span className={styles.link}>
              Federal Data Protection and Information Commissioner
            </span>
          </p>
          <h3 className={styles.heading3}>Withdrawing Your Consent</h3>
          <p className={styles.paragraph}>
            If we are relying on your consent to process your personal
            information, which may be express and/or implied consent depending
            on the applicable law, you have the right to withdraw your consent
            at any time. You can withdraw your consent at any time by contacting
            us using the contact details provided in the section &apos;
            <span
              className={`${styles.link} hover:underline`}
              onClick={() => scrollToSection("section-15")}
            >
              HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </span>
            &apos; below or updating your preferences.
            <br />
            <br />
            However, please note that this will not affect the lawfulness of the
            processing before its withdrawal nor, when applicable law allows,
            will it affect the processing of your personal information conducted
            in reliance on lawful processing grounds other than consent.
          </p>
          <h3 className={styles.heading3}>
            Opting Out of Marketing and Promotional Communications
          </h3>
          <p className={styles.paragraph}>
            You can unsubscribe from our marketing and promotional
            communications at any time by clicking on the unsubscribe link in
            the emails that we send, or by contacting us using the contact
            details provided in the section &apos;
            <span
              className={`${styles.link} hover:underline`}
              onClick={() => scrollToSection("section-15")}
            >
              HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </span>
            &apos; below. You will then be removed from the marketing lists.
            However, we may still communicate with you — for example, to send
            you service-related messages that are necessary for the
            administration and use of your account, to respond to service
            requests, or for other non-marketing purposes.
          </p>
          <h3 className={styles.heading3}>Account Information</h3>
          <div className="space-y-4">
            <p className={styles.paragraph}>
              If you would at any time like to review or change the information
              in your account or terminate your account, you can:
            </p>
            <ul className={styles.list}>
              <li>Contact us using the contact information provided.</li>
              <li>
                Log in to your account settings and update your user account.
              </li>
            </ul>
            <p className={styles.paragraph}>
              Upon your request to terminate your account, we will deactivate or
              delete your account and information from our active databases.
              However, we may retain some information in our files to prevent
              fraud, troubleshoot problems, assist with any investigations,
              enforce our legal terms and/or comply with applicable legal
              requirements.
            </p>
          </div>
          <h3 className={styles.heading3}>Cookies and Similar Technologies:</h3>
          <p className={styles.paragraph}>
            Most web browsers are set to accept cookies by default. If you
            prefer, you can usually choose to set your browser to remove cookies
            and to reject cookies. If you choose to remove cookies or reject
            cookies, this could affect certain features or services.
            <br />
            <br />
            If you have questions or comments about your privacy rights, you may
            email us at{" "}
            <a href="mailto:dpo@recreax.com" className={styles.link}>
              dpo@recreax.com
            </a>
          </p>
        </div>
      </div>

      {/* Section 12 */}
      <div className={styles.section} id="section-12">
        <h2 className={styles.heading2}>
          12. CONTROLS FOR DO-NOT-TRACK FEATURES
        </h2>
        <div className="space-y-4">
          <p className={styles.paragraph}>
            Most web browsers and some mobile operating systems and mobile
            applications include a Do-Not-Track (&apos;DNT&apos;) feature or
            setting you can activate to signal your privacy preference not to
            have data about your online browsing activities monitored and
            collected. At this stage, no uniform technology standard for
            recognising and implementing DNT signals has been finalised. As
            such, we do not currently respond to DNT browser signals or any
            other mechanism that automatically communicates your choice not to
            be tracked online. If a standard for online tracking is adopted that
            we must follow in the future, we will inform you about that practice
            in a revised version of this privacy notice.
          </p>
          <p className={styles.paragraph}>
            California law requires us to let you know how we respond to web
            browser DNT signals. Because there currently is not an industry or
            legal standard for recognising or honouring DNT signals, we do not
            respond to them at this time.
          </p>
        </div>
      </div>

      {/* Section 13 */}
      <div className={styles.section} id="section-13">
        <h2 className={styles.heading2}>
          13. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
        </h2>
        <div className={styles.section}>
          <p className={styles.paragraph}>
            In Short: If you are a resident of California, Colorado,
            Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Montana,
            New Hampshire, New Jersey, Oregon, Tennessee, Texas, Utah, or
            Virginia, you may have the right to request access to and receive
            details about the personal information we maintain about you and how
            we have processed it, correct inaccuracies, get a copy of, or delete
            your personal information. You may also have the right to withdraw
            your consent to our processing of your personal information. These
            rights may be limited in some circumstances by applicable law. More
            information is provided below.
          </p>
          <h3 className="text-xl sm:text-2xl font-bold leading-relaxed">
            Categories of Personal Information We Collect
          </h3>
          <p className="text-lg sm:text-2xl font-medium leading-relaxed">
            We have collected the following categories of personal information
            in the past twelve (12) months:
          </p>

          <div className={styles.tableContainer}>
            <table className="min-w-full border-collapse border border-zinc-400">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-zinc-400 px-3 py-2 sm:px-5 sm:py-4 text-left text-sm sm:text-lg font-normal sm:font-semibold leading-relaxed">
                    S/N
                  </th>
                  <th className="border border-zinc-400 px-3 py-2 sm:px-5 sm:py-4 text-left text-sm sm:text-lg font-normal sm:font-semibold leading-relaxed">
                    Category
                  </th>
                  <th className="border border-zinc-400 px-3 py-2 sm:px-5 sm:py-4 text-left text-sm sm:text-lg font-normal sm:font-semibold leading-relaxed">
                    Examples
                  </th>
                  <th className="border border-zinc-400 px-3 py-2 sm:px-5 sm:py-4 text-left text-sm sm:text-lg font-normal sm:font-semibold leading-relaxed">
                    Collected
                  </th>
                </tr>
              </thead>
              <tbody>
                {privacyTableData.map((row) => (
                  <tr key={row.id} className="even:bg-gray-50">
                    <td className="border border-zinc-400 px-3 py-2 sm:px-5 sm:py-4 text-xs sm:text-base lg:text-lg font-normal leading-relaxed">
                      {row.id}
                    </td>
                    <td className="border border-zinc-400 px-3 py-2 sm:px-5 sm:py-4 text-xs sm:text-base lg:text-lg font-normal leading-relaxed">
                      {row.category}
                    </td>
                    <td className="border border-zinc-400 px-3 py-2 sm:px-5 sm:py-4 text-xs sm:text-base lg:text-lg font-normal leading-relaxed">
                      {row.examples}
                    </td>
                    <td className="border border-zinc-400 px-3 py-2 sm:px-5 sm:py-4 text-xs sm:text-base lg:text-lg font-normal leading-relaxed">
                      {row.collected}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            We only collect sensitive personal information, as defined by
            applicable privacy laws or the purposes allowed by law or with your
            consent. Sensitive personal information may be used, or disclosed to
            a service provider or contractor, for additional, specified
            purposes. You may have the right to limit the use or disclosure of
            your sensitive personal information.
          </p>
          <p className={styles.paragraph}>
            We may also collect other personal information outside of these
            categories through instances where you interact with us in person,
            online, or by phone or mail in the context of:
          </p>
          <ul className={styles.list}>
            <li>Receiving help through our customer support channels;</li>
            <li>Participation in customer surveys or contests;</li>
            <li>
              Facilitation in the delivery of our services and to respond to
              your inquiries.
            </li>
          </ul>
          <p className={styles.paragraph}>
            We will use and retain the collected personal information as needed
            to provide the services or for:
          </p>
          <ul className={styles.list}>
            <li>Category A - As long as the user has an account with us</li>
            <li>Category B - As long as the user has an account with us</li>
            <li>Category C - As long as the user has an account with us</li>
            <li>Category D - As long as the user has an account with us</li>
            <li>Category F - As long as the user has an account with us</li>
            <li>Category G - As long as the user has an account with us</li>
            <li>Category I - As long as the user has an account with us</li>
            <li>Category J - As long as the user has an account with us</li>
            <li>Category K - As long as the user has an account with us</li>
            <li>Category L - As long as the user has an account with us</li>
          </ul>
          <h3 className={styles.heading3}>Sources of Personal Information</h3>
          <p className={styles.paragraph}>
            Learn more about the sources of personal information we collect in
            &apos;
            <span
              className={`${styles.link} hover:underline`}
              onClick={() => scrollToSection("section-1")}
            >
              WHAT INFORMATION DO WE COLLECT?
            </span>
            &apos;
          </p>
          <h3 className={styles.heading3}>
            How We Use and Share Personal Information
          </h3>
          <p className="text-lg sm:text-2xl font-normal leading-relaxed">
            Learn about how we use your personal information in the section,
            &apos;
            <span
              className={`${styles.link} hover:underline`}
              onClick={() => scrollToSection("section-2")}
            >
              HOW DO WE PROCESS YOUR INFORMATION?
            </span>
            &apos;
          </p>
          <p className={styles.paragraph}>
            We collect and share your personal information through Targeting
            cookies/Marketing cookies.
          </p>
          <h3 className={styles.heading3}>
            Will your information be shared with anyone else?
          </h3>
          <p className={styles.paragraph}>
            We may disclose your personal information with our service providers
            pursuant to a written contract between us and each service provider.
            Learn more about how we disclose personal information in the
            section, &apos;
            <span
              className={`${styles.link} hover:underline`}
              onClick={() => scrollToSection("section-4")}
            >
              WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
            </span>
            &apos
          </p>
          <p className={styles.paragraph}>
            We may use your personal information for our own business purposes,
            such as for undertaking internal research for technological
            development and demonstration. This is not considered to be
            &apos;selling&apos; of your personal information.
          </p>
          <p className={styles.paragraph}>
            We have disclosed the following categories of personal information
            to third parties for a business or commercial purpose in the
            preceding twelve (12) months:
          </p>
          <ul className={styles.list}>
            <li>Category A. Identifiers</li>
            <li>
              Category B. Personal information as defined in the California
              Customer Records Law
            </li>
            <li>
              Category C. Characteristics of protected classifications under
              state or federal law
            </li>
            <li>Category D. Commercial information</li>
            <li>
              Category F. Internet or other electronic network activity
              information
            </li>
            <li>Category G. Geolocation data</li>
            <li>Category I. Professional or employment-related information</li>
            <li>Category J. Education information</li>
            <li>
              Category K. Inferences drawn from collected personal information
            </li>
            <li>Category L. Sensitive personal Information</li>
          </ul>
          <div>
            <span className={styles.paragraph}>
              The categories of third parties to whom we disclosed personal
              information for a business or commercial purpose can be found
              under &apos;
            </span>
            <span
              className={`${styles.link} hover:underline`}
              onClick={() => scrollToSection("section-4")}
            >
              WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
            </span>
            <span className={styles.paragraph}>&apos;</span>
          </div>
          <p className={styles.paragraph}>
            The categories of third parties to whom we shared personal
            information with are:
          </p>
          <ul className={styles.list}>
            <li>Ad Networks</li>
            <li>Retargeting Platforms</li>
            <li>Social Networks</li>
            <li>Data Analytics Services</li>
            <li>User Account Registration & Authentication Services</li>
          </ul>
          <h3 className={styles.heading3}>Your Rights</h3>
          <p className={styles.paragraph}>
            You have rights under certain US state data protection laws.
            However, these rights are not absolute, and in certain cases, we may
            decline your request as permitted by law. These rights include:
          </p>
          <ul className={styles.list}>
            <li>
              Right to know whether or not we are processing your personal data.
            </li>
            <li>Right to access your personal data.</li>
            <li>Right to correct inaccuracies in your personal data.</li>
            <li>Right to request the deletion of your personal data.</li>
            <li>
              Right to obtain a copy of the personal data you previously shared
              with us.
            </li>
            <li>Right to non-discrimination for exercising your rights.</li>
            <li>
              Right to opt out of the processing of your personal data if it is
              used for targeted advertising (or sharing as defined under
              California&apos;s privacy law), the sale of personal data, or
              profiling in furtherance of decisions that produce legal or
              similarly significant effects (&apos;profiling&apos;).
            </li>
          </ul>
          <p className={styles.paragraph}>
            Depending upon the state where you live, you may also have the
            following rights:
          </p>
          <ul className={styles.list}>
            <li>
              Right to obtain a list of the categories of third parties to which
              we have disclosed personal data (as permitted by applicable law,
              including Californias and Delaware&apos;s privacy law)
            </li>
            <li>
              Right to obtain a list of specific third parties to which we have
              disclosed personal data (as permitted by applicable law, including
              Oregon&apos;s privacy law)
            </li>
            <li>
              Right to limit the use and disclosure of sensitive personal data
              (as permitted by applicable law, including California&apos;s
              privacy law)
            </li>
            <li>
              Right to opt out of the collection of sensitive data and personal
              data collected through the operation of a voice or facial
              recognition feature (as permitted by applicable law, including
              Florida&apos;s privacy law)
            </li>
          </ul>
          <h3 className={styles.heading3}>How to Exercise Your Rights</h3>
          <p className={styles.paragraph}>
            To exercise these rights, you can contact us by submitting a data
            subject access request, by emailing us at info@recreax.com, or by
            referring to the contact details at the bottom of this document.
            <br />
            <br />
            You can opt out from the sale of your personal information, targeted
            advertising, or profiling by disabling cookies in Cookie Preference
            Settings.
            <br />
            <br />
            Under certain US state data protection laws, you can designate an
            authorised agent to make a request on your behalf. We may deny a
            request from an authorised agent that does not submit proof that
            they have been validly authorised to act on your behalf in
            accordance with applicable laws.
          </p>
          <h3 className={styles.heading3}>Request Verification</h3>
          <p className={styles.paragraph}>
            Upon receiving your request, we will need to verify your identity to
            confirm that you are the same person for whom we have the
            information in our system. We will only use personal information
            provided in your request to verify your identity or authority to
            make the request. However, if we cannot verify your identity from
            the information already maintained by us, we may request that you
            provide additional information for the purposes of verifying your
            identity and for security or fraud-prevention purposes.
            <br />
            <br />
            If you submit the request through an authorised agent, we may need
            to collect additional information to verify your identity before
            processing your request and the agent will need to provide a written
            and signed permission from you to submit such request on your
            behalf.
          </p>

          <h3 className={styles.heading3}>Appeals</h3>
          <p>
            <span className={styles.paragraph}>
              Under certain US state data protection laws, if we decline to take
              action regarding your request, you may appeal our decision by
              emailing us at{" "}
            </span>
            <a href="mailto:dpo@recreax.com" className={styles.link}>
              dpo@recreax.com
              <br />
            </a>
            <span className={styles.paragraph}>
              We will inform you in writing of any action taken or not taken in
              response to the appeal, including a written explanation of the
              reasons for the decisions. If your appeal is denied, you may
              submit a complaint to your state Attorney General.
            </span>
          </p>
          <h3 className={styles.heading3}>
            California &apos;Shine The Light&apos; Law
          </h3>
          <p className={styles.paragraph}>
            California Civil Code Section 1798.83, also known as the &apos;Shine
            The Light&apos; law, permits our users who are California residents
            to request and obtain from us, once a year and free of charge,
            information about categories of personal information (if any) we
            disclosed to third parties for direct marketing purposes and the
            names and addresses of all third parties with which we shared
            personal information in the immediately preceding calendar year. If
            you are a California resident and would like to make such a request,
            please submit your request in writing to us by using the contact
            details provided in the section &apos;
            <span
              className={`${styles.link} hover:underline`}
              onClick={() => scrollToSection("section-15")}
            >
              HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </span>
            &apos;
          </p>
        </div>
      </div>

      {/* Section 14 */}
      <div className={styles.section} id="section-14">
        <h2 className={styles.heading2}>
          14. DO WE MAKE UPDATES TO THIS NOTICE?
        </h2>
        <p className={styles.paragraph}>
          In Short: Yes, we will update this notice as necessary to stay
          compliant with relevant laws.
          <br />
          We may update this privacy notice from time to time. The updated
          version will be indicated by an updated &apos;Revised&apos; date at
          the top of this privacy notice. If we make material changes to this
          privacy notice, we may notify you either by prominently posting a
          notice of such changes or by directly sending you a notification. We
          encourage you to review this privacy notice frequently to be informed
          of how we are protecting your information.
        </p>
      </div>

      {/* Section 15 */}
      <div className={styles.section} id="section-15">
        <h2 className={styles.heading2}>
          15.HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
        </h2>
        <div className={styles.section}>
          <p className={styles.paragraph}>
            If you have questions or comments about this notice, you may contact
            our Data Protection Officer (DPO) by email at{" "}
            <a href="mailto:dpo@recreax.com" className={styles.link}>
              dpo@recreax.com
            </a>
            , or contact us by post at:
          </p>
          <p className={styles.paragraph}>
            ReCreaX Ltd
            <br />
            Data Protection Officer
            <br />
            128 City Road
            <br />
            London, England EC1V 12X,
            <br />
            England.
          </p>
        </div>
      </div>

      {/* Section 16 */}
      <div className={styles.section} id="section-16">
        <h2 className={styles.heading2}>
          16. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
          YOU?
        </h2>
        <p className={styles.paragraph}>
          Based on the applicable laws of your country or state of residence in
          the US, you may have the right to request access to the personal
          information we collect from you, details about how we have processed
          it, correct inaccuracies, or delete your personal information. You may
          also have the right to withdraw your consent to our processing of your
          personal information. These rights may be limited in some
          circumstances by applicable law. To request to review, update, or
          delete your personal information, please fill out and submit a data
          subject access request.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicyPage;
