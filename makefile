COMPOSE=docker compose
BASE_FILE=-f docker-compose.yml
DEV_FILE=-f docker-compose.dev.yml
PROD_FILE=-f docker-compose.prod.yml

.PHONY: dev prod down rebuild logs

dev:
	$(COMPOSE) $(BASE_FILE) $(DEV_FILE) up --build

prod:
	$(COMPOSE) $(BASE_FILE) $(PROD_FILE) build $(app) && $(COMPOSE) $(BASE_FILE) $(PROD_FILE) up -d $(app)

down:
	$(COMPOSE) $(BASE_FILE) -f docker-compose.dev.yml -f docker-compose.prod.yml down -v

rebuild:
	$(COMPOSE) $(BASE_FILE) -f docker-compose.dev.yml build $(app) --no-cache

logs:
	$(COMPOSE) $(BASE_FILE) -f docker-compose.dev.yml logs -f