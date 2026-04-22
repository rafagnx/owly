/**
 * Cluster Mode Support for Next.js
 * 
 * This enables horizontal scaling by running multiple Node.js workers.
 * 
 * Usage:
 * - npm run start:cluster (production)
 * - node cluster.js (development)
 * 
 * The cluster mode distributes HTTP requests across workers,
 * improving throughput for high-volume tenants.
 */

const cluster = require("cluster");
const numCPUs = require("os").cpus().length;

if (cluster.isMaster || cluster.isPrimary) {
  console.log(`[Cluster] Primary ${process.pid} starting ${numCPUs} workers...`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`[Cluster] Worker ${worker.process.pid} died (${signal || code}). Restarting...`);
    cluster.fork();
  });
} else {
  console.log(`[Cluster] Worker ${process.pid} started`);
  
  // This module will be loaded by each cluster worker
  // Next.js will handle the actual request handling
  require("next/dist/bin/next-dev")/*.then(() => {
    // Worker is ready to accept connections
  })*/;
}

/**
 * Alternative: Use PM2 for production clustering
 * 
 * pm2 start npm --name "owly" -- start
 * pm2 scale owly +1  // add more instances
 * pm2 list             // view cluster status
 */