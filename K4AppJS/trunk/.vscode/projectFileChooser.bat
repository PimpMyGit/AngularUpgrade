<# : projectFileChooser.bat
:: Open file chooser and outputs choice(s) to the console
:: https://stackoverflow.com/a/15885133/1683264
@echo off
setlocal
set filepaths=
for /f "delims=" %%I in ('powershell -noprofile "iex (${%~f0} | out-string)"') do call :concat %%I
echo %filepaths%
goto :EOF

:concat
set filepaths=%filepaths% %~1
goto :EOF

: end Batch portion / begin PowerShell hybrid chimera #>

Add-Type -AssemblyName System.Windows.Forms
$f = new-object Windows.Forms.OpenFileDialog
$f.InitialDirectory = pwd
$f.Filter = "CSProj Files (*.csproj)|*.csproj"
$f.ShowHelp = $true
$f.Multiselect = $true
[void]$f.ShowDialog()
if ($f.Multiselect) { $f.FileNames } else { $f.FileName }