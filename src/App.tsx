import React, { useState } from 'react';
import {
  BookOpen,
  GraduationCap,
  Mail,
  CheckCircle2,
  Calendar,
  DollarSign,
  AlertCircle,
  BookCheck,
  Menu,
  X,
  Clock,
  Users,
  Video,
  ChevronRight
} from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll to top when clicking brand name
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Smooth scroll for navbar links
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 64; // Adjust if your nav height differs
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white/90 backdrop-blur-lg z-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={scrollToTop}
              className="text-[#11439e] font-bold hover:opacity-80 transition-opacity"
            >
              Cornerstone Accounting
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop navigation */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#upcoming-event"
                onClick={(e) => handleNavClick(e, 'upcoming-event')}
                className="text-gray-600 hover:text-[#11439e] transition-colors"
              >
                Upcoming Event
              </a>
              <a
                href="#courses"
                onClick={(e) => handleNavClick(e, 'courses')}
                className="text-gray-600 hover:text-[#11439e] transition-colors"
              >
                Courses
              </a>
              <a
                href="#instructor"
                onClick={(e) => handleNavClick(e, 'instructor')}
                className="text-gray-600 hover:text-[#11439e] transition-colors"
              >
                Instructor
              </a>
              <a
                href="#apply"
                onClick={(e) => handleNavClick(e, 'apply')}
                className="text-gray-600 hover:text-[#11439e] transition-colors"
              >
                Apply
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="text-gray-600 hover:text-[#11439e] transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4 border-t border-gray-100">
              <a
                href="#upcoming-event"
                onClick={(e) => handleNavClick(e, 'upcoming-event')}
                className="block px-4 py-2 text-gray-600 hover:text-[#11439e] hover:bg-gray-50 rounded-lg transition-colors"
              >
                Upcoming Event
              </a>
              <a
                href="#courses"
                onClick={(e) => handleNavClick(e, 'courses')}
                className="block px-4 py-2 text-gray-600 hover:text-[#11439e] hover:bg-gray-50 rounded-lg transition-colors"
              >
                Courses
              </a>
              <a
                href="#instructor"
                onClick={(e) => handleNavClick(e, 'instructor')}
                className="block px-4 py-2 text-gray-600 hover:text-[#11439e] hover:bg-gray-50 rounded-lg transition-colors"
              >
                Instructor
              </a>
              <a
                href="#apply"
                onClick={(e) => handleNavClick(e, 'apply')}
                className="block px-4 py-2 text-gray-600 hover:text-[#11439e] hover:bg-gray-50 rounded-lg transition-colors"
              >
                Apply
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="block px-4 py-2 text-gray-600 hover:text-[#11439e] hover:bg-gray-50 rounded-lg transition-colors"
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-[#11439e] to-[#1a56b8] text-white overflow-hidden">
        <div className="container relative mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6">
              Spring 2025 Enrollment Now Open
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 md:mb-8 tracking-tight leading-tight">
              QuickBooks Training by Cornerstone Accounting
            </h1>
            <p className="text-lg md:text-2xl mb-8 md:mb-12 text-gray-100 max-w-3xl mx-auto">
              Looking for training with an industry expert who has decades of
              experience in QuickBooks? You're in the right place!
            </p>
            <a
              href="#upcoming-event"
              onClick={(e) => handleNavClick(e, 'upcoming-event')}
              className="inline-block bg-[#c0954f] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-[#ab844a] transition-all duration-300 transform hover:scale-105 shadow-lg mr-4"
            >
              View Upcoming Event
            </a>
            <a
              href="#apply"
              onClick={(e) => handleNavClick(e, 'apply')}
              className="inline-block bg-transparent border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-white hover:text-[#11439e] transition-all duration-300 transform hover:scale-105"
            >
              Apply Now
            </a>
          </div>
        </div>
      </header>

      {/* Featured Upcoming Event Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-pink-50 via-white to-pink-50 relative overflow-hidden" id="upcoming-event">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-pink-200/30 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-200/20 to-transparent rounded-full translate-y-48 -translate-x-48"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            {/* Event announcement banner */}
            <div className="text-center mb-12">
              <div className="inline-block px-6 py-2 bg-[#11439e] text-white rounded-full text-sm font-medium mb-4">
                🎉 Featured Event - Limited Seats Available
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#11439e] mb-4 leading-tight">
                QuickBooks Online Virtual Training<br />
                <span className="text-3xl md:text-4xl">for Beginners</span>
              </h2>
              <div className="inline-block px-4 py-2 bg-[#11439e]/10 rounded-lg text-[#11439e] font-semibold">
                Saturday, June 21, 2025 • 9:00 a.m. – 1:00 p.m. (ChST) • Via Zoom
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left column - Hero image and intro */}
              <div className="space-y-6">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                    alt="QuickBooks training workspace with laptop and coffee"
                    className="rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-100">
                  <p className="text-lg leading-relaxed">
                    <strong className="text-[#11439e]">Get started with confidence!</strong> This live, instructor-led
                    training is designed especially for small business owners,
                    bookkeepers, and new users looking to master the essentials
                    of QuickBooks Online.
                  </p>
                </div>
              </div>

              {/* Right column - What you'll learn and details */}
              <div className="space-y-8">
                {/* What You'll Learn */}
                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                  <h3 className="text-2xl font-bold text-[#11439e] mb-6 flex items-center">
                    <BookOpen className="mr-3" size={28} />
                    What You'll Learn:
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#c0954f] mr-3 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">Navigating the QuickBooks Online dashboard</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#c0954f] mr-3 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">Setting up your company profile</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#c0954f] mr-3 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">Categorizing and recording income and expenses</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#c0954f] mr-3 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">Creating and managing invoices, bills, and payments</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#c0954f] mr-3 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">Running basic reports</span>
                    </li>
                  </ul>
                </div>

                {/* Event Details */}
                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                  <h3 className="text-2xl font-bold text-[#11439e] mb-6">Event Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Calendar className="text-[#11439e] mr-3 flex-shrink-0" size={20} />
                      <span className="text-gray-700">Saturday, June 21, 2025</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="text-[#11439e] mr-3 flex-shrink-0" size={20} />
                      <span className="text-gray-700">9:00 a.m. – 1:00 p.m. (ChST)</span>
                    </div>
                    <div className="flex items-center">
                      <Video className="text-[#11439e] mr-3 flex-shrink-0" size={20} />
                      <span className="text-gray-700">Via Zoom (link provided after registration)</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="text-[#11439e] mr-3 flex-shrink-0" size={20} />
                      <span className="text-gray-700">Perfect for beginners and small business owners</span>
                    </div>
                  </div>
                </div>

                {/* Pricing */}
                <div className="bg-gradient-to-r from-[#11439e] to-[#1a56b8] rounded-2xl shadow-xl p-6 md:p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Investment & Early Bird Special</h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-lg">
                      <DollarSign className="mr-2 flex-shrink-0" size={20} />
                      <span><strong>Registration Fee:</strong> $499 per person</span>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="flex items-center text-lg font-semibold text-yellow-200">
                        <AlertCircle className="mr-2 flex-shrink-0" size={20} />
                        <span>Register by June 14, 2025 to receive $50 off!</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Registration CTA */}
                <div className="text-center space-y-4">
                  <a
                    href="https://forms.gle/rLRuXmcC8CpKr1Mg8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-[#c0954f] to-[#d4a661] text-white px-8 py-4 rounded-full font-bold text-lg hover:from-[#ab844a] hover:to-[#c0954f] transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Register Now
                    <ChevronRight className="inline ml-2" size={20} />
                  </a>
                  <p className="text-sm text-gray-600">
                    Questions? Contact us at:{' '}
                    <a 
                      href="mailto:cornerstone.acctgtraining@gmail.com"
                      className="text-[#11439e] hover:underline"
                    >
                      cornerstone.acctgtraining@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-12 md:py-20" id="instructor">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex-1 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#11439e] tracking-tight">
                  Expert QuickBooks Training
                </h2>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Led by Dafne Mansapit-Shimizu, CPA, MPA
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    With over three decades of experience in accounting and
                    QuickBooks implementation, Dafne has been successful at helping
                    organizations both in the public and private sectors optimize
                    their financial operations. Her expertise spans across various
                    industries, making her uniquely qualified to address diverse
                    business needs and scenarios.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 md:p-6 rounded-xl">
                  <h4 className="font-semibold mb-3">Required Materials:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <AlertCircle
                        className="text-[#c0954f] mr-3 mt-1 flex-shrink-0"
                        size={18}
                      />
                      <span>
                        QuickBooks Online Essentials subscription (not included
                        in course fee)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <BookCheck
                        className="text-[#c0954f] mr-3 mt-1 flex-shrink-0"
                        size={18}
                      />
                      <span>
                        Cornerstone QB Online Guide (included with registration)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full md:w-1/3 flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=600"
                  alt="Professional accounting workspace with calculator and financial documents"
                  className="rounded-2xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-12 md:py-20 bg-gray-50" id="courses">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-[#11439e] tracking-tight">
            Our Courses
          </h2>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* QuickBooks Online Basics */}
            <div className="glass-effect rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-[#11439e]/10 rounded-xl">
                  <BookOpen className="text-[#11439e]" size={28} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold ml-4">
                  QuickBooks Online Basics
                </h3>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-lg">Learning Outcomes:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2
                      className="text-[#c0954f] mr-3 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <span>
                      Set up and customize your QuickBooks Online account
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2
                      className="text-[#c0954f] mr-3 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <span>
                      Create and manage chart of accounts effectively
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2
                      className="text-[#c0954f] mr-3 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <span>Handle vendor and customer management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2
                      className="text-[#c0954f] mr-3 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <span>Perform bank reconciliations with confidence</span>
                  </li>
                </ul>
              </div>


            </div>

            {/* QuickBooks Online Advanced */}
            <div className="glass-effect rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-[#11439e]/10 rounded-xl">
                  <GraduationCap className="text-[#11439e]" size={28} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold ml-4">
                  QuickBooks Online Advanced
                </h3>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-lg">Learning Outcomes:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2
                      className="text-[#c0954f] mr-3 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <span>
                      Master advanced QuickBooks features and workflows
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2
                      className="text-[#c0954f] mr-3 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <span>Apply accounting principles to business scenarios</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2
                      className="text-[#c0954f] mr-3 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <span>Generate and analyze financial reports</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2
                      className="text-[#c0954f] mr-3 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <span>Optimize business processes using QuickBooks</span>
                  </li>
                </ul>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-[#11439e] tracking-tight">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4 md:space-y-6">
              <div className="glass-effect rounded-xl p-4 md:p-6">
                <h3 className="font-semibold text-lg mb-2">
                  What if I miss a class?
                </h3>
                <p className="text-gray-600">
                  While we encourage attending all sessions, we understand
                  things come up. You'll receive the session materials, and your
                  instructor can briefly review the missed content in the next
                  class.
                </p>
              </div>

              <div className="glass-effect rounded-xl p-4 md:p-6">
                <h3 className="font-semibold text-lg mb-2">
                  How do I pay for the course?
                </h3>
                <p className="text-gray-600">
                  After your application is accepted, we'll provide payment
                  instructions. We accept major credit cards and bank transfers.
                </p>
              </div>

              <div className="glass-effect rounded-xl p-4 md:p-6">
                <h3 className="font-semibold text-lg mb-2">
                  Is there a refund policy?
                </h3>
                <p className="text-gray-600">
                  Full refunds are available up to 7 days before the course
                  starts. After that, we can transfer your registration to a
                  future course date.
                </p>
              </div>

              <div className="glass-effect rounded-xl p-4 md:p-6">
                <h3 className="font-semibold text-lg mb-2">
                  Do I need prior accounting knowledge?
                </h3>
                <p className="text-gray-600">
                  No prior accounting experience is required for the Basics
                  course. The Advanced course assumes basic QuickBooks
                  knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Link Instead of Local Form */}
      <section className="py-12 md:py-20 bg-gray-50" id="apply">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-[#11439e] tracking-tight">
              Apply Now
            </h2>
            <p className="text-gray-600 text-lg md:text-xl mb-8">
              Please fill out our official Google Form to apply and upload your
              required documents. You'll be asked to sign in with a Google
              account to complete the file upload.
            </p>
            <a
              href="https://forms.gle/rLRuXmcC8CpKr1Mg8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#c0954f] text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold
                         hover:bg-[#ab844a] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Go to Google Form
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-20" id="contact">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-[#11439e] tracking-tight">
              Contact Us
            </h2>
            <p className="text-lg md:text-xl mb-8 md:mb-12 text-gray-600">
              Questions? Concerns? Contact us any time.
            </p>

            <div className="inline-block glass-effect rounded-xl p-4 md:p-6">
              <div className="flex flex-col md:flex-row items-center justify-center gap-2">
                <Mail className="text-[#c0954f] mb-2 md:mb-0 md:mr-3" size={24} />
                <a
                  href="mailto:cornerstone.acctgtraining@gmail.com"
                  className="text-[#11439e] hover:underline text-lg break-all"
                >
                  cornerstone.acctgtraining@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#11439e] text-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-base md:text-lg">
              © 2025 Cornerstone Accounting and Business Management Consulting
              Company
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
