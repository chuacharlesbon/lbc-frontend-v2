export const UserDrawers = [
    {
      name: 'USER 1',
      links: [
        {
          name: 'Account',
          url: '/profile/account',
        },
        {
          name: 'Settings',
          url: '/settings',
        },
        {
          name: 'Log Out',
          url: '/logout',
        },
      ],
    },
  ];

  export const AnalyticsDeliveryDrawers = [
    {
      name: 'USER 1',
      links: [
        {
          name: 'Delivery Status',
          url: '/dashboard-home?status=delivery-status',
          filter: [
            {
              name: 'In-Transit',
              url: 'in-transit'
            },
            {
              name: 'For Disposition',
              url: 'for-disposition'
            },
            {
              name: 'Delivered',
              url: 'delivered'
            },
            {
              name: 'Returned',
              url: 'returned'
            },
            {
              name: 'Others',
              url: 'others'
            },
            {
              name: 'Make Default',
              url: 'default-delivery-status'
            },
          ]
        },
        {
          name: 'Remittance Status',
          url: '/dashboard-home?status=remittance-status',
          filter: [
            {
              name: 'Total COD Amount',
              url: 'total-cod-amount'
            },
            {
              name: 'Amount Remitted',
              url: 'amount-remitted'
            },
            {
              name: 'For Remittance',
              url: 'for-remittance'
            },
            {
              name: 'Make Default',
              url: 'default-remittance'
            },
          ]
        },
      ],
    },
  ];