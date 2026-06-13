/* ============================================================ */
/* ZORA — app.js                                               */
/* ============================================================ */

/* ============================================================ */
/* TRANSLATIONS                                                 */
/* ============================================================ */
var translations = {
  de: {
    /* NAV */
    "nav.solution": "Lösung",
    "nav.features": "Funktionen",
    "nav.compliance": "Compliance",
    "nav.pricing": "Preise",
    "nav.faq": "FAQ",
    "nav.login": "Client Login",
    "nav.cta": "Jetzt starten",

    /* HERO */
    "hero.eyebrow": "Intelligent Concierge für Hotels · Luzern, Schweiz",
    "hero.h1.line1": "Ihre Rezeption.",
    "hero.h1.line2": "Automatisiert. Mehrsprachig. Konform.",
    "hero.sub": "ZORA übernimmt Gäste-Kommunikation, Kurtaxe-Berichte und HESTA-Statistik. Damit Ihr Team Zeit für das Wesentliche hat.",
    "hero.btn1": "Live-Demo ansehen",
    "hero.btn2": "Termin buchen",
    "hero.note": "Kostenlose Einrichtung diesen Monat — Keine Vertragsbindung",

    /* STATS */
    "stats.n1": "Multi",
    "stats.l1": "Mehrsprachiger Concierge",
    "stats.n2": "15–25h",
    "stats.l2": "Geschätzte Zeitersparnis/Monat",
    "stats.n3": "0",
    "stats.l3": "Technische Installation nötig",
    "stats.n4": "CH+EU",
    "stats.l4": "Datenschutz nach Schweizer Recht & EU-DSGVO",

    /* PROBLEM */
    "problem.eyebrow": "Das Problem",
    "problem.h2": "Ihre Rezeption verliert Stunden — wir wissen wo.",
    "problem.p": "Hotels in der Schweiz beantworten Hunderte wiederkehrender Gästeanfragen pro Woche mit immer den gleichen Fragen: Frühstück, WiFi, Check-in, Parking. Dazu monatliche Steuermeldungen, Kurtaxe-Abrechnungen, HESTA-Berichte. Stunden, die Ihr Team auf wichtigere Aufgaben verwenden könnte.",
    "pain.1": "Wiederholte E-Mail-Anfragen",
    "pain.2": "Manuelle Steuerabrechnungen",
    "pain.3": "Sprachbarrieren mit Gästen",
    "pain.4": "Datenerfassung in Tabellen",
    "pain.5": "24/7-Verfügbarkeit erwartet",

    /* SOLUTION */
    "solution.eyebrow": "Die Lösung",
    "solution.h2": "Eine Plattform für die gesamte Gästekommunikation",
    "solution.sub": "ZORA integriert sich ohne Systemwechsel in Ihren Hotelbetrieb — und übernimmt automatisch die Aufgaben, die Ihr Team täglich Stunden kosten.",
    "sol.c1.title": "E-Mail-Automatisierung",
    "sol.c1.desc": "Eingehende Reservierungen, FAQ-Anfragen und Sonderwünsche werden automatisch klassifiziert und beantwortet.",
    "sol.c1.f1": "Willkommens-E-Mail bei Reservierung",
    "sol.c1.f2": "Automatische FAQ-Antworten",
    "sol.c1.f3": "Upselling 24h vor Check-in",
    "sol.c1.f4": "Review-Anfrage nach Check-out",
    "sol.c2.title": "Compliance Suisse",
    "sol.c2.desc": "Kurtaxe und HESTA monatlich automatisch erstellt — exportbereit für die zuständigen Behörden.",
    "sol.c2.f1": "Kurtaxe-Abrechnung Stadt Luzern",
    "sol.c2.f2": "HESTA-Bericht Bundesamt für Statistik",
    "sol.c2.f3": "Excel-Export, direkt einreichbar",
    "sol.c2.f4": "Keine manuelle Dateneingabe",
    "sol.c3.title": "Upselling & Concierge",
    "sol.c3.desc": "Der KI-Concierge beantwortet Gästefragen in ihrer Sprache und bietet Upgrades zum richtigen Zeitpunkt an.",
    "sol.c3.f1": "Sprache des Gastes automatisch erkannt",
    "sol.c3.f2": "Upgrade-Angebote vor dem Check-in",
    "sol.c3.f3": "Sonderwünsche erfassen und weiterleiten",
    "sol.c3.f4": "WhatsApp-Kanal (Coming Q3 2026)",

    /* HOW IT WORKS */
    "how.eyebrow": "Wie es funktioniert",
    "how.h2": "Schnell einsatzbereit — ohne technische Installation",
    "step.1.num": "01",
    "step.1.title": "Verbinden",
    "step.1.desc": "Sie geben uns Zugriff auf das Gmail-Postfach Ihres Hotels. Kein PMS-Wechsel, keine IT-Abteilung nötig.",
    "step.2.num": "02",
    "step.2.title": "Konfigurieren",
    "step.2.desc": "Wir importieren Ihre Hotelinformationen und passen ZORA an Ihre Marke und Sprache an.",
    "step.3.num": "03",
    "step.3.title": "Aktivieren",
    "step.3.desc": "ZORA beginnt, eingehende E-Mails zu klassifizieren und Antwortentwürfe zu generieren.",
    "step.4.num": "04",
    "step.4.title": "Freigeben",
    "step.4.desc": "Sie überprüfen jeden Entwurf und geben ihn frei — nichts wird ohne Ihre Freigabe versendet.",

    /* FEATURES */
    "features.eyebrow": "Funktionen",
    "features.h2": "Alles, was ein modernes Hotel braucht",
    "feat.1.title": "24/7 Intelligent Concierge",
    "feat.1.desc": "Der KI-Concierge erkennt die Sprache des Gastes automatisch und antwortet mehrsprachig in Sekunden.",
    "feat.2.title": "E-Mail-Automatisierung",
    "feat.2.desc": "Willkommens-E-Mails, FAQ-Antworten, Upselling und Review-Anfragen — automatisch vorbereitet, von Ihnen freigegeben.",
    "feat.3.title": "Kurtaxe-Abrechnung",
    "feat.3.desc": "Monatliche Kurtaxe-Tabelle für die Stadt Luzern automatisch erstellt und exportbereit.",
    "feat.4.title": "HESTA-Berichte",
    "feat.4.desc": "Beherbergungsstatistik für das Bundesamt für Statistik, monatlich generiert und für eHESTA formatiert.",
    "feat.5.title": "Lucerne Guest Card",
    "feat.5.desc": "Automatischer Versand der QR-Gästekarte per E-Mail vor der Ankunft.",
    "feat.6.title": "WhatsApp Concierge",
    "feat.6.desc": "KI-gestützter WhatsApp-Kanal für direkte Gästekommunikation in Echtzeit.",
    "badge.soon": "Coming Q3 2026",

    /* COMPLIANCE */
    "compliance.eyebrow": "Schweizer Compliance",
    "compliance.h2": "Schweizer Compliance — automatisiert",
    "comp.k.title": "Kurtaxe Stadt Luzern",
    "comp.k.1": "Monatliche Abrechnung gemäß Kurtaxenreglement 9.2.4.1.1",
    "comp.k.2": "CHF 2.80 pro Erwachsenen/Nacht (4–5★ Hotels)",
    "comp.k.3": "Automatische Ausnahmen: Kinder unter 12, Luzerner Einwohner",
    "comp.k.4": "Excel-Export für Einreichung vor dem 30. des Folgemonats",
    "comp.h.title": "HESTA-Berichte",
    "comp.h.1": "Monatlicher Bericht für das Bundesamt für Statistik",
    "comp.h.2": "Ankünfte und Logiernächte nach Wohnsitzland",
    "comp.h.3": "Durchschnittliche Einnahmen pro Person/Nacht",
    "comp.h.4": "Export bereit zum Hochladen auf eHESTA",
    "comp.mockup.label": "Kurtaxe-Abrechnung Mai 2026",
    "comp.mockup.footer": "Automatisch generiert von ZORA · Exportbereit",

    /* DEMO */
    "demo.eyebrow": "Live-Demo",
    "demo.h2": "Sprechen Sie mit einem echten KI-Concierge",
    "demo.p": "Genau das werden Ihre Gäste erleben. Probieren Sie es aus — fragen Sie auf Deutsch, Englisch, Französisch oder jeder anderen Sprache.",
    "demo.f1": "Antwortet automatisch in der Sprache des Gastes",
    "demo.f2": "Kennt alle Details über das Hotel",
    "demo.f3": "Verfügbar 24 Stunden, 7 Tage die Woche",
    "demo.f4": "Per E-Mail: gezielte Upgrade-Angebote vor dem Check-in",
    "demo.f5": "Per E-Mail: automatische Erfassung der Reservierungsdaten",
    "demo.chat.hotel": "Hotel Zora Luzern",
    "demo.chat.sub": "Virtueller Concierge · 24h",
    "demo.chat.online": "Online",
    "demo.chat.welcome": "Willkommen im Hotel Zora Luzern. Ich bin Ihr virtueller Concierge, rund um die Uhr für Sie da.\n\nWie kann ich Ihnen helfen?",
    "demo.q1": "Check-in Zeit?",
    "demo.q2": "Frühstück inklusive?",
    "demo.q3": "Parkplatz?",
    "demo.q4": "Zimmer buchen",
    "demo.placeholder": "Stellen Sie eine Frage...",
    "demo.error": "Entschuldigung, es gab ein technisches Problem. Bitte versuchen Sie es erneut.",

    /* WIDGET (floating ZORA chat) */
    "widget.label": "Fragen zu ZORA?",
    "widget.title": "ZORA Assistent",
    "widget.sub": "Produktfragen · Antwort in Sekunden",
    "widget.welcome": "Guten Tag. Ich bin der ZORA-Assistent. Fragen Sie mich, was ZORA kann, was es kostet oder wie die Einrichtung funktioniert.",
    "widget.placeholder": "Ihre Frage zu ZORA...",

    /* PRICING */
    "pricing.eyebrow": "Preise",
    "pricing.h2": "Einfache, transparente Preise",
    "pricing.sub": "Keine Verträge. Monatlich kündbar. Einrichtung diesen Monat kostenlos.",
    "plan.core.name": "Core",
    "plan.core.setup": "CHF 500 Einrichtungsgebühr",
    "plan.core.free": "Einrichtung diesen Monat kostenlos",
    "plan.core.price": "CHF 179",
    "plan.core.period": "pro Monat",
    "plan.core.f1": "24/7 KI-Concierge (mehrsprachig)",
    "plan.core.f2": "Willkommens-E-Mail bei Reservierung",
    "plan.core.f3": "Automatische FAQ-E-Mail-Antworten",
    "plan.core.f4": "Upselling-E-Mail vor Check-in",
    "plan.core.f5": "Reservierungen-Dashboard",
    "plan.core.cta": "Jetzt starten",
    "plan.elite.name": "Elite",
    "plan.elite.badge": "Beliebteste Wahl",
    "plan.elite.setup": "CHF 1.200 Einrichtungsgebühr",
    "plan.elite.free": "Early Adopters — Einrichtung inklusive",
    "plan.elite.price": "CHF 399",
    "plan.elite.period": "pro Monat",
    "plan.elite.f1": "Alles aus Core",
    "plan.elite.f2": "Kurtaxe & HESTA-Automatisierung",
    "plan.elite.f3": "Lucerne Guest Card (QR-Versand)",
    "plan.elite.f4": "WhatsApp KI-Concierge",
    "plan.elite.f5": "Booking.com Auto-Antworten",
    "plan.elite.f6": "Prioritäts-Support",
    "plan.elite.cta": "Jetzt starten",
    "trust.1": "Gästedaten werden niemals an Dritte weitergegeben",
    "trust.2": "nDSG & DSGVO-konform",
    "trust.3": "Keine Langzeitverträge",
    "trust.4": "Verschlüsselte Datenübertragung",

    /* FAQ */
    "faq.eyebrow": "FAQ",
    "faq.h2": "Häufig gestellte Fragen",
    "faq.q1": "Muss ich mein PMS oder Buchungssystem ändern?",
    "faq.a1": "Nein. ZORA arbeitet parallel zu Ihrem bestehenden System. Wir benötigen nur Zugriff auf das E-Mail-Postfach Ihres Hotels — keine technische Integration, keine IT-Abteilung.",
    "faq.q2": "Wie sicher sind die Daten meiner Gäste?",
    "faq.a2": "Alle Daten werden auf europäischen Servern gespeichert, verschlüsselt übertragen und niemals an Dritte weitergegeben. ZORA ist vollständig konform mit dem Schweizer nDSG und der EU-DSGVO.",
    "faq.q3": "Wie lange dauert die Einrichtung?",
    "faq.a3": "Die Einrichtung geht schnell und erfordert keine technische Installation. Sobald Sie uns Zugriff auf das E-Mail-Konto gewähren, richten wir ZORA für Sie ein.",
    "faq.q4": "Kann ich ZORA jederzeit kündigen?",
    "faq.a4": "Ja. Sie können monatlich kündigen, ohne Begründung. Ihre Daten werden innerhalb von 30 Tagen vollständig gelöscht.",
    "faq.q5": "Was passiert, wenn ZORA einen Fehler macht?",
    "faq.a5": "ZORA generiert Entwürfe — Sie behalten immer die finale Kontrolle. Jede Antwort wird von Ihrem Team geprüft und freigegeben, bevor sie versendet wird. Nichts verlässt das Haus ohne Ihre Freigabe.",
    "faq.q6": "In welchen Sprachen funktioniert ZORA?",
    "faq.a6": "Der Concierge antwortet automatisch in der Sprache des Gastes. Er ist mehrsprachig und deckt die gängigen europäischen Sprachen und viele weitere ab.",
    "faq.q7": "Welche Hotels nutzen ZORA?",
    "faq.a7": "ZORA wurde speziell für 3–5★-Hotels in der Schweiz entwickelt. Wir bereiten gerade die ersten Pilotprojekte in Luzern vor und freuen uns auf weitere Partnerschaften.",
    "faq.q8": "Bietet ZORA eine PMS-Integration?",
    "faq.a8": "Eine PMS-Integration (z. B. Mews, Apaleo oder Protel) steht auf unserer Roadmap. Wenn Ihr PMS für Sie Priorität hat, kontaktieren Sie uns — wir melden uns, sobald die Integration verfügbar ist.",

    /* CONTACT */
    "contact.eyebrow": "Kontakt",
    "contact.h2": "Bereit, Ihr Hotel zu automatisieren?",
    "contact.sub": "Buchen Sie ein kostenloses 30-minütiges Demo-Gespräch. Wir zeigen Ihnen genau, wie ZORA für Ihr Hotel funktioniert.",
    "form.name": "Ihr Name",
    "form.hotel": "Hotelname",
    "form.email": "E-Mail-Adresse",
    "form.phone": "Telefonnummer",
    "form.message": "Erzählen Sie uns von Ihrem Hotel...",
    "form.privacy": "Ich stimme der <a href='/privacy.html'>Datenschutzerklärung</a> zu. Meine Daten werden ausschließlich zur Bearbeitung meiner Anfrage verwendet.",
    "form.submit": "Nachricht senden",

    /* FOOTER */
    "footer.tagline": "Intelligent Concierge für Schweizer Hotels",
    "footer.col.product": "Produkt",
    "footer.col.company": "Unternehmen",
    "footer.col.legal": "Rechtliches",
    "footer.product.1": "Lösung",
    "footer.product.2": "Funktionen",
    "footer.product.3": "Preise",
    "footer.product.4": "Live-Demo",
    "footer.company.1": "Über uns",
    "footer.company.2": "Kontakt",
    "footer.company.3": "Karriere",
    "footer.legal.1": "Impressum",
    "footer.legal.2": "Datenschutz",
    "footer.legal.3": "AGB",
    "footer.legal.4": "Cookie-Richtlinie",
    "footer.copy": "© 2026 ZORA — Adrián Zafrilla Ortiz · Kriens, Schweiz",

    /* COOKIE */
    "cookie.text": "Wir verwenden Cookies, um unsere Website zu verbessern und Ihnen die beste Erfahrung zu bieten. Mehr erfahren in unserer <a href='/privacy.html'>Datenschutzerklärung</a>.",
    "cookie.accept": "Alle akzeptieren",
    "cookie.necessary": "Nur notwendige"
  },

  en: {
    "nav.solution": "Solution",
    "nav.features": "Features",
    "nav.compliance": "Compliance",
    "nav.pricing": "Pricing",
    "nav.faq": "FAQ",
    "nav.login": "Client Login",
    "nav.cta": "Get started",

    "hero.eyebrow": "Intelligent Concierge for Hotels · Luzern, Switzerland",
    "hero.h1.line1": "Your front desk.",
    "hero.h1.line2": "Automated. Multilingual. Compliant.",
    "hero.sub": "ZORA handles guest communication, Kurtaxe reporting, and HESTA statistics — so your team can focus on what matters.",
    "hero.btn1": "See live demo",
    "hero.btn2": "Book a call",
    "hero.note": "Free setup this month — No long-term contracts",

    "stats.n1": "Multi",
    "stats.l1": "Multilingual concierge",
    "stats.n2": "15–25h",
    "stats.l2": "Estimated time saved/month",
    "stats.n3": "0",
    "stats.l3": "Technical setup required",
    "stats.n4": "CH+EU",
    "stats.l4": "Built for Swiss nDSG & EU GDPR",

    "problem.eyebrow": "The Problem",
    "problem.h2": "Your front desk is losing hours — we know where.",
    "problem.p": "Hotels in Switzerland answer hundreds of repetitive guest inquiries every week with the same questions: breakfast, WiFi, check-in, parking. Plus monthly tax filings, Kurtaxe reports, HESTA statistics — hours your team could spend on higher-value tasks.",
    "pain.1": "Repetitive email inquiries",
    "pain.2": "Manual tax reporting",
    "pain.3": "Language barriers with guests",
    "pain.4": "Manual data entry into spreadsheets",
    "pain.5": "24/7 availability expected",

    "solution.eyebrow": "The Solution",
    "solution.h2": "One platform for all guest communication",
    "solution.sub": "ZORA integrates into your hotel operations without changing any existing system — automating the tasks that cost your team hours every day.",
    "sol.c1.title": "Email Automation",
    "sol.c1.desc": "Incoming reservations, FAQ requests, and special needs are automatically classified and answered.",
    "sol.c1.f1": "Welcome email on reservation",
    "sol.c1.f2": "Automatic FAQ responses",
    "sol.c1.f3": "Upselling 24h before check-in",
    "sol.c1.f4": "Review request after check-out",
    "sol.c2.title": "Swiss Compliance",
    "sol.c2.desc": "Kurtaxe and HESTA reports generated automatically each month — ready to submit to the relevant authorities.",
    "sol.c2.f1": "Kurtaxe billing City of Luzern",
    "sol.c2.f2": "HESTA report Federal Statistical Office",
    "sol.c2.f3": "Excel export, ready to submit",
    "sol.c2.f4": "No manual data entry",
    "sol.c3.title": "Upselling & Concierge",
    "sol.c3.desc": "The AI concierge answers guest questions in their language and suggests upgrades at exactly the right moment.",
    "sol.c3.f1": "Guest's language detected automatically",
    "sol.c3.f2": "Upgrade offers before check-in",
    "sol.c3.f3": "Capture and route special requests",
    "sol.c3.f4": "WhatsApp channel (Coming Q3 2026)",

    "how.eyebrow": "How it works",
    "how.h2": "Up and running fast — no technical installation",
    "step.1.num": "01",
    "step.1.title": "Connect",
    "step.1.desc": "You give us access to your hotel's Gmail inbox. No PMS change, no IT department needed.",
    "step.2.num": "02",
    "step.2.title": "Configure",
    "step.2.desc": "We import your hotel information and adapt ZORA to your brand and language.",
    "step.3.num": "03",
    "step.3.title": "Activate",
    "step.3.desc": "ZORA starts classifying incoming emails and generating reply drafts for your review.",
    "step.4.num": "04",
    "step.4.title": "Release",
    "step.4.desc": "You review and approve every draft — nothing is ever sent without your approval.",

    "features.eyebrow": "Features",
    "features.h2": "Everything a modern hotel needs",
    "feat.1.title": "24/7 Intelligent Concierge",
    "feat.1.desc": "The AI concierge detects the guest's language automatically and responds multilingually in seconds.",
    "feat.2.title": "Email Automation",
    "feat.2.desc": "Welcome emails, FAQ responses, upselling, and review requests — automatically drafted, approved by you.",
    "feat.3.title": "Kurtaxe Reporting",
    "feat.3.desc": "Monthly Kurtaxe table for the City of Luzern generated automatically and ready for export.",
    "feat.4.title": "HESTA Reports",
    "feat.4.desc": "Monthly accommodation statistics for the Federal Statistical Office, formatted for eHESTA upload.",
    "feat.5.title": "Lucerne Guest Card",
    "feat.5.desc": "Automatic QR guest card delivery by email before arrival.",
    "feat.6.title": "WhatsApp Concierge",
    "feat.6.desc": "AI-powered WhatsApp channel for direct guest communication in real time.",
    "badge.soon": "Coming Q3 2026",

    "compliance.eyebrow": "Swiss Compliance",
    "compliance.h2": "Swiss Compliance — automated",
    "comp.k.title": "Kurtaxe City of Luzern",
    "comp.k.1": "Monthly billing per Kurtaxenreglement 9.2.4.1.1",
    "comp.k.2": "CHF 2.80 per adult/night (4–5★ hotels)",
    "comp.k.3": "Automatic exemptions: children under 12, Luzern residents",
    "comp.k.4": "Excel export for submission before the 30th of the following month",
    "comp.h.title": "HESTA Reports",
    "comp.h.1": "Monthly report for the Federal Statistical Office",
    "comp.h.2": "Arrivals and overnight stays by country of residence",
    "comp.h.3": "Average revenue per person/night",
    "comp.h.4": "Export ready for upload to eHESTA",
    "comp.mockup.label": "Kurtaxe Report May 2026",
    "comp.mockup.footer": "Automatically generated by ZORA · Ready to export",

    "demo.eyebrow": "Live Demo",
    "demo.h2": "Talk to a real AI concierge",
    "demo.p": "This is exactly what your guests will experience. Try it yourself — ask in English, German, French, or any other language.",
    "demo.f1": "Responds automatically in the guest's language",
    "demo.f2": "Knows all the details about the hotel",
    "demo.f3": "Available 24 hours, 7 days a week",
    "demo.f4": "Via email: targeted upgrade offers before check-in",
    "demo.f5": "Via email: booking details captured automatically",
    "demo.chat.hotel": "Hotel Zora Luzern",
    "demo.chat.sub": "Virtual Concierge · 24h",
    "demo.chat.online": "Online",
    "demo.chat.welcome": "Welcome to Hotel Zora Luzern. I am your virtual concierge, available around the clock.\n\nHow may I assist you today?",
    "demo.q1": "Check-in time?",
    "demo.q2": "Breakfast included?",
    "demo.q3": "Parking available?",
    "demo.q4": "Book a room",
    "demo.placeholder": "Ask anything...",
    "demo.error": "I apologize, there seems to be a technical issue. Please try again.",

    "widget.label": "Questions about ZORA?",
    "widget.title": "ZORA Assistant",
    "widget.sub": "Product questions · Answered in seconds",
    "widget.welcome": "Hello. I am the ZORA assistant. Ask me what ZORA does, what it costs, or how setup works.",
    "widget.placeholder": "Your question about ZORA...",

    "pricing.eyebrow": "Pricing",
    "pricing.h2": "Simple, transparent pricing",
    "pricing.sub": "No contracts. Cancel anytime. Free setup this month.",
    "plan.core.name": "Core",
    "plan.core.setup": "CHF 500 setup fee",
    "plan.core.free": "Setup included this month",
    "plan.core.price": "CHF 179",
    "plan.core.period": "per month",
    "plan.core.f1": "24/7 AI Concierge (multilingual)",
    "plan.core.f2": "Welcome email on reservation",
    "plan.core.f3": "Automatic FAQ email responses",
    "plan.core.f4": "Pre check-in upselling email",
    "plan.core.f5": "Reservations dashboard",
    "plan.core.cta": "Get started",
    "plan.elite.name": "Elite",
    "plan.elite.badge": "Most popular",
    "plan.elite.setup": "CHF 1,200 setup fee",
    "plan.elite.free": "Early adopters — setup included",
    "plan.elite.price": "CHF 399",
    "plan.elite.period": "per month",
    "plan.elite.f1": "Everything in Core",
    "plan.elite.f2": "Kurtaxe & HESTA automation",
    "plan.elite.f3": "Lucerne Guest Card (QR delivery)",
    "plan.elite.f4": "WhatsApp AI Concierge",
    "plan.elite.f5": "Booking.com auto-responses",
    "plan.elite.f6": "Priority support",
    "plan.elite.cta": "Get started",
    "trust.1": "Guest data is never shared with third parties",
    "trust.2": "nDSG & GDPR compliant",
    "trust.3": "No long-term contracts",
    "trust.4": "Encrypted data transmission",

    "faq.eyebrow": "FAQ",
    "faq.h2": "Frequently asked questions",
    "faq.q1": "Do I need to change my PMS or booking system?",
    "faq.a1": "No. ZORA works alongside your existing system. We only need access to your hotel's email inbox — no technical integration, no IT department required.",
    "faq.q2": "How secure is my guests' data?",
    "faq.a2": "All data is stored on European servers, transmitted encrypted, and never shared with third parties. ZORA is fully compliant with Swiss nDSG and EU GDPR.",
    "faq.q3": "How long does setup take?",
    "faq.a3": "Setup is fast and requires no technical installation. As soon as you grant us access to the email account, we configure ZORA for you.",
    "faq.q4": "Can I cancel ZORA at any time?",
    "faq.a4": "Yes. You can cancel monthly, without explanation. Your data will be completely deleted within 30 days.",
    "faq.q5": "What if ZORA makes a mistake?",
    "faq.a5": "ZORA generates drafts — you always retain final control. Every reply is reviewed and approved by your team before it goes out. Nothing leaves the house without your approval.",
    "faq.q6": "What languages does ZORA support?",
    "faq.a6": "The concierge automatically responds in the guest's language. It is multilingual and covers the common European languages and many more.",
    "faq.q7": "Which hotels use ZORA?",
    "faq.a7": "ZORA was built specifically for 3–5★ hotels in Switzerland. We are currently preparing our first pilot projects in Luzern and look forward to further partnerships.",
    "faq.q8": "Does ZORA integrate with my PMS?",
    "faq.a8": "PMS integration (e.g. Mews, Apaleo, or Protel) is on our roadmap. If your PMS is a priority for you, get in touch — we'll let you know as soon as the integration is available.",

    "contact.eyebrow": "Contact",
    "contact.h2": "Ready to automate your hotel?",
    "contact.sub": "Book a free 30-minute demo call. We'll show you exactly how ZORA works for your hotel.",
    "form.name": "Your name",
    "form.hotel": "Hotel name",
    "form.email": "Email address",
    "form.phone": "Phone number",
    "form.message": "Tell us about your hotel...",
    "form.privacy": "I agree to the <a href='/privacy.html'>Privacy Policy</a>. My data will be used solely to respond to my inquiry.",
    "form.submit": "Send message",

    "footer.tagline": "Intelligent Concierge for Swiss Hotels",
    "footer.col.product": "Product",
    "footer.col.company": "Company",
    "footer.col.legal": "Legal",
    "footer.product.1": "Solution",
    "footer.product.2": "Features",
    "footer.product.3": "Pricing",
    "footer.product.4": "Live Demo",
    "footer.company.1": "About",
    "footer.company.2": "Contact",
    "footer.company.3": "Careers",
    "footer.legal.1": "Impressum",
    "footer.legal.2": "Privacy Policy",
    "footer.legal.3": "Terms of Service",
    "footer.legal.4": "Cookie Policy",
    "footer.copy": "© 2026 ZORA — Adrián Zafrilla Ortiz · Kriens, Switzerland",

    "cookie.text": "We use cookies to improve our website and give you the best experience. Learn more in our <a href='/privacy.html'>Privacy Policy</a>.",
    "cookie.accept": "Accept all",
    "cookie.necessary": "Necessary only"
  },

  fr: {
    "nav.solution": "Solution",
    "nav.features": "Fonctionnalités",
    "nav.compliance": "Compliance",
    "nav.pricing": "Tarifs",
    "nav.faq": "FAQ",
    "nav.login": "Client Login",
    "nav.cta": "Commencer",
    "hero.eyebrow": "Intelligent Concierge pour Hôtels · Lucerne, Suisse",
    "hero.h1.line1": "Votre réception.",
    "hero.h1.line2": "Automatisée. Multilingue. Conforme.",
    "hero.sub": "ZORA gère la communication avec les clients, les rapports de taxe de séjour et les statistiques HESTA — pour que votre équipe se concentre sur l'essentiel.",
    "hero.btn1": "Voir la démo",
    "hero.btn2": "Prendre rendez-vous",
    "hero.note": "Installation gratuite ce mois-ci — Sans engagement",
    "stats.n1": "Multi", "stats.l1": "Concierge multilingue",
    "stats.n2": "15–25h", "stats.l2": "Temps économisé estimé/mois",
    "stats.n3": "0", "stats.l3": "Installation technique requise",
    "stats.n4": "CH+EU", "stats.l4": "Conçu pour la nLPD suisse & le RGPD UE",
    "problem.eyebrow": "Le Problème",
    "problem.h2": "Votre réception perd des heures — nous savons où.",
    "problem.p": "Les hôtels en Suisse répondent à des centaines de demandes répétitives chaque semaine, toujours les mêmes questions. ZORA automatise ces tâches répétitives.",
    "pain.1": "Demandes e-mail répétitives", "pain.2": "Déclarations fiscales manuelles",
    "pain.3": "Barrières linguistiques", "pain.4": "Saisie manuelle des données",
    "pain.5": "Disponibilité 24/7 attendue",
    "solution.eyebrow": "La Solution", "solution.h2": "Une plateforme pour toute la communication client",
    "solution.sub": "ZORA s'intègre à votre hôtel sans changer de système existant.",
    "sol.c1.title": "Automatisation e-mail", "sol.c1.desc": "Réservations, FAQ et demandes spéciales classifiées et répondues automatiquement.",
    "sol.c1.f1": "E-mail de bienvenue à la réservation", "sol.c1.f2": "Réponses FAQ automatiques",
    "sol.c1.f3": "Upselling 24h avant check-in", "sol.c1.f4": "Demande d'avis après check-out",
    "sol.c2.title": "Compliance Suisse", "sol.c2.desc": "Taxe de séjour et HESTA générés automatiquement chaque mois.",
    "sol.c2.f1": "Taxe de séjour ville de Lucerne", "sol.c2.f2": "Rapport HESTA Office fédéral",
    "sol.c2.f3": "Export Excel prêt à soumettre", "sol.c2.f4": "Aucune saisie manuelle",
    "sol.c3.title": "Upselling & Concierge", "sol.c3.desc": "Le concierge IA répond aux clients dans leur langue au bon moment.",
    "sol.c3.f1": "Langue du client détectée automatiquement", "sol.c3.f2": "Offres de surclassement avant check-in",
    "sol.c3.f3": "Capture et transmission des demandes", "sol.c3.f4": "Canal WhatsApp (À venir T3 2026)",
    "how.eyebrow": "Comment ça marche", "how.h2": "Opérationnel rapidement — sans installation technique",
    "step.1.num": "01", "step.1.title": "Connecter", "step.1.desc": "Vous nous donnez accès à la boîte e-mail de l'hôtel.",
    "step.2.num": "02", "step.2.title": "Configurer", "step.2.desc": "Nous importons vos informations et adaptons ZORA à votre marque.",
    "step.3.num": "03", "step.3.title": "Activer", "step.3.desc": "ZORA commence à classifier et générer des brouillons de réponse.",
    "step.4.num": "04", "step.4.title": "Valider", "step.4.desc": "Vous vérifiez et validez chaque brouillon — rien n'est envoyé sans votre approbation.",
    "features.eyebrow": "Fonctionnalités", "features.h2": "Tout ce dont un hôtel moderne a besoin",
    "feat.1.title": "Concierge IA 24/7", "feat.1.desc": "Détecte la langue du client et répond en quelques secondes, dans sa langue.",
    "feat.2.title": "Automatisation e-mail", "feat.2.desc": "E-mails de bienvenue, FAQ, upselling et avis — préparés automatiquement, validés par vous.",
    "feat.3.title": "Taxe de séjour", "feat.3.desc": "Tableau mensuel pour la ville de Lucerne, généré automatiquement.",
    "feat.4.title": "Rapports HESTA", "feat.4.desc": "Statistiques d'hébergement pour l'Office fédéral de la statistique.",
    "feat.5.title": "Carte client Lucerne", "feat.5.desc": "Envoi automatique de la carte QR par e-mail avant l'arrivée.",
    "feat.6.title": "Concierge WhatsApp", "feat.6.desc": "Canal WhatsApp IA pour la communication directe avec les clients.",
    "badge.soon": "À venir T3 2026",
    "compliance.eyebrow": "Compliance Suisse", "compliance.h2": "Compliance suisse — automatisée",
    "comp.k.title": "Taxe de séjour Lucerne",
    "comp.k.1": "Facturation mensuelle selon le règlement 9.2.4.1.1",
    "comp.k.2": "CHF 2.80 par adulte/nuit (hôtels 4–5★)",
    "comp.k.3": "Exemptions automatiques: enfants <12, résidents",
    "comp.k.4": "Export Excel pour soumission avant le 30 du mois suivant",
    "comp.h.title": "Rapports HESTA",
    "comp.h.1": "Rapport mensuel pour l'Office fédéral de la statistique",
    "comp.h.2": "Arrivées et nuitées par pays de résidence",
    "comp.h.3": "Revenus moyens par personne/nuit",
    "comp.h.4": "Export prêt pour téléchargement sur eHESTA",
    "comp.mockup.label": "Taxe de séjour Mai 2026",
    "comp.mockup.footer": "Généré automatiquement par ZORA · Prêt à exporter",
    "demo.eyebrow": "Démo en direct", "demo.h2": "Parlez à un vrai concierge IA",
    "demo.p": "C'est exactement ce que vos clients vivront. Essayez en français ou toute autre langue.",
    "demo.f1": "Répond automatiquement dans la langue du client",
    "demo.f2": "Connaît tous les détails de l'hôtel",
    "demo.f3": "Disponible 24h/24, 7j/7",
    "demo.f4": "Par e-mail : offres de surclassement ciblées avant le check-in",
    "demo.f5": "Par e-mail : saisie automatique des détails de réservation",
    "demo.chat.hotel": "Hotel Zora Lucerne", "demo.chat.sub": "Concierge virtuel · 24h",
    "demo.chat.online": "En ligne",
    "demo.chat.welcome": "Bienvenue à l'Hotel Zora Lucerne. Je suis votre concierge virtuel, disponible 24h/24.\n\nComment puis-je vous aider?",
    "demo.q1": "Heure check-in?", "demo.q2": "Petit-déjeuner inclus?",
    "demo.q3": "Parking disponible?", "demo.q4": "Réserver une chambre",
    "demo.placeholder": "Posez une question...",
    "demo.error": "Désolé, un problème technique s'est produit. Veuillez réessayer.",
    "widget.label": "Des questions sur ZORA?",
    "widget.title": "Assistant ZORA",
    "widget.sub": "Questions produit · Réponse en quelques secondes",
    "widget.welcome": "Bonjour. Je suis l'assistant ZORA. Demandez-moi ce que fait ZORA, ses tarifs ou comment fonctionne l'installation.",
    "widget.placeholder": "Votre question sur ZORA...",
    "pricing.eyebrow": "Tarifs", "pricing.h2": "Des tarifs simples et transparents",
    "pricing.sub": "Sans contrat. Résiliation mensuelle. Installation gratuite ce mois-ci.",
    "plan.core.name": "Core", "plan.core.setup": "CHF 500 frais d'installation",
    "plan.core.free": "Installation offerte ce mois-ci",
    "plan.core.price": "CHF 179", "plan.core.period": "par mois",
    "plan.core.f1": "Concierge IA 24/7 (multilingue)", "plan.core.f2": "E-mail de bienvenue à la réservation",
    "plan.core.f3": "Réponses FAQ automatiques", "plan.core.f4": "Upselling avant check-in",
    "plan.core.f5": "Dashboard des réservations", "plan.core.cta": "Commencer",
    "plan.elite.name": "Elite", "plan.elite.badge": "Le plus populaire",
    "plan.elite.setup": "CHF 1.200 frais d'installation",
    "plan.elite.free": "Early adopters — installation incluse",
    "plan.elite.price": "CHF 399", "plan.elite.period": "par mois",
    "plan.elite.f1": "Tout du Core", "plan.elite.f2": "Taxe de séjour & HESTA",
    "plan.elite.f3": "Carte client Lucerne (QR)", "plan.elite.f4": "Concierge WhatsApp IA",
    "plan.elite.f5": "Réponses automatiques Booking.com", "plan.elite.f6": "Support prioritaire",
    "plan.elite.cta": "Commencer",
    "trust.1": "Données des clients jamais partagées", "trust.2": "Conforme nLPD & RGPD",
    "trust.3": "Sans engagement long terme", "trust.4": "Transmission de données chiffrée",
    "faq.eyebrow": "FAQ", "faq.h2": "Questions fréquentes",
    "faq.q1": "Dois-je changer mon PMS?", "faq.a1": "Non. ZORA fonctionne en parallèle de votre système existant. Nous avons uniquement besoin d'accès à la boîte e-mail de l'hôtel.",
    "faq.q2": "Les données sont-elles sécurisées?", "faq.a2": "Toutes les données sont stockées sur des serveurs européens, chiffrées et jamais partagées. ZORA est conforme à la nLPD suisse et au RGPD européen.",
    "faq.q3": "Combien de temps dure l'installation?", "faq.a3": "La mise en route est rapide et ne nécessite aucune installation technique. Dès que vous nous donnez accès au compte e-mail, nous configurons ZORA pour vous.",
    "faq.q4": "Puis-je résilier à tout moment?", "faq.a4": "Oui. Résiliation mensuelle sans justification. Vos données seront supprimées dans les 30 jours.",
    "faq.q5": "Que se passe-t-il en cas d'erreur?", "faq.a5": "ZORA génère des brouillons — vous gardez toujours le contrôle final. Chaque réponse est vérifiée et validée par votre équipe avant l'envoi. Rien ne part sans votre approbation.",
    "faq.q6": "Quelles langues sont supportées?", "faq.a6": "Le concierge répond automatiquement dans la langue du client. Il est multilingue et couvre les principales langues européennes et bien d'autres.",
    "faq.q7": "Quels hôtels utilisent ZORA?", "faq.a7": "ZORA est conçu pour les hôtels 3–5★ en Suisse. Nous préparons actuellement les premiers projets pilotes à Lucerne et nous réjouissons de nouveaux partenariats.",
    "faq.q8": "ZORA s'intègre-t-il à mon PMS?", "faq.a8": "L'intégration PMS (Mews, Apaleo, Protel) est sur notre feuille de route. Si votre PMS est prioritaire pour vous, contactez-nous — nous vous informerons dès qu'elle sera disponible.",
    "contact.eyebrow": "Contact", "contact.h2": "Prêt à automatiser votre hôtel?",
    "contact.sub": "Réservez un appel de démonstration gratuit de 30 minutes.",
    "form.name": "Votre nom", "form.hotel": "Nom de l'hôtel",
    "form.email": "Adresse e-mail", "form.phone": "Numéro de téléphone",
    "form.message": "Parlez-nous de votre hôtel...",
    "form.privacy": "J'accepte la <a href='/privacy.html'>Politique de confidentialité</a>.",
    "form.submit": "Envoyer le message",
    "footer.tagline": "Intelligent Concierge pour Hôtels Suisses",
    "footer.col.product": "Produit", "footer.col.company": "Entreprise", "footer.col.legal": "Légal",
    "footer.product.1": "Solution", "footer.product.2": "Fonctionnalités", "footer.product.3": "Tarifs", "footer.product.4": "Démo en direct",
    "footer.company.1": "À propos", "footer.company.2": "Contact", "footer.company.3": "Carrières",
    "footer.legal.1": "Mentions légales", "footer.legal.2": "Confidentialité", "footer.legal.3": "CGV", "footer.legal.4": "Cookies",
    "footer.copy": "© 2026 ZORA — Adrián Zafrilla Ortiz · Kriens, Suisse",
    "cookie.text": "Nous utilisons des cookies pour améliorer notre site. En savoir plus dans notre <a href='/privacy.html'>politique de confidentialité</a>.",
    "cookie.accept": "Tout accepter", "cookie.necessary": "Nécessaires uniquement"
  },

  it: {
    "nav.solution": "Soluzione", "nav.features": "Funzionalità", "nav.compliance": "Compliance",
    "nav.pricing": "Prezzi", "nav.faq": "FAQ", "nav.login": "Client Login", "nav.cta": "Inizia ora",
    "hero.eyebrow": "Intelligent Concierge per Hotel · Lucerna, Svizzera",
    "hero.h1.line1": "La vostra reception.", "hero.h1.line2": "Automatizzata. Multilingue. Conforme.",
    "hero.sub": "ZORA gestisce la comunicazione con gli ospiti, le dichiarazioni Kurtaxe e le statistiche HESTA.",
    "hero.btn1": "Vedi la demo", "hero.btn2": "Prenota una chiamata",
    "hero.note": "Installazione gratuita questo mese — Nessun contratto",
    "stats.n1": "Multi", "stats.l1": "Concierge multilingue",
    "stats.n2": "15–25h", "stats.l2": "Tempo risparmiato stimato/mese",
    "stats.n3": "0", "stats.l3": "Installazione tecnica richiesta",
    "stats.n4": "CH+EU", "stats.l4": "Progettato per la nLPD svizzera & il GDPR UE",
    "problem.eyebrow": "Il Problema", "problem.h2": "La vostra reception perde ore — sappiamo dove.",
    "problem.p": "Gli hotel in Svizzera rispondono a centinaia di richieste ripetitive ogni settimana, sempre le stesse domande. ZORA automatizza queste attività ripetitive.",
    "pain.1": "Richieste e-mail ripetitive", "pain.2": "Dichiarazioni fiscali manuali",
    "pain.3": "Barriere linguistiche con gli ospiti", "pain.4": "Inserimento manuale dei dati",
    "pain.5": "Disponibilità 24/7 richiesta",
    "solution.eyebrow": "La Soluzione", "solution.h2": "Una piattaforma per tutta la comunicazione con gli ospiti",
    "solution.sub": "ZORA si integra nel vostro hotel senza cambiare alcun sistema esistente.",
    "sol.c1.title": "Automazione e-mail", "sol.c1.desc": "Prenotazioni, FAQ e richieste speciali classificate e risposte automaticamente.",
    "sol.c1.f1": "E-mail di benvenuto alla prenotazione", "sol.c1.f2": "Risposte FAQ automatiche",
    "sol.c1.f3": "Upselling 24h prima del check-in", "sol.c1.f4": "Richiesta recensione dopo check-out",
    "sol.c2.title": "Compliance Svizzera", "sol.c2.desc": "Kurtaxe e HESTA generati automaticamente ogni mese.",
    "sol.c2.f1": "Fatturazione Kurtaxe Città di Lucerna", "sol.c2.f2": "Rapporto HESTA Ufficio federale",
    "sol.c2.f3": "Export Excel pronto da inviare", "sol.c2.f4": "Nessuna inserimento manuale",
    "sol.c3.title": "Upselling & Concierge", "sol.c3.desc": "Il concierge IA risponde agli ospiti nella loro lingua al momento giusto.",
    "sol.c3.f1": "Lingua dell'ospite rilevata automaticamente", "sol.c3.f2": "Offerte di upgrade prima del check-in",
    "sol.c3.f3": "Acquisizione e inoltro richieste speciali", "sol.c3.f4": "Canale WhatsApp (In arrivo T3 2026)",
    "how.eyebrow": "Come funziona", "how.h2": "Operativo rapidamente — senza installazione tecnica",
    "step.1.num": "01", "step.1.title": "Connettere", "step.1.desc": "Fornite l'accesso alla casella e-mail dell'hotel.",
    "step.2.num": "02", "step.2.title": "Configurare", "step.2.desc": "Importiamo le informazioni e adattiamo ZORA al vostro brand.",
    "step.3.num": "03", "step.3.title": "Attivare", "step.3.desc": "ZORA inizia a classificare le e-mail e generare bozze di risposta.",
    "step.4.num": "04", "step.4.title": "Approvare", "step.4.desc": "Verificate e approvate ogni bozza — nulla viene inviato senza la vostra approvazione.",
    "features.eyebrow": "Funzionalità", "features.h2": "Tutto ciò di cui un hotel moderno ha bisogno",
    "feat.1.title": "Concierge IA 24/7", "feat.1.desc": "Rileva la lingua dell'ospite e risponde in pochi secondi, nella sua lingua.",
    "feat.2.title": "Automazione e-mail", "feat.2.desc": "E-mail di benvenuto, FAQ, upselling e richieste di recensione — preparati automaticamente, approvati da voi.",
    "feat.3.title": "Kurtaxe", "feat.3.desc": "Tabella mensuale per la Città di Lucerna generata automaticamente.",
    "feat.4.title": "Rapporti HESTA", "feat.4.desc": "Statistiche mensili per l'Ufficio federale di statistica, formattate per eHESTA.",
    "feat.5.title": "Carta ospite Lucerna", "feat.5.desc": "Invio automatico della carta QR per e-mail prima dell'arrivo.",
    "feat.6.title": "Concierge WhatsApp", "feat.6.desc": "Canale WhatsApp IA per la comunicazione diretta con gli ospiti.",
    "badge.soon": "In arrivo T3 2026",
    "compliance.eyebrow": "Compliance Svizzera", "compliance.h2": "Compliance svizzera — automatizzata",
    "comp.k.title": "Kurtaxe Città di Lucerna",
    "comp.k.1": "Fatturazione mensile secondo il regolamento 9.2.4.1.1",
    "comp.k.2": "CHF 2.80 per adulto/notte (hotel 4–5★)",
    "comp.k.3": "Esenzioni automatiche: bambini <12, residenti di Lucerna",
    "comp.k.4": "Export Excel per invio entro il 30 del mese successivo",
    "comp.h.title": "Rapporti HESTA",
    "comp.h.1": "Rapporto mensile per l'Ufficio federale di statistica",
    "comp.h.2": "Arrivi e pernottamenti per paese di residenza",
    "comp.h.3": "Entrate medie per persona/notte",
    "comp.h.4": "Export pronto per il caricamento su eHESTA",
    "comp.mockup.label": "Kurtaxe Maggio 2026", "comp.mockup.footer": "Generato automaticamente da ZORA · Pronto per l'export",
    "demo.eyebrow": "Demo dal vivo", "demo.h2": "Parlate con un vero concierge IA",
    "demo.p": "Esattamente quello che vivranno i vostri ospiti. Provate in italiano o qualsiasi altra lingua.",
    "demo.f1": "Risponde automaticamente nella lingua dell'ospite",
    "demo.f2": "Conosce tutti i dettagli dell'hotel",
    "demo.f3": "Disponibile 24 ore, 7 giorni su 7",
    "demo.f4": "Via e-mail: offerte di upgrade mirate prima del check-in",
    "demo.f5": "Via e-mail: acquisizione automatica dei dati di prenotazione",
    "demo.chat.hotel": "Hotel Zora Lucerna", "demo.chat.sub": "Concierge virtuale · 24h",
    "demo.chat.online": "Online",
    "demo.chat.welcome": "Benvenuti all'Hotel Zora Lucerna. Sono il vostro concierge virtuale, disponibile 24 ore su 24.\n\nCome posso aiutarvi?",
    "demo.q1": "Orario check-in?", "demo.q2": "Colazione inclusa?",
    "demo.q3": "Parcheggio disponibile?", "demo.q4": "Prenotare una camera",
    "demo.placeholder": "Fate una domanda...",
    "demo.error": "Mi scuso, si è verificato un problema tecnico. Riprovate.",
    "widget.label": "Domande su ZORA?",
    "widget.title": "Assistente ZORA",
    "widget.sub": "Domande sul prodotto · Risposta in pochi secondi",
    "widget.welcome": "Buongiorno. Sono l'assistente ZORA. Chiedetemi cosa fa ZORA, quanto costa o come funziona l'installazione.",
    "widget.placeholder": "La vostra domanda su ZORA...",
    "pricing.eyebrow": "Prezzi", "pricing.h2": "Prezzi semplici e trasparenti",
    "pricing.sub": "Nessun contratto. Cancellazione mensile. Installazione gratuita questo mese.",
    "plan.core.name": "Core", "plan.core.setup": "CHF 500 spese di installazione",
    "plan.core.free": "Installazione inclusa questo mese",
    "plan.core.price": "CHF 179", "plan.core.period": "al mese",
    "plan.core.f1": "Concierge IA 24/7 (multilingue)", "plan.core.f2": "E-mail di benvenuto alla prenotazione",
    "plan.core.f3": "Risposte FAQ automatiche", "plan.core.f4": "Upselling prima del check-in",
    "plan.core.f5": "Dashboard prenotazioni", "plan.core.cta": "Inizia ora",
    "plan.elite.name": "Elite", "plan.elite.badge": "Più popolare",
    "plan.elite.setup": "CHF 1.200 spese di installazione",
    "plan.elite.free": "Early adopters — installazione inclusa",
    "plan.elite.price": "CHF 399", "plan.elite.period": "al mese",
    "plan.elite.f1": "Tutto del Core", "plan.elite.f2": "Kurtaxe & HESTA automatizzati",
    "plan.elite.f3": "Carta ospite Lucerna (QR)", "plan.elite.f4": "Concierge WhatsApp IA",
    "plan.elite.f5": "Risposte automatiche Booking.com", "plan.elite.f6": "Supporto prioritario",
    "plan.elite.cta": "Inizia ora",
    "trust.1": "I dati degli ospiti non vengono mai condivisi", "trust.2": "Conforme nLPD & GDPR",
    "trust.3": "Nessun contratto a lungo termine", "trust.4": "Trasmissione dati crittografata",
    "faq.eyebrow": "FAQ", "faq.h2": "Domande frequenti",
    "faq.q1": "Devo cambiare il mio PMS?", "faq.a1": "No. ZORA lavora in parallelo al vostro sistema esistente. Abbiamo solo bisogno dell'accesso alla casella e-mail dell'hotel.",
    "faq.q2": "I dati degli ospiti sono al sicuro?", "faq.a2": "Tutti i dati sono memorizzati su server europei, trasmessi in modo crittografato e non condivisi. ZORA è conforme alla nLPD svizzera e al GDPR europeo.",
    "faq.q3": "Quanto tempo richiede l'installazione?", "faq.a3": "L'attivazione è rapida e non richiede alcuna installazione tecnica. Non appena ci concedete l'accesso all'account e-mail, configuriamo ZORA per voi.",
    "faq.q4": "Posso cancellare in qualsiasi momento?", "faq.a4": "Sì. Cancellazione mensile senza giustificazione. I vostri dati verranno eliminati entro 30 giorni.",
    "faq.q5": "Cosa succede se ZORA fa un errore?", "faq.a5": "ZORA genera bozze — mantenete sempre il controllo finale. Ogni risposta viene verificata e approvata dal vostro team prima dell'invio. Nulla parte senza la vostra approvazione.",
    "faq.q6": "In quali lingue funziona ZORA?", "faq.a6": "Il concierge risponde automaticamente nella lingua dell'ospite. È multilingue e copre le principali lingue europee e molte altre.",
    "faq.q7": "Quali hotel usano ZORA?", "faq.a7": "ZORA è stato sviluppato per hotel 3–5★ in Svizzera. Stiamo preparando i primi progetti pilota a Lucerna e attendiamo con interesse nuove collaborazioni.",
    "faq.q8": "ZORA si integra con il mio PMS?", "faq.a8": "L'integrazione PMS (Mews, Apaleo, Protel) è nella nostra roadmap. Se il vostro PMS è una priorità, contattateci — vi informeremo non appena sarà disponibile.",
    "contact.eyebrow": "Contatto", "contact.h2": "Pronti ad automatizzare il vostro hotel?",
    "contact.sub": "Prenotate una chiamata demo gratuita di 30 minuti.",
    "form.name": "Il vostro nome", "form.hotel": "Nome dell'hotel",
    "form.email": "Indirizzo e-mail", "form.phone": "Numero di telefono",
    "form.message": "Parlateci del vostro hotel...",
    "form.privacy": "Accetto la <a href='/privacy.html'>Informativa sulla privacy</a>.",
    "form.submit": "Invia messaggio",
    "footer.tagline": "Intelligent Concierge per Hotel Svizzeri",
    "footer.col.product": "Prodotto", "footer.col.company": "Azienda", "footer.col.legal": "Legale",
    "footer.product.1": "Soluzione", "footer.product.2": "Funzionalità", "footer.product.3": "Prezzi", "footer.product.4": "Demo dal vivo",
    "footer.company.1": "Chi siamo", "footer.company.2": "Contatto", "footer.company.3": "Carriere",
    "footer.legal.1": "Note legali", "footer.legal.2": "Privacy", "footer.legal.3": "Termini", "footer.legal.4": "Cookie",
    "footer.copy": "© 2026 ZORA — Adrián Zafrilla Ortiz · Kriens, Svizzera",
    "cookie.text": "Utilizziamo i cookie per migliorare il sito. Per saperne di più, consultate la nostra <a href='/privacy.html'>informativa sulla privacy</a>.",
    "cookie.accept": "Accetta tutto", "cookie.necessary": "Solo necessari"
  }
};

