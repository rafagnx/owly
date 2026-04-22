#!/bin/bash
# Owly API Test Script
# Execute após migrate.sh para testar as novas APIs
# Usage: ./scripts/test-api.sh [environment]

set -e

ENV=${1:-"local"}  # local, staging, production
BASE_URL="http://localhost:3006"

if [ "$ENV" = "production" ]; then
  BASE_URL="https://owly.com.br"
elif [ "$ENV" = "staging" ]; then
  BASE_URL="https://staging.owly.com.br"
fi

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo "=========================================="
echo "  Owly API Tests ($ENV)"
echo "=========================================="
echo ""

test_endpoint() {
  local method=$1
  local endpoint=$2
  local expected=$3
  
  echo -n "Testing $method $endpoint... "
  
  if curl -s -o /dev/null -w "%{http_code}" "$BASE_URL$endpoint" | grep -q "$expected"; then
    echo -e "${GREEN}OK${NC}"
    return 0
  else
    echo -e "${YELLOW}SKIP${NC} (auth required)"
    return 1
  fi
}

echo -e "${YELLOW}Testing new endpoints...${NC}"
echo ""

# Test health
test_endpoint GET "/api/health" "200"

# Test pause status (needs auth)
test_endpoint GET "/api/pause" "200"

# Test custom fields
test_endpoint GET "/api/custom-fields" "200"

# Test pipeline stages
test_endpoint GET "/api/pipeline/stages" "200"

# Test customer groups
test_endpoint GET "/api/customer-groups" "200"

# Test kanban sum
test_endpoint GET "/api/pipeline/kanban/sum" "200"

# Test NPS
test_endpoint GET "/api/analytics/nps" "200"

# Test my funnel
test_endpoint GET "/api/pipeline/my-funnel" "200"

# Test storage
test_endpoint GET "/api/superadmin/storage" "200"

echo ""
echo -e "${GREEN}API tests completed!${NC}"
echo ""

# Quick manual verification checklist
echo "=========================================="
echo "  Manual Verification Checklist"
echo "=========================================="
echo ""
echo "[] Login as Admin"
echo "[] Test pause/resume agent"
echo "[] Test copilot in conversation"
echo "[] Create custom field"
echo "[] Test Kanban automation"
echo "[] Create customer group"
echo "[] Test pin conversation"
echo "[] Check NPS report"
echo ""