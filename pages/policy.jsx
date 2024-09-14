import React from 'react';
import styles from '../styles/PolicyPage.module.css'; 
import Header from '@/components/Header';
import Marquee from '@/components/Marquee';
import Footer from '@/components/Footer';

const PolicyPage = () => {
  return (
    <>
      <Header />
      <Marquee/>
      <div className={styles.policyContainer}>
        <h1>Terms and Conditions</h1>
        <p>
          Welcome to <strong>comicnova.com</strong>. By accessing or using our platform, you agree to the terms and conditions outlined below. These terms govern your use of our website, services, and features, including reading, downloading, and interacting with comics and other content.
        </p>

        <h2>1. User Registration and Accounts</h2>
        <p>
          To fully access and utilize our services, including downloading or bookmarking comics, users may need to register for an account. By creating an account, you agree to provide accurate and up-to-date information and keep your password secure. You are responsible for all activities that occur under your account.
        </p>

        <h2>2. Content Usage</h2>
        <p>
          All comics and content available on comicnova are for personal use only. You may not distribute, modify, or share content for commercial purposes without explicit permission from the platform or the original creators. 
        </p>

        <h2>3. Downloading Comics</h2>
        <p>
          Users may download comics for offline reading. However, the downloaded content remains the intellectual property of the original creators or comicnova. Redistribution of downloaded materials without proper authorization is strictly prohibited.
        </p>

        <h2>4. Intellectual Property Rights</h2>
        <p>
          All comics, text, graphics, logos, and content available on comicnova are the intellectual property of their respective creators or the platform. Unauthorized use, reproduction, or distribution of content without prior consent may result in legal action.
        </p>

        <h2>5. Community Guidelines</h2>
        <p>
          Users are expected to engage respectfully with others on our platform. Any offensive, hateful, or inappropriate behavior may result in suspension or termination of your account. We reserve the right to moderate and remove any content or comments that violate these guidelines.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          While we strive to provide the best comic reading experience, comicnova is not liable for any technical issues, data loss, or damages incurred while using our platform. Our services are provided "as is," and we make no guarantees regarding availability or uninterrupted access.
        </p>

        <h2>7. Changes to Terms</h2>
        <p>
          We may update or modify these terms at any time. It is your responsibility to check for any changes. Continued use of comicnova after modifications constitutes acceptance of the updated terms.
        </p>

        <h1>Privacy Policy</h1>
        <p>
          At comicnova, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We collect personal information when you register on our platform, browse our website, download comics, or interact with our services. This may include your name, email address, and usage data.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>
          The information we collect helps us:
        </p>
        <ul>
          <li>Provide personalized content recommendations.</li>
          <li>Facilitate comic downloads and ensure account security.</li>
          <li>Send updates, promotional offers, and newsletters.</li>
        </ul>

        <h2>3. Data Security</h2>
        <p>
          We implement strict security measures to safeguard your personal data. However, no transmission over the internet is completely secure. While we strive to protect your information, we cannot guarantee absolute security.
        </p>

        <h2>4. Sharing Information</h2>
        <p>
          We do not share your personal information with third parties, except for trusted partners who assist in delivering our services (e.g., hosting, analytics). These partners are required to keep your data confidential.
        </p>

        <h2>5. Cookies and Tracking Technologies</h2>
        <p>
          We use cookies to enhance your browsing experience by remembering your preferences and tracking your interaction with the website. You can disable cookies through your browser settings, though this may limit certain features.
        </p>

        <h2>6. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party sites, such as affiliate partners or advertisers. These sites operate independently, and we are not responsible for their content or privacy practices.
        </p>

        <h2>7. Changes to Privacy Policy</h2>
        <p>
          We reserve the right to update this Privacy Policy. Changes will be posted on this page, and your continued use of the platform constitutes acceptance of those changes.
        </p>

        <h2>8. Contact Information</h2>
        <p>
          If you have any questions or concerns regarding our privacy policy, please contact us at: <a href="mailto:support@comicnova.com"><span style={{color:'#fd7e14',textDecoration:'underline'}}>support@comicnova.com</span></a>.
        </p>

        <h1>Advertising Policy</h1>
        <p>
          Comicnova accepts advertisements from businesses relevant to our users. By placing an ad, you agree to the following terms:
        </p>

        <h2>1. Ad Content Restrictions</h2>
        <p>
          All ads must be appropriate for a general audience. Ads containing offensive, discriminatory, or explicit content will not be approved.
        </p>

        <h2>2. Legal Compliance</h2>
        <p>
          Advertisers are responsible for ensuring their ads comply with all relevant laws and regulations.
        </p>

        <h2>3. Right to Refuse</h2>
        <p>
          We reserve the right to reject or remove any advertisement at our discretion.
        </p>

        <h2>4. Liability</h2>
        <p>
          Comicnova is not responsible for any claims made in ads, including but not limited to product accuracy, offers, or warranties.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default PolicyPage;
