interface Window {
  google: {
    accounts: {
      id: {
        initialize: (config: {
          client_id: string;
          callback: (response: any) => void;
          auto_select: boolean;
          login_uri: string;
        }) => void;
        renderButton: (element: HTMLElement, options: Record<string, any>) => void;
      };
    };
  };
}
