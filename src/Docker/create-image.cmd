docker build --no-cache -f SQL\Dockerfile.PostgreSql -t tshest/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t tshest/app ../..
