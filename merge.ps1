$items = 'artisan', 'composer.json', 'composer.lock', 'bootstrap', 'config', 'storage', 'database', 'vendor', '.env', '.env.example', 'phpunit.xml', 'public/index.php'
foreach ($item in $items) {
    Copy-Item -Path "laravel-tmp\$item" -Destination ".\$item" -Recurse -Force
}
