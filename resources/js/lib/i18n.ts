import { usePage } from '@inertiajs/react';

interface Translations {
    common: Record<string, unknown>;
    home: Record<string, unknown>;
    contact: Record<string, unknown>;
}

interface PageProps {
    locale: string;
    availableLocales: string[];
    translations: Translations;
    [key: string]: unknown;
}

/**
 * Hook pour accéder aux traductions et à la locale actuelle
 */
export function useTranslation() {
    const page = usePage();
    const { locale, availableLocales, translations } = page.props as PageProps;

    /**
     * Traduit une clé de traduction avec support pour les clés imbriquées (ex: 'home.hero.title')
     *
     * @param key Clé de traduction (ex: 'home.hero.title' ou 'common.buttons.contact_us')
     * @param params Paramètres optionnels pour remplacer les placeholders
     * @returns La traduction ou la clé si non trouvée
     */
    const t = (key: string, params?: Record<string, string>): string => {
        const keys = key.split('.');
        let value: unknown = translations;

        // Parcourir les clés imbriquées
        for (const k of keys) {
            if (value && typeof value === 'object' && value !== null && k in value) {
                value = (value as Record<string, unknown>)[k];
            } else {
                // Si la clé n'est pas trouvée, retourner la clé originale
                return key;
            }
        }

        // Si la valeur est une string, remplacer les placeholders si nécessaire
        if (typeof value === 'string') {
            if (params) {
                return value.replace(/\{(\w+)\}/g, (match, paramKey) => {
                    return params[paramKey] || match;
                });
            }
            return value;
        }

        // Si ce n'est pas une string, retourner la clé
        return key;
    };

    /**
     * Récupère une valeur de traduction sans conversion en string
     * Utile pour les objets ou tableaux
     */
    const get = (key: string): unknown => {
        const keys = key.split('.');
        let value: unknown = translations;

        for (const k of keys) {
            if (value && typeof value === 'object' && value !== null && k in value) {
                value = (value as Record<string, unknown>)[k];
            } else {
                return null;
            }
        }

        return value ?? null;
    };

    return {
        t,
        get,
        locale,
        availableLocales,
    };
}

/**
 * Type pour les props de page avec traductions
 */
export type { PageProps, Translations };
