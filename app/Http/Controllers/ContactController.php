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

        // Configuration SEO spécifique à la page contact (utilise les traductions)
        $this->setupPageSEO(
            translationKey: 'contact',
            url: url()->current(),
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
            ->with('success', trans('contact.success_message'));
    }
}

