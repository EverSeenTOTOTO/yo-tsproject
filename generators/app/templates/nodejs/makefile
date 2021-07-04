SHELL := /bin/bash

DIST ?= dist

lint:
	npx eslint --fix .
	npx tsc
	@echo -e '\033[1;32mNo lint errors found.'

clean:
	-rm -r ${DIST}

build: clean
	npx rollup -c rollup.config.js

start: build
	node ${DIST}/index.js

watch:
	npx nodemon --config nodemon.json

test:
	npx jest

.PHONY: lint clean build start test watch
