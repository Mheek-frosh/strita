'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FiArrowRight } from 'react-icons/fi';

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    
    // Address
    address: '',
    city: '',
    state: '',
    
    // Additional Info
    occupation: '',
    maritalStatus: '',
    baptismStatus: '',
    interestedMinistry: '',
    emergencyContact: '',
    emergencyContactPhone: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      toast.success('Registration successful! Welcome to St. Rita\'s Church');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dateOfBirth: '',
        address: '',
        city: '',
        state: '',
        occupation: '',
        maritalStatus: '',
        baptismStatus: '',
        interestedMinistry: '',
        emergencyContact: '',
        emergencyContactPhone: '',
      });
      setStep(1);
      setLoading(false);
    }, 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <main className="pt-24 min-h-screen pb-16">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-navy to-navy-dark text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Join Our <span className="text-gold">Parish</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-cream text-opacity-90"
          >
            Become part of our faith community
          </motion.p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 md:py-24 bg-cream dark:bg-navy">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="bg-white dark:bg-navy-dark rounded-2xl shadow-2xl p-8 md:p-12"
          >
            {/* Progress Indicator */}
            <div className="flex justify-between mb-12">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${
                      step >= s
                        ? 'bg-gold text-navy'
                        : 'bg-gray-300 text-gray-600'
                    }`}
                  >
                    {s}
                  </div>
                  <p className="text-sm mt-2 text-center text-navy dark:text-cream">
                    {s === 1 ? 'Personal Info' : s === 2 ? 'Details' : 'Confirmation'}
                  </p>
                  {s < 3 && (
                    <div
                      className={`h-1 w-12 mt-3 transition-all ${
                        step > s ? 'bg-gold' : 'bg-gray-300'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Personal Information */}
              {step === 1 && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-navy dark:text-cream mb-6">
                    Personal Information
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-navy dark:text-cream font-semibold mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-cream dark:bg-navy border-2 border-gold border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                      />
                    </div>

                    <div>
                      <label className="block text-navy dark:text-cream font-semibold mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-cream dark:bg-navy border-2 border-gold border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-navy dark:text-cream font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-cream dark:bg-navy border-2 border-gold border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-navy dark:text-cream font-semibold mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-cream dark:bg-navy border-2 border-gold border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                      />
                    </div>

                    <div>
                      <label className="block text-navy dark:text-cream font-semibold mb-2">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-cream dark:bg-navy border-2 border-gold border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Additional Details */}
              {step === 2 && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-navy dark:text-cream mb-6">
                    Additional Information
                  </h2>

                  <div>
                    <label className="block text-navy dark:text-cream font-semibold mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-cream dark:bg-navy border-2 border-gold border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-navy dark:text-cream font-semibold mb-2">
                        City/Area
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-cream dark:bg-navy border-2 border-gold border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                      />
                    </div>

                    <div>
                      <label className="block text-navy dark:text-cream font-semibold mb-2">
                        State
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-cream dark:bg-navy border-2 border-gold border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-navy dark:text-cream font-semibold mb-2">
                        Occupation
                      </label>
                      <input
                        type="text"
                        name="occupation"
                        value={formData.occupation}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-cream dark:bg-navy border-2 border-gold border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                      />
                    </div>

                    <div>
                      <label className="block text-navy dark:text-cream font-semibold mb-2">
                        Marital Status
                      </label>
                      <select
                        name="maritalStatus"
                        value={formData.maritalStatus}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-cream dark:bg-navy border-2 border-gold border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                      >
                        <option value="">Select...</option>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Divorced">Divorced</option>
                        <option value="Widowed">Widowed</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-navy dark:text-cream font-semibold mb-2">
                      Baptism Status
                    </label>
                    <select
                      name="baptismStatus"
                      value={formData.baptismStatus}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-cream dark:bg-navy border-2 border-gold border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                    >
                      <option value="">Select...</option>
                      <option value="Catholic">Catholic Baptized</option>
                      <option value="Non-Catholic">Other Christian</option>
                      <option value="Non-Christian">Non-Christian</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-navy dark:text-cream font-semibold mb-2">
                      Interested Ministry
                    </label>
                    <select
                      name="interestedMinistry"
                      value={formData.interestedMinistry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-cream dark:bg-navy border-2 border-gold border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                    >
                      <option value="">Select...</option>
                      <option value="Choir">Choir</option>
                      <option value="Youth">Youth Ministry</option>
                      <option value="Altar">Altar Servers</option>
                      <option value="Catechism">Catechism</option>
                      <option value="Charity">Charity Outreach</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Confirmation */}
              {step === 3 && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-navy dark:text-cream mb-6">
                    Emergency Contact
                  </h2>

                  <div>
                    <label className="block text-navy dark:text-cream font-semibold mb-2">
                      Emergency Contact Name *
                    </label>
                    <input
                      type="text"
                      name="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-cream dark:bg-navy border-2 border-gold border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-navy dark:text-cream font-semibold mb-2">
                      Emergency Contact Phone *
                    </label>
                    <input
                      type="tel"
                      name="emergencyContactPhone"
                      value={formData.emergencyContactPhone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-cream dark:bg-navy border-2 border-gold border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>

                  {/* Review Section */}
                  <div className="bg-gold bg-opacity-10 p-6 rounded-lg my-8 border-l-4 border-gold">
                    <h3 className="font-bold text-navy dark:text-cream mb-4">Review Your Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-navy dark:text-cream">
                      <div>
                        <p className="font-semibold text-opacity-70">Name:</p>
                        <p>{formData.firstName} {formData.lastName}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-opacity-70">Email:</p>
                        <p>{formData.email}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-opacity-70">Phone:</p>
                        <p>{formData.phone}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-opacity-70">Interested Ministry:</p>
                        <p>{formData.interestedMinistry || 'Not specified'}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-cream dark:bg-navy rounded-lg">
                    <input
                      type="checkbox"
                      id="terms"
                      required
                      className="mt-1"
                    />
                    <label htmlFor="terms" className="text-sm text-navy dark:text-cream">
                      I agree to receive updates from St. Rita's Church and confirm that the information provided is accurate.
                    </label>
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-4 pt-8">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="flex-1 px-6 py-3 border-2 border-gold text-gold rounded-lg font-semibold hover:bg-gold hover:text-navy transition-all"
                  >
                    Back
                  </button>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className={`flex-1 px-6 py-3 rounded-lg font-semibold inline-flex items-center justify-center gap-2 disabled:opacity-50 transition-all ${
                    step === 3
                      ? 'bg-gold text-navy hover:shadow-lg'
                      : 'bg-burgundy text-cream hover:bg-opacity-90'
                  }`}
                >
                  {loading ? 'Processing...' : step === 3 ? 'Complete Registration' : 'Next'}
                  {!loading && <FiArrowRight className="w-5 h-5" />}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
