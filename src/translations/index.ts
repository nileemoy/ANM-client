export type Language = "en" | "hi" | "as" | "bn";

export interface TranslationKeys {
  common: {
    [key: string]: string;
  };
  pages: {
    [key: string]: string;
  };
  components: {
    [key: string]: string;
  };
}

export const translations: Record<Language, TranslationKeys> = {
  en: {
    common: {
      "home": "Home",
      "profile": "Profile",
      "settings": "Settings",
      "records": "Health Records",
      "appointments": "Appointments",
      "health_check": "Health Check",
      "schemes": "Schemes",
      "anm": "ANM Portal",
      "dark_mode": "Dark Mode",
      "language": "Language",
      "notifications": "Notifications",
      "privacy": "Privacy",
      "appearance": "Appearance",
      "voice_assistant": "Voice Assistant",
      "loading": "Loading...",
      "error": "Error",
      "success": "Success",
      "cancel": "Cancel",
      "save": "Save",
      "update": "Update",
      "delete": "Delete",
      "add": "Add",
      "app_name": "Client"
    },
    pages: {
      "index": "Home",
      "health_check": "Health Check",
      "records": "Health Records",
      "schemes": "Schemes",
      "anm": "ANM Portal",
      "profile": "Profile",
      "settings": "Settings",
      "appointments": "Appointments"
    },
    components: {
      "button_primary": "Primary Button",
      "button_secondary": "Secondary Button",
      "input_placeholder": "Enter text..."
    }
  },
  hi: {
    common: {
      "home": "होम",
      "profile": "प्रोफाइल",
      "settings": "सेटिंग्स",
      "records": "स्वास्थ्य रिकॉर्ड",
      "appointments": "अपॉइंटमेंट",
      "health_check": "स्वास्थ्य जांच",
      "schemes": "योजनाएं",
      "anm": "एएनएम पोर्टल",
      "dark_mode": "डार्क मोड",
      "language": "भाषा",
      "notifications": "सूचनाएं",
      "privacy": "गोपनीयता",
      "appearance": "दिखावट",
      "voice_assistant": "आवाज सहायक",
      "loading": "लोड हो रहा है...",
      "error": "त्रुटि",
      "success": "सफल",
      "cancel": "रद्द करें",
      "save": "सहेजें",
      "update": "अपडेट करें",
      "delete": "हटाएं",
      "add": "जोड़ें",
      "app_name": "Client"
    },
    pages: {
      "index": "होम",
      "health_check": "स्वास्थ्य जांच",
      "records": "स्वास्थ्य रिकॉर्ड",
      "schemes": "योजनाएं",
      "anm": "एएनएम पोर्टल",
      "profile": "प्रोफाइल",
      "settings": "सेटिंग्स",
      "appointments": "अपॉइंटमेंट"
    },
    components: {
      "button_primary": "प्राथमिक बटन",
      "button_secondary": "द्वितीयक बटन",
      "input_placeholder": "पाठ दर्ज करें..."
    }
  },
  as: {
    common: {
      "home": "মূল পৃষ্ঠা",
      "profile": "প্ৰফাইল",
      "settings": "ছেটিংছ",
      "records": "স্বাস্থ্য ৰেকৰ্ড",
      "appointments": "অ্যাপয়েন্টমেন্ট",
      "health_check": "স্বাস্থ্য পৰীক্ষা",
      "schemes": "আঁচনি",
      "anm": "এএনএম পোৰ্টাল",
      "dark_mode": "অন্ধকাৰ ম'ড",
      "language": "ভাষা",
      "notifications": "জাননী",
      "privacy": "গোপনীয়তা",
      "appearance": "ৰূপ",
      "voice_assistant": "কণ্ঠ সহায়ক",
      "loading": "লোৱৰুৰু...",
      "error": "ত্ৰুটি",
      "success": "সফল",
      "cancel": "ৰদ কৰো",
      "save": "সেইভ কৰো",
      "update": "আপডেট কৰো",
      "delete": "ৰোৱাৰুৰু",
      "add": "যোগ কৰো",
      "app_name": "Client"
    },
    pages: {
      "index": "মূল পৃষ্ঠা",
      "health_check": "স্বাস্থ্য পৰীক্ষা",
      "records": "স্বাস্থ্য ৰেকৰ্ড",
      "schemes": "আঁচনি",
      "anm": "এএনএম পোৰ্টাল",
      "profile": "প্ৰফাইল",
      "settings": "ছেটিংছ",
      "appointments": "অ্যাপয়েন্টমেন্ট"
    },
    components: {
      "button_primary": "প্ৰাথমিক বটন",
      "button_secondary": "দ্বিতীয়ক বটন",
      "input_placeholder": "পাঠ দিয়া..."
    }
  },
  bn: {
    common: {
      "home": "হোম",
      "profile": "প্রোফাইল",
      "settings": "সেটিংস",
      "records": "স্বাস্থ্য রেকর্ড",
      "appointments": "অ্যাপয়েন্টমেন্ট",
      "health_check": "স্বাস্থ্য পরীক্ষা",
      "schemes": "স্কিম",
      "anm": "এএনএম পোর্টাল",
      "dark_mode": "ডার্ক মোড",
      "language": "ভাষা",
      "notifications": "বিজ্ঞপ্তি",
      "privacy": "গোপনীয়তা",
      "appearance": "উপস্থিতি",
      "voice_assistant": "ভয়েস সহায়ক",
      "loading": "লোড হচ্ছে...",
      "error": "ত্রুটি",
      "success": "সফল",
      "cancel": "বাতিল করুন",
      "save": "সংরক্ষণ করুন",
      "update": "আপডেট করুন",
      "delete": "মুছে ফেলুন",
      "add": "যোগ করুন",
      "app_name": "Client"
    },
    pages: {
      "index": "হোম",
      "health_check": "স্বাস্থ্য পরীক্ষা",
      "records": "স্বাস্থ্য রেকর্ড",
      "schemes": "স্কিম",
      "anm": "এএনএম পোর্টাল",
      "profile": "প্রোফাইল",
      "settings": "সেটিংস",
      "appointments": "অ্যাপয়েন্টমেন্ট"
    },
    components: {
      "button_primary": "প্রাথমিক বাটন",
      "button_secondary": "দ্বিতীয়ক বাটন",
      "input_placeholder": "পাঠ দিন..."
    }
  }
};

export const getTranslation = (language: Language, key: string, section: keyof TranslationKeys = 'common'): string => {
  const translation = translations[language][section][key];
  return translation || translations.en[section][key] || key;
};
