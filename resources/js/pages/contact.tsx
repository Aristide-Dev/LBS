import { Head, useForm } from '@inertiajs/react';
import { Mail, MapPin, Phone, Send, MessageSquare, Clock, Shield, ChevronDown, CheckCircle2, FileText, Building2 } from 'lucide-react';
import PublicLayout from '@/layouts/public-layout';
import { FormEventHandler, useState } from 'react';
import { store as contactStoreRoute } from '@/actions/App/Http/Controllers/ContactController';
import LBSLogo from '@/components/lbs-logo';

interface ContactFormData {
    name: string;
    email: string;
    company: string;
    service_type: string;
    message: string;
}

const faqs = [
    {
        question: "Quels types de carburants maritimes fournissez-vous ?",
        answer: "Nous fournissons une gamme complète : DO (Diesel Oil), GO (Gasoil), MDO (Marine Diesel Oil), MGO (Marine Gas Oil), LGFO, LSFO (Low Sulfur Fuel Oil), HSFO (High Sulfur Fuel Oil), Fioul Léger et Fioul Lourd. Tous conformes aux normes internationales."
    },
    {
        question: "Quelles sont vos méthodes de livraison ?",
        answer: "Nous proposons deux méthodes de livraison : Ship-to-Ship (directement en mer ou au port) et Ship-to-Truck (pour les opérations terrestres). Chaque opération est réalisée avec rigueur et traçabilité."
    },
    {
        question: "Êtes-vous disponibles en urgence ?",
        answer: "Oui, nous sommes opérationnels 24 heures sur 24 et 7 jours sur 7. Notre engagement envers la fiabilité et la rapidité d'exécution nous permet de répondre à vos besoins urgents."
    },
    {
        question: "Quels services maritimes proposez-vous en plus du bunkering ?",
        answer: "Outre le soutage, nous offrons l'avitaillement des navires, le support aux opérations soutages, ainsi que des services pétroliers incluant l'approvisionnement, le trading, le transport et le stockage."
    }
];

const serviceTypes = [
    { value: 'bunkering', label: 'Bunkering (Soutage)' },
    { value: 'maritime', label: 'Services Maritimes' },
    { value: 'petrolier', label: 'Services Pétroliers' },
    { value: 'devis', label: 'Demande de Devis' },
    { value: 'autre', label: 'Autre' },
];

