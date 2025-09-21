import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'bn' | 'en';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

// Translation dictionary
const translations = {
  bn: {
    // Navigation
    'nav.home': 'হোম',
    'nav.about': 'আমাদের সম্পর্কে',
    'nav.properties': 'প্রোপার্টি',
    'nav.services': 'সেবা',
    'nav.contact': 'যোগাযোগ',
    'nav.search': 'খুঁজুন',
    'nav.getStarted': 'শুরু করুন',
    
    // Hero Section
    'hero.title': 'HomeShare Pro',
    'hero.subtitle': 'আপনার স্বপ্নের প্রোপার্টি খুঁজে নিন',
    'hero.description': 'বাংলাদেশের সেরা প্রোপার্টি প্ল্যাটফর্মে আপনার জন্য উপযুক্ত বাড়ি, অ্যাপার্টমেন্ট বা বাণিজ্যিক স্থান খুঁজে নিন',
    'hero.cta.primary': 'প্রোপার্টি দেখুন',
    'hero.cta.secondary': 'আরো জানুন',
    
    // Search
    'search.title': 'প্রোপার্টি খুঁজুন',
    'search.subtitle': 'আমাদের উন্নত সার্চ টুল দিয়ে আপনার পছন্দের প্রোপার্টি খুঁজে নিন',
    'search.filters': 'সার্চ ফিল্টার',
    'search.filters.description': 'প্রোপার্টি খুঁজতে নিচের ফিল্টারগুলো ব্যবহার করুন',
    'search.placeholder': 'লোকেশন বা প্রোপার্টির নাম লিখুন...',
    'search.propertyType': 'প্রোপার্টির ধরন',
    'search.priceRange': 'মূল্য পরিসীমা',
    'search.allTypes': 'সকল ধরনের',
    'search.apartment': 'অ্যাপার্টমেন্ট',
    'search.villa': 'ভিলা',
    'search.commercial': 'কমার্শিয়াল',
    'search.land': 'জমি',
    'search.allPrices': 'সকল মূল্য',
    'search.price.0-50': '৳০ - ৳৫০ লাখ',
    'search.price.50-100': '৳৫০ লাখ - ৳১ কোটি',
    'search.price.100-200': '৳১ কোটি - ৳২ কোটি',
    'search.price.200+': '৳২ কোটি+',
    'search.filterActive': 'ফিল্টার সক্রিয় আছে',
    'search.clearFilters': 'ফিল্টার পরিষ্কার করুন',
    'search.searching': 'খুঁজছি...',
    'search.resultsFound': 'টি প্রোপার্টি পাওয়া গেছে',
    'search.results': 'ফলাফল',
    'search.noResults': 'কোন প্রোপার্টি পাওয়া যায়নি',
    'search.noResultsDescription': 'আপনার সার্চ অনুযায়ী কোন প্রোপার্টি খুঁজে পাওয়া যায়নি। ফিল্টার পরিবর্তন করে আবার চেষ্টা করুন।',
    'search.viewDetails': 'বিস্তারিত দেখুন',
    'search.bedrooms': 'বেডরুম',
    'search.bathrooms': 'বাথরুম',
    'search.area': 'এলাকা',
    'search.available': 'উপলব্ধ',
    'search.sold': 'বিক্রিত',
    
    // About
    'about.title': 'আমাদের সম্পর্কে',
    'about.subtitle': 'বাংলাদেশের বিশ্বস্ত প্রোপার্টি সমাধান',
    'about.description': 'আমরা মানুষের বাড়ি খোঁজার এবং তাদের স্বপ্ন বাস্তবায়নের পদ্ধতিতে বিপ্লব এনেছি। আমাদের প্ল্যাটফর্ম প্রিমিয়াম হাউস শেয়ারিং সুযোগের সাথে বিশেষজ্ঞ নির্মাণ সেবা যুক্ত করে, আপনার সকল আবাসন চাহিদার জন্য একটি সম্পূর্ণ সমাধান তৈরি করে।',
    'about.feature1.title': 'হাউস শেয়ারিং নেটওয়ার্ক',
    'about.feature1.description': 'আমাদের প্রিমিয়াম ম্যাচিং প্ল্যাটফর্মের মাধ্যমে যাচাইকৃত বাড়ির মালিক এবং ভাড়াটেদের সাথে যোগাযোগ করুন।',
    'about.feature2.title': 'মানসম্পন্ন প্রোপার্টি',
    'about.feature2.description': 'আধুনিক সুবিধা এবং প্রধান অবস্থানসহ সাবধানে নির্বাচিত প্রোপার্টিগুলিতে অ্যাক্সেস।',
    'about.feature3.title': 'কাস্টম হোম বিল্ডিং',
    'about.feature3.description': '৩ডি ডিজাইন প্রিভিউ এবং বিশেষজ্ঞ প্রকল্প ব্যবস্থাপনাসহ পেশাদার নির্মাণ সেবা।',
    'about.feature4.title': 'প্রিমিয়াম সেবা',
    'about.feature4.description': '২৪/৭ সহায়তা এবং সন্তুষ্টির গ্যারান্টিসহ পুরস্কারপ্রাপ্ত গ্রাহক সেবা।',
    'about.stats.title': 'সারাদেশে হাজারো মানুষের বিশ্বস্ত',
    'about.stats.description': 'রিয়েল এস্টেট এবং নির্মাণে ৫ বছরের অভিজ্ঞতার সাথে, আমরা হাজারো ক্লায়েন্টকে তাদের নিখুঁত বাড়ি খুঁজে পেতে এবং তাদের স্বপ্নের সম্পত্তি নির্মাণে সহায়তা করেছি।',
    'about.stats.experience': 'বছরের অভিজ্ঞতা',
    'about.stats.cities': 'শহরে সেবা',
    
    // Hero Stats
    'hero.stats.properties': 'প্রিমিয়াম প্রোপার্টি',
    'hero.stats.homes': 'বাড়ি নির্মিত',
    'hero.stats.satisfaction': 'ক্লায়েন্ট সন্তুষ্টি',
    'hero.button.building': 'নির্মাণ শুরু করুন',
    
    // Contact
    'contact.title': 'যোগাযোগ করুন',
    'contact.subtitle': 'আমাদের সাথে যোগাযোগ করুন',
    
    // How It Works
    'howItWorks.title': 'কীভাবে কাজ করে',
    'howItWorks.subtitle': 'সহজ ৩টি ধাপে আপনার প্রোপার্টি খুঁজে নিন',
    
    // Footer
    'footer.company': 'কোম্পানি',
    'footer.services': 'সেবাসমূহ',
    'footer.support': 'সাহায্য',
    'footer.legal': 'আইনি',
    'footer.allRightsReserved': 'সকল অধিকার সংরক্ষিত',
    
    // Common
    'common.loading': 'লোড হচ্ছে...',
    'common.error': 'ত্রুটি ঘটেছে',
    'common.tryAgain': 'আবার চেষ্টা করুন',
    'common.save': 'সংরক্ষণ করুন',
    'common.cancel': 'বাতিল',
    'common.submit': 'জমা দিন',
    'common.close': 'বন্ধ করুন',
    'common.next': 'পরবর্তী',
    'common.previous': 'পূর্ববর্তী',
    'common.viewAll': 'সব দেখুন',
    'common.readMore': 'আরো পড়ুন',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.properties': 'Properties',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.search': 'Search',
    'nav.getStarted': 'Get Started',
    
    // Hero Section
    'hero.title': 'HomeShare Pro',
    'hero.subtitle': 'Find Your Dream Property',
    'hero.description': 'Discover the perfect home, apartment, or commercial space on Bangladesh\'s premier property platform',
    'hero.cta.primary': 'View Properties',
    'hero.cta.secondary': 'Learn More',
    
    // Search
    'search.title': 'Property Search',
    'search.subtitle': 'Find your perfect property with our advanced search tools',
    'search.filters': 'Search Filters',
    'search.filters.description': 'Use the filters below to find properties',
    'search.placeholder': 'Search by location or property name...',
    'search.propertyType': 'Property Type',
    'search.priceRange': 'Price Range',
    'search.allTypes': 'All Types',
    'search.apartment': 'Apartment',
    'search.villa': 'Villa',
    'search.commercial': 'Commercial',
    'search.land': 'Land',
    'search.allPrices': 'All Prices',
    'search.price.0-50': '৳0 - ৳50 Lac',
    'search.price.50-100': '৳50 Lac - ৳1 Cr',
    'search.price.100-200': '৳1 Cr - ৳2 Cr',
    'search.price.200+': '৳2 Cr+',
    'search.filterActive': 'Filters active',
    'search.clearFilters': 'Clear Filters',
    'search.searching': 'Searching...',
    'search.resultsFound': ' Properties Found',
    'search.results': 'Results',
    'search.noResults': 'No Properties Found',
    'search.noResultsDescription': 'No properties match your search criteria. Try adjusting your filters.',
    'search.viewDetails': 'View Details',
    'search.bedrooms': 'Bedrooms',
    'search.bathrooms': 'Bathrooms',
    'search.area': 'Area',
    'search.available': 'Available',
    'search.sold': 'Sold',
    
    // About
    'about.title': 'About Us',
    'about.subtitle': 'Bangladesh\'s Trusted Property Solutions',
    'about.description': 'We\'re revolutionizing the way people find homes and build their dreams. Our platform combines premium house sharing opportunities with expert construction services, creating a comprehensive solution for all your housing needs.',
    'about.feature1.title': 'House Sharing Network',
    'about.feature1.description': 'Connect with verified homeowners and renters through our premium matching platform.',
    'about.feature2.title': 'Quality Properties',
    'about.feature2.description': 'Access to carefully curated properties with modern amenities and prime locations.',
    'about.feature3.title': 'Custom Home Building',
    'about.feature3.description': 'Professional construction services with 3D design previews and expert project management.',
    'about.feature4.title': 'Premium Service',
    'about.feature4.description': 'Award-winning customer service with 24/7 support and satisfaction guarantee.',
    'about.stats.title': 'Trusted by Thousands Across the Nation',
    'about.stats.description': 'With over 5 years of experience in real estate and construction, we\'ve helped thousands of clients find their perfect homes and build their dream properties.',
    'about.stats.experience': 'Years Experience',
    'about.stats.cities': 'Cities Covered',
    
    // Hero Stats
    'hero.stats.properties': 'Premium Properties',
    'hero.stats.homes': 'Homes Built',
    'hero.stats.satisfaction': 'Client Satisfaction',
    'hero.button.building': 'Start Building',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch with us',
    
    // How It Works
    'howItWorks.title': 'How It Works',
    'howItWorks.subtitle': 'Find your property in 3 simple steps',
    
    // Footer
    'footer.company': 'Company',
    'footer.services': 'Services',
    'footer.support': 'Support',
    'footer.legal': 'Legal',
    'footer.allRightsReserved': 'All rights reserved',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
    'common.tryAgain': 'Try Again',
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.submit': 'Submit',
    'common.close': 'Close',
    'common.next': 'Next',
    'common.previous': 'Previous',
    'common.viewAll': 'View All',
    'common.readMore': 'Read More',
  }
};

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('bn');

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'bn' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};