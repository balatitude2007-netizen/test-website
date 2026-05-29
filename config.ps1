$p = 'C:\Users\dell\AppData\Local\Microsoft\WinGet\Packages\PHP.PHP.8.3_Microsoft.Winget.Source_8wekyb3d8bbwe'
Copy-Item -Path "$p\php.ini-development" -Destination "$p\php.ini"
$c = Get-Content "$p\php.ini"
$c = $c -replace ';extension=openssl', 'extension=openssl' -replace ';extension=mbstring', 'extension=mbstring' -replace ';extension=fileinfo', 'extension=fileinfo' -replace ';extension=curl', 'extension=curl' -replace ';extension=zip', 'extension=zip' -replace ';extension_dir = "ext"', 'extension_dir = "ext"'
Set-Content -Path "$p\php.ini" -Value $c
