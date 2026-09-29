<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\WarrantyRegistration;
use Carbon\Carbon;
use Illuminate\Http\Request;

class WarrantyRegistrationController extends Controller
{
    public function index()
    {
        return inertia('client/warranty-registration');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|min:5|max:255|string',
            'code' => [
                'required',
                'string',
                'min:5',
                'max:255',
                'regex:/^(RH|rh|Rh|rH).*/'
            ],

            'privacy' => 'accepted',
        ]);
        $data['privacy'] = $request->boolean('privacy');
        $existing = WarrantyRegistration::where('code', $data['code'])->first();
        if ($existing) {
            return to_route('client.warranty-registration')->with('successWarranty', [
                'message' => 'این گارانتی قبلا ثبت شده است.',
                'color' => Carbon::now()->greaterThan($existing->expired_at) ? 'red' : 'green',
                'code' => $existing->code,
                'name' => $existing->name,
                'created_at' => jdate($existing->created_at)->format('Y-m-d H:i:s'),
                'expired_at' =>
                    Carbon::now()->greaterThan($existing->expired_at)
                        ?
                        'پایان گارانتی'
                        :'این گارانتی تا تاریخ:'. jdate($existing->expired_at)->format('d-m-Y') . 'دارای اعتبار میباشد',
            ]);
        }
        $warranty = WarrantyRegistration::create([
            'name' => $data['name'],
            'code' => $data['code'],
            'privacy' => $data['privacy'],
            'expired_at' => Carbon::now()->addMonths(12),
        ]);
        return to_route('client.warranty-registration')->with('successWarranty', [
            'message' => 'گارانتی شما با موفقیت ثبت شد.',
            'color' => 'green',
            'code' => $warranty->code,
            'name' => $warranty->name,
            'created_at' => jdate($warranty->created_at)->format('d-m-Y'),
            'expired_at' => 'این گارانتی تا تاریخ:'. jdate($warranty->expired_at)->format('d-m-Y') . 'دارای اعتبار میباشد',
        ]);

    }
}
