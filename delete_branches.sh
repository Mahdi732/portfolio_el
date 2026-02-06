#!/bin/bash

# Script to delete all branches except main
# Repository: Mahdi732/portfolio_el

echo "======================================"
echo "Branch Deletion Script"
echo "======================================"
echo ""

# Branches to delete
BRANCHES=(
  "v0/mahdi732-50d36080"
  "v0/mahdi732-598fa299"
)

echo "This script will delete the following remote branches:"
for branch in "${BRANCHES[@]}"; do
  echo "  - $branch"
done
echo ""
echo "The 'main' branch will be preserved."
echo ""

read -p "Are you sure you want to continue? (yes/no): " confirm

if [ "$confirm" = "yes" ]; then
  echo ""
  echo "Starting branch deletion..."
  echo ""
  
  for branch in "${BRANCHES[@]}"; do
    echo "Deleting remote branch: $branch"
    if git push origin --delete "$branch"; then
      echo "  ✓ Successfully deleted: $branch"
    else
      echo "  ✗ Failed to delete: $branch"
    fi
    echo ""
  done
  
  echo "======================================"
  echo "Branch deletion complete!"
  echo "======================================"
else
  echo "Operation cancelled."
fi
