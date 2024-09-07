import { useMetaMaskContext } from './MetamaskContext';

export type Request = (params: any) => Promise<unknown | null>;

/**
 * Utility hook to consume the provider `request` method with the available provider.
 *
 * @returns The `request` function.
 */
export const useRequest = () => {
  const { provider, setError } = useMetaMaskContext();

  /**
   * `provider.request` wrapper.
   *
   * @param params - The request params.
   * @param params.method - The method to call.
   * @param params.params - The method params.
   * @returns The result of the request.
   */
  const request: Request = async ({ method, params }) => {
    try {
      const data =
        (await provider?.request({
          method,
          params,
        } as any)) ?? null;

      return data;
    } catch (requestError: any) {
      setError(requestError);

      return null;
    }
  };

  return request;
};
