import React from 'react';

const TransportIcon = ({ iconId, className = "", ariaLabel }) => {
  // SVG symbol definitions with actual paths
  const icons = {
    'bvg-u6': (
      <>
        <rect width="24" height="14.2222" y="0.888916" fill="#95559A"/>
        <path d="M11.8291 9.35046C11.8291 12.1425 10.2621 13.265 7.57835 13.265C4.89459 13.265 3.32764 12.1425 3.32764 9.35046V2.71228H5.40171V8.71798C5.40171 10.5072 5.97151 11.6638 7.57265 11.6638C9.17379 11.6638 9.7151 10.5072 9.7151 8.71798V2.71228H11.8234V9.35615L11.8291 9.35046Z" fill="white"/>
        <path d="M17.7778 13.3163C15.037 13.3163 14.3077 11.1909 14.3077 8.45017C14.3077 5.70943 15.2934 2.56983 18.6667 2.56983C19.4416 2.56983 20.1425 2.66669 20.8376 2.9231L20.5983 4.61541C20.0285 4.34761 19.4587 4.18806 18.7578 4.18806C16.9516 4.18806 16.3647 5.88607 16.302 7.42453L16.3191 7.47011C16.8262 6.70658 17.4758 6.39319 18.3647 6.39319C20.3305 6.39319 21.4074 7.61256 21.4074 9.57838C21.4074 11.7664 20.2051 13.3163 17.7778 13.3163Z" fill="white"/>
        <path d="M17.8692 7.94287C16.8549 7.94287 16.4561 8.87734 16.4561 9.74914C16.4561 10.8773 16.8663 11.7605 17.9147 11.7605C18.8834 11.7605 19.2766 10.809 19.2766 9.89159C19.2766 8.87734 18.8777 7.94287 17.8635 7.94287H17.8692Z" fill="#95559A"/>
      </>
    ),
    'bvg-m5': (
      <>
        <rect width="26" height="15" y="0.5" fill="#E80029"/>
        <path d="M13.3391 12.5H11.7965V5.98296H11.7726L9.82349 12.5H8.44833L6.48724 5.98296H6.46332V12.5H4.94467V3.91424H7.24059L9.10601 10.3356H9.12993L11.0671 3.91424H13.3391V12.5ZM20.7094 9.58228C20.7094 11.5075 19.4179 12.6435 17.5286 12.6435C16.1893 12.6435 15.2446 12.2489 14.5271 10.9933L15.8186 10.3117C16.2132 11.1248 16.7393 11.376 17.4807 11.376C18.5689 11.376 19.1429 10.6226 19.1429 9.59424C19.1429 8.56586 18.5809 7.93209 17.5884 7.93209C16.9068 7.93209 16.4882 8.25495 16.2012 8.7811L14.9217 8.54194L15.2566 3.91424H20.1115V5.20569H16.4045L16.2491 7.31028H16.273C16.8231 6.86784 17.3612 6.71239 18.0069 6.71239C19.7169 6.71239 20.7094 7.82447 20.7094 9.58228Z" fill="white"/>
      </>
    ),
    'bvg-m8': (
      <>
        <rect width="26" height="15" y="0.5" fill="#E80029"/>
        <path d="M13.3391 12.5H11.7965V5.98296H11.7726L9.82349 12.5H8.44833L6.48724 5.98296H6.46332V12.5H4.94467V3.91424H7.24059L9.10601 10.3356H9.12993L11.0671 3.91424H13.3391V12.5ZM20.9366 10.1682C20.9366 11.7467 19.6571 12.6435 17.696 12.6435C15.699 12.6435 14.4793 11.7227 14.4793 10.2041C14.4793 9.39095 14.9217 8.62565 16.273 8.06363V8.03971C15.4718 7.6451 14.838 7.09504 14.838 6.03079C14.838 4.72738 15.8784 3.77075 17.7318 3.77075C19.6332 3.77075 20.6257 4.61976 20.6257 5.95904C20.6257 6.79609 20.1593 7.46573 19.1907 7.89622V7.92013C20.4463 8.45824 20.9366 9.18767 20.9366 10.1682ZM19.4418 10.1563C19.4418 9.28333 18.5689 8.93655 17.6123 8.58977C16.6676 8.93655 15.974 9.43878 15.974 10.1443C15.974 10.9335 16.6676 11.4238 17.696 11.4238C18.8081 11.4238 19.4418 10.9216 19.4418 10.1563ZM19.1907 6.06666C19.1907 5.39702 18.6765 4.93066 17.7318 4.93066C16.7752 4.93066 16.2849 5.44485 16.2849 6.07862C16.2849 6.82001 17.0622 7.13091 17.9471 7.44182C18.6287 7.15483 19.1907 6.78413 19.1907 6.06666Z" fill="white"/>
      </>
    ),
    'bvg-m10': (
      <>
        <rect width="33" height="15" y="0.5" fill="#E80029"/>
        <path d="M13.3391 12.5H11.7965V5.98296H11.7726L9.82349 12.5H8.44833L6.48724 5.98296H6.46332V12.5H4.94467V3.91424H7.24059L9.10601 10.3356H9.12993L11.0671 3.91424H13.3391V12.5ZM20.0756 12.5H15.699V11.2564H17.11V5.39702L15.4359 5.62422V4.61976L17.6362 3.91424H18.6646V11.2564H20.0756V12.5ZM24.5863 12.6435C22.6611 12.6435 21.561 11.1129 21.561 8.25495C21.561 5.43289 22.5894 3.77075 24.5863 3.77075C26.5713 3.77075 27.6117 5.43289 27.6117 8.25495C27.6117 11.1129 26.5115 12.6435 24.5863 12.6435ZM24.5863 11.3999C25.5669 11.3999 26.0452 10.3595 26.0452 8.25495C26.0452 6.06666 25.5669 5.00241 24.5863 5.00241C23.6058 5.00241 23.1275 6.06666 23.1275 8.25495C23.1275 10.3595 23.6058 11.3999 24.5863 11.3999Z" fill="white"/>
      </>
    ),
    'bvg-bus': (
      <>
        <path d="M5.06865 10.8047C5.06865 10.2671 4.72785 10.0559 4.20945 10.0559H3.86865V11.5391H4.20945C4.72785 11.5391 5.06865 11.2367 5.06865 10.8095V10.8047Z" fill="#95559A"/>
        <path d="M9.8688 2.1311C4.4256 2.1311 0 6.5567 0 11.9999C0 17.4431 4.4256 21.8687 9.8688 21.8687C15.312 21.8687 19.7376 17.4431 19.7376 11.9999C19.7376 6.5567 15.312 2.1311 9.8688 2.1311ZM4.3008 15.4079H2.1792V8.8271H4.464C6.0864 8.8271 6.768 9.5423 6.768 10.4879C6.768 11.3231 6.3744 11.7551 5.592 12.0047C6.4128 12.1295 6.8208 12.6815 6.8208 13.5599C6.8208 14.8079 5.9808 15.4127 4.3056 15.4127L4.3008 15.4079ZM12.7968 12.9983C12.7968 14.5679 11.9232 15.4799 10.3008 15.4799C8.5872 15.4799 7.7856 14.5871 7.7856 13.2479V8.8223H9.5712V13.0319C9.5712 13.7615 9.8208 14.1023 10.3392 14.1023C10.9104 14.1023 11.1408 13.7807 11.1408 12.9071V8.8223H12.8016V12.9983H12.7968ZM15.6336 15.4799C15.024 15.4751 14.4192 15.4031 13.8288 15.2687L13.92 13.8239C14.376 14.0255 14.8704 14.1215 15.3648 14.1119C15.9168 14.1119 16.2912 13.9343 16.2912 13.5407C16.2912 13.1471 16.0944 12.9503 15.1152 12.6143C14.1696 12.2927 13.704 11.6303 13.704 10.6847C13.704 9.5087 14.6496 8.7551 16.0752 8.7551C16.6512 8.7599 17.2272 8.8319 17.7888 8.9711L17.7168 10.2575C17.2971 10.0598 16.8413 9.9503 16.3776 9.9359C15.7872 9.9359 15.5232 10.1855 15.5232 10.5407C15.5232 10.8815 15.7392 11.1119 16.6128 11.4527C17.7168 11.8799 18.1296 12.4511 18.1296 13.3439C18.1296 14.6303 17.2032 15.4847 15.6336 15.4847V15.4799Z" fill="#95559A"/>
        <path d="M4.41122 12.624H3.87842V14.2128H4.37762C4.89602 14.2128 5.16482 13.9296 5.16482 13.4304C5.16482 12.9312 4.96802 12.6288 4.41602 12.6288L4.41122 12.624Z" fill="#95559A"/>
      </>
    ),
    'person-walking': (
      <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7" fill="currentColor"/>
    )
  };

  // Get the viewBox based on icon type
  const viewBoxMap = {
    'bvg-u6': "0 0 24 16",
    'bvg-m5': "0 0 26 16",
    'bvg-m8': "0 0 26 16",
    'bvg-m10': "0 0 33 16",
    'bvg-bus': "0 0 20 24",
    'person-walking': "0 0 24 24"
  };

  return (
    <svg 
      className={`inline px-[0.1em] h-[15px] w-[24px] m-0 mt-[-3px] ${className}`}
      aria-label={ariaLabel}
      viewBox={viewBoxMap[iconId]}
    >
      {icons[iconId]}
    </svg>
  );
};

export default TransportIcon; 