import React, { useState } from 'react';
import { BookOpen, GraduationCap, Mail, CheckCircle2, Calendar, DollarSign, AlertCircle, User, Clock, BookCheck, Menu, X } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<{
    show: boolean;
    type: 'success' | 'error';
    message: string;
  }>({ show: false, type: 'success', message: '' });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({
      show: true,
      type: 'success',
      message: 'Thanks for applying! We will contact you soon.'
    });
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 64; // Height of the navbar (16 * 4 = 64px)
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
              <a href="#courses" onClick={(e) => handleNavClick(e, 'courses')} className="text-gray-600 hover:text-[#11439e] transition-colors">Courses</a>
              <a href="#instructor" onClick={(e) => handleNavClick(e, 'instructor')} className="text-gray-600 hover:text-[#11439e] transition-colors">Instructor</a>
              <a href="#apply" onClick={(e) => handleNavClick(e, 'apply')} className="text-gray-600 hover:text-[#11439e] transition-colors">Apply</a>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-gray-600 hover:text-[#11439e] transition-colors">Contact</a>
            </div>
          </div>

          {/* Mobile navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4 border-t border-gray-100">
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
              Looking for training with an industry expert who has decades of experience in QuickBooks? You're in the right place!
            </p>
            <a 
              href="#apply" 
              onClick={(e) => handleNavClick(e, 'apply')}
              className="inline-block bg-[#c0954f] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-[#ab844a] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Apply Now
            </a>
          </div>
        </div>
      </header>

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
                  <h3 className="text-xl font-semibold mb-2">Led by Dafne Mansapit-Shimizu, CPA, MPA</h3>
                  <p className="text-gray-600 leading-relaxed">
                    With over two decades of experience in accounting and QuickBooks implementation, Dafne has helped hundreds of businesses optimize their financial operations. Her expertise spans across various industries, making her uniquely qualified to address diverse business needs and scenarios.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 md:p-6 rounded-xl">
                  <h4 className="font-semibold mb-3">Required Materials:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <AlertCircle className="text-[#c0954f] mr-3 mt-1 flex-shrink-0" size={18} />
                      <span>QuickBooks Online Essentials subscription (not included in course fee)</span>
                    </li>
                    <li className="flex items-start">
                      <BookCheck className="text-[#c0954f] mr-3 mt-1 flex-shrink-0" size={18} />
                      <span>Cornerstone QB Online Guide (included with registration)</span>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-[#11439e] tracking-tight">Our Courses</h2>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* QuickBooks Online Basics */}
            <div className="glass-effect rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-[#11439e]/10 rounded-xl">
                  <BookOpen className="text-[#11439e]" size={28} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold ml-4">QuickBooks Online Basics</h3>
              </div>
              
              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-lg">Learning Outcomes:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#c0954f] mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>Set up and customize your QuickBooks Online account</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#c0954f] mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>Create and manage chart of accounts effectively</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#c0954f] mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>Handle vendor and customer management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#c0954f] mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>Perform bank reconciliations with confidence</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="bg-white/50 p-4 md:p-6 rounded-xl">
                  <p className="font-semibold text-lg mb-4">Option A: Course Only</p>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-start">
                      <Calendar className="text-[#11439e] mr-3 mt-1 flex-shrink-0" size={18} />
                      <span>February 3 & 10, 2025 (Mondays 6-8 p.m. ChST)</span>
                    </div>
                    <div className="flex items-start">
                      <DollarSign className="text-[#11439e] mr-3 mt-1 flex-shrink-0" size={18} />
                      <span>$650 (includes Cornerstone QB Online Essentials Guide)</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/50 p-4 md:p-6 rounded-xl">
                  <p className="font-semibold text-lg mb-4">Option B: Course + Support</p>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-start">
                      <Calendar className="text-[#11439e] mr-3 mt-1 flex-shrink-0" size={18} />
                      <span>February 3, 10, 17, 24, 2025 (6-8 p.m. ChST)</span>
                    </div>
                    <div className="flex items-start">
                      <DollarSign className="text-[#11439e] mr-3 mt-1 flex-shrink-0" size={18} />
                      <span>$1,200 (includes Guide + 4 hours one-on-one support)</span>
                    </div>
                    <p className="text-sm mt-2 ml-7">
                      Support includes dedicated one-on-one time with our expert to help set up your QuickBooks account and address specific questions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* QuickBooks Online Advanced */}
            <div className="glass-effect rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-[#11439e]/10 rounded-xl">
                  <GraduationCap className="text-[#11439e]" size={28} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold ml-4">QuickBooks Online Advanced</h3>
              </div>
              
              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-lg">Learning Outcomes:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#c0954f] mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>Master advanced QuickBooks features and workflows</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#c0954f] mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>Apply accounting principles to business scenarios</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#c0954f] mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>Generate and analyze financial reports</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#c0954f] mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>Optimize business processes using QuickBooks</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/50 p-4 md:p-6 rounded-xl">
                <p className="font-semibold text-lg mb-4">Schedule & Details:</p>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-start mb-3">
                    <Calendar className="text-[#11439e] mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>4 weeks - March 2025 (6-8 p.m. ChST)</span>
                  </div>
                  <ul className="space-y-2 ml-8">
                    <li>Week 1: March 10 (Monday)</li>
                    <li>Week 2: March 17 (Monday)</li>
                    <li>Week 3: March 25 (Tuesday)</li>
                    <li>Week 4: March 31 (Monday)</li>
                  </ul>
                  <div className="flex items-start mt-3">
                    <DollarSign className="text-[#11439e] mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>$1,200 (includes Advanced QB Guide)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-[#11439e] tracking-tight">Frequently Asked Questions</h2>
            
            <div className="space-y-4 md:space-y-6">
              <div className="glass-effect rounded-xl p-4 md:p-6">
                <h3 className="font-semibold text-lg mb-2">What if I miss a class?</h3>
                <p className="text-gray-600">While we encourage attending all sessions, we understand things come up. You'll receive the session materials, and your instructor can briefly review the missed content in the next class.</p>
              </div>
              
              <div className="glass-effect rounded-xl p-4 md:p-6">
                <h3 className="font-semibold text-lg mb-2">How do I pay for the course?</h3>
                <p className="text-gray-600">After your application is accepted, we'll provide payment instructions. We accept major credit cards and bank transfers.</p>
              </div>
              
              <div className="glass-effect rounded-xl p-4 md:p-6">
                <h3 className="font-semibold text-lg mb-2">Is there a refund policy?</h3>
                <p className="text-gray-600">Full refunds are available up to 7 days before the course starts. After that, we can transfer your registration to a future course date.</p>
              </div>
              
              <div className="glass-effect rounded-xl p-4 md:p-6">
                <h3 className="font-semibold text-lg mb-2">Do I need prior accounting knowledge?</h3>
                <p className="text-gray-600">No prior accounting experience is required for the Basics course. The Advanced course assumes basic QuickBooks knowledge.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-12 md:py-20 bg-gray-50" id="apply">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-[#11439e] tracking-tight">Apply Now</h2>
            
            <form onSubmit={handleSubmit} className="glass-effect rounded-2xl shadow-xl p-6 md:p-8">
              {formStatus.show && (
                <div className={`mb-6 p-4 rounded-xl ${formStatus.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                  {formStatus.message}
                </div>
              )}

              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#11439e] focus:border-transparent transition-shadow duration-200"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#11439e] focus:border-transparent transition-shadow duration-200"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#11439e] focus:border-transparent transition-shadow duration-200"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="course" className="block text-gray-700 font-medium mb-2">Select Course</label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#11439e] focus:border-transparent transition-shadow duration-200"
                  required
                >
                  <option value="">Select a course...</option>
                  <option value="basics-a">QuickBooks Online Basics - Option A</option>
                  <option value="basics-b">QuickBooks Online Basics - Option B</option>
                  <option value="advanced">QuickBooks Online Advanced</option>
                </select>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#11439e] focus:border-transparent transition-shadow duration-200"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#11439e] text-white px-6 py-4 rounded-xl font-semibold hover:bg-[#0d3580] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-20" id="contact">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-[#11439e] tracking-tight">Contact Us</h2>
            <p className="text-lg md:text-xl mb-8 md:mb-12 text-gray-600">Questions? Concerns? Contact us any time.</p>
            
            <div className="inline-block glass-effect rounded-xl p-4 md:p-6">
              <div className="flex flex-col md:flex-row items-center justify-center gap-2">
                <Mail className="text-[#c0954f] mb-2 md:mb-0 md:mr-3" size={24} />
                <a href="mailto:cornerstone.acctgtraining@gmail.com" className="text-[#11439e] hover:underline text-lg break-all">
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
            <p className="text-base md:text-lg">© 2025 Cornerstone Accounting and Business Management Consulting Company</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;