# Puddle & MySQL on Docker 🐳
## 使い方(How to use) 🍙
### build 🛠️
```sh
docker-compose build
```

### up 👆
```sh
docker-compose up -d
```

### down 👇
```sh
docker-compose down
```

### init mysql 👐
```sh
./init-mysql.sh
```
`docker/sql/example.sql`は適宜変更してください。

(Please modify `docker/sql/example.sql` if you use it.)

### start a Bash session (puddle) 🤝
```sh
./puddle-bash.sh
```
