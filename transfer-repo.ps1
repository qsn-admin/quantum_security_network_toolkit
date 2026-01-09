# QSN Repository Transfer Script
# This script helps transfer the repository to qsn-admin organization

Write-Host "🚀 QSN Repository Transfer Script" -ForegroundColor Green
Write-Host "==================================" -ForegroundColor Green

# Check if git is configured
$gitUser = git config user.name
if (-not $gitUser) {
    Write-Host "❌ Git user.name not configured" -ForegroundColor Red
    Write-Host "Please run: git config --global user.name 'Your Name'" -ForegroundColor Yellow
    exit 1
}

$gitEmail = git config user.email
if (-not $gitEmail) {
    Write-Host "❌ Git user.email not configured" -ForegroundColor Red
    Write-Host "Please run: git config --global user.email 'your.email@example.com'" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ Git configuration found" -ForegroundColor Green

# Check current remote
$currentRemote = git remote get-url origin 2>$null
Write-Host "📍 Current remote: $currentRemote" -ForegroundColor Cyan

# Add new remote
Write-Host "🔗 Adding new remote for qsn-admin organization..." -ForegroundColor Cyan
git remote add qsn-admin https://github.com/qsn-admin/quantum_security_network_toolkit.git

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ New remote added successfully" -ForegroundColor Green
} else {
    Write-Host "❌ Failed to add new remote" -ForegroundColor Red
    exit 1
}

# Push to new repository
Write-Host "📤 Pushing to qsn-admin repository..." -ForegroundColor Cyan
git push qsn-admin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Successfully pushed to qsn-admin repository" -ForegroundColor Green
} else {
    Write-Host "❌ Failed to push to qsn-admin repository" -ForegroundColor Red
    Write-Host "Please ensure you have push access to qsn-admin/quantum_security_network_toolkit" -ForegroundColor Yellow
    exit 1
}

Write-Host ""
Write-Host "🎉 Repository transfer completed!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Visit https://github.com/qsn-admin/quantum_security_network_toolkit" -ForegroundColor White
Write-Host "2. Enable GitHub Pages in repository settings" -ForegroundColor White
Write-Host "3. Ensure GitHub Actions are enabled" -ForegroundColor White
Write-Host "4. The site will be available at: https://qsn-admin.github.io/quantum_security_network_toolkit/" -ForegroundColor White
Write-Host ""
Write-Host "Note: You may need to update the default branch to 'main' if it's not already set." -ForegroundColor Yellow