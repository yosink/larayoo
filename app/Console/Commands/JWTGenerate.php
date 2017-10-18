<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Str;

class JWTGenerate extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'larayoo:jwt-generate';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate jwt secret';


    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $key = Str::random(32);

        $path = config_path('jwt.php');

        if (file_exists($path)) {
            file_put_contents($path, str_replace(
                $this->laravel['config']['jwt.secret'], $key, file_get_contents($path)
            ));
        }

        $this->laravel['config']['jwt.secret'] = $key;

        $this->info("jwt-auth secret [$key] set successfully.");
    }
}
