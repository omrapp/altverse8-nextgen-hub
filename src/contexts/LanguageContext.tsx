import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ar' | 'ml';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Translation data
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.programs': 'Programs',
    'nav.socialApp': 'Social App',
    'nav.community': 'Community',
    'nav.contact': 'Contact',
    'nav.joinFoundation': 'Join Foundation',
    
    // Hero Section
    'hero.badge': 'Dubai • Kerala • Sri Lanka',
    'hero.title': 'Pioneering Next-Generation Lifestyles & Ecosystems',
    'hero.subtitle': 'Empowering students to transform innovative ideas into successful startups through education, entrepreneurship, and community building across three dynamic regions.',
    'hero.stats.students': 'Students Empowered',
    'hero.stats.regions': 'Key Regions',
    'hero.stats.startups': 'Startups Launched',
    'hero.cta.join': 'Join Our Foundation',
    'hero.cta.watch': 'Watch Our Story',
    'hero.app.title': 'Exclusive Social Media App Coming Soon',
    'hero.app.description': 'Join our private community platform for educational content sharing and collaboration',
    
    // About Section
    'about.badge': 'About AltVerse8 Foundation',
    'about.title': 'Building Tomorrow\'s Innovation Ecosystem',
    'about.description1': 'AltVerse8 Foundation stands at the forefront of educational innovation, creating pathways for the next generation of entrepreneurs and thought leaders. Our mission spans three dynamic regions, fostering a unique blend of traditional wisdom and cutting-edge technology.',
    'about.description2': 'Through comprehensive programs in education and entrepreneurship, we empower students to not just dream, but to build. Our approach combines mentorship, resources, and community support to transform innovative ideas into sustainable businesses that create lasting impact.',
    'about.values.innovation.title': 'Innovation First',
    'about.values.innovation.description': 'Pioneering research into next-generation lifestyles and sustainable ecosystem building.',
    'about.values.community.title': 'Community Driven', 
    'about.values.community.description': 'Fostering collaborative environments where ideas flourish and partnerships thrive.',
    'about.values.impact.title': 'Impact Focused',
    'about.values.impact.description': 'Transforming student ideas into successful startups with measurable social impact.',
    'about.values.global.title': 'Global Vision',
    'about.values.global.description': 'Connecting opportunities across Dubai, Kerala, and Sri Lanka for maximum reach.',
    
    // Programs Section
    'programs.badge': 'Our Programs & Initiatives',
    'programs.title': 'Empowering Through Education & Innovation',
    'programs.subtitle': 'Our comprehensive programs span education, entrepreneurship, and community building, creating pathways for success across three dynamic regions.',
    'programs.education.title': 'Education Excellence',
    'programs.education.description': 'Comprehensive educational programs designed to foster critical thinking and innovation in students across all disciplines.',
    'programs.startup.title': 'Startup Incubation',
    'programs.startup.description': 'End-to-end support for student entrepreneurs to transform their innovative ideas into sustainable, scalable businesses.',
    'programs.community.title': 'Community Building',
    'programs.community.description': 'Creating vibrant ecosystems where like-minded individuals collaborate, share knowledge, and drive collective growth.',
    
    // Social App Section
    'socialApp.badge': 'Coming Soon',
    'socialApp.title': 'Exclusive Social Media Platform for Our Community',
    'socialApp.description': 'We\'re developing a revolutionary social media application exclusively for AltVerse8 Foundation members. Think Instagram meets educational collaboration – a space where knowledge thrives and innovation flourishes.',
    'socialApp.subtitle': 'Join interest-based groups, share educational content, collaborate on projects, and connect with like-minded individuals across our global community. Your learning journey becomes a social experience.',
    'socialApp.cta.earlyAccess': 'Get Early Access',
    'socialApp.cta.demo': 'Watch Demo Video',
    
    // Contact Section
    'contact.badge': 'Get in Touch',
    'contact.title': 'Connect With AltVerse8 Foundation',
    'contact.subtitle': 'Ready to start your journey with us? We\'re here to answer your questions and help you take the next step in your educational and entrepreneurial adventure.',
    'contact.form.title': 'Send us a Message',
    'contact.form.firstName': 'First Name',
    'contact.form.lastName': 'Last Name',
    'contact.form.email': 'Email Address',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    
    // Footer
    'footer.description': 'Pioneering next-generation lifestyles and ecosystem building across Dubai, Kerala, and Sri Lanka.',
    'footer.quickLinks': 'Quick Links',
    'footer.programs': 'Programs',
    'footer.regions': 'Our Regions',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.copyright': '© 2024 AltVerse8 Foundation. All rights reserved.'
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.programs': 'البرامج',
    'nav.socialApp': 'التطبيق الاجتماعي',
    'nav.community': 'المجتمع',
    'nav.contact': 'اتصل بنا',
    'nav.joinFoundation': 'انضم للمؤسسة',
    
    // Hero Section
    'hero.badge': 'دبي • كيرالا • سريلانكا',
    'hero.title': 'رواد أنماط الحياة والنظم البيئية للجيل القادم',
    'hero.subtitle': 'تمكين الطلاب لتحويل الأفكار المبتكرة إلى شركات ناجحة من خلال التعليم وريادة الأعمال وبناء المجتمع عبر ثلاث مناطق ديناميكية.',
    'hero.stats.students': 'طالب تم تمكينه',
    'hero.stats.regions': 'مناطق رئيسية',
    'hero.stats.startups': 'شركة ناشئة تم إطلاقها',
    'hero.cta.join': 'انضم لمؤسستنا',
    'hero.cta.watch': 'شاهد قصتنا',
    'hero.app.title': 'تطبيق وسائل التواصل الاجتماعي الحصري قريباً',
    'hero.app.description': 'انضم إلى منصة مجتمعنا الخاصة لمشاركة المحتوى التعليمي والتعاون',
    
    // About Section
    'about.badge': 'حول مؤسسة AltVerse8',
    'about.title': 'بناء النظام البيئي للابتكار في المستقبل',
    'about.description1': 'تقف مؤسسة AltVerse8 في المقدمة للابتكار التعليمي، وتخلق مسارات للجيل القادم من رجال الأعمال وقادة الفكر. مهمتنا تمتد عبر ثلاث مناطق ديناميكية، وتعزز مزيجاً فريداً من الحكمة التقليدية والتكنولوجيا المتطورة.',
    'about.description2': 'من خلال البرامج الشاملة في التعليم وريادة الأعمال، نمكن الطلاب ليس فقط من الحلم، ولكن من البناء. نهجنا يجمع بين الإرشاد والموارد ودعم المجتمع لتحويل الأفكار المبتكرة إلى أعمال مستدامة تخلق تأثيراً دائماً.',
    'about.values.innovation.title': 'الابتكار أولاً',
    'about.values.innovation.description': 'ريادة البحث في أنماط الحياة الجديدة وبناء النظام البيئي المستدام.',
    'about.values.community.title': 'مدفوع بالمجتمع',
    'about.values.community.description': 'تعزيز البيئات التعاونية حيث تزدهر الأفكار وتنمو الشراكات.',
    'about.values.impact.title': 'مركز على التأثير',
    'about.values.impact.description': 'تحويل أفكار الطلاب إلى شركات ناجحة بتأثير اجتماعي قابل للقياس.',
    'about.values.global.title': 'رؤية عالمية',
    'about.values.global.description': 'ربط الفرص عبر دبي وكيرالا وسريلانكا لتحقيق أقصى وصول.',
    
    // Programs Section
    'programs.badge': 'برامجنا ومبادراتنا',
    'programs.title': 'التمكين من خلال التعليم والابتكار',
    'programs.subtitle': 'برامجنا الشاملة تمتد عبر التعليم وريادة الأعمال وبناء المجتمع، وتخلق مسارات للنجاح عبر ثلاث مناطق ديناميكية.',
    'programs.education.title': 'التميز التعليمي',
    'programs.education.description': 'برامج تعليمية شاملة مصممة لتعزيز التفكير النقدي والابتكار لدى الطلاب عبر جميع التخصصات.',
    'programs.startup.title': 'حاضنة الشركات الناشئة',
    'programs.startup.description': 'دعم شامل لرواد الأعمال من الطلاب لتحويل أفكارهم المبتكرة إلى أعمال مستدامة وقابلة للتوسع.',
    'programs.community.title': 'بناء المجتمع',
    'programs.community.description': 'إنشاء أنظمة بيئية نابضة بالحياة حيث يتعاون الأفراد المتشابهون في التفكير ويتشاركون المعرفة ويحركون النمو الجماعي.',
    
    // Social App Section
    'socialApp.badge': 'قريباً',
    'socialApp.title': 'منصة وسائل التواصل الاجتماعي الحصرية لمجتمعنا',
    'socialApp.description': 'نحن نطور تطبيق وسائل التواصل الاجتماعي الثوري حصرياً لأعضاء مؤسسة AltVerse8. فكر في انستغرام يلتقي بالتعاون التعليمي - مساحة حيث تزدهر المعرفة ويزدهر الابتكار.',
    'socialApp.subtitle': 'انضم إلى مجموعات قائمة على الاهتمامات، شارك المحتوى التعليمي، تعاون في المشاريع، وتواصل مع الأفراد المتشابهين في التفكير عبر مجتمعنا العالمي. رحلة تعلمك تصبح تجربة اجتماعية.',
    'socialApp.cta.earlyAccess': 'احصل على وصول مبكر',
    'socialApp.cta.demo': 'شاهد فيديو تجريبي',
    
    // Contact Section
    'contact.badge': 'تواصل معنا',
    'contact.title': 'تواصل مع مؤسسة AltVerse8',
    'contact.subtitle': 'مستعد لبدء رحلتك معنا؟ نحن هنا للإجابة على أسئلتك ومساعدتك على اتخاذ الخطوة التالية في مغامرتك التعليمية وريادة الأعمال.',
    'contact.form.title': 'أرسل لنا رسالة',
    'contact.form.firstName': 'الاسم الأول',
    'contact.form.lastName': 'الاسم الأخير',
    'contact.form.email': 'عنوان البريد الإلكتروني',
    'contact.form.subject': 'الموضوع',
    'contact.form.message': 'الرسالة',
    'contact.form.send': 'إرسال الرسالة',
    
    // Footer
    'footer.description': 'رواد أنماط الحياة والنظم البيئية للجيل القادم عبر دبي وكيرالا وسريلانكا.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.programs': 'البرامج',
    'footer.regions': 'مناطقنا',
    'footer.legal': 'قانوني',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',
    'footer.copyright': '© 2024 مؤسسة AltVerse8. جميع الحقوق محفوظة.'
  },
  ml: {
    // Navigation
    'nav.home': 'ഹോം',
    'nav.about': 'ഞങ്ങളെ കുറിച്ച്',
    'nav.programs': 'പ്രോഗ്രാമുകൾ',
    'nav.socialApp': 'സോഷ്യൽ ആപ്പ്',
    'nav.community': 'സമൂഹം',
    'nav.contact': 'ബന്ധപ്പെടുക',
    'nav.joinFoundation': 'ഫൗണ്ടേഷനിൽ ചേരുക',
    
    // Hero Section
    'hero.badge': 'ദുബായ് • കേരളം • ശ്രീലങ്ക',
    'hero.title': 'അടുത്ത തലമുറ ജീവിതരീതികളുടെയും പരിസ്ഥിതിവ്യവസ്ഥകളുടെയും പയനിയർ',
    'hero.subtitle': 'മൂന്ന് ചലനാത്മക മേഖലകളിലായി വിദ്യാഭ്യാസം, സംരംഭകത്വം, സമൂഹനിർമ്മാണം എന്നിവയിലൂടെ നൂതന ആശയങ്ങളെ വിജയകരമായ സ്റ്റാർട്ടപ്പുകളാക്കി മാറ്റാൻ വിദ്യാർത്ഥികളെ ശാക്തീകരിക്കുന്നു.',
    'hero.stats.students': 'വിദ്യാർത്ഥികളെ ശാക്തീകരിച്ചു',
    'hero.stats.regions': 'പ്രധാന മേഖലകൾ',
    'hero.stats.startups': 'സ്റ്റാർട്ടപ്പുകൾ ആരംഭിച്ചു',
    'hero.cta.join': 'ഞങ്ങളുടെ ഫൗണ്ടേഷനിൽ ചേരുക',
    'hero.cta.watch': 'ഞങ്ങളുടെ കഥ കാണുക',
    'hero.app.title': 'പ്രത്യേക സോഷ്യൽ മീഡിയ ആപ്പ് ഉടൻ വരുന്നു',
    'hero.app.description': 'വിദ്യാഭ്യാസപരമായ ഉള്ളടക്കം പങ്കിടുന്നതിനും സഹകരണത്തിനുമായി ഞങ്ങളുടെ സ്വകാര്യ കമ്മ്യൂണിറ്റി പ്ലാറ്റ്‌ഫോമിൽ ചേരുക',
    
    // About Section
    'about.badge': 'AltVerse8 ഫൗണ്ടേഷനെ കുറിച്ച്',
    'about.title': 'നാളത്തെ നവീകരണ പരിസ്ഥിതിവ്യവസ്ഥ നിർമ്മിക്കുന്നു',
    'about.description1': 'AltVerse8 ഫൗണ്ടേഷൻ വിദ്യാഭ്യാസപരമായ നവീകരണത്തിന്റെ മുൻനിരയിൽ നിൽക്കുന്നു, അടുത്ത തലമുറയിലെ സംരംഭകർക്കും ചിന്താനായകർക്കുമായി വഴികൾ സൃഷ്ടിക്കുന്നു. ഞങ്ങളുടെ ദൗത്യം മൂന്ന് ചലനാത്മക മേഖലകളിലായി വ്യാപിച്ചിരിക്കുന്നു, പരമ്പരാഗത ജ്ഞാനവും അത്യാധുനിക സാങ്കേതികവിദ്യയും സംയോജിപ്പിച്ച് അദ്വിതീയമായ ഒരു മിശ്രിതം വളർത്തുന്നു.',
    'about.description2': 'വിദ്യാഭ്യാസത്തിലും സംരംഭകത്വത്തിലുമുള്ള സമഗ്രമായ പ്രോഗ്രാമുകളിലൂടെ, വിദ്യാർത്ഥികളെ സ്വപ്നം കാണാനുമാത്രമല്ല, നിർമ്മിക്കാനും ഞങ്ങൾ ശാക്തീകരിക്കുന്നു. ഞങ്ങളുടെ സമീപനം മാർഗദർശനം, വിഭവങ്ങൾ, കമ്മ്യൂണിറ്റി പിന്തുണ എന്നിവ സംയോജിപ്പിച്ച് നൂതന ആശയങ്ങളെ സുസ്ഥിരമായ ബിസിനസുകളാക്കി മാറ്റുന്നു.',
    'about.values.innovation.title': 'നവീകരണം മുൻപിൽ',
    'about.values.innovation.description': 'അടുത്ത തലമുറ ജീവിതരീതികളിലും സുസ്ഥിര പരിസ്ഥിതിവ്യവസ്ഥാ നിർമ്മാണത്തിലും പയനിയറിംഗ് ഗവേഷണം.',
    'about.values.community.title': 'കമ്മ്യൂണിറ്റി അധിഷ്ഠിതം',
    'about.values.community.description': 'ആശയങ്ങൾ പുഷ്പിക്കുകയും പങ്കാളിത്തം വളരുകയും ചെയ്യുന്ന സഹകരണ പരിതസ്ഥിതികൾ വളർത്തുന്നു.',
    'about.values.impact.title': 'ആഘാതത്തിൽ ശ്രദ്ധ',
    'about.values.impact.description': 'അളക്കാവുന്ന സാമൂഹിക സ്വാധീനത്തോടെ വിദ്യാർത്ഥി ആശയങ്ങളെ വിജയകരമായ സ്റ്റാർട്ടപ്പുകളാക്കി മാറ്റുന്നു.',
    'about.values.global.title': 'ആഗോള കാഴ്ചപ്പാട്',
    'about.values.global.description': 'പരമാവധി എത്തിച്ചേരലിനായി ദുബായ്, കേരളം, ശ്രീലങ്ക എന്നിവിടങ്ങളിൽ അവസരങ്ങൾ ബന്ധിപ്പിക്കുന്നു.',
    
    // Programs Section  
    'programs.badge': 'ഞങ്ങളുടെ പ്രോഗ്രാമുകളും സംരംഭങ്ങളും',
    'programs.title': 'വിദ്യാഭ്യാസത്തിലും നവീകരണത്തിലും ശാക്തീകരണം',
    'programs.subtitle': 'ഞങ്ങളുടെ സമഗ്രമായ പ്രോഗ്രാമുകൾ വിദ്യാഭ്യാസം, സംരംഭകത്വം, കമ്മ്യൂണിറ്റി നിർമ്മാണം എന്നിവയിലായി വ്യാപിച്ച്, മൂന്ന് ചലനാത്മക മേഖലകളിലായി വിജയത്തിനുള്ള വഴികൾ സൃഷ്ടിക്കുന്നു.',
    'programs.education.title': 'വിദ്യാഭ്യാസ മികവ്',
    'programs.education.description': 'എല്ലാ വിഷയങ്ങളിലുമുള്ള വിദ്യാർത്ഥികളിൽ വിമർശനാത്മക ചിന്തയും നവീകരണയും വളർത്താൻ രൂപകൽപ്പന ചെയ്ത സമഗ്രമായ വിദ്യാഭ്യാസ പ്രോഗ്രാമുകൾ.',
    'programs.startup.title': 'സ്റ്റാർട്ടപ്പ് ഇൻകുബേഷൻ',
    'programs.startup.description': 'അവരുടെ നൂതന ആശയങ്ങളെ സുസ്ഥിരവും വിപുലീകരിക്കാവുന്നതുമായ ബിസിനസുകളാക്കി മാറ്റാൻ വിദ്യാർത്ഥി സംരംഭകർക്ക് അവസാനം മുതൽ അവസാനം വരെയുള്ള പിന്തുണ.',
    'programs.community.title': 'കമ്മ്യൂണിറ്റി നിർമ്മാണം',
    'programs.community.description': 'സമാന ചിന്താഗതിക്കാരായ വ്യക്തികൾ സഹകരിക്കുകയും അറിവ് പങ്കിടുകയും കൂട്ടായ വളർച്ച നയിക്കുകയും ചെയ്യുന്ന ജീവനുള്ള പരിസ്ഥിതിവ്യവസ്ഥകൾ സൃഷ്ടിക്കുന്നു.',
    
    // Social App Section
    'socialApp.badge': 'ഉടൻ വരുന്നു',
    'socialApp.title': 'ഞങ്ങളുടെ കമ്മ്യൂണിറ്റിക്കുള്ള പ്രത്യേക സോഷ്യൽ മീഡിയ പ്ലാറ്റ്‌ഫോം',
    'socialApp.description': 'AltVerse8 ഫൗണ്ടേഷൻ അംഗങ്ങൾക്ക് മാത്രമായി ഞങ്ങൾ ഒരു വിപ്ലവകരമായ സോഷ്യൽ മീഡിയ ആപ്ലിക്കേഷൻ വികസിപ്പിക്കുന്നു. ഇൻസ്റ്റാഗ്രാം വിദ്യാഭ്യാസപരമായ സഹകരണവുമായി കണ്ടുമുട്ടുന്നതായി ചിന്തിക്കുക - അറിവ് വളരുകയും നവീകരണം പുഷ്പിക്കുകയും ചെയ്യുന്ന ഒരു സ്ഥലം.',
    'socialApp.subtitle': 'താൽപ്പര്യാധിഷ്ഠിത ഗ്രൂപ്പുകളിൽ ചേരുക, വിദ്യാഭ്യാസപരമായ ഉള്ളടക്കം പങ്കിടുക, പ്രോജക്റ്റുകളിൽ സഹകരിക്കുക, ഞങ്ങളുടെ ആഗോള കമ്മ്യൂണിറ്റിയിലുടനീളമുള്ള സമാന ചിന്താഗതിക്കാരുമായി ബന്ധപ്പെടുക. നിങ്ങളുടെ പഠന യാത്ര ഒരു സാമൂഹിക അനുഭവമായി മാറുന്നു.',
    'socialApp.cta.earlyAccess': 'നേരത്തെയുള്ള പ്രവേശനം നേടുക',
    'socialApp.cta.demo': 'ഡെമോ വീഡിയോ കാണുക',
    
    // Contact Section
    'contact.badge': 'ബന്ധപ്പെടുക',
    'contact.title': 'AltVerse8 ഫൗണ്ടേഷനുമായി ബന്ധപ്പെടുക',
    'contact.subtitle': 'ഞങ്ങളുമായി നിങ്ങളുടെ യാത്ര ആരംഭിക്കാൻ തയ്യാറാണോ? നിങ്ങളുടെ ചോദ്യങ്ങൾക്ക് ഉത്തരം നൽകാനും നിങ്ങളുടെ വിദ്യാഭ്യാസ, സംരംഭകത്വ സാഹസികതയിൽ അടുത്ത ചുവടുവയ്ക്കാൻ സഹായിക്കാനും ഞങ്ങൾ ഇവിടെയുണ്ട്.',
    'contact.form.title': 'ഞങ്ങൾക്ക് ഒരു സന്ദേശം അയയ്ക്കുക',
    'contact.form.firstName': 'പേരിന്റെ ആദ്യഭാഗം',
    'contact.form.lastName': 'പേരിന്റെ അവസാന ഭാഗം',
    'contact.form.email': 'ഇമെയിൽ വിലാസം',
    'contact.form.subject': 'വിഷയം',
    'contact.form.message': 'സന്ദേശം',
    'contact.form.send': 'സന്ദേശം അയയ്ക്കുക',
    
    // Footer
    'footer.description': 'ദുബായ്, കേരളം, ശ്രീലങ്ക എന്നിവിടങ്ങളിലായി അടുത്ത തലമുറ ജീവിതരീതികളുടെയും പരിസ്ഥിതിവ്യവസ്ഥകളുടെയും പയനിയർ.',
    'footer.quickLinks': 'ദ്രുത ലിങ്കുകൾ',
    'footer.programs': 'പ്രോഗ്രാമുകൾ',
    'footer.regions': 'ഞങ്ങളുടെ മേഖലകൾ',
    'footer.legal': 'നിയമപരം',
    'footer.privacy': 'സ്വകാര്യതാ നയം',
    'footer.terms': 'സേവന വ്യവസ്ഥകൾ',
    'footer.copyright': '© 2024 AltVerse8 ഫൗണ്ടേഷൻ. എല്ലാ അവകാശങ്ങളും സംരക്ഷിതം.'
  }
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['en', 'ar', 'ml'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
    isRTL: language === 'ar'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};