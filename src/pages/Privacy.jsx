import { motion } from "framer-motion";
import {
  ShieldCheck,
  UserCheck,
  Database,
  Lock,
  AlarmClock,
  ScrollText,
  Globe,
  BellRing,
  Mail,
} from "lucide-react";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Introduction",
      icon: <ShieldCheck className="w-6 h-6 text-white mr-2" />,
      text: `This Privacy Policy explains how Bu Financial ("we," "us," or "our") collects, uses, discloses, and safeguards your information when you use our financial services in Qatar. By accessing or using our services, you agree to the collection and use of information in accordance with this policy.`,
    },
    {
      title: "2. Information We Collect",
      icon: <UserCheck className="w-6 h-6 text-white mr-2" />,
      text: `We collect several types of information, including personal identification data (name, contact, Qatar ID, etc.), financial info, and technical usage data (IP address, device info, etc.).`,
    },
    {
      title: "3. How We Use Your Information",
      icon: <Database className="w-6 h-6 text-white mr-2" />,
      text: `To provide services, verify identity, comply with Qatari laws, improve offerings, detect fraud, and more.`,
    },
    {
      title: "4. Data Sharing and Disclosure",
      icon: <ScrollText className="w-6 h-6 text-white mr-2" />,
      text: `We may share data with service providers, legal authorities, or during business transfers. We do not sell your data.`,
    },
    {
      title: "5. Data Security",
      icon: <Lock className="w-6 h-6 text-white mr-2" />,
      text: `We use encryption, audits, access control, and staff training. However, no method is 100% secure.`,
    },
    {
      title: "6. Data Retention",
      icon: <AlarmClock className="w-6 h-6 text-white mr-2" />,
      text: `We retain your data only as long as needed to provide services and comply with Qatari law.`,
    },
    {
      title: "7. Your Rights",
      icon: <ShieldCheck className="w-6 h-6 text-white mr-2" />,
      text: `You have the right to access, correct, delete, or object to processing. You may also withdraw consent.`,
    },
    {
      title: "8. International Transfers",
      icon: <Globe className="w-6 h-6 text-white mr-2" />,
      text: `Your data may be transferred internationally with appropriate safeguards in place.`,
    },
    {
      title: "9. Changes to This Policy",
      icon: <BellRing className="w-6 h-6 text-white mr-2" />,
      text: `We may update this policy and will notify users by updating this page.`,
    },
    {
      title: "10. Contact Us",
      icon: <Mail className="w-6 h-6 text-white mr-2" />,
      text: `📍 Location 123 Book Street, Library City`,
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-900  py-20 px-4 flex justify-center items-center">
      <div className="max-w-4xl bg-blue-950/80 rounded-3xl shadow-2xl p-10 w-full">
        <motion.h1
          className="text-4xl font-bold text-center text-white mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Privacy Policy
        </motion.h1>

        <motion.p
          className="text-center text-blue-200 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Last Updated: May 2025
        </motion.p>

        <div className="space-y-8 text-blue-100">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              className="bg-blue-900/50 p-6 rounded-xl hover:bg-blue-900 transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div className="flex items-center mb-2">
                {section.icon}
                <h2 className="text-xl font-semibold">{section.title}</h2>
              </div>
              <p className="whitespace-pre-line text-blue-100">{section.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
