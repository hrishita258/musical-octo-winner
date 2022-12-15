import { FcSettings } from 'react-icons/fc'
import { SiSpeedtest } from 'react-icons/si'

export const MenuData = [
  {
    key: '1',
    label: 'Setup',
    icon: <FcSettings />,
    children: [
      {
        key: '1-1',
        label: 'User Management',
        role: ['admin', 'spoc'],
        children: [
          {
            key: '1-1-1',
            label: 'User List',
            link: 'userManagment/user-list'
          },
          {
            key: '1-1-2',
            label: 'Add User',
            link: 'userManagment/add-user'
          }
        ]
      }
    ]
  },
  {
    key: '2',
    label: 'Quiz',
    icon: <SiSpeedtest />,
    children: [
      {
        key: '2-1',
        label: 'Quiz List',
        role: ['admin', 'spoc', 'faculty'],
        link: 'quiz/quiz-list'
      },
      {
        key: '2-2',
        label: 'Add Quiz',
        role: ['faculty'],
        link: 'quiz/add-quiz'
      }
    ]
  },
  {
    key: '3',
    label: 'College Management',
    icon: <FcSettings />,
    role: ['admin'],
    children: [
      {
        key: '3-1',
        label: 'College List',
        link: 'collegeManagement/college-list'
      },
      {
        key: '3-2',
        label: 'Add College',
        link: 'collegeManagement/add-college'
      }
    ]
  }
]
