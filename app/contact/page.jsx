import Image from "next/image";
import { MoveRight, Phone, Mail, MapPin, MessageSquare, CheckCircle, ArrowRight, Users, Target, Shield, Zap, Globe, BarChart } from "lucide-react";
import BottomSection from "@/components/BottomSection";
import ContactForm from "@/components/Contact/ContactForm";
import InnerHero from "@/components/Common/InnerHero";


export default function Contact() {
  return (
    <div className="w-full min-h-screen bg-white pb-20">
      <ContactForm />
      {/* Main Content */}
      <div className="w-[90%] max-w-7xl mx-auto mt-20">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">83%</div>
            <p className="text-gray-600">Clients see AI search improvements</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">4-6 Weeks</div>
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

        {/* Why Choose Us */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why AI Search Optimization Matters
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Traditional SEO is no longer enough. With AI assistants becoming the new search engines, your brand needs to be optimized for conversational AI.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300">
              <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                <service.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a href="#" className="text-blue-600 font-semibold flex items-center gap-2 hover:text-blue-700">
                Learn more
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* Contact Methods */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Get in Touch</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
              <p className="text-gray-600 mb-4">Mon-Fri, 9AM-6PM EST</p>
              <a href="tel:+15551234567" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors block">
                +1 (555) 123-4567
              </a>
              <button className="mt-4 px-6 py-2 bg-blue-100 text-blue-600 rounded-lg font-medium hover:bg-blue-200 transition-colors">
                Schedule Call
              </button>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="text-green-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email Us</h3>
              <p className="text-gray-600 mb-4">Response within 24 hours</p>
              <a href="mailto:hello@aioptima.com" className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors block break-words">
                hello@aioptima.com
              </a>
              <button className="mt-4 px-6 py-2 bg-green-100 text-green-600 rounded-lg font-medium hover:bg-green-200 transition-colors">
                Send Quick Email
              </button>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="text-purple-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Live Support</h3>
              <p className="text-gray-600 mb-4">Available 24/7 for existing clients</p>
              <button className="mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-bold hover:shadow-lg hover:shadow-purple-500/30 transition-all">
                Start Live Chat
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-12 mb-20 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-32 -translate-x-32"></div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for AI-First Visibility?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get your free AI visibility audit and discover how visible your brand is on leading AI platforms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-white rounded-xl flex items-center gap-3 text-lg font-bold text-blue-600 hover:shadow-xl transition-all duration-300">
                Claim Free Audit
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white rounded-xl text-lg font-bold text-white hover:bg-white/10 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Common Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={20} />
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Office Locations */}
        <div className="bg-white rounded-2xl p-8 mb-20 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="text-red-500" size={28} />
            <h3 className="text-2xl font-bold text-gray-900">Our Offices</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="p-6 bg-blue-50 rounded-xl">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Headquarters</h4>
                <div className="space-y-2">
                  <p className="text-gray-600 flex items-center gap-2">
                    <MapPin size={16} className="text-blue-500" />
                    123 AI Innovation Drive
                  </p>
                  <p className="text-gray-600 ml-6">San Francisco, CA 94107</p>
                  <p className="text-gray-600 ml-6">United States</p>
                </div>
                <div className="mt-4 pt-4 border-t border-blue-100">
                  <p className="text-sm text-gray-500">Local: +1 (415) 123-4567</p>
                  <p className="text-sm text-gray-500">Toll-Free: +1 (800) AI-OPTIMA</p>
                </div>
              </div>
              
              <div className="p-6 bg-cyan-50 rounded-xl">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Global Operations</h4>
                <div className="space-y-2">
                  <p className="text-gray-600 flex items-center gap-2">
                    <Globe size={16} className="text-cyan-500" />
                    456 Future Tech Avenue
                  </p>
                  <p className="text-gray-600 ml-6">London, UK EC2A 4NE</p>
                  <p className="text-gray-600 ml-6">United Kingdom</p>
                </div>
                <div className="mt-4 pt-4 border-t border-cyan-100">
                  <p className="text-sm text-gray-500">Phone: +44 20 7123 4567</p>
                  <p className="text-sm text-gray-500">Email: uk@aioptima.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <BottomSection />
      </div>
    </div>
  );
}

// Services Data
const services = [
  {
    icon: Target,
    title: "AI Platform Ranking",
    description: "Optimize your presence for ChatGPT, Gemini, Copilot, Claude, and other AI assistants to appear in recommendations.",
    color: "bg-gradient-to-br from-blue-500 to-cyan-500"
  },
  {
    icon: Shield,
    title: "Brand Entity Authority",
    description: "Establish your brand as a trusted entity that AI models recognize and recommend with confidence.",
    color: "bg-gradient-to-br from-purple-500 to-pink-500"
  },
  {
    icon: Zap,
    title: "AI-Readable Content",
    description: "Transform your content into formats that AI models easily understand and reference in their responses.",
    color: "bg-gradient-to-br from-orange-500 to-yellow-500"
  },
  {
    icon: Users,
    title: "Local AI Visibility",
    description: "Dominate local AI search results when users ask for recommendations in your geographic area.",
    color: "bg-gradient-to-br from-green-500 to-emerald-500"
  },
  {
    icon: BarChart,
    title: "Performance Analytics",
    description: "Track your AI search performance across platforms with detailed reports and insights.",
    color: "bg-gradient-to-br from-indigo-500 to-blue-500"
  },
  {
    icon: Globe,
    title: "Global AI Strategy",
    description: "Multi-language optimization for international businesses targeting global AI search markets.",
    color: "bg-gradient-to-br from-cyan-500 to-teal-500"
  }
];

// FAQ Data
const faqs = [
  {
    question: "How long until I see results?",
    answer: "Most clients see initial AI visibility improvements within 4-6 weeks. Full optimization typically takes 3 months as AI models learn and recognize your enhanced brand signals."
  },
  {
    question: "Is this different from traditional SEO?",
    answer: "Yes. While SEO focuses on Google's algorithm, AI Optimization prepares your brand for conversational AI, entity recognition, and the trust signals that AI assistants prioritize."
  },
  {
    question: "Do you work with international businesses?",
    answer: "Absolutely! We optimize for global AI platforms with strategies tailored to different languages, cultural contexts, and regional AI assistant preferences."
  },
  {
    question: "What's included in the free AI audit?",
    answer: "Our comprehensive audit includes analysis of your current AI visibility, competitor benchmarking, platform-specific recommendations, and a personalized roadmap for improvement."
  }
];