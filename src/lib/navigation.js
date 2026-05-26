export const navItems = [
  { label: 'HOME', href: '/' },
  {
    label: 'Call For Papers',
    href: '/call-for-papers/track-details',
    children: [
      { label: 'Track Details', href: '/call-for-papers/track-details' },
      { label: 'Submission Guidelines', href: '/call-for-papers/submission-guidelines' },
    ],
  },
  {
    label: 'Author Info',
    href: '/author-info/important-dates',
    children: [
      { label: 'Important Dates', href: '/author-info/important-dates' },
      { label: 'Registration Amount', href: '/author-info/registration-amount' },
      { label: 'Camera Ready Submission', href: '/author-info/camera-ready-submission' },
    ],
  },
  {
    label: 'Committee',
    href: '/committee/organizing-committee',
    children: [
      { label: 'Organizing Committee', href: '/committee/organizing-committee' },
      { label: 'Technical Program Committee', href: '/committee/technical-program-committee' },
      { label: 'Advisory Committee', href: '/committee/advisory-committee' },
    ],
  },
  { label: 'CMT Acknowledgement', href: '/cmt-acknowledgement' },
  { label: 'Speakers', href: '/speakers' },
  { label: 'Contact Us', href: '/contact-us' },
];
