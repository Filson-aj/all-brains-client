import { IoIosSpeedometer } from 'react-icons/io'
import { HiHome, HiAcademicCap, HiUsers, HiUser, HiUserGroup, HiOfficeBuilding, 
    HiBookOpen, HiMenu } from 'react-icons/hi'
import { RiSettings4Line } from 'react-icons/ri'
import { Facebook, Twitter, Instagram } from 'react-feather'

export const PORT = 8080
export const URL = `http://localhost:${PORT}`
export const URL_AUTH = `http://localhost:${PORT}/auth`

export const images = {
    logo: require('../images/logo.jpg'),
    photo1: require('../images/Photo1.jpeg'),
    photo2: require('../images/Photo2.jpeg'),
    photo3: require('../images/Photo3.jpeg'),
    photo4: require('../images/Photo4.jpeg'),
    photo5: require('../images/Photo5.jpeg'),
    admission: require('../images/admission.jpg'),
    benefits: require('../images/benefits.jpg'),
}

export const icons = {
    speedometer: IoIosSpeedometer,
    home: HiHome,
    menus: HiMenu,
    academic: HiAcademicCap,
    users: HiUsers,
    user: HiUser,
    userGroup: HiUserGroup,
    officeBuilding: HiOfficeBuilding,
    openBook: HiBookOpen,
    settings: RiSettings4Line,
    facebook: Facebook,
    twitter: Twitter,
    instagram: Instagram,
}

export const styles = {
    btnToggler: `
      inline-flex items-center justify-center p-2 rounded-md text-gray-400 
      hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white
    `,
    btnNav: `
        text-indigo-100 font-bold px-4 py-2 rounded-full text-xs uppercase
    `,
    input: `
        bg-slate-100 border border-gray-200 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 
        focus:border-primary-600 ark:text-gray-900 
        dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 mb-2
    `,
    inputLight: `
        border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 
        focus:border-primary-600 block 
        w-full p-2.5 dark:bg-white dark:border-gray-400 dark:placeholder-gray-400 dark:text-gray-900 
        dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2
    `,
    btnPrimary: `
        w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:border 
        focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 
        dark:hover:bg-primary-700 
        dark:focus:ring-primary-800 hover:border my-2
    `,
    btnSecondary: `
        w-full text-white bg-primary-600 hover:bg-primary-200 focus:ring-4 focus:outline-none focus:border 
        focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 
        dark:hover:bg-primary-700 disabled:bg-gray-100
        dark:focus:ring-primary-800 :hover:border my-2
    `,
    navLink: `
        flex items-center p-2 text-base font-normal text-gray-900 
        rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700
    `,
    navDropdown: `
        flex items-center justify-between p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white
        w-full text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700
    `,
    navLinkItem: `
        text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium
    `,
    indicator: `
        text-lg border-2 border-dotted border-pink-100 p-1 rounded-full h-10 w-10 mx-auto
        font-bold text-center text-red-500
    `,
    button: `
        w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none 
        focus:border focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
        dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 hover:border 
        disabled:bg-gray-800
    `,
    label: `
        block mb-2 text-md font-medium text-gray-900 dark:text-white
    `,
}

export const urls = {
    root: '/',
    signin: 'login',
    signup: 'signup',
    signout: 'signout',
    calendar: 'calendars',
    campuses: 'campuses',
    enterprises: 'enterprises',
    sitemap: 'sitemap',
    globalLocation: 'global-location',
    contact: 'contact-us',
    about: 'about-us',
    mission: 'our-mission',
    vision: 'our-vision',
    schools: 'schools', 
    settings: 'users',
    departments: 'departments',
    programmes: 'programmes',
    units: 'units',
    offices: 'offices',
    council: 'council',
    courses: 'courses',
    staffs: 'staffs',
    register: 'register',
    create: 'create',
    view: 'view',
    update: 'update',
    delete: 'delete',
    landing: 'landing',
    dashboard: 'dashboard',
    user: 'user',
    admin: 'admin',
    super: 'super',
    student: 'student',
    center: 'blood-bank',
    overview: 'overview',
    notification: 'notification',
    profile: 'profile',
}

