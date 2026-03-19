#!/usr/bin/env bash

# Exit immediately if a command fails
set -e

# Ensure a test name was provided
if [ -z "$1" ]; then
  echo "Usage: ./run_a_test <test_file_name_without_py>"
  echo "Example: ./run_a_test test_24_store_load_data"
  exit 1
fi

TEST_NAME="$1"
TEST_PATH="tests/${TEST_NAME}"

# Check if test file exists
if [ ! -f "$TEST_PATH" ]; then
  echo "Error: Test file '$TEST_PATH' not found."
  echo ""
  echo "Available tests:"
  ls tests | grep ".py"
  exit 1
fi

# Run pytest on the specific file
echo "Running $TEST_PATH..."
pytest "$TEST_PATH"
