#!/bin/bash

# QSN Repository Transfer Script
# This script helps transfer the repository to qsn-admin organization

echo "🚀 QSN Repository Transfer Script"
echo "=================================="

# Check if git is configured
if ! git config user.name > /dev/null; then
    echo "❌ Git user.name not configured"
    echo "Please run: git config --global user.name 'Your Name'"
    exit 1
fi

if ! git config user.email > /dev/null; then
    echo "❌ Git user.email not configured"
    echo "Please run: git config --global user.email 'your.email@example.com'"
    exit 1
fi

echo "✅ Git configuration found"

# Check current remote
CURRENT_REMOTE=$(git remote get-url origin 2>/dev/null)
echo "📍 Current remote: $CURRENT_REMOTE"

# Add new remote
echo "🔗 Adding new remote for qsn-admin organization..."
git remote add qsn-admin https://github.com/qsn-admin/quantum_security_network_toolkit.git

if [ $? -eq 0 ]; then
    echo "✅ New remote added successfully"
else
    echo "❌ Failed to add new remote"
    exit 1
fi

# Push to new repository
echo "📤 Pushing to qsn-admin repository..."
git push qsn-admin main

if [ $? -eq 0 ]; then
    echo "✅ Successfully pushed to qsn-admin repository"
else
    echo "❌ Failed to push to qsn-admin repository"
    echo "Please ensure you have push access to qsn-admin/quantum_security_network_toolkit"
    exit 1
fi

echo ""
echo "🎉 Repository transfer completed!"
echo ""
echo "Next steps:"
echo "1. Visit https://github.com/qsn-admin/quantum_security_network_toolkit"
echo "2. Enable GitHub Pages in repository settings"
echo "3. Ensure GitHub Actions are enabled"
echo "4. The site will be available at: https://qsn-admin.github.io/quantum_security_network_toolkit/"
echo ""
echo "Note: You may need to update the default branch to 'main' if it's not already set."