code Makefile
install:
    npm ci
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
.PHONY: lint
lint:
	npx eslint .