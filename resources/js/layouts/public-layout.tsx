import { Link, usePage } from '@inertiajs/react';
import { Menu, X, ArrowUp, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { type ReactNode, useState, useEffect } from 'react';
import { index as homeRoute } from '@/actions/App/Http/Controllers/HomeController';
import { index as contactRoute } from '@/actions/App/Http/Controllers/ContactController';
import { useActiveMenu } from '@/hooks/useActiveMenu';
import LBSLogo from '@/components/lbs-logo';

interface PublicLayoutProps {
    children: ReactNode;
}

const navigation = [
    { name: 'Accueil', href: '#accueil', isAnchor: true },
    { name: 'À propos', href: '#a-propos', isAnchor: true },
    { name: 'Services', href: '#services', isAnchor: true },
];

export default function PublicLayout({ children }: PublicLayoutProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { url } = usePage();
    const isHomePage = url === '/';

    const anchorIds = navigation.filter(item => item.isAnchor).map(item => item.href);
    const activeSection = useActiveMenu(isHomePage ? anchorIds : [], 150);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('#') && isHomePage) {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            setMobileMenuOpen(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
                isScrolled
                    ? 'bg-white/95 backdrop-blur-md border-b border-[oklch(0.90_0.01_245)] shadow-sm'
                    : 'bg-transparent'
            }`}>
                <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
                    {/* Logo */}
                    <div className="flex lg:flex-1">
                        <Link href={homeRoute().url} className="-m-1.5 p-1.5 flex items-center gap-4 group">
                            <LBSLogo
                                size="md"
                                variant="icon"
                                className="transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="hidden sm:block">
                                <span className={`block text-lg font-bold tracking-tight transition-colors ${
                                    isScrolled ? 'text-[oklch(0.20_0.05_245)]' : 'text-white'
                                }`}>
                                    LOURA BUNKER
                                </span>
                                <span className={`block text-xs font-semibold tracking-[0.2em] uppercase transition-colors ${
                                    isScrolled ? 'text-[oklch(0.55_0.10_85)]' : 'text-[oklch(0.72_0.14_85)]'
                                }`}>
                                    SERVICES
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className={`-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 transition-colors ${
                                isScrolled
                                    ? 'text-[oklch(0.30_0.04_245)] hover:bg-[oklch(0.95_0.005_245)]'
                                    : 'text-white hover:bg-white/10'
                            }`}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span className="sr-only">Ouvrir le menu</span>
                            {mobileMenuOpen ? (
                                <X className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>

                    {/* Desktop navigation */}
                    <div className="hidden lg:flex lg:gap-x-10">
                        {navigation.map((item) => {
                            const isActive = activeSection === item.href;

                            return item.isAnchor && isHomePage ? (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => handleAnchorClick(e, item.href)}
                                    className={`relative text-sm font-semibold transition-all duration-300 py-2 ${
                                        isScrolled
                                            ? isActive
                                                ? 'text-[oklch(0.25_0.08_245)]'
                                                : 'text-[oklch(0.45_0.02_245)] hover:text-[oklch(0.25_0.08_245)]'
                                            : isActive
                                                ? 'text-[oklch(0.72_0.14_85)]'
                                                : 'text-white/80 hover:text-white'
                                    }`}
                                >
                                    {item.name}
                                    <span className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full transition-all duration-300 ${
                                        isActive
                                            ? isScrolled
                                                ? 'bg-[oklch(0.72_0.14_85)] scale-x-100'
                                                : 'bg-[oklch(0.72_0.14_85)] scale-x-100'
                                            : 'scale-x-0'
                                    }`} />
                                </a>
                            ) : (
                                <Link
                                    key={item.name}
                                    href={homeRoute().url + item.href}
                                    className={`text-sm font-semibold transition-colors ${
                                        isScrolled
                                            ? 'text-[oklch(0.45_0.02_245)] hover:text-[oklch(0.25_0.08_245)]'
                                            : 'text-white/80 hover:text-white'
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <Link
                            href={contactRoute().url}
                            className={`rounded-lg px-6 py-3 text-sm font-bold transition-all duration-300 ${
                                isScrolled
                                    ? 'bg-[oklch(0.25_0.08_245)] text-white hover:bg-[oklch(0.20_0.06_250)] shadow-lg shadow-[oklch(0.25_0.08_245/0.2)]'
                                    : 'btn-gold'
                            }`}
                        >
                            Nous contacter
                        </Link>
                    </div>
                </nav>

                {/* Mobile menu */}
                <div className={`lg:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-white border-b border-[oklch(0.92_0.01_245)] shadow-lg`}>
                    <div className="space-y-2 px-6 pb-6 pt-4">
                        {navigation.map((item) => {
                            const isActive = activeSection === item.href;

                            return item.isAnchor && isHomePage ? (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => handleAnchorClick(e, item.href)}
                                    className={`block rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                                        isActive
                                            ? 'bg-[oklch(0.25_0.08_245)] text-white'
                                            : 'text-[oklch(0.30_0.04_245)] hover:bg-[oklch(0.96_0.005_245)]'
                                    }`}
                                >
                                    {item.name}
                                </a>
                            ) : (
                                <Link
                                    key={item.name}
                                    href={homeRoute().url + item.href}
                                    className="block rounded-xl px-4 py-3 text-base font-semibold text-[oklch(0.30_0.04_245)] hover:bg-[oklch(0.96_0.005_245)]"
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                        <Link
                            href={contactRoute().url}
                            className="mt-4 block w-full rounded-xl bg-[oklch(0.25_0.08_245)] px-4 py-4 text-center text-base font-bold text-white shadow-lg"
                        >
                            Nous contacter
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main content */}
            <main>
                {children}
            </main>

            {/* Back to Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 z-40 p-4 rounded-xl bg-[oklch(0.25_0.08_245)] text-white shadow-xl transition-all duration-300 hover:bg-[oklch(0.20_0.06_250)] hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[oklch(0.72_0.14_85)] focus:ring-offset-2 ${
                    showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                }`}
                aria-label="Retour en haut"
            >
                <ArrowUp className="w-5 h-5" />
            </button>

            {/* Footer */}
            <footer className="bg-[oklch(0.12_0.04_245)] text-white">
                {/* Main Footer */}
                <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
                        {/* Company info */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center gap-4 mb-6">
                                <LBSLogo
                                    size="lg"
                                    variant="icon"
                                    className="rounded-xl"
                                />
                                <div>
                                    <span className="block text-xl font-bold tracking-tight">LOURA BUNKER</span>
                                    <span className="block text-xs font-semibold tracking-[0.2em] text-[oklch(0.72_0.14_85)] uppercase">SERVICES</span>
                                </div>
                            </div>
                            <p className="text-[oklch(0.70_0.02_245)] max-w-md leading-relaxed mb-8">
                                Votre partenaire de confiance pour le soutage maritime et les services pétroliers en Guinée et Afrique de l'Ouest. Expertise locale, normes internationales.
                            </p>

                            {/* Contact Quick Info */}
                            <div className="space-y-3">
                                <a href="tel:+224621418556" className="flex items-center gap-3 text-[oklch(0.75_0.02_245)] hover:text-[oklch(0.72_0.14_85)] transition-colors">
                                    <Phone className="w-4 h-4" />
                                    <span>+224 621 41 85 56</span>
                                </a>
                                <a href="mailto:dg@lbsguinee.com" className="flex items-center gap-3 text-[oklch(0.75_0.02_245)] hover:text-[oklch(0.72_0.14_85)] transition-colors">
                                    <Mail className="w-4 h-4" />
                                    <span>dg@lbsguinee.com</span>
                                </a>
                            </div>
                        </div>

                        {/* Quick links */}
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wider text-[oklch(0.72_0.14_85)] mb-6">
                                Navigation
                            </h3>
                            <ul className="space-y-4">
                                {navigation.map((item) => (
                                    <li key={item.name}>
                                        <a
                                            href={isHomePage ? item.href : homeRoute().url + item.href}
                                            onClick={(e) => isHomePage ? handleAnchorClick(e, item.href) : null}
                                            className="text-[oklch(0.70_0.02_245)] hover:text-white transition-colors cursor-pointer font-medium"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                                <li>
                                    <Link
                                        href={contactRoute().url}
                                        className="text-[oklch(0.70_0.02_245)] hover:text-white transition-colors font-medium"
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Address */}
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wider text-[oklch(0.72_0.14_85)] mb-6">
                                Adresse
                            </h3>
                            <div className="space-y-4 text-[oklch(0.70_0.02_245)]">
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-[oklch(0.55_0.10_85)]" />
                                    <div>
                                        <p className="font-medium text-white">Camayenne</p>
                                        <p>Commune de Dixinn</p>
                                        <p>Conakry, Guinée</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 pt-4">
                                    <Clock className="w-4 h-4 text-[oklch(0.55_0.10_85)]" />
                                    <span className="text-sm">Disponible 24h/24 - 7j/7</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-[oklch(0.20_0.04_245)]">
                    <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-sm text-[oklch(0.55_0.02_245)]">
                                &copy; {new Date().getFullYear()} LOURA BUNKER SERVICES. Tous droits réservés.
                            </p>
                            <div className="flex items-center gap-6 text-sm text-[oklch(0.55_0.02_245)]">
                                <span>SAU - Capital : 1 000 000 000 GNF</span>
                                <span className="hidden md:inline">|</span>
                                <span>R.C.C.M : GN.TCC.2025.B06619</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
