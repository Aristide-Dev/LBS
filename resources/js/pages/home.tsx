import { Head, Link } from '@inertiajs/react';
import { Anchor, CheckCircle, Fuel, Ship, Shield, Clock, Award, Headphones, Truck, Droplet, Gauge, MapPin, Users, TrendingUp, Zap, Package, Globe, Phone, ChevronRight, ShieldCheck, Pickaxe, CheckCircle2, MessageSquare } from 'lucide-react';
import PublicLayout from '@/layouts/public-layout';
import { index as contactRoute } from '@/actions/App/Http/Controllers/ContactController';

export default function Home() {
    return (
        <PublicLayout>
            <Head title="Accueil - Soutage Pétrolier & Approvisionnement Carburant">
                <meta
                    name="description"
                    content="LBS - Expert en soutage pétrolier maritime et approvisionnement en carburant industriel. Fiabilité, sécurité et excellence opérationnelle."
                />
            </Head>

            {/* Hero Section */}
            <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
                {/* Background image */}
                <div className="absolute inset-0">
                    <img 
                        src="/images/maritime_bunkering_hero_1767107122672.png" 
                        alt="Maritime bunkering operations"
                        className="w-full h-full object-cover scale-105 animate-[ken-burns_20s_ease_infinite]"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-violet-950/85 to-blue-950/90" />
                </div>
                
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                </div>

                <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <div className="mb-10 flex justify-center">
                            <div className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-300 ring-1 ring-inset ring-violet-500/20 backdrop-blur-sm">
                                <span className="flex h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
                                ⚓ Leader du soutage en Guinée & Afrique de l'Ouest
                            </div>
                        </div>
                        <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                            L'énergie au cœur de la
                            <span className="block bg-gradient-to-r from-violet-400 via-blue-400 to-violet-400 bg-clip-text text-transparent mt-4">
                                Guinée Maritime
                            </span>
                        </h1>
                        <p className="mt-8 text-xl leading-8 text-slate-300 max-w-3xl mx-auto font-medium">
                            Premier fournisseur guinéen de solutions de soutage. Nous accompagnons le développement portuaire et industriel de Conakry à Kamsar avec des standards internationaux d'excellence.
                        </p>
                        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link
                                href={contactRoute().url}
                                className="group relative w-full sm:w-auto overflow-hidden rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-10 py-5 text-lg font-bold text-white shadow-2xl shadow-violet-500/30 transition-all hover:scale-105 active:scale-95"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    <Phone className="w-6 h-6" />
                                    Devis express
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-violet-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                            <a
                                href="#services"
                                className="w-full sm:w-auto rounded-xl border-2 border-slate-600 px-10 py-5 text-lg font-bold text-white hover:bg-white/10 hover:border-violet-400 transition-all backdrop-blur-md flex items-center justify-center gap-2"
                            >
                                Nos services locaux
                                <Zap className="w-6 h-6 text-yellow-400" />
                            </a>
                        </div>
                    </div>

                    {/* Enhanced Stats Cards */}
                    <div className="mt-24 grid grid-cols-2 gap-6 lg:grid-cols-4">
                        {[
                            { value: '15+', label: 'Années d\'expertise', icon: Award, color: 'from-violet-500 to-violet-700' },
                            { value: '500+', label: 'Opérations/an', icon: Ship, color: 'from-blue-500 to-blue-700' },
                            { value: '24/7', label: 'Support local', icon: Clock, color: 'from-violet-500 to-blue-500' },
                            { value: '100%', label: 'Conformité ISO', icon: Shield, color: 'from-blue-600 to-blue-800' },
                        ].map((stat) => (
                            <div key={stat.label} className="group relative bg-white/5 backdrop-blur-md rounded-3xl p-8 ring-1 ring-white/10 hover:ring-white/20 transition-all duration-500 hover:-translate-y-2">
                                <div className={`flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                                    <stat.icon className="w-7 h-7 text-white" />
                                </div>
                                <div className="text-4xl font-black text-white">{stat.value}</div>
                                <div className="mt-2 text-sm font-semibold text-slate-400 tracking-wider uppercase">{stat.label}</div>
                                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-10 transition-opacity">
                                    <stat.icon className="w-12 h-12 text-white" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Decorative curve overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            </section>

            {/* About Section */}
            <section id="a-propos" className="py-24 lg:py-32 bg-white relative overflow-hidden">
                {/* Decorative blur elements like contact page */}
                <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-100 rounded-full blur-[120px] opacity-40" />
                <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[120px] opacity-40" />

                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-1 text-sm font-bold text-violet-700 mb-6">
                                <Globe className="w-4 h-4" />
                                PRÉSENCE NATIONALE
                            </div>
                            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                                Une expertise <span className="text-violet-600">locale</span>,<br />
                                des standards internationaux
                            </h2>
                            <p className="mt-8 text-xl leading-8 text-slate-600">
                                Fondée et basée en Guinée, LBS est fière de participer à l'essor économique du pays. Notre connaissance approfondie des eaux guinéennes et de l'environnement industriel font de nous le partenaire privilégié.
                            </p>

                            <div className="mt-12 space-y-8">
                                {[
                                    { title: 'Notre ancrage local', desc: 'Présents stratégiquement au Port de Conakry et dans les zones minières (Kamsar, Boké).', icon: MapPin },
                                    { title: 'Engagement de garde', desc: 'Service opérationnel 24h/24 pour garantir la continuité de vos activités portuaires.', icon: Shield },
                                    { title: 'Éco-responsabilité', desc: 'Respect rigoureux des normes environnementales pour protéger notre littoral guinéen.', icon: Droplet }
                                ].map((item) => (
                                    <div key={item.title} className="flex gap-6 group">
                                        <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                                            <p className="mt-2 text-slate-600 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative group">
                            {/* Premium frame for image */}
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-slate-900/5 aspect-[4/5] sm:aspect-square">
                                <img 
                                    src="/images/professional_team_fuel_1767107186510.png" 
                                    alt="Équipe professionnelle LBS en Guinée"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay with content */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                                <div className="absolute bottom-10 left-10 right-10">
                                    <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl">
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className="w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center">
                                                <Users className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <p className="text-white font-bold">Expertise Terrain</p>
                                                <p className="text-violet-200 text-xs font-medium tracking-widest uppercase">LBS Team</p>
                                            </div>
                                        </div>
                                        <p className="text-slate-100 text-sm leading-relaxed italic">
                                            "La référence guinéenne du soutage maritime, opérant avec une rigueur absolue depuis plus de 15 ans."
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative float elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-violet-600 to-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Hydrocarbons & Transport Section */}
            <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-violet-50/30">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-violet-600">
                            Notre expertise
                        </h2>
                        <p className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                            Hydrocarbures & Transport
                        </p>
                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Une gamme complète de produits pétroliers et solutions de transport adaptées à vos besoins spécifiques.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[140px] opacity-30" />
                        
                        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {/* Industrial Hydrocarbons */}
                                <div className="group bg-white rounded-[2rem] p-10 shadow-xl shadow-slate-200/50 ring-1 ring-slate-200 hover:ring-blue-400 transition-all duration-500 hover:-translate-y-2">
                                    <div className="flex items-center justify-center w-20 h-20 rounded-[1.5rem] bg-gradient-to-br from-blue-500 to-blue-700 text-white mb-8 shadow-xl shadow-blue-500/20 group-hover:scale-110 transition-transform">
                                        <Fuel className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">Hydrocarbures Industriels</h3>
                                    <ul className="space-y-4">
                                        {[
                                            { name: 'Gasoil Marine (MGO)', sub: 'Certification ISO 8217' },
                                            { name: 'Fuel Oil (IFO)', sub: 'Différentes viscosités' },
                                            { name: 'Gasoil Routier', sub: 'Pour flottes terrestres' },
                                            { name: 'Lubrifiants Marins', sub: 'Huiles moteur & hydrauliques' }
                                        ].map((item) => (
                                            <li key={item.name} className="flex items-start gap-4">
                                                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center">
                                                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900">{item.name}</p>
                                                    <p className="text-sm text-slate-500">{item.sub}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Transport Solutions */}
                                <div className="group bg-white rounded-[2rem] p-10 shadow-xl shadow-slate-200/50 ring-1 ring-slate-200 hover:ring-violet-400 transition-all duration-500 hover:-translate-y-2">
                                    <div className="flex items-center justify-center w-20 h-20 rounded-[1.5rem] bg-gradient-to-br from-violet-500 to-violet-700 text-white mb-8 shadow-xl shadow-violet-500/20 group-hover:scale-110 transition-transform">
                                        <Truck className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">Solutions de transport</h3>
                                    <ul className="space-y-4">
                                        {[
                                            { name: 'Camions-citernes', sub: 'Flotte moderne certifiée ADR' },
                                            { name: 'Barges de soutage', sub: 'Approvisionnement mer & port' },
                                            { name: 'Livraison express', sub: 'Service d\'urgence 24/7' },
                                            { name: 'Traçabilité GPS', sub: 'Suivi de flotte en temps réel' }
                                        ].map((item) => (
                                            <li key={item.name} className="flex items-start gap-4">
                                                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-violet-50 flex items-center justify-center">
                                                    <CheckCircle2 className="w-4 h-4 text-violet-600" />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900">{item.name}</p>
                                                    <p className="text-sm text-slate-500">{item.sub}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Quality & Compliance */}
                                <div className="group bg-white rounded-[2rem] p-10 shadow-xl shadow-slate-200/50 ring-1 ring-slate-200 hover:ring-emerald-400 transition-all duration-500 hover:-translate-y-2">
                                    <div className="flex items-center justify-center w-20 h-20 rounded-[1.5rem] bg-gradient-to-br from-emerald-500 to-teal-600 text-white mb-8 shadow-xl shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                                        <Shield className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">Qualité & Conformité</h3>
                                    <ul className="space-y-4">
                                        {[
                                            { name: 'Analyses laboratoire', sub: 'Tests systématiques avant livraison' },
                                            { name: 'Certifications ISO', sub: '9001, 14001 & 45001' },
                                            { name: 'Normes MARPOL', sub: 'Protection environnementale' },
                                            { name: 'Documentation BDN', sub: 'Bunker Delivery Notes certifiés' }
                                        ].map((item) => (
                                            <li key={item.name} className="flex items-start gap-4">
                                                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center">
                                                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900">{item.name}</p>
                                                    <p className="text-sm text-slate-500">{item.sub}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Coverage Map Section - High Tech Re-design */}
                            <div className="mt-20 bg-slate-900 rounded-[3rem] p-8 lg:p-16 shadow-2xl relative overflow-hidden group">
                                {/* Decorative background grid */}
                                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #4f46e5 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                                
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                                    <div>
                                        <div className="inline-flex items-center gap-3 mb-8 bg-white/5 border border-white/10 rounded-2xl px-5 py-2 backdrop-blur-md">
                                            <Globe className="w-6 h-6 text-violet-400 animate-pulse" />
                                            <span className="text-sm font-bold text-white tracking-widest uppercase">Réseau Opérationnel LBS</span>
                                        </div>
                                        <h3 className="text-3xl font-black text-white mb-8 leading-tight">
                                            Déploiement stratégique sur le <span className="text-violet-400">littoral guinéen</span>
                                        </h3>
                                        <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                                            Grâce à nos bases à Conakry et Kamsar, nous assurons une couverture totale du trafic maritime guinéen, 24h/24.
                                        </p>
                                        
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
                                            {[
                                                { place: 'Port de Conakry', type: 'Base Principale', icon: MapPin, color: 'text-red-500' },
                                                { place: 'Zone de Kamsar', type: 'Support Minier', icon: MapPin, color: 'text-yellow-500' },
                                                { place: 'Région de Boké', type: 'Logistique Fluviale', icon: MapPin, color: 'text-green-500' },
                                                { place: 'Haute Mer (ZEE)', type: 'Ravitaillement offshore', icon: Anchor, color: 'text-blue-500' }
                                            ].map((loc) => (
                                                <div key={loc.place} className="flex items-center gap-4 group/item">
                                                    <div className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center ${loc.color} group-hover/item:scale-110 transition-transform`}>
                                                        <loc.icon className="w-6 h-6" />
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-white text-lg">{loc.place}</p>
                                                        <p className="text-sm text-slate-500 font-medium tracking-wide">{loc.type}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="relative">
                                        {/* Map Dashboard Visualization */}
                                        <div className="aspect-[4/3] rounded-3xl bg-black shadow-inner ring-1 ring-white/20 p-8 overflow-hidden relative">
                                            {/* Scanlines Effect */}
                                            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,118,0.06))] bg-[length:100%_2px,3px_100%] z-20" />
                                            
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                {/* Abstract Guinea Map Representation */}
                                                <div className="w-64 h-64 border border-violet-500/20 rounded-full animate-ping" />
                                                <div className="absolute w-48 h-48 border border-blue-500/30 rounded-full animate-[ping_3s_infinite]" />
                                                
                                                <div className="relative z-10 text-center">
                                                    <div className="inline-block p-6 rounded-full bg-violet-600/10 border border-violet-500/30 backdrop-blur-xl mb-6">
                                                        <Globe className="w-20 h-20 text-violet-400" />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <div className="flex items-center justify-center gap-3">
                                                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                                            <span className="text-xs font-mono text-slate-400 uppercase tracking-[0.3em]">Conakry Ops Active</span>
                                                        </div>
                                                        <div className="flex items-center justify-center gap-3">
                                                            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse delay-75" />
                                                            <span className="text-xs font-mono text-slate-400 uppercase tracking-[0.3em]">Kamsar Fleet Ready</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Map Overlays */}
                                            <div className="absolute top-6 left-6 font-mono text-[10px] text-violet-400 uppercase tracking-widest bg-black/50 p-2 border border-violet-500/20 backdrop-blur-md">
                                                Tracking System v2.0<br />
                                                Sector: Guinea Maritime
                                            </div>
                                            <div className="absolute bottom-6 right-6 font-mono text-[10px] text-blue-400 bg-black/50 p-2 border border-blue-500/20 backdrop-blur-md">
                                                LAT: 9.5092° N<br />
                                                LON: 13.7122° W
                                            </div>
                                        </div>
                                        
                                        {/* Decorative Glows */}
                                        <div className="absolute -top-10 -right-10 w-48 h-48 bg-violet-600 rounded-full blur-[100px] opacity-30" />
                                        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-600 rounded-full blur-[100px] opacity-30" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-24 lg:py-32 bg-white relative">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center mb-16">
                        <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-1 text-sm font-bold text-violet-700 mb-6">
                            NOS SOLUTIONS
                        </div>
                        <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                            Des services sur-mesure pour la <span className="text-violet-600">croissance</span>
                        </h2>
                        <p className="mt-8 text-xl leading-8 text-slate-600">
                            Nous combinons logistique de pointe et expertise locale pour sécuriser vos chaînes d'approvisionnement énergétiques en Guinée.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                img: '/images/maritime_collaboration_1767107241080.png',
                                icon: Anchor,
                                title: 'Soutage pétrolier maritime',
                                desc: 'Approvisionnement en carburant pour navires de commerce, bateaux de pêche et flottes maritimes dans tous les ports guinéens.',
                                list: ['Carburant marine certifié', 'Livraison bord à quai / Mer', 'Conformité MARPOL'],
                                color: 'violet'
                            },
                            {
                                img: '/images/professional_team_fuel_1767107186510.png',
                                icon: Pickaxe,
                                title: 'Approvisionnement industriel',
                                desc: 'Fourniture de carburant pour sites miniers, industriels, générateurs et flottes de véhicules professionnels sur tout le territoire.',
                                list: ['Gasoil & Fioul de qualité', 'Logistique site éloigné', 'Contrats personnalisés'],
                                color: 'blue'
                            },
                            {
                                img: '/images/fuel_storage_facility_1767107217528.png',
                                icon: Ship,
                                title: 'Logistique & Assistance',
                                desc: 'Support logistique complet et assistance opérationnelle pour optimiser vos flux énergétiques et la gestion de vos stocks.',
                                list: ['Gestion de stock 24/7', 'Planification prédictive', 'Support technique local'],
                                color: 'emerald'
                            }
                        ].map((s) => {
                            const Icon = s.icon;
                            return (
                                <div key={s.title} className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-4 transition-all duration-500">
                                    <div className="relative h-72 overflow-hidden">
                                        <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60" />
                                        <div className="absolute bottom-6 left-6 flex items-center gap-4">
                                            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl">
                                                <Icon className="w-7 h-7 text-white" />
                                            </div>
                                            <h3 className="text-xl font-black text-white">{s.title}</h3>
                                        </div>
                                    </div>
                                    <div className="p-10">
                                        <p className="text-slate-600 leading-relaxed mb-8">{s.desc}</p>
                                        <ul className="space-y-4 mb-10">
                                            {s.list.map(l => (
                                                <li key={l} className="flex items-center gap-3">
                                                    <div className="w-5 h-5 rounded-full bg-violet-50 flex items-center justify-center">
                                                        <CheckCircle2 className="w-3.5 h-3.5 text-violet-600" />
                                                    </div>
                                                    <span className="text-sm font-bold text-slate-700">{l}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Link
                                            href={contactRoute().url}
                                            className="inline-flex items-center gap-2 text-violet-600 font-bold hover:gap-4 transition-all"
                                        >
                                            En savoir plus <ChevronRight className="w-5 h-5" />
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Process Section - High Impact */}
            <section className="py-24 lg:py-32 bg-slate-900 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-violet-600 rounded-full blur-[160px] opacity-10 -translate-y-1/2 translate-x-1/2" />
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3C/g%3E%3C/svg%3E")` }} />
                
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1 text-sm font-bold text-violet-400 mb-6 uppercase tracking-widest">
                            Rigueur Opérationnelle
                        </div>
                        <h2 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl tracking-tight">
                            Un processus <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">maîtrisé</span>
                        </h2>
                        <p className="mt-8 text-xl text-slate-400 leading-relaxed">
                            Notre méthodologie garantit une sécurité absolue et une ponctualité exemplaire pour chaque opération de soutage.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'Planification', desc: 'Analyse fine de vos besoins et programmation logistique sur-mesure.', icon: Phone },
                            { step: '02', title: 'Contrôle Qualité', desc: 'Vérification systématique de la conformité des produits en laboratoire.', icon: Gauge },
                            { step: '03', title: 'Opérations', desc: 'Soutage sécurisé selon les protocoles internationaux les plus stricts.', icon: Zap },
                            { step: '04', title: 'Certification', desc: 'Remise immédiate des documents BDN et certificats officiels.', icon: Award }
                        ].map((p, idx) => {
                            const Icon = p.icon;
                            return (
                                <div key={p.step} className="relative group">
                                    <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-md h-full hover:bg-white/[0.08] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/10">
                                        <div className="flex items-center justify-between mb-10">
                                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-500">
                                                <Icon className="w-8 h-8" />
                                            </div>
                                            <span className="text-6xl font-black text-white/[0.03] group-hover:text-violet-500/20 transition-colors uppercase select-none">{p.step}</span>
                                        </div>
                                        <h3 className="text-2xl font-black text-white mb-4 group-hover:text-violet-400 transition-colors">{p.title}</h3>
                                        <p className="text-slate-400 leading-relaxed text-lg">{p.desc}</p>
                                    </div>
                                    {idx < 3 && (
                                        <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-white/10 to-transparent" />
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Quality Banner */}
                    <div className="mt-24 rounded-[3.5rem] bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 p-1 shadow-2xl">
                        <div className="rounded-[3.4rem] bg-slate-900 overflow-hidden relative">
                            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                            <div className="px-10 py-16 lg:px-24 lg:py-20 relative z-10">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                                    <div>
                                        <h3 className="text-4xl font-black text-white mb-8 leading-tight">Optimisez vos opérations avec le leader local</h3>
                                        <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                                            LBS Guinée n'est pas qu'un fournisseur, c'est votre partenaire stratégique au port de Conakry, Kamsar et Boké.
                                        </p>
                                        <Link href={contactRoute().url} className="inline-flex items-center gap-4 px-10 py-5 bg-white text-slate-900 font-black rounded-2xl hover:bg-violet-50 transition-all hover:gap-6 shadow-xl">
                                            <MessageSquare className="w-6 h-6 text-violet-600" />
                                            Demander une cotation
                                        </Link>
                                    </div>
                                    <div className="grid grid-cols-2 gap-8">
                                        {[
                                            { label: 'Navires / an', value: '500+', sub: 'Opérations certifiées', icon: Ship },
                                            { label: 'Disponibilité', value: '24/7', sub: 'Assistance terrain', icon: Clock }
                                        ].map(stat => (
                                            <div key={stat.label} className="bg-white/5 border border-white/10 rounded-3xl p-10 group hover:border-violet-500/50 transition-all">
                                                <stat.icon className="w-8 h-8 text-violet-400 mb-6 group-hover:scale-110 transition-transform" />
                                                <p className="text-5xl font-black text-white mb-2">{stat.value}</p>
                                                <p className="text-sm font-black text-violet-400 uppercase tracking-[0.2em] mb-2">{stat.label}</p>
                                                <p className="text-xs text-slate-500 font-medium">{stat.sub}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why LBS Section - Premium Identity */}
            <section id="pourquoi-lbs" className="relative py-24 lg:py-40 bg-white overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-50/50 to-transparent pointer-events-none" />
                
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="inline-flex items-center gap-3 rounded-full bg-violet-50 px-5 py-2 text-sm font-black text-violet-700 mb-10 uppercase tracking-widest shadow-sm border border-violet-100">
                                <span className="flex h-2 w-2 rounded-full bg-violet-600 animate-ping" />
                                L'Excellence LBS
                            </div>
                            <h2 className="text-4xl font-black tracking-tight text-slate-900 leading-[1.05] mb-10 lg:text-6xl">
                                Pourquoi choisir <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">LBS Guinée ?</span>
                            </h2>
                            
                            <div className="space-y-12">
                                {[
                                    { title: 'Fiabilité Infaillible', desc: 'Une infrastructure logistique robuste garantissant la continuité de vos opérations.', icon: ShieldCheck },
                                    { title: 'Conformité Totale', desc: 'Certifications ISO et standards MARPOL pour une sécurité et une qualité sans compromis.', icon: Award },
                                    { title: 'Ancrage Local Fort', desc: 'Une connaissance parfaite du terrain guinéen pour une réactivité optimale.', icon: MapPin }
                                ].map((item) => (
                                    <div key={item.title} className="flex gap-10 group">
                                        <div className="flex-shrink-0 w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-all duration-500 shadow-sm ring-1 ring-slate-200 group-hover:ring-violet-600 group-hover:shadow-xl group-hover:shadow-violet-200 group-hover:-rotate-6">
                                            <item.icon className="w-10 h-10" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-violet-600 transition-colors">{item.title}</h3>
                                            <p className="text-xl text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative order-1 lg:order-2">
                            <div className="relative rounded-[4rem] overflow-hidden shadow-[0_60px_120px_-20px_rgba(30,27,75,0.25)] ring-1 ring-slate-200">
                                <img src="/images/quality_control_fuel_1767107264803.png" alt="Contrôle qualité expert LBS" className="w-full h-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-1000" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />
                                
                                {/* Status Card Overlay */}
                                <div className="absolute bottom-12 left-10 right-10 p-10 rounded-[2.5rem] bg-white/10 backdrop-blur-3xl border border-white/20 shadow-2xl">
                                    <div className="flex items-center gap-5 mb-6">
                                        <div className="w-14 h-14 rounded-full bg-emerald-500/90 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                                            <CheckCircle2 className="w-8 h-8 text-white" />
                                        </div>
                                        <span className="text-white font-black text-2xl tracking-tight">Qualité Garantie 100%</span>
                                    </div>
                                    <p className="text-white/90 font-bold text-lg leading-relaxed">
                                        Chaque litre livré est analysé par nos experts pour garantir la protection de vos motorisations.
                                    </p>
                                </div>
                            </div>
                            
                            {/* Decorative Blobs */}
                            <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-400 rounded-full blur-[140px] opacity-20 animate-pulse" />
                            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-violet-600 rounded-full blur-[140px] opacity-20 animate-pulse delay-700" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Premium CTA Section */}
            <section className="relative py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900" />
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                
                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="relative rounded-[4rem] bg-gradient-to-br from-violet-600 to-indigo-700 px-10 py-24 lg:px-24 lg:py-32 shadow-[0_50px_100px_rgba(79,70,229,0.3)] overflow-hidden">
                        {/* Animated Background Circles */}
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl animate-pulse" />
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
                        
                        <div className="relative z-10 max-w-3xl">
                            <h2 className="text-4xl font-black tracking-tight text-white mb-8 lg:text-6xl leading-[1.1]">
                                Prenez de l'avance avec <span className="block text-indigo-200">LBS Guinée</span>
                            </h2>
                            <p className="text-2xl text-indigo-50 text-indigo-100/90 mb-14 leading-relaxed font-medium">
                                Contactez nos experts dès maintenant pour une solution de soutage fiable, sécurisée et adaptée à vos besoins opérationnels.
                            </p>
                            <div className="flex flex-wrap gap-6 items-center">
                                <Link
                                    href={contactRoute().url}
                                    className="px-12 py-6 bg-white text-indigo-600 font-black rounded-3xl hover:bg-slate-50 transition-all hover:scale-105 text-xl flex items-center gap-4 shadow-2xl"
                                >
                                    Nous contacter
                                    <ChevronRight className="w-6 h-6" />
                                </Link>
                                <a
                                    href="tel:+224624351554"
                                    className="px-12 py-6 border-2 border-white/30 text-white font-black rounded-3xl hover:bg-white/10 transition-all text-xl flex items-center gap-4"
                                >
                                    <Phone className="w-6 h-6" />
                                    +224 624 35 15 54
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}