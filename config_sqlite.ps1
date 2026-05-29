$p = 'C:\Users\dell\AppData\Local\Microsoft\WinGet\Packages\PHP.PHP.8.3_Microsoft.Winget.Source_8wekyb3d8bbwe'
$c = Get-Content "$p\php.ini"
$c = $c -replace ';extension=pdo_sqlite', 'extension=pdo_sqlite' -replace ';extension=sqlite3', 'extension=sqlite3'
Set-Content -Path "$p\php.ini" -Value $c
