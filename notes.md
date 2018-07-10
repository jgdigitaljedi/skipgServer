## ** Insert admin user **
- first run in dev mode and hit the devuser route to get the hash and salt for your admin login
```
mongo
use skipg
db.users.insert({'email':'email@domain.com', 'name': 'your name', 'admin': true, 'salt': 'yourGeneratedSalt', 'hash': 'yourGeneratedHash'});
```

## ** Drop DB **
```
mongo
use skipg
db.dropDatabase()
```