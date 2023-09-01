interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Bank Manager'],
  customerRoles: ['Customer'],
  tenantRoles: ['Bank Owner', 'Bank Employee', 'Bank Manager', 'Customers', 'Accounts'],
  tenantName: 'Bank',
  applicationName: 'SAS Bank System v2',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View account balance',
    'Download account statement',
    'Pay bills through bank app',
    'Apply and check status of credit card',
  ],
  ownerAbilities: [
    'Invite employees to the bank',
    "Manage customer's account details",
    'Manage transactions',
    "View customer's account balance",
  ],
};
