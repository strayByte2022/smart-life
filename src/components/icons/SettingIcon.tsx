import React from 'react'
import CustomIcon from './CustomIcon'

const SettingIcon = ({ isChosen }) => {
    return (
        <CustomIcon svg={<svg width="75" height="49" viewBox="0 0 75 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.8461 43.52C22.0194 43.78 22.2394 43.9733 22.5061 44.1C22.7794 44.22 23.0594 44.28 23.3461 44.28C23.5061 44.28 23.6694 44.2567 23.8361 44.21C24.0027 44.1567 24.1527 44.08 24.2861 43.98C24.4261 43.88 24.5394 43.7567 24.6261 43.61C24.7127 43.4633 24.7561 43.2933 24.7561 43.1C24.7561 42.8267 24.6694 42.62 24.4961 42.48C24.3227 42.3333 24.1061 42.2133 23.8461 42.12C23.5927 42.02 23.3127 41.9267 23.0061 41.84C22.7061 41.7467 22.4261 41.62 22.1661 41.46C21.9127 41.3 21.6994 41.0867 21.5261 40.82C21.3527 40.5467 21.2661 40.18 21.2661 39.72C21.2661 39.5133 21.3094 39.2933 21.3961 39.06C21.4894 38.8267 21.6327 38.6133 21.8261 38.42C22.0194 38.2267 22.2661 38.0667 22.5661 37.94C22.8727 37.8067 23.2394 37.74 23.6661 37.74C24.0527 37.74 24.4227 37.7933 24.7761 37.9C25.1294 38.0067 25.4394 38.2233 25.7061 38.55L24.9261 39.26C24.8061 39.0733 24.6361 38.9233 24.4161 38.81C24.1961 38.6967 23.9461 38.64 23.6661 38.64C23.3994 38.64 23.1761 38.6767 22.9961 38.75C22.8227 38.8167 22.6827 38.9067 22.5761 39.02C22.4694 39.1267 22.3927 39.2433 22.3461 39.37C22.3061 39.4967 22.2861 39.6133 22.2861 39.72C22.2861 40.02 22.3727 40.25 22.5461 40.41C22.7194 40.57 22.9327 40.7 23.1861 40.8C23.4461 40.9 23.7261 40.99 24.0261 41.07C24.3327 41.15 24.6127 41.2633 24.8661 41.41C25.1261 41.55 25.3427 41.7433 25.5161 41.99C25.6894 42.23 25.7761 42.5633 25.7761 42.99C25.7761 43.33 25.7094 43.6367 25.5761 43.91C25.4494 44.1833 25.2761 44.4133 25.0561 44.6C24.8361 44.7867 24.5761 44.93 24.2761 45.03C23.9761 45.13 23.6561 45.18 23.3161 45.18C22.8627 45.18 22.4327 45.1 22.0261 44.94C21.6194 44.78 21.2961 44.5333 21.0561 44.2L21.8461 43.52ZM27.8027 42.96C27.8027 43.1667 27.846 43.3567 27.9327 43.53C28.026 43.6967 28.146 43.84 28.2927 43.96C28.4394 44.08 28.6094 44.1733 28.8027 44.24C28.996 44.3067 29.196 44.34 29.4027 44.34C29.6827 44.34 29.926 44.2767 30.1327 44.15C30.3394 44.0167 30.5294 43.8433 30.7027 43.63L31.3827 44.15C30.8827 44.7967 30.1827 45.12 29.2827 45.12C28.9094 45.12 28.5694 45.0567 28.2627 44.93C27.9627 44.8033 27.706 44.63 27.4927 44.41C27.286 44.1833 27.126 43.92 27.0127 43.62C26.8994 43.3133 26.8427 42.9833 26.8427 42.63C26.8427 42.2767 26.9027 41.95 27.0227 41.65C27.1494 41.3433 27.3194 41.08 27.5327 40.86C27.7527 40.6333 28.0127 40.4567 28.3127 40.33C28.6127 40.2033 28.9394 40.14 29.2927 40.14C29.7127 40.14 30.066 40.2133 30.3527 40.36C30.646 40.5067 30.886 40.7 31.0727 40.94C31.2594 41.1733 31.3927 41.44 31.4727 41.74C31.5594 42.0333 31.6027 42.3333 31.6027 42.64V42.96H27.8027ZM30.6427 42.24C30.636 42.04 30.6027 41.8567 30.5427 41.69C30.4894 41.5233 30.406 41.38 30.2927 41.26C30.1794 41.1333 30.036 41.0367 29.8627 40.97C29.696 40.8967 29.4994 40.86 29.2727 40.86C29.0527 40.86 28.8494 40.9033 28.6627 40.99C28.4827 41.07 28.3294 41.1767 28.2027 41.31C28.076 41.4433 27.976 41.5933 27.9027 41.76C27.836 41.92 27.8027 42.08 27.8027 42.24H30.6427ZM35.3793 41.04H34.0893V43.19C34.0893 43.3233 34.0927 43.4567 34.0993 43.59C34.106 43.7167 34.1293 43.8333 34.1693 43.94C34.216 44.04 34.2827 44.1233 34.3693 44.19C34.4627 44.25 34.596 44.28 34.7693 44.28C34.876 44.28 34.986 44.27 35.0993 44.25C35.2127 44.23 35.316 44.1933 35.4093 44.14V44.96C35.3027 45.02 35.1627 45.06 34.9893 45.08C34.8227 45.1067 34.6927 45.12 34.5993 45.12C34.2527 45.12 33.9827 45.0733 33.7893 44.98C33.6027 44.88 33.4627 44.7533 33.3693 44.6C33.2827 44.4467 33.2293 44.2767 33.2093 44.09C33.196 43.8967 33.1893 43.7033 33.1893 43.51V41.04H32.1493V40.26H33.1893V38.93H34.0893V40.26H35.3793V41.04ZM39.2405 41.04H37.9505V43.19C37.9505 43.3233 37.9538 43.4567 37.9605 43.59C37.9672 43.7167 37.9905 43.8333 38.0305 43.94C38.0772 44.04 38.1438 44.1233 38.2305 44.19C38.3238 44.25 38.4572 44.28 38.6305 44.28C38.7372 44.28 38.8472 44.27 38.9605 44.25C39.0738 44.23 39.1772 44.1933 39.2705 44.14V44.96C39.1638 45.02 39.0238 45.06 38.8505 45.08C38.6838 45.1067 38.5538 45.12 38.4605 45.12C38.1138 45.12 37.8438 45.0733 37.6505 44.98C37.4638 44.88 37.3238 44.7533 37.2305 44.6C37.1438 44.4467 37.0905 44.2767 37.0705 44.09C37.0572 43.8967 37.0505 43.7033 37.0505 43.51V41.04H36.0105V40.26H37.0505V38.93H37.9505V40.26H39.2405V41.04ZM40.6317 40.26H41.5317V45H40.6317V40.26ZM40.4217 38.56C40.4217 38.38 40.485 38.2267 40.6117 38.1C40.745 37.9667 40.9017 37.9 41.0817 37.9C41.2617 37.9 41.415 37.9667 41.5417 38.1C41.675 38.2267 41.7417 38.38 41.7417 38.56C41.7417 38.74 41.675 38.8967 41.5417 39.03C41.415 39.1567 41.2617 39.22 41.0817 39.22C40.9017 39.22 40.745 39.1567 40.6117 39.03C40.485 38.8967 40.4217 38.74 40.4217 38.56ZM43.124 40.26H44.024V40.99H44.044C44.1574 40.7367 44.354 40.5333 44.634 40.38C44.914 40.22 45.2374 40.14 45.604 40.14C45.8307 40.14 46.0474 40.1767 46.254 40.25C46.4674 40.3167 46.6507 40.4233 46.804 40.57C46.964 40.7167 47.0907 40.9067 47.184 41.14C47.2774 41.3667 47.324 41.6367 47.324 41.95V45H46.424V42.2C46.424 41.98 46.394 41.7933 46.334 41.64C46.274 41.48 46.194 41.3533 46.094 41.26C45.994 41.16 45.8774 41.09 45.744 41.05C45.6174 41.0033 45.484 40.98 45.344 40.98C45.1574 40.98 44.984 41.01 44.824 41.07C44.664 41.13 44.524 41.2267 44.404 41.36C44.284 41.4867 44.1907 41.65 44.124 41.85C44.0574 42.05 44.024 42.2867 44.024 42.56V45H43.124V40.26ZM53.5907 44.96C53.5907 45.32 53.5273 45.6467 53.4007 45.94C53.2807 46.24 53.1073 46.4967 52.8807 46.71C52.654 46.93 52.3807 47.1 52.0607 47.22C51.7407 47.34 51.3873 47.4 51.0007 47.4C50.5473 47.4 50.1307 47.3367 49.7507 47.21C49.3773 47.0833 49.0207 46.8633 48.6807 46.55L49.2907 45.79C49.524 46.0433 49.7773 46.2333 50.0507 46.36C50.324 46.4933 50.634 46.56 50.9807 46.56C51.314 46.56 51.5907 46.51 51.8107 46.41C52.0307 46.3167 52.204 46.1933 52.3307 46.04C52.464 45.8867 52.5573 45.71 52.6107 45.51C52.664 45.3167 52.6907 45.12 52.6907 44.92V44.22H52.6607C52.4873 44.5067 52.2507 44.72 51.9507 44.86C51.6573 44.9933 51.3473 45.06 51.0207 45.06C50.674 45.06 50.3507 45 50.0507 44.88C49.7573 44.7533 49.504 44.5833 49.2907 44.37C49.0773 44.15 48.9107 43.8933 48.7907 43.6C48.6707 43.3 48.6107 42.9767 48.6107 42.63C48.6107 42.2833 48.6673 41.96 48.7807 41.66C48.894 41.3533 49.054 41.0867 49.2607 40.86C49.474 40.6333 49.7273 40.4567 50.0207 40.33C50.3207 40.2033 50.654 40.14 51.0207 40.14C51.3407 40.14 51.6507 40.21 51.9507 40.35C52.2573 40.49 52.4973 40.6867 52.6707 40.94H52.6907V40.26H53.5907V44.96ZM51.1307 40.98C50.8907 40.98 50.674 41.0233 50.4807 41.11C50.2873 41.19 50.124 41.3033 49.9907 41.45C49.8573 41.59 49.754 41.7633 49.6807 41.97C49.6073 42.17 49.5707 42.39 49.5707 42.63C49.5707 43.11 49.7107 43.4967 49.9907 43.79C50.2707 44.0767 50.6507 44.22 51.1307 44.22C51.6107 44.22 51.9907 44.0767 52.2707 43.79C52.5507 43.4967 52.6907 43.11 52.6907 42.63C52.6907 42.39 52.654 42.17 52.5807 41.97C52.5073 41.7633 52.404 41.59 52.2707 41.45C52.1373 41.3033 51.974 41.19 51.7807 41.11C51.5873 41.0233 51.3707 40.98 51.1307 40.98Z" fill={isChosen === 'setting' ? "#EF3024" : "#ACB1C0"} />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M41.0525 11.2717C41.3209 12.162 42.2338 12.6916 43.1398 12.4825L45.757 11.8762C46.7752 11.6468 47.8241 12.1073 48.3443 13.0122C48.8645 13.9171 48.7346 15.0553 48.0238 15.8197L46.1908 17.795C45.5561 18.4774 45.5561 19.5341 46.1908 20.2166L48.0238 22.1919C48.7362 22.956 48.8671 24.0954 48.3466 25.0012C47.8262 25.907 46.7759 26.3677 45.757 26.1371L43.1398 25.529C42.2339 25.3209 41.3216 25.8501 41.0525 26.7398L40.2667 29.3143C39.9668 30.3148 39.046 31 38.0016 31C36.9571 31 36.0364 30.3148 35.7365 29.3143L34.9506 26.7309C34.6816 25.8412 33.7693 25.312 32.8633 25.5202L30.2462 26.1282C29.2273 26.3588 28.177 25.8982 27.6565 24.9923C27.1361 24.0865 27.267 22.9471 27.9793 22.183L29.8124 20.2077C30.447 19.5252 30.447 18.4686 29.8124 17.7861L27.9793 15.8108C27.2686 15.0464 27.1387 13.9082 27.6589 13.0033C28.179 12.0984 29.228 11.6379 30.2462 11.8674L32.8633 12.4736C33.7694 12.6827 34.6823 12.1532 34.9506 11.2629L35.7365 8.68129C36.0383 7.68139 36.9604 6.99796 38.0049 7C39.0494 7.00205 39.9688 7.6891 40.2667 8.69018L41.0525 11.2717ZM38.8317 9.127L38.829 9.11803C38.7201 8.75198 38.3839 8.50075 38.002 8.5C37.62 8.49925 37.2829 8.74916 37.1715 9.11811L36.3868 11.6958C35.8905 13.3425 34.202 14.3219 32.5248 13.9349L29.9164 13.3307C29.5398 13.2458 29.1517 13.4161 28.9593 13.7509C28.7669 14.0856 28.815 14.5067 29.0788 14.7905L30.9108 16.7646C32.0809 18.0228 32.0809 19.971 30.9119 21.228L29.0765 23.2058C28.813 23.4885 28.7646 23.9099 28.9571 24.245C29.1497 24.5801 29.5382 24.7505 29.9068 24.6671L32.5275 24.0582C34.2023 23.6735 35.8889 24.6518 36.3857 26.2944L37.1733 28.8836C37.283 29.2494 37.6197 29.5 38.0016 29.5C38.3835 29.5 38.7202 29.2494 38.832 28.8764L39.6168 26.3056C40.1143 24.6607 41.8009 23.6824 43.4793 24.068L46.0881 24.6741C46.465 24.7594 46.8535 24.589 47.046 24.2539C47.2386 23.9188 47.1901 23.4974 46.9243 23.2122L45.0924 21.2381C43.9223 19.9799 43.9223 18.0317 45.0913 16.7747L46.9253 14.7983C47.1882 14.5156 47.2363 14.0945 47.0439 13.7598C46.8514 13.425 46.4634 13.2547 46.0955 13.3376L43.4771 13.9441C41.8012 14.3308 40.1127 13.3513 39.6175 11.7086L38.8317 9.127ZM38 21.75C39.5188 21.75 40.75 20.5188 40.75 19C40.75 17.4812 39.5188 16.25 38 16.25C36.4812 16.25 35.25 17.4812 35.25 19C35.25 20.5188 36.4812 21.75 38 21.75ZM38 20.25C37.3097 20.25 36.75 19.6904 36.75 19C36.75 18.3096 37.3097 17.75 38 17.75C38.6904 17.75 39.25 18.3096 39.25 19C39.25 19.6904 38.6904 20.25 38 20.25Z" fill={isChosen === 'setting' ? "#EF3024" : "#ACB1C0"} />
        </svg>


        } />
    )
}

export default SettingIcon