export default function Contact() {
    const { data, setData, post, processing, errors, reset, wasSuccessful } = useForm<ContactFormData>({
        name: '',
        email: '',
        company: '',
        service_type: '',
        message: '',
    });

    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(contactStoreRoute().url, {
            onSuccess: () => reset(),
        });
    };

    return (
        <PublicLayout>
            <Head title="Contact - LOURA BUNKER SERVICES">
                <meta
                    name="description"
                    content="Contactez LOURA BUNKER SERVICES pour vos besoins en soutage maritime, services maritimes et pétroliers en Guinée. Disponible 24h/24, 7j/7."
                />
            </Head>

            {/* Hero Section */}
            <section className="relative min-h-[550px] flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/maritime_collaboration_1767107241080.png"
                        alt="Collaboration maritime professionnelle"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.12_0.05_245)] via-[oklch(0.15_0.04_245/0.95)] to-[oklch(0.18_0.03_245/0.85)]" />
                </div>

                {/* Decorative elements */}
                <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-[oklch(0.72_0.14_85/0.08)] blur-[100px]" />

                <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-3 mb-10">
                            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[oklch(0.72_0.14_85/0.15)] border border-[oklch(0.72_0.14_85/0.3)] backdrop-blur-md">
                                <Clock className="w-4 h-4 text-[oklch(0.82_0.12_85)]" />
                                <span className="text-sm font-semibold text-[oklch(0.82_0.12_85)] tracking-wide">Disponible 24h/24 - 7j/7</span>
                            </div>
                        </div>

                        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            Contactez{' '}
                            <span className="text-gradient-gold">LOURA BUNKER SERVICES</span>
                        </h1>
                        <p className="mt-8 text-xl text-[oklch(0.80_0.02_245)] leading-relaxed max-w-2xl">
                            Notre équipe est à votre disposition pour toute information ou demande de devis. Merci de nous indiquer votre besoin afin que nous vous répondions rapidement.
                        </p>
                    </div>
                </div>

                {/* Wave transition */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" className="w-full h-24 fill-white">
                        <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
                    </svg>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="py-24 lg:py-32 bg-white relative">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-[oklch(0.72_0.14_85/0.08)] rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-[oklch(0.25_0.08_245/0.05)] rounded-full blur-[100px]" />

                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">

                        {/* Left Column: Contact Info & FAQ */}
                        <div className="space-y-12">
                            {/* Contact Cards */}
                            <div>
                                <h2 className="font-serif text-3xl font-bold text-[oklch(0.15_0.05_245)] mb-8">
                                    Coordonnées
                                </h2>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {/* Phone */}
                                    <div className="group bg-[oklch(0.97_0.005_245)] rounded-2xl p-6 border border-[oklch(0.92_0.01_245)] hover:border-[oklch(0.72_0.14_85/0.5)] hover:shadow-lg transition-all duration-300">
                                        <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[oklch(0.25_0.08_245)] text-[oklch(0.72_0.14_85)] mb-4 group-hover:scale-110 transition-transform">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <h3 className="font-bold text-[oklch(0.20_0.05_245)] text-lg">Téléphone</h3>
                                        <p className="text-sm text-[oklch(0.50_0.02_245)] mt-1 mb-3">Ligne directe</p>
                                        <a href="tel:+224621418556" className="text-lg font-bold text-[oklch(0.25_0.08_245)] hover:text-[oklch(0.72_0.14_85)] transition-colors">
                                            +224 621 41 85 56
                                        </a>
                                    </div>

                                    {/* Email */}
                                    <div className="group bg-[oklch(0.97_0.005_245)] rounded-2xl p-6 border border-[oklch(0.92_0.01_245)] hover:border-[oklch(0.72_0.14_85/0.5)] hover:shadow-lg transition-all duration-300">
                                        <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[oklch(0.72_0.14_85)] text-[oklch(0.15_0.05_245)] mb-4 group-hover:scale-110 transition-transform">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <h3 className="font-bold text-[oklch(0.20_0.05_245)] text-lg">Email</h3>
                                        <p className="text-sm text-[oklch(0.50_0.02_245)] mt-1 mb-3">Direction Générale</p>
                                        <a href="mailto:dg@lbsguinee.com" className="text-lg font-bold text-[oklch(0.25_0.08_245)] hover:text-[oklch(0.72_0.14_85)] transition-colors">
                                            dg@lbsguinee.com
                                        </a>
                                    </div>
                                </div>

                                {/* Address Card */}
                                <div className="mt-6 bg-[oklch(0.15_0.05_245)] rounded-2xl p-8 text-white overflow-hidden relative group">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                                        <MapPin className="w-32 h-32" />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 text-[oklch(0.72_0.14_85)] mb-4">
                                            <MapPin className="w-5 h-5" />
                                            <span className="text-sm font-bold uppercase tracking-widest">Adresse</span>
                                        </div>
                                        <h3 className="text-2xl font-serif font-bold mb-2">Camayenne</h3>
                                        <p className="text-[oklch(0.75_0.02_245)] text-lg">
                                            Commune de Dixinn<br />
                                            Conakry, République de Guinée
                                        </p>
                                        <div className="mt-6 pt-6 border-t border-[oklch(0.25_0.06_245)] flex flex-wrap items-center gap-6 text-sm text-[oklch(0.65_0.02_245)]">
                                            <span className="flex items-center gap-2">
                                                <Clock className="w-4 h-4 text-[oklch(0.72_0.14_85)]" />
                                                24h/24 - 7j/7
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <Shield className="w-4 h-4 text-[oklch(0.72_0.14_85)]" />
                                                Service sécurisé
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Company Info Card */}
                            <div className="bg-[oklch(0.72_0.14_85/0.08)] rounded-2xl p-8 border border-[oklch(0.72_0.14_85/0.2)]">
                                <div className="flex items-center gap-3 mb-6">
                                    <Building2 className="w-6 h-6 text-[oklch(0.55_0.10_85)]" />
                                    <h3 className="font-serif text-xl font-bold text-[oklch(0.25_0.08_245)]">Informations légales</h3>
                                </div>
                                <div className="space-y-3 text-[oklch(0.40_0.02_245)]">
                                    <p><span className="font-semibold text-[oklch(0.30_0.04_245)]">Raison sociale :</span> LOURA BUNKER SERVICES (SAU)</p>
                                    <p><span className="font-semibold text-[oklch(0.30_0.04_245)]">Capital :</span> 1 000 000 000 GNF</p>
                                    <p><span className="font-semibold text-[oklch(0.30_0.04_245)]">R.C.C.M :</span> GN.TCC.2025.B06619</p>
                                    <p><span className="font-semibold text-[oklch(0.30_0.04_245)]">NIF :</span> 678972498 7Z</p>
                                </div>
                            </div>

                            {/* FAQ */}
                            <div className="bg-[oklch(0.97_0.005_245)] rounded-3xl p-8 border border-[oklch(0.92_0.01_245)]">
                                <h3 className="font-serif text-2xl font-bold text-[oklch(0.15_0.05_245)] mb-6 flex items-center gap-3">
                                    <MessageSquare className="w-6 h-6 text-[oklch(0.35_0.10_245)]" />
                                    Questions Fréquentes
                                </h3>
                                <div className="space-y-4">
                                    {faqs.map((faq, index) => (
                                        <div key={index} className="bg-white rounded-xl border border-[oklch(0.92_0.01_245)] overflow-hidden transition-all duration-200 hover:shadow-md">
                                            <button
                                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                                className="w-full flex items-center justify-between p-5 text-left hover:bg-[oklch(0.98_0.003_245)] transition-colors"
                                            >
                                                <span className="font-semibold text-[oklch(0.20_0.05_245)] pr-4">{faq.question}</span>
                                                <ChevronDown className={`w-5 h-5 text-[oklch(0.50_0.02_245)] transition-transform duration-300 flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} />
                                            </button>
                                            <div className={`transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                                                <div className="px-5 pb-5 border-t border-[oklch(0.94_0.005_245)]">
                                                    <p className="text-[oklch(0.45_0.02_245)] text-sm leading-relaxed pt-4">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Contact Form */}
                        <div className="sticky top-32">
                            <div className="rounded-3xl bg-white p-8 lg:p-10 shadow-2xl ring-1 ring-[oklch(0.92_0.01_245)] relative overflow-hidden">
                                {/* Success Overlay */}
                                {wasSuccessful && (
                                    <div className="absolute inset-0 z-20 bg-[oklch(0.45_0.15_150/0.95)] backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center text-white animate-in fade-in duration-500">
                                        <CheckCircle2 className="w-20 h-20 mb-6 animate-bounce" />
                                        <h3 className="text-3xl font-serif font-bold mb-4">Message Envoyé !</h3>
                                        <p className="text-[oklch(0.95_0.05_150)] text-lg">
                                            Merci pour votre confiance. Notre équipe va vous recontacter très rapidement.
                                        </p>
                                        <button
                                            onClick={() => reset()}
                                            className="mt-10 px-8 py-3 bg-white text-[oklch(0.40_0.12_150)] font-bold rounded-xl hover:bg-[oklch(0.95_0.03_150)] transition-colors"
                                        >
                                            Envoyer un autre message
                                        </button>
                                    </div>
                                )}

                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="w-12 h-12 rounded-xl bg-[oklch(0.25_0.08_245)] flex items-center justify-center">
                                            <FileText className="w-6 h-6 text-[oklch(0.72_0.14_85)]" />
                                        </div>
                                        <h2 className="font-serif text-2xl font-bold text-[oklch(0.15_0.05_245)]">Formulaire de contact</h2>
                                    </div>
                                    <p className="text-[oklch(0.50_0.02_245)] mb-8 ml-16">
                                        Nous vous répondrons dans les plus brefs délais.
                                    </p>

                                    <form onSubmit={submit} className="space-y-5">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div>
                                                <label htmlFor="name" className="block text-xs font-bold text-[oklch(0.45_0.02_245)] uppercase tracking-widest mb-2">Nom Complet *</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    value={data.name}
                                                    onChange={(e) => setData('name', e.target.value)}
                                                    className={`w-full rounded-xl border ${errors.name ? 'border-red-300' : 'border-[oklch(0.90_0.01_245)]'} bg-[oklch(0.98_0.003_245)] px-4 py-4 text-[oklch(0.20_0.05_245)] focus:bg-white focus:border-[oklch(0.72_0.14_85)] focus:ring-4 focus:ring-[oklch(0.72_0.14_85/0.1)] transition-all`}
                                                    placeholder="Votre nom"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-xs font-bold text-[oklch(0.45_0.02_245)] uppercase tracking-widest mb-2">Email *</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    value={data.email}
                                                    onChange={(e) => setData('email', e.target.value)}
                                                    className={`w-full rounded-xl border ${errors.email ? 'border-red-300' : 'border-[oklch(0.90_0.01_245)]'} bg-[oklch(0.98_0.003_245)] px-4 py-4 text-[oklch(0.20_0.05_245)] focus:bg-white focus:border-[oklch(0.72_0.14_85)] focus:ring-4 focus:ring-[oklch(0.72_0.14_85/0.1)] transition-all`}
                                                    placeholder="votre@email.com"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="company" className="block text-xs font-bold text-[oklch(0.45_0.02_245)] uppercase tracking-widest mb-2">Entreprise / Navire</label>
                                            <input
                                                type="text"
                                                id="company"
                                                value={data.company}
                                                onChange={(e) => setData('company', e.target.value)}
                                                className="w-full rounded-xl border border-[oklch(0.90_0.01_245)] bg-[oklch(0.98_0.003_245)] px-4 py-4 text-[oklch(0.20_0.05_245)] focus:bg-white focus:border-[oklch(0.72_0.14_85)] focus:ring-4 focus:ring-[oklch(0.72_0.14_85/0.1)] transition-all"
                                                placeholder="Nom de votre entreprise ou navire"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="service_type" className="block text-xs font-bold text-[oklch(0.45_0.02_245)] uppercase tracking-widest mb-2">Type de service *</label>
                                            <select
                                                id="service_type"
                                                value={data.service_type}
                                                onChange={(e) => setData('service_type', e.target.value)}
                                                className="w-full rounded-xl border border-[oklch(0.90_0.01_245)] bg-[oklch(0.98_0.003_245)] px-4 py-4 text-[oklch(0.20_0.05_245)] focus:bg-white focus:border-[oklch(0.72_0.14_85)] focus:ring-4 focus:ring-[oklch(0.72_0.14_85/0.1)] transition-all"
                                                required
                                            >
                                                <option value="">Sélectionnez un service</option>
                                                {serviceTypes.map((type) => (
                                                    <option key={type.value} value={type.value}>{type.label}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-xs font-bold text-[oklch(0.45_0.02_245)] uppercase tracking-widest mb-2">Votre Message *</label>
                                            <textarea
                                                id="message"
                                                rows={5}
                                                value={data.message}
                                                onChange={(e) => setData('message', e.target.value)}
                                                className={`w-full rounded-xl border ${errors.message ? 'border-red-300' : 'border-[oklch(0.90_0.01_245)]'} bg-[oklch(0.98_0.003_245)] px-4 py-4 text-[oklch(0.20_0.05_245)] focus:bg-white focus:border-[oklch(0.72_0.14_85)] focus:ring-4 focus:ring-[oklch(0.72_0.14_85/0.1)] transition-all resize-none`}
                                                placeholder="Détaillez votre demande (Type de carburant, Quantité, Port, Date...)"
                                                required
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="group relative w-full overflow-hidden rounded-xl bg-[oklch(0.25_0.08_245)] p-px font-bold text-white transition-all duration-300 hover:shadow-2xl hover:shadow-[oklch(0.25_0.08_245/0.3)] active:scale-[0.98]"
                                        >
                                            <div className="relative flex items-center justify-center gap-3 rounded-xl bg-[oklch(0.25_0.08_245)] px-6 py-5 transition-all duration-300 group-hover:bg-[oklch(0.20_0.06_250)]">
                                                {processing ? (
                                                    <span className="flex items-center gap-3">
                                                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                                        Envoi en cours...
                                                    </span>
                                                ) : (
                                                    <>
                                                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                        Envoyer le message
                                                    </>
                                                )}
                                            </div>
                                        </button>
                                    </form>

                                    {/* Trust indicators */}
                                    <div className="mt-8 pt-8 border-t border-[oklch(0.94_0.005_245)] flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <LBSLogo size="md" variant="icon" />
                                            <div>
                                                <p className="text-sm font-bold text-[oklch(0.25_0.08_245)]">LOURA BUNKER SERVICES</p>
                                                <p className="text-xs text-[oklch(0.55_0.02_245)]">Réponse garantie sous 24h</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-[oklch(0.55_0.02_245)]">
                                            <Shield className="w-4 h-4" />
                                            <span className="text-xs font-medium">Données sécurisées</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}

