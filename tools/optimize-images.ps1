param(
  [string]$AssetsPath = (Join-Path $PSScriptRoot "..\assets"),
  [switch]$Force
)

# Creates a browser-friendly sibling named <image>-web.<ext> and never overwrites the source.
Add-Type -AssemblyName System.Drawing

$images = Get-ChildItem -LiteralPath $AssetsPath -Recurse -File |
  Where-Object { $_.Extension -match '^\.(png|jpg|jpeg)$' -and $_.BaseName -notmatch '-web$' }

foreach ($file in $images) {
  $output = Join-Path $file.DirectoryName ("{0}-web{1}" -f $file.BaseName, $file.Extension.ToLower())
  if ((Test-Path -LiteralPath $output) -and -not $Force) { continue }

  $source = [System.Drawing.Image]::FromFile($file.FullName)
  try {
    # Research boards retain more detail; regular photos and UI images stay light.
    $isDiagram = $file.BaseName -match 'architecture|flow|persona|empathy|affinity|business|feature|competitor'
    $maxWidth = if ($isDiagram) { 4000 } else { 2400 }
    if ($source.Width -le $maxWidth) { Copy-Item -LiteralPath $file.FullName -Destination $output -Force; continue }

    $scale = $maxWidth / $source.Width
    $width = [int][math]::Round($source.Width * $scale)
    $height = [int][math]::Round($source.Height * $scale)
    $bitmap = New-Object System.Drawing.Bitmap $width, $height
    try {
      $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
      try {
        $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $graphics.DrawImage($source, (New-Object System.Drawing.Rectangle 0, 0, $width, $height))
        if ($file.Extension -match '(?i)\.jpe?g') { $bitmap.Save($output, [System.Drawing.Imaging.ImageFormat]::Jpeg) }
        else { $bitmap.Save($output, [System.Drawing.Imaging.ImageFormat]::Png) }
      } finally { $graphics.Dispose() }
    } finally { $bitmap.Dispose() }
  } finally { $source.Dispose() }
}

Write-Host "Web-ready images are available next to their original files."
