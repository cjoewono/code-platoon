echo "Building Docker image..."
docker build -t pytest-img .

echo "Running tests in Docker container..."
docker run pytest-img