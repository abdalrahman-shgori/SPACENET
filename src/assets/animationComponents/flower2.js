import * as React from "react"
import { motion } from "framer-motion";

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={166}
    height={265}
    fill="none"
    {...props}
  >
    <motion.path
        stroke="#000000AA" 
        fill="transparent"
        strokeWidth={1} 
        fillOpacity={0.45}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      d="M73.467 260.979a24.41 24.41 0 0 1 14.87-14.389c2.25-.778 4.389-1.964 6.568-2.949a16.452 16.452 0 0 0-6.36-1.537 19.912 19.912 0 0 1-13.726-6.19 9.013 9.013 0 0 1-1.2-7.269c.652-2.387 3.476-1.313 5.27-.563 5.822 2.319 12.21 3.99 17.212 7.551 6.555 4.748 13.705 4.738 20.94 5.646a60.395 60.395 0 0 1-27.65-24.345c-1.461-2.531-3.073-2.493-5.367-1.491a22.529 22.529 0 0 1-17.153.234 22.602 22.602 0 0 1-12.372-11.913c-.533-1.18-.765-3.254-.087-3.968a5.024 5.024 0 0 1 4.007-.651c3.742.692 7.436 1.685 11.142 2.571l.687.075-.609-.368a19.19 19.19 0 0 0-2.018-2.209 33.201 33.201 0 0 1-10.005-16.3 12.378 12.378 0 0 1 .198-4.332c1.201.15 2.581-.076 3.563.424a49.154 49.154 0 0 1 17.505 13.806 86 86 0 0 1-2.012-12.705 31.107 31.107 0 0 0-5.848-17.807 121.501 121.501 0 0 1-5.492-11.142c-.505-.875-2.017-2.036-2.756-1.857-14.339 3.515-25.636-4.771-37.796-9.707-2.578-.992-2.5-3.517.097-4.893a18.48 18.48 0 0 1 6.969-2.213 49.88 49.88 0 0 1 27.495 6.277c-1.695-5.123-3.587-9.687-4.71-14.421-1.492-6.357-1.98-12.822 1.135-18.962 1.452-2.848 3.646-3.593 5.45-1.584a33.341 33.341 0 0 1 5.718 8.06 34.93 34.93 0 0 1 3.181 13.516 34.876 34.876 0 0 1-2.337 13.68 12.306 12.306 0 0 0-.781 6.28 49.711 49.711 0 0 0 8.502 18.459c1.204-6.922 2.209-13.331 3.538-19.606a116.529 116.529 0 0 1 12.514-32.452 6.44 6.44 0 0 0 1.11-3.706 6.456 6.456 0 0 0-1.212-3.677c-2.079-3.215-3.834-6.642-5.858-9.889-4.874-7.927-10.202-15.269-20.727-15.741a3.179 3.179 0 0 1-.967-.26 27.439 27.439 0 0 1-15.423-12.603c-1.503-2.604-.38-4.518 2.575-4.76.99.03 1.974.178 2.93.441 7.795 1.577 15.208 3.995 20.8 9.349.32-4.265.907-8.506 1.757-12.698.435-1.69 2.835-2.852 4.355-4.25a15.274 15.274 0 0 1 3.527 4.264c2.36 7.518 2.62 14.959-1.855 22.007a4.509 4.509 0 0 0 .112 4.053c3.811 6.258 7.835 12.37 11.877 18.47.182.316 1.866.187 1.958-.04 2.1-5.926 5.054-11.748 5.865-17.848 1.466-11.314-4.46-19.948-12.545-27.262C78.464 47.121 56.83 40.66 41.802 51.643a10.712 10.712 0 0 0-3.866 4.713 36.44 36.44 0 0 1-6.055 10.143A191.73 191.73 0 0 1 17 80.226c-1.113.99-3.251 2.175-4.153 1.728a6.452 6.452 0 0 1-2.832-4.22 18.693 18.693 0 0 1 .53-8.128 18.65 18.65 0 0 1 3.936-7.125c3.727-4.782 9.08-7.004 14.396-9.378l.24-.14-.24.14-5.964.094a24.869 24.869 0 0 1-11.329-2.346 24.923 24.923 0 0 1-9.051-7.22c-3.59-4.502-2.158-7.511 3.511-7.857a61.977 61.977 0 0 1 12.509.22c8.117 1.192 15.577 3.905 19.218 12.271.852 1.99 1.936 1.165 3.095.47 12.37-7.439 25.11-7.204 38.106-1.808 2.336.958 4.656 1.975 6.966 2.973a8.61 8.61 0 0 0-1.388-1.803c-8.992-7.211-17.795-14.953-29.653-17.434-9.063-1.887-14.937-8.244-20.046-15.291-.954-1.31-.408-3.71-.561-5.605A18.76 18.76 0 0 1 39 9.95a67.001 67.001 0 0 1 25.4 13.714c-.162-2.04-.369-3.856-.46-5.688a21.461 21.461 0 0 1 4.397-14.942c3.167-4.036 6.928-3.826 8.221.686a80.195 80.195 0 0 1 2.984 17.006 13.721 13.721 0 0 1-1.078 6.623 13.69 13.69 0 0 1-4.089 5.315c-2.619 1.983-1.889 2.604.292 3.85a30.53 30.53 0 0 1 5.718 3.942 138.997 138.997 0 0 1 11.428 11.56 106.088 106.088 0 0 1 7.266 10.912c.576-2.596.847-5.25.808-7.908.809-10.093 5.202-13.72 11.891-15.945 3.704-1.22 4.95-.005 4.661 3.783-.961 9.659-3.461 18.668-11.483 25.06-1.2.966-1.62 1.482-.915 3.133a27.956 27.956 0 0 1 2.497 11.133 27.901 27.901 0 0 1-2.16 11.196c-3.198 7.8-6.926 15.41-10.684 23.012a90.25 90.25 0 0 0-8.737 24.368 34.705 34.705 0 0 0 7.668-5.246c6.117-5.789 11.761-12.098 18.178-17.539a10.713 10.713 0 0 0 3.877-5.199c.724-2.093.784-4.36.17-6.49a81.134 81.134 0 0 1-1.646-15.247 21.44 21.44 0 0 1 6.616-15.132c2.679-2.737 5.029-2.184 6.364 1.287.318.942.553 1.91.705 2.892a48.74 48.74 0 0 1-2.827 27.53l5.069-1.686c5.974-1.962 11.991-3.078 17.866-.021a6.446 6.446 0 0 1 3.494 4.035 6.427 6.427 0 0 1-3.29 4.38 33.854 33.854 0 0 1-25.962 2.984 6.898 6.898 0 0 0-7.575 1.892c-5.816 5.839-11.632 11.677-17.6 17.38-3.09 2.926-6.02 6.13-10.651 6.943a4.282 4.282 0 0 0-2.57 3.097c-.94 9.224-2.462 18.512-2.172 27.721a78.83 78.83 0 0 0 16.146 46.194c3.564 4.714 11.523 11.381 15.815 12.723-.858-2.258-1.853-4.71-2.725-7.208a15.665 15.665 0 0 0-6.794-9.15 22.938 22.938 0 0 1-9.543-11.21c-1.738-4.255-2.514-8.644-.336-12.978 2.066-3.971 4.927-4.333 6.8-.403a125.825 125.825 0 0 1 5.854 14.728c1.048 3.017 1.56 6.219 2.316 9.33l1.077-.151c-.068-1.747-.058-3.488-.193-5.222-.7-9.319 4.07-13.71 11.082-17.734 1.709-.987 3.693-1.239 3.576 1.904-.092 9.405-1.507 18.234-9.946 24.248a4.53 4.53 0 0 0-1.666 3.591c1.683 9.992 7.235 15.32 17.172 16.876 1.64.274 3.301.395 4.962.36 27.171-.804 46.423-13.953 58.134-38.103a44.5 44.5 0 0 0 4.428-27.114c-.8-4.773-2.922-8.707-7.421-10.451-5.994-2.319-12.262-4.083-18.442-5.823-1.106-.329-2.748.644-3.926 1.349-5.479 3.163-10.625 6.903-16.185 9.84-5.559 2.937-11.716 4.11-17.501.182-1.754-1.195-4.631-2.66-3.482-5.431a8.733 8.733 0 0 1 4.78-3.43c6.488-2.53 13.06-4.786 19.4-7.058-2.966-2.777-5.695-5.146-8.138-7.704a3.478 3.478 0 0 1-.383-3.152c.3-.596 1.953-.905 2.907-.712 8.364 1.621 16.652 3.409 21.821 11.29a4.63 4.63 0 0 0 2.417 1.655c6.464 1.974 12.959 3.83 19.595 5.803-4.928-7.077-10.264-13.918-17.671-18.597-5.187-3.281-10.589-6.289-16.914-6.78-11.786-.984-22.209 2.751-31.8 9.256a3.32 3.32 0 0 0-1.095 2.394c-.069 6.613-3.473 11.654-7.512 16.368-4.039 4.713-7.849 8.922-11.901 13.27a15.752 15.752 0 0 1-3.528 2.211 13.98 13.98 0 0 1-1.863-4.258 30.854 30.854 0 0 1 7.424-22.096c.431-.497.924-.931 1.325-1.436.402-.504.499-.808.333-.539-4.355-.165-8.785-.162-13.184-.574a3.96 3.96 0 0 1-2.61-2.462c-.224-.689.8-2.174 1.67-2.726a47.3 47.3 0 0 1 9.9-5.715c5.49-1.855 11.254-3.025 16.463 1.409a3.51 3.51 0 0 0 2.976.093c2.756-1.145 5.399-2.571 8.109-3.839 9.996-4.604 20.294-6.755 31.256-3.98-.83-1.009-1.631-2.01-2.48-3.008a23.677 23.677 0 0 1-5.353-9.159 23.633 23.633 0 0 1-.814-10.573c.482-2.983 1.918-3.712 3.843-1.922a43.143 43.143 0 0 1 14.666 25.79 7.452 7.452 0 0 0 3.508 5.689c9.093 6.657 16.591 14.582 20.663 25.453a50.75 50.75 0 0 1 2.758 24.205c2.352-5.575 4.495-11.128 6.264-16.813 1.06-3.44 3.026-7.626 1.902-10.475-.953-2.55-5.399-3.903-8.396-5.62-8.383-4.785-12.734-11.848-12.202-21.606.116-2.374-.245-5.787 2.77-6.139 1.556-.179 3.87 2.156 5.146 3.851 4.017 5.37 7.721 10.971 11.767 16.821a16.552 16.552 0 0 1 1.918-10.655 16.511 16.511 0 0 1 8.091-7.179c1.242-.593 3.492-1.371 3.966-.851a6.459 6.459 0 0 1 1.182 4.278c-.664 9.487-4.516 17.913-8.538 26.387-2.243 4.693-3.816 9.645-5.707 14.433 3.486-1.467 6.015-3.349 8.772-4.792a23.071 23.071 0 0 1 17.803-2.018 4.463 4.463 0 0 1 2.576 2.531c.225.689-.78 2.038-1.553 2.757a42.47 42.47 0 0 1-5.131 3.98c-5.546 3.648-11.154 8.002-18.154 7.157-5.851-.74-8.395 1.2-10.444 6.402-1.802 4.513-5.503 8.138-7.566 12.628a68.54 68.54 0 0 1-29.208 31.375c-15.457 8.354-32.425 9.716-49.644 8.371a77.586 77.586 0 0 1-9.317-1.641c-2.315-.449-3.73-.327-4.606 2.659a27.696 27.696 0 0 1-5.283 8.607c-5.568 6.439-14.2 6.586-21.428 9.593-2.212.93-2.902-.78-1.955-2.915Zm-1.978-54.894c-4.049-1.309-8.287-2.087-13.232-3.275 4.271 8.771 16.415 13.592 24.784 10.373.526-.326.989-.745 1.366-1.236a7.232 7.232 0 0 0-1.493-1.171c-3.883-1.579-7.597-3.379-11.518-4.637l.093-.054Zm-10.376-23.504c3.396 10.815 10.699 16.471 19.815 21.453-3.587-10.159-10.571-16.123-19.907-21.399l.093-.054Zm.37-74.631a3.848 3.848 0 0 0-2.287-1.432c-.32-.039-1.075 1.141-1.374 1.909-2.316 7.141-.856 14.088 1.508 20.884 1.165 3.346 2.762 6.542 4.553 10.717 5.14-11.898 4.11-22.218-2.482-32.006l.083-.072Zm13.403-32.543c-5.964-6.727-13.644-9.908-22.882-11.025a17.213 17.213 0 0 0 9.732 9.265c3.798 1.602 7.806 2.712 11.735 3.94a7.52 7.52 0 0 0 2.344-.013 7.252 7.252 0 0 0-1.11-2.138l.181-.03Zm7.897-2.278a21.498 21.498 0 0 0-1.464-15.402 32.185 32.185 0 0 0-2.355 7.114 35.717 35.717 0 0 0 .786 8.353c.291 1.301.674 2.58 1.145 3.828a21.444 21.444 0 0 0 1.707-3.863l.18-.03Zm-65.907-8.087a43.67 43.67 0 0 0-3.692 9.003c-.338 1.088.343 2.481.554 3.748l3.36-1.643c6.02-5.186 12.9-10.126 16.896-17.915a9.247 9.247 0 0 0 1.114-2.702c.054-.379-1.332-1.364-1.48-1.279-5.675 3.897-13.187 4.612-16.933 10.818l.18-.03Zm9.382-23.723c-6.35-2.808-13.166-2.817-19.972-2.51a7.128 7.128 0 0 0-2.17.831 8.35 8.35 0 0 0 1.073 2.457 21.637 21.637 0 0 0 14.587 7.553c3.897.23 7.927-.037 11.864.22 3.938.257 3.092-1.165 1.931-3.819a50.707 50.707 0 0 0-7.494-4.702l.18-.03Zm36.931-13.236a120.16 120.16 0 0 0-11.215-8.83 92.38 92.38 0 0 0-11.61-5.7 8.798 8.798 0 0 0-2.384-.31l.362 2.47a32.253 32.253 0 0 0 14.59 11.074c3.028.955 5.955 1.994 8.954 2.942a5.12 5.12 0 0 0 1.405.032c-.024-.557.088-1.39-.246-1.67l.144-.008Zm7.978 3.01a22.245 22.245 0 0 0 4.859-7.196c1.915-6.29-.464-12.384-1.983-18.403-.895-2.236-2.477-2.017-3.246-.433a26.13 26.13 0 0 0-3.452 9.634c.103 5.11.563 10.207 1.378 15.253.013 1.953 1.134 2.521 2.3 1.153l.144-.008Zm14.996 19.025c.14.242.409.409.623.608-.065-.112.009-.328-.031-.355a4.618 4.618 0 0 0-.592-.253Zm18.764 13.972a33.582 33.582 0 0 0 7.581-15.39 14.4 14.4 0 0 0 .341-2.455c.07-1.38.026-2.743.085-4.142l-5.271 1.034a47.538 47.538 0 0 0-4.282 9.27 52.093 52.093 0 0 0-.513 10.863c.064.576.222 1.139.467 1.665a4.605 4.605 0 0 0 1.592-.845Zm39.777 47.88c.8-.529 1.565-1.111 2.288-1.742-.906-.668-1.806-1.885-2.711-1.908a63.521 63.521 0 0 0-12.646.529 59.217 59.217 0 0 0-10.394 4.215l.446 1.157c7.804.951 15.627 1.892 22.996-2.288l.021.037Zm-22.585-8.194a46.375 46.375 0 0 0 1.573-23.953 16.735 16.735 0 0 0-1.75-3.032 104.184 104.184 0 0 0-4.783 9.558c-2.116 5.686-.814 11.458.166 17.144.365 2.046.966 4.031 1.463 6.051a35.228 35.228 0 0 0 3.331-5.768Zm-62.83 38.631a44.797 44.797 0 0 0-25.452-6.812c-2.07.104-4.103.484-6.164.732 9.443 4.817 18.509 10.398 29.413 10.627.329.046.664.029.986-.049 1.615-.635 3.198-1.325 4.79-1.997a41.542 41.542 0 0 0-3.616-2.575l.043.074Zm55.347 72.231a22.101 22.101 0 0 0 5.959-16.142c.004-.25-1.396-.831-1.863-.611a10.495 10.495 0 0 0-6.235 8.288 65.334 65.334 0 0 0-.042 8.805c1.011-.136 1.844-.022 2.234-.247l-.053-.093Zm34.733-55.129c-4.538 1.404-8.989 3.131-13.475 4.753-.729.302-1.437.652-2.118 1.05a7.238 7.238 0 0 0 1.762 2.108 14.21 14.21 0 0 0 7.16 1.528 14.18 14.18 0 0 0 6.964-2.241c5.379-2.907 10.586-6.112 15.935-9.2-5.799-2.109-10.984.363-16.228 2.002Zm2.016-13.964-.595 1.286c3.866 3.821 8.243 6.428 13.902 6.064l.523-1.196-13.83-6.154Zm-34.605-3.537c-5.604-1.601-10.693.221-16.33 2.681l-1.85 2.458c1.084.291 2.272 1.019 3.258.797 5.09-1.177 10.139-2.554 15.188-3.931a3.45 3.45 0 0 0 1.137-.905c-.465-.376-.875-.958-1.403-1.1Zm-.139 7.522c-7.692 5.806-13.659 13.443-13.134 24.774 6.536-7.123 13.545-12.782 17.126-21.249a31.505 31.505 0 0 0 1.231-5.672 23.102 23.102 0 0 0-5.266 2.073l.043.074Zm41.56-37.514c-.721 8.702 3.002 15.235 12.473 22.417a49.326 49.326 0 0 0-12.515-22.491l.042.074Zm57.544 39.408c1.668-4.832 2.98-9.807 4.362-14.747a7.65 7.65 0 0 0-.182-2.375l-1.892.497c-5.395 4.081-8.062 9.069-7.125 15.623.356 2.548.875 5.076 1.327 7.618a42.3 42.3 0 0 0 3.51-6.616Zm-22.295-16.571a16.798 16.798 0 0 0-1.639-1.337 6.479 6.479 0 0 0-.658 1.819c-.14 6.406 1.42 12.153 6.854 16.16 2.543 1.832 5.226 3.433 8.529 5.594a51.157 51.157 0 0 0-13.092-22.332l.006.096Zm16.899 48.313c6.306.8 11.507-2.029 16.444-5.401l6.853-3.957c.375-.278.711-.605.998-.973a7.125 7.125 0 0 0-1.523-.708 17.674 17.674 0 0 0-13.289 2.116c-3.566 2.059-6.941 4.405-10.37 6.657-.494.435-.933.93-1.305 1.473a9.585 9.585 0 0 0 2.186.697l.006.096Zm-106.144 28.117c-1.873-5.046-3.727-10.102-5.686-15.123a8.733 8.733 0 0 0-1.743-2.119 10.047 10.047 0 0 0-1.331 2.926c-.602 6.549 2.854 11.078 7.269 15.078l1.491-.762Zm-27.058 19.442a3.88 3.88 0 0 0-.979 1.607c1.901 1.706 3.683 4.149 5.943 4.804a109.554 109.554 0 0 0 13.776 2.416c-5.06-5.463-12.064-6.828-18.777-8.806l.037-.021Zm19.56 8.874-.402.034.076.13s.215-.1.289-.142l.037-.022Zm1.861 5.797c-7.037 4.41-16.114 4.987-20.495 13.396 10.587-.705 18.33-5.696 20.458-13.375l.037-.021Z"
    />
  </svg>
)
export default SvgComponent