export const menus = {
    admin: [
        {name: 'Dashboard', link: ``, icon: IoIosSpeedometer },
        {name: 'Schools', link: `${urls.schools}`, icon: icons.officeBuilding },
        {name: 'Departments', link: `${urls.departments}`, icon: icons.officeBuilding },
        {name: 'Programmes', link: `${urls.programmes}`, icon: icons.academic},
        {name: 'Staff', link: `${urls.staffs}`, icon: icons.users },
        {name: 'Students', link: `${urls.student}`, icon: icons.userGroup},
        {name: 'Courses', link: `${urls.courses}`, icon: icons.openBook },
        {name: 'Settings', link: `${urls.settings}`, icon: icons.settings },
    ],
    officer: [
        {name: 'Dashboard', link: ``, icon: IoIosSpeedometer },
        {name: 'Schools', link: `${urls.schools}`, icon: icons.officeBuilding },
        {name: 'Departments', link: `${urls.departments}`, icon: icons.officeBuilding },
        {name: 'Programmes', link: `${urls.programmes}`, icon: icons.academic},
        {name: 'Staff', link: `${urls.staffs}`, icon: icons.users },
        {name: 'Students', link: `${urls.student}`, icon: icons.userGroup},
        {name: 'Courses', link: `${urls.courses}`, icon: icons.openBook },
        {name: 'Settings', link: `${urls.settings}`, icon: icons.settings },
    ],
    lecturer: [
        {name: 'Dashboard', link: ``, icon: IoIosSpeedometer },
        {name: 'Schools', link: `${urls.schools}`, icon: icons.officeBuilding },
        {name: 'Departments', link: `${urls.departments}`, icon: icons.officeBuilding },
        {name: 'Programmes', link: `${urls.programmes}`, icon: icons.academic},
        {name: 'Staff', link: `${urls.staffs}`, icon: icons.users },
        {name: 'Students', link: `${urls.student}`, icon: icons.userGroup},
        {name: 'Courses', link: `${urls.courses}`, icon: icons.openBook },
        {name: 'Settings', link: `${urls.settings}`, icon: icons.settings },
    ],
    student: [
        {name: 'Dashboard', link: ``, icon: IoIosSpeedometer },
        {name: 'Schools', link: `${urls.schools}`, icon: icons.officeBuilding },
        {name: 'Departments', link: `${urls.departments}`, icon: icons.officeBuilding },
        {name: 'Programmes', link: `${urls.programmes}`, icon: icons.academic},
        {name: 'Staff', link: `${urls.staffs}`, icon: icons.users },
        {name: 'Students', link: `${urls.student}`, icon: icons.userGroup},
        {name: 'Courses', link: `${urls.courses}`, icon: icons.openBook },
        {name: 'Settings', link: `${urls.settings}`, icon: icons.settings },
    ],
}

