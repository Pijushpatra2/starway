import Image from "next/image";
import {
  MoveRight,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Users,
  Target,
  Shield,
  Zap,
  Globe,
  BarChart,
} from "lucide-react";
import BottomSection from "@/components/BottomSection";
import ContactForm from "@/components/Contact/ContactForm";
import InnerHero from "@/components/Common/InnerHero";
import FaqAccordion from "@/components/FaqAccordion";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <ContactForm />
      {/* Main Content */}
      <div className="mx-auto pt-20">
        {/* Office Locations */}
        <div className="px-3 md:px-4">
          <div className="max-w-7xl mx-auto bg-white rounded-2xl my-20  p-8 border border-gray-200 shadow-sm">

          
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="text-red-500" size={28} />
            <h3 className="text-2xl font-bold text-gray-900">Our Offices</h3>
          </div>

          <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Headquarters */}
              <div className="p-6 bg-blue-50 rounded-xl h-full">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  Headquarters
                </h4>

                <div className="space-y-2">
                  <p className="text-gray-600 flex items-center gap-2">
                    <MapPin size={16} className="text-blue-500" />
                    123 AI Innovation Drive
                  </p>
                  <p className="text-gray-600 ml-6">San Francisco, CA 94107</p>
                  <p className="text-gray-600 ml-6">United States</p>
                </div>

                <div className="mt-4 pt-4 border-t border-blue-100">
                  <p className="text-sm text-gray-500">
                    Local: +1 (415) 123-4567
                  </p>
                  <p className="text-sm text-gray-500">
                    Toll-Free: +1 (800) AI-OPTIMA
                  </p>
                </div>
              </div>

              {/* Global Operations */}
              <div className="p-6 bg-cyan-50 rounded-xl h-full">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  Global Operations
                </h4>

                <div className="space-y-2">
                  <p className="text-gray-600 flex items-center gap-2">
                    <Globe size={16} className="text-cyan-500" />
                    456 Future Tech Avenue
                  </p>
                  <p className="text-gray-600 ml-6">London, UK EC2A 4NE</p>
                  <p className="text-gray-600 ml-6">United Kingdom</p>
                </div>

                <div className="mt-4 pt-4 border-t border-cyan-100">
                  <p className="text-sm text-gray-500">
                    Phone: +44 20 7123 4567
                  </p>
                  <p className="text-sm text-gray-500">
                    Email: uk@aioptima.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        {/* Stats Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 px-3 md:px-4">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">83%</div>
            <p className="text-gray-600">Clients see AI search improvements</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              4-6 Weeks
            </div>
            <p className="text-gray-600">Average time to first results</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
            <p className="text-gray-600">Businesses optimized for AI</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <p className="text-gray-600">AI performance monitoring</p>
          </div>
        </div>

        <FaqAccordion
          title="Contact FAQs"
          subtitle="Everything you need to know before getting in touch with our team. "
          linkText="We’re here to help."
          linkHref="/contact"
          faqs={contactFaqs}
          defaultOpenIndex={0}
        />
      </div>
    </div>
  );
}

const contactFaqs = [
  {
    question: "How long until I see results?",
    answer:
      "Most clients see initial AI visibility improvements within 4-6 weeks. Full optimization typically takes 3 months as AI models learn and recognize your enhanced brand signals.",
  },
  {
    question: "Is this different from traditional SEO?",
    answer:
      "Yes. While SEO focuses on Google's algorithm, AI Optimization prepares your brand for conversational AI, entity recognition, and the trust signals that AI assistants prioritize.",
  },
  {
    question: "Do you work with international businesses?",
    answer:
      "Absolutely! We optimize for global AI platforms with strategies tailored to different languages, cultural contexts, and regional AI assistant preferences.",
  },
  {
    question: "What's included in the free AI audit?",
    answer:
      "Our comprehensive audit includes analysis of your current AI visibility, competitor benchmarking, platform-specific recommendations, and a personalized roadmap for improvement.",
  },

  // ✅ New 7 FAQs Added Below
  {
    question: "How can I book a consultation with your team?",
    answer:
      "You can book a consultation by filling out our contact form or reaching out directly via email. Our team will respond quickly to schedule a call at your convenience.",
  },
  {
    question: "How soon will you reply after I submit the form?",
    answer:
      "We typically respond within 24 hours on business days. If your request is urgent, please mention it in your message for faster assistance.",
  },
  {
    question: "Do you offer customized AI optimization packages?",
    answer:
      "Yes, every business is unique. We create custom AI optimization plans based on your industry, competition, current visibility, and growth goals.",
  },
  {
    question: "What information should I share when contacting you?",
    answer:
      "To help us assist you faster, share your website URL, your business goals, target audience, and the main challenges you're facing with AI visibility or SEO.",
  },
];
