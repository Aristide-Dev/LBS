<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    /**
     * Affiche la page de contact.
     */
    public function index(): Response
    {
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

