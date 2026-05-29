<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function home()
    {
        return Inertia::render('Home');
    }

    public function about()
    {
        return Inertia::render('About');
    }

    public function services()
    {
        return Inertia::render('Services');
    }

    public function hireUs()
    {
        return Inertia::render('HireUs');
    }

    public function blogs()
    {
        return Inertia::render('Blogs');
    }

    public function career()
    {
        return Inertia::render('Career');
    }

    public function contact()
    {
        return Inertia::render('Contact');
    }
}
