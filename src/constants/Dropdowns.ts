export const UserDrawers = [
  {
    name: 'USER 1',
    links: [
      {
        name: 'Company Account 1',
        url: '/profile/account1',
      },
      {
        name: 'Company Account 2',
        url: '/profile/account2',
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

export const DataSort = [
  {
    name: 'DATE',
    list: [
      {
        name: 'Ascending',
        link: 'ascending'
      },
      {
        name: 'Descending',
        link: 'descending'
      },
    ]
  }
];

export const DataSortStatus1 = [
  {
    name: 'Status 1',
    list: [
      {
        name: 'Read',
        link: 'read'
      },
      {
        name: 'Unread',
        link: 'unread',
      },
    ]
  }
];

export const BookNowOptions = [
  {
    name: 'Book Now',
    url: '/book-now?option=0'
  },
  {
    name: 'Schedule Pick Up',
    url: '/book-now?option=1'
  },
  {
    name: 'Request Supplies',
    url: '/book-now?option=2'
  },
];

export const RecurrenceOptions = [
  {
    name: 'Recurrence',
    links: [
      {
        name: "Once a Week (Mon)",
        url: "/book-now?recurrence=0"
      },
      {
        name: "Twice a Week (Mon & Thu)",
        url: "/book-now?recurrence=1"
      },
      {
        name: "Once a Month",
        url: "/book-now?recurrence=2"
      },
    ]
  }
];