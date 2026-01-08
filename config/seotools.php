<?php
/**
 * @see https://github.com/artesaos/seotools
 */

return [
    'inertia' => env('SEO_TOOLS_INERTIA', true),
    'meta' => [
        /*
         * The default configurations to be used by the meta generator.
         */
        'defaults'       => [
            'title'        => 'LOURA BUNKER SERVICES', // set false to total remove
            'titleBefore'  => false, // Put defaults.title before page title, like 'It's Over 9000! - Dashboard'
            'description'  => 'Votre partenaire de confiance pour le soutage maritime et les services pétroliers en Guinée et Afrique de l\'Ouest. Fiabilité, sécurité, conformité aux normes internationales.', // set false to total remove
            'separator'    => ' - ',
            'keywords'     => [
                // Mots-clés principaux
                'soutage maritime', 'bunkering', 'carburant maritime', 'services pétroliers', 'Guinée', 'Conakry', 'Afrique de l\'Ouest', 'MGO', 'MDO', 'fuel oil', 'ship-to-ship',

                // Services et produits
                'DO', 'Diesel Oil', 'GO', 'Gasoil', 'Marine Diesel Oil', 'Marine Gas Oil', 'LGFO', 'Low Gravity Fuel Oil', 'LSFO', 'Low Sulfur Fuel Oil',
                'HSFO', 'High Sulfur Fuel Oil', 'Fioul léger', 'Fioul lourd', 'FIOUL LÉGER', 'FIOUL LOURD', 'bunkering maritime', 'soutage pétrolier',
                'carburant navire', 'carburant bateau', 'avitaillement maritime', 'ravitaillement navire', 'fourniture carburant maritime',

                // Localisation géographique
                'soutage Guinée', 'bunkering Guinée', 'soutage Conakry', 'bunkering Conakry', 'soutage Afrique de l\'Ouest', 'bunkering Afrique de l\'Ouest',
                'soutage Camayenne', 'soutage Dixinn', 'port Conakry', 'port autonome Conakry', 'zone portuaire Guinée', 'littoral guinéen',
                'Kamsar', 'Boké', 'soutage Kamsar', 'bunkering Kamsar', 'soutage Boké', 'bunkering Boké', 'Guinée maritime', 'côte guinéenne',

                // Types de navires et clients
                'soutage cargo', 'soutage pétrolier', 'soutage vraquier', 'soutage porte-conteneurs', 'soutage navire de commerce', 'soutage bateau de pêche',
                'soutage flotte maritime', 'soutage compagnie maritime', 'soutage armateur', 'soutage opérateur offshore', 'soutage plateforme pétrolière',

                // Méthodes de livraison
                'ship-to-ship', 'STS', 'ship-to-truck', 'livraison bord à quai', 'livraison en mer', 'ravitaillement offshore', 'soutage haute mer',
                'soutage portuaire', 'soutage au port', 'soutage à quai', 'soutage en rade', 'soutage ZEE', 'zone économique exclusive',

                // Services complémentaires
                'services maritimes', 'services pétroliers', 'approvisionnement industriel', 'trading pétrolier', 'transport pétrolier', 'stockage pétrolier',
                'logistique maritime', 'assistance portuaire', 'support opérations soutages', 'gestion flotte', 'planification logistique',

                // Qualité et certifications
                'ISO 8217', 'certification ISO', 'normes MARPOL', 'conformité MARPOL', 'BDN', 'Bunker Delivery Note', 'certificat qualité',
                'analyse laboratoire', 'contrôle qualité carburant', 'traçabilité carburant', 'documentation BDN', 'certificat conformité',

                // Sécurité et environnement
                'sécurité maritime', 'protection environnement', 'QSE maritime', 'qualité sécurité environnement', 'prévention pollution marine',
                'normes environnementales', 'réglementation maritime', 'sécurité portuaire', 'protection littoral', 'éco-responsabilité maritime',

                // Disponibilité et réactivité
                'soutage 24h/24', 'soutage 7j/7', 'soutage urgence', 'soutage express', 'soutage rapide', 'disponibilité 24/7', 'service continu',
                'intervention rapide', 'réactivité portuaire', 'soutage immédiat', 'livraison express', 'soutage d\'urgence',

                // Secteurs d'activité
                'soutage minier', 'soutage industriel', 'soutage commercial', 'soutage pêche', 'soutage transport', 'soutage logistique',
                'carburant industriel', 'carburant minier', 'carburant générateur', 'carburant flotte', 'carburant véhicule professionnel',

                // Termes techniques
                'viscosité carburant', 'densité carburant', 'teneur soufre', 'low sulfur', 'high sulfur', 'IFO', 'Intermediate Fuel Oil',
                'gasoil marin', 'diesel marin', 'fioul marin', 'huile moteur marine', 'lubrifiant marin', 'huile hydraulique',

                // Termes en anglais (pour SEO international)
                'marine bunkering', 'ship bunkering', 'marine fuel', 'bunker fuel', 'marine diesel', 'marine gas oil', 'fuel oil',
                'bunkering services', 'bunker supply', 'bunker delivery', 'marine fuel supply', 'ship fuel', 'vessel bunkering',
                'Guinea bunkering', 'West Africa bunkering', 'Conakry bunkering', 'bunkering Guinea', 'bunkering West Africa',

                // Termes commerciaux
                'devis soutage', 'devis bunkering', 'prix carburant maritime', 'tarif soutage', 'coût bunkering', 'demande devis soutage',
                'offre soutage', 'proposition commerciale soutage', 'contrat soutage', 'partenaire soutage', 'fournisseur carburant maritime',

                // Termes spécifiques LBS
                'LOURA BUNKER SERVICES', 'LBS Guinée', 'LBS Conakry', 'LBS bunkering', 'LBS soutage', 'expert soutage Guinée',
                'leader soutage Guinée', 'référence soutage Afrique', 'spécialiste bunkering Guinée', 'professionnel soutage',

                // Termes sectoriels
                'industrie maritime', 'secteur maritime', 'économie maritime', 'logistique portuaire', 'activité portuaire',
                'commerce maritime', 'transport maritime', 'navigation commerciale', 'flotte commerciale', 'armement maritime',

                // Termes géographiques étendus
                'Afrique occidentale', 'Afrique de l\'Ouest maritime', 'côte ouest-africaine', 'golfe de Guinée', 'Atlantique Ouest',
                'ports Afrique de l\'Ouest', 'hub maritime Afrique', 'corridor maritime ouest-africain',

                // Termes réglementaires
                'réglementation IMO', 'convention MARPOL', 'normes OMI', 'réglementation carburant marin', 'compliance maritime',
                'audit qualité carburant', 'inspection carburant', 'vérification conformité', 'certification internationale',

                // Termes opérationnels
                'opération soutage', 'procédure soutage', 'processus bunkering', 'méthodologie soutage', 'protocole soutage',
                'planification soutage', 'coordination soutage', 'exécution soutage', 'suivi opération soutage',

                // Termes relationnels
                'partenaire maritime', 'fournisseur fiable', 'expertise locale', 'connaissance terrain', 'réseau logistique',
                'infrastructure portuaire', 'capacité opérationnelle', 'mobilisation rapide', 'couverture régionale',

                // Termes additionnels
                'carburant certifié', 'produit pétrolier certifié', 'qualité garantie', 'fiabilité opérationnelle', 'excellence service',
                'professionnalisme maritime', 'intégrité opérationnelle', 'transparence opérationnelle', 'traçabilité complète',
            ],
            'canonical'    => 'current', // Set to null or 'full' to use Url::full(), set to 'current' to use Url::current(), set false to total remove
            'robots'       => 'index, follow', // Set to 'all', 'none' or any combination of index/noindex and follow/nofollow
        ],
        /*
         * Webmaster tags are always added.
         */
        'webmaster_tags' => [
            'google'    => null,
            'bing'      => null,
            'alexa'     => null,
            'pinterest' => null,
            'yandex'    => null,
            'norton'    => null,
        ],

        'add_notranslate_class' => false,
    ],
    'opengraph' => [
        /*
         * The default configurations to be used by the opengraph generator.
         */
        'defaults' => [
            'title'       => 'LOURA BUNKER SERVICES', // set false to total remove
            'description' => 'Votre partenaire de confiance pour le soutage maritime et les services pétroliers en Guinée et Afrique de l\'Ouest. Fiabilité, sécurité, conformité.', // set false to total remove
            'url'         => null, // Set null for using Url::current(), set false to total remove
            'type'        => 'website',
            'site_name'   => 'LOURA BUNKER SERVICES',
            'images'      => [],
        ],
    ],
    'twitter' => [
        /*
         * The default values to be used by the twitter cards generator.
         */
        'defaults' => [
            'card'        => 'summary_large_image',
            'site'        => '@lbsguinee',
        ],
    ],
    'json-ld' => [
        /*
         * The default configurations to be used by the json-ld generator.
         */
        'defaults' => [
            'title'       => 'LOURA BUNKER SERVICES', // set false to total remove
            'description' => 'Votre partenaire de confiance pour le soutage maritime et les services pétroliers en Guinée et Afrique de l\'Ouest. Fiabilité, sécurité, conformité aux normes internationales.', // set false to total remove
            'url'         => 'current', // Set to null or 'full' to use Url::full(), set to 'current' to use Url::current(), set false to total remove
            'type'        => 'Organization',
            'images'      => [],
        ],
    ],
];
