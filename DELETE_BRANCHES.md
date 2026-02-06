# Branch Cleanup Instructions

This document provides instructions for deleting all branches in this repository except the `main` branch.

## Current Branches to Delete

Based on the repository analysis performed on 2026-02-06:

- `v0/mahdi732-50d36080`
- `v0/mahdi732-598fa299`

The `main` branch will be preserved.

## Option 1: Using GitHub Web Interface

1. Go to the repository: https://github.com/Mahdi732/portfolio_el
2. Click on the "branches" link (shows number of branches)
3. For each branch except `main`:
   - Click the trash icon next to the branch name
   - Confirm the deletion

## Option 2: Using Git Command Line

If you have the repository cloned locally with proper credentials:

```bash
# Delete remote branches
git push origin --delete v0/mahdi732-50d36080
git push origin --delete v0/mahdi732-598fa299

# Delete local branches if they exist
git branch -D v0/mahdi732-50d36080
git branch -D v0/mahdi732-598fa299
```

## Option 3: Using GitHub CLI (gh)

If you have GitHub CLI installed:

```bash
gh api repos/Mahdi732/portfolio_el/git/refs/heads/v0/mahdi732-50d36080 -X DELETE
gh api repos/Mahdi732/portfolio_el/git/refs/heads/v0/mahdi732-598fa299 -X DELETE
```

## Automated Script

Save this as `delete_branches.sh` and run with `bash delete_branches.sh`:

```bash
#!/bin/bash

# Branches to delete
BRANCHES=(
  "v0/mahdi732-50d36080"
  "v0/mahdi732-598fa299"
)

echo "This will delete the following remote branches:"
for branch in "${BRANCHES[@]}"; do
  echo "  - $branch"
done

read -p "Are you sure you want to continue? (yes/no): " confirm

if [ "$confirm" = "yes" ]; then
  for branch in "${BRANCHES[@]}"; do
    echo "Deleting remote branch: $branch"
    git push origin --delete "$branch"
  done
  echo "Branch deletion complete!"
else
  echo "Operation cancelled."
fi
```

## Notes

- The `main` branch is preserved
- The `copilot/delete-all-branches-except-main` branch (current PR branch) should be deleted after this PR is merged
- Make sure you have proper permissions to delete branches in the repository
