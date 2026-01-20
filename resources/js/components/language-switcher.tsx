import { router } from '@inertiajs/react';
import { Check } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from '@/lib/i18n';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { FR, US } from 'country-flag-icons/react/3x2';
import { type ReactNode } from 'react';

const localeNames: Record<string, { name: string; flag: ReactNode }> = {
    fr: { name: 'Français', flag: <FR title="France" className="w-5 h-auto" /> },
    en: { name: 'English', flag: <US title="United States" className="w-5 h-auto" /> },
};

export default function LanguageSwitcher({className}: {className?: string}) {
    const { locale, availableLocales } = useTranslation();
    const [isChanging, setIsChanging] = useState(false);

    const handleLocaleChange = (newLocale: string) => {
        if (newLocale === locale || isChanging) {
            return;
        }

        setIsChanging(true);

        // Récupérer l'URL actuelle et remplacer la locale
        const currentPath = window.location.pathname;
        const pathSegments = currentPath.split('/').filter(Boolean);

        // Si le premier segment est une locale, le remplacer
        if (pathSegments.length > 0 && availableLocales.includes(pathSegments[0])) {
            pathSegments[0] = newLocale;
        } else {
            // Sinon, ajouter la locale au début
            pathSegments.unshift(newLocale);
        }

        const newPath = '/' + pathSegments.join('/') + window.location.search;

        router.visit(newPath, {
            preserveState: true,
            preserveScroll: true,
            onFinish: () => setIsChanging(false),
        });
    };

    const currentLocale = localeNames[locale] || { name: locale.toUpperCase(), flag: <span>🌐</span> };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-[oklch(0.96_0.008_290)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.70_0.16_55)] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isChanging}
            >
                <span className={`hidden sm:inline ${className || ''}`}>{currentLocale.flag}</span>
                <span className={`hidden md:inline ${className || ''}`}>{currentLocale.name}</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[160px]">
                {availableLocales.map((loc) => {
                    const localeInfo = localeNames[loc] || { name: loc.toUpperCase(), flag: '🌐' };
                    const isActive = loc === locale;

                    return (
                        <DropdownMenuItem
                            key={loc}
                            onClick={() => handleLocaleChange(loc)}
                            className={`flex items-center gap-3 cursor-pointer ${
                                isActive ? 'bg-[oklch(0.96_0.008_290)] font-semibold' : ''
                            }`}
                            disabled={isChanging}
                        >
                            <span className="text-lg">{localeInfo.flag}</span>
                            <span className="flex-1">{localeInfo.name}</span>
                            {isActive && <Check className="w-4 h-4 text-[oklch(0.70_0.16_55)]" />}
                        </DropdownMenuItem>
                    );
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
