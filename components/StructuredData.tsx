export default function StructuredData({ locale }: { locale: string }) {
  const isFr = locale === 'fr'
  const baseUrl = isFr ? 'https://studionicepodcast.fr' : 'https://studionicepodcast.com'

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}/#business`,
    name: 'Studio Nice Podcast',
    alternateName: isFr ? 'Studio Podcast Nice' : 'Studio Nice Podcast',
    description: isFr
      ? "Studio d'enregistrement podcast premium à Nice. Équipement de pointe, ingénierie sonore professionnelle et options de réservation flexibles pour les créateurs de contenu."
      : 'Premium podcast recording studio in Nice. State-of-the-art equipment, professional sound engineering, and flexible booking options for content creators.',
    url: baseUrl,
    telephone: '+33678496126',
    email: 'contact@studionicepodcast.com',
    image: `${baseUrl}/og-image.jpg`,
    logo: `${baseUrl}/logo.png`,
    priceRange: '€€-€€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Promenade des Anglais',
      addressLocality: 'Nice',
      postalCode: '06200',
      addressRegion: 'Provence-Alpes-Côte d\'Azur',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.6955,
      longitude: 7.2654,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '47',
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [
      'https://studionicepodcast.com',
      'https://studionicepodcast.fr',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: isFr ? 'Services de Studio Podcast' : 'Podcast Studio Services',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Starter',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Starter',
              },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Professional',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Professional',
              },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Premium',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Premium',
              },
            },
          ],
        },
      ],
    },
    areaServed: {
      '@type': 'City',
      name: 'Nice',
      containedInPlace: {
        '@type': 'Country',
        name: 'France',
      },
    },
  }

  const serviceStarter = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${baseUrl}/#service-starter`,
    name: isFr ? 'Forfait Starter' : 'Starter Plan',
    description: isFr
      ? 'Parfait pour les débutants et podcasteurs solos. Séance d\'enregistrement de 2 heures avec équipement audio professionnel, montage de base et fichiers MP3/WAV.'
      : 'Perfect for beginners and solo podcasters. 2-hour recording session with professional audio equipment, basic editing, and MP3/WAV files.',
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${baseUrl}/#business`,
      name: 'Studio Nice Podcast',
    },
    areaServed: {
      '@type': 'City',
      name: 'Nice',
    },
    offers: {
      '@type': 'Offer',
      price: '199',
      priceCurrency: 'EUR',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '199',
        priceCurrency: 'EUR',
        unitText: isFr ? 'par séance' : 'per session',
      },
      availability: 'https://schema.org/InStock',
      validFrom: '2026-01-01',
    },
    serviceType: isFr ? 'Enregistrement Podcast' : 'Podcast Recording',
    termsOfService: `${baseUrl}/#pricing`,
  }

  const serviceProfessional = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${baseUrl}/#service-professional`,
    name: isFr ? 'Forfait Professionnel' : 'Professional Plan',
    description: isFr
      ? "Idéal pour les podcasters réguliers et les interviews. Séance de 4 heures avec équipement premium, montage avancé, jusqu'à 4 microphones et option vidéo."
      : 'Ideal for regular podcasters and interviews. 4-hour recording session with premium equipment, advanced editing, up to 4 microphones, and video recording option.',
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${baseUrl}/#business`,
      name: 'Studio Nice Podcast',
    },
    areaServed: {
      '@type': 'City',
      name: 'Nice',
    },
    offers: {
      '@type': 'Offer',
      price: '399',
      priceCurrency: 'EUR',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '399',
        priceCurrency: 'EUR',
        unitText: isFr ? 'par séance' : 'per session',
      },
      availability: 'https://schema.org/InStock',
      validFrom: '2026-01-01',
    },
    serviceType: isFr ? 'Enregistrement Podcast' : 'Podcast Recording',
    termsOfService: `${baseUrl}/#pricing`,
  }

  const servicePremium = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${baseUrl}/#service-premium`,
    name: isFr ? 'Forfait Premium' : 'Premium Plan',
    description: isFr
      ? "Production d'une journée complète. Séance de 8 heures avec équipement haut de gamme, post-production complète, vidéo multi-caméras 4K et clips pour réseaux sociaux."
      : 'Full-day production. 8-hour session with top-of-the-line equipment, complete post-production, 4K multi-camera video, and social media clips.',
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${baseUrl}/#business`,
      name: 'Studio Nice Podcast',
    },
    areaServed: {
      '@type': 'City',
      name: 'Nice',
    },
    offers: {
      '@type': 'Offer',
      price: '799',
      priceCurrency: 'EUR',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '799',
        priceCurrency: 'EUR',
        unitText: isFr ? 'par séance' : 'per session',
      },
      availability: 'https://schema.org/InStock',
      validFrom: '2026-01-01',
    },
    serviceType: isFr ? 'Enregistrement Podcast' : 'Podcast Recording',
    termsOfService: `${baseUrl}/#pricing`,
  }

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${baseUrl}/#faq`,
    mainEntity: isFr
      ? [
          {
            '@type': 'Question',
            name: "Comment réserver une séance d'enregistrement ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Cliquez simplement sur n'importe quel bouton \"Réserver\" ou sur le bouton WhatsApp pour nous contacter directement. Nous vous aiderons à planifier votre séance au moment qui vous convient le mieux. Vous pouvez également nous contacter par téléphone ou email pour vérifier la disponibilité et faire une réservation.",
            },
          },
          {
            '@type': 'Question',
            name: 'Que dois-je préparer avant ma séance ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Nous recommandons de préparer votre plan de contenu, vos questions pour les interviews et tous vos scripts à l'avance. Si vous enregistrez avec des invités, coordonnez leur disponibilité. Ne vous inquiétez pas pour le côté technique - notre équipe s'occupera de toute la configuration de l'équipement et des vérifications sonores.",
            },
          },
          {
            '@type': 'Question',
            name: 'Combien de temps prend le montage ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Le délai de montage dépend du forfait : Starter inclut le montage de base (3-5 jours), Professionnel inclut le montage avancé (2-3 jours), et Premium inclut le montage prioritaire (24-48 heures). La livraison express est disponible moyennant des frais supplémentaires.',
            },
          },
          {
            '@type': 'Question',
            name: "Puis-je amener des invités à ma séance d'enregistrement ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Absolument ! Notre studio peut accueillir jusqu'à 6 personnes confortablement avec une configuration appropriée de microphones. Informez-nous simplement du nombre d'invités lors de la réservation afin que nous puissions préparer l'équipement et la configuration d'assises appropriés.",
            },
          },
          {
            '@type': 'Question',
            name: "Offrez-vous des services d'enregistrement vidéo ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Oui ! Nous offrons un enregistrement vidéo professionnel 4K avec des configurations multi-caméras, un éclairage professionnel et un équipement de qualité cinéma. L'enregistrement vidéo est disponible avec nos forfaits Professionnel et Premium, ou en option pour les autres séances.",
            },
          },
          {
            '@type': 'Question',
            name: 'Quels formats de fichiers recevrai-je ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Vous recevrez des formats standard de l'industrie : MP3 pour une distribution facile, WAV pour la meilleure qualité, et fichiers vidéo en MP4 (H.264/H.265). Les fichiers bruts sont disponibles sur demande, surtout avec notre forfait Premium.",
            },
          },
          {
            '@type': 'Question',
            name: 'Y a-t-il des places de parking ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Oui ! Nous avons des places de parking dédiées pour les clients. Le studio est également facilement accessible par les transports en commun, et nous sommes à seulement 10 minutes de l'Aéroport Nice Côte d'Azur pour les invités internationaux.",
            },
          },
          {
            '@type': 'Question',
            name: 'Puis-je reporter ou annuler ma réservation ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Oui, vous pouvez reporter ou annuler jusqu'à 48 heures avant votre séance sans frais. Les annulations dans les 48 heures peuvent entraîner des frais. Nous comprenons que des imprévus arrivent, contactez-nous dès que possible si vous devez apporter des modifications.",
            },
          },
        ]
      : [
          {
            '@type': 'Question',
            name: 'How do I book a recording session?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Simply click on any "Book Now" button or the WhatsApp button to get in touch with us directly. We\'ll help you schedule your session at a time that works best for you. You can also reach us via phone or email to check availability and make a reservation.',
            },
          },
          {
            '@type': 'Question',
            name: 'What should I prepare before my session?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "We recommend preparing your content outline, questions for interviews, and any scripts beforehand. If you're recording with guests, coordinate their availability. Don't worry about the technical side - our team will handle all equipment setup and sound checks.",
            },
          },
          {
            '@type': 'Question',
            name: 'How long does editing take?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Editing turnaround time depends on the package: Starter includes basic editing (3-5 days), Professional includes advanced editing (2-3 days), and Premium includes priority editing (24-48 hours). Rush delivery is available for an additional fee.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I bring guests to my recording session?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Absolutely! Our studio can accommodate up to 6 people comfortably with proper microphone setup. Just let us know the number of guests when booking so we can prepare the appropriate equipment and seating arrangement.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you offer video recording services?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! We offer professional 4K video recording with multi-camera setups, professional lighting, and cinema-grade equipment. Video recording is available with our Professional and Premium packages, or as an add-on to other sessions.',
            },
          },
          {
            '@type': 'Question',
            name: 'What file formats will I receive?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "You'll receive industry-standard formats: MP3 for easy distribution, WAV for highest quality, and video files in MP4 (H.264/H.265). Raw files are available upon request, especially with our Premium package.",
            },
          },
          {
            '@type': 'Question',
            name: 'Is there parking available?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Yes! We have dedicated parking spaces for clients. The studio is also easily accessible by public transportation, and we're just 10 minutes from Nice Côte d'Azur Airport for international guests.",
            },
          },
          {
            '@type': 'Question',
            name: 'Can I reschedule or cancel my booking?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, you can reschedule or cancel up to 48 hours before your session at no charge. Cancellations within 48 hours may incur a fee. We understand things happen, so contact us as soon as possible if you need to make changes.',
            },
          },
        ],
  }

  const webSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    name: 'Studio Nice Podcast',
    url: baseUrl,
    inLanguage: isFr ? 'fr-FR' : 'en-US',
    description: isFr
      ? "Studio d'enregistrement podcast premium à Nice, France."
      : 'Premium podcast recording studio in Nice, France.',
    publisher: {
      '@type': 'LocalBusiness',
      '@id': `${baseUrl}/#business`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  const schemas = [localBusiness, serviceStarter, serviceProfessional, servicePremium, faqPage, webSite]

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
