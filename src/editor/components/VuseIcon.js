const icons = {
  plus: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z',
  tic: 'M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z',
  sort: 'M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z',
  link: 'M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z',
  palettes: 'M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z',
  close: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
  bold: 'M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z',
  italic: 'M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z',
  underline: 'M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z',
  center: 'M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z',
  left: 'M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z',
  right: 'M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z',
  trash: 'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z',
  align: 'M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z',
  textStyle: 'M23 7V1h-6v2H7V1H1v6h2v10H1v6h6v-2h10v2h6v-6h-2V7h2zM3 3h2v2H3V3zm2 18H3v-2h2v2zm12-2H7v-2H5V7h2V5h10v2h2v10h-2v2zm4 2h-2v-2h2v2zM19 5V3h2v2h-2zm-5.27 9h-3.49l-.73 2H7.89l3.4-9h1.4l3.41 9h-1.63l-.74-2zm-3.04-1.26h2.61L12 8.91l-1.31 3.83z',
  section: 'M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z',
  arrowDown: 'M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z',
  arrowRight: 'M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z',
  arrowLeft: 'M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z',
  mobile: 'M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z',
  tablet: 'M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 1.99-.9 1.99-2L23 6c0-1.1-.9-2-2-2zm-2 14H5V6h14v12z',
  laptop: 'M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z',
  monitor: 'M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z',
  download: 'M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z',
  eye: 'M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z',
  undo: 'M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z',
  hand: {
    sizes: '0 0 32 32',
    content: 'M30 19v-5c0-1.654-1.346-3-3-3-0.535 0-1.037 0.14-1.472 0.386-0.534-0.833-1.467-1.386-2.528-1.386-0.768 0-1.469 0.29-2 0.766-0.531-0.476-1.232-0.766-2-0.766-0.35 0-0.687 0.060-1 0.171v-7.171c0-1.654-1.346-3-3-3s-3 1.346-3 3v12.334l-5.501-2.932c-0.454-0.262-0.973-0.401-1.499-0.401-1.654 0-3 1.346-3 3 0 0.824 0.327 1.592 0.922 2.163 0.008 0.007 0.015 0.015 0.023 0.022l7.474 6.815h-1.419c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h20c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1h-1.382l2.276-4.553c0.069-0.139 0.106-0.292 0.106-0.447zM28 27c0 0.552-0.448 1-1 1s-1-0.448-1-1 0.448-1 1-1 1 0.448 1 1zM28 18.764l-2.618 5.236h-11.995l-9.088-8.286c-0.193-0.19-0.299-0.443-0.299-0.714 0-0.551 0.449-1 1-1 0.171 0 0.332 0.041 0.479 0.122 0.017 0.010 0.033 0.020 0.051 0.029l7 3.732c0.31 0.165 0.684 0.156 0.985-0.025s0.485-0.506 0.485-0.857v-14c0-0.551 0.449-1 1-1s1 0.449 1 1v10c0 0.552 0.448 1 1 1s1-0.448 1-1c0-0.551 0.449-1 1-1s1 0.449 1 1c0 0.552 0.448 1 1 1s1-0.448 1-1c0-0.551 0.449-1 1-1s1 0.449 1 1v1c0 0.552 0.448 1 1 1s1-0.448 1-1c0-0.551 0.449-1 1-1s1 0.449 1 1v4.764z'
  },
  upload: {
    sizes: '0 0 32 32',
    content: 'M28 16h-5l-7 7-7-7h-5l-4 8v2h32v-2l-4-8zM0 28h32v2h-32v-2zM18 10v-8h-4v8h-7l9 9 9-9h-7z'
  },
  cog: {
    sizes: '0 0 512 512',
    content: 'M444.788 291.1l42.616 24.599c4.867 2.809 7.126 8.618 5.459 13.985-11.07 35.642-29.97 67.842-54.689 94.586a12.016 12.016 0 0 1-14.832 2.254l-42.584-24.595a191.577 191.577 0 0 1-60.759 35.13v49.182a12.01 12.01 0 0 1-9.377 11.718c-34.956 7.85-72.499 8.256-109.219.007-5.49-1.233-9.403-6.096-9.403-11.723v-49.184a191.555 191.555 0 0 1-60.759-35.13l-42.584 24.595a12.016 12.016 0 0 1-14.832-2.254c-24.718-26.744-43.619-58.944-54.689-94.586-1.667-5.366.592-11.175 5.459-13.985L67.212 291.1a193.48 193.48 0 0 1 0-70.199l-42.616-24.599c-4.867-2.809-7.126-8.618-5.459-13.985 11.07-35.642 29.97-67.842 54.689-94.586a12.016 12.016 0 0 1 14.832-2.254l42.584 24.595a191.577 191.577 0 0 1 60.759-35.13V25.759a12.01 12.01 0 0 1 9.377-11.718c34.956-7.85 72.499-8.256 109.219-.007 5.49 1.233 9.403 6.096 9.403 11.723v49.184a191.555 191.555 0 0 1 60.759 35.13l42.584-24.595a12.016 12.016 0 0 1 14.832 2.254c24.718 26.744 43.619 58.944 54.689 94.586 1.667 5.366-.592 11.175-5.459 13.985L444.788 220.9a193.485 193.485 0 0 1 0 70.2zM336 256c0-44.112-35.888-80-80-80s-80 35.888-80 80 35.888 80 80 80 80-35.888 80-80z'
  },
  bar: {
    sizes: '0 0 448 512',
    content: 'M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z'
  },
  check: {
    sizes: '0 0 512 512',
    content: 'M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z'
  },
  pic: {
    sizes: '0 0 30 28',
    content: 'M10 9c0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3 3 1.344 3 3zM26 15v7h-22v-3l5-5 2.5 2.5 8-8zM27.5 4h-25c-0.266 0-0.5 0.234-0.5 0.5v19c0 0.266 0.234 0.5 0.5 0.5h25c0.266 0 0.5-0.234 0.5-0.5v-19c0-0.266-0.234-0.5-0.5-0.5zM30 4.5v19c0 1.375-1.125 2.5-2.5 2.5h-25c-1.375 0-2.5-1.125-2.5-2.5v-19c0-1.375 1.125-2.5 2.5-2.5h25c1.375 0 2.5 1.125 2.5 2.5z'
  },
  settings: {
    sizes: '0 0 30 28',
    content: 'M10 9c0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3 3 1.344 3 3zM26 15v7h-22v-3l5-5 2.5 2.5 8-8zM27.5 4h-25c-0.266 0-0.5 0.234-0.5 0.5v19c0 0.266 0.234 0.5 0.5 0.5h25c0.266 0 0.5-0.234 0.5-0.5v-19c0-0.266-0.234-0.5-0.5-0.5zM30 4.5v19c0 1.375-1.125 2.5-2.5 2.5h-25c-1.375 0-2.5-1.125-2.5-2.5v-19c0-1.375 1.125-2.5 2.5-2.5h25c1.375 0 2.5 1.125 2.5 2.5z'
  },
  reload: {
    sizes: '0 0 32 32',
    content: 'M8.013 22.033v-7.972h3.932l-5.902-6.892-6.026 6.893h3.947v11.896h17.468l-3.923-3.924h-9.496zM28.036 19.001v-11.958h-17.531l3.986 3.985h9.496v7.973h-3.932l5.901 6.893 6.026-6.893h-3.946z'
  },
  font: {
    sizes: '0 0 32 32',
    content: 'M24.987 0.506c-2.829 0-4.644-0.506-7.558-0.506-9.415 0-13.806 5.362-13.806 10.809 0 3.209 1.52 4.264 4.518 4.264-0.211-0.464-0.591-0.971-0.591-3.251 0-6.375 2.406-8.233 5.489-8.36 0 0-2.529 24.793-9.868 27.767v0.771h9.894l3.376-16h6.183l1.377-4h-6.716l1.623-7.693c1.858 0.38 3.673 0.76 5.235 0.76 1.942 0 3.715-0.591 4.686-5.066-1.182 0.38-2.449 0.506-3.842 0.506z'
  },
  fontSize: {
    sizes: '0 0 32 32',
    content: 'M2 16h12v4h-4v12h-4v-12h-4zM30 8h-7.867v24h-4.266v-24h-7.867v-4h20z'
  },
  fillet: {
    sizes: '0 0 24 24',
    content: 'M5.672 19.734l1.406-1.406c1.125 0.844 2.484 1.406 3.938 1.594v2.016c-2.016-0.188-3.844-0.984-5.344-2.203zM12.984 19.922c1.453-0.188 2.813-0.75 3.891-1.594l1.453 1.406c-1.5 1.219-3.328 2.016-5.344 2.203v-2.016zM18.328 16.922c0.844-1.125 1.406-2.438 1.594-3.891h2.016c-0.188 2.016-0.984 3.797-2.203 5.297zM15 12c0 1.641-1.359 3-3 3s-3-1.359-3-3 1.359-3 3-3 3 1.359 3 3zM4.078 12.984c0.188 1.453 0.75 2.813 1.594 3.891l-1.406 1.453c-1.219-1.5-2.016-3.328-2.203-5.344h2.016zM5.672 7.078c-0.844 1.125-1.406 2.484-1.594 3.938h-2.016c0.188-2.016 0.984-3.844 2.203-5.344zM19.922 11.016c-0.188-1.453-0.75-2.813-1.594-3.938l1.406-1.406c1.219 1.5 2.016 3.328 2.203 5.344h-2.016zM18.328 4.266l-1.406 1.406c-1.125-0.844-2.484-1.406-3.938-1.594v-2.016c2.016 0.188 3.844 0.984 5.344 2.203zM11.016 4.078c-1.453 0.188-2.813 0.75-3.938 1.594l-1.406-1.406c1.5-1.219 3.328-2.016 5.344-2.203v2.016z'
  },
  floppy: {
    sizes: '0 0 24 28',
    content: 'M6 24h12v-6h-12v6zM20 24h2v-14c0-0.297-0.266-0.938-0.469-1.141l-4.391-4.391c-0.219-0.219-0.828-0.469-1.141-0.469v6.5c0 0.828-0.672 1.5-1.5 1.5h-9c-0.828 0-1.5-0.672-1.5-1.5v-6.5h-2v20h2v-6.5c0-0.828 0.672-1.5 1.5-1.5h13c0.828 0 1.5 0.672 1.5 1.5v6.5zM14 9.5v-5c0-0.266-0.234-0.5-0.5-0.5h-3c-0.266 0-0.5 0.234-0.5 0.5v5c0 0.266 0.234 0.5 0.5 0.5h3c0.266 0 0.5-0.234 0.5-0.5zM24 10v14.5c0 0.828-0.672 1.5-1.5 1.5h-21c-0.828 0-1.5-0.672-1.5-1.5v-21c0-0.828 0.672-1.5 1.5-1.5h14.5c0.828 0 1.969 0.469 2.562 1.062l4.375 4.375c0.594 0.594 1.062 1.734 1.062 2.562z'
  },
  back: {
    sizes: '0 0 20 20',
    content: 'M19 7v6c0 1.103-0.896 2-2 2h-14v-3h13v-4h-11v2l-4-3.5 4-3.5v2h12c1.104 0 2 0.896 2 2z'
  },
  windows: {
    sizes: '0 0 32 32',
    content: 'M0.011 16l-0.011-9.752 12-1.63v11.382zM14 4.328l15.996-2.328v14h-15.996zM30 18l-0.004 14-15.996-2.25v-11.75zM12 29.495l-11.99-1.644-0.001-9.851h11.991z'
  },
  apple: {
    sizes: '0 0 32 32',
    content: 'M24.734 17.003c-0.040-4.053 3.305-5.996 3.454-6.093-1.88-2.751-4.808-3.127-5.851-3.171-2.492-0.252-4.862 1.467-6.127 1.467-1.261 0-3.213-1.43-5.28-1.392-2.716 0.040-5.221 1.579-6.619 4.012-2.822 4.897-0.723 12.151 2.028 16.123 1.344 1.944 2.947 4.127 5.051 4.049 2.026-0.081 2.793-1.311 5.242-1.311s3.138 1.311 5.283 1.271c2.18-0.041 3.562-1.981 4.897-3.931 1.543-2.255 2.179-4.439 2.216-4.551-0.048-0.022-4.252-1.632-4.294-6.473zM20.705 5.11c1.117-1.355 1.871-3.235 1.665-5.11-1.609 0.066-3.559 1.072-4.713 2.423-1.036 1.199-1.942 3.113-1.699 4.951 1.796 0.14 3.629-0.913 4.747-2.264z'
  },
  linux: {
    sizes: '0 0 32 32',
    content: 'M17.739 23.029c-2.561 1.191-4.942 1.179-6.542 1.063-1.908-0.138-3.442-0.66-4.117-1.117-0.416-0.281-0.981-0.173-1.262 0.243s-0.173 0.981 0.243 1.262c1.084 0.734 3.002 1.28 5.005 1.424 0.34 0.024 0.712 0.040 1.114 0.040 1.743 0 3.957-0.166 6.326-1.268 0.455-0.212 0.652-0.752 0.441-1.207s-0.752-0.652-1.208-0.441zM27.842 21.682c0.087-7.896 0.899-22.819-14.218-21.613-14.925 1.201-10.968 16.968-11.19 22.248-0.197 2.793-1.124 6.208-2.434 9.683h4.034c0.415-1.473 0.72-2.929 0.851-4.317 0.243 0.17 0.503 0.334 0.781 0.491 0.452 0.266 0.84 0.62 1.251 0.995 0.961 0.876 2.050 1.868 4.179 1.992 0.143 0.008 0.287 0.012 0.427 0.012 2.153 0 3.625-0.942 4.809-1.699 0.567-0.363 1.057-0.676 1.518-0.827 1.31-0.41 2.454-1.072 3.309-1.914 0.134-0.131 0.258-0.267 0.374-0.405 0.476 1.746 1.129 3.711 1.853 5.672h8.614c-2.068-3.195-4.201-6.324-4.158-10.318zM3.878 17.386c0-0 0-0.001-0-0.001-0.148-2.577 1.085-4.745 2.754-4.842s3.142 1.913 3.291 4.49c0 0 0 0.001 0 0.001 0.008 0.139 0.011 0.276 0.012 0.413-0.529 0.133-1.006 0.326-1.434 0.551-0.002-0.019-0.003-0.038-0.005-0.057 0-0 0-0.001 0-0.001-0.143-1.463-0.924-2.567-1.745-2.467s-1.371 1.367-1.228 2.83c0 0 0 0.001 0 0.001 0.062 0.638 0.246 1.207 0.501 1.639-0.064 0.050-0.243 0.182-0.45 0.333-0.155 0.114-0.344 0.252-0.572 0.42-0.621-0.815-1.047-1.987-1.123-3.309zM20.789 23.756c-0.059 1.362-1.841 2.643-3.487 3.158l-0.009 0.003c-0.684 0.222-1.295 0.613-1.941 1.026-1.085 0.695-2.208 1.413-3.829 1.413-0.106 0-0.215-0.003-0.323-0.009-1.485-0.087-2.179-0.72-3.059-1.521-0.464-0.423-0.943-0.86-1.562-1.223l-0.013-0.008c-1.335-0.753-2.163-1.69-2.216-2.506-0.026-0.406 0.154-0.757 0.537-1.044 0.832-0.624 1.39-1.032 1.759-1.302 0.41-0.3 0.533-0.39 0.625-0.477 0.066-0.062 0.136-0.131 0.213-0.205 0.764-0.743 2.043-1.986 4.005-1.986 1.2 0 2.528 0.462 3.943 1.372 0.666 0.434 1.246 0.634 1.981 0.887 0.505 0.174 1.077 0.372 1.843 0.7l0.012 0.005c0.715 0.294 1.559 0.83 1.521 1.717zM20.395 20.556c-0.137-0.069-0.28-0.135-0.43-0.196-0.691-0.296-1.245-0.496-1.704-0.656 0.254-0.497 0.411-1.116 0.426-1.789 0-0 0-0.001 0-0.001 0.035-1.637-0.79-2.966-1.844-2.968s-1.936 1.322-1.971 2.959c0 0 0 0.001 0 0.001-0.001 0.054-0.001 0.107-0.001 0.16-0.649-0.299-1.287-0.515-1.911-0.649-0.003-0.061-0.006-0.123-0.008-0.185 0-0 0-0.001 0-0.002-0.061-2.982 1.769-5.45 4.086-5.513s4.245 2.303 4.305 5.285c0 0.001 0 0.001 0 0.002 0.027 1.348-0.333 2.59-0.949 3.552z'
  },
  linuxfull: {
    sizes: '0 0 25 28',
    content: 'M10.359 6.422v0c-0.313 0.031-0.203 0.313-0.375 0.313-0.156 0.016-0.125-0.344 0.375-0.313zM11.719 6.641c-0.156 0.047-0.172-0.25-0.453-0.172v0c0.453-0.203 0.609 0.109 0.453 0.172zM6.234 13.312c-0.141-0.047-0.109 0.234-0.25 0.453-0.109 0.203-0.391 0.359-0.172 0.391v0c0.078 0.016 0.297-0.172 0.391-0.391 0.078-0.266 0.156-0.406 0.031-0.453zM19.594 18.922c0-0.281-0.609-0.547-0.859-0.656 0.422-1.406 0.234-1.969-0.047-3.297-0.219-1-1.141-2.359-1.859-2.781 0.187 0.156 0.531 0.609 0.891 1.297 0.625 1.172 1.25 2.906 0.844 4.344-0.156 0.562-0.531 0.641-0.781 0.656-1.094 0.125-0.453-1.313-0.906-3.266-0.516-2.188-1.047-2.344-1.172-2.516-0.641-2.844-1.344-2.562-1.547-3.625-0.172-0.953 0.828-1.734-0.531-2-0.422-0.078-1.016-0.5-1.25-0.531s-0.359-1.578 0.516-1.625c0.859-0.063 1.016 0.969 0.859 1.375-0.25 0.406 0.016 0.562 0.438 0.422 0.344-0.109 0.125-1.016 0.203-1.141-0.219-1.313-0.766-1.5-1.328-1.609-2.156 0.172-1.188 2.547-1.406 2.328-0.313-0.328-1.219-0.031-1.219-0.234 0.016-1.219-0.391-1.922-0.953-1.937-0.625-0.016-0.875 0.859-0.906 1.359-0.047 0.469 0.266 1.453 0.5 1.375 0.156-0.047 0.422-0.359 0.141-0.344-0.141 0-0.359-0.344-0.391-0.75-0.016-0.406 0.141-0.812 0.672-0.797 0.609 0.016 0.609 1.234 0.547 1.281-0.203 0.141-0.453 0.406-0.484 0.453-0.203 0.328-0.594 0.422-0.75 0.562-0.266 0.281-0.328 0.594-0.125 0.703 0.719 0.406 0.484 0.875 1.484 0.906 0.656 0.031 1.141-0.094 1.594-0.234 0.344-0.109 1.453-0.344 1.687-0.75 0.109-0.172 0.234-0.172 0.313-0.125 0.156 0.078 0.187 0.375-0.203 0.469-0.547 0.156-1.094 0.453-1.594 0.641-0.484 0.203-0.641 0.281-1.094 0.359-1.031 0.187-1.797-0.375-1.109 0.297 0.234 0.219 0.453 0.359 1.047 0.344 1.313-0.047 2.766-1.625 2.906-0.922 0.031 0.156-0.406 0.344-0.75 0.516-1.219 0.594-2.078 1.781-2.859 1.375-0.703-0.375-1.406-2.109-1.391-1.328 0.016 1.203-1.578 2.266-0.844 3.641-0.484 0.125-1.563 2.422-1.719 3.609-0.094 0.688 0.063 1.531-0.109 2-0.234 0.688-1.297-0.656-0.953-2.297 0.063-0.281 0-0.344-0.078-0.203-0.422 0.766-0.187 1.844 0.156 2.594 0.141 0.328 0.5 0.469 0.766 0.75 0.547 0.625 2.703 2.219 3.078 2.609 0.484 0.453 0.344 1.516-0.656 1.625v0c0.516 0.969 1.016 1.062 1 2.641 0.594-0.313 0.359-1 0.109-1.437-0.172-0.313-0.391-0.453-0.344-0.531 0.031-0.047 0.344-0.313 0.516-0.109 0.531 0.594 1.531 0.703 2.594 0.562 1.078-0.125 2.234-0.5 2.766-1.359 0.25-0.406 0.422-0.547 0.531-0.469 0.125 0.063 0.172 0.344 0.156 0.812-0.016 0.5-0.219 1.016-0.359 1.437-0.141 0.484-0.187 0.812 0.281 0.828 0.125-0.875 0.375-1.734 0.438-2.609 0.078-1-0.641-2.844 0.141-3.766 0.203-0.25 0.453-0.281 0.797-0.281 0.047-1.25 1.969-1.156 2.609-0.641zM9.781 6c0.063-0.391-0.125-0.672-0.219-0.703-0.187-0.047-0.156 0.234-0.063 0.203v0c0.063 0 0.141 0.094 0.109 0.234-0.031 0.187-0.016 0.313 0.125 0.313 0.016 0 0.047 0 0.047-0.047zM16.328 9.078c-0.063-0.297-0.281-0.187-0.531-0.344-0.297-0.187-0.359-0.5-0.469-0.391v0c-0.328 0.359 0.406 1.109 0.719 1.172 0.187 0.031 0.328-0.219 0.281-0.438zM13.547 5.75c0.016-0.375-0.313-0.562-0.391-0.547-0.203 0.016-0.141 0.109-0.047 0.141v0c0.125 0.031 0.25 0.25 0.281 0.484 0 0.031 0.156-0.031 0.156-0.078zM14.391 2.109c0.016-0.078-0.187-0.172-0.328-0.281-0.125-0.125-0.25-0.234-0.375-0.234-0.313 0.031-0.156 0.359-0.203 0.516v0c-0.063 0.172-0.297 0.313-0.141 0.438 0.141 0.109 0.234-0.172 0.531-0.281 0.078-0.031 0.438 0.016 0.516-0.156zM23.219 23.063c1.922 1.188-0.719 2.172-1.859 2.75-0.891 0.453-2.078 1.453-2.516 1.875-0.328 0.313-1.687 0.469-2.453 0.078-0.891-0.453-0.422-1.172-1.797-1.219-0.688-0.016-1.359-0.016-2.031-0.016-0.594 0.016-1.188 0.047-1.797 0.063-2.063 0.047-2.266 1.375-3.594 1.328-0.906-0.031-2.047-0.75-4.016-1.156-1.375-0.281-2.703-0.359-2.984-0.969s0.344-1.297 0.391-1.891c0.047-0.797-0.594-1.875-0.125-2.281 0.406-0.359 1.266-0.094 1.828-0.406 0.594-0.344 0.844-0.609 0.844-1.344 0.219 0.75-0.016 1.359-0.5 1.656-0.297 0.187-0.844 0.281-1.297 0.234-0.359-0.031-0.578 0.016-0.672 0.156-0.141 0.172-0.094 0.484 0.078 0.891s0.375 0.672 0.344 1.172c-0.016 0.5-0.578 1.094-0.484 1.516 0.031 0.156 0.187 0.297 0.578 0.406 0.625 0.172 1.766 0.344 2.875 0.609 1.234 0.313 2.516 0.875 3.313 0.766 2.375-0.328 1.016-2.875 0.641-3.484v0c-2.016-3.156-3.344-5.219-4.406-4.406-0.266 0.219-0.281-0.531-0.266-0.828 0.047-1.031 0.562-1.406 0.875-2.203 0.594-1.516 1.047-3.25 1.953-4.141 0.672-0.875 1.734-2.297 1.937-3.047-0.172-1.625-0.219-3.344-0.25-4.844-0.031-1.609 0.219-3.016 2.031-4 0.438-0.234 1.016-0.328 1.625-0.328 1.078-0.016 2.281 0.297 3.047 0.859 1.219 0.906 1.984 2.828 1.891 4.203-0.063 1.078 0.125 2.188 0.469 3.344 0.406 1.359 1.047 2.312 2.078 3.406 1.234 1.313 2.203 3.891 2.484 5.531 0.25 1.531-0.094 2.484-0.422 2.531-0.5 0.078-0.812 1.656-2.375 1.594-1-0.047-1.094-0.641-1.375-1.156-0.453-0.797-0.906-0.547-1.078 0.297-0.094 0.422-0.031 1.047 0.109 1.516 0.281 0.984 0.187 1.906 0.016 3.047-0.328 2.156 1.516 2.562 2.75 1.531 1.219-1.016 1.484-1.172 3.016-1.703 2.328-0.797 1.547-1.5 0.297-1.922-1.125-0.375-1.172-2.266-0.766-2.625 0.094 2.031 1.156 2.328 1.594 2.609z'
  },
  facebook: {
    sizes: '0 0 32 32',
    content: 'M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z'
  },
  instagram: {
    sizes: '0 0 20 20',
    content: 'M17 1h-14c-1.1 0-2 0.9-2 2v14c0 1.101 0.9 2 2 2h14c1.1 0 2-0.899 2-2v-14c0-1.1-0.9-2-2-2zM9.984 15.523c3.059 0 5.538-2.481 5.538-5.539 0-0.338-0.043-0.664-0.103-0.984h1.581v7.216c0 0.382-0.31 0.69-0.693 0.69h-12.614c-0.383 0-0.693-0.308-0.693-0.69v-7.216h1.549c-0.061 0.32-0.104 0.646-0.104 0.984 0 3.059 2.481 5.539 5.539 5.539zM6.523 9.984c0-1.912 1.55-3.461 3.462-3.461s3.462 1.549 3.462 3.461-1.551 3.462-3.462 3.462c-1.913 0-3.462-1.55-3.462-3.462zM16.307 6h-1.615c-0.382 0-0.692-0.312-0.692-0.692v-1.617c0-0.382 0.31-0.691 0.691-0.691h1.615c0.384 0 0.694 0.309 0.694 0.691v1.616c0 0.381-0.31 0.693-0.693 0.693z'
  },
  vk: {
    sizes: '0 0 31 28',
    content: 'M29.953 8.125c0.234 0.641-0.5 2.141-2.344 4.594-3.031 4.031-3.359 3.656-0.859 5.984 2.406 2.234 2.906 3.313 2.984 3.453 0 0 1 1.75-1.109 1.766l-4 0.063c-0.859 0.172-2-0.609-2-0.609-1.5-1.031-2.906-3.703-4-3.359 0 0-1.125 0.359-1.094 2.766 0.016 0.516-0.234 0.797-0.234 0.797s-0.281 0.297-0.828 0.344h-1.797c-3.953 0.25-7.438-3.391-7.438-3.391s-3.813-3.938-7.156-11.797c-0.219-0.516 0.016-0.766 0.016-0.766s0.234-0.297 0.891-0.297l4.281-0.031c0.406 0.063 0.688 0.281 0.688 0.281s0.25 0.172 0.375 0.5c0.703 1.75 1.609 3.344 1.609 3.344 1.563 3.219 2.625 3.766 3.234 3.437 0 0 0.797-0.484 0.625-4.375-0.063-1.406-0.453-2.047-0.453-2.047-0.359-0.484-1.031-0.625-1.328-0.672-0.234-0.031 0.156-0.594 0.672-0.844 0.766-0.375 2.125-0.391 3.734-0.375 1.266 0.016 1.625 0.094 2.109 0.203 1.484 0.359 0.984 1.734 0.984 5.047 0 1.062-0.203 2.547 0.562 3.031 0.328 0.219 1.141 0.031 3.141-3.375 0 0 0.938-1.625 1.672-3.516 0.125-0.344 0.391-0.484 0.391-0.484s0.25-0.141 0.594-0.094l4.5-0.031c1.359-0.172 1.578 0.453 1.578 0.453z'
  },
  fill: {
    sizes: '0 0 24 24',
    content: 'M0 20.016h24v3.984h-24v-3.984zM18.984 11.484c0 0 2.016 2.203 2.016 3.516 0 1.078-0.938 2.016-2.016 2.016s-1.969-0.938-1.969-2.016c0-1.313 1.969-3.516 1.969-3.516zM5.203 9.984h9.609l-4.828-4.781zM16.547 8.953c0.609 0.609 0.609 1.547 0 2.109l-5.484 5.484c-0.281 0.281-0.703 0.469-1.078 0.469s-0.75-0.188-1.031-0.469l-5.531-5.484c-0.609-0.563-0.609-1.5 0-2.109l5.156-5.156-2.391-2.391 1.453-1.406z'
  },
  twitter: {
    sizes: '0 0 32 32',
    content: 'M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z'
  },
  youtube: {
    sizes: '0 0 32 32',
    content: 'M31.681 9.6c0 0-0.313-2.206-1.275-3.175-1.219-1.275-2.581-1.281-3.206-1.356-4.475-0.325-11.194-0.325-11.194-0.325h-0.012c0 0-6.719 0-11.194 0.325-0.625 0.075-1.987 0.081-3.206 1.356-0.963 0.969-1.269 3.175-1.269 3.175s-0.319 2.588-0.319 5.181v2.425c0 2.587 0.319 5.181 0.319 5.181s0.313 2.206 1.269 3.175c1.219 1.275 2.819 1.231 3.531 1.369 2.563 0.244 10.881 0.319 10.881 0.319s6.725-0.012 11.2-0.331c0.625-0.075 1.988-0.081 3.206-1.356 0.962-0.969 1.275-3.175 1.275-3.175s0.319-2.587 0.319-5.181v-2.425c-0.006-2.588-0.325-5.181-0.325-5.181zM12.694 20.15v-8.994l8.644 4.513-8.644 4.481z'
  },
  kickstarter: {
    sizes: '0 0 32 32',
    content: 'M12.805 10.907l5.867-8.507c1.112-1.6 2.541-2.4 4.303-2.4 1.429 0 2.669 0.508 3.719 1.525 1.044 1.020 1.568 2.233 1.568 3.651 0 1.045-0.276 1.972-0.832 2.772l-5.289 7.692 6.471 8.204c0.645 0.816 0.969 1.773 0.969 2.867 0 1.448-0.508 2.691-1.527 3.731-1.016 1.039-2.248 1.559-3.695 1.559-1.585 0-2.796-0.516-3.628-1.547l-7.924-9.889v5.452c0 1.557-0.269 2.765-0.809 3.629-0.983 1.569-2.404 2.355-4.284 2.355-1.709 0-3.035-0.581-3.972-1.732-0.88-1.065-1.32-2.475-1.32-4.229v-20.219c0-1.66 0.448-3.032 1.339-4.111 0.931-1.139 2.224-1.709 3.875-1.709 1.572 0 2.88 0.571 3.928 1.709 0.584 0.633 0.953 1.271 1.108 1.92 0.093 0.4 0.14 1.144 0.14 2.24v5.037h-0.005z'
  },
  wechat: {
    sizes: '0 0 32 28',
    content: 'M9.063 7.203c0-0.859-0.562-1.422-1.422-1.422-0.844 0-1.703 0.562-1.703 1.422 0 0.844 0.859 1.406 1.703 1.406 0.859 0 1.422-0.562 1.422-1.406zM20.672 15.125c0-0.562-0.562-1.125-1.422-1.125-0.562 0-1.125 0.562-1.125 1.125 0 0.578 0.562 1.141 1.125 1.141 0.859 0 1.422-0.562 1.422-1.141zM16.984 7.203c0-0.859-0.562-1.422-1.406-1.422-0.859 0-1.703 0.562-1.703 1.422 0 0.844 0.844 1.406 1.703 1.406 0.844 0 1.406-0.562 1.406-1.406zM26.906 15.125c0-0.562-0.578-1.125-1.422-1.125-0.562 0-1.125 0.562-1.125 1.125 0 0.578 0.562 1.141 1.125 1.141 0.844 0 1.422-0.562 1.422-1.141zM22.75 8.922c-0.359-0.047-0.719-0.063-1.094-0.063-5.375 0-9.625 4.016-9.625 8.953 0 0.828 0.125 1.625 0.359 2.375-0.359 0.031-0.703 0.047-1.062 0.047-1.422 0-2.547-0.281-3.969-0.562l-3.953 1.984 1.125-3.406c-2.828-1.984-4.531-4.547-4.531-7.656 0-5.391 5.094-9.625 11.328-9.625 5.563 0 10.453 3.391 11.422 7.953zM32 17.687c0 2.547-1.687 4.813-3.969 6.516l0.859 2.828-3.109-1.703c-1.141 0.281-2.281 0.578-3.406 0.578-5.391 0-9.625-3.687-9.625-8.219s4.234-8.219 9.625-8.219c5.094 0 9.625 3.687 9.625 8.219z'
  },
  steam: {
    sizes: '0 0 32 32',
    content: 'M22 9c0-1.657 1.343-3 3-3s3 1.343 3 3c0 1.657-1.343 3-3 3s-3-1.343-3-3zM29.95 4.050c-2.734-2.734-7.166-2.734-9.9 0-1.112 1.112-1.771 2.505-1.979 3.95v0l-6.397 9.695c-0.86 0.044-1.712 0.263-2.499 0.657l-4.934-3.857c-1.142-0.893-2.792-0.691-3.685 0.451s-0.691 2.792 0.452 3.685l4.873 3.809c-0.53 2.087 0.021 4.392 1.654 6.025 2.466 2.466 6.464 2.466 8.929 0 1.515-1.515 2.098-3.607 1.752-5.568l7.783-6.968c1.445-0.207 2.838-0.867 3.95-1.979 2.734-2.734 2.734-7.166 0-9.899zM12 28.209c-2.325 0-4.209-1.884-4.209-4.209 0-0.022 0.001-0.044 0.002-0.066l2.091 1.634c0.48 0.375 1.049 0.557 1.615 0.557 0.78 0 1.552-0.346 2.070-1.009 0.893-1.142 0.691-2.792-0.451-3.685l-1.984-1.551c0.28-0.059 0.57-0.090 0.868-0.090 2.325 0 4.209 1.884 4.209 4.209s-1.885 4.209-4.209 4.209zM25 14c-2.761 0-5-2.239-5-5s2.239-5 5-5 5 2.239 5 5-2.239 5-5 5z'
  },
  gog: {
    sizes: '0 0 50 50',
    content: 'M 25 2 C 12.317 2 2 12.318 2 25 C 2 37.682 12.317 48 25 48 C 37.683 48 48 37.682 48 25 C 48 12.318 37.683 2 25 2 z M 11.599609 13 L 17.400391 13 C 18.283391 13 19 13.715609 19 14.599609 L 19 24.400391 C 19 25.284391 18.284391 26 17.400391 26 L 10 26 L 10 24 L 16.400391 24 C 16.731391 24 17 23.731391 17 23.400391 L 17 15.599609 C 17 15.268609 16.731391 15 16.400391 15 L 12.599609 15 C 12.268609 15 12 15.268609 12 15.599609 L 12 19.400391 C 12 19.731391 12.268609 20 12.599609 20 L 15.5 20 L 15.5 22 L 11.599609 22 C 10.716609 22 10 21.284391 10 20.400391 L 10 14.599609 C 10 13.715609 10.715609 13 11.599609 13 z M 22.099609 13 L 27.900391 13 C 28.782391 13 29.5 13.717609 29.5 14.599609 L 29.5 20.400391 C 29.5 21.282391 28.782391 22 27.900391 22 L 22.099609 22 C 21.217609 22 20.5 21.282391 20.5 20.400391 L 20.5 14.599609 C 20.5 13.717609 21.217609 13 22.099609 13 z M 32.599609 13 L 38.400391 13 C 39.283391 13 40 13.715609 40 14.599609 L 40 24.400391 C 40 25.284391 39.284391 26 38.400391 26 L 31 26 L 31 24 L 37.400391 24 C 37.731391 24 38 23.731391 38 23.400391 L 38 15.599609 C 38 15.268609 37.731391 15 37.400391 15 L 33.599609 15 C 33.268609 15 33 15.268609 33 15.599609 L 33 19.400391 C 33 19.731391 33.268609 20 33.599609 20 L 36.5 20 L 36.5 22 L 32.599609 22 C 31.716609 22 31 21.284391 31 20.400391 L 31 14.599609 C 31 13.715609 31.715609 13 32.599609 13 z M 23.099609 15 C 22.768609 15 22.5 15.268609 22.5 15.599609 L 22.5 19.400391 C 22.5 19.731391 22.768609 20 23.099609 20 L 26.900391 20 C 27.231391 20 27.5 19.731391 27.5 19.400391 L 27.5 15.599609 C 27.5 15.268609 27.231391 15 26.900391 15 L 23.099609 15 z M 11.599609 28 L 17.5 28 L 17.5 30 L 12.599609 30 C 12.268609 30 12 30.268609 12 30.599609 L 12 34.400391 C 12 34.731391 12.268609 35 12.599609 35 L 17.5 35 L 17.5 37 L 11.599609 37 C 10.716609 37 10 36.284391 10 35.400391 L 10 29.599609 C 10 28.716609 10.715609 28 11.599609 28 z M 20.599609 28 L 26.400391 28 C 27.282391 28 28 28.717609 28 29.599609 L 28 35.400391 C 28 36.282391 27.282391 37 26.400391 37 L 20.599609 37 C 19.717609 37 19 36.282391 19 35.400391 L 19 29.599609 C 19 28.717609 19.717609 28 20.599609 28 z M 31.099609 28 L 40 28 L 40 37 L 38 37 L 38 30 L 36.349609 30 C 36.018609 30 35.75 30.268609 35.75 30.599609 L 35.75 37 L 33.75 37 L 33.75 30 L 32.099609 30 C 31.768609 30 31.5 30.268609 31.5 30.599609 L 31.5 37 L 29.5 37 L 29.5 29.599609 C 29.5 28.716609 30.215609 28 31.099609 28 z M 21.599609 30 C 21.268609 30 21 30.268609 21 30.599609 L 21 34.400391 C 21 34.731391 21.268609 35 21.599609 35 L 25.400391 35 C 25.731391 35 26 34.731391 26 34.400391 L 26 30.599609 C 26 30.268609 25.731391 30 25.400391 30 L 21.599609 30 z'
  }
}

export default {
  functional: true,
  props: {
    name: {
      type: String,
      required: true,
      validator: (val) => {
        if (!(val in icons) && process.env.NODE_ENV !== 'production') {
          console.warn(`Invalid icon name "${val}"`)
          return false
        }

        return true
      }
    }
  },
  render (h, { props }) {
    let dAttr = icons[props.name]
    let viewBoxAttr = '0 0 24 24'

    if (typeof icons[props.name] === 'object') {
      if (icons[props.name].hasOwnProperty('content')) {
        dAttr = icons[props.name]['content']
      }

      if (icons[props.name].hasOwnProperty('sizes')) {
        viewBoxAttr = icons[props.name]['sizes']
      }
    }

    const path = h('path', {
      attrs: {
        d: dAttr
      }
    })

    return h(
      'svg',
      {
        attrs: {
          version: '1.1',
          xmlns: 'http://www.w3.org/2000/svg',
          class: 'vuse-icon' + ' vuse-icon_'+ props.name,
          viewBox: viewBoxAttr
        }
      },
      [path]
    )
  }
}
