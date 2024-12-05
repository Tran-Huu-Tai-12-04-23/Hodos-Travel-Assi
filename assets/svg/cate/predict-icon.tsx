import { normalize } from "@helper/helpers";
import { deviceWidth } from "@helper/utils";
import * as React from "react";
import Svg, {
  Circle,
  ClipPath,
  Defs,
  G,
  LinearGradient,
  Path,
  Rect,
  Stop,
} from "react-native-svg";
const PredictIcon = (props: any) => (
  <Svg
    width={deviceWidth / 2 - normalize(20)}
    height={deviceWidth / 1.5}
    viewBox="0 0 165 228"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_57_1893)">
      <Rect width={165} height={232} rx={18} fill="#F7BB36" />
      <Path
        d="M164.416 210.725C157.549 203.692 128.494 173.858 124.321 168.167L100.681 185.059C100.681 185.059 118.061 190.171 129.366 196.986C139.06 202.786 156.677 212.356 161.59 215.002C162.383 215.437 163.307 215.22 163.941 214.459L164.469 213.842C165.209 213.009 165.156 211.486 164.416 210.725Z"
        fill="url(#paint0_linear_57_1893)"
      />
      <Path
        d="M124.321 168.167C128.495 173.894 157.549 203.728 164.417 210.725C164.892 211.196 165.077 211.994 164.971 212.719C161.643 209.456 126.223 174.221 124.321 168.167Z"
        fill="#EAEEEF"
      />
      <Path
        d="M151.58 201.662C151.58 201.662 144.844 202.786 143.656 205.178C142.467 207.571 141.252 209.528 141.912 210.29C142.573 211.015 153.666 202.423 151.58 201.662Z"
        fill="#EAEEEF"
      />
      <Path
        d="M143.656 205.142C144.844 202.75 151.58 201.626 151.58 201.626C151.58 201.626 144.21 207.644 143.55 207.825C143.55 207.861 144.448 205.614 143.656 205.142Z"
        fill="#7895AD"
      />
      <Path
        d="M138.347 194.304C138.347 194.304 131.611 195.427 130.423 197.82C129.234 200.212 128.019 202.17 128.679 202.931C129.34 203.656 140.433 195.065 138.347 194.304Z"
        fill="#EAEEEF"
      />
      <Path
        d="M130.423 197.82C131.611 195.427 138.347 194.304 138.347 194.304C138.347 194.304 130.977 200.321 130.317 200.502C130.343 200.502 131.241 198.255 130.423 197.82Z"
        fill="#7895AD"
      />
      <Path
        d="M125.14 187.38C125.14 187.38 118.405 188.503 117.216 190.896C116.027 193.288 114.812 195.246 115.473 196.007C116.107 196.732 127.227 188.105 125.14 187.38Z"
        fill="#EAEEEF"
      />
      <Path
        d="M117.216 190.86C118.404 188.467 125.14 187.343 125.14 187.343C125.14 187.343 117.771 193.361 117.11 193.542C117.11 193.542 118.008 191.331 117.216 190.86Z"
        fill="#7895AD"
      />
      <Path
        d="M74.0569 202.097L65.948 193.288L53.032 194.34L70.3855 203.91C70.6496 204.055 70.9137 204.127 71.1778 204.127C71.8118 204.127 73.0268 204.055 73.872 203.656C74.3738 203.438 74.4795 202.532 74.0569 202.097Z"
        fill="#EAEEEF"
      />
      <Path
        d="M70.3855 203.91L53.032 194.34L65.4198 193.325L73.4758 202.097C73.872 202.532 73.7663 203.438 73.2909 203.656C72.6042 203.982 71.6797 204.091 71.0194 204.091C70.7817 204.091 70.5703 204.018 70.3855 203.91Z"
        fill="#7895AD"
      />
      <Path
        d="M65.3141 172.155L56.7298 139.964L50.9189 143.517L49.0435 185.749L65.3141 172.155Z"
        fill="#7895AD"
      />
      <Path
        d="M39.9046 192.527C41.1988 193.905 62.3558 198.545 77.0943 194.303C91.8329 190.062 93.4705 188.395 93.4705 188.395C93.4705 188.395 97.0627 189.845 103.059 187.633C109.028 185.422 123.872 176.541 125.51 174.547C127.147 172.553 129.947 168.167 129.947 168.167C129.947 168.167 156.387 156.023 161.22 145.438C166.054 134.853 158.13 132.714 158.13 132.714C158.13 132.714 158.526 127.349 149.942 126.37C141.358 125.391 130.581 132.714 124.348 136.121C118.061 139.493 90.3538 154.464 90.3538 154.464C90.3538 154.464 33.4069 185.531 39.9046 192.527Z"
        fill="url(#paint1_linear_57_1893)"
      />
      <Path
        d="M39.9044 192.528C39.6667 192.274 39.5346 191.984 39.4554 191.694C41.5684 193.289 43.1004 192.528 43.1004 192.528C42.6778 189.881 43.9192 187.018 43.9192 187.018C45.187 183.719 49.598 184.009 50.0471 184.045C49.7829 184.045 48.251 184.19 47.3001 189.229C46.27 194.739 59.3445 193.035 72.9473 187.018C86.5501 181 85.7049 174.402 85.7049 174.402C87.3425 165.92 105.383 157.437 105.383 157.437L107.232 161.171C103.322 165.014 103.719 169.472 103.719 169.472C114.733 165.666 116.476 158.996 116.476 158.996C117.612 160.845 116.978 164.506 116.978 164.506C116.978 164.506 150.549 146.562 156.519 143.3C162.488 140.037 160.798 134.346 160.798 134.346C162.514 136.049 163.941 139.348 161.167 145.402C156.334 155.987 129.868 168.167 129.868 168.167C129.868 168.167 127.121 172.554 125.483 174.547C123.846 176.541 109.001 185.423 103.032 187.634C97.0625 189.845 93.4439 188.395 93.4439 188.395C93.4439 188.395 91.8063 190.099 77.0678 194.304C62.3556 198.545 41.1987 193.941 39.9044 192.528Z"
        fill="url(#paint2_linear_57_1893)"
      />
      <Path
        d="M153.402 127.095C158.394 128.908 158.13 132.678 158.13 132.678L156.704 132.098C156.704 128.727 153.402 127.095 153.402 127.095Z"
        fill="url(#paint3_linear_57_1893)"
      />
      <Path
        d="M131.981 137.39L132.377 137.173C132.615 137.028 132.8 136.702 132.8 136.339L132.826 134.817C132.826 134.164 132.351 133.693 131.902 133.947L131.453 134.2C131.189 134.345 131.03 134.672 131.03 135.07V136.557C131.057 137.173 131.558 137.644 131.981 137.39Z"
        fill="#001B4B"
      />
      <Path
        d="M128.785 139.166L129.181 138.949C129.419 138.804 129.604 138.478 129.604 138.115L129.63 136.593C129.63 135.94 129.155 135.469 128.706 135.723L128.257 135.976C127.993 136.121 127.834 136.448 127.834 136.846V138.333C127.861 138.985 128.336 139.42 128.785 139.166Z"
        fill="#001B4B"
      />
      <Path
        d="M125.563 140.979L125.959 140.761C126.196 140.616 126.381 140.29 126.381 139.928L126.408 138.405C126.408 137.753 125.932 137.281 125.483 137.535L125.034 137.789C124.77 137.934 124.612 138.26 124.612 138.659V140.109C124.638 140.761 125.114 141.196 125.563 140.979Z"
        fill="#001B4B"
      />
      <Path
        d="M122.34 142.755L122.736 142.537C122.974 142.392 123.159 142.066 123.159 141.704L123.186 140.181C123.186 139.529 122.71 139.057 122.261 139.311L121.812 139.565C121.548 139.71 121.389 140.036 121.389 140.435V141.921C121.416 142.537 121.891 143.009 122.34 142.755Z"
        fill="#001B4B"
      />
      <Path
        d="M119.118 144.532L119.514 144.314C119.752 144.169 119.937 143.843 119.937 143.481L119.963 141.958C119.963 141.306 119.488 140.834 119.039 141.088L118.59 141.342C118.326 141.487 118.167 141.813 118.167 142.212V143.698C118.194 144.351 118.695 144.786 119.118 144.532Z"
        fill="#001B4B"
      />
      <Path
        d="M115.922 146.344L116.318 146.127C116.556 145.982 116.74 145.656 116.74 145.293L116.767 143.771C116.767 143.118 116.291 142.647 115.842 142.901L115.393 143.154C115.129 143.299 114.971 143.626 114.971 144.024V145.511C114.997 146.127 115.473 146.562 115.922 146.344Z"
        fill="#001B4B"
      />
      <Path
        d="M112.699 148.12L113.096 147.903C113.333 147.758 113.518 147.432 113.518 147.069L113.545 145.547C113.545 144.894 113.069 144.423 112.62 144.677L112.171 144.93C111.907 145.075 111.749 145.402 111.749 145.8V147.287C111.775 147.939 112.25 148.374 112.699 148.12Z"
        fill="#001B4B"
      />
      <Path
        d="M109.477 149.933L109.873 149.715C110.111 149.57 110.296 149.244 110.296 148.882L110.322 147.359C110.322 146.707 109.847 146.235 109.398 146.489L108.949 146.743C108.685 146.888 108.526 147.214 108.526 147.613V149.099C108.553 149.715 109.028 150.15 109.477 149.933Z"
        fill="#001B4B"
      />
      <Path
        d="M106.281 151.709L106.677 151.491C106.915 151.346 107.1 151.02 107.1 150.658L107.126 149.135C107.126 148.483 106.651 148.011 106.202 148.265L105.753 148.519C105.489 148.664 105.33 148.99 105.33 149.389V150.875C105.356 151.491 105.832 151.963 106.281 151.709Z"
        fill="#001B4B"
      />
      <Path
        d="M103.059 153.485L103.455 153.268C103.693 153.123 103.878 152.797 103.878 152.434L103.904 150.912C103.904 150.259 103.429 149.788 102.979 150.042L102.53 150.295C102.266 150.44 102.108 150.767 102.108 151.165V152.652C102.134 153.304 102.61 153.739 103.059 153.485Z"
        fill="#001B4B"
      />
      <Path
        d="M99.8361 155.298L100.232 155.081C100.47 154.936 100.655 154.61 100.655 154.247L100.681 152.725C100.681 152.072 100.206 151.601 99.7568 151.855L99.3342 152.072C99.0701 152.217 98.9116 152.543 98.9116 152.942V154.428C98.9116 155.081 99.3871 155.516 99.8361 155.298Z"
        fill="#001B4B"
      />
      <Path
        d="M96.6137 157.074L97.0099 156.856C97.2476 156.711 97.4325 156.385 97.4325 156.023L97.4589 154.5C97.4589 153.848 96.9835 153.376 96.5345 153.63L96.0855 153.884C95.8213 154.029 95.6628 154.355 95.6628 154.754V156.24C95.6893 156.856 96.1911 157.328 96.6137 157.074Z"
        fill="#001B4B"
      />
      <Path
        d="M93.4177 158.851L93.8139 158.633C94.0516 158.488 94.2365 158.162 94.2365 157.799L94.2629 156.277C94.2629 155.624 93.7875 155.153 93.3385 155.407L92.8895 155.661C92.6253 155.806 92.4669 156.132 92.4669 156.531V158.017C92.4933 158.669 92.9687 159.104 93.4177 158.851Z"
        fill="#001B4B"
      />
      <Path
        d="M90.1953 160.663L90.5915 160.445C90.8292 160.3 91.0141 159.974 91.0141 159.612L91.0405 158.089C91.0405 157.437 90.5651 156.965 90.1161 157.219L89.6671 157.473C89.4029 157.618 89.2444 157.944 89.2444 158.343V159.829C89.2709 160.445 89.7463 160.88 90.1953 160.663Z"
        fill="#001B4B"
      />
      <Path
        d="M86.9729 162.439L87.3691 162.222C87.6068 162.077 87.7917 161.75 87.7917 161.388L87.8181 159.865C87.8181 159.213 87.3426 158.742 86.8936 158.995L86.4446 159.249C86.1805 159.394 86.022 159.72 86.022 160.119V161.605C86.0484 162.222 86.5238 162.693 86.9729 162.439Z"
        fill="#001B4B"
      />
      <Path
        d="M83.7506 164.216L84.1468 163.998C84.3845 163.853 84.5694 163.527 84.5694 163.164L84.5958 161.642C84.5958 160.989 84.1204 160.518 83.6714 160.772L83.2224 161.026C82.9582 161.171 82.7997 161.497 82.7997 161.896V163.382C82.8526 164.034 83.328 164.469 83.7506 164.216Z"
        fill="#001B4B"
      />
      <Path
        d="M80.5546 166.028L80.9508 165.81C81.1886 165.665 81.3734 165.339 81.3734 164.977L81.3999 163.454C81.3999 162.802 80.9244 162.33 80.4754 162.584L80.0264 162.838C79.7622 162.983 79.6038 163.309 79.6038 163.708V165.194C79.6302 165.81 80.1056 166.245 80.5546 166.028Z"
        fill="#001B4B"
      />
      <Path
        d="M77.3321 167.805L77.7283 167.587C77.966 167.442 78.1509 167.116 78.1509 166.753L78.1773 165.231C78.1773 164.578 77.7019 164.107 77.2529 164.361L76.8038 164.615C76.5397 164.76 76.3812 165.086 76.3812 165.485V166.971C76.4076 167.623 76.8831 168.058 77.3321 167.805Z"
        fill="#001B4B"
      />
      <Path
        d="M74.1096 169.617L74.5058 169.4C74.7435 169.255 74.9284 168.928 74.9284 168.566L74.9549 167.043C74.9549 166.391 74.4794 165.919 74.0304 166.173L73.5814 166.427C73.3172 166.572 73.1588 166.898 73.1588 167.297V168.783C73.1852 169.4 73.687 169.835 74.1096 169.617Z"
        fill="#001B4B"
      />
      <Path
        d="M70.9139 171.393L71.3101 171.176C71.5478 171.031 71.7327 170.705 71.7327 170.342L71.7591 168.82C71.7591 168.167 71.2837 167.696 70.8346 167.95L70.3856 168.203C70.1215 168.348 69.963 168.675 69.963 169.073V170.56C69.9894 171.176 70.4649 171.647 70.9139 171.393Z"
        fill="#001B4B"
      />
      <Path
        d="M67.6912 173.17L68.0874 172.952C68.3251 172.807 68.51 172.481 68.51 172.118L68.5364 170.596C68.5364 169.943 68.061 169.472 67.6119 169.726L67.1629 169.979C66.8988 170.124 66.7403 170.451 66.7403 170.85V172.336C66.7667 172.988 67.2421 173.423 67.6912 173.17Z"
        fill="#001B4B"
      />
      <Path
        d="M64.4689 174.982L64.8651 174.764C65.1028 174.619 65.2877 174.293 65.2877 173.931L65.3141 172.408C65.3141 171.756 64.8387 171.284 64.3896 171.538L63.9406 171.792C63.6765 171.937 63.518 172.263 63.518 172.662V174.148C63.5444 174.764 64.0199 175.199 64.4689 174.982Z"
        fill="#001B4B"
      />
      <Path
        d="M61.2465 176.759L61.6427 176.541C61.8804 176.396 62.0653 176.07 62.0653 175.708L62.0917 174.185C62.0917 173.532 61.6163 173.061 61.1672 173.315L60.7182 173.569C60.4541 173.714 60.2956 174.04 60.2956 174.439V175.925C60.322 176.541 60.8239 177.013 61.2465 176.759Z"
        fill="#001B4B"
      />
      <Path
        d="M146.588 130.901C144.607 131.155 143.444 131.626 143.444 131.626C144.448 129.524 146.138 128.581 147.987 128.219L146.588 130.901Z"
        fill="#001B4B"
      />
      <Path
        d="M151.659 128.219C154.643 128.654 157.232 129.886 157.258 129.923C158.209 131.373 158.13 132.714 158.13 132.714C155.832 131.699 153.666 131.191 151.738 130.938L151.659 128.219Z"
        fill="#001B4B"
      />
      <Path
        d="M148.965 128.11C149.598 128.074 150.259 128.074 150.919 128.147L150.84 130.865C149.651 130.757 148.568 130.793 147.617 130.829C148.066 129.85 148.595 128.835 148.965 128.11Z"
        fill="#001B4B"
      />
      <Path
        d="M105.357 155.334C105.357 155.334 106.228 158.887 104.802 160.699C103.349 162.512 85.7579 174.366 85.7579 174.366C85.7579 174.366 67.9026 157.219 64.4689 154.718C61.0352 152.18 30.0525 133.076 28.1772 131.626C26.3018 130.14 9.10684 116.727 9.00118 115.024C8.89553 113.32 15.895 114.045 17.5591 115.024C19.1967 116.039 96.2175 154.682 105.357 155.334Z"
        fill="url(#paint4_linear_57_1893)"
      />
      <Path
        d="M91.0405 152.507C81.7431 148.991 17.5326 116.764 16.2383 114.553C16.793 114.698 17.2685 114.879 17.559 115.024C19.1966 116.039 96.2175 154.682 105.356 155.334C105.356 155.334 106.149 158.524 105.013 160.409C103.719 159.322 98.9381 155.516 91.0405 152.507Z"
        fill="#EAEEEF"
      />
      <Path
        d="M16.2383 169.653C16.2383 169.653 20.9135 168.058 22.3926 168.566C23.8718 169.073 51.0245 182.269 51.0245 182.269C51.0245 182.269 50.8925 184.915 42.5723 186.872L16.2383 169.653Z"
        fill="#EAEEEF"
      />
      <Path
        d="M50.7605 182.921C50.1794 183.827 48.3569 185.531 42.5724 186.872L16.8195 170.015C18.2458 169.58 21.0456 168.819 22.1286 169.182C23.6341 169.725 50.6812 182.884 50.7605 182.921Z"
        fill="#7895AD"
      />
      <Path
        d="M128.838 192.527C128.838 190.207 129.525 188.214 130.555 187.017C130.608 186.981 130.66 186.909 130.687 186.872C138.611 177.991 145.214 179.187 145.214 179.187C145.214 179.187 147.591 188.54 147.301 194.811C143.576 200.937 132.351 199.125 132.351 199.125C130.37 198.835 128.838 196.007 128.838 192.527Z"
        fill="url(#paint5_linear_57_1893)"
      />
      <Path
        d="M132.324 199.125C131.585 199.016 130.924 198.545 130.37 197.82C130.396 197.82 130.423 197.82 130.449 197.82C136.603 196.769 142.388 192.382 146.878 187.851C147.195 190.207 147.406 192.672 147.301 194.775C143.55 200.901 132.324 199.125 132.324 199.125Z"
        fill="#7895AD"
      />
      <Path
        d="M145.214 195.645C147.825 195.645 149.942 191.961 149.942 187.416C149.942 182.871 147.825 179.187 145.214 179.187C142.603 179.187 140.486 182.871 140.486 187.416C140.486 191.961 142.603 195.645 145.214 195.645Z"
        fill="#2D364D"
      />
      <Path
        d="M146.191 193.651C148.248 193.651 149.916 190.681 149.916 187.017C149.916 183.353 148.248 180.383 146.191 180.383C144.134 180.383 142.467 183.353 142.467 187.017C142.467 190.681 144.134 193.651 146.191 193.651Z"
        fill="#000A22"
      />
      <Path
        d="M79.7886 158.198C79.7886 158.198 73.0533 159.322 71.8647 161.715C70.6761 164.107 69.4611 166.065 70.1214 166.826C70.7553 167.551 81.8753 158.923 79.7886 158.198Z"
        fill="#EAEEEF"
      />
      <Path
        d="M71.8645 161.678C73.0531 159.286 79.7885 158.162 79.7885 158.162C79.7885 158.162 72.4192 164.18 71.7589 164.361C71.7589 164.361 72.6569 162.113 71.8645 161.678Z"
        fill="#7895AD"
      />
      <Path
        d="M61.986 145.22C61.986 145.22 55.2506 146.344 54.062 148.737C52.8734 151.129 51.6584 153.087 52.3187 153.848C52.9526 154.573 64.0726 145.982 61.986 145.22Z"
        fill="#EAEEEF"
      />
      <Path
        d="M54.062 148.737C55.2505 146.344 61.9859 145.22 61.9859 145.22C61.9859 145.22 54.6166 151.238 53.9563 151.419C53.9563 151.419 54.8543 149.172 54.062 148.737Z"
        fill="#7895AD"
      />
      <Path
        d="M42.3083 132.714C42.3083 132.714 35.573 133.838 34.3844 136.23C33.1958 138.623 31.9808 140.58 32.6411 141.341C33.3014 142.066 44.395 133.439 42.3083 132.714Z"
        fill="#EAEEEF"
      />
      <Path
        d="M34.3844 136.194C35.5729 133.801 42.3083 132.678 42.3083 132.678C42.3083 132.678 34.9654 138.731 34.3051 138.876C34.3051 138.876 35.2032 136.629 34.3844 136.194Z"
        fill="#7895AD"
      />
      <Path
        d="M76.4077 158.996C76.4077 156.676 77.0945 154.682 78.1246 153.486C78.1774 153.413 78.2302 153.377 78.2566 153.341C86.1806 144.459 92.7839 145.656 92.7839 145.656C92.7839 145.656 95.1611 155.008 94.8705 161.28C91.1463 167.406 79.9207 165.593 79.9207 165.593C77.9397 165.303 76.4077 162.476 76.4077 158.996Z"
        fill="url(#paint6_linear_57_1893)"
      />
      <Path
        d="M79.8678 165.593C79.1283 165.485 78.4679 165.013 77.9133 164.288C77.9397 164.288 77.9661 164.288 77.9925 164.288C84.1468 163.237 89.9313 158.851 94.4215 154.319C94.7385 156.676 94.9498 159.141 94.8441 161.243C91.1199 167.37 79.8678 165.593 79.8678 165.593Z"
        fill="#7895AD"
      />
      <Path
        d="M92.7577 162.113C95.3689 162.113 97.4856 158.429 97.4856 153.884C97.4856 149.34 95.3689 145.655 92.7577 145.655C90.1465 145.655 88.0297 149.34 88.0297 153.884C88.0297 158.429 90.1465 162.113 92.7577 162.113Z"
        fill="#2D364D"
      />
      <Path
        d="M93.7614 160.119C95.8182 160.119 97.4856 157.149 97.4856 153.485C97.4856 149.822 95.8182 146.852 93.7614 146.852C91.7045 146.852 90.0371 149.822 90.0371 153.485C90.0371 157.149 91.7045 160.119 93.7614 160.119Z"
        fill="#000A22"
      />
      <Path
        d="M18.1477 76V64.3636H22.5114C23.4053 64.3636 24.1553 64.5303 24.7614 64.8636C25.3712 65.197 25.8314 65.6553 26.142 66.2386C26.4564 66.8182 26.6136 67.4773 26.6136 68.2159C26.6136 68.9621 26.4564 69.625 26.142 70.2045C25.8277 70.7841 25.3636 71.2405 24.75 71.5739C24.1364 71.9034 23.3807 72.0682 22.483 72.0682H19.5909V70.3352H22.1989C22.7216 70.3352 23.1496 70.2443 23.483 70.0625C23.8163 69.8807 24.0625 69.6307 24.2216 69.3125C24.3845 68.9943 24.4659 68.6288 24.4659 68.2159C24.4659 67.803 24.3845 67.4394 24.2216 67.125C24.0625 66.8106 23.8144 66.5663 23.4773 66.392C23.1439 66.214 22.714 66.125 22.1875 66.125H20.2557V76H18.1477ZM28.3537 76V67.2727H30.348V68.7273H30.4389C30.598 68.2235 30.8707 67.8352 31.2571 67.5625C31.6473 67.286 32.0923 67.1477 32.5923 67.1477C32.706 67.1477 32.8329 67.1534 32.973 67.1648C33.117 67.1723 33.2363 67.1856 33.331 67.2045V69.0966C33.2438 69.0663 33.1056 69.0398 32.9162 69.017C32.7306 68.9905 32.5507 68.9773 32.3764 68.9773C32.0014 68.9773 31.6643 69.0587 31.3651 69.2216C31.0696 69.3807 30.8366 69.6023 30.6662 69.8864C30.4957 70.1705 30.4105 70.4981 30.4105 70.8693V76H28.3537ZM38.2017 76.1705C37.3267 76.1705 36.571 75.9886 35.9347 75.625C35.3021 75.2576 34.8153 74.7386 34.4744 74.0682C34.1335 73.3939 33.9631 72.6004 33.9631 71.6875C33.9631 70.7898 34.1335 70.0019 34.4744 69.3239C34.8191 68.642 35.3002 68.1117 35.9176 67.733C36.535 67.3504 37.2604 67.1591 38.0938 67.1591C38.6316 67.1591 39.1392 67.2462 39.6165 67.4205C40.0975 67.5909 40.5218 67.8561 40.8892 68.2159C41.2604 68.5758 41.5521 69.0341 41.7642 69.5909C41.9763 70.1439 42.0824 70.803 42.0824 71.5682V72.1989H34.929V70.8125H40.1108C40.107 70.4186 40.0218 70.0682 39.8551 69.7614C39.6884 69.4508 39.4555 69.2064 39.1562 69.0284C38.8608 68.8504 38.5161 68.7614 38.1222 68.7614C37.7017 68.7614 37.3324 68.8636 37.0142 69.0682C36.696 69.2689 36.4479 69.5341 36.2699 69.8636C36.0956 70.1894 36.0066 70.5473 36.0028 70.9375V72.1477C36.0028 72.6553 36.0956 73.0909 36.2812 73.4545C36.4669 73.8144 36.7263 74.0909 37.0597 74.2841C37.393 74.4735 37.7831 74.5682 38.2301 74.5682C38.5294 74.5682 38.8002 74.5265 39.0426 74.4432C39.285 74.3561 39.4953 74.2292 39.6733 74.0625C39.8513 73.8958 39.9858 73.6894 40.0767 73.4432L41.9972 73.6591C41.8759 74.1667 41.6449 74.6098 41.304 74.9886C40.9669 75.3636 40.535 75.6553 40.0085 75.8636C39.482 76.0682 38.8797 76.1705 38.2017 76.1705ZM47.0611 76.1534C46.3755 76.1534 45.7618 75.9773 45.2202 75.625C44.6785 75.2727 44.2505 74.7614 43.9361 74.0909C43.6217 73.4205 43.4645 72.6061 43.4645 71.6477C43.4645 70.678 43.6236 69.8598 43.9418 69.1932C44.2637 68.5227 44.6974 68.017 45.2429 67.6761C45.7884 67.3314 46.3963 67.1591 47.0668 67.1591C47.5781 67.1591 47.9986 67.2462 48.3281 67.4205C48.6577 67.5909 48.919 67.7973 49.1122 68.0398C49.3054 68.2784 49.455 68.5038 49.5611 68.7159H49.6463V64.3636H51.7088V76H49.6861V74.625H49.5611C49.455 74.8371 49.3016 75.0625 49.1009 75.3011C48.9001 75.536 48.6349 75.7367 48.3054 75.9034C47.9759 76.0701 47.5611 76.1534 47.0611 76.1534ZM47.6349 74.4659C48.0705 74.4659 48.4418 74.3485 48.7486 74.1136C49.0554 73.875 49.2884 73.5436 49.4474 73.1193C49.6065 72.6951 49.6861 72.2008 49.6861 71.6364C49.6861 71.072 49.6065 70.5814 49.4474 70.1648C49.2921 69.7481 49.0611 69.4242 48.7543 69.1932C48.4512 68.9621 48.0781 68.8466 47.6349 68.8466C47.1766 68.8466 46.794 68.9659 46.4872 69.2045C46.1804 69.4432 45.9493 69.7727 45.794 70.1932C45.6387 70.6136 45.5611 71.0947 45.5611 71.6364C45.5611 72.1818 45.6387 72.6686 45.794 73.0966C45.9531 73.5208 46.1861 73.8561 46.4929 74.1023C46.8035 74.3447 47.1842 74.4659 47.6349 74.4659ZM53.9006 76V67.2727H55.9574V76H53.9006ZM54.9347 66.0341C54.6089 66.0341 54.3286 65.9261 54.0938 65.7102C53.8589 65.4905 53.7415 65.2273 53.7415 64.9205C53.7415 64.6098 53.8589 64.3466 54.0938 64.1307C54.3286 63.911 54.6089 63.8011 54.9347 63.8011C55.2642 63.8011 55.5445 63.911 55.7756 64.1307C56.0104 64.3466 56.1278 64.6098 56.1278 64.9205C56.1278 65.2273 56.0104 65.4905 55.7756 65.7102C55.5445 65.9261 55.2642 66.0341 54.9347 66.0341ZM61.8793 76.1705C61.008 76.1705 60.2599 75.9792 59.6349 75.5966C59.0137 75.214 58.5346 74.6856 58.1974 74.0114C57.8641 73.3333 57.6974 72.553 57.6974 71.6705C57.6974 70.7841 57.8679 70.0019 58.2088 69.3239C58.5497 68.642 59.0308 68.1117 59.652 67.733C60.277 67.3504 61.0156 67.1591 61.8679 67.1591C62.5762 67.1591 63.2031 67.2898 63.7486 67.5511C64.2978 67.8087 64.7353 68.1742 65.0611 68.6477C65.3868 69.1174 65.5724 69.6667 65.6179 70.2955H63.652C63.5724 69.875 63.383 69.5246 63.0838 69.2443C62.7884 68.9602 62.3925 68.8182 61.8963 68.8182C61.4759 68.8182 61.1065 68.9318 60.7884 69.1591C60.4702 69.3826 60.2221 69.7045 60.044 70.125C59.8698 70.5455 59.7827 71.0492 59.7827 71.6364C59.7827 72.2311 59.8698 72.7424 60.044 73.1705C60.2183 73.5947 60.4626 73.9223 60.777 74.1534C61.0952 74.3807 61.4683 74.4943 61.8963 74.4943C62.1993 74.4943 62.4702 74.4375 62.7088 74.3239C62.9512 74.2064 63.1539 74.0379 63.3168 73.8182C63.4796 73.5985 63.5914 73.3314 63.652 73.017H65.6179C65.5687 73.6345 65.3868 74.1818 65.0724 74.6591C64.758 75.1326 64.33 75.5038 63.7884 75.7727C63.2467 76.0379 62.6103 76.1705 61.8793 76.1705ZM71.6648 67.2727V68.8636H66.6477V67.2727H71.6648ZM67.8864 65.1818H69.9432V73.375C69.9432 73.6515 69.9848 73.8636 70.0682 74.0114C70.1553 74.1553 70.2689 74.2538 70.4091 74.3068C70.5492 74.3598 70.7045 74.3864 70.875 74.3864C71.0038 74.3864 71.1212 74.3769 71.2273 74.358C71.3371 74.339 71.4205 74.322 71.4773 74.3068L71.8239 75.9148C71.714 75.9527 71.5568 75.9943 71.3523 76.0398C71.1515 76.0852 70.9053 76.1117 70.6136 76.1193C70.0985 76.1345 69.6345 76.0568 69.2216 75.8864C68.8087 75.7121 68.4811 75.4432 68.2386 75.0795C68 74.7159 67.8826 74.2614 67.8864 73.7159V65.1818ZM79.5526 64.3636V76H77.4446V64.3636H79.5526ZM81.7443 76V67.2727H83.7102V68.7557H83.8125C83.9943 68.2557 84.2955 67.8655 84.7159 67.5852C85.1364 67.3011 85.6383 67.1591 86.2216 67.1591C86.8125 67.1591 87.3106 67.303 87.7159 67.5909C88.125 67.875 88.4129 68.2633 88.5795 68.7557H88.6705C88.8636 68.2708 89.1894 67.8845 89.6477 67.5966C90.1098 67.3049 90.6572 67.1591 91.2898 67.1591C92.0928 67.1591 92.7481 67.4129 93.2557 67.9205C93.7633 68.428 94.017 69.1686 94.017 70.142V76H91.9545V70.4602C91.9545 69.9186 91.8106 69.5227 91.5227 69.2727C91.2348 69.0189 90.8826 68.892 90.4659 68.892C89.9697 68.892 89.5814 69.0473 89.3011 69.358C89.0246 69.6648 88.8864 70.0644 88.8864 70.5568V76H86.8693V70.375C86.8693 69.9242 86.733 69.5644 86.4602 69.2955C86.1913 69.0265 85.839 68.892 85.4034 68.892C85.108 68.892 84.839 68.9678 84.5966 69.1193C84.3542 69.267 84.161 69.4773 84.017 69.75C83.8731 70.0189 83.8011 70.3333 83.8011 70.6932V76H81.7443ZM98.6151 76.1761C98.062 76.1761 97.5639 76.0777 97.1207 75.8807C96.6813 75.6799 96.3329 75.3845 96.0753 74.9943C95.8215 74.6042 95.6946 74.1231 95.6946 73.5511C95.6946 73.0587 95.7855 72.6515 95.9673 72.3295C96.1491 72.0076 96.3973 71.75 96.7116 71.5568C97.026 71.3636 97.3802 71.2178 97.7741 71.1193C98.1719 71.017 98.5829 70.9432 99.0071 70.8977C99.5185 70.8447 99.9332 70.7973 100.251 70.7557C100.57 70.7102 100.801 70.642 100.945 70.5511C101.092 70.4564 101.166 70.3106 101.166 70.1136V70.0795C101.166 69.6515 101.039 69.3201 100.786 69.0852C100.532 68.8504 100.166 68.733 99.6889 68.733C99.1851 68.733 98.7855 68.8428 98.4901 69.0625C98.1984 69.2822 98.0014 69.5417 97.8991 69.8409L95.9787 69.5682C96.1302 69.0379 96.3802 68.5947 96.7287 68.2386C97.0772 67.8788 97.5033 67.6098 98.0071 67.4318C98.5109 67.25 99.0677 67.1591 99.6776 67.1591C100.098 67.1591 100.517 67.2083 100.933 67.3068C101.35 67.4053 101.731 67.5682 102.075 67.7955C102.42 68.0189 102.696 68.3239 102.905 68.7102C103.117 69.0966 103.223 69.5795 103.223 70.1591V76H101.246V74.8011H101.178C101.053 75.0436 100.876 75.2708 100.649 75.483C100.426 75.6913 100.143 75.8598 99.8026 75.9886C99.4654 76.1136 99.0696 76.1761 98.6151 76.1761ZM99.1491 74.6648C99.562 74.6648 99.92 74.5833 100.223 74.4205C100.526 74.2538 100.759 74.0341 100.922 73.7614C101.089 73.4886 101.172 73.1913 101.172 72.8693V71.8409C101.107 71.8939 100.998 71.9432 100.842 71.9886C100.691 72.0341 100.52 72.0739 100.331 72.108C100.142 72.142 99.9541 72.1723 99.7685 72.1989C99.5829 72.2254 99.4219 72.2481 99.2855 72.267C98.9787 72.3087 98.7041 72.3769 98.4616 72.4716C98.2192 72.5663 98.0279 72.6989 97.8878 72.8693C97.7476 73.036 97.6776 73.2519 97.6776 73.517C97.6776 73.8958 97.8158 74.1818 98.0923 74.375C98.3688 74.5682 98.7211 74.6648 99.1491 74.6648ZM109.087 79.4545C108.348 79.4545 107.714 79.3542 107.183 79.1534C106.653 78.9564 106.227 78.6913 105.905 78.358C105.583 78.0246 105.359 77.6553 105.234 77.25L107.087 76.8011C107.17 76.9716 107.291 77.1402 107.45 77.3068C107.609 77.4773 107.823 77.6174 108.092 77.7273C108.365 77.8409 108.708 77.8977 109.121 77.8977C109.704 77.8977 110.187 77.7557 110.57 77.4716C110.952 77.1913 111.143 76.7292 111.143 76.0852V74.4318H111.041C110.935 74.6439 110.78 74.8617 110.575 75.0852C110.375 75.3087 110.107 75.4962 109.774 75.6477C109.445 75.7992 109.03 75.875 108.53 75.875C107.859 75.875 107.251 75.7178 106.706 75.4034C106.164 75.0852 105.732 74.6117 105.411 73.983C105.092 73.3504 104.933 72.5587 104.933 71.608C104.933 70.6496 105.092 69.8409 105.411 69.1818C105.732 68.5189 106.166 68.017 106.712 67.6761C107.257 67.3314 107.865 67.1591 108.536 67.1591C109.047 67.1591 109.467 67.2462 109.797 67.4205C110.13 67.5909 110.395 67.7973 110.592 68.0398C110.789 68.2784 110.939 68.5038 111.041 68.7159H111.155V67.2727H113.183V76.142C113.183 76.8883 113.005 77.5057 112.649 77.9943C112.293 78.483 111.806 78.8485 111.189 79.0909C110.571 79.3333 109.871 79.4545 109.087 79.4545ZM109.104 74.2614C109.539 74.2614 109.911 74.1553 110.217 73.9432C110.524 73.7311 110.757 73.4261 110.916 73.0284C111.075 72.6307 111.155 72.1534 111.155 71.5966C111.155 71.0473 111.075 70.5663 110.916 70.1534C110.761 69.7405 110.53 69.4205 110.223 69.1932C109.92 68.9621 109.547 68.8466 109.104 68.8466C108.645 68.8466 108.263 68.9659 107.956 69.2045C107.649 69.4432 107.418 69.7708 107.263 70.1875C107.107 70.6004 107.03 71.0701 107.03 71.5966C107.03 72.1307 107.107 72.5985 107.263 73C107.422 73.3977 107.655 73.7083 107.962 73.9318C108.272 74.1515 108.653 74.2614 109.104 74.2614ZM119.155 76.1705C118.28 76.1705 117.524 75.9886 116.888 75.625C116.255 75.2576 115.768 74.7386 115.428 74.0682C115.087 73.3939 114.916 72.6004 114.916 71.6875C114.916 70.7898 115.087 70.0019 115.428 69.3239C115.772 68.642 116.253 68.1117 116.871 67.733C117.488 67.3504 118.214 67.1591 119.047 67.1591C119.585 67.1591 120.092 67.2462 120.57 67.4205C121.051 67.5909 121.475 67.8561 121.842 68.2159C122.214 68.5758 122.505 69.0341 122.717 69.5909C122.929 70.1439 123.036 70.803 123.036 71.5682V72.1989H115.882V70.8125H121.064C121.06 70.4186 120.975 70.0682 120.808 69.7614C120.642 69.4508 120.409 69.2064 120.109 69.0284C119.814 68.8504 119.469 68.7614 119.075 68.7614C118.655 68.7614 118.286 68.8636 117.967 69.0682C117.649 69.2689 117.401 69.5341 117.223 69.8636C117.049 70.1894 116.96 70.5473 116.956 70.9375V72.1477C116.956 72.6553 117.049 73.0909 117.234 73.4545C117.42 73.8144 117.679 74.0909 118.013 74.2841C118.346 74.4735 118.736 74.5682 119.183 74.5682C119.482 74.5682 119.753 74.5265 119.996 74.4432C120.238 74.3561 120.448 74.2292 120.626 74.0625C120.804 73.8958 120.939 73.6894 121.03 73.4432L122.95 73.6591C122.829 74.1667 122.598 74.6098 122.257 74.9886C121.92 75.3636 121.488 75.6553 120.962 75.8636C120.435 76.0682 119.833 76.1705 119.155 76.1705Z"
        fill="white"
      />
      <Circle cx={27} cy={25} r={16} fill="white" fillOpacity={0.22} />
      <Path
        d="M26.5 34C31.7467 34 36 29.7467 36 24.5C36 19.2533 31.7467 15 26.5 15C21.2533 15 17 19.2533 17 24.5C17 29.7467 21.2533 34 26.5 34Z"
        stroke="white"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M37 35L35 33"
        stroke="white"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_57_1893"
        x1={98.4778}
        y1={166.503}
        x2={170.914}
        y2={194.229}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#303B45" />
        <Stop offset={0.1467} stopColor="#384551" />
        <Stop offset={0.4113} stopColor="#4E6170" />
        <Stop offset={0.7608} stopColor="#718DA3" />
        <Stop offset={1} stopColor="#8CAECA" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_57_1893"
        x1={97.4036}
        y1={153.659}
        x2={107.513}
        y2={169.865}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#EAEEEF" />
        <Stop offset={0.4048} stopColor="#DEE6EB" />
        <Stop offset={1} stopColor="#C5D6E3" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_57_1893"
        x1={101.238}
        y1={133.908}
        x2={100.767}
        y2={196.347}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#8CAECA" />
        <Stop offset={0.0156188} stopColor="#86A7C2" />
        <Stop offset={0.0503115} stopColor="#7E9DB6" />
        <Stop offset={0.0987955} stopColor="#7997AF" />
        <Stop offset={0.2296} stopColor="#7895AD" />
        <Stop offset={0.6081} stopColor="#809FB9" />
        <Stop offset={1} stopColor="#8CAECA" />
      </LinearGradient>
      <LinearGradient
        id="paint3_linear_57_1893"
        x1={155.777}
        y1={127.131}
        x2={155.736}
        y2={132.683}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#8CAECA" />
        <Stop offset={0.0156188} stopColor="#86A7C2" />
        <Stop offset={0.0503115} stopColor="#7E9DB6" />
        <Stop offset={0.0987955} stopColor="#7997AF" />
        <Stop offset={0.2296} stopColor="#7895AD" />
        <Stop offset={0.6081} stopColor="#809FB9" />
        <Stop offset={1} stopColor="#8CAECA" />
      </LinearGradient>
      <LinearGradient
        id="paint4_linear_57_1893"
        x1={141.711}
        y1={201.358}
        x2={30.2801}
        y2={155.687}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#303B45" />
        <Stop offset={0.1467} stopColor="#384551" />
        <Stop offset={0.4113} stopColor="#4E6170" />
        <Stop offset={0.7608} stopColor="#718DA3" />
        <Stop offset={1} stopColor="#8CAECA" />
      </LinearGradient>
      <LinearGradient
        id="paint5_linear_57_1893"
        x1={136.129}
        y1={181.706}
        x2={140.517}
        y2={193.427}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#C5D6E3" />
        <Stop offset={0.2873} stopColor="#B9CEDE" />
        <Stop offset={0.8034} stopColor="#9AB8D0" />
        <Stop offset={1} stopColor="#8CAECA" />
      </LinearGradient>
      <LinearGradient
        id="paint6_linear_57_1893"
        x1={84.939}
        y1={147.052}
        x2={86.4829}
        y2={161.676}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#C5D6E3" />
        <Stop offset={1} stopColor="#8CAECA" />
      </LinearGradient>
      <ClipPath id="clip0_57_1893">
        <Rect width={165} height={228} rx={18} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default PredictIcon;
