export default interface Guest {
    id: string;
    name: string;
    email: string;
    confirm: boolean
    hasCompanion: boolean;
    companionCount: number;
}