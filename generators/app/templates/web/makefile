SHELL := /bin/bash

DIST ?= dist

lint:
	npx eslint --fix .

clean:
	-rm -r ${DIST}

build\:dev:
	npx webpack --config config/webpack.dev.js

build\:prod:
	npx webpack --config config/webpack.prod.js

.PHONY: lint clean build test watch
