<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthController extends Controller
{
    public function get_token(Request $request)
    {
        $crenditals = $request->only('email','password');

        try {
            if (! $token = JWTAuth::attempt($crenditals)) {
                return response()->json(['user_not_found'],401);
            }
        }catch (JWTException $e) {
            return response()->json(['could_not_create_token'],$e->getStatusCode());
        }

        return response()->json(compact('token'));
    }
}
