SHELL := /bin/bash

DIST ?= dist

lint:
	npx eslint --fix .

clean:
	-rm -r ${DIST}

build: clean
	npx tsc --outDir $(DIST)

start:
	if [[ ! -d ${DIST} ]]; then make build; fi
	node ${DIST}/index.js

test:
	npx jest

.PHONY: lint clean build start test
