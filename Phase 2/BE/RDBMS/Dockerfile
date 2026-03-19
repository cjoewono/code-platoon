FROM postgres:latest

WORKDIR /app

COPY . .

ENV POSTGRES_USER=student
ENV POSTGRES_PASSWORD=student
ENV POSTGRES_DB=corsair_db

CMD [ "postgres" ]