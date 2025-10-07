import {API_URL} from "@/constants";

export async function getSliderData() {
    const res = await fetch(`${API_URL}/slider`, {
        next: {
            revalidate: 300
        }
    } as RequestInit)

    if (!res.ok) {
        throw new Error('Failed to fetch layout data')
    }

    return res.json()
}
