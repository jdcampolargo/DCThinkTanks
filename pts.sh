#!/bin/bash

# Stage all changes, including modifications and deletions, for the next commit
git add -U

# Show the changes made
echo "Changes to be committed:"
git status

# Prompt for commit message
read -p "Enter commit message (or leave blank for default): " commit_message

# Default commit message if no input provided
default_message="Pushing Updates"

# Use custom commit message if provided, otherwise use default
if [[ -n "$commit_message" ]]; then
  git commit -m "$commit_message"
else
  git commit -m "$default_message"
fi

# Push to the master branch
git push