# Régénère les médias optimisés (posters, boucle hero, photos) à partir de RESSOURCES/.
# Prérequis : ffmpeg installé (winget install Gyan.FFmpeg).
# Usage : powershell -File scripts/generate-media.ps1

$ErrorActionPreference = "Stop"

$ffmpegPkg = Get-ChildItem "$env:LOCALAPPDATA\Microsoft\WinGet\Packages" -Filter "Gyan.FFmpeg_*" -Directory -ErrorAction SilentlyContinue | Select-Object -First 1
if ($ffmpegPkg) {
    $ffmpeg = Get-ChildItem $ffmpegPkg.FullName -Recurse -Filter "ffmpeg.exe" | Select-Object -First 1 -ExpandProperty FullName
} else {
    $ffmpeg = "ffmpeg"
}

$root = Split-Path -Parent $PSScriptRoot
$res = Join-Path $root "RESSOURCES"
$pubVideo = Join-Path $root "public\video"
$pubImages = Join-Path $root "public\images"
$pubProjects = Join-Path $pubImages "projects"

New-Item -ItemType Directory -Force -Path $pubVideo, $pubImages, $pubProjects | Out-Null

Write-Host "== Hero loop (depuis le showreel) ==" -ForegroundColor Cyan
$showreel = Join-Path $res "Vidéos\Showreel\Nathan_Khounchef_Showreel_V6.mov"

& $ffmpeg -y -ss 4 -t 10 -i $showreel -vf "scale=1280:-2" -an -c:v libx264 -preset slow -crf 30 -pix_fmt yuv420p -movflags +faststart (Join-Path $pubVideo "hero-loop.mp4")
& $ffmpeg -y -ss 4 -t 10 -i $showreel -vf "scale=720:-2"  -an -c:v libx264 -preset slow -crf 32 -pix_fmt yuv420p -movflags +faststart (Join-Path $pubVideo "hero-loop-mobile.mp4")
& $ffmpeg -y -ss 4 -i $showreel -frames:v 1 -vf "scale=1280:-2" -q:v 3 (Join-Path $pubVideo "hero-poster.jpg")

Write-Host "== Posters des projets ==" -ForegroundColor Cyan

function New-Poster($srcRelative, $outName, $seekSeconds, $width) {
    $src = Join-Path $res $srcRelative
    $out = Join-Path $pubProjects $outName
    & $ffmpeg -y -ss $seekSeconds -i $src -frames:v 1 -vf "scale=$($width):-2" -q:v 3 $out
    Write-Host "  -> $outName"
}

# Horizontal
New-Poster "Vidéos\Horizontal\association_durable_-_mini_doc (1080p).mp4" "association-durable.jpg" 1 1280
New-Poster "Vidéos\Horizontal\présentation_-_bac_bobinage (1080p).mp4"    "bac-bobinage.jpg"        5 1280
New-Poster "Vidéos\Horizontal\V1_Motocross.mov"                            "motocross.jpg"           5 1280
New-Poster "Vidéos\Horizontal\Vétalis_50ans_Aftermovie_V1.mp4"            "vetalis-50ans.jpg"       5 1280

# Vertical
New-Poster "Vidéos\Vertical\Emily's_Pillow_Présentation_V6.mov"            "emilys-pillow.jpg"       3 720
New-Poster "Vidéos\Vertical\Film_Collection_Delta.mov"                     "collection-delta.jpg"    3 720
New-Poster "Vidéos\Vertical\One-Talk-Beyond-V.DEF.mov"                     "one-talk-beyond.jpg"     0.5 720
New-Poster "Vidéos\Vertical\REEL INSTA.mp4"                                "reel-insta.jpg"          3 720
New-Poster "Vidéos\Vertical\Zèta_&_Oxana_One_Talk_Beyond_n°4.mov"          "zeta-oxana.jpg"          0.5 720

Write-Host "== Photos optimisées ==" -ForegroundColor Cyan

function New-Photo($srcRelative, $outName, $width) {
    $src = Join-Path $res $srcRelative
    $out = Join-Path $pubImages $outName
    & $ffmpeg -y -i $src -vf "scale=$($width):-2" -q:v 3 $out
    Write-Host "  -> $outName"
}

New-Photo "Photos de moi\Principal.jpg"           "profile-principal.jpg" 1600
New-Photo "Photos de moi\autre.jpg"                "profile-autre.jpg"     1600
New-Photo "Photos de moi\sur qui je suis.jpg"      "profile-qui-je-suis.jpg" 1600

Write-Host "Terminé." -ForegroundColor Green

