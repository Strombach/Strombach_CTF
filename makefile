COMPOSE=docker compose
BASE_FILE=-f docker-compose.yml

.PHONY: dev prod down rebuild logs

dev:
	$(COMPOSE) $(BASE_FILE) -f docker-compose.dev.yml up --build

prod:
	$(COMPOSE) $(BASE_FILE) -f docker-compose.prod.yml up --build -d

down:
	$(COMPOSE) $(BASE_FILE) -f docker-compose.dev.yml -f docker-compose.prod.yml down -v

rebuild:
	$(COMPOSE) $(BASE_FILE) -f docker-compose.dev.yml build --no-cache

logs:
	$(COMPOSE) $(BASE_FILE) -f docker-compose.dev.yml logs -f