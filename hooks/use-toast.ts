/**
 * Toast Hook
 * 
 * Custom React hook for managing toast notifications.
 * Inspired by react-hot-toast library, provides a global toast system
 * with actions, updates, and automatic dismissal.
 * 
 * Features:
 * - Add, update, dismiss, and remove toasts
 * - Automatic removal after delay
 * - Limit on number of concurrent toasts
 * - State management via reducer pattern
 */

'use client';

// Inspired by react-hot-toast library
import * as React from 'react';

import type { ToastActionElement, ToastProps } from '@/components/ui/toast';

/** Maximum number of toasts to display simultaneously */
const TOAST_LIMIT = 1;

/** Delay in milliseconds before automatically removing a toast */
const TOAST_REMOVE_DELAY = 1000000;

/**
 * Extended toast type with additional properties
 */
type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

/**
 * Action types for toast state management
 */
const actionTypes = {
  ADD_TOAST: 'ADD_TOAST',
  UPDATE_TOAST: 'UPDATE_TOAST',
  DISMISS_TOAST: 'DISMISS_TOAST',
  REMOVE_TOAST: 'REMOVE_TOAST',
} as const;

/** Counter for generating unique toast IDs */
let count = 0;

/**
 * Generates a unique ID for each toast
 * @returns Unique string ID
 */
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

type ActionType = typeof actionTypes;

type Action =
  | {
      type: ActionType['ADD_TOAST'];
      toast: ToasterToast;
    }
  | {
      type: ActionType['UPDATE_TOAST'];
      toast: Partial<ToasterToast>;
    }
  | {
      type: ActionType['DISMISS_TOAST'];
      toastId?: ToasterToast['id'];
    }
  | {
      type: ActionType['REMOVE_TOAST'];
      toastId?: ToasterToast['id'];
    };

interface State {
  toasts: ToasterToast[];
}

/** Map storing timeout references for each toast's auto-removal */
const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

/**
 * Schedules a toast for automatic removal after the delay period
 * @param toastId - ID of the toast to schedule for removal
 */
const addToRemoveQueue = (toastId: string) => {
  // Prevent duplicate scheduling
  if (toastTimeouts.has(toastId)) {
    return;
  }

  // Schedule removal after delay
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: 'REMOVE_TOAST',
      toastId: toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

/**
 * Reducer function for managing toast state
 * Handles all toast-related actions: add, update, dismiss, and remove
 * 
 * @param state - Current toast state
 * @param action - Action to perform
 * @returns New state after applying the action
 */
export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_TOAST':
      // Add new toast to the beginning and limit total count
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case 'UPDATE_TOAST':
      // Update existing toast by ID
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      };

    case 'DISMISS_TOAST': {
      const { toastId } = action;

      // Schedule toast(s) for removal after delay
      // If toastId is provided, dismiss that specific toast
      // Otherwise, dismiss all toasts
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id);
        });
      }

      // Mark toast(s) as closed
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      };
    }
    case 'REMOVE_TOAST':
      // Remove toast(s) from state
      // If toastId is undefined, remove all toasts
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }
      // Remove specific toast by ID
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
  }
};

/** Array of state listeners for notifying components of state changes */
const listeners: Array<(state: State) => void> = [];

/** In-memory state store for toast notifications */
let memoryState: State = { toasts: [] };

/**
 * Dispatches an action and notifies all listeners of state changes
 * @param action - Action to dispatch
 */
function dispatch(action: Action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

/** Toast type without the id field (id is generated automatically) */
type Toast = Omit<ToasterToast, 'id'>;

/**
 * Creates and displays a new toast notification
 * 
 * @param props - Toast properties (title, description, action, etc.)
 * @returns Object with toast id, dismiss function, and update function
 */
function toast({ ...props }: Toast) {
  const id = genId();

  // Function to update this specific toast
  const update = (props: ToasterToast) =>
    dispatch({
      type: 'UPDATE_TOAST',
      toast: { ...props, id },
    });
  
  // Function to dismiss this specific toast
  const dismiss = () => dispatch({ type: 'DISMISS_TOAST', toastId: id });

  // Add the toast to state
  dispatch({
    type: 'ADD_TOAST',
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        // Auto-dismiss when toast is closed
        if (!open) dismiss();
      },
    },
  });

  return {
    id: id,
    dismiss,
    update,
  };
}

/**
 * React hook for accessing toast functionality
 * 
 * Subscribes to toast state changes and provides methods to
 * create, update, and dismiss toasts.
 * 
 * @returns Object containing current toast state and toast management functions
 */
function useToast() {
  const [state, setState] = React.useState<State>(memoryState);

  // Subscribe to state changes
  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      // Cleanup: remove listener on unmount
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: 'DISMISS_TOAST', toastId }),
  };
}

export { useToast, toast };
