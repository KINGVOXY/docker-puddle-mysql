#!/usr/bin/env bash
mysql -u docker -pdocker test_database < "/docker-entrypoint-initdb.d/example.sql"
