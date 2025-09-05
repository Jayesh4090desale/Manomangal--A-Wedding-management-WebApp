import React, { useState } from 'react';
import { Calendar, MapPin, Phone, Mail, Star, Users, Car, Utensils, Camera, ChevronLeft, ChevronRight, Menu, X, CheckCircle, Heart, Award, Shield } from 'lucide-react';

const ManomangalWebsite = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    guestCount: '',
    eventType: '',
    message: ''
  });

  // Your lawn images and data
  const lawnImages = [
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?w=1200&h=800&fit=crop"
  ];

  const services = [
    { icon: <Utensils className="h-8 w-8" />, title: "Premium Catering", desc: "Multi-cuisine dining with expert chefs" },
    { icon: <Camera className="h-8 w-8" />, title: "Photography Setup", desc: "Beautiful backdrops and lighting arrangements" },
    { icon: <Car className="h-8 w-8" />, title: "Ample Parking", desc: "Spacious parking for 200+ vehicles" },
    { icon: <Users className="h-8 w-8" />, title: "Event Coordination", desc: "Dedicated team for seamless event management" },
    { icon: <Heart className="h-8 w-8" />, title: "Decoration Services", desc: "Traditional and modern decoration options" },
    { icon: <Shield className="h-8 w-8" />, title: "Security & Safety", desc: "24/7 security with CCTV surveillance" }
  ];

  const packages = [
    {
      name: "Basic Wedding Package",
      price: "₹2,50,000",
      features: ["Venue for 8 hours", "Basic decoration", "Sound system", "Parking facility", "Security"],
      capacity: "300-400 guests"
    },
    {
      name: "Premium Wedding Package",
      price: "₹4,50,000",
      features: ["Venue for 12 hours", "Premium decoration", "DJ & sound system", "Basic catering setup", "Photography area", "Bridal room"],
      capacity: "400-600 guests",
      popular: true
    },
    {
      name: "Royal Wedding Package",
      price: "₹7,50,000",
      features: ["Venue for 24 hours", "Royal decoration", "Live music setup", "Full catering service", "Photography & videography setup", "Bridal suite", "Valet parking"],
      capacity: "600-1000 guests"
    }
  ];

  const testimonials = [
    {
      name: "Priya & Arjun Sharma",
      text: "Manomangal made our dream wedding come true! The venue was absolutely stunning and the staff was incredibly helpful.",
      rating: 5,
      date: "December 2023"
    },
    {
      name: "Deepika & Rohit Patel",
      text: "Perfect venue for our reception. The decoration and catering services exceeded our expectations. Highly recommended!",
      rating: 5,
      date: "November 2023"
    },
    {
      name: "Anjali & Vikram Singh",
      text: "Beautiful lawn with excellent facilities. The team handled everything professionally. Our guests loved the venue!",
      rating: 5,
      date: "October 2023"
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => prev === lawnImages.length - 1 ? 0 : prev + 1);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => prev === 0 ? lawnImages.length - 1 : prev - 1);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const message = `Hi! I want to book Manomangal Lawns for my ${bookingForm.eventType}.
    
Details:
Name: ${bookingForm.name}
Phone: ${bookingForm.phone}
Email: ${bookingForm.email}
Date: ${bookingForm.date}
Guest Count: ${bookingForm.guestCount}
Message: ${bookingForm.message}

Please confirm availability and share pricing details.`;
    
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInputChange = (e) => {
    setBookingForm({
      ...bookingForm,
      [e.target.name]: e.target.value
    });
  };

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'packages', label: 'Packages' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'contact', label: 'Contact' }
  ];

  const renderSection = () => {
    switch(currentSection) {
      case 'home':
        return (
          <div className="space-y-16">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0">
                <img 
                  src={lawnImages[currentImageIndex]} 
                  alt="Manomangal Lawns"
                  className="w-full h-full object-cover transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>
              
              <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  Manomangal<br />
                  <span className="text-pink-400">Marriage Lawns</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                  Where Dreams Meet Tradition - Your Perfect Wedding Destination
                </p>
                <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
                  <button 
                    onClick={() => setCurrentSection('contact')}
                    className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Book Your Event
                  </button>
                  <button 
                    onClick={() => setCurrentSection('gallery')}
                    className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                  >
                    View Gallery
                  </button>
                </div>
              </div>

              {/* Image Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 rounded-full p-3 hover:bg-opacity-40 transition-all z-10"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 rounded-full p-3 hover:bg-opacity-40 transition-all z-10"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>

              {/* Image Dots */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {lawnImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                    }`}
                  />
                ))}
              </div>
            </section>

            {/* Quick Info */}
            <section className="py-16 bg-gradient-to-r from-pink-50 to-purple-50">
              <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <Users className="h-12 w-12 text-pink-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900">1000+</h3>
                    <p className="text-gray-600">Guest Capacity</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <Award className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900">500+</h3>
                    <p className="text-gray-600">Events Hosted</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900">4.9/5</h3>
                    <p className="text-gray-600">Customer Rating</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <Car className="h-12 w-12 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900">200+</h3>
                    <p className="text-gray-600">Parking Spaces</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );

      case 'about':
        return (
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">About Manomangal Lawns</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    For over a decade, Manomangal Marriage Lawns has been the preferred choice for families seeking the perfect venue for their special celebrations. Located in the heart of the city, our sprawling green lawns provide an enchanting backdrop for weddings, receptions, and other memorable events.
                  </p>
                  <p className="text-lg text-gray-700 mb-6">
                    We understand that every wedding is unique, and our dedicated team works tirelessly to ensure your vision comes to life. From intimate gatherings to grand celebrations, we have the expertise and facilities to make your event truly unforgettable.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">10+ Years Experience</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Expert Team</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Premium Facilities</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">24/7 Support</span>
                    </div>
                  </div>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=400&fit=crop"
                    alt="About Manomangal"
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>
        );

      case 'services':
        return (
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Complete wedding solutions under one roof
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="text-pink-500 mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'packages':
        return (
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Wedding Packages</h2>
                <p className="text-xl text-gray-600">Choose the perfect package for your special day</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {packages.map((pkg, index) => (
                  <div key={index} className={`bg-white rounded-lg shadow-lg overflow-hidden ${pkg.popular ? 'ring-4 ring-pink-500 transform scale-105' : ''}`}>
                    {pkg.popular && (
                      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center py-2">
                        <span className="font-semibold">Most Popular</span>
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                      <div className="text-3xl font-bold text-pink-600 mb-4">{pkg.price}</div>
                      <div className="text-gray-600 mb-4">Up to {pkg.capacity}</div>
                      <ul className="space-y-2 mb-6">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <button 
                        onClick={() => setCurrentSection('contact')}
                        className={`w-full py-3 rounded-lg font-semibold transition-all ${
                          pkg.popular 
                            ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700'
                            : 'border-2 border-pink-500 text-pink-600 hover:bg-pink-50'
                        }`}
                      >
                        Book This Package
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'gallery':
        return (
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
                <p className="text-xl text-gray-600">See our beautiful venue and past celebrations</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {lawnImages.map((image, index) => (
                  <div key={index} className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group">
                    <img 
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'testimonials':
        return (
          <section className="py-16 bg-gradient-to-r from-pink-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
                <p className="text-xl text-gray-600">Real reviews from real couples</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                    <div className="text-sm text-gray-600">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div>{testimonial.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'contact':
        return (
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-xl text-gray-600">Get in touch to book your perfect day</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Book Your Event</h3>
                    <form onSubmit={handleBookingSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={bookingForm.name}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                          required
                        />
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number"
                          value={bookingForm.phone}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={bookingForm.email}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        required
                      />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          type="date"
                          name="date"
                          value={bookingForm.date}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                          required
                        />
                        <select
                          name="eventType"
                          value={bookingForm.eventType}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                          required
                        >
                          <option value="">Select Event Type</option>
                          <option value="Wedding">Wedding</option>
                          <option value="Reception">Reception</option>
                          <option value="Engagement">Engagement</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <input
                        type="number"
                        name="guestCount"
                        placeholder="Expected Guest Count"
                        value={bookingForm.guestCount}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        required
                      />
                      <textarea
                        name="message"
                        placeholder="Additional Requirements"
                        rows="4"
                        value={bookingForm.message}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      ></textarea>
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
                      >
                        Send Booking Inquiry
                      </button>
                    </form>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <Phone className="h-6 w-6 text-pink-500" />
                        <div>
                          <div className="font-semibold">Phone</div>
                          <div className="text-gray-600">+91 7588736397</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Mail className="h-6 w-6 text-pink-500" />
                        <div>
                          <div className="font-semibold">Email</div>
                          <div className="text-gray-600">info@manomangallawns.com</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <MapPin className="h-6 w-6 text-pink-500" />
                        <div>
                          <div className="font-semibold">Vedu Anna Nagar, Shingave Shivar
</div>
                          <div className="text-gray-600">
                            Shingave Shivar, Near SPDM College,<br />
                            Shirpur, Dhule, Maharashtra,<br />
                            Shirpur - 425405
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Monday - Friday</span>
                        <span className="font-semibold">9:00 AM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Saturday - Sunday</span>
                        <span className="font-semibold">8:00 AM - 9:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white bg-opacity-95 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div 
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => setCurrentSection('home')}
            >
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Manomangal Lawns
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentSection(item.id)}
                  className={`font-medium transition-colors ${
                    currentSection === item.id
                      ? 'text-pink-600 border-b-2 border-pink-600'
                      : 'text-gray-700 hover:text-pink-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 border-t pt-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left py-2 font-medium transition-colors ${
                    currentSection === item.id
                      ? 'text-pink-600'
                      : 'text-gray-700 hover:text-pink-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {renderSection()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-2 rounded-lg">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Manomangal Lawns</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Creating unforgettable wedding memories for over a decade. Your dream wedding destination awaits.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.566-1.35 2.14-2.21z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.163-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.751-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => setCurrentSection('about')} className="text-gray-300 hover:text-pink-400 transition-colors">About Us</button></li>
                <li><button onClick={() => setCurrentSection('services')} className="text-gray-300 hover:text-pink-400 transition-colors">Services</button></li>
                <li><button onClick={() => setCurrentSection('packages')} className="text-gray-300 hover:text-pink-400 transition-colors">Packages</button></li>
                <li><button onClick={() => setCurrentSection('gallery')} className="text-gray-300 hover:text-pink-400 transition-colors">Gallery</button></li>
                <li><button onClick={() => setCurrentSection('contact')} className="text-gray-300 hover:text-pink-400 transition-colors">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-pink-400" />
                  <span className="text-gray-300">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-pink-400" />
                  <span className="text-gray-300">info@manomangallawns.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-pink-400" />
                  <span className="text-gray-300">Marriage Garden Area, Your City</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Manomangal Marriage Lawns. All rights reserved. | Designed with ❤️ for your special day
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => {
            const message = "Hi! I'm interested in booking Manomangal Lawns for my wedding. Please share more details.";
            const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
          }}
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110"
        >
          <Phone className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default ManomangalWebsite;