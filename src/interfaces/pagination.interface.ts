export interface IPagination<T> {
    total_results: number;
    total_pages: number;
    prev: string;
    next: string;
    results: T;
}