/* ============================================================ */
/* I18N ENGINE                                                  */
/* ============================================================ */
var currentLang = 'de';

function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) ||
         (translations['de'] && translations['de'][key]) || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    var val = t(key);
    if (val) el.innerHTML = val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-placeholder');
    var val = t(key);
    if (val) el.placeholder = val;
  });
  /* update chat welcome if chat has been initialized */
  var chatFirstMsg = document.querySelector('#messages .msg.bot .bubble');
  if (chatFirstMsg && chatFirstMsg.dataset.welcome) {
    chatFirstMsg.textContent = t('demo.chat.welcome');
  }
  /* update widget welcome if widget has been opened */
  var zwFirstMsg = document.querySelector('#zw-messages .msg.bot .bubble');
  if (zwFirstMsg && zwFirstMsg.dataset.welcome) {
    zwFirstMsg.textContent = t('widget.welcome');
  }
}

function setLang(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-btn').forEach(function(b) {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  applyTranslations();
}

/* ============================================================ */
/* NAVBAR SCROLL BEHAVIOR                                       */
/* ============================================================ */
function initNavbar() {
  var navbar = document.getElementById('navbar');
  if (!navbar) return;
  function onScroll() {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ============================================================ */
/* MOBILE MENU                                                  */
/* ============================================================ */
function initMobileMenu() {
  var hamburger = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobile-menu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', function() {
    var open = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
  });

  mobileMenu.querySelectorAll('a').forEach(function(a) {
    a.addEventListener('click', function() {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });
}

/* ============================================================ */
/* FAQ ACCORDION                                                */
/* ============================================================ */
function initFaq() {
  document.querySelectorAll('.faq-item').forEach(function(item) {
    var btn = item.querySelector('.faq-question');
    var answer = item.querySelector('.faq-answer');
    if (!btn || !answer) return;

    btn.addEventListener('click', function() {
      var isOpen = item.classList.contains('open');
      /* close all */
      document.querySelectorAll('.faq-item').forEach(function(i) {
        i.classList.remove('open');
        var a = i.querySelector('.faq-answer');
        if (a) a.style.maxHeight = '0';
      });
      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

/* ============================================================ */
/* COOKIE BANNER                                                */
/* ============================================================ */
function initCookieBanner() {
  var banner = document.getElementById('cookie-banner');
  if (!banner) return;
  if (localStorage.getItem('cookie_consent')) {
    banner.classList.add('hidden');
    return;
  }
  document.getElementById('cookie-accept').addEventListener('click', function() {
    localStorage.setItem('cookie_consent', 'all');
    localStorage.setItem('cookie_consent_date', Date.now());
    banner.classList.add('hidden');
  });
  document.getElementById('cookie-necessary').addEventListener('click', function() {
    localStorage.setItem('cookie_consent', 'necessary');
    localStorage.setItem('cookie_consent_date', Date.now());
    banner.classList.add('hidden');
  });
}

/* ============================================================ */
/* CHATBOT DEMO                                                 */
/* ============================================================ */
var chatHistory = [];
var API_URL = 'https://zora-backend-production.up.railway.app/v1/chat';

function addMessage(text, who) {
  var messages = document.getElementById('messages');
  if (!messages) return;
  var div = document.createElement('div');
  div.className = 'msg ' + who;
  var initials = who === 'bot' ? 'AC' : 'You';
  var bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.textContent = text;
  if (who === 'bot' && chatHistory.length === 0) {
    bubble.dataset.welcome = '1';
  }
  var avatar = document.createElement('div');
  avatar.className = 'msg-avatar';
  avatar.textContent = initials;
  div.appendChild(avatar);
  div.appendChild(bubble);
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function showTyping() {
  var messages = document.getElementById('messages');
  if (!messages) return;
  var div = document.createElement('div');
  div.className = 'msg bot';
  div.id = 'typing-indicator';
  var avatar = document.createElement('div');
  avatar.className = 'msg-avatar';
  avatar.textContent = 'AC';
  var bubble = document.createElement('div');
  bubble.className = 'typing-bubble';
  bubble.innerHTML = '<div class="dot"></div><div class="dot"></div><div class="dot"></div>';
  div.appendChild(avatar);
  div.appendChild(bubble);
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function hideTyping() {
  var el = document.getElementById('typing-indicator');
  if (el) el.remove();
}

function setLoading(on) {
  var btn = document.getElementById('send-btn');
  var input = document.getElementById('user-input');
  if (btn) btn.disabled = on;
  if (input) input.disabled = on;
}

function sendMessage() {
  var input = document.getElementById('user-input');
  if (!input) return;
  var text = input.value.trim();
  if (!text) return;
  var quickBtns = document.getElementById('quick-btns');
  if (quickBtns) quickBtns.style.display = 'none';
  input.value = '';
  addMessage(text, 'user');
  chatHistory.push({ role: 'user', content: text });
  setLoading(true);
  showTyping();

  /* el backend limita history a 10 turnos como máximo */
  fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      mode: 'concierge',
      message: text,
      history: chatHistory.slice(0, -1).slice(-10)
    })
  })
  .then(function(r) {
    if (!r.ok) throw new Error('HTTP ' + r.status);
    return r.json();
  })
  .then(function(data) {
    hideTyping();
    var reply = data.reply;
    if (!reply) throw new Error('no reply');
    addMessage(reply, 'bot');
    chatHistory.push({ role: 'assistant', content: reply });
    setLoading(false);
    if (input) input.focus();
  })
  .catch(function() {
    hideTyping();
    addMessage(t('demo.error'), 'bot');
    chatHistory.pop();
    setLoading(false);
  });
}

function sendQuick(text) {
  var input = document.getElementById('user-input');
  if (input) { input.value = text; sendMessage(); }
}

function initChat() {
  var input = document.getElementById('user-input');
  if (input) {
    input.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
    });
  }
  addMessage(t('demo.chat.welcome'), 'bot');
}

/* ============================================================ */
/* ZORA WIDGET — floating product chat (mode: zora)             */
/* ============================================================ */
var widgetHistory = [];

function zwAddMessage(text, who) {
  var messages = document.getElementById('zw-messages');
  if (!messages) return;
  var div = document.createElement('div');
  div.className = 'msg ' + who;
  var bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.textContent = text;
  if (who === 'bot' && widgetHistory.length === 0) {
    bubble.dataset.welcome = '1';
  }
  var avatar = document.createElement('div');
  avatar.className = 'msg-avatar';
  avatar.textContent = who === 'bot' ? 'Z' : 'You';
  div.appendChild(avatar);
  div.appendChild(bubble);
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function zwShowTyping() {
  var messages = document.getElementById('zw-messages');
  if (!messages) return;
  var div = document.createElement('div');
  div.className = 'msg bot';
  div.id = 'zw-typing-indicator';
  var avatar = document.createElement('div');
  avatar.className = 'msg-avatar';
  avatar.textContent = 'Z';
  var bubble = document.createElement('div');
  bubble.className = 'typing-bubble';
  bubble.innerHTML = '<div class="dot"></div><div class="dot"></div><div class="dot"></div>';
  div.appendChild(avatar);
  div.appendChild(bubble);
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function zwHideTyping() {
  var el = document.getElementById('zw-typing-indicator');
  if (el) el.remove();
}

function zwSetLoading(on) {
  var btn = document.getElementById('zw-send');
  var input = document.getElementById('zw-input');
  if (btn) btn.disabled = on;
  if (input) input.disabled = on;
}

function zwSendMessage() {
  var input = document.getElementById('zw-input');
  if (!input) return;
  var text = input.value.trim();
  if (!text) return;
  input.value = '';
  zwAddMessage(text, 'user');
  widgetHistory.push({ role: 'user', content: text });
  zwSetLoading(true);
  zwShowTyping();

  /* el backend limita history a 10 turnos como máximo */
  fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      mode: 'zora',
      message: text,
      history: widgetHistory.slice(0, -1).slice(-10)
    })
  })
  .then(function(r) {
    if (!r.ok) throw new Error('HTTP ' + r.status);
    return r.json();
  })
  .then(function(data) {
    zwHideTyping();
    var reply = data.reply;
    if (!reply) throw new Error('no reply');
    zwAddMessage(reply, 'bot');
    widgetHistory.push({ role: 'assistant', content: reply });
    zwSetLoading(false);
    if (input) input.focus();
  })
  .catch(function() {
    zwHideTyping();
    zwAddMessage(t('demo.error'), 'bot');
    widgetHistory.pop();
    zwSetLoading(false);
  });
}

function initWidget() {
  var toggle = document.getElementById('zw-toggle');
  var panel = document.getElementById('zw-panel');
  var closeBtn = document.getElementById('zw-close');
  var input = document.getElementById('zw-input');
  var sendBtn = document.getElementById('zw-send');
  if (!toggle || !panel) return;

  function setOpen(open) {
    panel.hidden = !open;
    toggle.setAttribute('aria-expanded', open);
    if (open) {
      /* welcome message only on first open */
      if (!document.querySelector('#zw-messages .msg')) {
        zwAddMessage(t('widget.welcome'), 'bot');
      }
      if (input) input.focus();
    }
  }

  toggle.addEventListener('click', function() { setOpen(panel.hidden); });
  if (closeBtn) closeBtn.addEventListener('click', function() { setOpen(false); });
  if (sendBtn) sendBtn.addEventListener('click', zwSendMessage);
  if (input) {
    input.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); zwSendMessage(); }
    });
  }
}

/* ============================================================ */
/* INIT                                                         */
/* ============================================================ */
document.addEventListener('DOMContentLoaded', function() {
  /* Set default language */
  setLang('de');

  /* Wire language buttons */
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.addEventListener('click', function() { setLang(btn.dataset.lang); });
  });

  initNavbar();
  initMobileMenu();
  initFaq();
  initCookieBanner();
  initChat();
  initWidget();
});
