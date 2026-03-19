echo "Building Img"
docker build -t postgres-img .

echo "Running Container"
docker run --rm  \
-v $(pwd)/practice.sql:/app/practice.sql \
--name postgres-container \
postgres-img