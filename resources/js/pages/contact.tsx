import { Head, useForm } from '@inertiajs/react';
import { Mail, MapPin, Phone, Send, MessageSquare, Clock, Shield, Globe, ChevronDown, CheckCircle2 } from 'lucide-react';
import PublicLayout from '@/layouts/public-layout';
import { FormEventHandler, useState } from 'react';
import { store as contactStoreRoute } from '@/actions/App/Http/Controllers/ContactController';

interface ContactFormData {
    name: string;
    email: string;
    company: string;
    message: string;
}

const faqs = [
    {
        question: "Quels types d'hydrocarbures fournissez-vous ?",
        answer: "Nous fournissons une gamme complète incluant le Gasoil (D6), le Fuel Oil (IFO 180/380), le Jet A1 et d'autres produits pétroliers certifiés aux normes internationales."
    },
    {
        question: "Dans quels ports guinéens opérez-vous ?",
        answer: "Nous sommes présents à Conakry (Port Autonome), Kamsar, Boké et offrons également des services de ravitaillement en haute mer (ZEE)."
    },
    {
        question: "Quel est le délai moyen pour une livraison ?",
        answer: "Grâce à notre flotte locale et notre base à Conakry, nous pouvons intervenir sous 24h après validation de la commande, 7j/7."
    },
    {
        question: "Vos produits sont-ils certifiés ?",
        answer: "Oui, tous nos produits sont analysés et certifiés conformes aux standards ISO et MARPOL pour garantir la performance de vos motorisations."
    }
];

