
import { Language } from './types';

export interface Translation {
  header: {
    title: string;
    subtitle: string;
  };
  featureGrid: {
    onDemandTitle: string;
    onDemandDesc: string;
    multiAiTitle: string;
    multiAiDesc: string;
    detailedTitle: string;
    detailedDesc: string;
    fastAiTitle: string;
    fastAiDesc: string;
  };
  input: {
    placeholder: string;
    reset: string;
    analyze: string;
    uploadFile: string;
    uploadError: string;
    errorLength: string;
    errorGeneric: string;
  };
  samples: {
    label: string;
    fake: string;
    real: string;
  };
  modes: {
    AUTHENTICITY: string;
    SOCIAL_MEDIA: string;
    PERPLEXITY: string;
    CHATGPT: string;
    RELATED_NEWS: string;
    FAST: string;
  };
  imageFeatures: {
    cutNoiseTitle: string;
    cutNoiseDesc: string;
    dataInsightsTitle: string;
    dataInsightsDesc: string;
    globalPerspectiveTitle: string;
    globalPerspectiveDesc: string;
    poweredByTitle: string;
    poweredByDesc: string;
  };
  info: {
    howWorksTitle: string;
    howWorksDesc: string;
    tipsTitle: string;
    tip1: string;
    tip2: string;
    tip3: string;
    tip4: string;
    tip5: string;
  };
  history: {
    title: string;
    clear: string;
    reload: string;
  };
  results: {
    prediction: string;
    confidence: string;
    explanation: string;
    keyIndicators: string;
    headline: string;
    post: string;
    hashtags: string;
    summary: string;
    sources: string;
    keyPoints: string;
    conclusion: string;
    helpfulQuestion: string;
    helpfulYes: string;
    helpfulNo: string;
    relatedNewsSummary: string;
    foundSources: string;
    fastVerdict: string;
  };
  errors: {
    apiKey: string;
    rateLimit: string;
    network: string;
    parsing: string;
    server: string;
    generic: string;
  };
  footer: string;
}

