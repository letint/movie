export function formatToYear(date: string): string {
    return new Date(date).getFullYear().toString();
}