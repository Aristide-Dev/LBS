<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Traits\HasSEO;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    use HasSEO;

    /**
     * Affiche la page de contact.
     */
    public function index(): Response
    {
        // Configuration SEO de base
        $this->setupBaseSEO();

        // Configuration SEO spécifique à la page contact
        $this->setupPageSEO(
            title: 'Contact - LOURA BUNKER SERVICES | Devis Soutage Maritime Guinée',
            description: 'Contactez LOURA BUNKER SERVICES pour vos besoins en soutage maritime, services maritimes et pétroliers en Guinée. Disponible 24h/24, 7j/7. Tél: +224 621 41 85 56',
            url: url('/contact'),
            image: url('/web-app-manifest-512x512.png')
        );

        return Inertia::render('contact');
    }

    /**
     * Traite la soumission du formulaire de contact.
     */
    public function store(ContactRequest $request): RedirectResponse
    {
        $validated = $request->validated();

        // TODO: Envoyer l'email de notification
        // Mail::to(config('mail.admin_address'))->send(new ContactFormMail($validated));

        return redirect()
            ->back()
            ->with('success', 'Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.');
    }
}

