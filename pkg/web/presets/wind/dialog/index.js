export default {
  root: ({ state }) => ({
    class: [
      // Shape
      'rounded-lg',
      'shadow-xl',
      'border-0',

      // Size
      'max-h-[90vh]',
      { 'sm:w-full sm:max-w-lg': !state.maximized },
      'm-0',

      // Transitions
      'transform',
      'scale-100',

      // Color
      'dark:border',
      'dark:border-surface-700',

      // Maximized State
      {
        'transition-none': state.maximized,
        'transform-none': state.maximized,
        '!w-screen': state.maximized,
        '!h-screen': state.maximized,
        '!max-h-full': state.maximized,
        '!top-0': state.maximized,
        '!left-0': state.maximized,
      },
    ],
  }),
  header: {
    class: [
      // Flexbox and Alignment
      'flex items-center justify-between',
      'shrink-0',

      // Spacing
      'p-6 pt-4',

      // Shape
      'rounded-tl-lg',
      'rounded-tr-lg',

      // Colors
      'bg-surface-0 dark:bg-surface-800',
      'text-surface-700 dark:text-surface-0/80',
    ],
  },
  title: {
    class: ['font-semibold text-base leading-6'],
  },
  icons: {
    class: ['flex items-center'],
  },
  closeButton: {
    class: [
      'relative',

      // Flexbox and Alignment
      'flex items-center justify-center',

      // Size and Spacing
      'mr-2',
      'last:mr-0',
      'w-6 h-6',

      // Shape
      'border-0',
      'rounded-full',

      // Colors
      'text-surface-500',
      'bg-transparent',

      // Transitions
      'transition duration-200 ease-in-out',

      // States
      'hover:text-surface-700 dark:hover:text-white/80',
      'hover:bg-surface-100 dark:hover:bg-surface-800/80',
      'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-inset',
      'focus:ring-primary-500 dark:focus:ring-primary-400',

      // Misc
      'overflow-hidden',
    ],
  },
  maximizablebutton: {
    class: [
      'relative',

      // Flexbox and Alignment
      'flex items-center justify-center',

      // Size and Spacing
      'mr-2',
      'last:mr-0',
      'w-6 h-6',

      // Shape
      'border-0',
      'rounded-full',

      // Colors
      'text-surface-500',
      'bg-transparent',

      // Transitions
      'transition duration-200 ease-in-out',

      // States
      'hover:text-surface-700 dark:hover:text-white/80',
      'hover:bg-surface-100 dark:hover:bg-surface-800/80',
      'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-inset',
      'focus:ring-primary-500 dark:focus:ring-primary-400',

      // Misc
      'overflow-hidden',
    ],
  },
  closeButtonIcon: {
    class: [
      // Display
      'inline-block',

      // Size
      'w-3',
      'h-3',
    ],
  },
  maximizableicon: {
    class: [
      // Display
      'inline-block',

      // Size
      'w-3',
      'h-3',
    ],
  },
  content: ({ state, instance }) => ({
    class: [
      // Font
      'text-sm',
      // Spacing
      'px-6',
      'pb-3',
      'pt-0',

      // Shape
      {
        'grow': state.maximized,
        'rounded-bl-lg': !instance.$slots.footer,
        'rounded-br-lg': !instance.$slots.footer,
      },

      // Colors
      'bg-surface-0 dark:bg-surface-800',
      'text-surface-600 dark:text-surface-0/70',

      // Misc
      'overflow-y-auto',
    ],
  }),
  footer: {
    class: [
      // Flexbox and Alignment
      'flex items-center justify-end',
      'shrink-0',
      'text-right',
      'gap-3',

      // Spacing
      'px-6',
      'py-3',

      // Shape
      'border-t-0',
      'rounded-b-lg',

      // Colors
      'bg-surface-50 dark:bg-surface-700',
      'text-surface-700 dark:text-surface-0/80',
    ],
  },
  mask: ({ props }) => ({
    class: [
      // Transitions
      'transition',
      'duration-300',
      { 'p-5': !props.position == 'full' },

      // Background and Effects
      { 'has-[.mask-active]:bg-transparent dark:has-[.mask-active]:bg-transparent bg-surface-500/70 dark:bg-surface-700/70': props.modal, 'has-[.mask-active]:backdrop-blur-none backdrop-blur-sm': props.modal },
    ],
  }),
  transition: ({ props }) => {
    return props.position === 'top'
      ? {
          enterFromClass: 'opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0 mask-active',
          enterActiveClass: 'transition-all duration-200 ease-out',
          leaveActiveClass: 'transition-all duration-200 ease-out',
          leaveToClass: 'opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0 mask-active',
        }
      : props.position === 'bottom'
        ? {
            enterFromClass: 'opacity-0 scale-75 translate-y-full mask-active',
            enterActiveClass: 'transition-all duration-200 ease-out',
            leaveActiveClass: 'transition-all duration-200 ease-out',
            leaveToClass: 'opacity-0 scale-75 translate-x-0 translate-y-full translate-z-0 mask-active',
          }
        : props.position === 'left' || props.position === 'topleft' || props.position === 'bottomleft'
          ? {
              enterFromClass: 'opacity-0 scale-75 -translate-x-full translate-y-0 translate-z-0 mask-active',
              enterActiveClass: 'transition-all duration-200 ease-out',
              leaveActiveClass: 'transition-all duration-200 ease-out',
              leaveToClass: 'opacity-0 scale-75  -translate-x-full translate-y-0 translate-z-0 mask-active',
            }
          : props.position === 'right' || props.position === 'topright' || props.position === 'bottomright'
            ? {
                enterFromClass: 'opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0 mask-active',
                enterActiveClass: 'transition-all duration-200 ease-out',
                leaveActiveClass: 'transition-all duration-200 ease-out',
                leaveToClass: 'opacity-0 scale-75 opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0 mask-active',
              }
            : {
                enterFromClass: 'opacity-0 scale-75 mask-active',
                enterActiveClass: 'transition-all duration-200 ease-out',
                leaveActiveClass: 'transition-all duration-200 ease-out',
                leaveToClass: 'opacity-0 scale-75 mask-active',
              }
  },
}
