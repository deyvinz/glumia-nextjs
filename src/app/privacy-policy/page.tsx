import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Glumia Solutions. Learn how we collect, use, and protect your personal information in compliance with US privacy laws including CCPA.",
  keywords: [
    "Privacy Policy",
    "Data Protection",
    "CCPA Compliance",
    "US Privacy Laws",
    "Glumia Solutions Privacy",
    "Data Privacy",
    "Personal Information",
    "Privacy Rights"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy | Glumia Solutions",
    description: "Privacy Policy for Glumia Solutions. Learn how we collect, use, and protect your personal information in compliance with US privacy laws including CCPA.",
    type: "article",
    url: "https://glumia.com/privacy-policy",
  },
  alternates: {
    canonical: "https://glumia.com/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-primary-500 text-center mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              At Glumia Solutions (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), your privacy is our priority. This Privacy Policy explains how we
              collect, use, and protect your personal information when you visit our website (
              <a href="https://glumia.com" className="text-primary-500 hover:underline">glumia.com</a>) or interact with our services.
              This policy complies with applicable <strong>United States privacy laws</strong>, including the California Consumer Privacy Act (CCPA) and other federal and state regulations.
            </p>

            <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">1. Information We Collect on glumia.com</h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1.1 Information You Provide Directly</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li className="mb-2">
                <strong>Contact Information:</strong> When you fill out forms (e.g., contact forms or subscription
                forms), we collect your name, email address, phone number, and any other information you choose to
                provide.
              </li>
              <li className="mb-2">
                <strong>Account Information:</strong> If you create an account on our website, we collect login
                credentials and other details required to personalize your experience.
              </li>
              <li className="mb-2">
                <strong>Inquiry Details:</strong> When you send us inquiries via our contact page or email, we collect
                the details of your message and any attachments.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1.2 Information Collected Automatically</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li className="mb-2"><strong>Device Information:</strong> Type of device, operating system, browser type, and version.</li>
              <li className="mb-2"><strong>Usage Data:</strong> Pages viewed, links clicked, time spent on pages, and other actions taken on the website.</li>
              <li className="mb-2"><strong>IP Address and Location Data:</strong> To analyze trends and provide localized services.</li>
              <li className="mb-2"><strong>Cookies and Similar Technologies:</strong> Small files stored on your device that enhance your browsing experience.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">The information we collect on <a href="https://glumia.com" className="text-primary-500 hover:underline">glumia.com</a> is used to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li className="mb-2">Respond to inquiries and provide support.</li>
              <li className="mb-2">Improve our website and services through analytics and user feedback.</li>
              <li className="mb-2">Send newsletters, promotions, or updates (with your consent).</li>
              <li className="mb-2">Ensure website security and prevent fraudulent activities.</li>
              <li className="mb-2">Personalize content and user experience.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">3. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 mb-4">Our website uses cookies and similar technologies to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li className="mb-2"><strong>Improve User Experience:</strong> Remember user preferences (e.g., language settings).</li>
              <li className="mb-2"><strong>Analyze Website Traffic:</strong> Understand user behavior for improving content and navigation.</li>
              <li className="mb-2"><strong>Enable Marketing and Advertising:</strong> Show relevant ads based on user interests.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">4. Your Data Protection Rights</h2>
            <p className="text-gray-700 mb-4">As a user in the United States, you have the following rights under applicable privacy laws:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li className="mb-2"><strong>Right to Access:</strong> Request access to your personal information.</li>
              <li className="mb-2"><strong>Right to Correction:</strong> Correct inaccurate or incomplete information.</li>
              <li className="mb-2"><strong>Right to Deletion:</strong> Request deletion of your personal information.</li>
              <li className="mb-2"><strong>Right to Opt-Out:</strong> Opt-out of the sale of personal information (CCPA).</li>
              <li className="mb-2"><strong>Right to Non-Discrimination:</strong> Exercise your rights without discrimination.</li>
              <li className="mb-2"><strong>Right to Data Portability:</strong> Receive your data in a portable format.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">5. Contact Us</h2>
            <div className="bg-blue-50 border-l-4 border-primary-500 p-6 mt-6">
              <p className="text-gray-700 mb-4">If you have questions about this policy or wish to exercise your data rights, please contact us:</p>
              <p className="font-semibold text-gray-800 mb-2">Glumia Solutions</p>
              <p className="text-gray-700 mb-2">Email: <a href="mailto:privacy@glumia.com" className="text-primary-500 hover:underline">privacy@glumia.com</a></p>
              <p className="text-gray-700">Phone: +19432589932</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
