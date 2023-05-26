.PHONY: build
build: deps compile

.PHONY: deps
deps:
	npm install

.PHONY: compile
compile:
	npm run build

.PHONY: start
start:
	npm run dev

.PHONY: test
test:
	npm run test

.PHONY: lint
lint:
	npm run lint

.PHONY: lint-fix
lint-fix:
	npm run lint:fix

.PHONY: sb
sb:
	npm run storybook
