<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    // list users registered
    public function listUsers() {
        $userInfo = User::select("first_name", "last_name", "email", "phone_number")->get();
        return $userInfo;
    }

    // sign-in API
    public function logIn(Request $request) {

        $userValidation = User::select("id", "first_name")->where([["email", $request->email], ["password", $request->password]])->first();
        if ($userValidation) {
            return response()->json([
                "status" => "Success",
                "data" => $userValidation
            ], 200);
        }
        else return "User not found!";
    }

    // sign-up API
    public function signUp(Request $request) {

        if (!User::where('email', '=', $request->email)->exists()) {

            User::insert([
                "first_name" => $request->first_name,
                "last_name" => $request->last_name,
                "email" => $request->email,
                "password" => Hash::make($request->password),
                "gender" => $request->gender,
                "phone_number" => $request->phone_number,
                "type" => "user"
            ]);

            return response()->json([
                "status" => "Success"
            ], 200);

        }
        else return "This account already exists!";

    }

    // get user informations
    public function getUserInfo(Request $request){

        $retrieveIdData = User::select("first_name","last_name","email","gender", "phone_number")->where("id", $request->id)->get();

        return response()->json([
            "status" => "Success",
            "user_info" => $retrieveIdData
        ], 200);
    }

    // update user profile
    public function updateProfile(Request $request){

        User::where("id", $request->id)->update([
            "first_name" => $request->first_name,
            "last_name" => $request->last_name,
            "email" => $request->email,
            "password" => Hash::make($request->password),
            "phone_number" => $request->phone_number
        ]);
        return response()->json([
            "status" => "Success"
        ], 200);
    }
};
