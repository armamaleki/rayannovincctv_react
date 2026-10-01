<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Inertia\Response;
use Spatie\Permission\Models\Role as ROL;

class AuthController extends Controller
{
    public function index(): Response
    {
        return inertia('auth/login');
    }

    public function store(LoginRequest $request): RedirectResponse
    {
        $data = $request->validated();
        //        $otp = rand(10000, 99999);
        $otp = 123456;
        Cache::put('otp_'.$data['phone'], $otp, now()->addMinutes(2));
        $user = User::firstOrCreate(
            ['phone' => $data['phone']],
            [
                'name' => '',
                'password' => Hash::make(Str::random(5)),
            ]
        );
        if (! $user->hasRole('users')) {
            $role = ROL::where('name', 'users')->first();
            if ($role) {
                $user->assignRole($role);
            }
        }
//        $request->session()->regenerate();
        return redirect()
            ->route('login')
            ->with('otp_sent', true)
            ->with('otp_code', $otp);

    }

    public function verify(Request $request)
    {
        $request->validate([
            'phone' => 'required|digits:11|numeric|regex:/(09)[0-9]{9}/',
            'otp' => 'required|numeric',
        ]);
        $cachedOtp = Cache::get('otp_'.$request->phone);
        if (! $cachedOtp || $cachedOtp != $request->otp) {
            return back()->withErrors(['otp' => 'کد وارد شده اشتباه است یا منقضی شده']);
        }
        $user = User::where('phone', $request->phone)->first();
        Auth::login($user);
        Cache::forget('otp_'.$request->phone);

        return redirect()->route('dashboard.index')->with('success', 'با موفقیت وارد شدید');
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}
