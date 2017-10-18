<?php

namespace App\Listeners;

use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class JWTEventListener
{

    /*
    tymon.jwt.absent
    tymon.jwt.expired
    tymon.jwt.invalid
    tymon.jwt.user_not_found
    tymon.jwt.valid
    */
    /**
     * @param $event
     */
    public function onValidUser($event)
    {
        auth()->setUser($event);
    }

    public function subscribe($events)
    {
        $events->listen(
            'tymon.jwt.valid',
            'App\Listeners\JWTEventListener@onValidUser'
        );
    }
}
