# Payment Gateway Service & 3DS2 Processor

## Overview
This repository manages the high-throughput payment processing pipeline for international credit cards, including 3D Secure 2 (3DS2) authentication workflows and webhook dispatchers.

## Architecture & Technology Stack
- **Runtime**: Node.js v24 (LTS) & TypeScript
- **Queueing Engine**: Redis Streams (cluster mode) with consumer group \`stripe-workers\`
- **Database**: PostgreSQL 16 with Primary-Replica streaming replication
- **Security SLA**: PCI-DSS Level 1 compliant. Idempotency keys required on all non-idempotent charge mutations.

## Incident & Rollback Runbook
- In case of elevated 504 timeouts on webhook callbacks, inspect the ingress NGINX proxy buffer limits.
- If primary DB migration 084 fails, execute:
  \`\`\`bash
  ./scripts/rollback-3ds2.sh --force --drain-queue
  \`\`\`
- Emergency SRE on-call Slack channel: **#fintech-incidents**
- Maximum tolerable replication lag before migration abort: **50ms**.
