
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.21.1
 * Query Engine version: bf0e5e8a04cada8225617067eaa03d041e2bba36
 */
Prisma.prismaVersion = {
  client: "5.21.1",
  engine: "bf0e5e8a04cada8225617067eaa03d041e2bba36"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.SuperAdminScalarFieldEnum = {
  id: 'id',
  username: 'username',
  password: 'password',
  name: 'name',
  email: 'email',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TenantScalarFieldEnum = {
  id: 'id',
  slug: 'slug',
  name: 'name',
  customDomain: 'customDomain',
  status: 'status',
  logo: 'logo',
  favicon: 'favicon',
  primaryColor: 'primaryColor',
  secondaryColor: 'secondaryColor',
  accentColor: 'accentColor',
  ownerName: 'ownerName',
  ownerEmail: 'ownerEmail',
  ownerPhone: 'ownerPhone',
  adminUsername: 'adminUsername',
  adminPassword: 'adminPassword',
  planId: 'planId',
  dbSchema: 'dbSchema',
  s3Bucket: 's3Bucket',
  s3Region: 's3Region',
  s3AccessKey: 's3AccessKey',
  s3SecretKey: 's3SecretKey',
  s3RetentionDays: 's3RetentionDays',
  smtpHost: 'smtpHost',
  smtpPort: 'smtpPort',
  smtpUser: 'smtpUser',
  smtpPass: 'smtpPass',
  smtpFrom: 'smtpFrom',
  useGlobalSmtp: 'useGlobalSmtp',
  trialEndsAt: 'trialEndsAt',
  metadata: 'metadata',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PlanScalarFieldEnum = {
  id: 'id',
  name: 'name',
  slug: 'slug',
  description: 'description',
  priceMonthly: 'priceMonthly',
  priceYearly: 'priceYearly',
  currency: 'currency',
  maxUsers: 'maxUsers',
  maxChannels: 'maxChannels',
  maxContacts: 'maxContacts',
  maxMessagesMonth: 'maxMessagesMonth',
  maxCampaigns: 'maxCampaigns',
  maxFlows: 'maxFlows',
  maxAiAgents: 'maxAiAgents',
  hasWhatsappQr: 'hasWhatsappQr',
  hasWhatsappApi: 'hasWhatsappApi',
  hasInstagram: 'hasInstagram',
  hasMessenger: 'hasMessenger',
  hasTelegram: 'hasTelegram',
  hasEmail: 'hasEmail',
  hasPhone: 'hasPhone',
  hasChatbot: 'hasChatbot',
  hasAiAgents: 'hasAiAgents',
  hasCampaigns: 'hasCampaigns',
  hasApi: 'hasApi',
  hasWebhooks: 'hasWebhooks',
  hasWhiteLabel: 'hasWhiteLabel',
  isActive: 'isActive',
  sortOrder: 'sortOrder',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SubscriptionScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  planId: 'planId',
  status: 'status',
  billingCycle: 'billingCycle',
  gatewayProvider: 'gatewayProvider',
  gatewayCustomerId: 'gatewayCustomerId',
  gatewaySubscriptionId: 'gatewaySubscriptionId',
  currentPeriodStart: 'currentPeriodStart',
  currentPeriodEnd: 'currentPeriodEnd',
  cancelledAt: 'cancelledAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PaymentScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  amount: 'amount',
  currency: 'currency',
  status: 'status',
  gatewayId: 'gatewayId',
  gatewayProvider: 'gatewayProvider',
  description: 'description',
  paidAt: 'paidAt',
  createdAt: 'createdAt'
};

exports.Prisma.BillingConfigScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  monthlyPrice: 'monthlyPrice',
  warningDays: 'warningDays',
  blockAfterDays: 'blockAfterDays',
  warningMessage: 'warningMessage',
  blockMessage: 'blockMessage',
  paymentLink: 'paymentLink',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.LicenseKeyScalarFieldEnum = {
  id: 'id',
  key: 'key',
  name: 'name',
  maxInstalls: 'maxInstalls',
  usedInstalls: 'usedInstalls',
  isActive: 'isActive',
  expiresAt: 'expiresAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.GlobalSettingsScalarFieldEnum = {
  id: 'id',
  platformName: 'platformName',
  platformLogo: 'platformLogo',
  platformDomain: 'platformDomain',
  smtpHost: 'smtpHost',
  smtpPort: 'smtpPort',
  smtpUser: 'smtpUser',
  smtpPass: 'smtpPass',
  smtpFrom: 'smtpFrom',
  billingGateway: 'billingGateway',
  billingApiKey: 'billingApiKey',
  billingWebhookSecret: 'billingWebhookSecret',
  maintenanceMode: 'maintenanceMode',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  SuperAdmin: 'SuperAdmin',
  Tenant: 'Tenant',
  Plan: 'Plan',
  Subscription: 'Subscription',
  Payment: 'Payment',
  BillingConfig: 'BillingConfig',
  LicenseKey: 'LicenseKey',
  GlobalSettings: 'GlobalSettings'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
