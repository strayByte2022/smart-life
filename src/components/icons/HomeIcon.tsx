import React from 'react'
import CustomIcon from './CustomIcon'

const HomeIcon = ({ isChosen }) => {
    return (
        <CustomIcon svg={<svg width="75" height="44" viewBox="0 0 75 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.4591 32.92H25.4191V35.86H29.0891V32.92H30.0491V40H29.0891V36.76H25.4191V40H24.4591V32.92ZM32.5312 37.63C32.5312 37.87 32.5678 38.0933 32.6412 38.3C32.7145 38.5 32.8178 38.6733 32.9512 38.82C33.0845 38.96 33.2478 39.0733 33.4412 39.16C33.6345 39.24 33.8512 39.28 34.0912 39.28C34.3312 39.28 34.5478 39.24 34.7412 39.16C34.9345 39.0733 35.0978 38.96 35.2312 38.82C35.3645 38.6733 35.4678 38.5 35.5412 38.3C35.6145 38.0933 35.6512 37.87 35.6512 37.63C35.6512 37.39 35.6145 37.17 35.5412 36.97C35.4678 36.7633 35.3645 36.59 35.2312 36.45C35.0978 36.3033 34.9345 36.19 34.7412 36.11C34.5478 36.0233 34.3312 35.98 34.0912 35.98C33.8512 35.98 33.6345 36.0233 33.4412 36.11C33.2478 36.19 33.0845 36.3033 32.9512 36.45C32.8178 36.59 32.7145 36.7633 32.6412 36.97C32.5678 37.17 32.5312 37.39 32.5312 37.63ZM31.5712 37.63C31.5712 37.2833 31.6345 36.96 31.7612 36.66C31.8945 36.36 32.0745 36.0967 32.3012 35.87C32.5278 35.6433 32.7945 35.4667 33.1012 35.34C33.4078 35.2067 33.7378 35.14 34.0912 35.14C34.4445 35.14 34.7745 35.2067 35.0812 35.34C35.3878 35.4667 35.6545 35.6433 35.8812 35.87C36.1078 36.0967 36.2845 36.36 36.4112 36.66C36.5445 36.96 36.6112 37.2833 36.6112 37.63C36.6112 37.9767 36.5445 38.3033 36.4112 38.61C36.2845 38.91 36.1078 39.1733 35.8812 39.4C35.6545 39.62 35.3878 39.7967 35.0812 39.93C34.7745 40.0567 34.4445 40.12 34.0912 40.12C33.7378 40.12 33.4078 40.0567 33.1012 39.93C32.7945 39.7967 32.5278 39.62 32.3012 39.4C32.0745 39.1733 31.8945 38.91 31.7612 38.61C31.6345 38.3033 31.5712 37.9767 31.5712 37.63ZM37.8987 35.26H38.7387V36H38.7587C38.7787 35.9333 38.8287 35.85 38.9087 35.75C38.9953 35.65 39.102 35.5567 39.2287 35.47C39.362 35.3767 39.5153 35.3 39.6887 35.24C39.8687 35.1733 40.0653 35.14 40.2787 35.14C40.632 35.14 40.9287 35.2133 41.1687 35.36C41.4087 35.5067 41.6053 35.7267 41.7587 36.02C41.912 35.7267 42.1287 35.5067 42.4087 35.36C42.6887 35.2133 42.972 35.14 43.2587 35.14C43.6253 35.14 43.9253 35.2 44.1587 35.32C44.392 35.44 44.5753 35.6 44.7087 35.8C44.842 35.9933 44.932 36.2167 44.9787 36.47C45.032 36.7167 45.0587 36.9733 45.0587 37.24V40H44.1587V37.36C44.1587 37.18 44.1453 37.0067 44.1187 36.84C44.0987 36.6733 44.052 36.5267 43.9787 36.4C43.9053 36.2733 43.802 36.1733 43.6687 36.1C43.5353 36.02 43.3587 35.98 43.1387 35.98C42.7053 35.98 42.3953 36.1133 42.2087 36.38C42.022 36.6467 41.9287 36.99 41.9287 37.41V40H41.0287V37.52C41.0287 37.2933 41.0153 37.0867 40.9887 36.9C40.9687 36.7133 40.922 36.5533 40.8487 36.42C40.782 36.28 40.682 36.1733 40.5487 36.1C40.422 36.02 40.2487 35.98 40.0287 35.98C39.8687 35.98 39.712 36.0133 39.5587 36.08C39.412 36.14 39.282 36.2333 39.1687 36.36C39.0553 36.4867 38.9653 36.65 38.8987 36.85C38.832 37.0433 38.7987 37.2733 38.7987 37.54V40H37.8987V35.26ZM47.2543 37.96C47.2543 38.1667 47.2976 38.3567 47.3843 38.53C47.4776 38.6967 47.5976 38.84 47.7443 38.96C47.891 39.08 48.061 39.1733 48.2543 39.24C48.4476 39.3067 48.6476 39.34 48.8543 39.34C49.1343 39.34 49.3776 39.2767 49.5843 39.15C49.791 39.0167 49.981 38.8433 50.1543 38.63L50.8343 39.15C50.3343 39.7967 49.6343 40.12 48.7343 40.12C48.361 40.12 48.021 40.0567 47.7143 39.93C47.4143 39.8033 47.1576 39.63 46.9443 39.41C46.7376 39.1833 46.5776 38.92 46.4643 38.62C46.351 38.3133 46.2943 37.9833 46.2943 37.63C46.2943 37.2767 46.3543 36.95 46.4743 36.65C46.601 36.3433 46.771 36.08 46.9843 35.86C47.2043 35.6333 47.4643 35.4567 47.7643 35.33C48.0643 35.2033 48.391 35.14 48.7443 35.14C49.1643 35.14 49.5176 35.2133 49.8043 35.36C50.0976 35.5067 50.3376 35.7 50.5243 35.94C50.711 36.1733 50.8443 36.44 50.9243 36.74C51.011 37.0333 51.0543 37.3333 51.0543 37.64V37.96H47.2543ZM50.0943 37.24C50.0876 37.04 50.0543 36.8567 49.9943 36.69C49.941 36.5233 49.8576 36.38 49.7443 36.26C49.631 36.1333 49.4876 36.0367 49.3143 35.97C49.1476 35.8967 48.951 35.86 48.7243 35.86C48.5043 35.86 48.301 35.9033 48.1143 35.99C47.9343 36.07 47.781 36.1767 47.6543 36.31C47.5276 36.4433 47.4276 36.5933 47.3543 36.76C47.2876 36.92 47.2543 37.08 47.2543 37.24H50.0943Z" fill={isChosen === 'home' ? "#EF3024" : "#ACB1C0"} />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M36.9475 2.54617L27.895 8.14867C26.7169 8.87776 26 10.1645 26 11.55V22C26 24.2091 27.7909 26 30 26H46C48.2091 26 50 24.2091 50 22V11.55C50 10.1645 49.2831 8.87776 48.105 8.14867L39.0525 2.54617C38.4076 2.14704 37.5924 2.14704 36.9475 2.54617ZM27.5 11.55C27.5 10.6841 27.9481 9.87984 28.6844 9.42415L37.7369 3.82166C37.8981 3.72188 38.1019 3.72188 38.2631 3.82166L47.3156 9.42415C48.0519 9.87984 48.5 10.6841 48.5 11.55V22C48.5 23.3807 47.3807 24.5 46 24.5H30C28.6193 24.5 27.5 23.3807 27.5 22V11.55ZM40.4289 17.7413C39.0735 16.4012 36.873 16.4012 35.5176 17.7413C35.2231 18.0326 34.7482 18.0299 34.457 17.7353C34.1657 17.4408 34.1684 16.9659 34.463 16.6747C36.4027 14.7567 39.5438 14.7567 41.4835 16.6747C41.7781 16.9659 41.7808 17.4408 41.4895 17.7353C41.1983 18.0299 40.7234 18.0326 40.4289 17.7413ZM33.7274 14.9458C36.0711 12.6279 39.8744 12.6279 42.2181 14.9458C42.5126 15.2371 42.9874 15.2344 43.2787 14.9399C43.57 14.6454 43.5674 14.1706 43.2728 13.8793C40.3447 10.9834 35.6007 10.9834 32.6726 13.8793C32.3781 14.1706 32.3755 14.6454 32.6667 14.9399C32.958 15.2344 33.4329 15.2371 33.7274 14.9458ZM38 21C38.5523 21 39 20.5523 39 20C39 19.4477 38.5523 19 38 19C37.4477 19 37 19.4477 37 20C37 20.5523 37.4477 21 38 21Z" fill={isChosen === 'home' ? "#EF3024" : "#ACB1C0"} />
        </svg>


        } />
    )
}

export default HomeIcon