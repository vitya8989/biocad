import {API_URL} from "@/constants";

export async function getMenuData() {
    const res = await fetch(`${API_URL}/navigation`, {
        next: {
            revalidate: 300
        }
    } as RequestInit)

    if (!res.ok) {
        throw new Error('Failed to fetch layout data')
    }

    return res.json()
}
