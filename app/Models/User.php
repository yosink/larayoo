<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    protected $fillable = [
        "name","email","password","status","is_admin",'avatar','nickname','real_name','description','confirm_code'
    ];

    protected $hidden = [
        'remember_token','confirm_code','password','updated_at','deleted_at'
    ];
}
