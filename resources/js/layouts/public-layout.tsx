import { Link, usePage } from '@inertiajs/react';
import { Menu, X, ArrowUp } from 'lucide-react';
import { type ReactNode, useState, useEffect } from 'react';
import { index as homeRoute } from '@/actions/App/Http/Controllers/HomeController';
import { index as contactRoute } from '@/actions/App/Http/Controllers/ContactController';
import { useActiveMenu } from '@/hooks/useActiveMenu';

interface PublicLayoutProps {
    children: ReactNode;
}

const navigation = [
    { name: 'Accueil', href: '#accueil', isAnchor: true },
    { name: 'À propos', href: '#a-propos', isAnchor: true },
    { name: 'Services', href: '#services', isAnchor: true },
    { name: 'Pourquoi LBS', href: '#pourquoi-lbs', isAnchor: true },
];

export default function PublicLayout({ children }: PublicLayoutProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const { url } = usePage();
    const isHomePage = url === '/';

    // Utilisation du hook personnalisé pour gérer le menu actif
    // On extrait les hrefs des éléments d'ancrage
    const anchorIds = navigation.filter(item => item.isAnchor).map(item => item.href);
    const activeSection = useActiveMenu(isHomePage ? anchorIds : [], 150);

    useEffect(() => {
        const handleScroll = () => {
            // Show/hide scroll to top button
            setShowScrollTop(window.scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
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
            <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 transition-all duration-300">
                <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
                    {/* Logo */}
                    <div className="flex lg:flex-1">
                        <Link href={homeRoute().url} className="-m-1.5 p-1.5 flex items-center gap-3 group">
                            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600 to-blue-600 shadow-lg group-hover:scale-105 transition-transform duration-300">
                                <span className="text-white font-bold text-lg">LBS</span>
                            </div>
                            <span className="hidden sm:block text-xl font-semibold bg-gradient-to-r from-violet-700 to-blue-700 bg-clip-text text-transparent">
                                LBS
                            </span>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700 hover:bg-slate-100 transition-colors"
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
                    <div className="hidden lg:flex lg:gap-x-8">
                        {navigation.map((item) => {
                            const isActive = activeSection === item.href;
                            
                            return item.isAnchor && isHomePage ? (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => handleAnchorClick(e, item.href)}
                                    className={`relative text-sm font-medium transition-all duration-300 py-1 ${
                                        isActive 
                                        ? 'text-violet-700 font-semibold' 
                                        : 'text-slate-600 hover:text-violet-600'
                                    }`}
                                >
                                    {item.name}
                                    {/* Active indicator dot */}
                                    <span className={`absolute -bottom-1 left-1/2 min-w-1.5 h-1.5 rounded-full bg-violet-600 transform -translate-x-1/2 transition-all duration-300 ${isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} />
                                </a>
                            ) : (
                                <Link
                                    key={item.name}
                                    href={homeRoute().url + item.href}
                                    className="text-sm font-medium text-slate-600 hover:text-violet-600 transition-colors"
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
                            className="rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-violet-500/20 hover:from-violet-700 hover:to-blue-700 hover:shadow-violet-500/40 transform hover:-translate-y-0.5 transition-all duration-200"
                        >
                            Nous contacter
                        </Link>
                    </div>
                </nav>

                {/* Mobile menu */}
                <div className={`lg:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-white border-b border-slate-100`}>
                    <div className="space-y-1 px-6 pb-6 pt-2">
                        {navigation.map((item) => {
                            const isActive = activeSection === item.href;
                            
                            return item.isAnchor && isHomePage ? (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => handleAnchorClick(e, item.href)}
                                    className={`block rounded-lg px-3 py-2 text-base font-medium transition-colors ${
                                        isActive
                                        ? 'bg-red-500 text-violet-700 font-semibold'
                                        : 'text-slate-700 hover:bg-slate-50 hover:text-violet-600'
                                    }`}
                                >
                                    {item.name}
                                </a>
                            ) : (
                                <Link
                                    key={item.name}
                                    href={homeRoute().url + item.href}
                                    className="block rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-violet-600"
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                        <Link
                            href={contactRoute().url}
                            className="mt-4 block w-full rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 px-3 py-3 text-center text-base font-semibold text-white shadow-md"
                        >
                            Nous contacter
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main content */}
            <main className="pt-[73px]">
                {children}
            </main>

            {/* Back to Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 z-40 p-3 rounded-full bg-slate-900/90 text-white shadow-lg backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-slate-800 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 ${
                    showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                aria-label="Retour en haut"
            >
                <ArrowUp className="w-6 h-6" />
            </button>

            {/* Footer */}
            <footer className="bg-slate-900 text-white">
                <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                        {/* Company info */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500">
                                    <span className="text-white font-bold text-lg">LBS</span>
                                </div>
                                <span className="text-xl font-semibold">LBS</span>
                            </div>
                            <p className="text-slate-400 max-w-md leading-relaxed">
                                Le partenaire de référence pour le soutage et l'approvisionnement en carburant en Guinée et Afrique de l'Ouest. Expertise locale, normes internationales.
                            </p>
                        </div>

                        {/* Quick links */}
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
                                Navigation
                            </h3>
                            <ul className="space-y-3">
                                {navigation.map((item) => (
                                    <li key={item.name}>
                                        <a
                                            href={isHomePage ? item.href : homeRoute().url + item.href}
                                            onClick={(e) => isHomePage ? handleAnchorClick(e, item.href) : null}
                                            className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                                <li>
                                    <Link
                                        href={contactRoute().url}
                                        className="text-slate-400 hover:text-white transition-colors"
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
                                Contact
                            </h3>
                            <ul className="space-y-3 text-slate-400">
                                <li>
                                    <a href="mailto:contact@lbs-guinee.com" className="hover:text-white transition-colors flex items-center gap-2">
                                        contact@lbs-guinee.com
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+224600000000" className="hover:text-white transition-colors flex items-center gap-2">
                                        +224 624 35 15 54
                                    </a>
                                </li>
                                <li>
                                    <span className="block mt-2 text-sm text-slate-500">
                                        Port Autonome de Conakry,<br />
                                        Guinée
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-center text-sm text-slate-500">
                            &copy; {new Date().getFullYear()} LBS Guinée. Tous droits réservés.
                        </p>
                        <p className="text-center text-sm text-slate-600">
                            Fait avec ❤️ à Conakry
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

