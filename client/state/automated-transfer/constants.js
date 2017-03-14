export const transferStates = {
	INQUIRING: 'inquiring',
	START: 'start',
	SETUP: 'setup',
	CONFLICTS: 'conflicts',
	COMPLETE: 'complete',
};

export const eligibilityHolds = {
	TRANSFER_ALREADY_EXISTS: 'TRANSFER_ALREADY_EXISTS',
	NO_BUSINESS_PLAN: 'NO_BUSINESS_PLAN',
	NO_JETPACK_SITES: 'NO_JETPACK_SITES',
	NO_VIP_SITES: 'NO_VIP_SITES',
	SITE_PRIVATE: 'SITE_PRIVATE',
	SITE_GRAYLISTED: 'SITE_GRAYLISTED',
	NON_ADMIN_USER: 'NON_ADMIN_USER',
	NOT_USING_CUSTOM_DOMAIN: 'NOT_USING_CUSTOM_DOMAIN',
	NOT_DOMAIN_OWNER: 'NOT_DOMAIN_OWNER',
	NO_WPCOM_NAMESERVERS: 'NO_WPCOM_NAMESERVERS',
	NOT_RESOLVING_TO_WPCOM: 'NOT_RESOLVING_TO_WPCOM',
	NO_SSL_CERTIFICATE: 'NO_SSL_CERTIFICATE'
};
