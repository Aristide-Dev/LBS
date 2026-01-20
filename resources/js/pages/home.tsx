import { Head, Link } from '@inertiajs/react';
import { Anchor, CheckCircle, Fuel, Ship, Shield, Clock, Award, Truck, MapPin, Users, Zap, Phone, ChevronRight, ShieldCheck, MessageSquare, Factory, Package, Globe2, FileCheck, Leaf, Eye, Target, ArrowRight } from 'lucide-react';
import PublicLayout from '@/layouts/public-layout';
import { index as contactRoute } from '@/actions/App/Http/Controllers/ContactController';
import { useTranslation } from '@/lib/i18n';
import LBSLogo from '@/components/lbs-logo';
import { useEffect } from 'react';

export default function Home() {
    const { t, locale } = useTranslation();

    // Gérer le scroll vers l'ancre au chargement de la page
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            // Attendre que le DOM soit complètement chargé
            setTimeout(() => {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        }
    }, []);
    return (
        <PublicLayout>
            <Head>
                {/* Les tags SEO (title, description, Open Graph, Twitter, JSON-LD) sont gérés par SEOTools dans app.blade.php */}
                {/* On garde uniquement le title pour Inertia, mais SEOTools le gère déjà */}
            </Head>

            {/* Hero Section - Cinematic Maritime */}
            <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
                {/* Background with overlay */}
                <div className="absolute inset-0">
                    <img
                        src="/images/maritime_bunkering_hero_1767107122672.png"
                        alt={t('home.hero.images.hero')}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.20_0.15_295)] via-[oklch(0.28_0.16_290/0.70)] to-[oklch(0.35_0.18_285/0.75)]" />
                </div>

                {/* Decorative elements */}
                <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-[oklch(0.70_0.16_55/0.12)] blur-[100px]" />
                <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-[oklch(0.45_0.18_290/0.20)] blur-[80px]" />

                {/* Animated lines */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[oklch(0.70_0.16_55/0.4)] to-transparent" />
                    <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[oklch(0.70_0.16_55/0.3)] to-transparent" />
                </div>

                <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            {/* Logo + Badge */}
                            <div className="flex items-center gap-6 mb-10">
                                {/* <LBSLogo size="lg" variant="icon" className="drop-shadow-2xl" /> */}
                                <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[oklch(0.70_0.16_55/0.20)] border border-[oklch(0.70_0.16_55/0.4)] backdrop-blur-md">
                                    <Anchor className="w-4 h-4 text-[oklch(0.80_0.14_55)]" />
                                    <span className="text-sm font-semibold text-[oklch(0.80_0.14_55)] tracking-wide">{t('home.hero.badge')}</span>
                                </div>
                            </div>

                            {/* Main heading */}
                            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                                {t('home.hero.title')}{' '}
                                <span className="text-gradient-gold">{t('home.hero.title_highlight')}</span>
                            </h1>

                            <p className="mt-8 text-xl text-[oklch(0.85_0.02_290)] leading-relaxed max-w-xl">
                                {t('home.hero.description')}
                            </p>

                            {/* Key commitments */}
                            <div className="mt-10 grid grid-cols-2 gap-4">
                                {[
                                    { icon: Zap, key: 'reliability' },
                                    { icon: Shield, key: 'standards' },
                                    { icon: Leaf, key: 'eco' },
                                    { icon: Eye, key: 'transparency' },
                                ].map((item) => (
                                    <div key={item.key} className="flex items-center gap-3 text-[oklch(0.90_0.02_290)]">
                                        <item.icon className="w-5 h-5 text-[oklch(0.55_0.12_175)]" />
                                        <span className="text-sm font-medium">{t(`home.hero.commitments.${item.key}`)}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="mt-12 flex flex-col sm:flex-row gap-5">
                                <Link
                                    href={contactRoute({ locale }).url}
                                    className="btn-gold px-8 py-4 rounded-lg text-base font-bold flex items-center justify-center gap-3"
                                >
                                    <Phone className="w-5 h-5" />
                                    {t('home.hero.cta.quote')}
                                </Link>
                                <a
                                    href="#services"
                                    className="px-8 py-4 rounded-lg border-2 border-[oklch(0.70_0.16_55/0.5)] text-white font-semibold hover:bg-[oklch(0.70_0.16_55/0.15)] transition-all flex items-center justify-center gap-3"
                                >
                                    {t('home.hero.cta.services')}
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Stats Cards */}
                        <div className="hidden lg:grid grid-cols-2 gap-6">
                            {[
                                { value: '24/7', key: 'availability', icon: Clock },
                                { value: '100%', key: 'compliance', icon: ShieldCheck },
                                { value: 'ISO', key: 'certifications', icon: Award },
                                { value: '7j/7', key: 'operations', icon: Ship },
                            ].map((stat, index) => (
                                <div
                                    key={stat.key}
                                    className={`group glass-dark rounded-2xl p-8 hover:border-[oklch(0.70_0.16_55/0.6)] transition-all duration-500 hover:-translate-y-2 ${index === 0 ? 'mt-12' : ''} ${index === 3 ? '-mt-12' : ''}`}
                                >
                                    <stat.icon className="w-8 h-8 text-[oklch(0.70_0.16_55)] mb-4 group-hover:scale-110 transition-transform" />
                                    <div className="text-4xl font-serif font-bold text-white mb-2">{stat.value}</div>
                                    <div className="text-sm font-semibold text-[oklch(0.70_0.16_55)]">{t(`home.hero.stats.${stat.key}`)}</div>
                                    <div className="text-xs text-[oklch(0.70_0.05_290)] mt-1">{t(`home.hero.stats.${stat.key}_sub`)}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Wave transition */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" className="w-full h-24 fill-white">
                        <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
                    </svg>
                </div>
            </section>

            {/* About Section - Qui sommes nous */}
            <section id="a-propos" className="py-24 lg:py-32 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[oklch(0.40_0.18_290/0.05)] rounded-full blur-[100px] -translate-y-1/2" />

                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
                        {/* Image Side */}
                        <div className="relative order-2 lg:order-1">
                            <div className="relative">
                                {/* Main Image */}
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                    <img
                                        src="/images/professional_team_fuel_1767107186510.png"
                                        alt={t('home.hero.images.team')}
                                        className="w-full aspect-[4/5] object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.28_0.16_290/0.8)] via-transparent to-transparent" />
                                </div>

                                {/* Floating Card */}
                                <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-2xl p-6 border border-[oklch(0.88_0.02_290)]">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-xl bg-[oklch(0.35_0.18_290)] flex items-center justify-center">
                                            <Users className="w-7 h-7 text-[oklch(0.70_0.16_55)]" />
                                        </div>
                                        <div>
                                            <p className="text-2xl font-serif font-bold text-[oklch(0.28_0.14_295)]">{t('home.about.expertise.title')}</p>
                                            <p className="text-sm text-[oklch(0.50_0.08_290)]">{t('home.about.expertise.subtitle')}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative */}
                                <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-[oklch(0.70_0.16_55/0.4)] rounded-2xl" />
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[oklch(0.35_0.18_290/0.10)] border border-[oklch(0.35_0.18_290/0.20)] mb-8">
                                <Globe2 className="w-4 h-4 text-[oklch(0.35_0.18_290)]" />
                                <span className="text-sm font-semibold text-[oklch(0.35_0.18_290)] uppercase tracking-wider">{t('home.about.badge')}</span>
                            </div>

                            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[oklch(0.25_0.14_295)] leading-tight">
                                {t('home.about.title')}<span className="text-gradient-gold">{t('home.about.title_highlight')}</span> ?
                            </h2>

                            <p className="mt-8 text-lg text-[oklch(0.45_0.05_290)] leading-relaxed" dangerouslySetInnerHTML={{ __html: t('home.about.description_1') }} />

                            <p className="mt-6 text-lg text-[oklch(0.45_0.05_290)] leading-relaxed">
                                {t('home.about.description_2')}
                            </p>

                            {/* Vision Card */}
                            <div className="mt-10 p-8 rounded-2xl bg-gradient-to-br from-[oklch(0.35_0.18_290)] to-[oklch(0.28_0.16_295)] text-white">
                                <div className="flex items-center gap-3 mb-4">
                                    <Target className="w-6 h-6 text-[oklch(0.70_0.16_55)]" />
                                    <h3 className="text-xl font-serif font-bold">{t('home.about.vision.title')}</h3>
                                </div>
                                <p className="text-[oklch(0.88_0.02_290)] leading-relaxed">
                                    {t('home.about.vision.description')}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Values Section */}
                    <div className="mt-32">
                        <div className="text-center mb-16">
                            <h3 className="font-serif text-3xl lg:text-4xl font-bold text-[oklch(0.25_0.14_295)]">
                                {t('home.about.values.title')} <span className="text-gradient-gold">{t('home.about.values.title_highlight')}</span>
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { icon: Shield, key: 'security', color: 'oklch(0.35_0.18_290)' },
                                { icon: Award, key: 'quality', color: 'oklch(0.70_0.16_55)' },
                                { icon: Eye, key: 'transparency', color: 'oklch(0.45_0.18_285)' },
                                { icon: Leaf, key: 'environment', color: 'oklch(0.55_0.12_175)' },
                            ].map((value) => (
                                <div key={value.key} className="group text-center">
                                    <div
                                        className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                                        style={{ backgroundColor: `${value.color}` }}
                                    >
                                        <value.icon className="w-10 h-10 text-white" />
                                    </div>
                                    <h4 className="font-serif text-xl font-bold text-[oklch(0.28_0.14_295)] mb-3">{t(`home.about.values.${value.key}.title`)}</h4>
                                    <p className="text-[oklch(0.50_0.05_290)]">{t(`home.about.values.${value.key}.description`)}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section - Bunkering */}
            <section id="services" className="py-24 lg:py-32 bg-[oklch(0.97_0.008_290)] relative">
                <div className="absolute inset-0 wave-pattern opacity-50" />

                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[oklch(0.70_0.16_55/0.15)] border border-[oklch(0.70_0.16_55/0.3)] mb-8">
                            <Fuel className="w-4 h-4 text-[oklch(0.65_0.14_55)]" />
                            <span className="text-sm font-semibold text-[oklch(0.58_0.12_55)] uppercase tracking-wider">{t('home.services.badge')}</span>
                        </div>
                        <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[oklch(0.25_0.14_295)]">
                            {t('home.services.title')} <span className="text-gradient-ocean">{t('home.services.title_highlight')}</span>
                        </h2>
                        <p className="mt-6 text-xl text-[oklch(0.50_0.05_290)] max-w-3xl mx-auto">
                            {t('home.services.description')}
                        </p>
                    </div>

                    {/* Main Services */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {/* Bunkering Card */}
                        <div className="lg:col-span-2 group">
                            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-[oklch(0.88_0.02_290)] hover:shadow-2xl transition-all duration-500">
                                <div className="relative h-72 overflow-hidden">
                                    <img
                                        src="/images/fuel_storage_facility_1767107217528.png"
                                        alt={t('home.hero.images.storage')}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.28_0.16_290)] via-[oklch(0.28_0.16_290/0.3)] to-transparent" />
                                    <div className="absolute bottom-6 left-8">
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 rounded-xl bg-[oklch(0.70_0.16_55)] flex items-center justify-center">
                                                <Fuel className="w-7 h-7 text-white" />
                                            </div>
                                            <h3 className="font-serif text-2xl font-bold text-white">{t('home.services.bunkering.title')}</h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-10">
                                    <p className="text-[oklch(0.45_0.05_290)] mb-8 text-lg">
                                        {t('home.services.bunkering.description')}
                                    </p>

                                    {/* Products Grid */}
                                    <div className="mb-8">
                                        <h4 className="text-sm font-bold text-[oklch(0.35_0.12_290)] uppercase tracking-wider mb-4">{t('home.services.bunkering.products_title')}</h4>
                                        <div className="grid grid-cols-3 gap-3">
                                            {['DO (Diesel Oil)', 'GO (Gasoil)', 'MDO', 'MGO', 'LGFO', 'LSFO', 'FIOUL LÉGER', 'HSFO', 'FIOUL LOURD'].map((product) => (
                                                <div key={product} className="px-3 py-2 rounded-lg bg-[oklch(0.96_0.008_290)] border border-[oklch(0.88_0.02_290)] text-center">
                                                    <span className="text-sm font-semibold text-[oklch(0.35_0.12_290)]">{product}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Delivery Methods */}
                                    <div className="flex gap-6 pt-6 border-t border-[oklch(0.88_0.02_290)]">
                                        <div className="flex items-center gap-3">
                                            <Ship className="w-5 h-5 text-[oklch(0.40_0.18_290)]" />
                                            <span className="font-medium text-[oklch(0.35_0.12_290)]">Ship-to-Ship</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Truck className="w-5 h-5 text-[oklch(0.40_0.18_290)]" />
                                            <span className="font-medium text-[oklch(0.35_0.12_290)]">Ship-to-Truck</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Side Services */}
                        <div className="space-y-8">
                            {/* Maritime Services */}
                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-[oklch(0.88_0.02_290)] hover:shadow-2xl transition-all duration-500 group">
                                <div className="w-14 h-14 rounded-xl bg-[oklch(0.35_0.18_290)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Anchor className="w-7 h-7 text-[oklch(0.70_0.16_55)]" />
                                </div>
                                <h3 className="font-serif text-xl font-bold text-[oklch(0.28_0.14_295)] mb-4">{t('home.services.maritime.title')}</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-[oklch(0.45_0.05_290)]">
                                        <CheckCircle className="w-5 h-5 text-[oklch(0.55_0.12_175)]" />
                                        {t('home.services.maritime.items.ship_supply')}
                                    </li>
                                    <li className="flex items-center gap-3 text-[oklch(0.45_0.05_290)]">
                                        <CheckCircle className="w-5 h-5 text-[oklch(0.55_0.12_175)]" />
                                        {t('home.services.maritime.items.support')}
                                    </li>
                                </ul>
                            </div>

                            {/* Petroleum Services */}
                            <div className="bg-gradient-to-br from-[oklch(0.35_0.18_290)] to-[oklch(0.28_0.16_295)] rounded-3xl p-8 text-white group">
                                <div className="w-14 h-14 rounded-xl bg-[oklch(0.70_0.16_55)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Factory className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="font-serif text-xl font-bold mb-4">{t('home.services.petroleum.title')}</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-[oklch(0.88_0.02_290)]">
                                        <CheckCircle className="w-5 h-5 text-[oklch(0.70_0.16_55)]" />
                                        {t('home.services.petroleum.items.supply')}
                                    </li>
                                    <li className="flex items-center gap-3 text-[oklch(0.88_0.02_290)]">
                                        <CheckCircle className="w-5 h-5 text-[oklch(0.70_0.16_55)]" />
                                        {t('home.services.petroleum.items.transport')}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Service Commitment */}
                    <div className="mt-16 text-center p-8 rounded-2xl bg-[oklch(0.70_0.16_55/0.10)] border border-[oklch(0.70_0.16_55/0.25)]">
                        <p className="text-lg text-[oklch(0.40_0.12_290)] font-medium">
                            <ShieldCheck className="w-6 h-6 inline-block mr-2 text-[oklch(0.65_0.14_55)]" />
                            <span dangerouslySetInnerHTML={{ __html: t('home.services.commitment') }} />
                        </p>
                    </div>
                </div>
            </section>

            {/* Zones d'opération */}
            <section className="py-24 lg:py-32 bg-[oklch(0.28_0.16_290)] text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }} />
                </div>

                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[oklch(0.70_0.16_55/0.20)] border border-[oklch(0.70_0.16_55/0.4)] mb-8">
                                <MapPin className="w-4 h-4 text-[oklch(0.70_0.16_55)]" />
                                <span className="text-sm font-semibold text-[oklch(0.70_0.16_55)] uppercase tracking-wider">Zones d'Opération</span>
                            </div>

                            <h2 className="font-serif text-4xl lg:text-5xl font-bold leading-tight">
                                Présence <span className="text-gradient-gold">Stratégique</span>
                            </h2>

                            <p className="mt-8 text-xl text-[oklch(0.80_0.03_290)] leading-relaxed">
                                Nous intervenons dans plusieurs ports stratégiques et zones maritimes, avec une capacité de mobilisation rapide.
                            </p>

                            {/* Operational strengths */}
                            <div className="mt-12 space-y-6">
                                {[
                                    { icon: Globe2, key: 'coverage' },
                                    { icon: Clock, key: 'availability' },
                                    { icon: Users, key: 'network' },
                                ].map((item) => (
                                    <div key={item.key} className="flex gap-6 group">
                                        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[oklch(0.38_0.14_290)] flex items-center justify-center group-hover:bg-[oklch(0.70_0.16_55)] transition-colors duration-300">
                                            <item.icon className="w-6 h-6 text-[oklch(0.70_0.16_55)] group-hover:text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg">{t(`home.zones.strengths.${item.key}.title`)}</h3>
                                            <p className="text-[oklch(0.72_0.04_290)] mt-1">{t(`home.zones.strengths.${item.key}.description`)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12">
                                <Link
                                    href={contactRoute({ locale }).url}
                                    className="inline-flex items-center gap-3 btn-gold px-8 py-4 rounded-lg font-bold"
                                >
                                    <MessageSquare className="w-5 h-5" />
                                    {t('home.zones.cta')}
                                </Link>
                            </div>
                        </div>

                        {/* Map visualization */}
                        <div className="relative">
                            <div className="aspect-square rounded-3xl bg-[oklch(0.32_0.14_292)] border border-[oklch(0.42_0.12_290)] p-8 relative overflow-hidden">
                                {/* Animated rings */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-64 h-64 border border-[oklch(0.70_0.16_55/0.25)] rounded-full animate-ping" style={{ animationDuration: '3s' }} />
                                    <div className="absolute w-48 h-48 border border-[oklch(0.70_0.16_55/0.35)] rounded-full animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
                                </div>

                                {/* Center content */}
                                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                                    <div className="w-36 h-36 rounded-full bg-[oklch(0.70_0.16_55/0.15)] border-2 border-[oklch(0.70_0.16_55)] flex items-center justify-center mb-8 p-3">
                                        <LBSLogo size="xl" variant="icon" className="drop-shadow-lg" />
                                    </div>
                                    <h3 className="font-serif text-2xl font-bold text-white mb-4">Afrique de l'Ouest</h3>
                                    <p className="text-[oklch(0.72_0.04_290)] max-w-xs">
                                        Guinée et région - Ports stratégiques couverts
                                    </p>
                                </div>

                                {/* Corner decorations */}
                                <div className="absolute top-4 left-4 px-3 py-1 rounded bg-[oklch(0.70_0.16_55/0.25)] text-xs font-mono text-[oklch(0.70_0.16_55)]">
                                    {t('home.zones.maritime_zone')}
                                </div>
                                <div className="absolute bottom-4 right-4 px-3 py-1 rounded bg-[oklch(0.70_0.16_55/0.25)] text-xs font-mono text-[oklch(0.70_0.16_55)]">
                                    {t('home.zones.active_ops')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* QSE Section */}
            <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[oklch(0.55_0.12_175/0.12)] border border-[oklch(0.55_0.12_175/0.25)] mb-8">
                            <ShieldCheck className="w-4 h-4 text-[oklch(0.55_0.12_175)]" />
                            <span className="text-sm font-semibold text-[oklch(0.50_0.10_175)] uppercase tracking-wider">{t('home.qse.badge')}</span>
                        </div>
                        <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[oklch(0.25_0.14_295)]">
                            {t('home.qse.title')} <span className="text-gradient-ocean">{t('home.qse.title_highlight')}</span>
                        </h2>
                        <p className="mt-6 text-xl text-[oklch(0.50_0.05_290)] max-w-3xl mx-auto">
                            {t('home.qse.description')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {/* Qualité */}
                        <div className="group">
                            <div className="bg-gradient-to-br from-[oklch(0.97_0.008_290)] to-white rounded-3xl p-10 border border-[oklch(0.88_0.02_290)] h-full hover:shadow-xl transition-all duration-500">
                                <div className="w-16 h-16 rounded-2xl bg-[oklch(0.70_0.16_55)] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                    <Award className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-[oklch(0.28_0.14_295)] mb-4">{t('home.qse.quality.title')}</h3>
                                <p className="text-[oklch(0.50_0.05_290)] leading-relaxed">
                                    {t('home.qse.quality.description')}
                                </p>
                            </div>
                        </div>

                        {/* Sécurité */}
                        <div className="group">
                            <div className="bg-gradient-to-br from-[oklch(0.35_0.18_290)] to-[oklch(0.28_0.16_295)] rounded-3xl p-10 text-white h-full hover:shadow-xl transition-all duration-500">
                                <div className="w-16 h-16 rounded-2xl bg-[oklch(0.70_0.16_55)] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                    <Shield className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-serif text-2xl font-bold mb-4">{t('home.qse.security.title')}</h3>
                                <ul className="space-y-3 text-[oklch(0.88_0.02_290)]">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-[oklch(0.70_0.16_55)] flex-shrink-0 mt-0.5" />
                                        <span>{t('home.qse.security.items.standards')}</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-[oklch(0.70_0.16_55)] flex-shrink-0 mt-0.5" />
                                        <span>{t('home.qse.security.items.training')}</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-[oklch(0.70_0.16_55)] flex-shrink-0 mt-0.5" />
                                        <span>{t('home.qse.security.items.prevention')}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Environnement */}
                        <div className="group">
                            <div className="bg-gradient-to-br from-[oklch(0.97_0.008_290)] to-white rounded-3xl p-10 border border-[oklch(0.88_0.02_290)] h-full hover:shadow-xl transition-all duration-500">
                                <div className="w-16 h-16 rounded-2xl bg-[oklch(0.55_0.12_175)] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                    <Leaf className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-[oklch(0.28_0.14_295)] mb-4">{t('home.qse.environment.title')}</h3>
                                <ul className="space-y-3 text-[oklch(0.50_0.05_290)]">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-[oklch(0.55_0.12_175)] flex-shrink-0 mt-0.5" />
                                        <span>{t('home.qse.environment.items.regulations')}</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-[oklch(0.55_0.12_175)] flex-shrink-0 mt-0.5" />
                                        <span>{t('home.qse.environment.items.pollution')}</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-[oklch(0.55_0.12_175)] flex-shrink-0 mt-0.5" />
                                        <span>{t('home.qse.environment.items.sustainability')}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Documents & Clients */}
            <section className="py-24 lg:py-32 bg-[oklch(0.97_0.008_290)]">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Documents */}
                        <div className="bg-white rounded-3xl p-10 shadow-lg border border-[oklch(0.88_0.02_290)]">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 rounded-xl bg-[oklch(0.35_0.18_290)] flex items-center justify-center">
                                    <FileCheck className="w-7 h-7 text-[oklch(0.70_0.16_55)]" />
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-[oklch(0.28_0.14_295)]">{t('home.documents.title')}</h3>
                            </div>

                            <p className="text-[oklch(0.50_0.05_290)] mb-8">
                                {t('home.documents.description')}
                            </p>

                            <ul className="space-y-4">
                                {[
                                    { key: 'brochures' },
                                    { key: 'technical_sheets' },
                                    { key: 'qse_policy' },
                                    { key: 'terms' },
                                ].map((doc) => (
                                    <li key={doc.key} className="flex items-center gap-4 p-4 rounded-xl bg-[oklch(0.97_0.008_290)] hover:bg-[oklch(0.94_0.012_290)] transition-colors">
                                        <Package className="w-5 h-5 text-[oklch(0.40_0.18_290)]" />
                                        <span className="font-medium text-[oklch(0.35_0.12_290)]">{t(`home.documents.items.${doc.key}`)}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={contactRoute({ locale }).url}
                                className="mt-8 inline-flex items-center gap-2 text-[oklch(0.40_0.18_290)] font-semibold hover:gap-4 transition-all"
                            >
                                {t('home.documents.cta')} <ChevronRight className="w-5 h-5" />
                            </Link>
                        </div>

                        {/* Clients & Partenaires */}
                        <div className="bg-gradient-to-br from-[oklch(0.35_0.18_290)] to-[oklch(0.28_0.16_295)] rounded-3xl p-10 text-white">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 rounded-xl bg-[oklch(0.70_0.16_55)] flex items-center justify-center">
                                    <Users className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="font-serif text-2xl font-bold">Clients & Partenaires</h3>
                            </div>

                            <p className="text-[oklch(0.85_0.02_290)] mb-8">
                                Nos partenariats reposent sur la confiance, la performance et une collaboration à long terme.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { icon: Ship, key: 'shipowners' },
                                    { icon: Anchor, key: 'maritime_companies' },
                                    { icon: Factory, key: 'offshore_operators' },
                                    { icon: MapPin, key: 'port_authorities' },
                                ].map((client) => (
                                    <div key={client.key} className="flex items-center gap-3 p-4 rounded-xl bg-[oklch(0.42_0.14_290)]">
                                        <client.icon className="w-5 h-5 text-[oklch(0.70_0.16_55)]" />
                                        <span className="font-medium text-[oklch(0.92_0.02_290)]">{t(`home.clients.items.${client.key}`)}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 pt-8 border-t border-[oklch(0.48_0.10_290)]">
                                <p className="text-sm text-[oklch(0.72_0.04_290)] italic">
                                    "{t('home.clients.tagline')}"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.35_0.18_290/0.05)] to-[oklch(0.70_0.16_55/0.08)]" />

                <div className="mx-auto max-w-5xl px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[oklch(0.70_0.16_55/0.15)] mb-10">
                        <MessageSquare className="w-10 h-10 text-[oklch(0.65_0.14_55)]" />
                    </div>

                    <h2 className="font-serif text-4xl lg:text-6xl font-bold text-[oklch(0.25_0.14_295)] leading-tight">
                        Contactez-nous pour une<br />
                        <span className="text-gradient-gold">demande de devis</span>
                    </h2>

                    <p className="mt-8 text-xl text-[oklch(0.50_0.05_290)] max-w-2xl mx-auto">
                        Merci de nous indiquer votre besoin (bunkering, services maritimes, devis) afin que nous vous répondions rapidement.
                    </p>

                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href={contactRoute({ locale }).url}
                            className="btn-ocean px-10 py-5 rounded-xl text-lg font-bold flex items-center gap-3"
                        >
                            <Phone className="w-6 h-6" />
                            Nous contacter
                        </Link>
                        <a
                            href="tel:+224621418556"
                            className="px-10 py-5 rounded-xl border-2 border-[oklch(0.35_0.18_290)] text-[oklch(0.35_0.18_290)] font-bold hover:bg-[oklch(0.35_0.18_290/0.08)] transition-all flex items-center gap-3"
                        >
                            +224 621 41 85 56
                        </a>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