export const links = [
    {name: 'About Us', submenu: true, sublinks: [
      {
        Head: 'About All Brains',
        sublink: [
          {name: 'The College', link: '/about-college'},
          {name: 'Mission & Vission', link: '/about-mission-vission'},
          {name: 'Strategic Plan', link: '/about-strategic-plan'},
          {name: 'Projects', link: '/about-projects'},
          {name: 'Linkages', link: '/about-linkages'},
          {name: 'Staff Directory', link: '/about-staff-directory'},
        ]
      },
      {
        Head: 'The Management',
        sublink: [
          {name: 'Pricipal Officer', link: '/about-principal-officer'},
          {name: 'Board of Trustees', link: '/about-board-of-trustees'},
          {name: 'Governing Council', link: '/about-governing-council'},
        ]
      },
      {
        Head: 'Support Units',
        sublink: [
          {name: 'Academic Planning', link: '/Academic-Planning'},
          {name: 'Physical Planning & Dev.', link: '/Physical-Planning-and-Development'},
          {name: 'Student Affairs Division', link: '/Students-Affairs-Division'},
          {name: 'Security Division', link: '/security-division'},
          {name: 'College Advancement', link: '/college-advancement'},
          {name: 'College Health Service', link: '/college-health-services'},
        ]
      },
    ]},
    {name: 'Administration', submenu: true, sublinks: [
        {
            Head: 'Centeral Administration',
            sublink: [
              {name: 'The Rector', link: '/rector'},
              {name: 'Deputy Rector', link: '/deputy-rector'},
              {name: 'Registrar', link: '/registrar'},
            ]
        },
        {
            Head: 'Directorates & Units',
            sublink: [
              {name: 'Consultancy Servicees', link: '/consultancy-services'},
              {name: 'Guidance & counseling', link: '/guidance-counseling'},
              {name: 'Information & Protocol', link: '/information-protocol'},
            ]
        },
        {
            Head: 'Centers',
            sublink: [
              {name: 'ERDC', link: '/ERDC'},
              {name: 'ICT', link: '/ICT'},
            ]
        },
    ]},
    {name: 'Academics', submenu: true, sublinks: [
        {
            Head: 'Faculties',
            sublink: [
              {name: 'Administration', link: '/administration'},
              {name: 'Allied Health Science', link: '/allied-health-sciences'},
              {name: 'Arts', link: '/arts'},
              {name: 'Basic Clinical Sciences', link: '/basic-clinical-sciences'},
              {name: 'Basic Medical Sciences', link: '/basic-medical-sciences'},
              {name: 'Clinical Sciences', link: '/clinical-sciences'},
              {name: 'Education', link: '/education'},
              {name: 'Environmental Sciencess', link: '/environmental-sciences'},
            ]
        },
        {
            Head: 'Colleges'
        },
        {
            Head: 'Planning',
            sublink: [
              {name: 'Academic Planning', link: '/academic-planning'},
              {name: 'Academic Calendar', link: '/academic-calendar'},
            ]
        },
    ]},
    {name: 'Admission', submenu: true, sublinks: [
      {
        Head: 'Programs',
        sublink: [
          {name: 'Pre-degree', link: '/Pre-degree'},
          {name: 'Undergraduate', link: '/undergraduate'}, 
          {name: 'Postgraduate', link: '/postgraduate'},
        ]
      },
      {
        Head: 'Fees & Scholarship',
        sublink: [
          {name: 'Schedule of fees', link: '/schedule-fees'},
          {name: 'Part Time Fees', link: '/part-time-fees'},
          {name: 'Available Scholarship', link: '/avaiable-schoolarship'},
        ]
      },
      {
        Head: 'Life At All Brains',
        sublink: [
          {name: 'Sports', link: '/sport'},
          {name: 'Cafteria', link: '/cafteria'},
        ]
      },
    ]},
    {name: 'Research', submenu: true, sublinks: [
        {
            Head: 'Research',
            sublink: [
              {name: 'Research Policy', link: '/research-policy'},
              {name: 'Academic Journals', link: '/academic-journals'},
              {name: 'Publications', link: '/publications'},
            ]
        },
        {
            Head: 'Resources',
            sublink: [
              {name: 'Library Policy', link: '/library-policy'},
              {name: 'Repository Journals', link: '/repository-journals'},
              {name: 'E-Learning', link: '/e-learning'},
              {name: 'OER', link: '/oer'},
            ]
        },
        {
            Head: 'Research Centre',
            sublink: [
              {name: 'Zankli Research Center', link: '/zankli-research-center'},
            ]
        },
    ]},
    {name: 'Library'},
    {name: 'News & Media', submenu: true, sublinks: [
        {
            sublink: [
              {name: 'College News', link: '/college-news'},
              {name: 'College Bulletin', link: '/college-bulletin'},
              {name: 'Photo Gallary', link: '/photo-gallary'},
            ]
        },
    ]},
    {name: 'Contact'},
]