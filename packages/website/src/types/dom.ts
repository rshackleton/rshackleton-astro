declare global {
  interface Navigator {
    connection?: {
      effectiveType?: string;
    };
  }
}

export {};