export const translations: Record<Language, Translation> = {
  en: {
    header: {
      title: 'Fake News Detection',
      subtitle: 'AI-Powered News Authenticity Checker',
    },
    featureGrid: {
      onDemandTitle: 'On-Demand Analysis',
      onDemandDesc: "Get a detailed analysis whenever you're ready by clicking the analyze button.",
      multiAiTitle: 'Multi-AI Perspectives',
      multiAiDesc: 'Switch between different AI personas to get a well-rounded view on the news.',
      detailedTitle: 'Detailed Explanations',
      detailedDesc: 'Understand *why* an article is flagged with clear, AI-generated reasoning.',
      fastAiTitle: 'Fast AI Responses',
      fastAiDesc: 'Get near-instant analysis using the ultra-fast Gemini Flash Lite model.',
    },
    input: {
      placeholder: 'Start typing or paste news content here...',
      reset: 'Reset',
      analyze: 'Analyze',
      uploadFile: 'Upload File',
      uploadError: 'Error reading file',
      errorLength: 'Please enter at least 20 characters to analyze.',
      errorGeneric: 'An error occurred during analysis. Please try again.',
    },
    samples: {
      label: 'Try a sample:',
      fake: 'Fake News',
      real: 'Real News',
    },
    modes: {
      AUTHENTICITY: 'Authenticity',
      SOCIAL_MEDIA: 'Social Media',
      PERPLEXITY: 'Perplexity',
      CHATGPT: 'ChatGPT',
      RELATED_NEWS: 'Related News',
      FAST: 'Fast Check',
    },
    imageFeatures: {
      cutNoiseTitle: 'Cut Through the Noise',
      cutNoiseDesc: 'In an era of information overload, distinguishing fact from fiction is more challenging than ever. Our tool provides a first line of defense.',
      dataInsightsTitle: 'Data-Driven Insights',
      dataInsightsDesc: 'We cross-reference linguistic patterns with vast datasets of known misinformation styles to identify subtle cues of deceit.',
      globalPerspectiveTitle: 'Global Perspective',
      globalPerspectiveDesc: 'Analyze news from around the world with confidence. Our multi-language support ensures that you can verify information regardless of its origin.',
      poweredByTitle: 'Powered by Advanced AI',
      poweredByDesc: "Leveraging the sophisticated analytical power of Google's Gemini, our platform goes beyond simple keyword matching to understand context and tone.",
    },
    info: {
      howWorksTitle: 'How It Works',
      howWorksDesc: "This tool leverages Google's powerful Gemini model to analyze news content. It examines language patterns, source credibility, and consistency to determine authenticity.",
      tipsTitle: 'Tips for Spotting Fake News',
      tip1: 'Check the source: Look up the website or author.',
      tip2: 'Look for unusual formatting: Strange layouts or ALL CAPS.',
      tip3: 'Examine the evidence: Credible stories cite sources.',
      tip4: 'Check your biases: We tend to believe what we agree with.',
      tip5: 'Use fact-checking websites like Snopes or PolitiFact.',
    },
    history: {
      title: 'Analysis History',
      clear: 'Clear History',
      reload: 'Reload',
    },
    results: {
      prediction: 'Prediction',
      confidence: 'Confidence Score',
      explanation: 'AI Explanation',
      keyIndicators: 'Key Indicators from Text:',
      headline: 'Headline',
      post: 'Post',
      hashtags: 'Hashtags',
      summary: 'AI Summary:',
      sources: 'Suggested Sources:',
      keyPoints: 'Key Points:',
      conclusion: 'Conclusion:',
      helpfulQuestion: 'Was this analysis helpful?',
      helpfulYes: 'Helpful',
      helpfulNo: 'Not Helpful',
      relatedNewsSummary: 'Topic Overview & Consensus:',
      foundSources: 'Found Related Articles:',
      fastVerdict: 'Quick Verdict:',
    },
    errors: {
        apiKey: 'API Key is invalid or missing. Please check your configuration.',
        rateLimit: 'System is currently overloaded. Please wait a moment and try again.',
        network: 'Network error. Please check your internet connection.',
        parsing: 'Failed to interpret the AI response. Please try again.',
        server: 'The AI service is currently unavailable. Please try again later.',
        generic: 'An unexpected error occurred.',
    },
    footer: 'Powered by Gemini AI. For educational purposes only.',
  },
  es: {
    header: {
      title: 'Detección de Noticias Falsas',
      subtitle: 'Verificador de Autenticidad de Noticias con IA',
    },
    featureGrid: {
      onDemandTitle: 'Análisis a la Carta',
      onDemandDesc: 'Obtén un análisis detallado cuando estés listo haciendo clic en el botón de analizar.',
      multiAiTitle: 'Perspectivas Multi-IA',
      multiAiDesc: 'Cambia entre diferentes personas de IA para obtener una visión completa de la noticia.',
      detailedTitle: 'Explicaciones Detalladas',
      detailedDesc: 'Entiende *por qué* un artículo está marcado con un razonamiento claro generado por IA.',
      fastAiTitle: 'Respuestas Rápidas de IA',
      fastAiDesc: 'Obtén análisis casi instantáneos usando el modelo ultrarrápido Gemini Flash Lite.',
    },
    input: {
      placeholder: 'Comienza a escribir o pega el contenido de la noticia aquí...',
      reset: 'Reiniciar',
      analyze: 'Analizar',
      uploadFile: 'Subir Archivo',
      uploadError: 'Error al leer el archivo',
      errorLength: 'Por favor ingrese al menos 20 caracteres para analizar.',
      errorGeneric: 'Ocurrió un error durante el análisis. Por favor inténtalo de nuevo.',
    },
    samples: {
      label: 'Prueba un ejemplo:',
      fake: 'Noticia Falsa',
      real: 'Noticia Real',
    },
    modes: {
      AUTHENTICITY: 'Autenticidad',
      SOCIAL_MEDIA: 'Redes Sociales',
      PERPLEXITY: 'Perplexity',
      CHATGPT: 'ChatGPT',
      RELATED_NEWS: 'Noticias Relacionadas',
      FAST: 'Verificación Rápida',
    },
    imageFeatures: {
      cutNoiseTitle: 'Corta el Ruido',
      cutNoiseDesc: 'En una era de sobrecarga de información, distinguir la realidad de la ficción es un desafío. Nuestra herramienta proporciona una primera línea de defensa.',
      dataInsightsTitle: 'Perspectivas Basadas en Datos',
      dataInsightsDesc: 'Cruzamos patrones lingüísticos con vastos conjuntos de datos de desinformación conocida para identificar señales sutiles de engaño.',
      globalPerspectiveTitle: 'Perspectiva Global',
      globalPerspectiveDesc: 'Analiza noticias de todo el mundo con confianza. Nuestro soporte multilingüe asegura que puedas verificar información sin importar su origen.',
      poweredByTitle: 'Impulsado por IA Avanzada',
      poweredByDesc: 'Aprovechando el poder analítico sofisticado de Gemini de Google, nuestra plataforma va más allá de la coincidencia de palabras clave para entender el contexto.',
    },
    info: {
      howWorksTitle: 'Cómo Funciona',
      howWorksDesc: 'Esta herramienta aprovecha el modelo Gemini de Google para analizar noticias. Examina patrones de lenguaje y credibilidad de la fuente para determinar la autenticidad.',
      tipsTitle: 'Consejos para Detectar Noticias Falsas',
      tip1: 'Verifica la fuente: Busca el sitio web o autor.',
      tip2: 'Busca formato inusual: Diseños extraños o MAYÚSCULAS.',
      tip3: 'Examina la evidencia: Las historias creíbles citan fuentes.',
      tip4: 'Verifica tus sesgos: Tendemos a creer lo que acordamos.',
      tip5: 'Usa sitios de verificación de hechos.',
    },
    history: {
      title: 'Historial de Análisis',
      clear: 'Borrar Historial',
      reload: 'Recargar',
    },
    results: {
      prediction: 'Predicción',
      confidence: 'Puntuación de Confianza',
      explanation: 'Explicación de la IA',
      keyIndicators: 'Indicadores Clave del Texto:',
      headline: 'Titular',
      post: 'Publicación',
      hashtags: 'Hashtags',
      summary: 'Resumen de la IA:',
      sources: 'Fuentes Sugeridas:',
      keyPoints: 'Puntos Clave:',
      conclusion: 'Conclusión:',
      helpfulQuestion: '¿Fue útil este análisis?',
      helpfulYes: 'Útil',
      helpfulNo: 'No Útil',
      relatedNewsSummary: 'Resumen del Tema:',
      foundSources: 'Artículos Relacionados Encontrados:',
      fastVerdict: 'Veredicto Rápido:',
    },
    errors: {
        apiKey: 'La clave API no es válida o falta. Verifique su configuración.',
        rateLimit: 'El sistema está sobrecargado. Espere un momento e inténtelo de nuevo.',
        network: 'Error de red. Por favor verifique su conexión a internet.',
        parsing: 'No se pudo interpretar la respuesta de la IA. Inténtelo de nuevo.',
        server: 'El servicio de IA no está disponible actualmente. Inténtelo más tarde.',
        generic: 'Ocurrió un error inesperado.',
    },
    footer: 'Impulsado por Gemini AI. Solo para fines educativos.',
  },
  fr: {
    header: {
      title: 'Détection de Fausses Infos',
      subtitle: "Vérificateur d'Authenticité de l'Actualité par IA",
    },
    featureGrid: {
      onDemandTitle: 'Analyse à la Demande',
      onDemandDesc: "Obtenez une analyse détaillée quand vous êtes prêt en cliquant sur le bouton d'analyse.",
      multiAiTitle: 'Perspectives Multi-IA',
      multiAiDesc: 'Basculez entre différentes personas IA pour obtenir une vue complète de l\'actualité.',
      detailedTitle: 'Explications Détaillées',
      detailedDesc: 'Comprenez *pourquoi* un article est signalé avec un raisonnement clair généré par l\'IA.',
      fastAiTitle: 'Réponses IA Rapides',
      fastAiDesc: 'Obtenez une analyse quasi instantanée grâce au modèle ultra-rapide Gemini Flash Lite.',
    },
    input: {
      placeholder: 'Commencez à taper ou collez le contenu de l\'actualité ici...',
      reset: 'Réinitialiser',
      analyze: 'Analyser',
      uploadFile: 'Télécharger',
      uploadError: 'Erreur de lecture du fichier',
      errorLength: 'Veuillez entrer au moins 20 caractères pour analyser.',
      errorGeneric: 'Une erreur s\'est produite lors de l\'analyse. Veuillez réessayer.',
    },
    samples: {
      label: 'Essayez un exemple :',
      fake: 'Fausse Info',
      real: 'Vraie Info',
    },
    modes: {
      AUTHENTICITY: 'Authenticité',
      SOCIAL_MEDIA: 'Réseaux Sociaux',
      PERPLEXITY: 'Perplexity',
      CHATGPT: 'ChatGPT',
      RELATED_NEWS: 'Actualités Liées',
      FAST: 'Vérification Rapide',
    },
    imageFeatures: {
      cutNoiseTitle: 'Coupez le Bruit',
      cutNoiseDesc: 'À une époque de surcharge d\'informations, distinguer le fait de la fiction est un défi. Notre outil fournit une première ligne de défense.',
      dataInsightsTitle: 'Aperçus Basés sur les Données',
      dataInsightsDesc: 'Nous croisons les modèles linguistiques avec de vastes ensembles de données de désinformation connue pour identifier les indices subtils de tromperie.',
      globalPerspectiveTitle: 'Perspective Mondiale',
      globalPerspectiveDesc: 'Analysez les actualités du monde entier avec confiance. Notre support multilingue vous assure de pouvoir vérifier les informations.',
      poweredByTitle: 'Propulsé par une IA Avancée',
      poweredByDesc: 'Tirant parti de la puissance analytique sophistiquée de Gemini de Google, notre plateforme va au-delà de la simple correspondance de mots-clés.',
    },
    info: {
      howWorksTitle: 'Comment Ça Marche',
      howWorksDesc: 'Cet outil utilise le modèle Gemini de Google pour analyser le contenu des actualités. Il examine les modèles linguistiques et la crédibilité des sources.',
      tipsTitle: 'Conseils pour Repérer les Fausses Infos',
      tip1: 'Vérifiez la source : Recherchez le site web ou l\'auteur.',
      tip2: 'Cherchez un formatage inhabituel : Mises en page étranges.',
      tip3: 'Examinez les preuves : Les histoires crédibles citent des sources.',
      tip4: 'Vérifiez vos préjugés : Nous croyons ce qui nous confirme.',
      tip5: 'Utilisez des sites de vérification des faits.',
    },
    history: {
      title: 'Historique d\'Analyse',
      clear: 'Effacer l\'Historique',
      reload: 'Recharger',
    },
    results: {
      prediction: 'Prédiction',
      confidence: 'Score de Confiance',
      explanation: 'Explication de l\'IA',
      keyIndicators: 'Indicateurs Clés du Texte :',
      headline: 'Titre',
      post: 'Publication',
      hashtags: 'Hashtags',
      summary: 'Résumé IA :',
      sources: 'Sources Suggérées :',
      keyPoints: 'Points Clés :',
      conclusion: 'Conclusion :',
      helpfulQuestion: 'Cette analyse a-t-elle été utile ?',
      helpfulYes: 'Utile',
      helpfulNo: 'Pas Utile',
      relatedNewsSummary: 'Aperçu du Sujet :',
      foundSources: 'Articles Connexes Trouvés :',
      fastVerdict: 'Verdict Rapide :',
    },
    errors: {
        apiKey: 'La clé API est invalide ou manquante.',
        rateLimit: 'Le système est surchargé. Veuillez patienter un instant et réessayer.',
        network: 'Erreur réseau. Veuillez vérifier votre connexion Internet.',
        parsing: 'Impossible d\'interpréter la réponse de l\'IA. Veuillez réessayer.',
        server: 'Le service IA est actuellement indisponible.',
        generic: 'Une erreur inattendue s\'est produite.',
    },
    footer: 'Propulsé par Gemini AI. À des fins éducatives uniquement.',
  },
  de: {
    header: {
      title: 'Fake News Erkennung',
      subtitle: 'KI-gestützte Prüfung der Nachrichtenauthentizität',
    },
    featureGrid: {
      onDemandTitle: 'Analyse auf Anfrage',
      onDemandDesc: 'Erhalten Sie eine detaillierte Analyse, wann immer Sie bereit sind, indem Sie auf die Schaltfläche klicken.',
      multiAiTitle: 'Multi-KI Perspektiven',
      multiAiDesc: 'Wechseln Sie zwischen verschiedenen KI-Personas, um einen umfassenden Blick auf die Nachrichten zu erhalten.',
      detailedTitle: 'Detaillierte Erklärungen',
      detailedDesc: 'Verstehen Sie, *warum* ein Artikel markiert wurde, mit klarer, KI-generierter Begründung.',
      fastAiTitle: 'Schnelle KI-Antworten',
      fastAiDesc: 'Erhalten Sie nahezu sofortige Analysen mit dem ultraschnellen Gemini Flash Lite-Modell.',
    },
    input: {
      placeholder: 'Tippen Sie hier oder fügen Sie Nachrichteninhalt ein...',
      reset: 'Zurücksetzen',
      analyze: 'Analysieren',
      uploadFile: 'Datei hochladen',
      uploadError: 'Fehler beim Lesen der Datei',
      errorLength: 'Bitte geben Sie mindestens 20 Zeichen ein.',
      errorGeneric: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.',
    },
    samples: {
      label: 'Beispiel versuchen:',
      fake: 'Fake News',
      real: 'Echte News',
    },
    modes: {
      AUTHENTICITY: 'Authentizität',
      SOCIAL_MEDIA: 'Soziale Medien',
      PERPLEXITY: 'Perplexity',
      CHATGPT: 'ChatGPT',
      RELATED_NEWS: 'Verwandte Nachrichten',
      FAST: 'Schnellprüfung',
    },
    imageFeatures: {
      cutNoiseTitle: 'Durchdringen Sie den Lärm',
      cutNoiseDesc: 'In einer Zeit der Informationsflut ist die Unterscheidung von Fakten und Fiktion eine Herausforderung. Unser Tool bietet eine erste Verteidigungslinie.',
      dataInsightsTitle: 'Datengesteuerte Einblicke',
      dataInsightsDesc: 'Wir vergleichen sprachliche Muster mit riesigen Datensätzen bekannter Fehlinformationen, um subtile Hinweise auf Täuschung zu identifizieren.',
      globalPerspectiveTitle: 'Globale Perspektive',
      globalPerspectiveDesc: 'Analysieren Sie Nachrichten aus der ganzen Welt mit Zuversicht. Unsere mehrsprachige Unterstützung stellt sicher, dass Sie Informationen überprüfen können.',
      poweredByTitle: 'Unterstützt durch fortschrittliche KI',
      poweredByDesc: 'Unsere Plattform nutzt die ausgefeilte analytische Kraft von Google Gemini und geht über den einfachen Keyword-Abgleich hinaus.',
    },
    info: {
      howWorksTitle: 'Wie es funktioniert',
      howWorksDesc: 'Dieses Tool nutzt das leistungsstarke Gemini-Modell von Google zur Analyse von Nachrichten. Es untersucht Sprachmuster und Quellenlaubwürdigkeit.',
      tipsTitle: 'Tipps zum Erkennen von Fake News',
      tip1: 'Überprüfen Sie die Quelle: Suchen Sie nach der Website.',
      tip2: 'Achten Sie auf ungewöhnliche Formatierungen.',
      tip3: 'Untersuchen Sie die Beweise: Glaubwürdige Geschichten zitieren Quellen.',
      tip4: 'Überprüfen Sie Ihre Vorurteile.',
      tip5: 'Verwenden Sie Faktenprüfungs-Websites.',
    },
    history: {
      title: 'Analyse-Verlauf',
      clear: 'Verlauf löschen',
      reload: 'Neu laden',
    },
    results: {
      prediction: 'Vorhersage',
      confidence: 'Vertrauenswert',
      explanation: 'KI-Erklärung',
      keyIndicators: 'Schlüsselindikatoren aus dem Text:',
      headline: 'Schlagzeile',
      post: 'Beitrag',
      hashtags: 'Hashtags',
      summary: 'KI-Zusammenfassung:',
      sources: 'Vorgeschlagene Quellen:',
      keyPoints: 'Wichtige Punkte:',
      conclusion: 'Fazit:',
      helpfulQuestion: 'War diese Analyse hilfreich?',
      helpfulYes: 'Hilfreich',
      helpfulNo: 'Nicht hilfreich',
      relatedNewsSummary: 'Themenübersicht:',
      foundSources: 'Gefundene verwandte Artikel:',
      fastVerdict: 'Schnelles Urteil:',
    },
    errors: {
        apiKey: 'API-Schlüssel ist ungültig oder fehlt.',
        rateLimit: 'Das System ist derzeit überlastet. Bitte warten Sie einen Moment.',
        network: 'Netzwerkfehler. Bitte überprüfen Sie Ihre Internetverbindung.',
        parsing: 'Fehler beim Verarbeiten der KI-Antwort.',
        server: 'Der KI-Dienst ist derzeit nicht verfügbar.',
        generic: 'Ein unerwarteter Fehler ist aufgetreten.',
    },
    footer: 'Unterstützt durch Gemini AI. Nur zu Bildungszwecken.',
  },
  hi: {
    header: {
      title: 'फर्जी खबर का पता लगाना',
      subtitle: 'एआई-संचालित समाचार प्रमाणिकता जांचकर्ता',
    },
    featureGrid: {
      onDemandTitle: 'मांग पर विश्लेषण',
      onDemandDesc: 'जब भी आप तैयार हों, विश्लेषण बटन पर क्लिक करके विस्तृत विश्लेषण प्राप्त करें।',
      multiAiTitle: 'बहु-एआई परिप्रेक्ष्य',
      multiAiDesc: 'समाचार पर एक सर्वांगीण दृष्टिकोण प्राप्त करने के लिए विभिन्न एआई व्यक्तित्वों के बीच स्विच करें।',
      detailedTitle: 'विस्तृत स्पष्टीकरण',
      detailedDesc: 'समझें कि स्पष्ट, एआई-जनित तर्क के साथ एक लेख को क्यों चिह्नित किया गया है।',
      fastAiTitle: 'तेज़ एआई प्रतिक्रियाएं',
      fastAiDesc: 'अल्ट्रा-फास्ट जेमिनी फ्लैश लाइट मॉडल का उपयोग करके लगभग त्वरित विश्लेषण प्राप्त करें।',
    },
    input: {
      placeholder: 'यहां लिखना शुरू करें या समाचार सामग्री पेस्ट करें...',
      reset: 'रीसेट',
      analyze: 'विश्लेषण करें',
      uploadFile: 'फ़ाइल अपलोड',
      uploadError: 'फ़ाइल पढ़ने में त्रुटि',
      errorLength: 'विश्लेषण करने के लिए कृपया कम से कम 20 अक्षर दर्ज करें।',
      errorGeneric: 'विश्लेषण के दौरान एक त्रुटि हुई। कृपया पुन: प्रयास करें।',
    },
    samples: {
      label: 'एक नमूना आज़माएं:',
      fake: 'फर्जी खबर',
      real: 'असली खबर',
    },
    modes: {
      AUTHENTICITY: 'प्रमाणिकता',
      SOCIAL_MEDIA: 'सोशल मीडिया',
      PERPLEXITY: 'Perplexity',
      CHATGPT: 'ChatGPT',
      RELATED_NEWS: 'संबंधित समाचार',
      FAST: 'त्वरित जाँच',
    },
    imageFeatures: {
      cutNoiseTitle: 'शोर को कम करें',
      cutNoiseDesc: 'सूचना अधिभार के युग में, तथ्य को कल्पना से अलग करना चुनौतीपूर्ण है। हमारा उपकरण रक्षा की पहली पंक्ति प्रदान करता है।',
      dataInsightsTitle: 'डेटा-संचालित अंतर्दृष्टि',
      dataInsightsDesc: 'हम छल के सूक्ष्म संकेतों की पहचान करने के लिए ज्ञात गलत सूचना शैलियों के विशाल डेटासेट के साथ भाषाई पैटर्न को क्रॉस-रेफरेंस करते हैं।',
      globalPerspectiveTitle: 'वैश्विक परिप्रेक्ष्य',
      globalPerspectiveDesc: 'आत्मविश्वास के साथ दुनिया भर के समाचारों का विश्लेषण करें। हमारा बहु-भाषा समर्थन यह सुनिश्चित करता है कि आप जानकारी को सत्यापित कर सकें।',
      poweredByTitle: 'उन्नत एआई द्वारा संचालित',
      poweredByDesc: 'Google के जेमिनी की परिष्कृत विश्लेषणात्मक शक्ति का लाभ उठाते हुए, हमारा प्लेटफ़ॉर्म संदर्भ और टोन को समझने के लिए सरल कीवर्ड मिलान से आगे जाता है।',
    },
    info: {
      howWorksTitle: 'यह कैसे काम करता है',
      howWorksDesc: 'यह टूल समाचार सामग्री का विश्लेषण करने के लिए Google के शक्तिशाली जेमिनी मॉडल का लाभ उठाता है। यह प्रमाणिकता निर्धारित करने के लिए भाषा पैटर्न और स्रोत की विश्वसनीयता की जांच करता है।',
      tipsTitle: 'फर्जी खबरों को पहचानने के लिए सुझाव',
      tip1: 'स्रोत की जाँच करें: वेबसाइट या लेखक को देखें।',
      tip2: 'असामान्य स्वरूपण देखें: अजीब लेआउट या सभी बड़े अक्षर।',
      tip3: 'सबूत की जांच करें: विश्वसनीय कहानियां स्रोतों का हवाला देती हैं।',
      tip4: 'अपने पूर्वाग्रहों की जाँच करें: हम उस पर विश्वास करते हैं जिससे हम सहमत हैं।',
      tip5: 'तथ्य-जांच वेबसाइटों का उपयोग करें।',
    },
    history: {
      title: 'विश्लेषण इतिहास',
      clear: 'इतिहास साफ़ करें',
      reload: 'पुनः लोड करें',
    },
    results: {
      prediction: 'भविष्यवाणी',
      confidence: 'आत्मविश्वास स्कोर',
      explanation: 'एआई स्पष्टीकरण',
      keyIndicators: 'पाठ से मुख्य संकेतक:',
      headline: 'शीर्षक',
      post: 'पोस्ट',
      hashtags: 'हैशटैग',
      summary: 'एआई सारांश:',
      sources: 'सुझाए गए स्रोत:',
      keyPoints: 'मुख्य बिंदु:',
      conclusion: 'निष्कर्ष:',
      helpfulQuestion: 'क्या यह विश्लेषण मददगार था?',
      helpfulYes: 'मददगार',
      helpfulNo: 'मददगार नहीं',
      relatedNewsSummary: 'विषय अवलोकन:',
      foundSources: 'संबंधित लेख मिले:',
      fastVerdict: 'त्वरित निर्णय:',
    },
    errors: {
        apiKey: 'API कुंजी अमान्य या अनुपस्थित है।',
        rateLimit: 'सिस्टम अभी ओवरलोडेड है। कृपया प्रतीक्षा करें और पुनः प्रयास करें।',
        network: 'नेटवर्क त्रुटि। कृपया अपना इंटरनेट कनेक्शन जांचें।',
        parsing: 'AI प्रतिक्रिया को समझने में विफल।',
        server: 'AI सेवा वर्तमान में अनुपलब्ध है।',
        generic: 'एक अप्रत्याशित त्रुटि हुई।',
    },
    footer: 'जेमिनी एआई द्वारा संचालित। केवल शैक्षिक उद्देश्यों के लिए।',
  },
  te: {
    header: {
      title: 'నకిలీ వార్తల గుర్తింపు',
      subtitle: 'AI-ఆధారిత వార్త ప్రామాణికత తనిఖీ',
    },
    featureGrid: {
      onDemandTitle: 'డిమాండ్‌పై విశ్లేషణ',
      onDemandDesc: 'విశ్లేషణ బటన్‌ను క్లిక్ చేయడం ద్వారా మీకు కావాల్సినప్పుడు వివరణాత్మక విశ్లేషణను పొందండి.',
      multiAiTitle: 'బహుళ-AI దృక్కోణాలు',
      multiAiDesc: 'వార్తలపై సమగ్రమైన దృక్పథాన్ని పొందడానికి వేర్వేరు AI వ్యక్తుల మధ్య మారండి.',
      detailedTitle: 'వివరణాత్మక వివరణలు',
      detailedDesc: 'స్పష్టమైన, AI- రూపొందించిన తర్కంతో ఒక వ్యాసం ఎందుకు ఫ్లాగ్ చేయబడిందో అర్థం చేసుకోండి.',
      fastAiTitle: 'వేగవంతమైన AI ప్రతిస్పందనలు',
      fastAiDesc: 'అల్ట్రా-ఫాస్ట్ జెమిని ఫ్లాష్ లైట్ మోడల్‌ని ఉపయోగించి దాదాపు తక్షణ విశ్లేషణను పొందండి.',
    },
    input: {
      placeholder: 'ఇక్కడ టైప్ చేయడం ప్రారంభించండి లేదా వార్త కంటెంట్‌ను పేస్ట్ చేయండి...',
      reset: 'రీసెట్',
      analyze: 'విశ్లేషించండి',
      uploadFile: 'ఫైల్ అప్‌లోడ్',
      uploadError: 'ఫైల్ చదవడంలో లోపం',
      errorLength: 'విశ్లేషించడానికి దయచేసి కనీసం 20 అక్షరాలను నమోదు చేయండి.',
      errorGeneric: 'విశ్లేషణ సమయంలో లోపం సంభవించింది. దయచేసి మళ్ళీ ప్రయత్నించండి.',
    },
    samples: {
      label: 'ఒక నమూనాను ప్రయత్నించండి:',
      fake: 'నకిలీ వార్త',
      real: 'నిజమైన వార్త',
    },
    modes: {
      AUTHENTICITY: 'ప్రామాణికత',
      SOCIAL_MEDIA: 'సోషల్ మీడియా',
      PERPLEXITY: 'Perplexity',
      CHATGPT: 'ChatGPT',
      RELATED_NEWS: 'సంబంధిత వార్తలు',
      FAST: 'వేగవంతమైన తనిఖీ',
    },
    imageFeatures: {
      cutNoiseTitle: 'శబ్దాన్ని తగ్గించండి',
      cutNoiseDesc: 'సమాచార ఓవర్లోడ్ యుగంలో, వాస్తవాన్ని కల్పన నుండి వేరు చేయడం సవాలుగా ఉంది. మా సాధనం రక్షణ యొక్క మొదటి వరుసను అందిస్తుంది.',
      dataInsightsTitle: 'డేటా-ఆధారిత అంతర్దృష్టులు',
      dataInsightsDesc: 'మోసం యొక్క సూక్ష్మ సూచనలను గుర్తించడానికి మేము భాషా నమూనాలను తెలిసిన తప్పుడు సమాచార శైలుల యొక్క విస్తారమైన డేటాసెట్‌లతో క్రాస్-రిఫరెన్స్ చేస్తాము.',
      globalPerspectiveTitle: 'గ్లోబల్ దృక్పథం',
      globalPerspectiveDesc: 'ప్రపంచవ్యాప్తంగా ఉన్న వార్తలను నమ్మకంతో విశ్లేషించండి. మా బహుళ-భాషా మద్దతు మీరు మూలంతో సంబంధం లేకుండా సమాచారాన్ని ధృవీకరించగలరని నిర్ధారిస్తుంది.',
      poweredByTitle: 'అధునాతన AI ద్వారా ఆధారితం',
      poweredByDesc: 'Google యొక్క జెమిని యొక్క అధునాతన విశ్లేషణాత్మక శక్తిని ఉపయోగించుకుని, మా ప్లాట్‌ఫారమ్ సందర్భం మరియు స్వరాన్ని అర్థం చేసుకోవడానికి సాధారణ కీవర్డ్ మ్యాచింగ్‌కు మించి వెళుతుంది.',
    },
    info: {
      howWorksTitle: 'ఇది ఎలా పనిచేస్తుంది',
      howWorksDesc: 'వార్త కంటెంట్‌ను విశ్లేషించడానికి ఈ సాధనం Google యొక్క శక్తివంతమైన జెమిని మోడల్‌ను ఉపయోగించుకుంటుంది. ఇది ప్రామాణికతను నిర్ణయించడానికి భాషా నమూనాలు మరియు మూల విశ్వసనీయతను పరిశీలిస్తుంది.',
      tipsTitle: 'నకిలీ వార్తలను గుర్తించడానికి చిట్కాలు',
      tip1: 'మూలాన్ని తనిఖీ చేయండి: వెబ్‌సైట్ లేదా రచయితను చూడండి.',
      tip2: 'అసాధారణ ఫార్మాటింగ్ కోసం చూడండి: వింత లేఅవుట్‌లు.',
      tip3: 'సాక్ష్యాలను పరిశీలించండి: విశ్వసనీయ కథనాలు మూలాలను ఉదహరిస్తాయి.',
      tip4: 'మీ పక్షపాతాలను తనిఖీ చేయండి: మనం అంగీకరించే వాటిని నమ్ముతాము.',
      tip5: 'వాస్తవ తనిఖీ వెబ్‌సైట్‌లను ఉపయోగించండి.',
    },
    history: {
      title: 'విశ్లేషణ చరిత్ర',
      clear: 'చరిత్రను క్లియర్ చేయండి',
      reload: 'రీలోడ్',
    },
    results: {
      prediction: 'అంచనా',
      confidence: 'విశ్వాస స్కోరు',
      explanation: 'AI వివరణ',
      keyIndicators: 'వచనం నుండి ముఖ్య సూచికలు:',
      headline: 'శీర్షిక',
      post: 'పోస్ట్',
      hashtags: 'హ్యాష్‌ట్యాగ్‌లు',
      summary: 'AI సారాంశం:',
      sources: 'సూచించబడిన మూలాలు:',
      keyPoints: 'ముఖ్య అంశాలు:',
      conclusion: 'ముగింపు:',
      helpfulQuestion: 'ఈ విశ్లేషణ సహాయకరంగా ఉందా?',
      helpfulYes: 'సహాయకరం',
      helpfulNo: 'సహాయకరం కాదు',
      relatedNewsSummary: 'విషయం అవలోకనం:',
      foundSources: 'సంబంధిత కథనాలు కనుగొనబడ్డాయి:',
      fastVerdict: 'త్వరిత తీర్పు:',
    },
    errors: {
        apiKey: 'API కీ చెల్లదు లేదా లేదు.',
        rateLimit: 'సిస్టమ్ ప్రస్తుతం ఓవర్‌లోడ్ అయింది. దయచేసి వేచి ఉండి, మళ్ళీ ప్రయత్నించండి.',
        network: 'నెట్‌వర్క్ లోపం. దయచేసి మీ ఇంటర్నెట్ కనెక్షన్‌ను తనిఖీ చేయండి.',
        parsing: 'AI ప్రతిస్పందనను అర్థం చేసుకోవడంలో విఫలమైంది.',
        server: 'AI సేవ ప్రస్తుతం అందుబాటులో లేదు.',
        generic: 'అనుకోని లోపం సంభవించింది.',
    },
    footer: 'జెమిని AI ద్వారా ఆధారితం. విద్యా ప్రయోజనాల కోసం మాత్రమే.',
  },
};