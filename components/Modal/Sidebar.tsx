import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { ArrowRightIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'

// Import your icons here, e.g., ArrowIcon, Cog6ToothIcon, and navigation icons

interface SidebarProps {
  navigation: {
    name: string
    href: string
    icon: any
  }[]
  changePage: (e: any, href: string, index: number) => void
  pageNum: number
  sidebarOpen: boolean
  handleSidebarShow: (value: boolean) => void
}

const Sidebar = ({
  navigation,
  changePage,
  pageNum,
  sidebarOpen,
  handleSidebarShow,
}: SidebarProps) => {
  const [showText, setShowText] = useState(false)

  const handleShowText = (value: boolean) => {
    if (!sidebarOpen) {
      setShowText(value)
    }
  }

  useEffect(() => {
    setShowText(sidebarOpen)
  }, [sidebarOpen])

  return (
    <div
      className={classNames(
        'fixed inset-y-0 z-[20] flex flex-col duration-300',
        {
          'w-16': !showText,
          'w-64': showText || sidebarOpen,
        }
      )}
      onMouseEnter={() => handleShowText(true)}
      onMouseLeave={() => handleShowText(false)}
    >
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden bg-white dark:bg-gray-800">
        <div className="flex h-16 flex-shrink-0 items-center justify-between bg-white px-4 shadow dark:bg-gray-900 ">
          <div>
            <svg
              width="50"
              height="23"
              viewBox="0 0 50 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.257 6.91303C12.9564 5.59274 11.6292 4.76324 10.2928 5.06029C9.23504 5.29541 8.48848 6.16585 8.37228 7.17329C8.34778 7.26242 8.32812 7.35383 8.31362 7.4473C7.78568 10.8511 7.14771 13.2411 6.50191 14.8785C5.84405 16.5464 5.24855 17.2525 4.92817 17.5123C4.86671 17.5621 4.82359 17.5907 4.79577 17.6066C4.77173 17.5952 4.73727 17.5765 4.69306 17.5462C4.59946 17.482 4.48925 17.3844 4.37855 17.2544C3.49689 16.2187 1.9323 16.0852 0.883934 16.9562C-0.164428 17.8272 -0.299565 19.3729 0.582098 20.4087C1.26107 21.2063 2.29848 22.057 3.6656 22.3851C5.16555 22.745 6.72961 22.3915 8.07516 21.3005C9.27368 20.3287 10.2367 18.8329 11.0289 16.8946C11.57 18.2424 12.1241 19.3369 12.6956 20.1946C13.4494 21.326 14.4715 22.4109 15.882 22.8279C17.4786 23.2998 18.8783 22.7334 19.8497 21.9513C20.7555 21.2221 21.4503 20.2015 21.9905 19.2062C22.3285 18.5834 22.6421 17.9024 22.9322 17.1885C23.7019 18.9854 24.6285 20.3796 25.7673 21.3016C27.1139 22.392 28.6782 22.7446 30.1779 22.3853C31.5453 22.0576 32.5835 21.2076 33.2635 20.4099C34.1459 19.3748 34.0118 17.829 32.964 16.9573C31.9163 16.0855 30.3516 16.218 29.4692 17.2531C29.3583 17.3832 29.2478 17.4809 29.1538 17.5453C29.109 17.5759 29.0731 17.5955 29.0475 17.6074C29.0193 17.5916 28.9751 17.5626 28.9116 17.5112C28.5905 17.2512 27.9942 16.545 27.3356 14.8774C26.689 13.2403 26.0501 10.8505 25.5215 7.4468C25.5211 7.44436 25.5207 7.44194 25.5204 7.43951C25.5163 6.28134 24.6779 5.25437 23.4829 5.03997C22.1351 4.79815 20.8441 5.68153 20.5993 7.01305C20.1595 9.40551 19.5348 11.995 18.781 14.1583C18.4039 15.2407 18.0112 16.1673 17.6189 16.8902C17.4003 17.2928 17.2065 17.5858 17.0477 17.7922C16.9855 17.7118 16.9158 17.6154 16.839 17.5001C15.8505 16.0165 14.6014 12.8163 13.257 6.91303ZM29.0871 17.6245C29.0868 17.6236 29.0809 17.621 29.0705 17.6192C29.0822 17.6245 29.0874 17.6254 29.0871 17.6245ZM4.7552 17.6247C4.75548 17.6239 4.761 17.6214 4.77089 17.6196C4.75986 17.6246 4.75491 17.6255 4.7552 17.6247Z"
                fill="#6466E9"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.4104 6.91303C25.1097 5.59274 23.7826 4.76324 22.4462 5.06029C21.3884 5.29541 20.6418 6.16585 20.5256 7.17329C20.5011 7.26242 20.4814 7.35383 20.4669 7.4473C19.939 10.8511 19.301 13.2411 18.6552 14.8785C17.9974 16.5464 17.4019 17.2525 17.0815 17.5123C17.02 17.5621 16.9769 17.5907 16.9491 17.6066C16.9251 17.5952 16.8906 17.5765 16.8464 17.5462C16.7528 17.482 16.6426 17.3844 16.5319 17.2544C15.6502 16.2187 14.0856 16.0852 13.0373 16.9562C11.9889 17.8272 11.8538 19.3729 12.7354 20.4087C13.4144 21.2063 14.4518 22.057 15.8189 22.3851C17.3189 22.745 18.8829 22.3915 20.2285 21.3005C21.427 20.3287 22.39 18.8329 23.1822 16.8946C23.7233 18.2424 24.2775 19.3369 24.8489 20.1946C25.6027 21.326 26.6248 22.4109 28.0353 22.8279C29.632 23.2998 31.0316 22.7334 32.003 21.9513C32.9088 21.2221 33.6036 20.2015 34.1438 19.2062C34.4819 18.5834 34.7954 17.9024 35.0855 17.1885C35.8552 18.9854 36.7819 20.3796 37.9206 21.3016C39.2673 22.392 40.8315 22.7446 42.3312 22.3853C43.6986 22.0576 44.7368 21.2076 45.4168 20.4099C46.2992 19.3748 46.1651 17.829 45.1174 16.9573C44.0696 16.0855 42.5049 16.218 41.6225 17.2531C41.5117 17.3832 41.4012 17.4809 41.3072 17.5453C41.2623 17.5759 41.2264 17.5955 41.2008 17.6074C41.1726 17.5916 41.1285 17.5626 41.065 17.5112C40.7438 17.2512 40.1475 16.545 39.4889 14.8774C38.8423 13.2403 38.2035 10.8505 37.6748 7.4468C37.6744 7.44436 37.6741 7.44194 37.6737 7.43951C37.6696 6.28134 36.8312 5.25437 35.6362 5.03997C34.2884 4.79815 32.9974 5.68153 32.7526 7.01305C32.3129 9.40551 31.6881 11.995 30.9344 14.1583C30.5572 15.2407 30.1646 16.1673 29.7722 16.8902C29.5536 17.2928 29.3598 17.5858 29.201 17.7922C29.1389 17.7118 29.0691 17.6154 28.9923 17.5001C28.0039 16.0165 26.7548 12.8163 25.4104 6.91303ZM41.2404 17.6245C41.2401 17.6236 41.2342 17.621 41.2238 17.6192C41.2355 17.6245 41.2407 17.6254 41.2404 17.6245ZM16.9085 17.6247C16.9088 17.6239 16.9143 17.6214 16.9242 17.6196C16.9132 17.6246 16.9082 17.6255 16.9085 17.6247Z"
                fill="#6466E9"
              />
              {/* <path
                  d="M59.6094 22H56.2461V4.72656H61.4961L64.6367 18.3086L67.7539 4.72656H72.9453V22H69.582V10.3164C69.582 9.98047 69.5859 9.51172 69.5938 8.91016C69.6016 8.30078 69.6055 7.83203 69.6055 7.50391L66.3359 22H62.832L59.5859 7.50391C59.5859 7.83203 59.5898 8.30078 59.5977 8.91016C59.6055 9.51172 59.6094 9.98047 59.6094 10.3164V22ZM76.5078 10.6094C77.3906 9.48438 78.9062 8.92188 81.0547 8.92188C82.4531 8.92188 83.6953 9.19922 84.7812 9.75391C85.8672 10.3086 86.4102 11.3555 86.4102 12.8945V18.7539C86.4102 19.1602 86.418 19.6523 86.4336 20.2305C86.457 20.668 86.5234 20.9648 86.6328 21.1211C86.7422 21.2773 86.9062 21.4062 87.125 21.5078V22H83.4922C83.3906 21.7422 83.3203 21.5 83.2812 21.2734C83.2422 21.0469 83.2109 20.7891 83.1875 20.5C82.7266 21 82.1953 21.4258 81.5938 21.7773C80.875 22.1914 80.0625 22.3984 79.1562 22.3984C78 22.3984 77.043 22.0703 76.2852 21.4141C75.5352 20.75 75.1602 19.8125 75.1602 18.6016C75.1602 17.0312 75.7656 15.8945 76.9766 15.1914C77.6406 14.8086 78.6172 14.5352 79.9062 14.3711L81.043 14.2305C81.6602 14.1523 82.1016 14.0547 82.3672 13.9375C82.8438 13.7344 83.082 13.418 83.082 12.9883C83.082 12.4648 82.8984 12.1055 82.5312 11.9102C82.1719 11.707 81.6406 11.6055 80.9375 11.6055C80.1484 11.6055 79.5898 11.8008 79.2617 12.1914C79.0273 12.4805 78.8711 12.8711 78.793 13.3633H75.5703C75.6406 12.2461 75.9531 11.3281 76.5078 10.6094ZM78.9922 19.5859C79.3047 19.8438 79.6875 19.9727 80.1406 19.9727C80.8594 19.9727 81.5195 19.7617 82.1211 19.3398C82.7305 18.918 83.0469 18.1484 83.0703 17.0312V15.7891C82.8594 15.9219 82.6445 16.0312 82.4258 16.1172C82.2148 16.1953 81.9219 16.2695 81.5469 16.3398L80.7969 16.4805C80.0938 16.6055 79.5898 16.7578 79.2852 16.9375C78.7695 17.2422 78.5117 17.7148 78.5117 18.3555C78.5117 18.9258 78.6719 19.3359 78.9922 19.5859ZM95.8086 12.3086C94.4648 12.3086 93.5625 12.7461 93.1016 13.6211C92.8438 14.1133 92.7148 14.8711 92.7148 15.8945V22H89.3516V9.22656H92.5391V11.4531C93.0547 10.6016 93.5039 10.0195 93.8867 9.70703C94.5117 9.18359 95.3242 8.92188 96.3242 8.92188C96.3867 8.92188 96.4375 8.92578 96.4766 8.93359C96.5234 8.93359 96.6211 8.9375 96.7695 8.94531V12.3672C96.5586 12.3438 96.3711 12.3281 96.207 12.3203C96.043 12.3125 95.9102 12.3086 95.8086 12.3086ZM109.391 10.8438C110.469 12.1953 111.008 13.793 111.008 15.6367C111.008 17.5117 110.469 19.1172 109.391 20.4531C108.312 21.7812 106.676 22.4453 104.48 22.4453C102.285 22.4453 100.648 21.7812 99.5703 20.4531C98.4922 19.1172 97.9531 17.5117 97.9531 15.6367C97.9531 13.793 98.4922 12.1953 99.5703 10.8438C100.648 9.49219 102.285 8.81641 104.48 8.81641C106.676 8.81641 108.312 9.49219 109.391 10.8438ZM104.469 11.6406C103.492 11.6406 102.738 11.9883 102.207 12.6836C101.684 13.3711 101.422 14.3555 101.422 15.6367C101.422 16.918 101.684 17.9062 102.207 18.6016C102.738 19.2969 103.492 19.6445 104.469 19.6445C105.445 19.6445 106.195 19.2969 106.719 18.6016C107.242 17.9062 107.504 16.918 107.504 15.6367C107.504 14.3555 107.242 13.3711 106.719 12.6836C106.195 11.9883 105.445 11.6406 104.469 11.6406ZM119.422 11.6992C118.289 11.6992 117.512 12.1797 117.09 13.1406C116.871 13.6484 116.762 14.2969 116.762 15.0859V22H113.434V9.25H116.656V11.1133C117.086 10.457 117.492 9.98438 117.875 9.69531C118.562 9.17969 119.434 8.92188 120.488 8.92188C121.809 8.92188 122.887 9.26953 123.723 9.96484C124.566 10.6523 124.988 11.7969 124.988 13.3984V22H121.566V14.2305C121.566 13.5586 121.477 13.043 121.297 12.6836C120.969 12.0273 120.344 11.6992 119.422 11.6992Z"
                  fill="#6466E9"
                /> */}
            </svg>
          </div>
          <div className="hidden justify-end md:block">
            <button
              onClick={() => handleSidebarShow(!sidebarOpen)}
              className="flex h-6 w-6 items-center justify-center rounded-full border"
            >
              {sidebarOpen && (
                <div className="h-3 w-3 rounded-full bg-black-600 dark:bg-white" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          <nav className="flex-1 space-y-1 px-2 py-4">
            {navigation.map((item, index) => (
              <a
                key={item?.name}
                onClick={(e) => changePage(e, item?.href, index)}
                className={classNames(
                  pageNum === index
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-600 hover:bg-gray-700 hover:text-white dark:text-gray-300',
                  'group flex cursor-pointer items-center rounded-md px-2 py-2 pl-3 text-sm font-medium'
                )}
              >
                <item.icon
                  className={classNames(
                    pageNum === index
                      ? 'text-gray-300'
                      : 'text-gray-400 group-hover:text-gray-300',
                    'h-6 w-6 flex-shrink-0'
                  )}
                  aria-hidden="true"
                />
                {showText && (
                  <span className="ml-3 whitespace-nowrap">{item.name}</span>
                )}
              </a>
            ))}
          </nav>
          <div className="px-2 py-2">
            <a
              style={{ cursor: 'pointer' }}
              key={'Settings'}
              onClick={(e) => changePage(e, '/dashboard/settings', 6)}
              className={classNames(
                pageNum === 6
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'group flex items-center rounded-md px-2 py-2 pl-3 text-sm font-medium'
              )}
            >
              <Cog6ToothIcon
                className={classNames(
                  pageNum === 6
                    ? 'text-gray-300'
                    : 'text-gray-400 group-hover:text-gray-300',
                  'mr-3 h-6 w-6 flex-shrink-0'
                )}
                aria-hidden="true"
              />
              {showText && (
                <span className="ml-3 whitespace-nowrap">Settings</span>
              )}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
