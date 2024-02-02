Just for sanity checking apache config (which should just be the default).

```shell
docker-compose up apache2 --force-recreate -d;
docker-compose exec apache2 bash;
cd htdocs;
```