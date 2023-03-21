export function useSwitcher<T>(repository: T, mockRepository: T) {
    return process.env.NEXT_PUBLIC_USE_MOCK === 'true' ? mockRepository : repository
}