export default function Contact() {
    const { data, setData, post, processing, errors, reset, wasSuccessful } = useForm<ContactFormData>({
        name: '',
        email: '',
        company: '',
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
            <Head title="Contact - LBS Guinée">
                <meta
                    name="description"
                    content="Contactez LBS Guinée pour vos besoins en soutage maritime et industriel à Conakry, Kamsar et Boké. Leader local de l'énergie maritime."
                />
            </Head>

            {/* Premium Hero Section with Image */}
            <section className="relative min-h-[500px] flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src="/images/maritime_collaboration_1767107241080.png" 
                        alt="Maritime business collaboration" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-violet-950/85 to-blue-950/90" />
                </div>

                <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-300 ring-1 ring-inset ring-violet-500/20 backdrop-blur-sm mb-8">
                            <span className="flex h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
                            Assistance locale 24h/24 & 7j/7
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                            Une équipe à votre 
                            <span className="block text-violet-400 mt-2">écoute en Guinée</span>
                        </h1>
                        <p className="mt-8 text-lg leading-8 text-slate-300 max-w-2xl">
                            Qu'il s'agisse d'une urgence de soutage au port de Conakry ou d'une planification logistique à Kamsar, nos experts sont prêts à vous accompagner.
                        </p>
                    </div>
                </div>

                {/* Decorative curve */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
            </section>

            <section className="py-24 lg:py-32 bg-white relative">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-violet-100 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />

                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
                        
                        {/* Left Column: Visuals & Info */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-sm font-semibold uppercase tracking-wider text-violet-600">
                                    Siège Social de Conakry
                                </h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                                    Au cœur de la logistique maritime guinéenne
                                </p>
                                
                                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-violet-300 transition-colors group">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-sm text-violet-600 mb-4 group-hover:scale-110 transition-transform">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <h3 className="font-bold text-slate-900">Appelez-nous</h3>
                                        <p className="text-sm text-slate-500 mt-1">Ligne directe Conakry</p>
                                        <a href="tel:+224624351554" className="mt-2 block font-semibold text-slate-900 hover:text-violet-600">
                                            +224 624 35 15 54
                                        </a>
                                    </div>

                                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-blue-300 transition-colors group">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-sm text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <h3 className="font-bold text-slate-900">Écrivez-nous</h3>
                                        <p className="text-sm text-slate-500 mt-1">Devis & Informations</p>
                                        <a href="mailto:contact@lbs-guinee.com" className="mt-2 block font-semibold text-slate-900 hover:text-blue-600">
                                            contact@lbs-guinee.com
                                        </a>
                                    </div>
                                </div>

                                <div className="mt-6 bg-slate-900 rounded-2xl p-6 text-white overflow-hidden relative group">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                                        <MapPin className="w-24 h-24" />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-2 text-violet-400 mb-2">
                                            <MapPin className="w-5 h-5" />
                                            <span className="text-sm font-semibold uppercase tracking-widest">Localisation</span>
                                        </div>
                                        <h3 className="text-xl font-bold">Port Autonome de Conakry</h3>
                                        <p className="mt-2 text-slate-400">
                                            Immeuble LBS, Zone Industrielle Portuaire<br />
                                            BP 000, Conakry, République de Guinée
                                        </p>
                                        <div className="mt-6 flex items-center gap-4 text-xs font-medium text-slate-500">
                                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Ouvert 24h/24</span>
                                            <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> Zone de Sécurité</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* FAQ Preview */}
                            <div className="bg-violet-50 rounded-3xl p-8 border border-violet-100">
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <MessageSquare className="w-6 h-6 text-violet-600" />
                                    Questions Fréquentes
                                </h3>
                                <div className="space-y-4">
                                    {faqs.map((faq, index) => (
                                        <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-200">
                                            <button 
                                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                                className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors"
                                            >
                                                <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                                                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                                            </button>
                                            <div className={`transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-40 opacity-100 p-4 pt-0 border-t border-slate-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                                                <p className="text-slate-600 text-sm leading-relaxed mt-4">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Contact Form */}
                        <div className="sticky top-32">
                            <div className="rounded-3xl bg-white p-8 lg:p-10 shadow-2xl ring-1 ring-slate-200 relative overflow-hidden group">
                                {/* Success Gradient Overlay */}
                                {wasSuccessful && (
                                    <div className="absolute inset-0 z-20 bg-emerald-500/95 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center text-white animate-in fade-in duration-500">
                                        <CheckCircle2 className="w-20 h-20 mb-6 animate-bounce" />
                                        <h3 className="text-3xl font-bold mb-4">Message Envoyé !</h3>
                                        <p className="text-emerald-50 text-lg">
                                            Merci pour votre confiance. Notre équipe de garde à Conakry va vous recontacter dans quelques instants.
                                        </p>
                                        <button 
                                            onClick={() => reset()}
                                            className="mt-10 px-8 py-3 bg-white text-emerald-600 font-bold rounded-xl hover:bg-emerald-50 transition-colors"
                                        >
                                            Envoyer un autre message
                                        </button>
                                    </div>
                                )}

                                <div className="relative z-10">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Formulaire de demande rapide</h2>
                                    <p className="text-slate-500 mb-8">
                                        Réponse garantie en moins d'une heure pour les demandes urgentes.
                                    </p>

                                    <form onSubmit={submit} className="space-y-4">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="name" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Nom Complet</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    value={data.name}
                                                    onChange={(e) => setData('name', e.target.value)}
                                                    className={`w-full rounded-xl border ${errors.name ? 'border-red-300' : 'border-slate-200'} bg-slate-50 px-4 py-3.5 text-slate-900 focus:bg-white focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 transition-all`}
                                                    placeholder="Ex: Mamady Keita"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Email Professionnel</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    value={data.email}
                                                    onChange={(e) => setData('email', e.target.value)}
                                                    className={`w-full rounded-xl border ${errors.email ? 'border-red-300' : 'border-slate-200'} bg-slate-50 px-4 py-3.5 text-slate-900 focus:bg-white focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 transition-all`}
                                                    placeholder="keita@entreprise.gn"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="company" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Entreprise ou Navire</label>
                                            <input
                                                type="text"
                                                id="company"
                                                value={data.company}
                                                onChange={(e) => setData('company', e.target.value)}
                                                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 focus:bg-white focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 transition-all"
                                                placeholder="Ex: MSC Guinée ou Fleet Express"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Votre Besoin</label>
                                            <textarea
                                                id="message"
                                                rows={5}
                                                value={data.message}
                                                onChange={(e) => setData('message', e.target.value)}
                                                className={`w-full rounded-xl border ${errors.message ? 'border-red-300' : 'border-slate-200'} bg-slate-50 px-4 py-3.5 text-slate-900 focus:bg-white focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 transition-all resize-none`}
                                                placeholder="Détaillez votre demande (Type de carburant, Quantité, Port, Date...)"
                                                required
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="group relative w-full overflow-hidden rounded-xl bg-slate-900 p-px font-semibold text-white transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/30 active:scale-[0.98]"
                                        >
                                            <div className="relative flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-4 transition-all duration-300 group-hover:bg-slate-900/90">
                                                {processing ? (
                                                    <span className="flex items-center gap-2">
                                                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                                        Traitement local...
                                                    </span>
                                                ) : (
                                                    <>
                                                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                        Envoyer au centre opérationnel
                                                    </>
                                                )}
                                            </div>
                                            {/* Animation effect on background */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity animate-gradient-xy -z-10" />
                                        </button>
                                    </form>
                                    
                                    <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-between">
                                        <div className="flex -space-x-2">
                                            {[1,2,3,4].map(i => (
                                                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                                                    <img src={`https://i.pravatar.cc/100?u=${i+10}`} alt="Expert" />
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-xs text-slate-500 font-medium">
                                            Experts LBS en ligne pour vous aider
                                        </p>
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

